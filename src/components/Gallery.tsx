import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, ImagePlus, Images, Maximize2, X } from 'lucide-react';
import { galleryCategories, galleryPhotos } from '../data/gallery';

interface GalleryItem {
  key: string;
  title?: string;
  description?: string;
  date?: string;
  objectPosition?: string;
  image: string;
  category: string;
  categoryId: string;
}

const ALL_CATEGORY = 'all';

const categoryLabels = new Map<string, string>(galleryCategories.map((category) => [category.id, category.label]));

const galleryItems: GalleryItem[] = galleryPhotos
  .filter((photo) => Boolean(photo.image))
  .map((photo) => ({
    key: photo.id,
    title: photo.title,
    description: photo.description,
    date: photo.date,
    objectPosition: photo.objectPosition,
    image: photo.image,
    category: categoryLabels.get(photo.category) ?? photo.category,
    categoryId: photo.category,
  }));

const categories = [
  { id: ALL_CATEGORY, label: 'Semua' },
  ...galleryCategories.filter((category) => galleryItems.some((item) => item.categoryId === category.id)),
];

const getAltText = (item: GalleryItem) => item.title ?? `Foto galeri ${item.category}`;

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visibleItems = useMemo(
    () => (activeCategory === ALL_CATEGORY ? galleryItems : galleryItems.filter((item) => item.categoryId === activeCategory)),
    [activeCategory],
  );
  const selectedItem = selectedIndex === null ? null : visibleItems[selectedIndex];

  const showPrevious = useCallback(
    () => setSelectedIndex((index) => (index === null ? null : (index - 1 + visibleItems.length) % visibleItems.length)),
    [visibleItems.length],
  );
  const showNext = useCallback(
    () => setSelectedIndex((index) => (index === null ? null : (index + 1) % visibleItems.length)),
    [visibleItems.length],
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, showPrevious, showNext]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedIndex !== null && !dialog.open) dialog.showModal();
    else if (selectedIndex === null && dialog.open) dialog.close();
  }, [selectedIndex]);

  return (
    <section id="galeri" className="gallery-section border-b border-[#161b22] bg-[#0b0d11] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">06 · Galeri</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#f0f6fc] sm:text-4xl">Galeri Foto</h2>
            <p className="mt-4 leading-7 text-[#8b949e]">
              Kumpulan momen dari kegiatan pribadi, organisasi, seminar, pencapaian, hingga proyek yang pernah saya jalani.
            </p>
          </div>
          <p className="flex items-center gap-2 text-sm text-[#8b949e]">
            <Images className="h-4 w-4 text-emerald-400" />
            {visibleItems.length} foto
          </p>
        </div>

        {categories.length > 2 && (
          <div role="tablist" aria-label="Filter kategori galeri" className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`gallery-filter rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'gallery-filter-active border-emerald-400/60 bg-emerald-400/10 font-medium text-emerald-400'
                      : 'border-[#21262d] text-[#8b949e] hover:border-[#38414e] hover:text-[#e6edf3]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        )}

        {galleryItems.length === 0 && (
          <div className="gallery-card flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#21262d] bg-[#12161f] px-6 py-16 text-center">
            <ImagePlus className="h-10 w-10 text-emerald-400" />
            <h3 className="mt-4 text-lg font-semibold text-[#f0f6fc]">Galeri akan segera diisi</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-[#8b949e]">
              Foto kegiatan dan dokumentasi lainnya akan ditampilkan di sini.
            </p>
          </div>
        )}

        <div key={activeCategory} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Lihat foto: ${getAltText(item)}`}
              style={{ animationDelay: `${index * 60}ms` }}
              className="gallery-card group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#21262d] bg-[#12161f] text-left transition duration-300 hover:-translate-y-1 hover:border-[#38414e] hover:shadow-xl hover:shadow-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
            >
              <img
                src={item.image}
                alt={getAltText(item)}
                loading="lazy"
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
              </span>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 transition duration-300 sm:translate-y-2 sm:group-hover:translate-y-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">{item.category}</p>
                {item.title && <h3 className="mt-1 line-clamp-1 text-sm font-semibold text-white">{item.title}</h3>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedItem && selectedIndex !== null && (
        <dialog
          ref={dialogRef}
          className="fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
          aria-labelledby="gallery-lightbox-title"
          onClose={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-transparent"
            aria-label="Tutup galeri"
            onClick={() => setSelectedIndex(null)}
          />
          <div className="pointer-events-none relative flex h-full w-full items-center justify-center p-4 sm:p-8">
            <figure key={selectedItem.key} className="gallery-lightbox pointer-events-auto flex w-full max-w-5xl flex-col">
              <div className="mb-3 flex items-start justify-between gap-4 text-white">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {selectedItem.category} · {selectedIndex + 1}/{visibleItems.length}
                  </p>
                  <h3 id="gallery-lightbox-title" className="mt-1 truncate text-base font-semibold sm:text-lg">
                    {getAltText(selectedItem)}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Tutup galeri"
                  className="shrink-0 rounded-lg p-2 text-[#c9d1d9] transition-colors hover:bg-[#ffffff1a] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#0e1117]">
                <img src={selectedItem.image} alt={getAltText(selectedItem)} className="max-h-[70vh] w-full object-contain" />
                {visibleItems.length > 1 && (
                  <>
                    <LightboxNavButton direction="previous" onClick={showPrevious} />
                    <LightboxNavButton direction="next" onClick={showNext} />
                  </>
                )}
              </div>

              {(selectedItem.date || selectedItem.description) && (
                <figcaption className="mt-3 text-sm leading-6 text-[#c9d1d9]">
                  {selectedItem.date && (
                    <span className="mb-1 flex items-center gap-1.5 text-xs text-[#8b949e]">
                      <CalendarDays className="h-3.5 w-3.5 text-emerald-400" />
                      {selectedItem.date}
                    </span>
                  )}
                  {selectedItem.description}
                </figcaption>
              )}
            </figure>
          </div>
        </dialog>
      )}
    </section>
  );
};

const LightboxNavButton: React.FC<{ direction: 'previous' | 'next'; onClick: () => void }> = ({ direction, onClick }) => {
  const isPrevious = direction === 'previous';
  const Icon = isPrevious ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrevious ? 'Foto sebelumnya' : 'Foto berikutnya'}
      className={`absolute top-1/2 ${isPrevious ? 'left-2 sm:left-3' : 'right-2 sm:right-3'} flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-emerald-500/80`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
};
