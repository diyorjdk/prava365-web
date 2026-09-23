import { useEffect, useState } from 'react'
import { ThemeContext, THEME_STORAGE_KEY } from './theme-context'

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'system'
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY)
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored
      }
    } catch {
      // ignore
    }
    return 'system'
  })

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY)
      if (stored === 'dark') return 'dark'
      if (stored === 'light') return 'light'
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })

  const setTheme = (newTheme) => {
    setThemeState(newTheme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    const root = document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const metaThemeColor = document.getElementById('theme-color-meta')

    const applyTheme = (isDark) => {
      if (isDark) {
        root.classList.add('dark')
        setResolvedTheme('dark')
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#020617')
      } else {
        root.classList.remove('dark')
        setResolvedTheme('light')
        if (metaThemeColor) metaThemeColor.setAttribute('content', '#2563eb')
      }
    }

    if (theme === 'system') {
      applyTheme(mediaQuery.matches)

      const handleChange = (e) => {
        applyTheme(e.matches)
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } else {
      applyTheme(theme === 'dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
