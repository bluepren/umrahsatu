import { useState, useEffect } from 'react';
import { Compass, Phone, ShieldCheck, Menu, X, Landmark, Clock, Calendar } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Paket Umrah', id: 'paket-umrah' },
    { label: 'Kalkulator Tabungan', id: 'tabungan' },
    { label: 'Keberangkatan', id: 'jadwal' },
    { label: 'Keunggulan', id: 'keunggulan' },
    { label: 'Testimoni', id: 'testimoni' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Tentang Kami', id: 'tentang-kami' }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  // return (
  //   <header className="relative w-full z-50">
  //     {/* Top Banner with trust symbols */}
  //     <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800">
  //       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
  //         <div className="flex items-center space-x-4">
  //           <span className="flex items-center gap-1.5 text-amber-400 font-medium">
  //             <ShieldCheck className="h-4 w-4" />
  //             <span>Izin Resmi Kemenag RI: PPIU No. 124/2022</span>
  //           </span>
  //           <span className="hidden md:flex items-center gap-1.5 text-emerald-300">
  //             <Landmark className="h-3.5 w-3.5" />
  //             <span>Akreditasi A</span>
  //           </span>
  //         </div>
  //         <div className="flex items-center space-x-4">
  //           <a href="tel:+628112345678" className="flex items-center gap-1 hover:text-white transition-colors">
  //             <Phone className="h-3.5 w-3.5 text-amber-400" />
  //             <span>Hotline: 0811-2345-678</span>
  //           </a>
  //           <span className="hidden lg:flex items-center gap-1 text-emerald-300">
  //             <Clock className="h-3.5 w-3.5" />
  //             <span>Senin - Sabtu: 08:30 - 17:00</span>
  //           </span>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Main Navbar */}
  //     <nav
  //       className={`w-full transition-all duration-300 ${
  //         isScrolled
  //           ? 'fixed top-0 left-0 right-0 bg-emerald-900/95 backdrop-blur-md shadow-lg border-b border-emerald-800 py-3'
  //           : 'absolute top-0 left-0 right-0 bg-transparent py-5'
  //       }`}
  //     >
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="flex items-center justify-between">
  //           {/* Logo */}
  //           <div 
  //             className="flex items-center space-x-2 cursor-pointer group"
  //             onClick={() => handleItemClick('hero')}
  //           >
  //             <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-xl shadow-md shadow-amber-900/30 group-hover:scale-105 transition-transform">
  //               <Compass className="h-6 w-6 text-emerald-950" />
  //             </div>
  //             <div>
  //               <div className="flex items-center space-x-1">
  //                 <span className="text-xl font-bold tracking-wider text-white">KHALIFAH</span>
  //                 <span className="text-xl font-light text-amber-400 font-serif">TOUR</span>
  //               </div>
  //               <div className="text-[9px] tracking-[0.25em] text-emerald-300 font-semibold uppercase -mt-1">
  //                 Umrah & Hajj Specialist
  //               </div>
  //             </div>
  //           </div>

  //           {/* Desktop Navigation */}
  //           <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
  //             {navItems.map((item) => (
  //               <button
  //                 key={item.id}
  //                 onClick={() => handleItemClick(item.id)}
  //                 className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
  //                   activeSection === item.id
  //                     ? 'text-amber-400 bg-emerald-800/50 border-b-2 border-amber-400 rounded-b-none'
  //                     : 'text-emerald-100 hover:text-amber-300 hover:bg-emerald-800/30'
  //                 }`}
  //               >
  //                 {item.label}
  //               </button>
  //             ))}
  //           </div>

  //           {/* CTA Buttons */}
  //           <div className="hidden lg:flex items-center space-x-3">
  //             <button
  //               onClick={() => handleItemClick('hubungi-kami')}
  //               className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-emerald-950 font-bold px-5 py-2.5 rounded-xl shadow-lg hover:from-amber-400 hover:to-amber-300 active:scale-95 transition-all duration-150 flex items-center gap-2 text-sm"
  //             >
  //               <Phone className="h-4 w-4 fill-emerald-950" />
  //               <span>Konsultasi Gratis</span>
  //             </button>
  //           </div>

  //           {/* Mobile menu button */}
  //           <div className="lg:hidden">
  //             <button
  //               onClick={() => setIsOpen(!isOpen)}
  //               className="p-2 rounded-lg text-emerald-200 hover:text-amber-400 hover:bg-emerald-800/50 transition-colors focus:outline-none"
  //             >
  //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  //             </button>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Mobile Menu Drawer */}
  //       {isOpen && (
  //         <div className="lg:hidden absolute top-full left-0 right-0 bg-emerald-950/98 backdrop-blur-lg border-b border-emerald-800 py-4 px-4 shadow-2xl transition-all duration-300">
  //           <div className="space-y-1.5">
  //             {navItems.map((item) => (
  //               <button
  //                 key={item.id}
  //                 onClick={() => handleItemClick(item.id)}
  //                 className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
  //                   activeSection === item.id
  //                     ? 'text-amber-400 bg-emerald-900 border-l-4 border-amber-400'
  //                     : 'text-emerald-200 hover:text-amber-300 hover:bg-emerald-900/60'
  //                 }`}
  //               >
  //                 {item.label}
  //               </button>
  //             ))}
  //             <div className="pt-4 border-t border-emerald-800/60 mt-3 space-y-3">
  //               <a
  //                 href="tel:+628112345678"
  //                 className="flex items-center justify-center gap-2 w-full border border-emerald-700 hover:bg-emerald-900/50 text-emerald-200 py-3 rounded-xl text-sm font-semibold transition-colors"
  //               >
  //                 <Phone className="h-4 w-4" />
  //                 <span>0811-2345-678 (Hotline)</span>
  //               </a>
  //               <button
  //                 onClick={() => handleItemClick('hubungi-kami')}
  //                 className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-emerald-950 text-center font-bold py-3.5 rounded-xl shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
  //               >
  //                 <Calendar className="h-4 w-4" />
  //                 <span>Daftar / Konsultasi WA</span>
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </nav>
  //   </header>
  // );
}
