import { CheckCircle, MousePointerClick, Award, Clock } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Rejimni tanlang',
      desc: 'Mavzulashtirilgan 130 ta biletlardan birini tanlang yoki 20 ta tasodifiy savoldan iborat Haqiqiy Imtihon rejimini yoqing.',
      icon: MousePointerClick,
      color: 'bg-blue-600',
    },
    {
      step: '02',
      title: 'Savollarga javob bering',
      desc: 'Har bir savolga belgilangan vaqt ichida e‘tibor bilan javob bering. Real imtihondagidek interfeysda o‘zingizni erkin his qiling.',
      icon: Clock,
      color: 'bg-indigo-600',
    },
    {
      step: '03',
      title: 'Natija va Xatolar tahlili',
      desc: 'Test yakunlanishi bilan to‘plagan balingizni ko‘ring, adashgan savollaringiz izohlarini o‘rganing va 100% tayyor bo‘ling.',
      icon: Award,
      color: 'bg-emerald-600',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            Qanday ishlaydi?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Guvohnoma olish uchun <span className="text-emerald-600">3 ta oson qadam</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Murakkab registratsiya yoki to‘lovlarsiz, hoziroq tayyorgarlikni boshlang.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col items-start"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Tezkor va qulay</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
