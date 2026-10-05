import { useState } from 'react';
import { PRODUCTS, Product, FORMAT_RUPIAH } from '../data/products';
import { Check, Flame, Sparkles, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCatalogProps {
  selectedProductId: string;
  onSelectProduct: (productId: Product['id']) => void;
}

export function ProductCatalog({ selectedProductId, onSelectProduct }: ProductCatalogProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="koleksi" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE3DB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C6D3B] mb-3">
            <span>Katalog Eksklusif</span>
            <span aria-hidden="true" className="text-[#CBB59F]">/</span>
            <span>4 Varian Signature</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B231D] tracking-tight mb-4 [text-wrap:balance]">
            Pilih Aroma yang Paling Mewakili Suasana Hati Anda
          </h2>
          
          <p className="text-base text-[#665B51] leading-relaxed">
            Setiap lilin Glow & Chill dituangkan tangan dengan formula wewangian berlapis. Pilih varian yang Anda inginkan di bawah ini untuk langsung mengisi formulir pemesanan cepat via WhatsApp.
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product, index) => {
            const isSelected = selectedProductId === product.id;
            const isExpanded = expandedId === product.id;

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#C27835] shadow-lg ring-1 ring-[#C27835]/40'
                    : 'border-[#E6DDD3] hover:border-[#CBB59F] shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EDE6]">
                    <img
                      src={product.image}
                      alt={`Lilin aromaterapi Glow & Chill varian ${product.name}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform group-hover:scale-104 transition-transform duration-600 ease-out"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                      }}
                    />

                    {/* Scent Category text tag */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#2B231D] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                      {product.scentFamily}
                    </div>

                    {/* Selected state indicator */}
                    {isSelected && (
                      <div className="absolute top-4 right-4 bg-[#C27835] text-white px-3 py-1 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Varian Terpilih</span>
                      </div>
                    )}
                  </div>

                  {/* Product Details Content */}
                  <div className="p-6 md:p-7">
                    {/* Unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#8C7A6D] mb-2 font-mono">
                      <span>{product.weight}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-[#C27835]" />
                        {product.burnTime}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-2xl font-serif font-bold text-[#2B231D] mb-1.5 group-hover:text-[#A76326] transition-colors">
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-medium text-[#C27835] mb-3 italic">
                      "{product.tagline}"
                    </p>

                    {/* Short Description */}
                    <p className="text-sm text-[#665B51] line-clamp-2 leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Scent Notes Preview */}
                    <div className="py-3 px-3.5 bg-[#FAF7F3] border border-[#EFE8DF] mb-5">
                      <div className="text-[11px] font-semibold text-[#8C7A6D] uppercase tracking-wider mb-1.5">
                        Tingkatan Aroma (Scent Pyramid)
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <span className="block text-[10px] text-[#A6998E] uppercase">Top</span>
                          <span className="text-[#3F3730] font-medium leading-tight">{product.pyramid.top}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-[#A6998E] uppercase">Mid</span>
                          <span className="text-[#3F3730] font-medium leading-tight">{product.pyramid.middle}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-[#A6998E] uppercase">Base</span>
                          <span className="text-[#3F3730] font-medium leading-tight">{product.pyramid.base}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expandable detail section */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-2 pb-4 text-xs text-[#5D5247] space-y-2 border-t border-[#EAE3DB] mt-3"
                        >
                          <p>
                            <strong className="text-[#2B231D]">Mood & Efek:</strong> {product.mood}
                          </p>
                          <p>
                            <strong className="text-[#2B231D]">Rekomendasi Ruang:</strong> {product.recommendedFor}
                          </p>
                          <p>
                            <strong className="text-[#2B231D]">Material:</strong> {product.wax}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Accordion toggle button */}
                    <button
                      onClick={() => toggleExpand(product.id)}
                      className="text-xs text-[#7A6B5E] hover:text-[#2B231D] flex items-center gap-1 font-medium transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Tutup Detail Aroma' : 'Lihat Rekomendasi & Mood'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Card Bottom Action Bar */}
                <div className="p-6 md:p-7 pt-0 border-t border-[#F3ECE4] mt-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] block uppercase text-[#8C7A6D] tracking-wider font-mono">
                      Harga Spesial
                    </span>
                    <span className="text-xl font-bold font-mono text-[#2B231D] tabular-nums">
                      {FORMAT_RUPIAH(product.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#C27835] text-white shadow-sm'
                        : 'bg-[#2B231D] text-white hover:bg-[#43352B]'
                    }`}
                  >
                    <span>{isSelected ? 'Sudah Dipilih' : 'Pilih Varian Ini'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bundle Banner Offer */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F4EDE4] border border-[#DDD3C6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#A76326] uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Paket Eksplorasi 4 Aroma (All-in-One Set)</span>
            </div>
            <h4 className="text-xl font-serif font-bold text-[#2B231D] mb-1">
              Ingin mencoba semua varian sekaligus?
            </h4>
            <p className="text-sm text-[#665B51]">
              Dapatkan 4 lilin (Lavender, Coffee, Tea, Bakery) dalam gift box eksklusif dengan harga bundling hemat dan gratis kartu ucapan.
            </p>
          </div>

          <button
            onClick={() => onSelectProduct('lavender')}
            className="px-6 py-3 bg-[#2B231D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3E322A] whitespace-nowrap cursor-pointer transition-colors"
          >
            Pesan di Formulir WA
          </button>
        </div>

      </div>
    </section>
  );
}
