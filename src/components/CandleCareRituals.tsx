import { Scissors, Timer, Shield, Flame } from 'lucide-react';

export function CandleCareRituals() {
  const rituals = [
    {
      step: '01',
      icon: Scissors,
      title: 'Pangkas Sumbu (Trim Wick)',
      description: 'Potong sumbu lilin sekitar 5 mm sebelum setiap pembakaran. Sumbu yang rapi mencegah api terlalu besar dan nyala asap berlebih.',
    },
    {
      step: '02',
      icon: Timer,
      title: 'Bakar Pertama 2–3 Jam',
      description: 'Pada pembakaran pertama kali, biarkan seluruh lapisan atas lilin mencair merata hingga ke tepi wadah untuk mencegah lilin berlubang (tunneling).',
    },
    {
      step: '03',
      icon: Shield,
      title: 'Hindari Angin Kencang',
      description: 'Jauhkan lilin dari tiupan AC langsung, kipas angin, atau jendela terbuka agar pembakaran tetap stabil dan aroma menyebar maksimal.',
    },
    {
      step: '04',
      icon: Flame,
      title: 'Matikan Lilin dengan Lembut',
      description: 'Gunakan tutup kayu wadah atau snuffer lilin daripada meniup keras. Hal ini menjaga sumbu tetap di tengah dan bebas percikan abu.',
    },
  ];

  return (
    <section id="panduan" className="py-20 md:py-24 bg-[#FAF8F5] border-b border-[#EAE3DB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C6D3B] mb-2 font-mono">
            <span>Panduan Perawatan</span>
            <span aria-hidden="true" className="text-[#CBB59F]">·</span>
            <span>Candle Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B231D] tracking-tight mb-3 [text-wrap:balance]">
            Ritual Membakar Lilin Agar Awet & Maksimal
          </h2>
          <p className="text-sm text-[#665B51]">
            Ikuti 4 langkah mudah ini agar lilin aromaterapi Glow & Chill Anda membakar sempurna hingga tetes wax terakhir.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rituals.map((ritual) => {
            const Icon = ritual.icon;
            return (
              <div
                key={ritual.step}
                className="bg-white p-6 border border-[#E8DFD5] hover:border-[#CBB59F] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold font-mono text-[#C27835]">
                      {ritual.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF5EE] text-[#A76326] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#2B231D] mb-2">
                    {ritual.title}
                  </h3>

                  <p className="text-xs text-[#665B51] leading-relaxed">
                    {ritual.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
