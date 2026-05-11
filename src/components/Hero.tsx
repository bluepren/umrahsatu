import { useState } from 'react';
import { Compass, Calendar, Users, Star, ArrowRight, ShieldCheck, Award, Heart } from 'lucide-react';

interface HeroProps {
  onSearch: (type: string, month: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const handleSearchClick = () => {
    onSearch(selectedType, selectedMonth);
    const element = document.getElementById('paket-umrah');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-slate-950 flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Overlay with Emerald and Gold Tint */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=1920')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-emerald-950/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md border border-emerald-700/60 px-4 py-2 rounded-full text-xs font-semibold text-amber-300">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>Penyelenggara Berizin Resmi PPIU Kemenag No. 124/2022</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Raih Ibadah Umrah <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 font-serif italic">
                Sesuai Sunnah & Maksimal Nyaman
              </span>
            </h1>

            <p className="text-emerald-100/90 text-base sm:text-lg max-w-xl leading-relaxed">
              Selamat datang di <strong className="text-amber-300">Khalifah Tour</strong>. Kami memprioritaskan kepastian keberangkatan, kejelasan jadwal pesawat, hotel bintang 5 dekat pelataran Masjidil Haram, serta bimbingan ibadah murni sesuai sunnah Rasulullah ﷺ.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center space-x-2.5 text-white/90">
                <div className="bg-emerald-800/80 p-1.5 rounded-lg border border-emerald-600">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-sm font-medium">Hotel Bintang 5 & Dekat Masjid</span>
              </div>
              <div className="flex items-center space-x-2.5 text-white/90">
                <div className="bg-emerald-800/80 p-1.5 rounded-lg border border-emerald-600">
                  <Award className="h-4 w-4 text-amber-400" />
                </div>
                <span className="text-sm font-medium">Ustadz Pembimbing Berpengalaman</span>
              </div>
              <div className="flex items-center space-x-2.5 text-white/90">
                <div className="bg-emerald-800/80 p-1.5 rounded-lg border border-emerald-600">
                  <Compass className="h-4 w-4 text-amber-400" />
                </div>
                <span className="text-sm font-medium">Penerbangan Direct (Tanpa Transit)</span>
              </div>
              <div className="flex items-center space-x-2.5 text-white/90">
                <div className="bg-emerald-800/80 p-1.5 rounded-lg border border-emerald-600">
                  <Heart className="h-4 w-4 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-sm font-medium">Layanan Sepenuh Hati 24/7</span>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('paket-umrah');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-emerald-950 font-bold px-8 py-4 rounded-2xl shadow-xl hover:from-amber-400 hover:to-amber-300 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Lihat Paket Keberangkatan</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('tabungan');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-emerald-500 bg-emerald-950/40 text-amber-300 hover:bg-emerald-900/50 hover:border-amber-400 font-semibold px-8 py-4 rounded-2xl transition-all text-center backdrop-blur-sm cursor-pointer"
              >
                Mulai Tabungan Umrah
              </button>
            </div>
          </div>

          {/* Feature Badge Collage / Promotional Box */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-b from-emerald-900/90 to-slate-900/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-emerald-700/60 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4 border-b border-emerald-800 pb-3">
                <span className="text-amber-400 font-serif font-extrabold text-2xl">Promo</span>
                <span>Terbatas Bulan Ini!</span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="bg-amber-400 text-emerald-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                        Sisa 7 Seat lagi
                      </span>
                      <h4 className="font-bold text-white text-base mt-1">Umrah Syawal Mulia (9 Hari)</h4>
                      <p className="text-xs text-emerald-300">Berangkat: 12 April 2026</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 line-through">Rp 33.5 Jt</p>
                      <p className="text-lg font-extrabold text-amber-400">Rp 31.5 Jt</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        Terpopuler
                      </span>
                      <h4 className="font-bold text-white text-base mt-1">Premium Signature (10 Hari)</h4>
                      <p className="text-xs text-emerald-300">Berangkat: 18 Mei 2026</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Kereta Cepat</p>
                      <p className="text-lg font-extrabold text-amber-400">Rp 45.9 Jt</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3.5 text-center mt-6 pt-5 border-t border-emerald-800/60">
                <div>
                  <p className="text-2xl font-extrabold text-amber-400 font-serif">15+</p>
                  <p className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">Tahun Melayani</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-amber-400 font-serif">10K+</p>
                  <p className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">Jamaah Berangkat</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-amber-400 font-serif">4.9★</p>
                  <p className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">Ulasan Bintang 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick search/filter widget at the bottom */}
        <div className="mt-16 bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-emerald-800 shadow-xl max-w-5xl mx-auto">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest text-center lg:text-left mb-3 flex items-center justify-center lg:justify-start gap-1.5">
            <Compass className="h-4 w-4 animate-spin-slow" />
            Pencarian Jadwal Cepat
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-emerald-200 mb-1.5 flex items-center gap-1">
                <Users className="h-3.5 w-3.5 text-amber-400" /> Tipe Program Umrah
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-emerald-950 text-white rounded-xl py-3 px-4 border border-emerald-700/60 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm"
              >
                <option value="all">Semua Program Umrah & Haji</option>
                <option value="regular">Umrah Reguler (Bintang 4/5)</option>
                <option value="premium">Umrah Premium (VVIP Bintang 5)</option>
                <option value="plus">Umrah Plus Wisata (Turki/Cairo)</option>
                <option value="furoda">Haji Furoda (Tanpa Antre)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-200 mb-1.5 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-amber-400" /> Perkiraan Bulan Berangkat
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full bg-emerald-950 text-white rounded-xl py-3 px-4 border border-emerald-700/60 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 text-sm"
              >
                <option value="all">Semua Bulan Keberangkatan</option>
                <option value="04">April 2026 (Syawal Berkah)</option>
                <option value="05">Mei 2026 (Menjelang Haji)</option>
                <option value="06">Juni 2026 (Musim Panas Sejuk)</option>
                <option value="08">Agustus 2026 (Awal Musim Baru)</option>
                <option value="09">September 2026 (Musim Haji Furoda)</option>
              </select>
            </div>

            <button
              onClick={handleSearchClick}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-emerald-950 font-bold py-3 px-6 rounded-xl hover:from-amber-400 hover:to-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-950/50"
            >
              <span>Cari Paket Sekarang</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
