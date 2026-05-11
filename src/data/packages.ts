export interface HotelInfo {
  name: string;
  rating: number;
  distance: string;
  image: string;
}

export interface Package {
  id: string;
  title: string;
  subtitle: string;
  type: 'regular' | 'plus' | 'premium' | 'furoda';
  typeName: string;
  duration: number; // in days
  price: number; // in IDR
  departureDate: string;
  airline: {
    name: string;
    logo: string; // Airline description / name
    flightCode: string;
  };
  hotelMakkah: HotelInfo;
  hotelMadinah: HotelInfo;
  seatsTotal: number;
  seatsBooked: number;
  featured: boolean;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  includes: string[];
  excludes: string[];
}

export const packagesData: Package[] = [
  {
    id: 'umrah-reguler-ramadhan',
    title: 'Paket Umrah Syawal Mulia',
    subtitle: 'Menjemput Berkah Setelah Ramadhan',
    type: 'regular',
    typeName: 'Umrah Reguler',
    duration: 9,
    price: 31500000,
    departureDate: '2026-04-12',
    airline: {
      name: 'Lion Air Premium',
      logo: 'LA',
      flightCode: 'JT-110 Direct Jeddah'
    },
    hotelMakkah: {
      name: 'Anjum Hotel Makkah',
      rating: 5,
      distance: 'Akses langsung halaman Masjidil Haram (150m)',
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=600'
    },
    hotelMadinah: {
      name: 'Al Haram Hotel Madinah',
      rating: 4,
      distance: 'Dekat Gerbang Masjid Nabawi (100m)',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=600'
    },
    seatsTotal: 45,
    seatsBooked: 38,
    featured: true,
    highlights: ['Penerbangan Direct (Tanpa Transit)', 'Bimbingan Manasik 2 Kali', 'Free City Tour Thaif', 'Muthawwif Berpengalaman Sesuai Sunnah'],
    itinerary: [
      { day: 1, title: 'Keberangkatan Jakarta - Jeddah - Madinah', description: 'Berkumpul di Bandara Soekarno-Hatta Terminal 3. Boarding pesawat menuju Jeddah. Setibanya di Jeddah, perjalanan dilanjutkan menuju Madinah menggunakan Bus Executive. Check-in hotel & istirahat.' },
      { day: 2, title: 'Ziarah Makam Rasulullah & Raudhah', description: 'Melakukan ziarah ke makam Rasulullah SAW, Abu Bakar Ash-Shiddiq, dan Umar bin Khattab, dilanjutkan beribadah di Raudhah (taman surga) dipandu oleh Muthawwif.' },
      { day: 3, title: 'Ziarah Kota Madinah', description: 'Mengunjungi Masjid Quba (shalat sunnah 2 rakaat), Kebun Kurma, Jabal Uhud, dan Masjid Qiblatain.' },
      { day: 4, title: 'Perjalanan Madinah ke Makkah (Ambil Miqat)', description: 'Persiapan ihram. Menuju Makkah dengan Bus Executive, mengambil miqat di Bir Ali untuk melaksanakan Ibadah Umrah pertama.' },
      { day: 5, title: 'Ibadah Mandiri & Tadabur Haram', description: 'Memperbanyak ibadah wajib dan sunnah di Masjidil Haram (Thawaf, Khatam Al-Quran, shalat malam).' },
      { day: 6, title: 'Ziarah Kota Makkah & Umrah Kedua', description: 'Mengunjungi Jabal Tsur, Jabal Rahmah (Arafah), Muzdalifah, Mina, dan mengambil Miqat di Jaranah untuk Umrah Kedua bagi yang berkenan.' },
      { day: 7, title: 'Ziarah Tambahan Kota Thaif', description: 'Mengunjungi kota sejuk Thaif. Mencoba Kereta Gantung, mencicipi kuliner khas, dan mengambil miqat di Qarnul Manazil bagi yang ingin Umrah ketiga.' },
      { day: 8, title: 'Thawaf Wada’ & Perjalanan Pulang', description: 'Melaksanakan Thawaf Wada (perpisahan). Check-out hotel menuju Bandara Jeddah untuk penerbangan kembali ke Jakarta.' },
      { day: 9, title: 'Tiba di Jakarta', description: 'Insya Allah mendarat dengan selamat di Bandara Soekarno-Hatta Jakarta. Selesai sudah perjalanan ibadah bersama Khalifah Tour. Semoga mabrur.' }
    ],
    includes: [
      'Tiket Pesawat Pulang Pergi (PP) Jakarta - Jeddah/Madinah',
      'Visa Umrah Resmi Kemenag',
      'Hotel Makkah & Madinah sesuai paket (Setaraf Bintang 4/5)',
      'Transportasi Bus AC Executive di Arab Saudi',
      'Makan 3 kali sehari menu prasmanan Indonesia',
      'Bimbingan Manasik Umrah pra-keberangkatan',
      'Air Zam-Zam 5 Liter (jika diizinkan otoritas bandara)',
      'Asuransi Perjalanan Umrah & COVID-19',
      'Layanan Muthawwif (guide) & Muthawwifah profesional'
    ],
    excludes: [
      'Pembuatan Passport & penambahan nama (jika ada)',
      'Biaya perlengkapan umrah & handling sebesar Rp 1.500.000',
      'Kebutuhan pribadi (laundry, telepon, kelebihan bagasi)',
      'Tiket domestik dari kota asal ke Jakarta'
    ]
  },
  {
    id: 'umrah-premium-signature',
    title: 'Paket Umrah Premium Signature',
    subtitle: 'Kenyamanan Ibadah Maksimal Bintang 5',
    type: 'premium',
    typeName: 'Umrah Premium',
    duration: 10,
    price: 45900000,
    departureDate: '2026-05-18',
    airline: {
      name: 'Saudi Arabian Airlines',
      logo: 'SV',
      flightCode: 'SV-817 Direct Madinah'
    },
    hotelMakkah: {
      name: 'Swissôtel Makkah (Clock Tower)',
      rating: 5,
      distance: '0 meter ke Masjidil Haram (Integrated Mall)',
      image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=600'
    },
    hotelMadinah: {
      name: 'The Oberoi Madinah',
      rating: 5,
      distance: 'Depan Pelataran Utama Gerbang Masjid Nabawi (50m)',
      image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=600'
    },
    seatsTotal: 30,
    seatsBooked: 22,
    featured: true,
    highlights: ['Maskapai Bintang 5 Saudia Direct Madinah', 'Menginap di Swissôtel Tower (Haram View)', 'Kereta Cepat Haramain (Makkah - Madinah)', 'Muthawwif S-2 Lulusan Universitas Islam Madinah'],
    itinerary: [
      { day: 1, title: 'Keberangkatan Mewah Jakarta - Madinah', description: 'Berkumpul di Lounge Bandara Soetta Terminal 3. Penerbangan VIP dengan Saudi Arabian Airlines langsung ke Madinah. Setibanya di Madinah, Fast-track imigrasi dan menuju hotel bintang 5.' },
      { day: 2, title: 'Ibadah Khusyuk & Raudhah Eksklusif', description: 'Ziarah Raudhah dengan jadwal khusus (tasrih resmi terjamin). Dilanjutkan menikmati waktu ibadah mandiri di Masjid Nabawi.' },
      { day: 3, title: 'Ziarah Sejarah Madinah VIP', description: 'Ziarah kota Madinah dengan bus mewah premium. Mengunjungi Masjid Quba, Jabal Uhud, dan kebun kurma eksklusif.' },
      { day: 4, title: 'Kereta Cepat Haramain Express ke Makkah', description: 'Naik Kereta Cepat Shinkansen-nya Arab Saudi (Haramain Express) kelas bisnis dari Madinah ke Makkah hanya dalam waktu 2 jam. Mengambil miqat di stasiun / atas kereta dan melaksanakan Umrah.' },
      { day: 5, title: 'Ibadah Mandiri & Tausiyah Eksklusif', description: 'Memperbanyak ibadah di Masjidil Haram. Pada malam hari diadakan tausiyah keagamaan dan sesi tanya jawab eksklusif bersama asatidz pembimbing di lounge hotel.' },
      { day: 6, title: 'Ziarah Makkah & Thaif Premium', description: 'Perjalanan wisata sejarah kota Makkah & kota peristirahatan Thaif yang sejuk menggunakan transportasi premium. Opsional Umrah kedua dari Miqat Thaif.' },
      { day: 7, title: 'Ibadah di Masjidil Haram', description: 'Hari bebas untuk memaksimalkan ibadah Thawaf Sunnah dan shalat fardhu di Masjidil Haram.' },
      { day: 8, title: 'Kuliner Kurasi & Ziarah Badar', description: 'Ziarah tambahan ke area sekitar Makkah / situs sejarah perang Badar, diiringi sajian kuliner khas timur tengah premium.' },
      { day: 9, title: 'Thawaf Wada & Transfer Jeddah VIP', description: 'Melaksanakan Thawaf Wada. Diantar dengan bus kelas satu menuju Bandara Internasional Jeddah untuk pulang ke Jakarta.' },
      { day: 10, title: 'Tiba di Tanah Air', description: 'Tiba kembali di Jakarta dengan membawa kenangan ibadah yang berkesan dan predikat Umrah Maqbulah, insya Allah.' }
    ],
    includes: [
      'Tiket Pesawat Saudia Airlines VIP (PP Jakarta-Madinah/Jeddah)',
      'Kereta Cepat Haramain Bullet Train Kelas Bisnis',
      'Akomodasi Hotel Bintang 5 Premium (Swissôtel & Oberoi)',
      'Visa Umrah Premium dengan Asuransi Penuh',
      'Makan full buffet menu Internasional dan Indonesia di Hotel Bintang 5',
      'Perlengkapan Umrah Eksklusif (Koper Fiber, Kain Ihram/Mukena sutra, Seragam Batik Sutra, Buku Doa)',
      'Lounge Bandara Soekarno-Hatta pra-keberangkatan',
      'Pendampingan Dokter & Muthawwif khusus lulusan Madinah',
      'Air Zamzam Premium 5 Liter'
    ],
    excludes: [
      'Pengeluaran pribadi di luar fasilitas paket',
      'Tips untuk driver & guide (bersifat sukarela)'
    ]
  },
  {
    id: 'umrah-plus-turki',
    title: 'Paket Umrah Plus Turki Tulip & Cappadocia',
    subtitle: 'Satu Perjalanan Dua Keberkahan Sejarah Islam',
    type: 'plus',
    typeName: 'Umrah Plus Wisata',
    duration: 12,
    price: 39500000,
    departureDate: '2026-06-05',
    airline: {
      name: 'Turkish Airlines',
      logo: 'TK',
      flightCode: 'TK-57 Transit Istanbul'
    },
    hotelMakkah: {
      name: 'Pullman Zamzam Makkah',
      rating: 5,
      distance: 'Terintegrasi Abraj Al-Bait Tower (50m)',
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=600'
    },
    hotelMadinah: {
      name: 'Leader Al Muna Kareem',
      rating: 4,
      distance: 'Hanya 150m dari Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=600'
    },
    seatsTotal: 40,
    seatsBooked: 35,
    featured: false,
    highlights: ['Wisata 3 Hari di Istanbul & Cappadocia Turki', 'Hotel Mewah Bintang 5 dekat Masjidil Haram', 'Ziarah Jejak Kekhalifahan Ustmaniyah (Ottoman)', 'Terbang bersama Turkish Airlines (Maskapai Terbaik Eropa)'],
    itinerary: [
      { day: 1, title: 'Keberangkatan Jakarta - Istanbul (Turki)', description: 'Berkumpul di Bandara Soekarno Hatta. Penerbangan menuju Istanbul dengan Turkish Airlines. Tiba di Istanbul, langsung check-in hotel dan istirahat.' },
      { day: 2, title: 'City Tour Istanbul: Hagia Sophia & Blue Mosque', description: 'Mengunjungi ikon peradaban Islam Hagia Sophia, Blue Mosque, Topkapi Palace (tempat penyimpanan pedang Rasulullah), dan berbelanja di Grand Bazaar.' },
      { day: 3, title: 'Keindahan Bosphorus Cruise & Terbang ke Madinah', description: 'Mengarungi Selat Bosphorus yang memisahkan Benua Asia dan Eropa dengan kapal pesiar pribadi. Sore hari, menuju bandara Istanbul untuk terbang ke Madinah.' },
      { day: 4, title: 'Tiba di Madinah & Ziarah Raudhah', description: 'Check-in hotel Madinah. Beristirahat sejenak, lalu dibimbing beribadah di Raudhah dan makam Rasulullah SAW.' },
      { day: 5, title: 'Ziarah Sejarah Kota Madinah', description: 'Mengunjungi Masjid Quba, kebun kurma, Jabal Uhud, dan pusat perbelanjaan kurma terbaik.' },
      { day: 6, title: 'Madinah ke Makkah - Ibadah Umrah Utama', description: 'Check-out hotel, mandi ihram, menuju Makkah via Bus AC Executive. Ambil miqat di Bir Ali dan melaksanakan Tawaf, Sa’i, dan Tahallul di Masjidil Haram.' },
      { day: 7, title: 'Ibadah Mandiri di Masjidil Haram', description: 'Meningkatkan intensitas ibadah fardhu, iktikaf, dan Thawaf Sunnah di Ka’bah.' },
      { day: 8, title: 'Ziarah Kota Makkah & Jabal Rahmah', description: 'Ziarah ke Jabal Nur, Jabal Tsur, Padang Arafah, Muzdalifah, Mina, dan miqat kedua di Jiyad / Jaranah untuk Umrah kedua.' },
      { day: 9, title: 'Wisata Sejarah Jeddah & Balad', description: 'Berkunjung ke kota pelabuhan kuno Al-Balad di Jeddah, Masjid Qisas, Laut Merah, lalu kembali ke hotel Makkah untuk istirahat.' },
      { day: 10, title: 'Tadabur Haram & Doa Bersama', description: 'Tadabur di area Masjidil Haram dan malamnya diadakan doa bersama penutupan safar ibadah di meeting room hotel.' },
      { day: 11, title: 'Thawaf Wada’ & Kepulangan via Jeddah', description: 'Thawaf Wada’ sebagai ucapan perpisahan dengan Ka’bah. Perjalanan ke Bandara Jeddah menuju Jakarta.' },
      { day: 12, title: 'Tiba di Jakarta', description: 'Alhamdulillah tiba di Jakarta dengan selamat. Semoga ibadah Umrah dan ziarah sejarah Turki diterima Allah SWT.' }
    ],
    includes: [
      'Tiket Pesawat Turkish Airlines (Jakarta - Istanbul - Madinah - Jeddah - Jakarta)',
      'Akomodasi Hotel Bintang 5 di Makkah (Pullman Zamzam) & Turki',
      'Visa Turki & Visa Umrah Resmi',
      'Tiket Masuk Semua Objek Wisata di Turki (Bosphorus Cruise, Museum, dll)',
      'Transportasi Bus AC Luxury selama di Turki & Saudi',
      'Makan Prasmanan 3 Kali Sehari (Masakan Turki & Indonesia)',
      'Perlengkapan Umrah Lengkap & Air Zamzam 5L'
    ],
    excludes: [
      'Biaya balon udara di Cappadocia (opsional)',
      'Pengeluaran pribadi di luar agenda resmi'
    ]
  },
  {
    id: 'haji-furoda-royal',
    title: 'Haji Furoda Mujamalah Royal Khalifah',
    subtitle: 'Haji Tanpa Antre, Visa Resmi Pemerintah Kerajaan Saudi',
    type: 'furoda',
    typeName: 'Haji Furoda VIP',
    duration: 25,
    price: 285000000,
    departureDate: '2026-09-10',
    airline: {
      name: 'Garuda Indonesia / Saudia',
      logo: 'GA',
      flightCode: 'GA-980 Direct Jeddah'
    },
    hotelMakkah: {
      name: 'Fairmont Makkah Clock Royal Tower',
      rating: 5,
      distance: 'Akses lift langsung ke Masjidil Haram (0m)',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600'
    },
    hotelMadinah: {
      name: 'Dar Al Taqwa Madinah',
      rating: 5,
      distance: 'Tepat di gerbang masuk utama wanita Masjid Nabawi (30m)',
      image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=600'
    },
    seatsTotal: 15,
    seatsBooked: 11,
    featured: true,
    highlights: ['Tanpa Antre Bertahun-tahun (Langsung Berangkat)', 'Tenda Arafah & Mina AC Upgrade (VIP)', 'Visa Mujamalah Resmi Terdaftar e-Haj', 'Hotel Fairmont Clock Tower bintang 5 utama'],
    itinerary: [
      { day: 1, title: 'Keberangkatan Haji VIP Jakarta - Jeddah', description: 'Pelepasan resmi di Hotel Luxury Jakarta, keberangkatan dengan Garuda Indonesia kelas utama langsung menuju Bandara Jeddah.' },
      { day: 2, title: 'Check-in Transit VIP Makkah / Apartemen Transit', description: 'Menuju apartemen transit mewah di Makkah untuk persiapan ritual ibadah haji, dipandu pembimbing ibadah khusus.' },
      { day: 3, title: 'Persiapan Tarwiyah & Tarbiyah Ibadah', description: 'Mendengarkan bimbingan manasik haji intensif mengenai rukun haji, wajib haji, dan fikih haji sunnah.' },
      { day: 4, title: 'Wukuf di Padang Arafah (9 Dzulhijjah)', description: 'Puncak ibadah haji. Menuju Tenda VIP Arafah ber-AC penuh dengan kasur, bimbingan khutbah wukuf, doa bersama yang sangat khidmat.' },
      { day: 5, title: 'Mabit di Muzdalifah & Mina (10 Dzulhijjah)', description: 'Melanjutkan perjalanan malam ke Muzdalifah untuk mengumpulkan kerikil, lalu menuju Tenda VIP Mina untuk mabit dan melontar Jumrah Aqabah.' },
      { day: 6, title: 'Hari-Hari Tasyrik di Mina (11-13 Dzulhijjah)', description: 'Mabit di Mina dan melontar Jumrah Ula, Wustha, dan Aqabah setiap hari. Dilayani dengan katering kelas satu 3 kali sehari.' },
      { day: 7, title: 'Tawaf Ifadhah & Sai Haji di Masjidil Haram', description: 'Kembali ke Makkah untuk melaksanakan Tawaf Ifadhah, Sa’i Haji, dan Tahallul Tsani. Kini resmi menyandang gelar Haji.' },
      { day: 8, title: 'Check-in Hotel Fairmont Clock Tower', description: 'Kepindahan ke Hotel Fairmont Makkah Clock Tower kelas bintang 5 deluxe untuk masa istirahat dan memperbanyak ibadah wajib.' },
      { day: 9, title: 'Ziarah Makam Syuhada & Masjid Harom', description: 'Ziarah Makkah khusus bagi para jamaah Haji Furoda.' },
      { day: 10, title: 'Ziarah Sejarah Makkah Mendalam', description: 'Mengunjungi lokasi-lokasi sejarah kunci yang jarang dikunjungi jamaah umum.' },
      { day: 11, title: 'Perjalanan Mewah ke Madinah', description: 'Perjalanan ke Madinah Al-Munawwarah menggunakan mobil mewah pribadi / bus VIP super executive.' },
      { day: 12, title: 'Check-in Dar Al Taqwa & Ziarah Raudhah', description: 'Check-in hotel bintang 5 persis di depan masjid. Melaksanakan ziarah Raudhah mulia dengan akses utama.' },
      { day: 13, title: 'Ibadah Madinah & Ziarah Syuhada Uhud', description: 'Meningkatkan ibadah Arbain di Masjid Nabawi dan berziarah makam syuhada perang Uhud.' },
      { day: 14, title: 'Thawaf Wada Haji & Pulang ke Indonesia', description: 'Melakukan Thawaf wada’ terakhir dan diantar ke Bandara Jeddah untuk penerbangan kembali ke Jakarta.' },
      { day: 15, title: 'Tiba di Jakarta', description: 'Tiba di Jakarta. Semoga menyandang gelar Haji Mabrur sepanjang hayat. Layanan Khalifah Tour selesai.' }
    ],
    includes: [
      'Visa Haji Furoda / Mujamalah Resmi (terdaftar e-Haj Arab Saudi)',
      'Tiket Penerbangan Garuda Indonesia / Saudia Kelas Utama/Bisnis (PP)',
      'Tenda VIP Maktab Eksklusif di Arafah & Mina dengan AC, Kasur, Sofa Bed',
      'Hotel Bintang 5 di Makkah (Fairmont Clock Tower) & Madinah (Dar Al Taqwa)',
      'Apartemen transit yang sangat bersih & nyaman sebelum masa Haji dimulai',
      'Bimbingan manasik komprehensif di Indonesia & Arab Saudi',
      'Makanan kelas premium prasmanan & box katering khusus selama di Mina & Arafah',
      'Air Zam-Zam 5 Liter & Souvenir Haji Eksklusif (Kurma Ajwa, Sajadah Bulu, Tas Kulit)',
      'Asuransi perjalanan haji internasional penuh'
    ],
    excludes: [
      'Dam (Denda) sembelih kambing untuk haji Tamattu (diatur secara transparan di lokasi)',
      'Pembuatan dokumen paspor pribadi'
    ]
  },
  {
    id: 'umrah-hemat-barokah',
    title: 'Paket Umrah Hemat Barokah',
    subtitle: 'Fasilitas Nyaman, Harga Sangat Terjangkau',
    type: 'regular',
    typeName: 'Umrah Hemat',
    duration: 9,
    price: 27900000,
    departureDate: '2026-08-15',
    airline: {
      name: 'Scoot Airlines / Lion',
      logo: 'TR',
      flightCode: 'TR-590 Transit Singapore'
    },
    hotelMakkah: {
      name: 'Le Meridien Towers Makkah',
      rating: 4,
      distance: '350m dengan shuttle bus gratis 24 jam nonstop',
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=600'
    },
    hotelMadinah: {
      name: 'Rove Al Madinah Hotel',
      rating: 4,
      distance: '200 meter dari halaman Masjid Nabawi',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=600'
    },
    seatsTotal: 45,
    seatsBooked: 41,
    featured: false,
    highlights: ['Harga Terbaik & Ekonomis', 'Hotel Bintang 4 Sangat Nyaman', 'Shuttle Bus 24 Jam Nonstop di Makkah', 'Muthawwif Ramah & Berpengalaman'],
    itinerary: [
      { day: 1, title: 'Jakarta - Transit - Madinah', description: 'Berkumpul di Bandara Soetta, terbang menuju Madinah via Singapore. Setibanya di Madinah, langsung diantar ke hotel dengan Bus AC nyaman.' },
      { day: 2, title: 'Ziarah Masjid Nabawi & Raudhah', description: 'Ziarah makam Nabi SAW dan shalat di Raudhah (taman surga) didampingi Muthawwif.' },
      { day: 3, title: 'Ziarah Luar Kota Madinah', description: 'Mengunjungi Masjid Quba, Masjid Qiblatain, Jabal Uhud, dan perkebunan Kurma untuk berbelanja oleh-oleh.' },
      { day: 4, title: 'Madinah ke Makkah (Ambil Miqat)', description: 'Mandiri / dibantu bersuci ihram. Mengambil miqat di Bir Ali lalu berkendara ke Makkah untuk menunaikan Umrah Pertama.' },
      { day: 5, title: 'Memperbanyak Ibadah Mandiri', description: 'Fokus beribadah di Masjidil Haram, membaca Alquran, dan Thawaf sunnah.' },
      { day: 6, title: 'Ziarah Kota Makkah', description: 'Mengunjungi Jabal Rahmah, Arafah, Mina, Muzdalifah dan bersiap miqat untuk Umrah kedua di Tan’im.' },
      { day: 7, title: 'Ibadah Mandiri di Masjidil Haram', description: 'Tawaf sunnah, bermunajat, dan berbelanja oleh-oleh secukupnya di sekitar Makkah.' },
      { day: 8, title: 'Thawaf Wada’ & Menuju Jeddah', description: 'Melakukan Thawaf perpisahan (Wada’). Perjalanan darat menuju Bandara Jeddah untuk kepulangan.' },
      { day: 9, title: 'Tiba di Jakarta', description: 'Mendarat kembali di Jakarta. Semoga ibadah umrah dinilai makbul oleh Allah SWT.' }
    ],
    includes: [
      'Tiket Pesawat Udara PP Jakarta-Jeddah/Madinah',
      'Akomodasi Hotel Bintang 4 di Makkah & Madinah',
      'Visa Umrah Resmi',
      'Katering makan 3x sehari masakan Indonesia',
      'Air Zamzam (jika diperbolehkan) & muthawwif lokal pendamping',
      'Perlengkapan Standar Umrah (Koper, Tas paspor, Kain batik, Buku doa)'
    ],
    excludes: [
      'Biaya handling bandara & perlengkapan Rp 1.500.000',
      'Kebutuhan belanja pribadi & laundry'
    ]
  }
];

