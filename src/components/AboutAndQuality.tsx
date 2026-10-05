import { Check, X, Leaf, Heart, Wind, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutAndQuality() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE3DB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C6D3B] mb-3 font-mono">
              <span>Keunggulan Bahan</span>
              <span aria-hidden="true" className="text-[#CBB59F]">·</span>
              <span>100% Natural Soy Wax</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B231D] tracking-tight [text-wrap:balance]">
              Mengapa Lilin Kami Berbeda dari Lilin Parafin Biasa?
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#665B51] leading-relaxed">
              Banyak lilin komersial menggunakan parafin berbasis turunan minyak bumi yang mengeluarkan jelaga hitam. Glow & Chill hanya menggunakan lilin kedelai nabati murni (soy wax) yang ramah napas, aman untuk anak-anak serta hewan peliharaan.
            </p>
          </div>
        </div>

        {/* Comparison Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Soy Wax Card (Glow & Chill) */}
          <div className="bg-[#F8F5EE] border-2 border-[#C27835] p-7 sm:p-9 relative">
            <div className="absolute -top-3.5 right-6 bg-[#C27835] text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              Standar Glow & Chill
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#EFE3D5] flex items-center justify-center text-[#A76326]">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2B231D]">
                  100% Pure Soy Wax
                </h3>
                <p className="text-xs text-[#8C7A6D]">Kedelai Alami Terbarukan</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-[#473E36]">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-[#D1FAE5] text-[#065F46] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  <strong className="text-[#2B231D]">Bersih & Tanpa Asap Jelaga:</strong> Pembakaran murni tanpa residu karbon hitam di dinding atau langit-langit kamar.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-[#D1FAE5] text-[#065F46] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  <strong className="text-[#2B231D]">Durasi Nyala 50% Lebih Lama:</strong> Titik leleh soy wax lebih rendah sehingga mencair perlahan hingga 45+ jam.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-[#D1FAE5] text-[#065F46] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  <strong className="text-[#2B231D]">Penyebaran Aroma Halus (Scent Throw):</strong> Aroma esensial menguap merata dan lembut tanpa memicu rasa pusing kepala.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-[#D1FAE5] text-[#065F46] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  <strong className="text-[#2B231D]">Sumbu Ramah Lingkungan:</strong> Menggunakan sumbu katun bebas timbal & wood wick berderik menenangkan.
                </span>
              </li>
            </ul>
          </div>

          {/* Paraffin Wax Card */}
          <div className="bg-white border border-[#E0D5C9] p-7 sm:p-9 opacity-85">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#F2EDE7] flex items-center justify-center text-[#7A6B5E]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#453D35]">
                  Lilin Parafin Konvensional
                </h3>
                <p className="text-xs text-[#8C7A6D]">Bahan Kimia Sintetis Minyak Bumi</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-[#665B51]">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-100 text-red-700 shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  <strong className="text-[#3D352E]">Asap Hitam Pekat:</strong> Melepaskan partikel jelaga dan bahan kimia sintetis seperti benzena ke dalam sirkulasi ruangan.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-100 text-red-700 shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  <strong className="text-[#3D352E]">Cepat Habis:</strong> Titik leleh tinggi membuat lilin terbakar terlalu panas dan menguap sangat cepat.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-100 text-red-700 shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  <strong className="text-[#3D352E]">Aroma Terlalu Tajam:</strong> Menggunakan wewangian sintetis pekat yang sering menyebabkan mual dan sakit kepala.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-red-100 text-red-700 shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  <strong className="text-[#3D352E]">Tidak Terbarukan:</strong> Menghasilkan limbah karbon yang tidak dapat terurai secara alami.
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
