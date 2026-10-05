import { MessageCircle, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241D17] text-[#EDE4DA] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3D3228]">
          
          {/* Brand info */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-serif font-bold text-[#F7F2EB] mb-3 tracking-tight">
              Glow & Chill
            </h3>
            <p className="text-xs sm:text-sm text-[#BDB0A3] leading-relaxed max-w-sm mb-6">
              Lilin aromaterapi artisanal 100% natural soy wax dengan wewangian therapeutic grade. Menghadirkan ketenangan, kehangatan, dan relaksasi murni untuk momen self-care di rumah Anda.
            </p>
            <div className="text-xs text-[#9E9084] space-y-1 font-mono">
              <p>Studio: Jakarta, Indonesia</p>
              <p>Operasional WA: Setiap Hari (08.00 - 21.00 WIB)</p>
            </div>
          </div>

          {/* 4 Variants Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E6A15C] mb-4 font-mono">
              4 Signature Aroma
            </h4>
            <ul className="text-xs space-y-2 text-[#D1C3B5]">
              <li>• Lavender Dreamscape (Floral & Calming)</li>
              <li>• Morning Roasted Coffee (Warm & Focus)</li>
              <li>• Zen White & Green Tea (Fresh & Soothing)</li>
              <li>• Warm Vanilla Bakery (Sweet & Cozy)</li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact Card */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E6A15C] mb-4 font-mono">
              Kontak WhatsApp Langsung
            </h4>
            <p className="text-xs text-[#BDB0A3] mb-4">
              Punya pertanyaan seputar rekomendasi aroma atau pesanan hampers custom?
            </p>
            <a
              href="https://wa.me/628871744274?text=Halo%20Glow%20%26%20Chill!%20Saya%20ingin%20tanya-tanya%20seputar%20lilin%20aromaterapi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2E7D32] hover:bg-[#256829] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat WhatsApp: 0887-1744-274</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7C6F]">
          <p>© {new Date().getFullYear()} Glow & Chill Candle. All rights reserved. Handcrafted with care.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#EDE4DA] transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
