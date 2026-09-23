import { createContext } from 'react'

export const THEME_STORAGE_KEY = 'prava365_theme'

export const ThemeContext = createContext({
  theme: 'system',
  setTheme: () => null,
  resolvedTheme: 'light',
})