export const faqData = [
  {
    question: "Apakah Khalifah Tour memiliki izin resmi dari Kemenag RI?",
    answer: "Ya, Khalifah Tour & Travel (PT Khalifah Hajj & Umrah) adalah biro perjalanan umrah resmi yang telah terdaftar di Kementerian Agama Republik Indonesia dengan izin Penyelenggara Perjalanan Ibadah Umrah (PPIU) No. 124 Tahun 2022. Anda dapat memverifikasi legalitas kami secara online melalui sistem Siskopatuh Kemenag RI."
  },
  {
    question: "Bagaimana cara melakukan pendaftaran Umrah di Khalifah Tour?",
    answer: "Prosedur pendaftaran sangat mudah: 1) Pilih paket keberangkatan yang sesuai di website kami. 2) Hubungi konsultan kami melalui WhatsApp / form pendaftaran online. 3) Serahkan foto KTP & Paspor Anda (Paspor minimal berlaku 6 bulan sebelum berangkat dengan minimal 2 suku kata). 4) Membayar Down Payment (DP) sebesar Rp 5.000.000 untuk mengunci kuota kursi Anda. 5) Pelunasan dapat dilakukan maksimal 30 hari sebelum jadwal keberangkatan."
  },
  {
    question: "Apa saja isi dari koper perlengkapan yang didapatkan jamaah?",
    answer: "Setiap jamaah Khalifah Tour akan mendapatkan paket perlengkapan premium berupa: Koper fiber roda 4 (ukuran kabin/bagasi), Tas selempang dokumen, Kain Batik eksklusif Khalifah Tour (seragam), Mukena premium untuk jamaah wanita, Kain Ihram & sabuk ihram untuk jamaah laki-laki, Buku panduan do’a saku, ID Card eksklusif, serta jaket pelindung angin."
  },
  {
    question: "Apakah tersedia program cicilan atau Tabungan Umrah?",
    answer: "Tentu saja! Kami memiliki program unggulan 'Kalkulator Tabungan Umrah' interaktif yang membantu Anda merencanakan tabungan bulanan mandiri atau tabungan terencana bersama bank syariah mitra kami. Anda bisa mensimulasikan waktu menabung berkisar dari 12 hingga 36 bulan dengan setoran awal yang fleksibel dan bebas riba."
  },
  {
    question: "Bagaimana jika ada jamaah yang sakit di Makkah atau Madinah?",
    answer: "Semua paket umrah Khalifah Tour sudah termasuk asuransi kesehatan perjalanan penuh yang diakui oleh Kementerian Kesehatan Arab Saudi. Selain itu, rombongan kami didampingi oleh Muthawwif yang siaga 24 jam serta tim dokter pendamping khusus untuk rombongan paket Premium, yang akan memfasilitasi penanganan medis cepat di rumah sakit rujukan di Makkah atau Madinah."
  },
  {
    question: "Apakah pembimbing ibadah (Muthawwif) sesuai dengan Sunnah?",
    answer: "Sangat benar. Khalifah Tour berkomitmen tinggi untuk menyelenggarakan ibadah umrah dan haji sesuai dengan tuntunan Al-Qur'an dan As-Sunnah Ash-Shahihah. Para pembimbing kami adalah ustadz dan Muthawwif lulusan universitas Islam ternama, seperti Universitas Islam Madinah (UIM) dan LIPIA, yang sangat ramah, sabar, dan menguasai fikih ibadah secara mendalam."
  }
];

