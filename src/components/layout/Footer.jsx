export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {currentYear} Prava365. Barcha huquqlar himoyalangan.</p>
        <p className="text-slate-400">Blank Starter v0.1.0</p>
      </div>
    </footer>
  )
}
