import { Link } from 'react-router'
import ButtomBuy from '../../components/ButtomBuy.jsx'
import jersey from '../../assets/jersey-principal.jpeg'
import { total, quedan } from '../../data/compradores.js'

function Jersey() {
  return (
    <section id="jersey" className="bg-fondo text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 pb-16 lg:flex-row lg:items-start lg:gap-[30px] lg:px-10 lg:pb-[110px]">
        {/* En móvil el título va arriba de la imagen */}
        <p className="text-xs leading-[1.4] font-bold uppercase tracking-[0.72px] lg:hidden">El jersey</p>

        <Link to="/productos" className="flex h-[380px] items-center justify-center overflow-hidden bg-ivory lg:h-[760px] lg:flex-1">
          <img src={jersey} alt="Jersey Drop 00" className="h-auto w-[310px] max-w-[88%] lg:w-[620px] lg:max-w-full" />
        </Link>

        <div className="flex w-full shrink-0 flex-col justify-between self-stretch lg:w-[400px]">
          <p className="hidden text-xs leading-[1.4] font-bold uppercase tracking-[0.72px] lg:block">El jersey</p>

          <div className="flex flex-col gap-6 lg:gap-7">
            <div className="flex flex-col gap-1.5 lg:gap-2">
              <p className="text-xs leading-[1.4] uppercase tracking-[0.72px]">Kraps</p>
              <h2 className="text-[32px] leading-[1.2] font-bold tracking-[-0.32px]">Jersey Drop 00</h2>
              <p className="text-2xl leading-[1.3] font-bold">₡36,500</p>
            </div>
            <p className="text-xs leading-[1.6] tracking-[0.12px]">
              Quedan {quedan} de {total} · Tallas XS, S, M y S mujer
            </p>
            <ButtomBuy to="/productos" />
            <Link to="/productos" className="self-start text-xs leading-[1.4] uppercase tracking-[0.72px] underline transition-colors hover:text-morado">
              Ver detalles y tallas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jersey