export const testimonialsData = [
  {
    name: "H. Bambang Sulistyo",
    role: "Pengusaha, Jakarta",
    comment: "Ibadah Umrah bersama keluarga jadi sangat tenang dan khusyuk. Memilih Paket Premium Signature kemarin sangat tepat. Kamar di Swissôtel persis menghadap Ka’bah, lift langsung ke basement Masjidil Haram. Kereta cepat Haramain menghemat waktu dan tenaga kami. Sangat direkomendasikan!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    packageUsed: "Umrah Premium Signature"
  },
  {
    name: "Hj. Siti Aminah, M.Pd.",
    role: "Dosen, Bandung",
    comment: "Ustadz pembimbingnya sangat telaten mengajari tata cara umrah sesuai Sunnah dari awal manasik hingga akhir. Saya sangat bersyukur ada program ziarah kota Thaif yang sejuk sekali. Layanan katering makanannya sangat cocok di lidah orang Indonesia. Terima kasih Khalifah Tour!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    packageUsed: "Umrah Syawal Mulia"
  },
  {
    name: "dr. Ridwan Hakim",
    role: "Spesialis Anak, Surabaya",
    comment: "Alhamdulillah impian saya membawa orang tua berhaji tanpa mengantre belasan tahun terwujud lewat Haji Furoda Royal Khalifah. Pelayanannya benar-benar VIP, tenda Arafah dan Mina ber-AC dingin, hidangan prasmanan terus tersedia, dan hotel Fairmont-nya luar biasa nyaman untuk orang tua.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    packageUsed: "Haji Furoda VIP Royal"
  },
  {
    name: "Keluarga Arman Maulana",
    role: "Karyawan BUMN, Semarang",
    comment: "Awalnya ragu karena harganya ekonomis di Paket Hemat Barokah. Ternyata pelayanannya melebihi ekspektasi! Meskipun hotelnya berjarak dikit, bus shuttlenya standby 24 jam nonstop persis di depan lobby hotel ke terminal masjid. Bersih, tertib, dan muthawwifnya aktif membimbing.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    packageUsed: "Umrah Hemat Barokah"
  }
];
