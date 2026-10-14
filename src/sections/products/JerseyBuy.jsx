import { useState } from 'react'
import { Link } from 'react-router'
import ButtomBuy from '../../components/ButtomBuy.jsx'
import jersey from '../../assets/jersey-adelante.jpeg'
import jerseyEspalda from '../../assets/jersey-espaldaa.jpeg'
import jerseyManga from '../../assets/jersey-manga.jpeg'
import { total, quedan, tallas } from '../../data/compradores.js'


const WHATSAPP = '50662365486'

// Galería
const vistas = [
  { nombre: 'Frente', src: jersey },
  { nombre: 'Detalle pecho', src: jersey, recorte: {
    width: '135%',
    maxWidth: 'none',
    left: '55%',
    top: '80%',
    transform: 'translate(-50%, -50%)',
  }},
  { nombre: 'Detalle manga', src: jerseyManga },
  { nombre: 'Espalda', src: jerseyEspalda },
]

const beneficios = ['Acceso anticipado al Drop 01', 'Cada una con su tarjeta numerada a mano', 'Tu nombre en la página']

const detalles = [
  { titulo: 'Material', texto: 'Tela deportiva microperforada, resistente y liviana. Sus pequeños orificios dejan pasar el aire y ayudan a que el sudor se evapore rápido.' },
  { titulo: 'Corte', texto: 'Corte cómodo que permite moverse con libertad. Revise la guía de tallas para elegir su medida.' },
  { titulo: 'Cuidado', texto: 'Lavar con agua fría y colores similares. No usar cloro ni suavizante. Secar a la sombra. No planchar.' },
]
const textoStock = (n) => (n === 0 ? 'Agotada' : n === 1 ? 'Queda 1' : `Quedan ${n}`)

function Vista({ vista, principal }) {
  if (!vista.src) {
    return (
      <p className="text-center text-xs leading-[1.4] uppercase tracking-[0.72px]">
        {vista.nombre}
        <span className="hidden lg:inline">
          <br />
          foto pendiente
        </span>
      </p>
    )
  }
  if (vista.recorte) {
    return <img src={vista.src} alt={vista.nombre} className="absolute max-w-none" style={vista.recorte} />
  }
  return <img src={vista.src} alt={vista.nombre} className={principal ? 'w-[91%] lg:w-[78%]' : 'w-[82%] lg:w-[74%]'} />
}

function JerseyBuy() {
  const [vistaActiva, setVistaActiva] = useState(0)
  const [talla, setTalla] = useState(null)

  const mensaje = `Hola, quiero el Jersey Drop 00 talla ${talla}`
  const linkWhatsapp = WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}` : '#'

  return (
    <div className="bg-fondo text-ink">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        {/* Ruta */}
        <nav className="flex gap-2 pt-1 pb-4 text-xs leading-[1.4] uppercase tracking-[0.72px] lg:pt-3 lg:pb-6">
          <Link to="/" className="underline transition-colors hover:text-morado">Inicio</Link>
          <span>/</span>
          <span>Jersey Drop 00</span>
        </nav>

        <section className="flex flex-col gap-8 pb-8 lg:flex-row lg:items-start lg:gap-[60px] lg:pb-[110px]">
          {/* Galería */}
          <div className="flex w-full flex-col gap-[5px] lg:flex-1">
            <div className="relative flex h-[400px] items-center justify-center overflow-hidden bg-ivory lg:h-[760px]">
              <Vista vista={vistas[vistaActiva]} principal />
            </div>
            <div className="flex gap-[5px]">
              {vistas.map((vista, i) => (
                <button
                  key={vista.nombre}
                  onClick={() => setVistaActiva(i)}
                  disabled={!vista.src}
                  className={`relative flex h-[84px] flex-1 lg:h-[190px] items-center justify-center overflow-hidden border bg-ivory ${
                    i === vistaActiva ? 'border-ink' : 'border-transparent'
                  } ${vista.src ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <Vista vista={vista} />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex w-full shrink-0 flex-col gap-8 lg:w-[480px] lg:gap-9">
            <div className="flex flex-col gap-2 font-bold lg:gap-2.5">
              <p className="text-xs leading-[1.4] uppercase tracking-[0.72px]">Drop 00 · 5 unidades</p>
              <h1 className="text-[32px] leading-[1.2] tracking-[-0.32px]">Jersey Drop 00</h1>
              <p className="text-2xl leading-[1.3]">₡35,000</p>
            </div>

            <p className="text-base leading-[1.7] tracking-[0.08px]">
              El primer jersey de Kraps. Morado con detalles en verde neón, el nombre pintado a mano en el pecho y
              llamas en las mangas. Cierre completo al frente. Solo existen cinco y cada uno va numerado a mano.
            </p>

            {/* Tallas */}
            <div className="flex flex-col gap-4">
              <div className="flex items-end justify-between text-xs leading-[1.4] uppercase tracking-[0.72px]">
                <p className="font-bold">Talla{talla && `: ${talla}`}</p>
                {/* <Link to="/guia-tallas" className="underline transition-colors hover:text-morado">Guía de tallas</Link> */}
              </div>
              <div className="flex gap-2 lg:gap-2.5">
                {tallas.map((t) => {
                  const agotada = t.quedan === 0
                  const seleccionada = t.talla === talla
                  return (
                    <div key={t.talla} className="flex flex-col items-center gap-2">
                      <button
                        onClick={() => setTalla(t.talla)}
                        disabled={agotada}
                        className={`flex h-[52px] min-w-[76px] items-center justify-center border border-ink px-[18px] text-xs leading-[1.4] font-bold uppercase tracking-[0.72px] transition-colors ${
                          agotada ? 'cursor-not-allowed bg-lila' : seleccionada ? 'bg-ink text-ivory' : 'cursor-pointer hover:bg-ivory'
                        }`}
                      >
                        {t.talla}
                      </button>
                      <p className="text-xs leading-[1.6] tracking-[0.12px]">{textoStock(t.quedan)}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Compra */}
            <div className="flex flex-col gap-3.5 text-xs leading-[1.6] tracking-[0.12px]">
              <p>Quedan {quedan} de {total}. Los cinco incluyen los beneficios de los primeros 5.</p>
              <ButtomBuy href={linkWhatsapp} disabled={!talla}>
                {talla ? 'Comprar por WhatsApp' : 'Elige una talla'}
              </ButtomBuy>
              <p>Te llevamos a WhatsApp para confirmar talla, pago y entrega.</p>
            </div>

            {/* Beneficios */}
            <ul className="border-b border-ink">
              {beneficios.map((b, i) => (
                <li key={b} className="flex items-center gap-5 border-t border-ink py-3.5">
                  <span className="text-xs leading-[1.4] uppercase tracking-[0.72px]">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 text-base leading-[1.7] tracking-[0.08px]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Detalles */}
        <section className="flex flex-col gap-5 pb-16 lg:gap-9 lg:pb-[110px]">
          <p className="text-xs leading-[1.4] font-bold uppercase tracking-[0.72px]">Detalles</p>
          <div className="flex flex-col lg:flex-row lg:gap-[30px]">
            {detalles.map((d) => (
              <div key={d.titulo} className="flex flex-1 flex-col gap-2 border-t border-ink pt-5 pb-[22px] lg:gap-3.5 lg:pb-0">
                <h3 className="text-2xl leading-[1.3] font-bold">{d.titulo}</h3>
                <p className="text-base leading-[1.7] tracking-[0.08px]">{d.texto}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default JerseyBuy
