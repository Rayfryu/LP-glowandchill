import { useState, useMemo } from 'react';
import { PRODUCTS, Product, FORMAT_RUPIAH } from '../data/products';
import { MessageCircle, Gift } from 'lucide-react';

interface OrderFormProps {
  selectedProductId: string;
  onSelectProduct: (productId: Product['id']) => void;
}

export function OrderForm({ selectedProductId, onSelectProduct }: OrderFormProps) {
  // Store quantities for each of the 4 products to allow single or multi-item order easily
  const [quantities, setQuantities] = useState<Record<string, number>>({
    lavender: selectedProductId === 'lavender' ? 1 : 0,
    coffee: selectedProductId === 'coffee' ? 1 : 0,
    tea: selectedProductId === 'tea' ? 1 : 0,
    bakery: selectedProductId === 'bakery' ? 1 : 0,
  });

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [includeGiftWrap, setIncludeGiftWrap] = useState(false);
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Keep quantities in sync if parent selectedProductId changes and current quantity of that item is 0
  useMemo(() => {
    setQuantities((prev) => {
      if (prev[selectedProductId] && prev[selectedProductId] > 0) return prev;
      return {
        ...prev,
        [selectedProductId]: Math.max(1, prev[selectedProductId] || 0),
      };
    });
  }, [selectedProductId]);

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
    setErrorMessage('');
  };

  const selectedItems = useMemo(() => {
    return PRODUCTS.filter((p) => (quantities[p.id] || 0) > 0).map((p) => ({
      product: p,
      quantity: quantities[p.id] || 0,
      total: p.price * (quantities[p.id] || 0),
    }));
  }, [quantities]);

  const totalPrice = useMemo(() => {
    const itemsTotal = selectedItems.reduce((acc, item) => acc + item.total, 0);
    const giftTotal = includeGiftWrap && itemsTotal > 0 ? 15000 : 0;
    return itemsTotal + giftTotal;
  }, [selectedItems, includeGiftWrap]);

  const totalItemCount = useMemo(() => {
    return selectedItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [selectedItems]);

  // Glow & Chill Official WhatsApp Number
  const WHATSAPP_NUMBER = '628871744274';

  // Generate the formatted WhatsApp message
  const generatedMessage = useMemo(() => {
    const itemsText = selectedItems.length > 0
      ? selectedItems.map((item) => `• ${item.product.name} (${item.quantity} jar) - ${FORMAT_RUPIAH(item.total)}`).join('\n')
      : '• (Belum memilih varian)';

    const giftText = includeGiftWrap ? 'Ya, kemas dengan Gift Box & Pita (+Rp 15.000)' : 'Kemasan Standar Aman (Free Bubble Wrap)';

    return `Halo Glow & Chill! ✨\nSaya tertarik memesan lilin aromaterapi melalui website.\n\n*RINCIAN PESANAN:*\n${itemsText}\n\n*KEMASAN:* ${giftText}\n*ESTIMASI TOTAL:* ${FORMAT_RUPIAH(totalPrice)}\n\n*DATA PEMESAN:*\n• Nama: ${customerName.trim() || '-'}\n• No. WhatsApp: ${customerPhone.trim() || '-'}\n• Alamat / Kota: ${customerAddress.trim() || '-'}\n• Catatan / Ucapan: ${notes.trim() || '-'}\n\nMohon informasi ketersediaan stok & ongkir ke kota saya. Terima kasih! 🙏`;
  }, [selectedItems, includeGiftWrap, totalPrice, customerName, customerPhone, customerAddress, notes]);

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (totalItemCount === 0) {
      setErrorMessage('Silakan pilih minimal 1 lilin aroma terapi terlebih dahulu.');
      return;
    }
    if (!customerName.trim()) {
      setErrorMessage('Mohon isi nama lengkap Anda.');
      return;
    }
    if (!customerPhone.trim()) {
      setErrorMessage('Mohon isi nomor WhatsApp aktif Anda.');
      return;
    }
    if (!customerAddress.trim()) {
      setErrorMessage('Mohon cantumkan kota atau alamat pengiriman.');
      return;
    }

    setErrorMessage('');
    const encodedText = encodeURIComponent(generatedMessage);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pesan" className="py-20 md:py-28 bg-[#F6F1EA] border-b border-[#E3DACF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C6D3B] mb-2 font-mono">
            <span>Pemesanan Praktis</span>
            <span aria-hidden="true" className="text-[#CBB59F]">·</span>
            <span>Direct WhatsApp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B231D] tracking-tight mb-4 [text-wrap:balance]">
            Pesan Lilin Aromaterapi Tanpa Ribet
          </h2>
          <p className="text-base text-[#665B51] leading-relaxed">
            Tidak perlu mendaftar akun atau login checkout rumit. Cukup pilih varian lilin yang Anda sukai, lengkapi data singkat, dan klik tombol untuk langsung terhubung dengan admin Glow & Chill di WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#E3DACF] shadow-sm">
            <form onSubmit={handleSendToWhatsApp} className="space-y-7">
              
              {/* Step 1: Select Candle Variants */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-[#2B231D] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#2B231D] text-white text-[11px] font-bold flex items-center justify-center font-mono">
                      1
                    </span>
                    <span>Pilih Lilin & Jumlah (Bisa Lebih Dari 1)</span>
                  </label>
                  <span className="text-xs text-[#8C7A6D]">
                    {totalItemCount} lilin dipilih
                  </span>
                </div>

                <div className="space-y-3">
                  {PRODUCTS.map((prod) => {
                    const qty = quantities[prod.id] || 0;
                    const isSelected = qty > 0;

                    return (
                      <div
                        key={prod.id}
                        className={`p-3.5 border transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'border-[#C27835] bg-[#FFFDFB]'
                            : 'border-[#EAE3DB] bg-[#FAF8F5] hover:border-[#D6C9BC]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-12 h-12 object-cover shrink-0 border border-[#E3DACF]"
                          />
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-[#2B231D] truncate">
                              {prod.name}
                            </h4>
                            <p className="text-xs text-[#7A6B5E] truncate">
                              {prod.scentFamily} · {FORMAT_RUPIAH(prod.price)}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2 shrink-0">
                          {qty === 0 ? (
                            <button
                              type="button"
                              onClick={() => {
                                updateQuantity(prod.id, 1);
                                onSelectProduct(prod.id);
                              }}
                              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2B231D] border border-[#2B231D] hover:bg-[#2B231D] hover:text-white transition-colors cursor-pointer"
                            >
                              + Pilih
                            </button>
                          ) : (
                            <div className="flex items-center border border-[#C27835] bg-white">
                              <button
                                type="button"
                                onClick={() => updateQuantity(prod.id, -1)}
                                className="w-8 h-8 flex items-center justify-center text-[#2B231D] hover:bg-[#F3ECE4] font-bold cursor-pointer"
                                aria-label="Kurang satu"
                              >
                                -
                              </button>
                              <span className="w-8 text-center text-xs font-bold font-mono text-[#2B231D]">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(prod.id, 1)}
                                className="w-8 h-8 flex items-center justify-center text-[#2B231D] hover:bg-[#F3ECE4] font-bold cursor-pointer"
                                aria-label="Tambah satu"
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Customer Contact Information */}
              <div>
                <label className="text-sm font-semibold text-[#2B231D] flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#2B231D] text-white text-[11px] font-bold flex items-center justify-center font-mono">
                    2
                  </span>
                  <span>Data Kontak & Pengiriman</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#5A4F44] mb-1">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Contoh: Rian Pratama"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD3C6] text-sm text-[#2B231D] focus:outline-none focus:border-[#C27835] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#5A4F44] mb-1">
                      Nomor WhatsApp Aktif *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Contoh: 081234567890"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD3C6] text-sm text-[#2B231D] focus:outline-none focus:border-[#C27835] transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-medium text-[#5A4F44] mb-1">
                    Kota / Alamat Lengkap Pengiriman *
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan (Kode Pos 12190)"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD3C6] text-sm text-[#2B231D] focus:outline-none focus:border-[#C27835] transition-colors resize-none"
                    required
                  />
                </div>
              </div>

              {/* Step 3: Gift Option & Special Notes */}
              <div>
                <label className="text-sm font-semibold text-[#2B231D] flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#2B231D] text-white text-[11px] font-bold flex items-center justify-center font-mono">
                    3
                  </span>
                  <span>Opsi Kemasan & Catatan (Opsional)</span>
                </label>

                {/* Gift Box Checkbox */}
                <label className="flex items-start gap-3 p-3 bg-[#FAF8F5] border border-[#E3DACF] cursor-pointer hover:border-[#C27835] transition-colors">
                  <input
                    type="checkbox"
                    checked={includeGiftWrap}
                    onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                    className="mt-0.5 accent-[#C27835] w-4 h-4"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-[#2B231D] flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-[#C27835]" />
                      Tambah Kemasan Gift Box Eksklusif & Pita Cantik (+Rp 15.000)
                    </span>
                    <span className="text-[#7A6B5E] block mt-0.5">
                      Sangat cocok untuk kado ulang tahun, hampers wisuda, atau anniversary. Termasuk kartu ucapan kustom.
                    </span>
                  </div>
                </label>

                {/* Notes input */}
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Pesan khusus / tulisan ucapan pada kartu jika untuk kado..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#DDD3C6] text-xs text-[#2B231D] focus:outline-none focus:border-[#C27835] transition-colors"
                  />
                </div>
              </div>

              {/* Error feedback */}
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Submit CTA button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={totalItemCount === 0}
                  className="w-full py-4 bg-[#1E7E34] hover:bg-[#186629] disabled:bg-[#A3B8A8] text-white font-semibold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Kirim Rincian Pesanan ke WhatsApp Glow & Chill</span>
                </button>
                <p className="text-[11px] text-center text-[#8C7A6D] mt-2">
                  Admin kami akan segera membalas total ongkos kirim dan nomor rekening transfer resmi.
                </p>
              </div>

            </form>
          </div>

          {/* Right Column: Live WhatsApp Message & Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Price Summary Card */}
            <div className="bg-white p-6 border border-[#E3DACF] shadow-sm">
              <h3 className="text-base font-serif font-bold text-[#2B231D] mb-4 pb-3 border-b border-[#EAE3DB]">
                Ringkasan Pilihan Anda
              </h3>

              {selectedItems.length === 0 ? (
                <div className="py-8 text-center text-xs text-[#9C8F83]">
                  Belum ada lilin yang dipilih. Klik tombol <strong className="text-[#2B231D]">+ Pilih</strong> pada daftar varian di sebelah kiri.
                </div>
              ) : (
                <div className="space-y-3 mb-4 text-xs">
                  {selectedItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between items-center text-[#3D352E]">
                      <span>
                        {item.product.name} <span className="text-[#8C7A6D] font-mono">x{item.quantity}</span>
                      </span>
                      <span className="font-mono font-medium tabular-nums">
                        {FORMAT_RUPIAH(item.total)}
                      </span>
                    </div>
                  ))}

                  {includeGiftWrap && (
                    <div className="flex justify-between items-center text-[#3D352E] pt-2 border-t border-dashed border-[#EAE3DB]">
                      <span className="flex items-center gap-1 text-[#8C5D2C]">
                        <Gift className="w-3 h-3" />
                        Gift Box & Kartu Ucapan
                      </span>
                      <span className="font-mono font-medium tabular-nums">
                        {FORMAT_RUPIAH(15000)}
                      </span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-[#2B231D]/10 flex justify-between items-baseline text-sm font-bold text-[#2B231D]">
                    <span>Estimasi Subtotal</span>
                    <span className="text-lg font-mono text-[#C27835] tabular-nums">
                      {FORMAT_RUPIAH(totalPrice)}
                    </span>
                  </div>
                </div>
              )}

              <div className="text-[11px] text-[#7A6B5E] bg-[#FAF8F5] p-3 border border-[#EFE8DF] space-y-1">
                <p className="font-semibold text-[#2B231D]">Ketentuan Pemesanan Langsung:</p>
                <p>• Pengiriman dari Jakarta via JNE / SiCepat / Paxel Sameday.</p>
                <p>• Pembayaran via Transfer BCA, Mandiri, atau QRIS.</p>
                <p>• Packing tebal berlapis bubble wrap & box kardus gratis.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
