/* ==========================================================================
   SanzyHub — toko template landing page Next.js (fiktif). Isinya lima belas
   landing page sungguhan yang live; daftar halaman dan font diambil dari kode
   tiap template (1 Okt 2026). Harga lisensi adalah contoh purwarupa desain.
   ========================================================================== */

export const SITE = 'https://landing-sanzyhub.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const KATEGORI = {
  acara: 'Acara & webinar',
  kuliner: 'Kuliner',
  toko: 'Toko & produk',
  layanan: 'Layanan & aplikasi',
};

export const TEMPLATE = [
  { slug: 'elevinar', nama: 'Elevinar', kategori: 'acara', ringkas: 'Webinar diperlakukan sebagai pertunjukan: babak, denah kursi, dan buku acara siap cetak.', cocok: 'Penyelenggara webinar dan seminar berbayar', fitur: ['Denah kursi yang bisa dipilih', 'Buku acara siap cetak', 'Profil per pembicara'], rute: ['/', '/buku-acara', '/pembicara/[slug]'], font: ['Archivo', 'Inter'] },
  { slug: 'lumicast', nama: 'Lumicast', kategori: 'acara', ringkas: 'Rundown siaran pelatihan dengan jadwal ala panduan acara TV dan cek perangkat.', cocok: 'Pelatihan internal dan organisasi profesi', fitur: ['Jadwal dengan batang durasi', 'Daftar cek perangkat interaktif'], rute: ['/', '/cek-perangkat', '/jadwal-siaran'], font: ['Sora', 'Inter'] },
  { slug: 'nexttalks', nama: 'NextTalks', kategori: 'acara', ringkas: 'Diskusi panel empat pembicara dengan arsip transkrip yang bisa dicari.', cocok: 'Seri diskusi rutin dan podcast video', fitur: ['Arsip bisa dicari dan disaring', 'Halaman per sesi', 'Kebijakan privasi & ketentuan'], rute: ['/', '/arsip', '/privacy', '/sesi/[nomor]', '/terms'], font: ['Inter Tight', 'Inter'] },
  { slug: 'zychrome', nama: 'Zychrome', kategori: 'acara', ringkas: 'Webinar interaktif dengan polling, kuis, dan papan hasil sesi sebelumnya.', cocok: 'Kelas daring yang mengandalkan partisipasi', fitur: ['Polling & kuis yang bisa dicoba', 'Dasbor hasil sesi'], rute: ['/', '/coba', '/papan-hasil'], font: ['Chivo', 'Poppins'] },
  { slug: 'citarasa', nama: 'CitaRasa Digital', kategori: 'kuliner', ringkas: 'Jasa digitalisasi rumah makan legendaris dengan tiga studi kasus.', cocok: 'Agensi atau konsultan untuk usaha kuliner', fitur: ['Studi kasus sebelum–sesudah', 'Motif papan nama enamel'], rute: ['/', '/studi-kasus', '/studi-kasus/[slug]'], font: ['Abril Fatface', 'Lora'] },
  { slug: 'rasanusantara', nama: 'Rasa Nusantara', kategori: 'kuliner', ringkas: 'Kartu resep terstandar untuk dapur restoran, lengkap dengan penskala porsi.', cocok: 'Konsultan dapur dan pemilik restoran', fitur: ['Penskala porsi 1–200', 'HPP per porsi dihitung otomatis'], rute: ['/', '/kartu-resep', '/kartu-resep/[slug]'], font: ['Fraunces', 'Inter'] },
  { slug: 'tastycorner', nama: 'Tasty Corner', kategori: 'kuliner', ringkas: 'Buletin angka F&B mingguan dengan arsip edisi dan kalkulator food cost.', cocok: 'Buletin, kursus, atau konsultan F&B', fitur: ['Arsip edisi', 'Kalkulator food cost'], rute: ['/', '/edisi', '/edisi/[slug]', '/kalkulator'], font: ['Bricolage Grotesque', 'IBM Plex Mono', 'Inter'] },
  { slug: 'cissycoffee', nama: 'Cissy Coffee', kategori: 'kuliner', ringkas: 'Kedai kopi dengan papan menu kapur, kopi untuk acara, dan halaman kontak.', cocok: 'Kedai kopi dan kafe kecil', fitur: ['Papan menu kapur', 'Formulir acara & kontak'], rute: ['/', '/acara', '/kontak', '/menu', '/tentang'], font: ['Caveat', 'DM Serif Display', 'Plus Jakarta Sans'] },
  { slug: 'luxeelectro', nama: 'LuxeElectro', kategori: 'toko', ringkas: 'Toko audio dengan panel spesifikasi lengkap dan kurva respons frekuensi.', cocok: 'Toko elektronik dan produk teknis', fitur: ['Bandingkan dua perangkat', 'Kurva SVG skala logaritmik'], rute: ['/', '/bandingkan', '/produk/[slug]'], font: ['Manrope', 'Inter'] },
  { slug: 'modewear', nama: 'Modewear', kategori: 'toko', ringkas: 'Pra-pesan kapsul busana dengan hitung mundur, label jahit, dan pencari ukuran.', cocok: 'Label busana dengan sistem pra-pesan', fitur: ['Hitung mundur pra-pesan', 'Pencari ukuran', 'Simbol perawatan SVG'], rute: ['/', '/koleksi', '/koleksi/[slug]', '/panduan-ukuran'], font: ['Italiana', 'Inter'] },
  { slug: 'woodora', nama: 'Woodora', kategori: 'toko', ringkas: 'Furnitur kayu sesuai ukuran dengan gambar kerja yang berubah mengikuti angka.', cocok: 'Bengkel mebel dan produk made-to-order', fitur: ['Pratinjau ukuran langsung', 'Panduan jenis kayu'], rute: ['/', '/jenis-kayu', '/katalog', '/katalog/[slug]'], font: ['Lora', 'Inter'] },
  { slug: 'bribu', nama: 'Bribu', kategori: 'layanan', ringkas: 'Papan brief desain: tiga desainer terkurasi dibayar untuk sketsa, klien memilih satu.', cocok: 'Marketplace jasa dan platform freelance', fitur: ['Papan brief bersaring', 'Pratinjau kartu brief', 'Tabel bagi hasil'], rute: ['/', '/papan', '/papan/[kode]', '/untuk-desainer'], font: ['Inter Tight', 'Inter'] },
  { slug: 'eduplay', nama: 'EduPlay', kategori: 'layanan', ringkas: 'Aplikasi belajar matematika SD dengan dua permainan yang bisa dimainkan di peramban.', cocok: 'Aplikasi edukasi dan produk anak', fitur: ['Dua permainan interaktif', 'Contoh laporan orang tua'], rute: ['/', '/kurikulum', '/main'], font: ['Baloo 2', 'Inter'] },
  { slug: 'nimbus', nama: 'Nimbus', kategori: 'layanan', ringkas: 'Cloud lokal dengan halaman status, laporan insiden, dan kalkulator harga.', cocok: 'SaaS, hosting, dan produk infrastruktur', fitur: ['Uptime 90 hari dihitung dari data', 'Laporan insiden', 'Kalkulator harga'], rute: ['/', '/harga', '/insiden/[slug]', '/status'], font: ['Space Grotesk', 'Inter'] },
  { slug: 'skywings', nama: 'SkyWings', kategori: 'layanan', ringkas: 'Maskapai antarkota dengan pencarian boarding pass, jadwal bersaring, dan blog.', cocok: 'Travel, transportasi, dan jadwal layanan', fitur: ['Pencarian berbentuk boarding pass', 'Jadwal dengan zona waktu', 'Blog enam artikel'], rute: ['/', '/blog', '/blog/[slug]', '/jadwal', '/kontak', '/layanan', '/tentang'], font: ['Outfit', 'Inter'] },
].map((t) => ({ ...t, demo: `https://landing-${t.slug}.pintuweb.id`, foto: `/images/template/${t.slug}.webp` }));

