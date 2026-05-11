import { useState } from 'react';
import { Package } from '../data/packages';
import { 
  Calendar, Clock, Plane, Hotel, Check, X, MapPin, 
  ChevronDown, Phone, Shield, ArrowRight
} from 'lucide-react';

interface PackageCardProps {
  pkg: Package;
  onBook: (packageName: string) => void;
}

export default function PackageCard({ pkg, onBook }: PackageCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'includes' | 'hotels'>('itinerary');
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const seatsLeft = pkg.seatsTotal - pkg.seatsBooked;
  const percentBooked = (pkg.seatsBooked / pkg.seatsTotal) * 100;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <>
      {/* Package Card Body */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full group">
        {/* Card Image banner */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={pkg.hotelMakkah.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Tag Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            <span className="bg-emerald-900 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-700 shadow">
              {pkg.typeName}
            </span>
            {seatsLeft <= 5 && (
              <span className="bg-rose-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow animate-pulse">
                Sisa {seatsLeft} Kursi!
              </span>
            )}
            {pkg.featured && (
              <span className="bg-amber-500 text-emerald-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow tracking-wider uppercase">
                Best Seller
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div>
              <p className="text-amber-400 text-xs font-semibold flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>Mulai {pkg.departureDate}</span>
              </p>
              <h3 className="text-white font-bold text-lg leading-tight mt-1 drop-shadow-md">
                {pkg.title}
              </h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 text-white text-xs font-bold">
              {pkg.duration} Hari
            </div>
          </div>
        </div>

        {/* Card Details */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-xs italic mb-4">{pkg.subtitle}</p>

            {/* Travel Specs */}
            <div className="space-y-3 mb-5">
              <div className="flex items-center text-sm text-slate-700">
                <Plane className="h-4.5 w-4.5 text-emerald-600 mr-2.5 shrink-0" />
                <div>
                  <span className="font-semibold text-xs text-slate-500 block uppercase tracking-wider">Maskapai</span>
                  <p className="font-medium">{pkg.airline.name} <span className="text-xs text-emerald-700">({pkg.airline.flightCode})</span></p>
                </div>
              </div>

              <div className="flex items-center text-sm text-slate-700">
                <Hotel className="h-4.5 w-4.5 text-emerald-600 mr-2.5 shrink-0" />
                <div>
                  <span className="font-semibold text-xs text-slate-500 block uppercase tracking-wider">Hotel di Makkah</span>
                  <p className="font-medium flex items-center gap-1">
                    {pkg.hotelMakkah.name} 
                    <span className="text-amber-500">{'★'.repeat(pkg.hotelMakkah.rating)}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center text-sm text-slate-700">
                <Hotel className="h-4.5 w-4.5 text-emerald-600 mr-2.5 shrink-0" />
                <div>
                  <span className="font-semibold text-xs text-slate-500 block uppercase tracking-wider">Hotel di Madinah</span>
                  <p className="font-medium flex items-center gap-1">
                    {pkg.hotelMadinah.name}
                    <span className="text-amber-500">{'★'.repeat(pkg.hotelMadinah.rating)}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Highlights list */}
            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/60 mb-5">
              <p className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">Fasilitas Utama:</p>
              <ul className="text-xs text-slate-700 space-y-1">
                {pkg.highlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seats Left Bar */}
            <div className="space-y-1 mb-5">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Kuota Terisi: <strong>{pkg.seatsBooked}</strong>/{pkg.seatsTotal}</span>
                <span className="font-semibold text-slate-700">Sisa {seatsLeft} Kursi</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    percentBooked > 85 ? 'bg-rose-500' : 'bg-gradient-to-r from-emerald-500 to-amber-500'
                  }`}
                  style={{ width: `${percentBooked}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Biaya All-In</span>
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-950 font-serif">
                  {formatPrice(pkg.price)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <button
                onClick={() => setShowModal(true)}
                className="border border-emerald-600 text-emerald-900 font-semibold py-3 px-4 rounded-xl text-xs hover:bg-emerald-50 transition-all text-center cursor-pointer"
              >
                Lihat Detail
              </button>
              <button
                onClick={() => onBook(pkg.title)}
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-emerald-950 font-extrabold py-3 px-4 rounded-xl text-xs hover:from-amber-400 hover:to-amber-300 transition-all text-center cursor-pointer shadow shadow-amber-900/10 flex items-center justify-center gap-1.5"
              >
                <span>Pesan Kursi</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white p-6 relative">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-amber-400 text-emerald-950 text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase">
                  {pkg.typeName}
                </span>
                <span className="text-emerald-200 text-xs font-semibold flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {pkg.duration} Hari Perjalanan
                </span>
              </div>
              <h3 className="text-2xl font-extrabold font-serif text-white">{pkg.title}</h3>
              <p className="text-emerald-100 text-sm mt-1">{pkg.subtitle}</p>
            </div>

            {/* Modal Tab Navigation */}
            <div className="flex border-b border-slate-200 bg-slate-50">
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`flex-1 py-4 text-center text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'itinerary' 
                    ? 'border-emerald-600 text-emerald-900 bg-white font-bold' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                Rencana Perjalanan (Itinerary)
              </button>
              <button
                onClick={() => setActiveTab('includes')}
                className={`flex-1 py-4 text-center text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'includes' 
                    ? 'border-emerald-600 text-emerald-900 bg-white font-bold' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                Fasilitas & Syarat
              </button>
              <button
                onClick={() => setActiveTab('hotels')}
                className={`flex-1 py-4 text-center text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'hotels' 
                    ? 'border-emerald-600 text-emerald-900 bg-white font-bold' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                Akomodasi & Penerbangan
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto flex-1 bg-slate-50/50">
              
              {/* TAB 1: ITINERARY (Day by Day Accordion) */}
              {activeTab === 'itinerary' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                      Rencana perjalanan didesain agar jamaah memiliki waktu istirahat yang cukup untuk memaksimalkan ibadah Thawaf, Sa'i, dan shalat fardhu berjamaah di Masjidil Haram & Nabawi.
                    </p>
                  </div>

                  <div className="relative border-l-2 border-emerald-200 ml-4 pl-6 space-y-4">
                    {pkg.itinerary.map((dayItem) => {
                      const isExpanded = expandedDay === dayItem.day;
                      return (
                        <div key={dayItem.day} className="relative">
                          {/* Timeline dot */}
                          <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center transition-all ${
                            isExpanded ? 'border-amber-500 bg-amber-400' : 'border-emerald-600 bg-emerald-100'
                          }`}></div>

                          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                            <button
                              onClick={() => toggleDay(dayItem.day)}
                              className="w-full flex justify-between items-center p-4 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none"
                            >
                              <div className="flex items-center space-x-3">
                                <span className="bg-emerald-900 text-white text-xs font-extrabold px-3 py-1 rounded-lg">
                                  HARI {dayItem.day}
                                </span>
                                <span className="text-sm sm:text-base font-serif text-emerald-950 font-bold">{dayItem.title}</span>
                              </div>
                              <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${
                                isExpanded ? 'rotate-180 text-amber-500' : ''
                              }`} />
                            </button>

                            {isExpanded && (
                              <div className="px-4 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/20">
                                {dayItem.description}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: INCLUSIONS & EXCLUSIONS */}
              {activeTab === 'includes' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Inclusions */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-emerald-950 text-base mb-4 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                      <div className="bg-emerald-100 text-emerald-800 rounded-full p-1">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Biaya Sudah Termasuk (Inclusions)</span>
                    </h4>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-emerald-950 text-base mb-4 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                      <div className="bg-rose-100 text-rose-800 rounded-full p-1">
                        <X className="h-4 w-4" />
                      </div>
                      <span>Biaya Belum Termasuk (Exclusions)</span>
                    </h4>
                    <ul className="space-y-3">
                      {pkg.excludes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Terms card */}
                    <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <h5 className="font-bold text-amber-900 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <Shield className="h-4 w-4 text-amber-600" />
                        Penting Untuk Dipersiapkan:
                      </h5>
                      <ul className="text-xs text-amber-800 space-y-1 list-disc pl-4 leading-relaxed">
                        <li>Paspor asli berfoto (minimal 2 kata nama)</li>
                        <li>FC KTP, KK, & Buku Nikah (bagi suami istri)</li>
                        <li>Sertifikat Vaksinasi lengkap</li>
                        <li>Pas Foto berwarna latar belakang putih, wajah 80%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: HOTEL & AIRLINE DETAIL */}
              {activeTab === 'hotels' && (
                <div className="space-y-6">
                  {/* Airline Info */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-5">
                    <div className="bg-emerald-900 text-white rounded-2xl h-16 w-16 flex flex-col items-center justify-center shadow">
                      <Plane className="h-6 w-6 text-amber-400" />
                      <span className="text-[10px] font-bold mt-1 uppercase">{pkg.airline.logo}</span>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Penerbangan Rekomendasi</p>
                      <h4 className="font-extrabold text-slate-800 text-lg">{pkg.airline.name}</h4>
                      <p className="text-sm text-slate-600">Rute Direct menggunakan kode terbang <strong>{pkg.airline.flightCode}</strong>. Tiket sudah di-booking PP untuk keamanan jadwal.</p>
                    </div>
                  </div>

                  {/* Hotel Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Hotel Makkah */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                      <div className="h-44 relative">
                        <img 
                          src={pkg.hotelMakkah.image} 
                          alt={pkg.hotelMakkah.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-emerald-950 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Makkah Mukarramah
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-extrabold text-slate-800 text-base">{pkg.hotelMakkah.name}</h4>
                          <span className="text-amber-500 font-serif">{'★'.repeat(pkg.hotelMakkah.rating)}</span>
                        </div>
                        <p className="text-xs text-slate-400 mb-3">Hotel Klasifikasi Bintang {pkg.hotelMakkah.rating}</p>
                        <div className="flex items-start text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <MapPin className="h-4 w-4 text-emerald-600 shrink-0 mr-1.5 mt-0.5" />
                          <span>{pkg.hotelMakkah.distance}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hotel Madinah */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                      <div className="h-44 relative">
                        <img 
                          src={pkg.hotelMadinah.image} 
                          alt={pkg.hotelMadinah.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-emerald-950 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Madinah Al-Munawwarah
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-extrabold text-slate-800 text-base">{pkg.hotelMadinah.name}</h4>
                          <span className="text-amber-500 font-serif">{'★'.repeat(pkg.hotelMadinah.rating)}</span>
                        </div>
                        <p className="text-xs text-slate-400 mb-3">Hotel Klasifikasi Bintang {pkg.hotelMadinah.rating}</p>
                        <div className="flex items-start text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <MapPin className="h-4 w-4 text-emerald-600 shrink-0 mr-1.5 mt-0.5" />
                          <span>{pkg.hotelMadinah.distance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer (Call to Action) */}
            <div className="bg-white p-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Harga Paket Per-Orang (All-In)</p>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-serif">
                  {formatPrice(pkg.price)}
                </span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 sm:flex-none border border-slate-300 text-slate-700 py-3 px-6 rounded-xl hover:bg-slate-50 transition-all font-semibold text-sm cursor-pointer"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    onBook(pkg.title);
                    setShowModal(false);
                  }}
                  className="flex-1 sm:flex-none bg-gradient-to-r from-amber-500 to-yellow-500 text-emerald-950 py-3.5 px-8 rounded-xl hover:from-amber-400 hover:to-amber-300 transition-all font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <Phone className="h-4 w-4 fill-emerald-950" />
                  <span>Amankan Seat Sekarang</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
