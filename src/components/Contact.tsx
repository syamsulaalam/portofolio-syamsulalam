import React, { useState } from 'react';
import { AlertCircle, BadgeInfo, Camera, Check, Code2, Copy, ExternalLink, Loader2, Mail, Send } from 'lucide-react';

const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzJAgmZ5JgOvp2837kgljyYSUAboyamMxio3QMjFidneabGU_7ai2vhcop8TLF2CjtpQw/exec';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';
const initialFormData = { name: '', email: '', message: '' };
const SEND_TIMEOUT_MS = 15000;

export const Contact: React.FC = () => {
  const emailAddress = 'syamsulaaalam@gmail.com';
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const submit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMessage('');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SEND_TIMEOUT_MS);
    try {
      // text/plain keeps this a "simple" CORS request; Apps Script cannot answer an OPTIONS preflight.
      const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim() }),
        signal: controller.signal
      });
      const result: { result?: string } = await response.json();
      if (!response.ok || result.result !== 'success') throw new Error('Submission rejected');
      setFormData(initialFormData);
      setStatus('success');
    } catch {
      setErrorMessage('Pesan gagal terkirim. Periksa koneksi Anda lalu coba lagi, atau hubungi saya langsung melalui email.');
      setStatus('error');
    } finally {
      clearTimeout(timeoutId);
    }
  };
  const isSending = status === 'sending';
  const links = [{ label: 'GitHub', value: 'github.com/syamsulaalam', href: 'https://github.com/syamsulaalam', Icon: Code2 }, { label: 'LinkedIn', value: 'linkedin.com/in/syamsul-alam', href: 'https://www.linkedin.com/in/syamsul-alam-224b65366', Icon: BadgeInfo }, { label: 'Instagram', value: 'instagram/syamsulaaalam', href: 'https://www.instagram.com/syamsulaaalam/', Icon: Camera }];
  return <section id="contact" className="border-b border-[#dbe5f3] bg-white py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="mb-12"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">04 · Let's connect</p><h2 className="text-3xl font-bold tracking-tight text-[#17233c] sm:text-4xl">Mari membangun sesuatu bersama.</h2><p className="mt-4 max-w-xl leading-7 text-[#6c7d98]">Terbuka untuk kesempatan kerja, proyek freelance, dan kolaborasi pengembangan website.</p></div><div className="grid gap-8 md:grid-cols-5"><div className="space-y-3 md:col-span-2">{links.map(({ label, value, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer noopener" className="group flex items-center justify-between rounded-2xl border border-[#dce6f2] bg-[#f8fbff] p-4 transition hover:-translate-y-0.5 hover:border-blue-300"><span className="flex items-center gap-3"><span className="rounded-xl bg-blue-100 p-2.5 text-blue-700"><Icon className="h-4 w-4" /></span><span><span className="block text-sm font-semibold text-[#203656]">{label}</span><span className="text-xs text-[#7b8ca5]">{value}</span></span></span><ExternalLink className="h-4 w-4 text-[#9aabc1]" /></a>)}<div className="flex items-center justify-between rounded-2xl border border-[#dce6f2] p-4"><span className="flex items-center gap-2 text-xs text-[#6c7d98]"><Mail className="h-4 w-4 text-blue-600" />{emailAddress}</span><button type="button" onClick={() => { void navigator.clipboard.writeText(emailAddress); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700">{copied ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}</button></div></div><div className="rounded-2xl border border-[#dce6f2] bg-[#f8fbff] p-6 md:col-span-3">{status === 'success' ? <div role="status" className="rounded-xl bg-emerald-50 p-5 text-sm text-emerald-700"><div className="flex items-center gap-2 font-semibold"><Check className="h-4 w-4" /> Pesan berhasil terkirim</div><p className="mt-2 text-xs leading-5 text-emerald-700/80">Terima kasih! Pesan Anda sudah saya terima dan akan segera saya balas melalui email.</p><button type="button" onClick={() => setStatus('idle')} className="mt-4 text-xs font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">Kirim pesan lain</button></div> : <form onSubmit={submit} className="space-y-4">{status === 'error' && <div role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-xs leading-5 text-red-700"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /><span>{errorMessage}</span></div>}<div className="grid gap-4 sm:grid-cols-2"><input required disabled={isSending} aria-label="Nama" placeholder="Nama" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="rounded-xl border border-[#cbd8ea] bg-white px-4 py-3 text-sm text-[#203656] outline-none focus:border-blue-500 disabled:opacity-60" /><input required disabled={isSending} type="email" aria-label="Email" placeholder="Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="rounded-xl border border-[#cbd8ea] bg-white px-4 py-3 text-sm text-[#203656] outline-none focus:border-blue-500 disabled:opacity-60" /></div><textarea required disabled={isSending} aria-label="Pesan" rows={5} placeholder="Ceritakan kebutuhan atau ide Anda..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full resize-none rounded-xl border border-[#cbd8ea] bg-white px-4 py-3 text-sm text-[#203656] outline-none focus:border-blue-500 disabled:opacity-60" /><button type="submit" disabled={isSending} aria-busy={isSending} className="inline-flex items-center gap-2 rounded-xl bg-[#172f58] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-[#172f58]">{isSending ? <><Loader2 className="h-4 w-4 animate-spin" /> Mengirim...</> : <><Send className="h-4 w-4" /> Kirim pesan</>}</button></form>}</div></div></div></section>;
};