export const templateBySlug = (s) => TEMPLATE.find((t) => t.slug === s);

// "Penyelenggara webinar" -> "penyelenggara webinar", tetapi "SaaS, hosting" tetap.
export const kecilAwal = (s) => (/[A-Z]/.test(s.split(' ')[0].slice(1)) ? s : s[0].toLowerCase() + s.slice(1));

export const LISENSI = [
  { nama: 'Pakai sendiri', harga: 490000, ket: 'Anda memasang dan mengisi sendiri.', isi: [['Kode sumber lengkap', true], ['Panduan pasang ke Vercel', true], ['Satu domain', true], ['Penyesuaian isi & warna oleh kami', false], ['Hosting & domain setahun', false]] },
  { nama: 'Disesuaikan', harga: 2900000, ket: 'Kami ganti isi, warna, dan foto dengan milik Anda.', isi: [['Kode sumber lengkap', true], ['Panduan pasang ke Vercel', true], ['Satu domain', true], ['Penyesuaian isi & warna oleh kami', true], ['Hosting & domain setahun', false]] },
  { nama: 'Disesuaikan + terpasang', harga: 3900000, ket: 'Sama seperti Disesuaikan, ditambah domain dan hosting setahun.', isi: [['Kode sumber lengkap', true], ['Panduan pasang ke Vercel', true], ['Satu domain', true], ['Penyesuaian isi & warna oleh kami', true], ['Hosting & domain setahun', true]] },
];

export const BOLEH = [
  ['Boleh', ['Dipakai untuk satu usaha atau satu klien per lisensi', 'Diubah isi, warna, huruf, dan strukturnya sesuka Anda', 'Dipasang di hosting mana pun']],
  ['Tidak boleh', ['Dijual ulang sebagai template', 'Dipakai untuk banyak klien dengan satu lisensi', 'Menghapus pemberitahuan lisensi di berkas README']],
];

export const FAQ = [
  { t: 'Apakah isi demo ikut di dalam template?', j: 'Ya, sebagai contoh. Semua nama, harga, dan angka di demo fiktif dan dikumpulkan di satu berkas data per template, jadi mudah diganti.' },
  { t: 'Butuh keahlian apa untuk memasang sendiri?', j: 'Cukup bisa menjalankan npm install dan mengunggah ke Vercel. Panduan langkah demi langkah ada di README tiap template.' },
  { t: 'Berapa lama penyesuaian?', j: 'Tujuh hari kerja setelah isi, logo, dan foto dari Anda lengkap. Dua putaran revisi termasuk.' },
  { t: 'Bagaimana kalau saya butuh halaman tambahan?', j: 'Halaman tambahan dihitung terpisah, Rp 450.000 per halaman yang mengikuti pola template.' },
];
