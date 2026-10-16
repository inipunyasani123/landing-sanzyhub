import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { KATEGORI, LISENSI, SITE, TEMPLATE, kecilAwal, rp, templateBySlug } from '@/lib/template';

export function generateStaticParams() {
  return TEMPLATE.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = templateBySlug(slug);
  if (!t) return {};
  return {
    title: `Template ${t.nama}`,
    description: `${t.ringkas} Demo ${t.rute.length} halaman untuk ${kecilAwal(t.cocok)}.`,
    alternates: { canonical: `${SITE}/template/${t.slug}` },
  };
}

export default async function DetailTemplate({ params }) {
  const { slug } = await params;
  const t = templateBySlug(slug);
  if (!t) notFound();
  const lain = TEMPLATE.filter((x) => x.kategori === t.kategori && x.slug !== t.slug);

  return (
    <main className="px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Remah roti" className="panel-label flex flex-wrap items-center gap-2 text-steel">
          <Link href="/#template" className="py-1.5 text-signal-up hover:text-indigo-deep">Katalog</Link>
          <span aria-hidden="true">/</span>
          <span>{KATEGORI[t.kategori]}</span>
        </nav>
        <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-[2.7rem] leading-[1.02] font-extrabold text-indigo-deep md:text-6xl">{t.nama}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed">{t.ringkas}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href={t.demo} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center gap-1.5 rounded-lg bg-indigo-deep px-6 py-3.5 font-semibold text-white hover:bg-signal-up">Buka demo live<span className="sr-only"> (tab baru)</span><span aria-hidden="true">↗</span></a>
            <Link href="/lisensi" className="inline-flex justify-center rounded-lg px-6 py-3.5 font-semibold text-indigo-deep ring-2 ring-indigo-deep hover:bg-indigo-deep hover:text-white">Mulai {rp(LISENSI[0].harga)}</Link>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-indigo-deep/10 shadow-[0_30px_60px_-34px_rgb(27_31_59/0.55)]">
          <div className="flex items-center gap-1.5 px-3 py-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-mist-2" /><span className="h-2.5 w-2.5 rounded-full bg-mist-2" /><span className="h-2.5 w-2.5 rounded-full bg-mist-2" />
            <span className="ml-3 truncate rounded-md bg-mist px-3 py-1 text-xs text-steel">{t.demo.replace('https://', '')}</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
            <Image src={t.foto} alt={`Tampilan layar pertama template ${t.nama}`} fill priority sizes="(max-width: 1200px) 100vw, 1150px" className="object-cover object-top" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <section aria-labelledby="halaman" className="rounded-2xl bg-white p-6 ring-1 ring-indigo-deep/8">
            <h2 id="halaman" className="flex items-baseline justify-between text-xl font-bold text-indigo-deep">Halaman <span className="metric text-3xl text-signal-up">{t.rute.length}</span></h2>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              {t.rute.map((r) => <li key={r} className="rounded-md bg-mist px-3 py-2 text-indigo-deep">{r}</li>)}
            </ul>
          </section>
          <section aria-labelledby="fitur" className="rounded-2xl bg-white p-6 ring-1 ring-indigo-deep/8">
            <h2 id="fitur" className="flex items-baseline justify-between text-xl font-bold text-indigo-deep">Bisa dicoba <span className="metric text-3xl text-signal-up">{t.fitur.length}</span></h2>
            <ul className="mt-4 space-y-3">
              {t.fitur.map((f) => <li key={f} className="flex gap-2.5"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal-up" />{f}</li>)}
            </ul>
          </section>
          <section aria-labelledby="teknis" className="rounded-2xl bg-indigo-deep p-6 text-white">
            <h2 id="teknis" className="text-xl font-bold text-white">Teknis</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {[['Kerangka', 'Next.js 15.5, React 19'], ['Gaya', 'Tailwind CSS v4'], ['Font', t.font.join(', ')], ['Cocok untuk', t.cocok]].map(([k, v]) => (
                <div key={k} className="border-b border-white/10 pb-3 last:border-0">
                  <dt className="text-white/70">{k}</dt>
                  <dd className="mt-0.5 font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        {lain.length > 0 && (
          <section aria-labelledby="lain" className="mt-20">
            <h2 id="lain" className="text-3xl font-extrabold text-indigo-deep">Template {KATEGORI[t.kategori].toLowerCase()} lainnya</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lain.map((x) => (
                <li key={x.slug}>
                  <Link href={`/template/${x.slug}`} className="block overflow-hidden rounded-2xl bg-white ring-1 ring-indigo-deep/8 hover:ring-indigo-deep/30">
                    <span className="relative block aspect-[16/10]"><Image src={x.foto} alt="" fill sizes="360px" className="object-cover object-top" /></span>
                    <span className="flex items-baseline justify-between gap-3 p-5">
                      <span className="text-lg font-bold text-indigo-deep">{x.nama}</span>
                      <span className="metric text-sm text-steel">{x.rute.length} halaman</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
