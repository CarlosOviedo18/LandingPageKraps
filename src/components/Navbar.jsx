import { useState } from 'react'
import { useLocation } from 'react-router'
import logoIvory from '../assets/logo-marca-ivory.svg'
import logoInk from '../assets/logo-marca-ink.svg'
import { redes } from '../data/redes.js'

const links = [
  { label: 'Drop 00', href: '/#drop-00' },
  { label: 'Primeros 5', href: '/#primeros-5' },
  { label: 'Jersey', href: '/#jersey' },
]

function Navbar({ abierto }) {

  const claro = useLocation().pathname !== '/'
  const [menuAbierto, setMenuAbierto] = useState(false)
  const cerrar = () => setMenuAbierto(false)

  return (
    <header className={claro ? 'bg-fondo' : 'absolute inset-x-0 top-0 z-50'}>
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 lg:px-10 lg:py-7">
        <a href="/" className={`flex items-center gap-2 lg:gap-2.5 ${claro ? 'text-ink' : 'text-ivory'}`}>
          <img src={claro ? logoInk : logoIvory} alt="" className="h-[22.008px] w-7 lg:h-[23.58px] lg:w-[30px]" />
          <span className="text-xs leading-[1.4] font-bold uppercase tracking-[0.72px]">Kraps</span>
        </a>

        {/* En previa (abierto = false) solo se ve el logo */}
        {abierto && (
          <>
            {/* Escritorio: links en fila */}
            <ul className={`hidden items-center gap-8 text-xs leading-[1.4] uppercase tracking-[0.72px] lg:flex ${claro ? 'text-ink' : 'text-ivory'}`}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={`transition-colors ${claro ? 'hover:text-morado' : 'hover:text-neon'}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Móvil: botón Menú */}
            <button
              onClick={() => setMenuAbierto(true)}
              className={`cursor-pointer text-xs leading-[1.4] font-bold uppercase tracking-[0.72px] lg:hidden ${claro ? 'text-ink' : 'text-ivory'}`}
            >
              Menú
            </button>
          </>
        )}
      </nav>

      {/* Móvil: menú abierto a pantalla completa */}
      {menuAbierto && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-fondo px-5 pt-5 pb-8 text-ink lg:hidden">
          <div className="flex items-center justify-between">
            <a href="/" onClick={cerrar} className="flex items-center gap-2">
              <img src={logoInk} alt="" className="h-[22.008px] w-7" />
              <span className="text-xs leading-[1.4] font-bold uppercase tracking-[0.72px]">Kraps</span>
            </a>
            <button onClick={cerrar} className="cursor-pointer text-xs leading-[1.4] font-bold uppercase tracking-[0.72px]">
              Cerrar
            </button>
          </div>

          <ul className="border-b border-ink">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={cerrar} className="block border-t border-ink py-[22px] text-[32px] leading-[1.2] font-bold tracking-[-0.32px]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-6 text-xs leading-[1.4] uppercase tracking-[0.72px]">
            {redes.map((red) => (
              <li key={red.label}>
                <a href={red.href} target="_blank" rel="noopener noreferrer" className="underline">
                  {red.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
