import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutAndQuality } from './components/AboutAndQuality';
import { StorySection } from './components/StorySection';
import { CandleCareRituals } from './components/CandleCareRituals';
import { OrderForm } from './components/OrderForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Product } from './data/products';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<Product['id']>('lavender');

  const scrollToOrderForm = (productId?: Product['id']) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    const element = document.getElementById('pesan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalog = () => {
    const element = document.getElementById('koleksi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2520] flex flex-col font-sans selection:bg-[#EADBCE] selection:text-[#1F1915]">
      {/* Top Navigation */}
      <Navbar onOrderClick={() => scrollToOrderForm()} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onExploreClick={scrollToCatalog}
          onOrderClick={() => scrollToOrderForm()} 
        />

        {/* 2. Product Catalog (4 Signature Scents: Lavender, Coffee, Tea, Bakery) */}
        <ProductCatalog 
          selectedProductId={selectedProductId}
          onSelectProduct={(id) => scrollToOrderForm(id)}
        />

        {/* 3. About & Why Glow & Chill Soy Wax */}
        <AboutAndQuality />

        {/* 4. Brand Story & Craftsmanship */}
        <StorySection />

        {/* 5. Candle Care Rituals (Membakar lilin agar awet) */}
        <CandleCareRituals />

        {/* 6. Interactive WhatsApp Direct Order Form */}
        <OrderForm 
          selectedProductId={selectedProductId}
          onSelectProduct={setSelectedProductId}
        />

        {/* 7. Social Proof & Customer Reviews */}
        <Testimonials />
      </main>

      {/* Floating Quick WhatsApp Button on Mobile */}
      <aside aria-label="Aksi Cepat WhatsApp" className="fixed bottom-5 right-5 z-30 md:hidden">
        <button
          onClick={() => scrollToOrderForm()}
          aria-label="Pesan via WhatsApp"
          className="flex items-center gap-2 px-4 py-3 bg-[#1E7E34] text-white shadow-xl hover:bg-[#186629] active:scale-95 transition-all text-xs font-bold uppercase tracking-wider border border-white/20"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Pesan WA</span>
        </button>
      </aside>

      {/* Footer */}
      <Footer />
    </div>
  );
}
