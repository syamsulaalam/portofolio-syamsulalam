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
];
