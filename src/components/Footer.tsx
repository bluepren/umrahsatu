import { useState } from 'react';
import { Compass, Mail, Phone, MapPin, Shield, Send, Landmark } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-emerald-900/40 relative overflow-hidden">
      {/* Decorative top green border accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-emerald-600 to-amber-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-emerald-950 pb-12 mb-12">
          
          {/* Brand Col (4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2 rounded-xl shadow">
                <Compass className="h-5 w-5 text-emerald-950" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold tracking-wider text-white">KHALIFAH</span>
                <span className="text-xl font-light text-amber-400 font-serif">TOUR</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Penyelenggara perjalanan ibadah Umrah & Haji resmi berizin Kemenag RI. Kami berdedikasi tinggi membimbing jamaah meraih kesempurnaan ibadah berlandaskan pemahaman as-Sunnah ash-Shahihah.
            </p>

            <div className="p-3.5 bg-emerald-950/40 border border-emerald-900 rounded-xl flex items-center gap-2.5">
              <Shield className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">Izin Resmi PPIU</p>
                <p className="text-[11px] font-bold text-white">Kemenag RI No. 124 / Tahun 2022</p>
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex space-x-3 pt-2">
              <a href="https://facebook.com" className="p-2 bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V2h-3c-2.8 0-5 2.2-5 5v1z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="p-2 bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors" aria-label="Instagram">
                <svg className="h-4 w-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://youtube.com" className="p-2 bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors" aria-label="YouTube">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555a3.003 3.003 0 0 0-2.11 2.108C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact details Col (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-b border-emerald-950 pb-2">
              Hubungi Kami
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Khalifah Tower Building Lantai 3, Jl. Jend. Sudirman No. 45, Jakarta Selatan, DKI Jakarta</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <a href="tel:+628112345678" className="hover:text-white transition-colors">0811-2345-678 (WA)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a href="mailto:info@khalifahtour.co.id" className="hover:text-white transition-colors">info@khalifahtour.co.id</a>
              </li>
            </ul>
          </div>

          {/* Official Bank Account Col (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-b border-emerald-950 pb-2 flex items-center gap-1.5">
              <Landmark className="h-4 w-4 text-amber-400" />
              <span>Rekening Resmi</span>
            </h4>
            <p className="text-[10px] text-slate-400 leading-relaxed mb-3">
              Transfer pembayaran DP / pelunasan wajib atas nama PT KHALIFAH HAJJ & UMRAH:
            </p>
            <div className="space-y-3">
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-900">
                <p className="text-[10px] text-slate-400 font-bold uppercase">BSI (Bank Syariah Indonesia)</p>
                <p className="font-mono font-extrabold text-white text-xs mt-0.5 tracking-wider">771-4122-022</p>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-900">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Bank Mandiri Syariah</p>
                <p className="font-mono font-extrabold text-white text-xs mt-0.5 tracking-wider">124-000-8802</p>
              </div>
            </div>
          </div>

          {/* Newsletter Col (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-b border-emerald-950 pb-2">
              Update Promo
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Berlangganan info paket promo & jadwal umrah termurah langsung ke email Anda.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 text-white border border-slate-800 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-amber-400 placeholder-slate-600"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-emerald-950 font-bold py-2 px-3 rounded-lg text-xs hover:from-amber-400 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Daftar</span>
                </button>
              </form>
            ) : (
              <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-900 text-center">
                <p className="text-emerald-400 text-xs font-extrabold">✓ Terdaftar!</p>
                <p className="text-[9px] text-emerald-200 mt-1">Terima kasih telah bergabung.</p>
              </div>
            )}
          </div>

        </div>

        {/* Footer Bottom (Copyrights & Disclaimers) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 pt-4 border-t border-slate-900/60 text-center">
          <div>
            <p>© {new Date().getFullYear()} PT Khalifah Hajj & Umrah. All Rights Reserved.</p>
            <p className="text-[9px] text-slate-600 mt-0.5">Penyelenggara Perjalanan Ibadah Umrah Resmi Kemenag No. 124/2022.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#faq" className="hover:text-slate-400 transition-colors">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-400 transition-colors">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-400 transition-colors">Bantuan Syarat Paspor</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
