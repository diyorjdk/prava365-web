import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'Prava365 platformasidan foydalanish pullikmi?',
      a: 'Yo‘q, platformadagi barcha xizmatlar — 130 ta biletlarni yechish, haqiqiy imtihon simulyatori, yo‘l belgilari katalogi va xatolar tahlili mutlaqo bepul taqdim etiladi.',
    },
    {
      q: 'Test savollari 2026-yilgi yangilangan qoidalarga mosmi?',
      a: 'Ha, savollar bazasi Yo‘l harakati xavfsizligi xizmati (GAI) tomonidan tasdiqlangan eng so‘nggi rasmiy savollar va yangi tahrirdagi YHQ asosida doimiy yangilab boriladi.',
    },
    {
      q: 'Haqiqiy imtihon simulyatori qanday ishlaydi?',
      a: 'Imtihon simulyatorida xuddi rasmiy imtihon zalidagidek 20 ta tasodifiy savol beriladi va 20 daqiqa vaqt belgilanadi. Agar 2 tadan ko‘p xato qilinsa, test yakunlanadi. Bu sizni psixologik va bilim jihatdan tayyorlaydi.',
    },
    {
      q: 'Telefon orqali ham foydalanish qulaymi?',
      a: 'Albatta! Saytimiz mobil qurilmalarga 100% moslashtirilgan. Shuningdek, internet sekin bo‘lgan vaziyatlar uchun maxsus rasmiy Telegram botimiz ham mavjud.',
    },
    {
      q: 'Xatolarimni qanday tahlil qila olaman?',
      a: 'Har bir test yoki bilet topshirilgach, qaysi savolda qanday xatoga yo‘l qo‘yganingiz, to‘g‘ri javob qaysi ekanligi va YHQ bandi bo‘yicha tushuntirish matni darhol ekranda namoyon bo‘ladi.',
    },
  ]

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Savol-Javoblar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Ko‘p so‘raladigan savollar
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Foydalanuvchilarimiz tomonidan eng ko‘p beriladigan savollarga aniq javoblar
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
