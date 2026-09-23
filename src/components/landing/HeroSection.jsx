import { Star, ShieldCheck, Send } from 'lucide-react'
import InteractiveQuestionDemo from './InteractiveQuestionDemo'
import { GooglePlayButton, AppStoreButton } from '@/components/common/AppStoreButtons'
import { APP_LINKS } from '@/constants/links'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 transition-colors duration-200">
      {/* Background soft ambient blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Live updated badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 dark:bg-blue-950/60 dark:border-blue-800/80 dark:text-blue-300 text-xs font-semibold mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">2026-yilgi Rasmiy YHQ Savollari</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.15] mb-6">
              Prava test va YHQ imtihonini{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                birinchi urinishdayoq
              </span>{' '}
              topshiring!
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Prava 365 — O‘zbekistonda <strong>haydovchilik guvohnomasi</strong> olish uchun rasmiy <strong>yo‘l harakati qoidalari</strong>, <strong>avto test</strong> bazasi, <strong>130 ta bilet</strong> hamda real GAI imtihon simulyatori jamlangan platforma va mobil ilova.
            </p>

            {/* App Store & Play Store CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
              <GooglePlayButton theme="dark" className="w-full sm:w-auto justify-center" />
              <AppStoreButton theme="dark" className="w-full sm:w-auto justify-center" />
              <a
                href={APP_LINKS.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 font-bold text-xs transition-all duration-200"
              >
                <Send className="w-4 h-4 text-blue-500" />
                <span>Telegram Bot</span>
              </a>
            </div>

            {/* Social proof & Guarantee */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 dark:text-slate-400">
              {/* Avatars */}
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                    AB
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                    SH
                  </div>
                  <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                    DK
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                    +50k
                  </div>
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200">50,000+ yuklab olishlar</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span>4.9 / 5 reyting</span>
              </div>

              {/* 100% Guaranteed */}
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>IIV GAI standartida</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Demo */}
          <div className="lg:col-span-5 flex justify-center">
            <InteractiveQuestionDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
