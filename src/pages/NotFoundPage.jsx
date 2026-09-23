import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <p className="text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">404</p>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Sahifa topilmadi</h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
        Siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko‘chirilgan.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}
