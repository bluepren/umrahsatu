import { useState } from 'react';
import { Calendar, Users, Plane, ArrowRight, Clock, ShieldCheck, Filter } from 'lucide-react';
import { packagesData } from '../data/packages';

interface TimelineJadwalProps {
  onSelectPackage: (packageName: string) => void;
}

export default function TimelineJadwal({ onSelectPackage }: TimelineJadwalProps) {
  const [selectedMonthFilter, setSelectedMonthFilter] = useState('all');

  const filterMonths = [
    { label: 'Semua Bulan', value: 'all' },
    { label: 'April 2026', value: '04' },
    { label: 'Mei 2026', value: '05' },
    { label: 'Juni 2026', value: '06' },
    { label: 'Agustus 2026', value: '08' },
    { label: 'September 2026', value: '09' }
  ];

  const filteredPackages = packagesData.filter((pkg) => {
    if (selectedMonthFilter === 'all') return true;
    const pkgMonth = pkg.departureDate.split('-')[1]; // get MM from YYYY-MM-DD
    return pkgMonth === selectedMonthFilter;
  });

  const getMonthNameIndo = (dateStr: string) => {
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const parts = dateStr.split('-');
    const day = parts[2];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const year = parts[0];
    return `${day} ${months[monthIndex]} ${year}`;
  };

  return (
    <section id="jadwal" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-amber-200">
            Jadwal Rilis Keberangkatan Resmi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-serif mt-4">
            Kalender Keberangkatan Khalifah Tour
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Pilih tanggal terbaik yang sesuai dengan kesiapan waktu Anda. Semua jadwal penerbangan di bawah ini telah dikonfirmasi dan memiliki status <strong className="text-emerald-900">100% Siap Berangkat</strong>.
          </p>
        </div>

        {/* Month Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10 max-w-4xl mx-auto">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1 mr-2">
            <Filter className="h-3.5 w-3.5 text-emerald-700" /> Filter:
          </span>
          {filterMonths.map((month) => (
            <button
              key={month.value}
              onClick={() => setSelectedMonthFilter(month.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                selectedMonthFilter === month.value
                  ? 'bg-emerald-900 text-amber-300 border-emerald-950 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {month.label}
            </button>
          ))}
        </div>

        {/* Departure Timeline List */}
        <div className="max-w-4xl mx-auto space-y-6 relative">
          
          {/* Timeline center line for desktop */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-emerald-200/60 hidden md:block"></div>

          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg, idx) => {
              const isEven = idx % 2 === 0;
              const seatsLeft = pkg.seatsTotal - pkg.seatsBooked;
              const isAlmostFull = seatsLeft <= 5;
              
              return (
                <div 
                  key={pkg.id} 
                  className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle Pin */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-[9px] top-6 w-[18px] h-[18px] rounded-full border-4 border-white bg-emerald-700 shadow hidden md:block z-20"></div>

                  {/* Left Column (Empty on desktop for alternating alignment) */}
                  <div className="w-full md:w-[46%] hidden md:block"></div>

                  {/* Right Column (Content Card) */}
                  <div className="w-full md:w-[46%] pl-12 md:pl-0 z-10">
                    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md hover:shadow-xl hover:border-emerald-300/50 transition-all duration-300 group">
                      
                      {/* Top Meta info */}
                      <div className="flex flex-wrap justify-between items-center gap-2 mb-4 border-b border-slate-50 pb-3">
                        <div className="flex items-center space-x-1.5">
                          <Calendar className="h-4.5 w-4.5 text-amber-500" />
                          <span className="text-sm font-extrabold text-emerald-950">
                            {getMonthNameIndo(pkg.departureDate)}
                          </span>
                        </div>
                        <span className="bg-emerald-50 text-emerald-900 text-[10px] font-extrabold px-3 py-1 rounded-full border border-emerald-100">
                          {pkg.typeName}
                        </span>
                      </div>

                      {/* Package Title */}
                      <h4 className="font-extrabold text-slate-800 text-base sm:text-lg mb-2 group-hover:text-emerald-900 transition-colors">
                        {pkg.title}
                      </h4>

                      {/* Package details */}
                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <Plane className="h-4 w-4 text-emerald-700" />
                          <span>{pkg.airline.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-emerald-700" />
                          <span>{pkg.duration} Hari Program</span>
                        </div>
                      </div>

                      {/* Status / Urgency */}
                      <div className="flex justify-between items-center bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-5">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-slate-400" />
                          <span className="text-xs text-slate-500 font-medium">Sisa Seat:</span>
                        </div>
                        <span className={`text-xs font-bold py-1 px-3 rounded-lg ${
                          isAlmostFull 
                            ? 'bg-rose-50 text-rose-700 animate-pulse border border-rose-100' 
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        }`}>
                          {isAlmostFull ? `Hanya Sisa ${seatsLeft} Kursi!` : `${seatsLeft} Kursi Tersedia`}
                        </span>
                      </div>

                      {/* Action trigger */}
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Harga All-In</span>
                          <span className="text-base sm:text-lg font-extrabold text-emerald-950 font-serif">
                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(pkg.price)}
                          </span>
                        </div>
                        
                        <button
                          onClick={() => onSelectPackage(pkg.title)}
                          className="bg-emerald-900 text-white font-bold py-2.5 px-4 rounded-xl text-xs hover:bg-emerald-800 hover:text-amber-300 transition-all cursor-pointer flex items-center gap-1 shadow group/btn"
                        >
                          <span>Pesan Sekarang</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-md">
              <p className="text-slate-500 text-sm font-medium">Tidak ada jadwal keberangkatan untuk filter bulan ini.</p>
              <button 
                onClick={() => setSelectedMonthFilter('all')}
                className="mt-4 text-emerald-800 text-xs font-bold underline hover:text-emerald-950"
              >
                Tampilkan Semua Jadwal
              </button>
            </div>
          )}

        </div>

        {/* Safety trust indicator */}
        <div className="mt-16 bg-emerald-900/10 p-5 rounded-2xl border border-emerald-800/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <ShieldCheck className="h-10 w-10 text-emerald-700 shrink-0" />
          <p className="text-xs text-emerald-900 leading-relaxed font-medium">
            <strong>Catatan Keberangkatan Penting:</strong> Apabila terjadi force majeure (perubahan regulasi mendadak dari otoritas penerbangan / Visa Arab Saudi), Khalifah Tour menjamin pengalihan jadwal terdekat tanpa ada biaya pemotongan (refund 100% atau ganti jadwal secara adil).
          </p>
        </div>

      </div>
    </section>
  );
}
