import { CheckCircle2, Sparkles, Code2 } from 'lucide-react'

export default function HomePage() {
  const stackItems = [
    { title: 'React 19 & Vite 8', desc: 'Tezkor dasturlash va yig‘ish (HMR)' },
    { title: 'Tailwind CSS v4', desc: 'Rasmiy @tailwindcss/vite integratsiyasi' },
    { title: 'React Router v7', desc: 'Sahifalararo marshrutlash' },
    { title: 'Lucide Icons', desc: 'Zamonaviy piktogrammalar to‘plami' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          Loyiha toza blank holatda sozlandi
        </span>
      </div>

      {/* Hero Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Prava<span className="text-blue-600">365</span> Web
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Boshlang‘ich shablon muvaffaqiyatli tayyorlandi. Yangi sahifalar, komponentlar va funksionalliklarni qo‘shishga tayyor.
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
        {stackItems.map((item) => (
          <div
            key={item.title}
            className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex items-start gap-3"
          >
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Start Tip */}
      <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-slate-900 text-slate-200 shadow-lg">
        <div className="flex items-center gap-2 mb-2 text-white font-medium text-sm">
          <Code2 className="w-4 h-4 text-blue-400" />
          <span>Ishni boshlash</span>
        </div>
        <p className="text-xs text-slate-400 leading-normal">
          Dasturni tahrirlash uchun <code className="text-blue-300 bg-slate-800 px-1.5 py-0.5 rounded font-mono">src/pages/HomePage.jsx</code> faylidan boshlashingiz mumkin. Yo‘l prefiksi sifatida <code className="text-emerald-300 bg-slate-800 px-1.5 py-0.5 rounded font-mono">@/*</code> (masalan: <code className="text-emerald-300 bg-slate-800 px-1.5 py-0.5 rounded font-mono">@/components/...</code>) sozlangan.
        </p>
      </div>
    </div>
  )
}
