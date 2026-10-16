import Link from 'next/link';
import { TEMPLATE } from '@/lib/template';
import MenuPonsel from './MenuPonsel';

const TAUTAN = [['/#template', 'Template', `${TEMPLATE.length} demo live`], ['/lisensi', 'Lisensi & harga', 'Bayar sekali'], ['/#cara', 'Cara kerja', 'Tiga langkah'], ['/#faq', 'FAQ', 'Sebelum membeli']];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-indigo-deep/10 bg-mist/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2 py-2 font-[family-name:var(--font-figtree)] text-xl font-extrabold tracking-tight text-indigo-deep">
          <span aria-hidden="true" className="grid h-7 w-7 grid-cols-2 gap-0.5 rounded-md bg-indigo-deep p-1">
            <span className="rounded-[2px] bg-signal-up" /><span className="rounded-[2px] bg-white/80" /><span className="rounded-[2px] bg-white/80" /><span className="rounded-[2px] bg-white/40" />
          </span>
          SanzyHub
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-2 md:flex">
          {TAUTAN.map(([h, l]) => (
            <Link key={h} href={h} className="rounded-lg px-3 py-2 text-sm font-semibold text-steel hover:bg-indigo-deep/5 hover:text-indigo-deep">{l}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#template" className="inline-flex h-11 items-center rounded-lg bg-indigo-deep px-3.5 text-sm font-semibold text-white hover:bg-signal-up sm:px-4"><span className="hidden sm:inline">Lihat&nbsp;</span>{TEMPLATE.length} template</Link>
          <MenuPonsel tautan={TAUTAN} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-indigo-deep px-6 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <p className="font-[family-name:var(--font-figtree)] text-2xl font-extrabold">SanzyHub</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">Template landing page Next.js yang sudah punya halaman dalam, formulir yang bisa dicoba, dan isi yang terkumpul di satu berkas data.</p>
        </div>
        <nav aria-label="Template">
          <p className="panel-label mb-4 text-white/75">Template</p>
          <ul className="grid grid-cols-2 gap-x-4 text-sm text-white/75">
            {TEMPLATE.slice(0, 8).map((t) => <li key={t.slug}><Link href={`/template/${t.slug}`} className="inline-block py-1.5 hover:text-white">{t.nama}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Bantuan">
          <p className="panel-label mb-4 text-white/75">Bantuan</p>
          <ul className="text-sm text-white/75">
            <li><Link href="/lisensi" className="inline-block py-1.5 hover:text-white">Lisensi & harga</Link></li>
            <li><Link href="/#cara" className="inline-block py-1.5 hover:text-white">Cara kerja</Link></li>
            <li><Link href="/#faq" className="inline-block py-1.5 hover:text-white">Pertanyaan umum</Link></li>
          </ul>
        </nav>
      </div>
      <p className="panel-label mx-auto max-w-6xl border-t border-white/15 py-6 leading-[1.9] text-white/65">© 2026 SanzyHub · Toko fiktif; harga lisensi adalah contoh purwarupa desain. Demo template live di pintuweb.id.</p>
    </footer>
  );
}
