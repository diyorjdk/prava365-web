import { Send, Sparkles, CheckCircle2 } from 'lucide-react'
import { GooglePlayButton, AppStoreButton } from '@/components/common/AppStoreButtons'
import { APP_LINKS } from '@/constants/links'

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative rounded-3xl sm:rounded-[3rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 sm:p-16 text-center text-white overflow-hidden shadow-2xl shadow-blue-500/25">
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-blue-100 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Muvaffaqiyat kaliti qo‘lingizda</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight leading-tight">
            Bugun yuklab oling, ertaga prava oling!
          </h2>

          <p className="text-base sm:text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Avtomaktab imtihonini xotirjam va ishonch bilan topshirish uchun hoziroq ilovani bepul yuklab oling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <GooglePlayButton theme="light" className="w-full sm:w-auto justify-center" />
            <AppStoreButton theme="light" className="w-full sm:w-auto justify-center" />
            <a
              href={APP_LINKS.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 text-blue-200" />
              <span>Telegram Bot</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              100% Bepul
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              Ro‘yxatdan o‘tish shart emas
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              Android va iOS qo‘llab-quvvatlanadi
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
