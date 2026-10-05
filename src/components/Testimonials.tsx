import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: 'Nadia Safira',
      city: 'Jakarta Selatan',
      variant: 'Lavender Dreamscape',
      rating: 5,
      content: 'Biasanya susah rileks setelah meeting seharian di depan laptop. Lilin Lavender dari Glow & Chill ini wanginya lembut banget, nggak bikin enek atau pusing. 20 menit setelah dinyalakan sebelum tidur, kamar langsung terasa seperti spa bintang lima.',
    },
    {
      name: 'Dimas Aditya',
      city: 'Bandung',
      variant: 'Morning Roasted Coffee',
      rating: 5,
      content: 'Varian Coffee beneran penyelamat saya pas kerja remote (WFH). Aromanya mirip banget kopi biji sangrai fresh di cafe artisan. Bikin mood kerja fokus seharian dan lilinnya tahan lama banget, sudah 2 minggu masih banyak.',
    },
    {
      name: 'Clara Meisya',
      city: 'Surabaya',
      variant: 'Warm Vanilla Bakery',
      rating: 5,
      content: 'Wangi Bakery ini definisi kenyamanan! Begitu dinyalakan, satu rumah wanginya kayak baru manggang kue cookies vanila hangat. Packagingnya rapi, pesan lewat WA langsung dibalas cepat dan ramah.',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FAF8F5] border-b border-[#EAE3DB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C6D3B] mb-2 font-mono">
            <span>Ulasan Pelanggan</span>
            <span aria-hidden="true" className="text-[#CBB59F]">·</span>
            <span>Cerita Nyata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B231D] tracking-tight mb-3">
            Apa Kata Mereka yang Sudah Merasakan Ketenangan Ini?
          </h2>
          <p className="text-sm text-[#665B51]">
            Dengarkan pengalaman autentik para penikmat aromaterapi yang telah mengisi sudut rumah mereka dengan Glow & Chill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-7 border border-[#E8DFD5] flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#C27835] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#4E443A] leading-relaxed mb-6 italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0E8DE] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#2B231D]">{rev.name}</h4>
                  <p className="text-[11px] text-[#8C7A6D]">{rev.city}</p>
                </div>
                <span className="text-[11px] font-mono text-[#A76326] bg-[#FAF5EE] px-2 py-0.5 border border-[#EAE3DB]">
                  {rev.variant}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
