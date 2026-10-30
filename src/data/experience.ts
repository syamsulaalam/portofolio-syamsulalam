export interface InternshipDocumentation {
  id: string;
  title: string;
  date?: string;
  description: string;
  image?: string;
}

export interface InternshipExperience {
  id: string;
  institution: string;
  division: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  documentation: InternshipDocumentation[];
}

// Tambahkan path foto asli ke folder public/images/experience/ pada properti image.
export const internshipExperiences: InternshipExperience[] = [
  {
    id: 'dinkes-makassar',
    institution: 'Dinas Kesehatan Kota Makassar',
    division: 'psdk (Devisi Farmasi)',
    period: 'April 2026 - Juni 2026',
    location: 'Jl. Teduh Bersinar No.1, Gn. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan',
    summary:
      'Melaksanakan kegiatan magang pada Dinas Kesehatan Kota Makassar dengan fokus pada administrasi perizinan sarana kefarmasian, pengelolaan data logistik obat dan vaksin, serta pengolahan data dan penyusunan laporan pengawasan mutu obat dan makanan.',
    responsibilities: [
    'Melakukan verifikasi administrasi dan pendataan dokumen perizinan sarana kefarmasian, meliputi apotek, toko obat, dan Industri Rumah Tangga Pangan (IRTP).',

      'Melakukan input, pengolahan, dan rekapitulasi data logistik obat serta membantu pemantauan ketersediaan vaksin melalui sistem informasi dinas.',

      'Membantu pengolahan data dan penyusunan laporan kegiatan pengawasan mutu obat, makanan, dan minuman yang beredar di masyarakat.',

      'Melakukan pengarsipan dokumen administrasi serta mendukung kegiatan pelayanan administrasi di lingkungan bidang Farmasi.',

      'Menggunakan aplikasi perkantoran seperti Microsoft Excel dan Microsoft Word untuk pengolahan data, rekapitulasi, dan penyusunan dokumen administrasi.'
    ],
    documentation: [
      {
        id: 'dinkes-documentation-01',
        title: 'Dokumentasi Penerikan magang di Dinas Kesehatan',
        date: 'Foto dapat ditambahkan',
        description: 'Dokumentasi kegiatan magang di Dinas Kesehatan Kota Makassar bidang psdk devisi Farmasi.',
        image: '/images/experience/penarikan.jpeg',
      },
      {
      id: 'documentation-02',
        title: 'Dokumentasi magang di Dinkes',
        date: 'Dokumentasi tersedia',
        description: 'Dokumentasi kegiatan magang dinas kesehatan makassar pada divisi farmasi.',
        image: '/images/experience/dokementasi1.jpg',
      },
      {
      id: 'documentation-03',
        title: 'Dokumentasi magang di Dinkes',
        date: 'Dokumentasi tersedia',
        description: 'Dokumentasi kegiatan magang dinas kesehatan kota makassar pada divisi farmasi.',
        image: '/images/experience/image.png',
      },
    ],
  },
  {
    id: 'telkom-ed',
    institution: 'PT Telkom Indonesia',
    division: 'Engineering Departement (ED)',
    period: 'Oktober 2025 - Januari 2026',
    location: 'Jl. A. P. Pettarani No.2, Gn. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90221, Indonesia',
    summary:
      'Melaksanakan kegiatan magang pada Engineering Department (ED) PT Telkom Indonesia dengan fokus pada dukungan operasional teknis, pengelolaan data perangkat jaringan, dokumentasi kegiatan engineering, serta pemantauan dan pelaporan kondisi infrastruktur jaringan.',
    responsibilities: [
      'Membantu pemeliharaan data operasional jaringan serta menyusun dokumentasi teknis harian divisi secara terstruktur.',
      'Melakukan monitoring berkala dan mencatat laporan performa untuk kebutuhan evaluasi internal.',
      'Mengelola inventaris data perangkat engineering dan memastikan seluruh berkas laporan tersusun rapi.',
    ],
    documentation: [
      {
        id: 'documentation-01',
        title: 'Dokumentasi magang di Telkom',
        date: 'Dokumentasi tersedia',
        description: 'Dokumentasi kegiatan magang di PT Telkom Indonesia pada divisi ED.',
        image: '/images/experience/telkom-ed-documentation.jpg',
      },
      {
        id: 'documentation-02',
        title: 'Dokumentasi magang di Telkom',
        date: 'Dokumentasi tersedia',
        description: 'Dokumentasi kegiatan magang di PT Telkom Indonesia pada divisi ED.',
        image: '/images/experience/telkom2.png',
      },
      {
        id: 'documentation-03',
        title: 'Dokumentasi magang di Telkom',
        date: 'Dokumentasi tersedia',
        description: 'Dokumentasi kegiatan magang di PT Telkom Indonesia pada divisi ED.',
        image: '/images/experience/telkom3.png',
      },
    ],
  },
  {
    id: 'smp-aisyiyah',
    institution: 'SMPAISYIYAHPACCINONGANG',
    division: 'KULIAH KERJA PRAKTEK (KKP-PLUS)',
    period: 'Februari 2026 - Maret 2026',
    location: 'Paccinongang No.110B, Paccinongang, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan, Indonesia',
    summary:
      'Melaksanakan kegiatan Kuliah Kerja Praktik (KKP-PLUS) dengan fokus pada pengembangan dan pengelolaan website sekolah sebagai media informasi digital. Kegiatan meliputi perancangan antarmuka, pengembangan fitur website, pengelolaan konten, serta implementasi dan deployment website untuk mendukung penyampaian informasi sekolah.',
    responsibilities: [
      'Melakukan analisis kebutuhan website sebagai media informasi dan profil digital sekolah.',

    'Merancang dan mengembangkan antarmuka website menggunakan teknologi HTML, CSS, JavaScript, dan React.',

    'Mengimplementasikan fitur website untuk menampilkan informasi profil sekolah, data akademik, serta informasi pendukung lainnya.',

    'Mengelola dan memperbarui konten website agar informasi yang disajikan lebih terstruktur dan mudah diakses.',

    'Melakukan pengujian, perbaikan kesalahan (debugging), serta deployment website agar dapat diakses secara online.'
    ],
    documentation: [
      {
        id: 'documentation-01',
        title: 'Dokumentasi magang hari pertama',
        date: 'Dokumentasi tersedia',
        description: 'Pengenalan lingkungan sekolah',
        image: '/images/experience/smp1.JPG',
      },
      {
        id: 'documentation-02',
        title: 'Dokumentasi magang penarikan',
        date: 'Dokumentasi tersedia',
        description: 'Dokumentasi kegiatan penarikan mahasiswa Kuliah Kerja Praktik (KKP-PLUS) sebagai tanda berakhirnya pelaksanaan kegiatan praktik di SMP Aisyiyah Paccinongan.',
        image: '/images/experience/smp2.jpg',
      },
      {
        id: 'documentation-03',
        title: 'Dokumentasi magang penarikan',
        date: 'Dokumentasi tersedia',
        description: 'proses praktek membuat game.',
        image: '/images/experience/smp3.JPG',
      },
    ],
  },
];