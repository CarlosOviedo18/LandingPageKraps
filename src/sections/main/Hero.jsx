import wordmark from '../../assets/wordmark-neon.svg'
import videoSrc from '../../assets/drop-00-web.mp4'



function Hero() {
  return (
    <section className="relative flex h-svh min-h-[600px] flex-col overflow-hidden bg-void text-ivory">
      {videoSrc && (
        // Pantalla completa en móvil; en escritorio, columna centrada que se funde con el fondo negro
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
         className="absolute inset-0 h-full w-full object-cover lg:left-1/2 lg:right-auto lg:aspect-[3/4] lg:w-auto lg:-translate-x-1/2 lg:[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"

        />
      )}

      <div className="relative flex flex-1 items-center justify-center px-5 lg:px-10">
        <img src={wordmark} alt="Kraps" className="aspect-[1000/460.5] w-[1000px] max-w-full" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-[18px] px-5 pb-6 text-xs leading-[1.4] uppercase tracking-[0.72px] lg:flex-row lg:items-end lg:justify-between lg:gap-0 lg:px-10 lg:pb-8">
        <div className="flex flex-col gap-1.5">
          <p className="font-bold">Drop 00</p>
          <p>Jersey de ciclismo · 5 unidades</p>
        </div>
        <a href="#jersey" className="self-end underline transition-colors hover:text-neon">
          Ver el jersey
        </a>
      </div>
    </section>
  )
}

export default Hero
