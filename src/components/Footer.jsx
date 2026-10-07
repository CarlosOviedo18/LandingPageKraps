import wordmark from '../assets/logo-wordmark.svg'
import { redes } from '../data/redes.js'

function Footer() {
  return (
    <footer className="bg-lila text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 pt-12 pb-6 lg:gap-18 lg:px-10 lg:pt-16 lg:pb-7">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <img src={wordmark} alt="Kraps" className="h-[101.31px] w-[220px] lg:h-[138.15px] lg:w-[300px]" />

          <ul className="flex flex-col gap-3.5 text-xs leading-[1.4] uppercase tracking-[0.72px] lg:flex-row lg:items-start lg:gap-8">
            {redes.map((red) => (
              <li key={red.label}>
                <a
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-morado"
                >
                  {red.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-1.5 border-t border-ink pt-5 text-xs leading-[1.4] uppercase tracking-[0.72px] lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <p>© 2026 Kraps</p>
          <p>Drop 00 · Costa Rica</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
