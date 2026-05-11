import { Shield, Plane, Hotel, ClipboardCheck, Calendar, Users, Heart, Award } from 'lucide-react';

export default function Keunggulan() {
  const pastiUmrahItems = [
    {
      num: "01",
      title: "PASTI Travelnya Berizin",
      desc: "Khalifah Tour mengantongi izin resmi Penyelenggara Perjalanan Ibadah Umrah (PPIU) No. 124/2022 dari Kemenag RI. Legalitas penuh terjamin.",
      icon: Shield,
      color: "from-amber-400 to-amber-600"
    },
    {
      num: "02",
      title: "PASTI Jadwal Terbangnya",
      desc: "Tiket pesawat pulang-pergi (PP) sudah dibooking dan dipastikan tanggalnya jauh sebelum pendaftaran ditutup. No waiting list.",
      icon: Plane,
      color: "from-emerald-400 to-teal-600"
    },
    {
      num: "03",
      title: "PASTI Terbangnya Maskapai",
      desc: "Menggunakan maskapai penerbangan kelas dunia berjadwal tetap seperti Saudi Airlines, Garuda Indonesia, dan Turkish Airlines.",
      icon: Calendar,
      color: "from-amber-400 to-amber-600"
    },
    {
      num: "04",
      title: "PASTI Hotel Tempat Menginap",
      desc: "Nama hotel, klasifikasi bintang, dan jarak ke Masjidil Haram/Masjid Nabawi diinformasikan secara transparan, bukan cuma janji setaraf.",
      icon: Hotel,
      color: "from-emerald-400 to-teal-600"
    },
    {
      num: "05",
      title: "PASTI Visanya Sebelum Berangkat",
      desc: "Visa umrah diproses langsung melalui portal e-Haj resmi Arab Saudi dan dipastikan terbit sebelum koper dilepas ke bandara.",
      icon: ClipboardCheck,
      color: "from-amber-400 to-amber-600"
    }
  ];

  const kelebihanTambahan = [
    {
      title: "Pembimbing Sesuai Sunnah",
      desc: "Seluruh manasik dan pelaksanaan ibadah umrah dipandu oleh Ustadz Ahlussunnah wal Jama'ah yang berpengalaman luas dan berpemahaman lurus.",
      icon: Award
    },
    {
      title: "Perlengkapan Premium",
      desc: "Batik eksklusif, koper fiber modern roda empat, mukena/ihram tebal, hingga audio receiver bimbingan muthawwif (receiver manasik di Makkah).",
      icon: Users
    },
    {
      title: "Layanan Medis Siaga",
      desc: "Setiap rombongan dibekali asuransi medis lokal komprehensif, didukung kesiapan tim medis lokal jika jamaah membutuhkan penanganan darurat.",
      icon: Heart
    }
  ];

  return (
    <section id="keunggulan" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-emerald-900 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-emerald-700">
            Komitmen Layanan Khalifah Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif mt-4">
            Mengapa Mempercayakan Umrah Anda Kepada Kami?
          </h2>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-emerald-200/80 text-sm sm:text-base mt-4 leading-relaxed">
            Menyelenggarakan ibadah ke Baitullah bukan sekadar bisnis bagi kami, melainkan amanah melayani tamu-tamu Allah SWT. Kami menjunjung tinggi prinsip Kemenag RI dengan kampanye Gerakan <strong className="text-amber-300">"5 Pasti Umrah"</strong>.
          </p>
        </div>

        {/* 5 Pasti Umrah Section Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-serif text-amber-300 text-center mb-8 uppercase tracking-wider">
            Sesuai Kampanye Resmi Kemenag RI: 5 PASTI UMRAH
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pastiUmrahItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-emerald-900/40 border border-emerald-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between hover:bg-emerald-900/60 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="absolute -top-3 -right-3 text-7xl font-extrabold text-emerald-900/40 font-mono select-none group-hover:text-emerald-900/70 transition-colors">
                    {item.num}
                  </div>
                  
                  <div>
                    <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-emerald-950 p-3 rounded-2xl w-fit mb-4 shadow-lg group-hover:scale-105 transition-transform">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h4 className="font-extrabold text-white text-sm sm:text-base mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-emerald-200/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Benefits Grid */}
        <div className="border-t border-emerald-900 pt-16">
          <h3 className="text-xl font-bold font-serif text-white text-center mb-10 uppercase tracking-wider">
            Kelebihan Eksklusif Tambahan di Khalifah Tour
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kelebihanTambahan.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl hover:bg-emerald-900/20 transition-all">
                  <div className="bg-emerald-900 text-amber-400 border border-emerald-800 p-3.5 rounded-2xl h-fit shrink-0 shadow">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-300 text-base mb-1.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
