import React from 'react';
import { Code2, Database, GitBranch, Layers3 } from 'lucide-react';
import { skillsData } from '../data/projects';

const icons = [Code2, Database, Layers3, GitBranch];

export const Skills: React.FC = () => (
  <section id="skills" className="border-b border-[#dbe5f3] bg-white py-24">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="mb-12 max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">02 · Toolkit</p><h2 className="text-3xl font-bold tracking-tight text-[#17233c] sm:text-4xl">Teknologi untuk membangun produk yang solid.</h2><p className="mt-4 leading-7 text-[#6c7d98]">Kombinasi frontend, backend, database, dan workflow yang saya gunakan untuk mengubah ide menjadi pengalaman digital.</p></div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((category, index) => { const Icon = icons[index]; return <div key={category.title} className="rounded-2xl border border-[#dce6f2] bg-[#f8fbff] p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5"><div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><Icon className="h-5 w-5" /></div><h3 className="font-semibold text-[#203656]">{category.title}</h3><div className="mt-4 flex flex-wrap gap-2">{category.skills.map(skill => <span key={skill} className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-[#637795] ring-1 ring-[#e2eaf4]">{skill}</span>)}</div></div>; })}
      </div>
    </div>
  </section>
);
