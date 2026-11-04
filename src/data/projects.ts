import { Project, SkillCategory } from '../types';

export const projectsData: Project[] = [
  {
    id: '01',
    title: 'Website Sekolah',
    description: 'Website informatif sekolah dengan struktur konten yang jelas, responsif, dan mudah dikelola.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    date: '2024 - 2025',
    scope: 'Landing page sekolah dengan halaman profil, berita, informasi akademik, dan kontak.',
    methodology: 'Menyusun komponen reusable, menerapkan layout responsif, dan mengoptimalkan hierarki visual untuk pengalaman pengguna.',
    keyPoints: [
      'Navigasi informasi sekolah lebih terstruktur dan mudah dipindai.',
      'Tampilan menyesuaikan desktop, tablet, dan smartphone.',
      'Komponen antarmuka dibuat konsisten untuk pengembangan berikutnya.',
    ],
    cliSnippet: {
      command: 'npm run build',
      output: [
        'building responsive school website...',
        '✓ layout compiled successfully',
        '✓ assets optimized for production',
      ],
    },
    mockPreview: {
      type: 'school',
      caption: 'School website preview with clear content hierarchy',
    },
    githubUrl: 'https://github.com/syamsulaalam',
  },
  {
    id: '02',
    title: 'CafeOrder',
    description: 'Aplikasi pemesanan menu cafe dengan alur pemilihan produk, keranjang, dan ringkasan pesanan.',
    tools: ['React', 'Tailwind CSS', 'Node.js'],
    category: 'Web Application',
    date: '2024',
    scope: 'Aplikasi web untuk membantu pelanggan memilih menu dan mengirimkan detail pesanan secara praktis.',
    methodology: 'Membangun UI berbasis komponen, mengelola state pesanan, dan menyiapkan struktur API untuk kebutuhan backend.',
    keyPoints: [
      'Alur order dibuat ringkas dari katalog hingga konfirmasi.',
      'Komponen UI dapat digunakan kembali di berbagai halaman.',
      'Tampilan fokus pada kejelasan menu dan feedback pengguna.',
    ],
    cliSnippet: {
      command: 'npm run dev',
      output: [
        'CafeOrder development server started',
        'Local: http://localhost:3000',
        '✓ menu components ready',
      ],
    },
    mockPreview: {
      type: 'cafe',
      caption: 'CafeOrder menu and order summary interface',
    },
    githubUrl: 'https://github.com/syamsulaalam',
  },
  {
    id: '03',
    title: 'Portfolio Personal',
    description: 'Portfolio personal yang menampilkan profil, kemampuan, pengalaman, dan proyek dalam satu pengalaman digital.',
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Frontend',
    date: '2025',
    scope: 'Single-page portfolio dengan section modular dan interaksi ringan.',
    methodology: 'Menggabungkan komponen React, motion yang halus, dan sistem warna yang konsisten agar konten personal mudah dipahami.',
    keyPoints: [
      'Informasi utama dapat ditemukan dengan cepat.',
      'Layout responsif menjaga keterbacaan di berbagai ukuran layar.',
      'Struktur komponen memudahkan penambahan proyek baru.',
    ],
    cliSnippet: {
      command: 'git status',
      output: [
        'On branch main',
        'working tree clean',
        '✓ portfolio ready to ship',
      ],
    },
    mockPreview: {
      type: 'dashboard',
      caption: 'Portfolio dashboard with project highlights',
    },
    githubUrl: 'https://github.com/syamsulaalam',
  },
  {
    id: '04',
    title: 'Dashboard Inventori',
    description: 'Konsep dashboard inventori dengan ringkasan data, status stok, dan tabel yang mudah dipindai.',
    tools: ['JavaScript', 'Express.js', 'MySQL'],
    category: 'Full Stack',
    date: '2025',
    scope: 'Dashboard internal untuk membantu melihat kondisi inventori secara ringkas dan terukur.',
    methodology: 'Menyusun visualisasi data sederhana, endpoint Express.js, dan model data relasional untuk kebutuhan aplikasi.',
    keyPoints: [
      'Ringkasan status membantu pengambilan keputusan lebih cepat.',
      'Data disiapkan agar mudah dihubungkan ke database MySQL.',
      'Komponen tabel dan badge status tetap terbaca pada layar kecil.',
    ],
    cliSnippet: {
      command: 'git add . && git commit -m "build inventory dashboard"',
      output: [
        'Preparing inventory components...',
        '✓ dashboard cards',
        '✓ stock table',
        '✓ database-ready data model',
      ],
    },
    mockPreview: {
      type: 'browser',
      caption: 'Inventory dashboard with summary cards and data table',
    },
    githubUrl: 'https://github.com/syamsulaalam',
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Workflow',
    skills: ['Git', 'GitHub', 'Responsive Design', 'UI Components'],
  },
  {
    title: 'Foundations',
    skills: ['Database Design', 'Accessibility', 'Performance', 'Problem Solving'],
  },
];
