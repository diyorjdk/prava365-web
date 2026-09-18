import { APP_LINKS } from '@/constants/links'

export function GooglePlayButton({ theme = 'dark', className = '' }) {
  const isDark = theme === 'dark'

  return (
    <a
      href={APP_LINKS.playStore}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md ${
        isDark
          ? 'bg-slate-900 hover:bg-black text-white border border-slate-800 hover:border-slate-700'
          : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm'
      } ${className}`}
      aria-label="Google Play do‘konidan yuklab olish"
    >
      {/* Official Google Play Vector Icon */}
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M3.6 1.4C3.2 1.8 3 2.4 3 3.1v17.8c0 .7.2 1.3.6 1.7l.1.1 10-10v-.2L3.7 1.3l-.1.1z" />
        <path fill="#FBBC04" d="M17.1 16.1l-3.4-3.4v-.2l3.4-3.4.1.1 4 2.3c1.1.6 1.1 1.7 0 2.3l-4.1 2.3z" />
        <path fill="#EA4335" d="M13.7 12.5l-10 10c.4.4 1 .4 1.7.1l11.7-6.7-3.4-3.4z" />
        <path fill="#34A853" d="M13.7 11.5l3.4-3.4L5.4 1.4C4.7 1 4.1 1.1 3.7 1.4l10 10.1z" />
      </svg>
      <div className="flex flex-col text-left">
        <span className={`text-[10px] uppercase font-semibold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Yuklab oling
        </span>
        <span className="text-sm font-extrabold tracking-tight leading-none mt-0.5">
          Google Play
        </span>
      </div>
    </a>
  )
}

export function AppStoreButton({ theme = 'dark', className = '' }) {
  const isDark = theme === 'dark'

  return (
    <a
      href={APP_LINKS.appStore}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md ${
        isDark
          ? 'bg-slate-900 hover:bg-black text-white border border-slate-800 hover:border-slate-700'
          : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm'
      } ${className}`}
      aria-label="App Store do‘konidan yuklab olish"
    >
      {/* Official Apple Vector Icon */}
      <svg className="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-.99 1.68-.86 2.7 1.01.08 2.03-.5 2.55-1.19z" />
      </svg>
      <div className="flex flex-col text-left">
        <span className={`text-[10px] uppercase font-semibold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Yuklab oling
        </span>
        <span className="text-sm font-extrabold tracking-tight leading-none mt-0.5">
          App Store
        </span>
      </div>
    </a>
  )
}

export default function AppStoreButtons({ theme = 'dark', className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <GooglePlayButton theme={theme} />
      <AppStoreButton theme={theme} />
    </div>
  )
}
