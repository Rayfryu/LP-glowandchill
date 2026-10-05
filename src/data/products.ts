export interface Product {
  id: 'lavender' | 'coffee' | 'tea' | 'bakery';
  name: string;
  tagline: string;
  description: string;
  price: number;
  weight: string;
  burnTime: string;
  wax: string;
  image: string;
  scentFamily: string;
  pyramid: {
    top: string;
    middle: string;
    base: string;
  };
  mood: string;
  recommendedFor: string;
  colorTheme: {
    badge: string;
    accent: string;
    border: string;
    softBg: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'lavender',
    name: 'Lavender Dreamscape',
    tagline: 'Ketenangan Murni Sebelum Terlelap',
    description: 'Paduan aroma bunga French Lavender organik dengan sentuhan lembut chamomile dan warm vanilla. Dirancang khusus untuk menenangkan saraf yang tegang, meredakan cemas, dan mengantarkan Anda ke tidur malam yang lelap.',
    price: 8000,
    weight: '200 gram (Nett)',
    burnTime: '45+ Jam',
    wax: '100% Soy Wax · Pot Semen Artisanal & Botanical Embed',
    image: '/src/assets/images/candle_lavender_scent_1790991243443.jpg',
    scentFamily: 'Floral & Relaxing',
    pyramid: {
      top: 'French Lavender & Bergamot',
      middle: 'Blue Chamomile & Clary Sage',
      base: 'Soft Cedarwood & Madagascar Vanilla',
    },
    mood: 'Tidur nyenyak, relaksasi malam, meditasi',
    recommendedFor: 'Kamar tidur & sudut baca saat malam hari',
    colorTheme: {
      badge: 'bg-[#EDE9FE] text-[#5B21B6]',
      accent: '#6D28D9',
      border: 'border-[#DDD6FE]',
      softBg: 'bg-[#FBF8FF]',
    },
  },
  {
    id: 'coffee',
    name: 'Morning Roasted Coffee',
    tagline: 'Energi Hangat dan Fokus Terbaik',
    description: 'Aroma seduhan biji kopi Arabika panggang yang kaya, dipadukan dengan aksen dark chocolate dan sirup karamel hangat. Membangkitkan semangat pagi, menstimulasi fokus bekerja, dan menyulap kamar Anda serasa artisan cafe estetik.',
    price: 8000,
    weight: '200 gram (Nett)',
    burnTime: '45+ Jam',
    wax: '100% Soy Wax · Pot Semen Artisanal & Roasted Bean Topping',
    image: '/src/assets/images/candle_coffee_scent_1790991256608.jpg',
    scentFamily: 'Warm & Gourmand',
    pyramid: {
      top: 'Freshly Ground Espresso & Hazelnut',
      middle: 'Dark Cocoa Beans & Steamed Milk',
      base: 'Warm Caramel & Roasted Tonka',
    },
    mood: 'Fokus produktif, inspirasi, semangat pagi',
    recommendedFor: 'Meja kerja, ruang belajar, atau ruang tamu santai',
    colorTheme: {
      badge: 'bg-[#FED7AA] text-[#9A3412]',
      accent: '#9A3412',
      border: 'border-[#FDBA74]',
      softBg: 'bg-[#FFFBF7]',
    },
  },
  {
    id: 'tea',
    name: 'Zen White & Green Tea',
    tagline: 'Kejernihan Pikiran dan Kesegaran Alami',
    description: 'Harmoni menyejukkan dari pucuk daun teh hijau alami, kelopak melati putih, dan sentuhan kesegaran kulit jeruk mandarin. Memberikan ketenangan ala taman zen Jepang, menyegarkan sirkulasi udara, serta menghilangkan penat setelah seharian beraktivitas.',
    price: 8000,
    weight: '200 gram (Nett)',
    burnTime: '45+ Jam',
    wax: '100% Soy Wax · Pot Semen Artisanal & Dried Green Tea Leaves',
    image: '/src/assets/images/candle_tea_scent_1790991267539.jpg',
    scentFamily: 'Fresh & Botanical',
    pyramid: {
      top: 'White Green Tea Leaves & Lemon Zest',
      middle: 'Jasmine Blossoms & White Lily',
      base: 'Bamboo Wood & Clean Amber',
    },
    mood: 'Pikiran jernih, napas lega, suasana zen',
    recommendedFor: 'Ruang tamu, area yoga, dan sudut bersantai sore',
    colorTheme: {
      badge: 'bg-[#D1FAE5] text-[#065F46]',
      accent: '#059669',
      border: 'border-[#A7F3D0]',
      softBg: 'bg-[#F6FDF9]',
    },
  },
  {
    id: 'bakery',
    name: 'Warm Vanilla Bakery',
    tagline: 'Kenyamanan Rumah dan Kue yang Baru Matang',
    description: 'Aroma manis nan nostalgia seperti memasuki toko kue artisan di pagi hari. Perpaduan mentega hangat, adonan pastry renyah, vanila bourbon manis, dan sejumput kayu manis yang menyelimuti seluruh ruangan dengan kehangatan cinta.',
    price: 8000,
    weight: '200 gram (Nett)',
    burnTime: '45+ Jam',
    wax: '100% Soy Wax · Pot Semen Artisanal & Dried Orange Blossom',
    image: '/src/assets/images/candle_bakery_scent_1790991279366.jpg',
    scentFamily: 'Sweet & Comforting',
    pyramid: {
      top: 'Warm Butter Crust & Cinnamon Sugar',
      middle: 'Madagascar Vanilla Pods & Almond Cream',
      base: 'Golden Brown Sugar & Warm Amber',
    },
    mood: 'Hangat, menyenangkan suasana hati, nostalgia manis',
    recommendedFor: 'Ruang keluarga, meja makan, dan kumpul bersama teman',
    colorTheme: {
      badge: 'bg-[#FEF08A] text-[#854D0E]',
      accent: '#B45309',
      border: 'border-[#FDE047]',
      softBg: 'bg-[#FEFDF5]',
    },
  },
];

export const FORMAT_RUPIAH = (num: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(num);
};
