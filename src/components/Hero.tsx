import React from 'react';
import { ArrowDown, ArrowUpRight, Braces, Code2, Database, Sparkles } from 'lucide-react';
import profileImage from '../assets/images/syamsulalamm.jpg';

interface HeroProps {
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects }) => (
  <section id="home" className="relative overflow-hidden border-b border-[#dbe5f3] bg-[#f7faff] pt-32 pb-20 md:pt-40 md:pb-28">
    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
    <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-sky-100/80 blur-3xl" />
    <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
      <div className="space-y-7 lg:col-span-7">
        <div className="flex items-center gap-3">
          <img src={profileImage} alt="Syamsul Alam" className="h-14 w-14 rounded-2xl object-cover shadow-lg shadow-blue-900/10 ring-4 ring-white" />
          <div>
            <p className="text-sm font-semibold text-[#17233c]">Syamsul Alam</p>
            <p className="text-xs text-[#6c7d98]">Makassar, Indonesia · Available for projects</p>
          </div>
        </div>
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
            <Sparkles className="h-3.5 w-3.5" /> Web Developer
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#17233c] sm:text-6xl">
            Membangun pengalaman digital yang <span className="text-blue-600">bermakna.</span>
          </h1>
        </div>
        <p className="max-w-xl text-base leading-8 text-[#60718d] sm:text-lg">
          Saya adalah individu berlatar belakang Informatika yang tertarik pada pengembangan website modern, responsif, dan fungsional. Saya berfokus membangun solusi digital melalui teknologi frontend, backend, dan database.
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={onViewProjects} className="inline-flex items-center gap-2 rounded-xl bg-[#172f58] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-700">
            Lihat Proyek <ArrowDown className="h-4 w-4" />
          </button>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-[#cbd8ea] bg-white px-5 py-3 text-sm font-semibold text-[#29446d] transition hover:-translate-y-0.5 hover:border-blue-400">
            Mari Berkolaborasi <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="relative lg:col-span-5">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/50 to-sky-100/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-[#d5e0ef] bg-white p-3 shadow-2xl shadow-blue-950/10">
          <div className="flex items-center gap-1.5 border-b border-[#e7edf5] px-2 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffb4a8]" /><span className="h-2.5 w-2.5 rounded-full bg-[#ffd78a]" /><span className="h-2.5 w-2.5 rounded-full bg-[#91dbb0]" />
            <span className="ml-3 text-[11px] text-[#91a1b9]">syamsulalam.dev</span>
          </div>
          <div className="grid grid-cols-3 gap-3 p-4">
            <div className="col-span-2 rounded-xl bg-[#edf5ff] p-4"><div className="mb-5 h-2 w-20 rounded-full bg-blue-200" /><div className="h-3 w-full rounded-full bg-[#c4dafa]" /><div className="mt-2 h-3 w-2/3 rounded-full bg-[#d7e5f7]" /><div className="mt-7 flex gap-2"><span className="h-8 w-20 rounded-lg bg-blue-600" /><span className="h-8 w-16 rounded-lg bg-white" /></div></div>
            <div className="space-y-3"><div className="flex h-16 items-center justify-center rounded-xl bg-[#172f58] text-white"><Code2 /></div><div className="flex h-16 items-center justify-center rounded-xl bg-[#f1f5fa] text-blue-600"><Database /></div></div>
            <div className="col-span-3 flex items-center gap-3 rounded-xl border border-[#e6edf6] p-3"><Braces className="h-5 w-5 text-blue-600" /><div className="flex-1"><div className="h-2 w-24 rounded bg-[#c9d8eb]" /><div className="mt-2 h-2 w-40 rounded bg-[#e8eef6]" /></div><span className="text-xs font-semibold text-emerald-600">clean UI</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
