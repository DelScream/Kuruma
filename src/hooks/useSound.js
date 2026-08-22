import { useCallback, useEffect, useRef, useState } from "react"

function createNoise(ctx) {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1
  const source = ctx.createBufferSource()
  source.buffer = buffer
  source.loop = true
  return source
}

export function useSound() {
  const ctxRef = useRef(null)
  const nodesRef = useRef(null)
  const [on, setOn] = useState(false)

  const stop = useCallback(() => {
    if (!nodesRef.current) return
    nodesRef.current.master.gain.setTargetAtTime(0, ctxRef.current.currentTime, 0.08)
    setOn(false)
  }, [])

  const start = useCallback(async () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    if (!ctxRef.current) ctxRef.current = new AudioCtx()
    const ctx = ctxRef.current
    if (ctx.state === "suspended") await ctx.resume()

    if (!nodesRef.current) {
      const master = ctx.createGain()
      master.gain.value = 0
      master.connect(ctx.destination)

      const rain = createNoise(ctx)
      const rainFilter = ctx.createBiquadFilter()
      rainFilter.type = "highpass"
      rainFilter.frequency.value = 900
      const rainGain = ctx.createGain()
      rainGain.gain.value = 0.045
      rain.connect(rainFilter)
      rainFilter.connect(rainGain)
      rainGain.connect(master)

      const city = createNoise(ctx)
      const cityFilter = ctx.createBiquadFilter()
      cityFilter.type = "lowpass"
      cityFilter.frequency.value = 180
      const cityGain = ctx.createGain()
      cityGain.gain.value = 0.03
      city.connect(cityFilter)
      cityFilter.connect(cityGain)
      cityGain.connect(master)

      const engine = ctx.createOscillator()
      engine.type = "sawtooth"
      engine.frequency.value = 42
      const engineFilter = ctx.createBiquadFilter()
      engineFilter.type = "lowpass"
      engineFilter.frequency.value = 90
      const engineGain = ctx.createGain()
      engineGain.gain.value = 0.018
      engine.connect(engineFilter)
      engineFilter.connect(engineGain)
      engineGain.connect(master)

      rain.start()
      city.start()
      engine.start()
      nodesRef.current = { master }
    }

    nodesRef.current.master.gain.setTargetAtTime(1, ctx.currentTime, 0.2)
    setOn(true)
  }, [])

  const toggle = useCallback(() => {
    if (on) stop()
    else start()
  }, [on, start, stop])

  useEffect(() => () => {
    if (ctxRef.current) ctxRef.current.close()
  }, [])

  return { on, toggle }
}
