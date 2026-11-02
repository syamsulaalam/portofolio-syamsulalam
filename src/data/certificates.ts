import { Certificate } from '../types';

export const certificatesData: Certificate[] = [
  {
    id: 'cert-01',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco',
    issuerOrg: 'Cisco Networking Academy / Universitas Muhammadiyah Makassar',
    issueDate: '2025', // Berdasarkan tanggal penyelesaian 31 Jul 2025
    credentialId: '', // Dikosongkan karena tidak tertera di sertifikat
    skills: ['Cybersecurity Principles', 'Network Security', 'Threat Identification', 'Data Protection'], // Disesuaikan dengan topik umum Essentials
    description: 'Pelatihan dasar keamanan siber yang mencakup prinsip keamanan jaringan, identifikasi ancaman, dan perlindungan data, yang diselenggarakan oleh Universitas Muhammadiyah Makassar melalui program Cisco Networking Academy.',
    verificationUrl: '', // Dikosongkan karena tidak ada tautan verifikasi pada gambar
    certificateUrl:
      '/certificates/Junior_Cybersecurity_Analyst_Career_Path_certificate_105841117922-student-unismuh-ac-id_3a7975ea-7143-4f76-85a3-6341f6153388.pdf',
    certificateFileName: 'junior-cybersecurity-analyst-career-path.pdf',
    certificateType: 'security'
  },
  {
    id: 'cert-02',
    title: 'MikroTik Certified Network Associate (MTCNA)', 
    issuer: 'MikroTik', 
    issuerOrg: 'Mikrotikls SIA',
    issueDate: '2026-04-11', // Tanggal yang tertera di sertifikat
    credentialId: '2604NA5996', // Nomor identitas sertifikat
    skills: ['RouterOS', 'Routing', 'Network Management', 'Firewall', 'Wireless'], // Disesuaikan dengan silabus umum MTCNA
    description: 'Sertifikasi tingkat dasar dari MikroTik yang memvalidasi pemahaman mengenai arsitektur RouterOS, pengelolaan jaringan, serta kemampuan melakukan troubleshooting dasar pada perangkat MikroTik.',
    verificationUrl: 'https://mikrotik.com/certificates', // Tautan verifikasi resmi
    certificateUrl: '/certificates/SERTIFICAT%20MTCNA%20SYAMSUL%20ALAM.pdf',
    certificateFileName: 'SERTIFICAT MTCNA SYAMSUL ALAM.pdf',
    certificateType: 'networking'
  },
  {
    id: 'cert-03',
    title: 'Data Science in Retail: Market Basket Analysis',
    issuer: 'DQLab',
    issuerOrg: 'DQLab',
    issueDate: '2025-05-26',
    credentialId: 'DQLABMLMBAARDIBJ',
    skills: [
        'Data Science',
        'Market Basket Analysis',
        'Data Analysis',
        'Retail Analytics',
        'Data Mining'
    ],
    description: 'Sertifikat pelatihan Data Science yang membahas penerapan Market Basket Analysis untuk menganalisis pola keterkaitan antarproduk dalam transaksi retail sebagai dasar dalam memahami perilaku pembelian pelanggan.',
    verificationUrl: '',
    certificateUrl: '/certificates/certificate-DQLABMLMBAARDIBJ.pdf',
    certificateFileName: 'certificate-DQLABMLMBAARDIBJ.pdf',
    certificateType: 'data-science'
},
 {
    id: 'cert-04',
    title: 'Use Generative AI for Software Development',
    issuer: 'IBM SkillsBuild',
    issuerOrg: 'IBM',
    issueDate: '2025-07-23',
    credentialId: 'MDL-504',
    skills: [
        'Generative AI',
        'Software Development',
        'Artificial Intelligence',
        'AI-Assisted Coding',
        'Prompt Engineering'
    ],
    description: 'Sertifikat penyelesaian pembelajaran IBM SkillsBuild mengenai pemanfaatan Generative AI dalam proses pengembangan perangkat lunak. Program ini memiliki durasi pembelajaran 1 jam.',
    verificationUrl: '',
    certificateUrl: '/certificates/Completion%20Certificate%20_%20SkillsBuild.pdf',
    certificateFileName: 'Completion Certificate _ SkillsBuild.pdf',
    certificateType: 'artificial-intelligence'
},
{
    id: 'cert-05',
    title: 'IBM Granite Models for Software Development',
    issuer: 'IBM SkillsBuild',
    issuerOrg: 'IBM',
    issueDate: '2025-07-23',
    credentialId: 'MDL-567',
    skills: [
        'Generative AI',
        'IBM Granite',
        'Software Development',
        'Artificial Intelligence',
        'AI-Assisted Coding',
        'Prompt Engineering'
    ],
    description: 'Sertifikat penyelesaian pembelajaran IBM SkillsBuild mengenai pemanfaatan IBM Granite Models dalam proses pengembangan perangkat lunak. Program ini memiliki durasi pembelajaran 1 jam 30 menit.',
    verificationUrl: '',
    certificateUrl: '/certificates/Completion%20Certificate%20_%20SkillsBuild2.pdf',
    certificateFileName: 'Completion Certificate _ SkillsBuild2.pdf',
    certificateType: 'artificial-intelligence'
},
{
    id: 'cert-06',
    title: 'Code Generation and Optimization Using IBM Granite',
    issuer: 'IBM SkillsBuild',
    issuerOrg: 'IBM',
    issueDate: '2025-07-26',
    credentialId: 'MDL-566',
    skills: [
        'Generative AI',
        'IBM Granite',
        'Code Generation',
        'Code Optimization',
        'Software Development',
        'Artificial Intelligence',
        'AI-Assisted Coding'
    ],
    description: 'Sertifikat penyelesaian pembelajaran IBM SkillsBuild mengenai pembuatan dan optimasi kode menggunakan IBM Granite. Program ini memiliki durasi pembelajaran 3 jam 30 menit.',
    verificationUrl: 'https://www.credly.com/badges/999f7f34-134d-4f5b-a262-a89d2f391c67',
    certificateUrl: '/certificates/Completion%20Certificate%20_%20SkillsBuild3.pdf',
    certificateFileName: 'Completion Certificate _ SkillsBuild3.pdf',
    certificateType: 'artificial-intelligence'
},
{
    id: 'cert-07',
    title: 'Data Classification and Summarization Using IBM Granite',
    issuer: 'IBM SkillsBuild',
    issuerOrg: 'IBM',
    issueDate: '2025-08-08',
    credentialId: 'MDL-565',
    skills: [
        'Generative AI',
        'IBM Granite',
        'Data Classification',
        'Text Summarization',
        'Data Analysis',
        'Artificial Intelligence',
        'Prompt Engineering'
    ],
    description: 'Sertifikat penyelesaian pembelajaran IBM SkillsBuild mengenai klasifikasi data dan pemodelan ringkasan teks menggunakan IBM Granite. Program ini memiliki durasi pembelajaran 3 jam 30 menit.',
    verificationUrl: 'https://www.credly.com/badges/03d77779-f0ef-49ca-a28d-4d7ad721c899',
    certificateUrl: '/certificates/Completion%20Certificate%20_%20SkillsBuild3DATA.pdf',
    certificateFileName: 'Completion Certificate _ SkillsBuild3DATA.pdf',
    certificateType: 'artificial-intelligence'
},
{
    id: 'cert-08',
    title: 'Classifying Data Using IBM Granite',
    issuer: 'IBM SkillsBuild',
    issuerOrg: 'IBM',
    issueDate: '2025-08-05',
    credentialId: 'MDL-563',
    skills: ['Generative AI', 'IBM Granite', 'Data Classification', 'Artificial Intelligence', 'Prompt Engineering'],
    description: 'Sertifikat penyelesaian pembelajaran IBM SkillsBuild mengenai klasifikasi data menggunakan IBM Granite. Program ini memiliki durasi pembelajaran 1 jam 30 menit.',
    verificationUrl: '',
    certificateUrl: '/certificates/Completion%20Certificate%20_%20SkillsBuildDATA1.pdf',
    certificateFileName: 'Completion Certificate _ SkillsBuildDATA1.pdf',
    certificateType: 'artificial-intelligence'
},
{
    id: 'cert-09',
    title: 'Summarizing Data Using IBM Granite',
    issuer: 'IBM SkillsBuild',
    issuerOrg: 'IBM',
    issueDate: '2025-08-05',
    credentialId: 'MDL-564',
    skills: ['Generative AI', 'IBM Granite', 'Text Summarization', 'Artificial Intelligence', 'Prompt Engineering'],
    description: 'Sertifikat penyelesaian pembelajaran IBM SkillsBuild mengenai peringkasan data dan teks menggunakan IBM Granite. Program ini memiliki durasi pembelajaran 1 jam 30 menit.',
    verificationUrl: '',
    certificateUrl: '/certificates/Completion%20Certificate%20_%20SkillsBuildDATA2.pdf',
    certificateFileName: 'Completion Certificate _ SkillsBuildDATA2.pdf',
    certificateType: 'artificial-intelligence'
},
{
    id: 'cert-10',
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco',
    issuerOrg: 'Cisco Networking Academy',
    issueDate: '2025-07-31',
    credentialId: '',
    skills: ['Network Security', 'Systems Security', 'Vulnerability Assessment', 'Risk Assessment', 'Incident Response'],
    description: 'Kredensial tingkat pelajar dari Cisco Networking Academy atas penyelesaian jalur karier Junior Cybersecurity Analyst, mencakup rekomendasi kontrol keamanan, mitigasi ancaman jaringan dan sistem, evaluasi postur keamanan menggunakan vulnerability dan risk assessment, serta perencanaan respons insiden.',
    verificationUrl: '',
    certificateUrl: '/certificates/JuniorCybersecurityAnalystUpdate20250731-32-ioz7nb.pdf',
    certificateFileName: 'JuniorCybersecurityAnalystUpdate20250731-32-ioz7nb.pdf',
    certificateType: 'security'
},
{
    id: 'cert-11',
    title: 'Code Generations and Optimization - Student Developer Initiative',
    issuer: 'Hacktiv8',
    issuerOrg: 'Hacktiv8 Indonesia x IBM SkillsBuild',
    issueDate: '2025-07',
    credentialId: '',
    skills: ['Generative AI', 'Code Generation', 'Code Optimization', 'AI-Assisted Coding'],
    description: 'Sertifikat penyelesaian kelas "Code Generations and Optimization" dalam program Student Developer Initiative yang diselenggarakan oleh Hacktiv8 Indonesia bekerja sama dengan IBM SkillsBuild, melalui sesi eksploratif dan eksperimental pada 22 & 24 Juli 2025.',
    verificationUrl: '',
    certificateUrl: '/certificates/Sertifikat%20IBM%20Wave%205%20-%20Syamsul%20Alam.pdf',
    certificateFileName: 'Sertifikat IBM Wave 5 - Syamsul Alam.pdf',
    certificateType: 'artificial-intelligence'
},
{
    id: 'cert-12',
    title: 'Algorithm Strategy and Analysis',
    issuer: 'Laboratorium Informatika Unismuh',
    issuerOrg: 'Laboratorium Informatika Universitas Muhammadiyah Makassar',
    issueDate: '2023-10',
    credentialId: '1580/IF/20222/A.5-II/X/45/2023',
    skills: ['Algorithms', 'Algorithm Analysis', 'Problem Solving'],
    description: 'Sertifikat profesional praktikum yang mengembangkan kemampuan merancang, mengimplementasikan, dan menganalisis algoritma menggunakan berbagai strategi untuk mengoptimalkan pemecahan masalah komputasi.',
    verificationUrl: '',
    certificateUrl: '/certificates/Sertifikat_1580-IF-20222-A.5-II-X-45-2023_Syamsul_alam.pdf',
    certificateFileName: 'Sertifikat_1580-IF-20222-A.5-II-X-45-2023_Syamsul_alam.pdf',
    certificateType: 'certification'
},
{
    id: 'cert-13',
    title: 'Data Structures',
    issuer: 'Laboratorium Informatika Unismuh',
    issuerOrg: 'Laboratorium Informatika Universitas Muhammadiyah Makassar',
    issueDate: '2023-10',
    credentialId: '1716/IF/20222/A.5-II/X/45/2023',
    skills: ['Data Structures', 'Structured Programming', 'Problem Solving'],
    description: 'Sertifikat profesional praktikum yang mencakup implementasi dan analisis struktur data inti untuk menyelesaikan masalah komputasi secara efisien menggunakan pemrograman terstruktur.',
    verificationUrl: '',
    certificateUrl: '/certificates/Sertifikat_1716-IF-20222-A.5-II-X-45-2023_Syamsul_alam.pdf',
    certificateFileName: 'Sertifikat_1716-IF-20222-A.5-II-X-45-2023_Syamsul_alam.pdf',
    certificateType: 'certification'
},
{
    id: 'cert-14',
    title: 'Database Systems',
    issuer: 'Laboratorium Informatika Unismuh',
    issuerOrg: 'Laboratorium Informatika Universitas Muhammadiyah Makassar',
    issueDate: '2023-07',
    credentialId: '1775/IF/20222/A.5-II/VII/45/2023',
    skills: ['Relational Database', 'SQL', 'Data Modeling', 'Database Design'],
    description: 'Sertifikat profesional praktikum yang memperkenalkan konsep basis data relasional, meliputi pemodelan data, query SQL, serta perancangan dan pengelolaan basis data dasar.',
    verificationUrl: '',
    certificateUrl: '/certificates/Sertifikat_1775-IF-20222-A.5-II-VII-45-2023_Syamsul_alam.pdf',
    certificateFileName: 'Sertifikat_1775-IF-20222-A.5-II-VII-45-2023_Syamsul_alam.pdf',
    certificateType: 'certification'
},
{
    id: 'cert-15',
    title: 'Basic Command Line',
    issuer: 'Laboratorium Informatika Unismuh',
    issuerOrg: 'Laboratorium Informatika Universitas Muhammadiyah Makassar',
    issueDate: '2023-07',
    credentialId: '1912/IF/20222/A.5-II/VII/45/2023',
    skills: ['Command Line', 'Linux Terminal', 'File Management', 'Shell Scripting'],
    description: 'Sertifikat profesional praktikum yang mengembangkan keterampilan praktis penggunaan terminal, meliputi navigasi direktori, manajemen file, dan dasar-dasar shell scripting.',
    verificationUrl: '',
    certificateUrl: '/certificates/Sertifikat_1912-IF-20222-A.5-II-VII-45-2023_Syamsul_Alam.pdf',
    certificateFileName: 'Sertifikat_1912-IF-20222-A.5-II-VII-45-2023_Syamsul_Alam.pdf',
    certificateType: 'certification'
},
{
    id: 'cert-16',
    title: 'Web Programming',
    issuer: 'Laboratorium Informatika Unismuh',
    issuerOrg: 'Laboratorium Informatika Universitas Muhammadiyah Makassar',
    issueDate: '2024-05',
    credentialId: '1831/IF/20222/A.5-II/V/45/2024',
    skills: ['HTML', 'CSS', 'JavaScript', 'Server-side Programming'],
    description: 'Sertifikat profesional praktikum yang membahas konsep inti pemrograman web, meliputi struktur halaman, styling, scripting, dan pemrosesan sisi server melalui latihan praktis.',
    verificationUrl: '',
    certificateUrl: '/certificates/Sertifikat_1831-IF-20222-A.5-II-V-45-2024_Syamsul_Alam.pdf',
    certificateFileName: 'Sertifikat_1831-IF-20222-A.5-II-V-45-2024_Syamsul_Alam.pdf',
    certificateType: 'certification'
},
{
    id: 'cert-17',
    title: 'Seminar Internasional PIKIR 2025: Sinergitas Pemuda Menuju Indonesia Maju',
    issuer: 'LKIM-PENA Unismuh',
    issuerOrg: 'Lembaga Kreativitas Ilmiah Mahasiswa Penelitian dan Penalaran (LKIM-PENA) Universitas Muhammadiyah Makassar',
    issueDate: '2025-06-30',
    credentialId: '004/C/PP-PIKIR/X/JUNI/2025 M',
    skills: ['Youth Development', 'Scientific Creativity', 'Seminar'],
    description: 'Sertifikat peserta Seminar Internasional Pekan Ilmiah dan Kreativitas Remaja (PIKIR) 2025 yang diselenggarakan oleh LKIM-PENA Universitas Muhammadiyah Makassar pada 26-30 Juni 2025 dengan tema "Sinergitas Pemuda Menuju Indonesia Maju".',
    verificationUrl: '',
    certificateUrl: '/certificates/Sertifikat%20__Nama%20Lengkap__.pdf',
    certificateFileName: 'Sertifikat PIKIR 2025 - Syamsul Alam.pdf',
    certificateType: 'certification'
},
{
    id: 'cert-18',
    title: 'Seminar Self Esteem & Sosial Media pada Gen Z',
    issuer: 'Smavesca 2.b',
    issuerOrg: 'Politeknik STIA LAN Makassar',
    issueDate: '2024-06-12',
    credentialId: '',
    skills: ['Self Esteem', 'Social Media Awareness', 'Seminar'],
    description: 'Sertifikat penghargaan sebagai peserta seminar bertema "Self Esteem & Sosial Media pada Gen Z" yang diselenggarakan oleh Smavesca 2.b, Politeknik STIA LAN Makassar, pada 12 Juni 2024.',
    verificationUrl: '',
    certificateUrl: '/certificates/seminar-self-esteem-sosial-media-gen-z.pdf',
    certificateFileName: 'Sertifikat Seminar Self Esteem & Sosial Media Gen Z - Syamsul Alam.pdf',
    certificateType: 'certification'
}
];
