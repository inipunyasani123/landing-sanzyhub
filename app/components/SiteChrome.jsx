import Link from 'next/link';
import { TEMPLATE } from '@/lib/template';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-indigo-deep/10 bg-mist/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-figtree)] text-xl font-extrabold tracking-tight text-indigo-deep">
          <span aria-hidden="true" className="grid h-7 w-7 grid-cols-2 gap-0.5 rounded-md bg-indigo-deep p-1">
            <span className="rounded-[2px] bg-signal-up" /><span className="rounded-[2px] bg-white/80" /><span className="rounded-[2px] bg-white/80" /><span className="rounded-[2px] bg-white/40" />
          </span>
          SanzyHub
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {[['/#template', 'Template'], ['/lisensi', 'Lisensi & harga'], ['/#faq', 'FAQ']].map(([h, l]) => (
            <Link key={h} href={h} className="text-sm font-semibold text-steel hover:text-indigo-deep">{l}</Link>
          ))}
        </nav>
        <Link href="/#template" className="rounded-lg bg-indigo-deep px-4 py-2.5 text-sm font-semibold text-white hover:bg-signal-up">Lihat {TEMPLATE.length} template</Link>
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
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/75">
            {TEMPLATE.slice(0, 8).map((t) => <li key={t.slug}><Link href={`/template/${t.slug}`} className="hover:text-white">{t.nama}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Bantuan">
          <p className="panel-label mb-4 text-white/75">Bantuan</p>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link href="/lisensi" className="hover:text-white">Lisensi & harga</Link></li>
            <li><Link href="/#cara" className="hover:text-white">Cara kerja</Link></li>
            <li><Link href="/#faq" className="hover:text-white">Pertanyaan umum</Link></li>
          </ul>
        </nav>
      </div>
      <p className="panel-label mx-auto max-w-6xl border-t border-white/15 py-6 leading-[1.9] text-white/65">© 2026 SanzyHub · Toko fiktif; harga lisensi adalah contoh purwarupa desain. Demo template live di pintuweb.id.</p>
    </footer>
  );
}
