import { Flame, ShieldCheck, Clock, ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreClick: () => void;
  onOrderClick: () => void;
}

export function Hero({ onExploreClick, onOrderClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#EAE3DB]">
      {/* Subtle warm decorative glow */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F5E6D3]/60 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quiet metadata line without pills */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C6D3B] mb-4"
            >
              <span>Hand-Poured Soy Wax</span>
              <span aria-hidden="true" className="text-[#CBB59F]">·</span>
              <span>Therapeutic Grade Scent</span>
              <span aria-hidden="true" className="text-[#CBB59F]">·</span>
              <span>Artisanal Batch</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2B231D] leading-[1.15] tracking-tight mb-6 [text-wrap:balance]"
            >
              Nyalakan Ketenangan, Hangatkan Suasana Rumah Anda.
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#665B51] font-normal leading-relaxed mb-8 max-w-xl"
            >
              Lilin aromaterapi <strong className="font-semibold text-[#2B231D]">Glow & Chill</strong> diformulasikan dari 100% natural soy wax murni dan minyak aromaterapi terapeutik. Hadir dalam 4 aroma esensial: <span className="text-[#2B231D] font-medium">Lavender, Coffee, Tea,</span> dan <span className="text-[#2B231D] font-medium">Bakery</span> untuk menciptakan jeda yang tenang di tengah hiruk-pikuk harian Anda.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
            >
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-[#2B231D] text-white text-sm font-semibold tracking-wide hover:bg-[#43352B] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Eksplorasi 4 Varian Produk</span>
                <ArrowDown className="w-4 h-4 text-[#D89350]" />
              </button>

              <button
                onClick={onOrderClick}
                className="px-6 py-3.5 border border-[#8C7462] text-[#2B231D] hover:bg-[#F3ECE4] active:scale-[0.98] transition-all text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Pesan Cepat via WhatsApp</span>
              </button>
            </motion.div>

            {/* Claim-to-Proof Adjacency Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-[#EAE3DB] grid grid-cols-3 gap-3 text-left"
            >
              <div>
                <div className="flex items-center gap-1.5 text-[#C27835] mb-1">
                  <Flame className="w-4 h-4" />
                  <span className="text-sm font-bold text-[#2B231D] font-mono tabular-nums">45+ Jam</span>
                </div>
                <p className="text-xs text-[#7A6E64]">Waktu Bakar Optimal</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#C27835] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm font-bold text-[#2B231D]">100% Alami</span>
                </div>
                <p className="text-xs text-[#7A6E64]">Soy Wax Bebas Toksin</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#C27835] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-bold text-[#2B231D]">Clean Burn</span>
                </div>
                <p className="text-xs text-[#7A6E64]">Tanpa Jelaga Hitam</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] w-full overflow-hidden bg-[#ECE3D8] border border-[#DDD3C7] shadow-xl">
              <img
                src="/src/assets/images/main.jpg"
                alt="Lilin aromaterapi Glow & Chill artisanal pot semen estetik dengan varian Bakery dan Tea beserta kemasan signature"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700 ease-out"
                onError={(e) => {
                  // Fallback container in case of loading issues
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              
              {/* Subtle ambient lighting vignette overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#1F1915]/60 via-transparent to-transparent pointer-events-none" 
              />

              {/* Minimal caption badge in image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/95 drop-shadow-sm font-medium">
                <span className="font-serif italic text-sm tracking-wide">Signature Artisan Pots</span>
                <span className="text-[11px] uppercase tracking-wider text-amber-200 font-mono">Glow & Chill Studio</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
