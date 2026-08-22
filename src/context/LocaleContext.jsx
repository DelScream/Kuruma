import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { copy } from "../data/copy.js"

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [lang, setLang] = useState("ru")

  useEffect(() => {
    document.documentElement.lang = lang === "jp" ? "ja" : "ru"
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: copy[lang],
    }),
    [lang],
  )
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  return useContext(LocaleContext)
}
