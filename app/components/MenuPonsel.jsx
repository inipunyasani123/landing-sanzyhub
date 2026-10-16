'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* Navigasi ponsel: tombol "Menu" membuka panel di bawah kepala halaman.
   Tertutup sendiri saat pindah halaman, saat tautan diklik, atau dengan Escape. */
export default function MenuPonsel({ tautan }) {
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const pathname = usePathname();

  useEffect(() => setBuka(false), [pathname]);
  useEffect(() => {
    if (!buka) return;
    const tutup = (e) => {
      if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); }
    };
    document.addEventListener('keydown', tutup);
    return () => document.removeEventListener('keydown', tutup);
  }, [buka]);

  return (
    <div className="md:hidden">
      <button
        ref={tombol}
        type="button"
        aria-expanded={buka}
        aria-controls="menu-ponsel"
        onClick={() => setBuka((b) => !b)}
        className="inline-flex h-11 items-center rounded-lg border border-indigo-deep/15 bg-white px-3.5 text-sm font-semibold text-indigo-deep hover:border-indigo-deep/40"
      >
        {buka ? 'Tutup' : 'Menu'}
      </button>
      <nav id="menu-ponsel" aria-label="Navigasi utama" hidden={!buka} className="absolute inset-x-0 top-full border-b border-indigo-deep/10 bg-mist px-5 pb-4 shadow-[0_24px_40px_-24px_rgb(27_31_59/0.35)]">
        <ul className="divide-y divide-indigo-deep/10">
          {tautan.map(([h, l, ket]) => (
            <li key={h}>
              <Link href={h} onClick={() => setBuka(false)} className="flex min-h-14 items-center justify-between gap-4 py-2 text-lg font-bold text-indigo-deep">
                {l}
                <span className="panel-label text-steel">{ket}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
