# Glow & Chill - Lilin Aromaterapi Artisanal

Website landing page modern & minimalis untuk bisnis lilin aromaterapi **Glow & Chill** berbasis 100% Natural Soy Wax dengan sistem pemesanan langsung via WhatsApp.

---

## 🚀 Cara Menjalankan Project di Komputer Lokal

1. **Persyaratan:**
   - [Node.js](https://nodejs.org/) versi 18 atau lebih baru.
   - NPM atau Yarn.

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:3000` atau port yang ditampilkan di terminal.

4. **Build untuk Produksi:**
   ```bash
   npm run build
   ```

---

## 📸 Cara Mengganti Foto Produk / Foto Hero

Foto-foto produk dan hero terletak di folder:
```
src/assets/images/
```

- **Foto Utama (Hero):**
  1. Masukkan foto Anda ke dalam folder `src/assets/images/` (contoh: `my_hero.jpg`).
  2. Buka file `src/components/Hero.tsx`.
  3. Ubah nilai `src` pada tag `<img>` menjadi:
     ```tsx
     src="/src/assets/images/my_hero.jpg"
     ```
     atau jika ditaruh di folder `public/`, cukup `src="/my_hero.jpg"`.

- **Foto 4 Varian Lilin (Lavender, Coffee, Tea, Bakery):**
  1. Masukkan foto masing-masing lilin ke `src/assets/images/`.
  2. Buka `src/data/products.ts`.
  3. Ganti path `image` di setiap varian produk (`lavender`, `coffee`, `tea`, `bakery`).

---

## 📱 Mengubah Nomor WhatsApp & Info Toko
- Nomor WhatsApp pemesanan dapat diatur di file `src/components/OrderForm.tsx` pada konstanta:
  ```ts
  const WHATSAPP_NUMBER = '628871744274';
  ```
- Tautan WhatsApp di footer dapat diedit di `src/components/Footer.tsx`.

---

## 🛠️ Tech Stack
- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS + Lucide Icons
- **Animation:** Motion (Framer Motion)
