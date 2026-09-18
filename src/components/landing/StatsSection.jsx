import { FileText, HelpCircle, MapPin, TrendingUp } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    {
      value: '70 ta',
      label: 'Rasmiy Biletlar',
      desc: 'Barcha mavzularni qamrab olgan',
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      value: '1,400+',
      label: 'Test Savollari',
      desc: '2026-yilgi eng so‘nggi baza',
      icon: HelpCircle,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      value: '200+',
      label: 'Yo‘l Belgilari',
      desc: 'Aniq tushuntirish va chiziqlar',
      icon: MapPin,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      value: '98%',
      label: 'O‘tish Ko‘rsatkichi',
      desc: 'Birinchi urinishda muvaffaqiyat',
      icon: TrendingUp,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  ]

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-3.5 shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950 mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.desc}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
