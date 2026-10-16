import { LISENSI, rp } from '@/lib/template';

/* Tiga lisensi bertingkat: tiap tingkat berisi semua isi tingkat sebelumnya
   ditambah satu hal baru. Ditampilkan sebagai tangga (bukan tabel centang),
   dengan meteran isi seperti panel dasbor. Hal baru di tiap tingkat disorot. */
export default function TanggaLisensi({ gelap = false, judul = 'h3' }) {
  const Judul = judul;
  const semua = LISENSI[0].isi.map(([k]) => k);
  return (
    <ol className="space-y-3">
      {LISENSI.map((l, i) => {
        const punya = l.isi.filter(([, v]) => v).map(([k]) => k);
        const lalu = i ? LISENSI[i - 1].isi.filter(([, v]) => v).map(([k]) => k) : [];
        const belum = semua.filter((k) => !punya.includes(k));
        return (
          <li
            key={l.nama}
            className={`grid gap-5 rounded-2xl p-5 sm:p-6 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-8 ${gelap ? 'bg-white/6' : 'bg-white ring-1 ring-indigo-deep/8'}`}
          >
            <div>
              <p className={`panel-label ${gelap ? 'text-[#9db3ff]' : 'text-signal-up'}`}>Tingkat {i + 1}</p>
              <Judul className={`mt-1.5 text-xl font-bold ${gelap ? 'text-white' : 'text-indigo-deep'}`}>{l.nama}</Judul>
              <p className={`metric mt-1 text-3xl ${gelap ? 'text-white' : 'text-indigo-deep'}`}>{rp(l.harga)}</p>
              <p className={`mt-2 text-sm leading-relaxed ${gelap ? 'text-white/75' : ''}`}>{l.ket}</p>
            </div>
            <div className="md:self-center">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className={`h-2 flex-1 rounded-full ${gelap ? 'bg-white/10' : 'bg-mist-2'}`}>
                  <span className={`block h-2 rounded-full ${gelap ? 'bg-[#7c9bff]' : 'bg-signal-up'}`} style={{ width: `${(punya.length / semua.length) * 100}%` }} />
                </span>
                <span className={`metric text-sm ${gelap ? 'text-white' : 'text-indigo-deep'}`}>{punya.length}/{semua.length}<span className="sr-only"> hal termasuk</span></span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Termasuk dalam lisensi ${l.nama}`}>
                {punya.map((k) => {
                  const baru = i > 0 && !lalu.includes(k);
                  return (
                    <li
                      key={k}
                      className={`rounded-lg px-3 py-1.5 text-sm ${
                        baru
                          ? gelap ? 'bg-[#7c9bff] font-semibold text-indigo-deep' : 'bg-signal-up font-semibold text-white'
                          : gelap ? 'bg-white/10 text-white/85' : 'bg-mist text-indigo-deep'
                      }`}
                    >
                      {baru && <span className="sr-only">Tambahan di tingkat ini: </span>}
                      {baru && <span aria-hidden="true">+ </span>}
                      {k}
                    </li>
                  );
                })}
              </ul>
              {belum.length > 0 && <p className={`mt-3 text-xs ${gelap ? 'text-white/70' : 'text-steel'}`}>Belum termasuk: {belum.join(', ').toLowerCase()}.</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
