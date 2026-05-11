import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqData } from '../data/packages';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
            Pertanyaan Umum Jamaah (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-serif mt-4">
            Informasi Penting Sebelum Mendaftar
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Punya pertanyaan mengenai keberangkatan, syarat dokumen, atau tata cara pembatalan? Temukan jawaban lengkap atas kekhawatiran Anda di bawah ini.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? 'text-amber-500' : 'text-emerald-700'}`} />
                    <span className="text-sm sm:text-base text-slate-800 font-serif font-bold">{faq.question}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-amber-500' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Center CTA */}
        <div className="mt-12 text-center bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-emerald-800">
          <h4 className="text-lg font-bold font-serif text-white mb-2">Masih Memiliki Pertanyaan Lain?</h4>
          <p className="text-xs sm:text-sm text-emerald-200 max-w-xl mx-auto leading-relaxed mb-6">
            Tim Layanan Pelanggan kami siap sedia menjawab seluruh detail pertanyaan Anda dengan senang hati demi kenyamanan rencana ibadah Anda.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=628112345678&text=Assalamualaikum%20Khalifah%20Tour%2C%20saya%20ingin%20bertanya%20mengenai%20syarat%20pendaftaran%20umrah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 text-emerald-950 hover:bg-amber-300 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors"
          >
            <span>Hubungi Customer Service</span>
          </a>
        </div>

      </div>
    </section>
  );
}
