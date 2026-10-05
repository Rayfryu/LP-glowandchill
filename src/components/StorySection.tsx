import { Sparkles, Heart, RefreshCw } from 'lucide-react';

export function StorySection() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-[#F4EEE6] border-b border-[#E3DACF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Story Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C6D3B] mb-3 font-mono">
              <span>Tentang Glow & Chill</span>
              <span aria-hidden="true" className="text-[#CBB59F]">·</span>
              <span>Filosofi Ketenangan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B231D] tracking-tight mb-6 [text-wrap:balance]">
              Menghadirkan Jeda Bernilai di Tengah Kesibukan Hari Anda
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#615448] leading-relaxed">
              <p>
                <strong className="text-[#2B231D]">Glow & Chill</strong> lahir dari keyakinan sederhana: setiap orang layak memiliki setidaknya satu jam setiap hari untuk melambat, bernapas dalam-dalam, dan merasa tenang seutuhnya.
              </p>
              <p>
                Kami meramu setiap lilin secara artisanal dalam batch kecil menggunakan lilin kedelai murni (soy wax) terbarukan dan minyak wangi terapeutik berkualitas tinggi. Tanpa ftalat, tanpa paraben, dan tanpa zat kimia keras.
              </p>
              <p>
                Mulai dari wangi floral rileks Lavender, seduhan hangat Coffee, segarnya pucuk daun Green Tea, hingga kelembutan nostalgia Bakery — keempat aroma ini diciptakan untuk menemani Anda beristirahat, bekerja dengan fokus, atau sekadar menikmati waktu intim bersama orang terkasih.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#DED4C7]">
              <div>
                <h4 className="text-sm font-bold text-[#2B231D] mb-1">Small Batch</h4>
                <p className="text-xs text-[#7A6B5E]">Dituang teliti dengan kontrol kualitas tinggi di setiap jar.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2B231D] mb-1">Eco Jar</h4>
                <p className="text-xs text-[#7A6B5E]">Wadah kaca estetik yang dapat dicuci & digunakan kembali.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2B231D] mb-1">Non-Toxic</h4>
                <p className="text-xs text-[#7A6B5E]">Aman dihirup di ruang tertutup tanpa residu asap hitam.</p>
              </div>
            </div>
          </div>

          {/* Sensory Quote Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 sm:p-10 border border-[#DED4C7] shadow-sm relative">
              <span className="text-5xl font-serif text-[#CBB59F] absolute top-4 left-6">“</span>
              <p className="font-serif italic text-lg sm:text-xl text-[#3D332B] pt-4 mb-6 leading-relaxed">
                Membakar lilin bukan sekadar tentang wewangian ruangan, melainkan tentang mengundang kedamaian pulang ke dalam diri sendiri.
              </p>
              <div className="pt-4 border-t border-[#EAE3DB] flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-[#2B231D]">Tim Pengrajin Lilin</h5>
                  <p className="text-xs text-[#8C7A6D]">Glow & Chill Candle Studio</p>
                </div>
                <span className="text-xs font-mono text-[#A76326] bg-[#FAF5EE] px-2.5 py-1 border border-[#E8DFD5]">
                  Est. 2024
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
