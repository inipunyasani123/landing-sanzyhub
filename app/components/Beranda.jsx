import Image from 'next/image';
import Link from 'next/link';
import { FAQ as DAFTAR, KATEGORI, LISENSI, TEMPLATE, rp } from '@/lib/template';
import Galeri from './Galeri';
import TanggaLisensi from './TanggaLisensi';

export function Hero() {
  const halaman = TEMPLATE.reduce((s, t) => s + t.rute.length, 0);
  const interaktif = TEMPLATE.reduce((s, t) => s + t.fitur.length, 0);
  const perKat = Object.entries(KATEGORI).map(([k, n]) => [n, TEMPLATE.filter((t) => t.kategori === k).reduce((s, t) => s + t.rute.length, 0)]);
  const maks = Math.max(...perKat.map(([, v]) => v));
  const sorot = ['woodora', 'nimbus', 'tastycorner'].map((s) => TEMPLATE.find((t) => t.slug === s));
  return (
    <section className="px-6 pt-28 pb-16 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="panel-label text-signal-up">Template landing page Next.js</p>
          <h1 className="mt-5 text-[2.7rem] leading-[1.02] font-extrabold text-indigo-deep sm:text-6xl">Lima belas landing page yang sudah lebih dari satu halaman.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">Setiap template punya halaman dalam, formulir atau kalkulator yang bisa dicoba, dan semua isinya terkumpul di satu berkas data — tinggal ganti dengan milik Anda.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#template" className="inline-flex justify-center rounded-lg bg-indigo-deep px-7 py-4 font-semibold text-white hover:bg-signal-up">Jelajahi template</Link>
            <Link href="/lisensi" className="inline-flex justify-center rounded-lg px-7 py-4 font-semibold text-indigo-deep ring-2 ring-indigo-deep hover:bg-indigo-deep hover:text-white">Lisensi mulai {rp(LISENSI[0].harga)}</Link>
          </div>
        </div>

        <div className="rounded-2xl bg-indigo-deep p-5 text-white shadow-[0_30px_60px_-30px_rgb(27_31_59/0.7)] sm:p-7">
          <p className="panel-label text-white/70">Ringkasan katalog</p>
          <dl className="mt-4 grid grid-cols-3 gap-3">
            {[['Template', TEMPLATE.length], ['Halaman', halaman], ['Fitur interaktif', interaktif]].map(([t, d]) => (
              <div key={t} className="rounded-xl bg-white/6 p-4">
                <dt className="text-xs text-white/70">{t}</dt>
                <dd className="metric mt-1 text-3xl sm:text-4xl">{d}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 rounded-xl bg-white/6 p-4">
            <p className="text-xs text-white/70">Halaman per kategori</p>
            <ul className="mt-3 space-y-2.5">
              {perKat.map(([n, v]) => (
                <li key={n} className="grid grid-cols-[8.5rem_minmax(0,1fr)_2rem] items-center gap-3 text-sm">
                  <span className="truncate">{n}</span>
                  <span aria-hidden="true" className="h-2 rounded-full bg-white/10"><span className="block h-2 rounded-full bg-[#7c9bff]" style={{ width: `${(v / maks) * 100}%` }} /></span>
                  <span className="metric text-right">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul aria-hidden="true" className="mt-4 grid grid-cols-3 gap-3">
            {sorot.map((t) => (
              <li key={t.slug} className="relative aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-white/15">
                <Image src={t.foto} alt="" fill sizes="160px" className="object-cover object-top" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Katalog() {
  return (
    <section id="template" className="scroll-mt-16 border-t border-indigo-deep/8 bg-mist-2/50 px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="panel-label text-signal-up">Katalog</p>
        <h2 className="mt-4 max-w-2xl text-[2.2rem] leading-[1.06] font-extrabold text-indigo-deep md:text-5xl">Semua templatenya live, silakan dicoba</h2>
        <Galeri />
      </div>
    </section>
  );
}

const CARA = [
  ['Coba demo', 'Buka demo live, isi formulirnya, mainkan kalkulatornya. Yang Anda lihat adalah yang Anda dapat.'],
  ['Pilih lisensi', 'Pasang sendiri, minta kami sesuaikan, atau sekalian dipasangkan dengan domain dan hosting.'],
  ['Ganti isi', 'Semua teks, harga, dan angka ada di satu berkas lib/. Komponen tidak perlu disentuh.'],
];

export function Cara() {
  return (
    <section id="cara" className="scroll-mt-16 px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="panel-label text-signal-up">Cara kerja</p>
        <h2 className="mt-4 max-w-2xl text-[2.2rem] leading-[1.06] font-extrabold text-indigo-deep md:text-5xl">Tiga langkah, satu berkas data</h2>
        <ol className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-6">
          {CARA.map(([j, d], i) => (
            <li key={j} className="rounded-2xl bg-white p-6 ring-1 ring-indigo-deep/8 md:p-7">
              <span className="metric text-4xl text-signal-up md:text-5xl">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-xl font-bold text-indigo-deep">{j}</h3>
              <p className="mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
        <figure className="mt-10 rounded-2xl bg-indigo-deep p-6 font-mono text-sm leading-relaxed text-white/85">
          <figcaption className="panel-label mb-4 font-sans text-white/70">Contoh: woodora/lib/kayu.js</figcaption>
          <pre className="overflow-x-auto whitespace-pre" tabIndex={0} role="region" aria-label="Contoh isi berkas data template"><code>{`export const KATALOG = [
  { slug: 'meja-makan-semarang', nama: 'Meja Makan Semarang',
    p: 180, l: 90, t: 75, kayu: ['jati', 'mahoni'], mulai: 7900000 },
  // ganti nama, ukuran, dan harga — gambar kerja ikut berubah
];`}</code></pre>
        </figure>
      </div>
    </section>
  );
}

export function LisensiRingkas() {
  return (
    <section className="bg-indigo-deep px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="panel-label text-[#9db3ff]">Lisensi</p>
            <h2 className="mt-4 max-w-2xl text-[2.2rem] leading-[1.06] font-extrabold text-white md:text-5xl">Satu harga per usaha, tanpa langganan</h2>
          </div>
          <Link href="/lisensi" className="panel-label shrink-0 self-start border-b-2 border-white py-1 text-white hover:border-[#9db3ff] sm:self-auto">Syarat lisensi</Link>
        </div>
        <div className="mt-10 md:mt-12"><TanggaLisensi gelap /></div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 px-6 py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="panel-label text-signal-up">Pertanyaan</p>
          <h2 className="mt-4 text-[2.2rem] leading-[1.06] font-extrabold text-indigo-deep md:text-5xl">Sebelum membeli</h2>
        </div>
        <div className="divide-y divide-indigo-deep/8 rounded-2xl bg-white ring-1 ring-indigo-deep/8">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold text-indigo-deep [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-mist-2 text-signal-up transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 leading-relaxed">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
