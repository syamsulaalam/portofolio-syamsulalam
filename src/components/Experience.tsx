import React, { useEffect, useRef, useState } from 'react';
import { BriefcaseBusiness, ChevronLeft, ChevronRight, ImageOff, MapPin, X } from 'lucide-react';
import { internshipExperiences, InternshipDocumentation, InternshipExperience } from '../data/experience';

type Selection = { experienceIndex: number; docIndex: number };

export const Experience: React.FC = () => {
  const [selected, setSelected] = useState<Selection | null>(null);
  const selectedExperience = selected === null ? null : internshipExperiences[selected.experienceIndex];
  const documentation = selectedExperience?.documentation ?? [];
  const selectedIndex = selected === null ? null : selected.docIndex;
  const selectedItem = selectedIndex === null ? null : documentation[selectedIndex];
  const dialogRef = useRef<HTMLDialogElement>(null);

  const setSelectedIndex = (docIndex: number | null) =>
    setSelected((current) => (docIndex === null || current === null ? null : { ...current, docIndex }));
  const showPrevious = (index: number) => setSelectedIndex((index - 1 + documentation.length) % documentation.length);
  const showNext = (index: number) => setSelectedIndex((index + 1) % documentation.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') showPrevious(selectedIndex);
      if (event.key === 'ArrowRight') showNext(selectedIndex);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedIndex !== null && !dialog.open) {
      dialog.showModal();
    } else if (selectedIndex === null && dialog.open) {
      dialog.close();
    }
  }, [selectedIndex]);

  return (
    <section id="experience" className="experience-section border-b border-[#161b22] bg-[#0b0d11] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">05 · Experience</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#f0f6fc] sm:text-4xl">Internship Experience &amp; Documentation</h2>
          <p className="mt-4 leading-7 text-[#8b949e]">
            Dokumentasi visual pengalaman magang di Dinas Kesehatan Kota Makassar dan PT Telkom Indonesia. Foto dan detail kegiatan disiapkan agar mudah diperbarui berdasarkan dokumentasi asli.
          </p>
        </div>

        <div className="space-y-20">
          {internshipExperiences.map((experience, experienceIndex) => (
            <ExperienceBlock
              key={experience.id}
              experience={experience}
              onSelectDoc={(docIndex) => setSelected({ experienceIndex, docIndex })}
            />
          ))}
        </div>
      </div>

      {selectedItem && selectedIndex !== null && (
        <dialog
          ref={dialogRef}
          className="experience-modal-dialog fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
          aria-labelledby="experience-modal-title"
          onClose={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-transparent"
            aria-label="Tutup dokumentasi"
            onClick={() => setSelectedIndex(null)}
          />
          <div className="relative flex h-full w-full items-center justify-center p-4">
            <div className="experience-modal w-full max-w-3xl rounded-2xl border border-[#30363d] bg-[#0e1117] p-4 shadow-2xl sm:p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Documentation {selectedIndex + 1}</p>
                  <h3 id="experience-modal-title" className="mt-2 text-xl font-bold text-[#f0f6fc]">{selectedItem.title}</h3>
                </div>
                <button type="button" onClick={() => setSelectedIndex(null)} aria-label="Tutup dokumentasi" className="rounded-lg p-2 text-[#8b949e] hover:bg-[#161b22] hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <DocumentationVisual item={selectedItem} large />
              <p className="mt-4 text-sm leading-7 text-[#8b949e]">{selectedItem.description}</p>
              <div className="mt-5 flex justify-between">
                <button type="button" onClick={() => showPrevious(selectedIndex)} className="inline-flex items-center gap-1 text-sm text-[#c9d1d9] hover:text-emerald-400"><ChevronLeft className="h-4 w-4" /> Sebelumnya</button>
                <button type="button" onClick={() => showNext(selectedIndex)} className="inline-flex items-center gap-1 text-sm text-[#c9d1d9] hover:text-emerald-400">Berikutnya <ChevronRight className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

const ExperienceBlock: React.FC<{ experience: InternshipExperience; onSelectDoc: (docIndex: number) => void }> = ({ experience, onSelectDoc }) => (
  <article>
    <div className="experience-overview mb-10 grid gap-6 rounded-2xl border border-[#21262d] bg-[#0e1117] p-6 md:grid-cols-12 md:p-8">
      <div className="md:col-span-5">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#161b22] text-emerald-400">
          <BriefcaseBusiness className="h-5 w-5" />
        </div>
        <h3 className="text-2xl font-bold text-[#f0f6fc]">{experience.institution}</h3>
        <p className="mt-2 text-sm font-medium text-emerald-400">Divisi {experience.division}</p>
      </div>
      <div className="grid gap-4 text-sm text-[#8b949e] sm:grid-cols-2 md:col-span-7">
        <InfoItem label="Periode" value={experience.period} />
        <InfoItem label="Lokasi" value={experience.location} icon={<MapPin className="h-3.5 w-3.5 shrink-0" />} />
        <p className="leading-7 sm:col-span-2">{experience.summary}</p>
      </div>
    </div>

    <div className={`mb-10 grid gap-3 ${experience.responsibilities.length % 3 === 0 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
      {experience.responsibilities.map((responsibility) => (
        <div key={responsibility} className="experience-detail rounded-xl border border-[#21262d] bg-[#0e1117] p-4 text-sm leading-6 text-[#8b949e]">
          <span className="mr-2 text-emerald-400">+</span>{responsibility}
        </div>
      ))}
    </div>

    {experience.documentation.length > 0 && (
      <div className="grid gap-5 md:grid-cols-3">
        {experience.documentation.map((item, index) => (
          <DocumentationCard key={item.id} item={item} onClick={() => onSelectDoc(index)} />
        ))}
      </div>
    )}
  </article>
);

const InfoItem: React.FC<{ label: string; value: string; icon?: React.ReactNode }> = ({ label, value, icon }) => (
  <div>
    <p className="mb-1 text-xs uppercase tracking-wider text-[#6e7681]">{label}</p>
    <p className="flex items-center gap-1.5 text-[#c9d1d9]">{icon}{value}</p>
  </div>
);

const DocumentationCard: React.FC<{ item: InternshipDocumentation; onClick: () => void }> = ({ item, onClick }) => (
  <button type="button" onClick={onClick} className="experience-card group overflow-hidden rounded-2xl border border-[#21262d] bg-[#0e1117] text-left transition hover:-translate-y-1 hover:border-[#38414e] hover:shadow-xl hover:shadow-black/20">
    <DocumentationVisual item={item} />
    <div className="p-5">
      <p className="text-xs text-emerald-400">{item.date}</p>
      <h3 className="mt-2 font-semibold text-[#f0f6fc]">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#8b949e]">{item.description}</p>
    </div>
  </button>
);

const DocumentationVisual: React.FC<{ item: InternshipDocumentation; large?: boolean }> = ({ item, large = false }) => (
  <div className={`experience-visual relative flex items-center justify-center overflow-hidden bg-[#12161f] ${large ? 'min-h-[320px] sm:min-h-[440px]' : 'h-56'}`}>
    {item.image ? (
      <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-contain" />
    ) : (
      <div className="flex max-w-xs flex-col items-center px-6 text-center">
        <ImageOff className="h-8 w-8 text-[#6e7681]" />
        <p className="mt-3 text-sm font-medium text-[#c9d1d9]">Foto dokumentasi belum ditambahkan</p>
        <p className="mt-1 text-xs leading-5 text-[#6e7681]">Tambahkan foto asli ke public/images/experience/ dan isi properti image pada data pengalaman.</p>
      </div>
    )}
  </div>
);
