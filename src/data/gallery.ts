export const galleryCategories = [
  { id: 'kegiatan-pribadi', label: 'Kegiatan Pribadi' },
  { id: 'organisasi', label: 'Organisasi & Acara' },
  { id: 'seminar-workshop', label: 'Seminar & Workshop' },
  { id: 'pencapaian', label: 'Pencapaian' },
  { id: 'proyek', label: 'Proyek Pribadi' },
  { id: 'keseharian', label: 'Keseharian' },
  { id: 'lainnya', label: 'Lainnya' },
] as const;

export type GalleryCategoryId = (typeof galleryCategories)[number]['id'];

export interface GalleryPhoto {
  id: string;
  /** Path relatif dari folder public, contoh: '/images/gallery/seminar-2026.jpg'. */
  image: string;
  category: GalleryCategoryId;
  title?: string;
  description?: string;
  /** Format bebas, contoh: '12 Mei 2026'. */
  date?: string;
  /** Titik fokus foto pada kartu grid (CSS object-position), contoh: 'center 20%' untuk foto potret. */
  objectPosition?: string;
}
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'foto-wisuda',
    image: '/images/gallery/foto-wisuda.jpg',
    category: 'pencapaian',
    title: 'Foto Wisuda',
    description: 'Foto wisuda di Universitas Muhammadiyah Makassar.',
    objectPosition: 'center 15%',
  },
   {
    id: 'foto-wisuda',
    image: '/images/gallery/tutup1.jpeg',
    category: 'pencapaian',
    title: 'Foto Wisuda',
    description: 'ujian tutup 31 Agustus 2026 di Universitas Muhammadiyah Makassar.',
    objectPosition: 'center 35%',
  },
   {
    id: 'foto-wisuda',
    image: '/images/gallery/tutup2.jpg',
    category: 'pencapaian',
    title: 'Foto Wisuda',
    description: 'ujian tutup 31 Agustus 2026 di Universitas Muhammadiyah Makassar.',
    objectPosition: 'center 35%',
  },
   {
    id: 'foto-wisuda',
    image: '/images/gallery/tutup3.jpeg',
    category: 'pencapaian',
    title: 'Foto Wisuda',
    description: 'ujian tutup 31 Agustus 2026 di Universitas Muhammadiyah Makassar.',
    objectPosition: 'center 35%',
  },
];
