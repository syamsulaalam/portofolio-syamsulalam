import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ExternalLink, X } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return <section id="projects" className="border-b border-[#dbe5f3] bg-[#f7faff] py-24">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">01 · Selected work</p><h2 className="text-3xl font-bold tracking-tight text-[#17233c] sm:text-4xl">Proyek yang saya kerjakan.</h2></div><p className="max-w-sm text-sm leading-6 text-[#6c7d98]">Beberapa eksplorasi dan solusi digital yang dibangun dengan perhatian pada detail.</p></div>
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => <article key={project.id} className="group overflow-hidden rounded-2xl border border-[#d9e4f1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
          <div className={`relative h-48 overflow-hidden p-6 ${index % 2 === 0 ? 'bg-[#eaf3ff]' : 'bg-[#eef8f6]'}`}>
            <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/70 blur-2xl" />
            <div className="relative h-full rounded-xl border border-white/80 bg-white/70 p-4 shadow-lg shadow-blue-900/5 backdrop-blur">
              <div className="mb-3 flex items-center justify-between"><div className="flex gap-1"><span className="h-2 w-2 rounded-full bg-[#ffb4a8]" /><span className="h-2 w-2 rounded-full bg-[#ffd78a]" /><span className="h-2 w-2 rounded-full bg-[#91dbb0]" /></div><span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">{project.category}</span></div>
              <div className="space-y-2"><div className="h-2 w-1/3 rounded bg-blue-200" /><div className="h-2 w-full rounded bg-[#dbe7f6]" /><div className="h-2 w-4/5 rounded bg-[#dbe7f6]" /><div className="mt-4 flex gap-2"><div className="h-6 w-16 rounded-md bg-blue-600/80" /><div className="h-6 w-12 rounded-md bg-white" /></div></div>
            </div>
          </div>
          <div className="p-6"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-semibold text-blue-600">0{index + 1}</span><span className="text-xs text-[#8a9ab2]">{project.date}</span></div><h3 className="text-xl font-bold text-[#203656]">{project.title}</h3><p className="mt-3 text-sm leading-7 text-[#6c7d98]">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tools.map(tool => <span key={tool} className="rounded-md bg-[#f1f5fa] px-2.5 py-1 text-xs font-medium text-[#617492]">{tool}</span>)}</div><button type="button" onClick={() => setSelectedProject(project)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#214a85] transition group-hover:text-blue-600">Lihat detail <ArrowUpRight className="h-4 w-4" /></button></div>
        </article>)}
      </div>
    </div>
    {selectedProject && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#10213d]/50 p-4 backdrop-blur-sm" onClick={() => setSelectedProject(null)}><div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-7 shadow-2xl" onClick={e => e.stopPropagation()}><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-600">{selectedProject.category}</p><h3 className="mt-2 text-2xl font-bold text-[#17233c]">{selectedProject.title}</h3></div><button type="button" onClick={() => setSelectedProject(null)} aria-label="Tutup detail proyek" className="rounded-lg p-2 text-[#6c7d98] hover:bg-[#f1f5fa]"><X className="h-5 w-5" /></button></div><p className="mt-5 leading-7 text-[#60718d]">{selectedProject.scope}</p><div className="mt-6 space-y-3">{selectedProject.keyPoints.map(point => <div key={point} className="flex gap-3 text-sm leading-6 text-[#60718d]"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />{point}</div>)}</div><div className="mt-7 rounded-xl bg-[#f3f7fc] p-4"><p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8192ab]">Development notes</p><p className="text-sm leading-6 text-[#60718d]">{selectedProject.methodology}</p></div><a href={selectedProject.githubUrl} target="_blank" rel="noreferrer noopener" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#172f58] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Lihat di GitHub <ExternalLink className="h-4 w-4" /></a></div></div>}
  </section>;
};
