import { useState, useEffect } from 'react';
import { Phone, Users, Calendar, Calculator, Sparkles, Check, Send, AlertTriangle } from 'lucide-react';
import { packagesData } from '../data/packages';

interface ConsultationFormProps {
  preselectedPackageName?: string;
}

export default function ConsultationForm({ preselectedPackageName }: ConsultationFormProps) {
  const [selectedPackageTitle, setSelectedPackageTitle] = useState(packagesData[0].title);
  const [paxCount, setPaxCount] = useState(1);
  const [fullname, setFullname] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [extraLuggage, setExtraLuggage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Handle preselection if user clicked "Pesan Kursi" on packages catalog
  useEffect(() => {
    if (preselectedPackageName) {
      setSelectedPackageTitle(preselectedPackageName);
      // scroll to consultation form
      const element = document.getElementById('hubungi-kami');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preselectedPackageName]);

  const selectedPkg = packagesData.find(p => p.title === selectedPackageTitle) || packagesData[0];
  const equipmentFeePerPax = 1500000;
  const packageCost = selectedPkg.price * paxCount;
  const equipmentCost = equipmentFeePerPax * paxCount;
  const extraLuggageCost = extraLuggage ? 750000 * paxCount : 0;
  const totalCost = packageCost + equipmentCost + extraLuggageCost;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullname || !whatsapp) return;

    // Generate a simulated reservation code
    const randCode = 'KT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randCode);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const waNumber = '628112345678';
    const message = `Bismillah, saya ingin berkonsultasi mengenai booking Umrah.\n\n` +
      `*KODE SIMULASI:* ${bookingRef}\n` +
      `*Nama Lengkap:* ${fullname}\n` +
      `*No. WhatsApp:* ${whatsapp}\n` +
      `*Asal Kota:* ${city}\n` +
      `*Paket Tour:* ${selectedPkg.title}\n` +
      `*Bulan Berangkat:* ${selectedPkg.departureDate}\n` +
      `*Jumlah Jamaah:* ${paxCount} Orang\n` +
      `*Layanan Tambahan:* ${extraLuggage ? 'Koper Ekstra 30kg' : 'Standar Koper'}\n` +
      `*Total Simulasi:* ${formatCurrency(totalCost)}\n\n` +
      `*Catatan Tambahan:* ${notes || '-'}\n\n` +
      `Mohon dibantu informasi tata cara pembayaran DP dan kelengkapan dokumennya. Terima kasih.`;
    
    const url = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="hubungi-kami" className="py-20 bg-emerald-950 text-white relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=1200')` }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Informational left column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="bg-emerald-900 border border-emerald-700 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest w-fit block">
              Reservasi & Konsultasi Langsung
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif leading-tight">
              Amankan Kuota Kursi Keberangkatan Anda
            </h2>
            <div className="h-1 w-16 bg-amber-400 rounded-full"></div>
            
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Silakan isi formulir simulasi booking ini. Sistem kami akan langsung menghitung estimasi biaya all-in. Anda dapat mengklik kirim langsung ke WhatsApp konsultan resmi kami untuk dibantu registrasi resmi.
            </p>

            <div className="space-y-4 pt-4 border-t border-emerald-900">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-900 text-amber-400 p-2.5 rounded-xl border border-emerald-800">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Konsultasi Telepon / WA</h4>
                  <p className="text-xs text-emerald-200">0811-2345-678 (24 Jam Fast Response)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-emerald-900 text-amber-400 p-2.5 rounded-xl border border-emerald-800">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Alamat Kantor Pusat</h4>
                  <p className="text-xs text-emerald-200">Khalifah Tower Building Lantai 3, Jl. Jend. Sudirman No. 45, Jakarta Selatan, DKI Jakarta</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-900/40 border border-emerald-800 rounded-2xl text-xs text-emerald-200 flex items-start gap-2.5">
              <AlertTriangle className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
              <span>Sesuai aturan Kemenag RI, pembayaran sah pendaftaran Umrah hanya melalui Rekening Resmi beratasnamakan <strong>PT KHALIFAH HAJJ & UMRAH</strong>. Kami tidak bertanggung jawab atas pembayaran ke rekening pribadi sales.</span>
            </div>
          </div>

          {/* Form & Cost simulator column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-800/20 relative overflow-hidden">
              
              {!submitted ? (
                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Left Column: Form Inputs */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-emerald-950 text-base border-b border-slate-100 pb-2 mb-2 flex items-center gap-1.5">
                      <Users className="h-4.5 w-4.5 text-emerald-800" />
                      <span>Data Pemohon</span>
                    </h3>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Nama Lengkap Pemesan</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Muhammad Furqon"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Nomor WhatsApp Aktif</label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567890"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Kota Tinggal Saat Ini</label>
                      <input
                        type="text"
                        placeholder="Contoh: Jakarta / Bandung"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm focus:outline-none focus:border-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Jumlah Orang (Pax)</label>
                        <select
                          value={paxCount}
                          onChange={(e) => setPaxCount(Number(e.target.value))}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:border-emerald-600"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <option key={n} value={n}>{n} Orang</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Koper Ekstra (30kg)</label>
                        <button
                          type="button"
                          onClick={() => setExtraLuggage(!extraLuggage)}
                          className={`w-full py-2 px-3 text-xs font-bold rounded-xl border transition-all h-10 ${
                            extraLuggage 
                              ? 'bg-amber-100 border-amber-400 text-amber-900 font-extrabold' 
                              : 'bg-slate-50 border-slate-200 text-slate-500'
                          }`}
                        >
                          {extraLuggage ? '✓ Ya (+750K)' : 'Tidak Tambah'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Cost Simulator Calculation */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-emerald-950 text-base border-b border-slate-100 pb-2 mb-3 flex items-center gap-1.5">
                        <Calculator className="h-4.5 w-4.5 text-emerald-800" />
                        <span>Kalkulasi & Pilihan Paket</span>
                      </h3>

                      <div className="mb-4">
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Pilih Rencana Paket</label>
                        <select
                          value={selectedPackageTitle}
                          onChange={(e) => setSelectedPackageTitle(e.target.value)}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:border-emerald-600 font-semibold"
                        >
                          {packagesData.map(p => (
                            <option key={p.id} value={p.title}>{p.title}</option>
                          ))}
                        </select>
                        <p className="text-[10px] text-emerald-700 font-medium mt-1">Berangkat: {selectedPkg.departureDate}</p>
                      </div>

                      {/* Line Item Receipt */}
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs space-y-2.5">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Paket ({paxCount} Pax)</span>
                          <span className="font-semibold">{formatCurrency(packageCost)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Perlengkapan & Sisko ({paxCount} Pax)</span>
                          <span className="font-semibold">{formatCurrency(equipmentCost)}</span>
                        </div>
                        {extraLuggage && (
                          <div className="flex justify-between">
                            <span className="text-slate-500">Ekstra Koper ({paxCount} Pax)</span>
                            <span className="font-semibold text-emerald-700">{formatCurrency(extraLuggageCost)}</span>
                          </div>
                        )}
                        <div className="border-t border-dashed border-slate-200 my-2 pt-2 flex justify-between font-bold text-sm text-slate-800">
                          <span>Total Estimasi Biaya</span>
                          <span className="text-emerald-900">{formatCurrency(totalCost)}</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Catatan Khusus (Opsional)</label>
                        <textarea
                          placeholder="Misal: Sekamar ber-4, membutuhkan kursi roda, dll."
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-emerald-600 focus:bg-white resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-emerald-950 font-extrabold py-3.5 px-4 rounded-xl text-xs hover:from-amber-400 hover:to-amber-300 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/10 mt-6"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>Hitung Rincian & Lanjut Booking</span>
                    </button>
                  </div>

                </form>
              ) : (
                <div className="text-center py-8 px-4 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="bg-emerald-100 text-emerald-800 h-16 w-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto border-4 border-emerald-50">
                    <Check className="h-8 w-8" />
                  </div>
                  
                  <div>
                    <h3 className="font-extrabold text-2xl text-emerald-950 font-serif">Simulasi Reservasi Dibuat!</h3>
                    <p className="text-xs text-slate-500 mt-1">Kode Referensi Simulasi Anda:</p>
                    <p className="text-xl font-mono font-extrabold tracking-widest text-emerald-800 bg-emerald-50 py-2.5 px-4 rounded-xl border border-emerald-100 inline-block mt-1">
                      {bookingRef}
                    </p>
                  </div>

                  <div className="max-w-md mx-auto text-xs text-slate-600 leading-relaxed space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <p className="font-bold text-slate-800">RINGKASAN SIMULASI BOOKING:</p>
                    <div className="grid grid-cols-2 gap-1 text-left">
                      <span className="text-slate-400">Nama Lengkap:</span>
                      <span className="font-semibold text-slate-800">{fullname}</span>
                      <span className="text-slate-400">Rencana Paket:</span>
                      <span className="font-semibold text-slate-800">{selectedPkg.title}</span>
                      <span className="text-slate-400">Kapasitas:</span>
                      <span className="font-semibold text-slate-800">{paxCount} Orang (Pax)</span>
                      <span className="text-slate-400">Total Biaya:</span>
                      <span className="font-extrabold text-emerald-800">{formatCurrency(totalCost)}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full max-w-md bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-xs hover:from-emerald-500 hover:to-emerald-400 transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto shadow-lg shadow-emerald-700/20"
                    >
                      <Send className="h-4 w-4" />
                      <span>Kirim Detail Rincian Ke WhatsApp Konsultan</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFullname('');
                        setWhatsapp('');
                        setNotes('');
                        setExtraLuggage(false);
                      }}
                      className="text-xs text-slate-400 hover:text-emerald-800 transition-colors font-semibold bg-transparent border-0 cursor-pointer"
                    >
                      Kembali Isi Formulir Baru
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
