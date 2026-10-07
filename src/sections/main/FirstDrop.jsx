import { compradores, total, vendidos } from '../../data/compradores.js'

const pad = (n) => String(n).padStart(2, '0')

function FirstDrop() {
  return (
    <section id="drop-00" className="bg-fondo text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 pt-16 pb-14 lg:flex-row lg:gap-20 lg:px-10 lg:pt-[110px] lg:pb-24">
        {/* Izquierda: texto del drop */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-5 lg:gap-6">
            <p className="text-xs leading-[1.4] font-bold uppercase tracking-[0.72px]">Drop 00</p>
            <h2 className="max-w-[480px] text-[32px] leading-[1.2] font-bold tracking-[-0.32px]">
              El primer drop de Kraps.
            </h2>
            <p className="max-w-[440px] text-base leading-[1.7] tracking-[0.08px]">
              Cinco jerseys, un solo lote. Cuando se acaben, este diseño no se vuelve a producir.
            </p>
          </div>
          <a href="#jersey" className="hidden self-start text-xs leading-[1.4] uppercase tracking-[0.72px] underline transition-colors hover:text-morado lg:block">
            Ver el jersey
          </a>
        </div>

        {/* Derecha: primeros 5 */}
        <div id="primeros-5" className="flex w-full shrink-0 flex-col gap-5 lg:w-[640px] lg:gap-7">
          <div className="flex items-end justify-between text-xs leading-[1.4] uppercase tracking-[0.72px]">
            <p className="font-bold">Primeros 5</p>
            <p>{vendidos} de {total} vendidos</p>
          </div>

          <p className="flex items-end gap-2.5 text-[88px] leading-[0.9] font-bold tracking-[-3.5px] lg:gap-[18px] lg:text-[160px] lg:tracking-[-6.4px]">
            <span>{pad(vendidos)}</span>
            <span>/{pad(total)}</span>
          </p>

          <ul className="border-b border-ink">
            {compradores.map((comprador, i) => (
              <li key={i} className="flex items-center gap-5 border-t border-ink py-[18px]">
                <span className={`size-3.5 shrink-0 border border-ink ${comprador ? 'bg-neon' : ''}`} />
                <span className="text-xs leading-[1.4] font-bold uppercase tracking-[0.72px]">{pad(i + 1)}</span>
                <span className={`flex-1 text-base leading-[1.7] tracking-[0.08px] ${comprador ? 'font-bold' : ''}`}>
                  {comprador ? comprador.nombre : 'Disponible'}
                </span>
                <span className="text-xs leading-[1.4] uppercase tracking-[0.72px]">
                  {comprador ? `Talla ${comprador.talla}` : 'Libre'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FirstDrop
