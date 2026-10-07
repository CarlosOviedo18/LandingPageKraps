const beneficios = [
  { titulo: 'Acceso anticipado al Drop 01', texto: 'Compran antes que nadie cuando salga el siguiente drop.' },
  { titulo: 'Numerado a mano', texto: 'Cada jersey lleva su número, del 01 al 05, escrito a mano.' },
  { titulo: 'Tu nombre en la página', texto: 'Aparece aquí, en la lista de los primeros 5.' },
]

function Benefits() {
  return (
    <section className="bg-fondo text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 pb-16 lg:gap-9 lg:px-10 lg:pb-[110px]">
        <p className="text-xs leading-[1.4] font-bold uppercase tracking-[0.72px]">
          Lo que se llevan los primeros 5
        </p>
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          {beneficios.map((b, i) => (
            <div key={b.titulo} className="flex flex-1 flex-col gap-2 border-t border-ink pt-5 pb-[22px] lg:gap-3.5 lg:pb-0">
              <p className="text-xs leading-[1.4] uppercase tracking-[0.72px]">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-2xl leading-[1.3] font-bold">{b.titulo}</h3>
              <p className="text-base leading-[1.7] tracking-[0.08px]">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
