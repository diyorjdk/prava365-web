import { 
  Timer, 
  Layers, 
  Compass, 
  AlertTriangle, 
  Calculator, 
  Smartphone,
  ArrowRight
} from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      title: 'Haqiqiy Imtihon Simulyatori',
      desc: '20 ta savol, 20 daqiqalik vaqt va maksimal 2 tagacha xato qilish imkoni. Xuddi rasmiy GAI imtihon zalidagi muhitda o‘zingizni sinab ko‘ring.',
      icon: Timer,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      badge: 'Eng Mashhur',
    },
    {
      title: '130 ta Biletlar',
      desc: 'Barcha mavzular bo‘yicha tartiblangan 130 ta bilet. Har bir biletni alohida topshiring va qaysi mavzularda bilimingiz kamligini aniqlang.',
      icon: Layers,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    {
      title: 'Yo‘l Belgilari & Chiziqlari',
      desc: 'Ogohlantiruvchi, imtiyozli, taqiqlovchi, buyuruvchi va boshqa barcha belgi hamda chiziqlarning yuqori sifatli rasmlari va batafsil qoidalari.',
      icon: Compass,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Xatolar Ustida Tahlil',
      desc: 'Test tugagach xato qilgan savollaringiz alohida ko‘rsatiladi. To‘g‘ri javob va qonuniy izohni o‘qib, keyingi safar adashmaysiz.',
      icon: AlertTriangle,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      title: 'YHQ Jarimalar & BHM Kalkulyatori',
      desc: 'O‘zbekistondagi eng so‘nggi Yo‘l harakati qoidalari jarimalari, BHM stavkalari va 50% chegirmada to‘lash muddatlari haqida to‘liq ma‘lumot.',
      icon: Calculator,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    {
      title: 'Telegram Bot & Veb Qulaylik',
      desc: 'Saytda ham, Telegramda ham birdek qulay. Hatto internet sekin ishlaganda ham bot orqali istalgan joyda test yechish imkoniyati.',
      icon: Smartphone,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            Imkoniyatlar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Nega aynan <span className="text-blue-600">Prava365</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Biz shunchaki test sayti emasmiz. Imtihondan birinchi urinishdayoq 100% o‘tishingiz uchun barcha zarur vositalarni bitta tizimga jamladik.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-xs`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    {item.badge && (
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-600 text-white shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700 gap-1">
                  <span>Batafsil ma‘lumot</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
