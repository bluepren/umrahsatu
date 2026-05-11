import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCard from './components/PackageCard';
import SavingsPlanner from './components/SavingsPlanner';
import Keunggulan from './components/Keunggulan';
import TimelineJadwal from './components/TimelineJadwal';
import Testimoni from './components/Testimoni';
import ConsultationForm from './components/ConsultationForm';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { packagesData } from './data/packages';
import { Sparkles, ShieldAlert, CheckCircle, Award } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('all');
  const [selectedMonthFilter, setSelectedMonthFilter] = useState('all');
  const [preselectedPackageName, setPreselectedPackageName] = useState<string>('');

  // Handle search from Hero Quick Search Widget
  const handleHeroSearch = (type: string, month: string) => {
    setSelectedTypeFilter(type);
    setSelectedMonthFilter(month);
  };

  // Handle direct "Pesan Kursi" clicking
  const handleBookPackage = (packageName: string) => {
    setPreselectedPackageName(packageName);
    const element = document.getElementById('hubungi-kami');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll navigation helper
  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Scroll spy to active navbar links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'paket-umrah', 'tabungan', 'jadwal', 'keunggulan', 'testimoni', 'faq', 'tentang-kami', 'hubungi-kami'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter package logic based on selected catalog tab + search filters
  const filteredCatalogPackages = packagesData.filter((pkg) => {
    // Type Filter (all, regular, plus, premium, furoda)
    const matchesType = selectedTypeFilter === 'all' || pkg.type === selectedTypeFilter;
    
    // Month Filter (all, "04", "05", etc)
    const matchesMonth = selectedMonthFilter === 'all' || pkg.departureDate.split('-')[1] === selectedMonthFilter;
    
    return matchesType && matchesMonth;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-amber-400 selection:text-emerald-950 font-sans scroll-smooth antialiased">
      
      {/* Navbar */}
      <Navbar onNavigate={navigateToSection} activeSection={activeSection} />

      {/* Hero (Search connected) */}
      <div id="hero">
        <Hero onSearch={handleHeroSearch} />
      </div>

      {/* Quick Trust Ribbons */}
      <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-emerald-950 py-3 px-4 shadow-inner text-center font-bold text-xs sm:text-sm tracking-wide flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <span className="flex items-center gap-1.5 justify-center">
          <CheckCircle className="h-4.5 w-4.5 fill-emerald-950 text-amber-400 shrink-0" />
          <span>PASTI BERANGKAT</span>
        </span>
        <span className="hidden sm:inline text-emerald-950/40">|</span>
        <span className="flex items-center gap-1.5 justify-center">
          <CheckCircle className="h-4.5 w-4.5 fill-emerald-950 text-amber-400 shrink-0" />
          <span>100% SESUAI SUNNAH</span>
        </span>
        <span className="hidden sm:inline text-emerald-950/40">|</span>
        <span className="flex items-center gap-1.5 justify-center">
          <CheckCircle className="h-4.5 w-4.5 fill-emerald-950 text-amber-400 shrink-0" />
          <span>HOTEL TERPERCAYA DEKAT MASJID</span>
        </span>
      </div>

      {/* Package Showcase Section */}
      <section id="paket-umrah" className="py-24 bg-gradient-to-b from-stone-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
              Pilihan Paket Terbaik & Eksklusif
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-serif mt-4">
              Katalog Paket Umrah & Haji 2026
            </h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Kami merancang setiap detail perjalanan dengan mengutamakan kenyamanan fisik dan kesucian ibadah. Bandingkan fasilitas, durasi, dan jadwal yang paling tepat bagi keluarga Anda.
            </p>
          </div>

          {/* Tab Filter Selectors (Catalog Tab) */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
            {[
              { label: 'Semua Paket', value: 'all' },
              { label: 'Umrah Reguler', value: 'regular' },
              { label: 'Umrah Premium Bintang 5', value: 'premium' },
              { label: 'Umrah Plus Wisata', value: 'plus' },
              { label: 'Haji Furoda VIP', value: 'furoda' }
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setSelectedTypeFilter(tab.value);
                  // Reset month filter if toggled tab to show all of that category
                  setSelectedMonthFilter('all');
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  selectedTypeFilter === tab.value
                    ? 'bg-emerald-900 text-amber-300 border-emerald-950 shadow-lg scale-105'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Search Filter Badge Indicator */}
          {(selectedMonthFilter !== 'all' || selectedTypeFilter !== 'all') && (
            <div className="mb-8 flex justify-center">
              <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-full px-4 py-1.5 text-xs font-semibold flex items-center gap-2 shadow-sm">
                <span>Filter aktif:</span>
                {selectedTypeFilter !== 'all' && (
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full capitalize text-[10px]">
                    Tipe: {selectedTypeFilter}
                  </span>
                )}
                {selectedMonthFilter !== 'all' && (
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[10px]">
                    Bulan: {selectedMonthFilter === '04' ? 'April' : selectedMonthFilter === '05' ? 'Mei' : selectedMonthFilter === '06' ? 'Juni' : selectedMonthFilter === '08' ? 'Agustus' : 'September'}
                  </span>
                )}
                <button
                  onClick={() => {
                    setSelectedTypeFilter('all');
                    setSelectedMonthFilter('all');
                  }}
                  className="text-amber-600 hover:text-amber-800 underline font-extrabold ml-1.5 bg-transparent border-none cursor-pointer"
                >
                  Reset Filter
                </button>
              </div>
            </div>
          )}

          {/* Packages Grid */}
          {filteredCatalogPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCatalogPackages.map((pkg) => (
                <PackageCard 
                  key={pkg.id} 
                  pkg={pkg} 
                  onBook={handleBookPackage} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-md max-w-2xl mx-auto">
              <ShieldAlert className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800 font-serif">Tidak Ada Paket yang Cocok</h3>
              <p className="text-sm text-slate-500 mt-2">Maaf, kami tidak menemukan paket umrah untuk kriteria pencarian Anda.</p>
              <button
                onClick={() => {
                  setSelectedTypeFilter('all');
                  setSelectedMonthFilter('all');
                }}
                className="mt-6 bg-emerald-900 text-white font-semibold py-2.5 px-6 rounded-xl text-xs hover:bg-emerald-800 transition-all cursor-pointer"
              >
                Lihat Semua Paket Tour
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Interactive Savings Planner */}
      <SavingsPlanner />

      {/* Keunggulan Kami (5 Pasti Umrah) */}
      <Keunggulan />

      {/* Departures Timeline */}
      <TimelineJadwal onSelectPackage={handleBookPackage} />

      {/* Testimonials */}
      <Testimoni />

      {/* Frequently Asked Questions (FAQ) */}
      <Faq />

      {/* About Us (Tentang Kami) Brand Profile Section */}
      <section id="tentang-kami" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Gallery Left Collage (5 columns) */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=400" 
                    alt="Nabawi Mosque interior" 
                    className="rounded-3xl object-cover aspect-[3/4] shadow-md border border-slate-100"
                  />
                  <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 p-5 rounded-3xl text-white text-center border border-emerald-800">
                    <p className="text-3xl font-extrabold font-serif text-amber-400">100%</p>
                    <p className="text-[10px] text-emerald-200 uppercase tracking-widest font-semibold mt-1">Berizin Resmi PPIU</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-amber-400 p-5 rounded-3xl text-emerald-950 text-center shadow-lg">
                    <p className="text-3xl font-extrabold font-serif">15+</p>
                    <p className="text-[10px] text-emerald-900 uppercase tracking-widest font-bold mt-1">Tahun Pengalaman</p>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400" 
                    alt="Kaaba pilgrims" 
                    className="rounded-3xl object-cover aspect-[3/4] shadow-md border border-slate-100"
                  />
                </div>
              </div>
            </div>

            {/* Content copy Right (7 columns) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-amber-200">
                Profil Perusahaan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-serif leading-tight">
                PT Khalifah Hajj & Umrah: Pelopor Perjalanan Suci Sejak 2011
              </h2>
              <div className="h-1 w-16 bg-amber-500 rounded-full"></div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Didirikan atas dasar ketulusan niat membantu umat Islam di Indonesia menyelenggarakan ibadah umrah dan haji murni yang sah, tertib, dan sesuai Sunnah Rasulullah ﷺ, <strong className="text-emerald-900">Khalifah Tour</strong> tumbuh menjadi salah satu biro travel paling bereputasi tinggi di Indonesia.
                </p>
                <p>
                  Kami menyadari bahwa Umrah adalah ibadah fisik sekaligus spiritual yang agung. Oleh sebab itu, kami memprioritaskan fasilitas hotel di Ring 1 pelataran Masjidil Haram dan Masjid Nabawi, menghindari rute transit penerbangan yang melelahkan, serta menyusun katering masakan nusantara dengan kebersihan prima.
                </p>
                <p>
                  Dengan akreditasi <strong>A</strong> dari Komite Akreditasi Nasional, kami terus dipercaya oleh puluhan ribu alumni jamaah sebagai kawan setia perjalanan spiritual menjemput ampunan dan keberkahan di tanah suci.
                </p>
              </div>

              {/* Core Values grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-50 text-emerald-900 p-2 rounded-xl mt-1 shrink-0">
                    <Sparkles className="h-4.5 w-4.5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Visi Sunnah Madani</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Menyelenggarakan manasik & bimbingan murni sesuai dalil shahih Sunnah.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-50 text-emerald-900 p-2 rounded-xl mt-1 shrink-0">
                    <Award className="h-4.5 w-4.5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Amanah & Transparan</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Semua biaya diungkapkan tanpa ada tarif tersembunyi (hidden fees) di belakang.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Booking & Consultation Form Section */}
      <ConsultationForm preselectedPackageName={preselectedPackageName} />

      {/* Sticky Quick WA Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="https://api.whatsapp.com/send?phone=628112345678&text=Assalamualaikum%20Khalifah%20Tour%2C%20saya%20tertarik%20tanya%20jawab%20mengenai%20paket%20umrah"
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group text-sm"
          title="Hubungi Admin WhatsApp"
        >
          {/* Custom WA green icon */}
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.428 1.973 13.961 1.05 11.4 1.05c-5.441 0-9.866 4.372-9.87 9.802 0 1.772.487 3.5 1.411 5.016l-.995 3.637 3.702-.951zm12.193-7.228c-.347-.173-2.054-1.012-2.37-1.128-.317-.116-.549-.174-.78.174-.23.347-.89 1.128-1.092 1.36-.201.23-.404.26-.75.087-.346-.173-1.462-.539-2.785-1.716-1.03-.918-1.725-2.052-1.927-2.4-.202-.347-.021-.534.152-.707.156-.156.347-.404.52-.607.173-.203.23-.347.347-.578.115-.23.058-.433-.029-.607-.087-.174-.78-1.88-.1.347-.433 1.157-1.092 1.157-1.157 0-.578-.346-1.414-.665-2.903-.787-1.488-.122-2.613-.231-3.045-.029-.433-.087-.723.144-.954.23-.23.23-.347.46-.578.23-.23.346-.462.46-.693.117-.231.059-.434-.028-.607-.087-.174-.78-1.88-.1-.347" />
          </svg>
          <span className="hidden sm:inline font-bold">Konsultasi WA (Fast Response)</span>
        </a>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}
