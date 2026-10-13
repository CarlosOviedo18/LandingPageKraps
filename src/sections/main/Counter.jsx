import { TEXTO_FECHA } from '../../data/lanzamiento.js'

const pad = (n) => String(n).padStart(2, '0')

function Counter({ tiempo }) {
  const unidades = [
    { valor: tiempo.dias, label: 'Días' },
    { valor: tiempo.horas, label: 'Horas' },
    { valor: tiempo.min, label: 'Min' },
    { valor: tiempo.seg, label: 'Seg' },
  ]

  return (
    <section className="border-t border-ivory bg-ink text-ivory">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-7 px-5 py-14 text-center lg:gap-11 lg:px-10 lg:py-[88px]">
        <p className="text-xs leading-[1.4] font-bold uppercase tracking-[0.72px]">La página abre en</p>

        <div className="flex items-start gap-[22px] lg:gap-16">
          {unidades.map((u) => (
            <div key={u.label} className="flex flex-col items-center gap-2.5">
              <p className="text-5xl leading-none font-bold tracking-[-1.44px] text-neon lg:text-[112px] lg:tracking-[-3.36px]">
                {pad(u.valor)}
              </p>
              <p className="text-xs leading-[1.4] uppercase tracking-[0.72px]">{u.label}</p>
            </div>
          ))}
        </div>

        <p className="text-base leading-[1.7] tracking-[0.08px]">{TEXTO_FECHA}</p>
      </div>
    </section>
  )
}

export default Counter
