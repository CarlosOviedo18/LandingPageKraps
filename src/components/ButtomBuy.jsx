import { Link } from 'react-router'

const estilos = 'flex w-full items-center justify-center bg-ink px-10 py-[22px] text-xs leading-none font-bold uppercase tracking-[1.2px] text-ivory transition-colors'

// to = ruta interna · href = link externo (WhatsApp) · disabled = no clicable
function ButtomBuy({ to, href, disabled, children = 'Comprar' }) {
  if (disabled) {
    return <button disabled className={`${estilos} cursor-not-allowed opacity-40`}>{children}</button>
  }
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={`${estilos} hover:bg-morado`}>{children}</a>
  }
  return <Link to={to} className={`${estilos} hover:bg-morado`}>{children}</Link>
}

export default ButtomBuy
