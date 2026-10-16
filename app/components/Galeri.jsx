'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { KATEGORI, TEMPLATE } from '@/lib/template';

const URUT = { baru: 'Urutan katalog', halaman: 'Halaman terbanyak', nama: 'Nama A–Z' };

export default function Galeri() {
  const [kat, setKat] = useState('semua');
  const [urut, setUrut] = useState('baru');
  const tampil = TEMPLATE.filter((t) => kat === 'semua' || t.kategori === kat).sort((a, b) => (urut === 'halaman' ? b.rute.length - a.rute.length : urut === 'nama' ? a.nama.localeCompare(b.nama) : 0));
  const tombol = (aktif) => `rounded-lg px-3.5 py-2 text-sm font-semibold ${aktif ? 'bg-indigo-deep text-white' : 'bg-white text-indigo-deep ring-1 ring-indigo-deep/12 hover:ring-indigo-deep/40'}`;

  return (
    <>
      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Saring kategori" className="flex flex-wrap gap-2">
          {[['semua', 'Semua'], ...Object.entries(KATEGORI)].map(([k, n]) => (
            <button key={k} type="button" aria-pressed={kat === k} onClick={() => setKat(k)} className={tombol(kat === k)}>
              {n} <span className={kat === k ? 'text-white/70' : 'text-steel'}>{k === 'semua' ? TEMPLATE.length : TEMPLATE.filter((t) => t.kategori === k).length}</span>
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-sm font-semibold text-indigo-deep">
          Urutkan
          <select value={urut} onChange={(e) => setUrut(e.target.value)} className="rounded-lg border border-indigo-deep/15 bg-white px-3 py-2 focus:border-signal-up focus:outline-none">
            {Object.entries(URUT).map(([k, n]) => <option key={k} value={k}>{n}</option>)}
          </select>
        </label>
      </div>
      <p role="status" className="panel-label mt-6">{tampil.length} template</p>
      {/* Ponsel: baris ringkas (gambar kecil di kiri) supaya 15 template tidak memanjang belasan layar. */}
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {tampil.map((t) => (
          <li key={t.slug} className="group relative flex gap-4 overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-indigo-deep/8 transition-shadow hover:shadow-[0_20px_40px_-24px_rgb(27_31_59/0.5)] sm:flex-col sm:gap-0 sm:p-0">
            <Link href={`/template/${t.slug}`} tabIndex={-1} aria-hidden="true" className="relative block aspect-[16/10] w-32 shrink-0 self-start overflow-hidden rounded-lg bg-mist-2 sm:w-auto sm:self-auto sm:rounded-none">
              <Image src={t.foto} alt="" fill sizes="(max-width: 640px) 128px, (max-width: 1024px) 50vw, 360px" className="object-cover object-top" />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col sm:p-5">
              <p className="flex items-center justify-between gap-3">
                <span className="panel-label text-signal-up">{KATEGORI[t.kategori]}</span>
                <span className="metric hidden shrink-0 text-sm text-indigo-deep sm:inline">{t.rute.length} halaman</span>
              </p>
              <h3 className="mt-1 text-lg leading-tight font-bold text-indigo-deep sm:mt-2 sm:text-xl"><Link href={`/template/${t.slug}`} className="hover:text-signal-up">{t.nama}</Link></h3>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed sm:mt-2 sm:line-clamp-none">{t.ringkas}</p>
              <p className="mt-auto flex items-center justify-between gap-3 pt-2 text-sm sm:pt-5">
                <span className="hidden text-steel sm:inline">{t.font.join(' · ')}</span>
                <span className="metric text-indigo-deep sm:hidden">{t.rute.length} halaman</span>
                <a href={t.demo} target="_blank" rel="noopener noreferrer" className="shrink-0 py-1 font-semibold text-signal-up hover:text-indigo-deep">Demo<span className="sr-only"> {t.nama} (tab baru)</span> ↗</a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
