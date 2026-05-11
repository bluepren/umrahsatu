import { useState, useEffect } from 'react';
import { Landmark, Calendar, Award, CheckCircle, Calculator, Wallet, Coins, UserCheck } from 'lucide-react';
import { packagesData } from '../data/packages';

export default function SavingsPlanner() {
  const [selectedPackageId, setSelectedPackageId] = useState(packagesData[0].id);
  const [customBudget, setCustomBudget] = useState(30000000);
  const [isCustom, setIsCustom] = useState(false);
  const [initialDeposit, setInitialDeposit] = useState(5000000);
  const [savingMonths, setSavingMonths] = useState(24);

  // Form states
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [simulatedAccNo, setSimulatedAccNo] = useState('');

  // Target Budget Calculation
  const selectedPackage = packagesData.find(p => p.id === selectedPackageId);
  const targetBudget = isCustom ? customBudget : (selectedPackage?.price || 30000000);
  
  // Calculate Savings Breakdown
  const remainingBudget = Math.max(0, targetBudget - initialDeposit);
  const monthlySavings = remainingBudget > 0 ? Math.round(remainingBudget / savingMonths) : 0;
  const weeklySavings = Math.round(monthlySavings / 4);
  const dailySavings = Math.round(monthlySavings / 30);

  useEffect(() => {
    // If custom is toggled off, reset initial deposit limit if it exceeds package price
    if (!isCustom && selectedPackage && initialDeposit >= selectedPackage.price) {
      setInitialDeposit(Math.round(selectedPackage.price * 0.15));
    }
  }, [isCustom, selectedPackageId]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  const handleApplySavings = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullname || !phone) return;

    // Generate a beautiful simulated Virtual Account No
    const randBank = ['MANDIRI SYARIAH', 'BSI', 'MUAMALAT', 'BCA SYARIAH'][Math.floor(Math.random() * 4)];
    const randNo = '8802-' + Math.floor(1000 + Math.random() * 9000) + '-' + Math.floor(1000 + Math.random() * 9000);
    setSimulatedAccNo(`${randBank} - ${randNo}`);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullname('');
    setPhone('');
  };

  return (
    <section id="tabungan" className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
            Program Tabungan Umrah Syariah (Bebas Riba)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-serif mt-4">
            Rencanakan Safar Suci Anda Sejak Dini
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Niat ikhlas kini didukung perencanaan matang. Hitung simpanan rutin Anda untuk mewujudkan impian menginjakkan kaki di Baitullah secara amanah tanpa terbebani pinjaman berbunga.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Interactive Calculator (8 columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                <div className="bg-emerald-100 text-emerald-900 rounded-xl p-2">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Simulasi Kalkulator Mandiri</h3>
                  <p className="text-xs text-slate-500">Sesuaikan target paket, jangka waktu, dan setoran awal Anda</p>
                </div>
              </div>

              {/* Step 1: Select Budget Type */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2.5">
                  Langkah 1: Pilih Target Pembiayaan
                </label>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={() => setIsCustom(false)}
                    className={`py-2.5 px-4 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      !isCustom 
                        ? 'bg-emerald-900 text-white border-emerald-950 shadow' 
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Berdasarkan Paket Tour
                  </button>
                  <button
                    onClick={() => setIsCustom(true)}
                    className={`py-2.5 px-4 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      isCustom 
                        ? 'bg-emerald-900 text-white border-emerald-950 shadow' 
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Atur Nominal Mandiri
                  </button>
                </div>

                {!isCustom ? (
                  <select
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="w-full bg-slate-50 text-slate-800 rounded-xl py-3 px-4 border border-slate-200 focus:border-emerald-600 focus:outline-none text-sm font-medium"
                  >
                    {packagesData.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.duration} Hari) — {formatCurrency(p.price)}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>Ketik Jumlah Anggaran</span>
                      <span className="font-bold text-emerald-900">{formatCurrency(customBudget)}</span>
                    </div>
                    <input
                      type="range"
                      min={25000000}
                      max={100000000}
                      step={1000000}
                      value={customBudget}
                      onChange={(e) => setCustomBudget(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-800"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                      <span>Rp 25.000.000</span>
                      <span>Rp 60.000.000</span>
                      <span>Rp 100.000.000</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Initial Deposit */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Langkah 2: Setoran Awal (DP Tabungan)
                  </label>
                  <span className="text-sm font-extrabold text-emerald-900">{formatCurrency(initialDeposit)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={Math.round(targetBudget * 0.5)}
                  step={500000}
                  value={initialDeposit}
                  onChange={(e) => setInitialDeposit(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-800"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
                  <span>Tanpa Setoran Awal (Rp 0)</span>
                  <span>Maksimal 50% Anggaran ({formatCurrency(Math.round(targetBudget * 0.5))})</span>
                </div>
              </div>

              {/* Step 3: Duration (Timeline Months) */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2.5">
                  Langkah 3: Jangka Waktu Menabung
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[12, 18, 24, 36].map((m) => (
                    <button
                      key={m}
                      onClick={() => setSavingMonths(m)}
                      className={`py-3 rounded-xl text-center text-sm font-bold border transition-all cursor-pointer ${
                        savingMonths === m
                          ? 'bg-emerald-900 text-amber-300 border-emerald-950 shadow-md scale-105'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {m} Bulan
                      <span className="block text-[10px] font-normal text-slate-400 mt-0.5">({(m/12).toFixed(1)} Thn)</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Savings Milestones / Visual Track */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="bg-emerald-950 text-white rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Coins className="h-4 w-4" />
                  Kalkulasi Rencana Anggaran
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 border-r border-emerald-800">
                    <p className="text-[10px] text-emerald-300 uppercase font-semibold">Total Target</p>
                    <p className="text-sm sm:text-base font-extrabold font-serif text-white">{formatCurrency(targetBudget)}</p>
                  </div>
                  <div className="p-2 border-r border-emerald-800">
                    <p className="text-[10px] text-emerald-300 uppercase font-semibold">Sudah Disetor</p>
                    <p className="text-sm sm:text-base font-extrabold font-serif text-white">{formatCurrency(initialDeposit)}</p>
                  </div>
                  <div className="p-2">
                    <p className="text-[10px] text-emerald-300 uppercase font-semibold">Kekurangan</p>
                    <p className="text-sm sm:text-base font-extrabold font-serif text-amber-400">{formatCurrency(remainingBudget)}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive saving goal report (5 columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 border-b border-emerald-800 pb-4 mb-6">
                <div className="bg-amber-400 text-emerald-950 rounded-xl p-2 font-bold shadow-md">
                  <Wallet className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Rekomendasi Setoran</h3>
                  <p className="text-xs text-emerald-300">Target terukur & rasional tanpa membebani</p>
                </div>
              </div>

              {/* Highlight Month Rate */}
              <div className="bg-emerald-950/60 p-5 rounded-2xl border border-emerald-800 mb-6 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">Rekomendasi Bulanan</span>
                <p className="text-3xl sm:text-4xl font-extrabold font-serif text-amber-400 mt-1">
                  {formatCurrency(monthlySavings)}
                </p>
                <p className="text-xs text-emerald-200 mt-1.5">Selama {savingMonths} bulan berturut-turut</p>
              </div>

              {/* Weekly and Daily micro breakdowns */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/40">
                  <span className="text-[10px] font-semibold text-emerald-300 block uppercase tracking-wider">Setara Mingguan</span>
                  <p className="font-extrabold text-white text-base mt-0.5">{formatCurrency(weeklySavings)}</p>
                  <p className="text-[10px] text-emerald-400 mt-1">Satu kali setor seminggu</p>
                </div>
                <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/40">
                  <span className="text-[10px] font-semibold text-emerald-300 block uppercase tracking-wider">Setara Harian</span>
                  <p className="font-extrabold text-amber-300 text-base mt-0.5">{formatCurrency(dailySavings)}</p>
                  <p className="text-[10px] text-emerald-400 mt-1">Setara secangkir kopi biasa!</p>
                </div>
              </div>

              {/* High trust guarantee points */}
              <div className="space-y-3.5 mb-6 text-xs text-emerald-100">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>100% Bebas Riba & Denda</strong>: Tabungan dikelola murni atas nama Anda sendiri secara mudharabah.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Kemitraan Bank Syariah</strong>: Kerja sama resmi auto-debet dengan BSI (Bank Syariah Indonesia) & Bank Muamalat.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Harga Terkunci (Anti Inflasi)</strong>: Bagi jamaah yang telah menabung minimal 50% anggaran, harga paket diikat dari fluktuasi inflasi masa depan.</span>
                </div>
              </div>
            </div>

            {/* Quick Online Registration Form */}
            <div className="pt-4 border-t border-emerald-800">
              {!isSubmitted ? (
                <form onSubmit={handleApplySavings} className="space-y-3">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest text-center">
                    Buka Virtual Account Simulasi Anda
                  </p>
                  <div className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap Anda"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className="w-full bg-emerald-950 text-white rounded-xl py-2.5 px-4 border border-emerald-800 text-xs focus:outline-none focus:border-amber-400 placeholder-emerald-700"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="No. WhatsApp Aktif (e.g. 0812...)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-emerald-950 text-white rounded-xl py-2.5 px-4 border border-emerald-800 text-xs focus:outline-none focus:border-amber-400 placeholder-emerald-700"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-emerald-950 font-bold py-3 px-4 rounded-xl text-xs hover:from-amber-400 hover:to-amber-300 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <UserCheck className="h-4 w-4" />
                    <span>Daftar Tabungan & Buat Rekening</span>
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-950/80 p-5 rounded-2xl border border-amber-500/30 text-center space-y-4 animate-in fade-in zoom-in-95 duration-150">
                  <div className="bg-amber-400 text-emerald-950 rounded-full h-12 w-12 flex items-center justify-center mx-auto text-xl font-bold shadow-lg">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-amber-300 text-sm">Pendaftaran Berhasil!</h4>
                    <p className="text-[10px] text-emerald-300 mt-1">Simulasi Virtual Account Tabungan Anda telah dibuat:</p>
                    <p className="text-sm font-extrabold font-mono tracking-wider text-white mt-1.5 bg-emerald-900 py-1.5 px-3 rounded-lg border border-emerald-800">
                      {simulatedAccNo}
                    </p>
                  </div>
                  <p className="text-[10px] text-emerald-200 italic leading-relaxed">
                    Halo Bapak/Ibu <strong>{fullname}</strong>, tim kami akan mengirimkan rincian jadwal setoran bulanan {formatCurrency(monthlySavings)} ke nomor WhatsApp Anda <strong>{phone}</strong> dalam 1x24 Jam.
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-xs text-amber-400 underline hover:text-amber-300 transition-colors bg-transparent border-0 cursor-pointer font-semibold block mx-auto"
                  >
                    Buat Simulasi Baru
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Dynamic info badges row at bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 text-emerald-950 p-2.5 rounded-xl">
              <Landmark className="h-5 w-5 text-emerald-800" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-800 uppercase">Aman Terpercaya</h5>
              <p className="text-[11px] text-slate-500">Bekerja sama dengan perbankan syariah legal berizin OJK.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 text-emerald-950 p-2.5 rounded-xl">
              <Calendar className="h-5 w-5 text-emerald-800" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-800 uppercase">Jadwal Fleksibel</h5>
              <p className="text-[11px] text-slate-500">Gunakan tabungan Anda kapan saja setelah saldo mencukupi.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 text-emerald-950 p-2.5 rounded-xl">
              <Award className="h-5 w-5 text-emerald-800" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-800 uppercase">Tanpa Denda</h5>
              <p className="text-[11px] text-slate-500">Tidak ada pinalti jika terlambat menyetor, murni saling rida.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
