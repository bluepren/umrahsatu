import { Star, Heart, Quote } from 'lucide-react';
import { testimonialsData } from '../data/packages';

export default function Testimoni() {
  const galleryItems = [
    {
      url: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=400",
      caption: "Manasik Umrah Akbar di Hotel Luxury Jakarta"
    },
    {
      url: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=400",
      caption: "Kekompakan Jamaah di Depan Ka'bah Mulia"
    },
    {
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400",
      caption: "Ziarah Syuhada Jabal Uhud, Madinah"
    },
    {
      url: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=400",
      caption: "Pelepasan Rombongan Kloter VIP Bandara Soetta"
    }
  ];

  return (
    <section id="testimoni" className="py-20 bg-gradient-to-b from-stone-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
            Kisah Nyata Dari Baitullah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-serif mt-4">
            Ulasan Tulus Dari Para Jamaah
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Kepuasan dan kekhusyukan ibadah Anda adalah tujuan utama pelayanan kami. Dengarkan testimoni dari mereka yang telah merasakan pengalaman berharga bersama Khalifah Tour.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonialsData.map((testi, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Gold Quote icon top-right */}
              <div className="absolute top-4 right-4 text-slate-100">
                <Quote className="h-10 w-10 text-emerald-50/70" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6 relative z-10">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <img 
                  src={testi.avatar} 
                  alt={testi.name} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-100 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">{testi.name}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">{testi.role}</p>
                  <span className="bg-emerald-50 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full inline-block mt-1">
                    {testi.packageUsed}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Happy Jamaah Photo Gallery */}
        <div className="bg-emerald-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Gallery copy */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                <Heart className="h-4 w-4 fill-amber-400" /> Dokumentasi Kegiatan
              </span>
              <h3 className="text-2xl font-bold font-serif leading-tight text-white">
                Galeri Perjalanan Jamaah Khalifah Tour
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                Kami bangga mendokumentasikan setiap senyum dan momen suci para jamaah. Semua dokumentasi murni diambil langsung oleh tim pembimbing kami di tanah suci.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <p className="text-2xl font-extrabold text-amber-400 font-serif">100%</p>
                  <p className="text-[10px] text-emerald-300 uppercase tracking-wider font-semibold">Real Dokumentasi</p>
                </div>
                <div className="border-l border-emerald-800 h-8"></div>
                <div>
                  <p className="text-2xl font-extrabold text-amber-400 font-serif">50+</p>
                  <p className="text-[10px] text-emerald-300 uppercase tracking-wider font-semibold">Grup Keberangkatan</p>
                </div>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {galleryItems.map((item, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-emerald-800 bg-emerald-950">
                  <img 
                    src={item.url} 
                    alt={item.caption} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
                  <p className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] sm:text-xs text-white/95 font-semibold text-center leading-snug">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
