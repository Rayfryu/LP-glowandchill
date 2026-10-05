import { useState } from 'react';
import { Sparkles, MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOrderClick: () => void;
}

export function Navbar({ onOrderClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE3DB] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#2B231D]"
        >
          <span>Glow & Chill</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C27835] group-hover:scale-150 transition-transform duration-300" />
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#685D54]">
          <button 
            onClick={() => scrollTo('koleksi')}
            className="hover:text-[#C27835] transition-colors cursor-pointer"
          >
            Koleksi Varian
          </button>
          <button 
            onClick={() => scrollTo('tentang')}
            className="hover:text-[#C27835] transition-colors cursor-pointer"
          >
            Cerita Kami
          </button>
          <button 
            onClick={() => scrollTo('keunggulan')}
            className="hover:text-[#C27835] transition-colors cursor-pointer"
          >
            Keunggulan
          </button>
          <button 
            onClick={() => scrollTo('panduan')}
            className="hover:text-[#C27835] transition-colors cursor-pointer"
          >
            Ritual Membakar
          </button>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOrderClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#2B231D] hover:bg-[#3E322A] active:scale-95 transition-all shadow-sm rounded-none border border-[#2B231D] cursor-pointer tracking-wider uppercase"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#E6A15C]" />
            <span>Pesan via WhatsApp</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-[#2B231D] hover:text-[#C27835] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#EAE3DB] bg-[#FAF8F5] px-6 py-5 flex flex-col gap-4"
          >
            <button
              onClick={() => scrollTo('koleksi')}
              className="text-left text-base font-medium text-[#4A3F35] hover:text-[#C27835] py-1"
            >
              Koleksi Varian Lilin
            </button>
            <button
              onClick={() => scrollTo('tentang')}
              className="text-left text-base font-medium text-[#4A3F35] hover:text-[#C27835] py-1"
            >
              Cerita Glow & Chill
            </button>
            <button
              onClick={() => scrollTo('keunggulan')}
              className="text-left text-base font-medium text-[#4A3F35] hover:text-[#C27835] py-1"
            >
              Keunggulan Soy Wax
            </button>
            <button
              onClick={() => scrollTo('panduan')}
              className="text-left text-base font-medium text-[#4A3F35] hover:text-[#C27835] py-1"
            >
              Ritual & Perawatan Lilin
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOrderClick();
              }}
              className="w-full mt-2 py-3 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#2B231D] active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-[#E6A15C]" />
              <span>Pesan Sekarang ke WhatsApp</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
