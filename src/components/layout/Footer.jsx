import { Car, Send, Mail, ShieldCheck, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 font-black text-2xl text-white tracking-tight mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Car className="w-5 h-5" />
              </div>
              <span>Prava<span className="text-blue-500">365</span></span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Haydovchilik guvohnomasini birinchi urinishdayoq olishda ishonchli hamrohingiz. 2026-yilgi yangi YHQ testlari, yo‘l belgilari va jarimalar ma‘lumotnomasi.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>IIV Yo‘l Harakati Xavfsizligi Xizmati mezonlari asosida</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-4">
              Platforma
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  Haqiqiy Imtihon Simulyatori
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  70 ta Biletlar To‘plami
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  Yo‘l Belgilari & Chiziqlari
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">
                  YHQ Jarimalar Jadvali
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-4">
              Aloqa & Yordam
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://t.me/Prava365Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  <Send className="w-4 h-4" />
                  <span>@Prava365Bot (Telegram Bot)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@prava365.uz"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>support@prava365.uz</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 leading-normal">
              Platformadan foydalanish mutlaqo bepul bo‘lib, haydovchilik madaniyatini oshirish maqsadida yaratilgan.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Prava365. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            <span>O‘zbekistonda</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>bilan yaratildi</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
