import { useCallback, useState } from "react"
import { LocaleProvider } from "./context/LocaleContext.jsx"
import { ReadyContext } from "./context/ReadyContext.jsx"
import { useLenis } from "./hooks/useLenis.js"
import { useSound } from "./hooks/useSound.js"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Loader from "./components/Loader/Loader.jsx"
import CreditPopup from "./components/CreditPopup/CreditPopup.jsx"
import ScrollProgress from "./components/ScrollProgress/ScrollProgress.jsx"
import Home from "./pages/Home/Home.jsx"

export default function App() {
  const [ready, setReady] = useState(false)
  const { on, toggle } = useSound()
  useLenis()

  const finish = useCallback(() => setReady(true), [])

  return (
    <LocaleProvider>
      <ReadyContext.Provider value={ready}>
        <a className="skip-link" href="#main">
          К содержанию
        </a>
        {!ready && <Loader onDone={finish} />}
        {ready && <CreditPopup />}
        <ScrollProgress />
        <Header soundOn={on} onSound={toggle} />
        <main id="main">
          <Home />
        </main>
        <Footer />
      </ReadyContext.Provider>
    </LocaleProvider>
  )
}
