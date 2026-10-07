import wordmark from '../../assets/wordmark-neon.svg'


const videoSrc = null

function Hero() {
  return (
    <section className="relative flex h-svh min-h-[600px] flex-col overflow-hidden bg-void text-ivory">
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
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
