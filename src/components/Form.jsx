const provincias = ['San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón']

const etiqueta = 'text-xs leading-[1.4] font-bold uppercase tracking-[0.72px]'
const caja = 'w-full border border-ink bg-transparent px-4 text-base leading-[1.7] tracking-[0.08px] outline-none transition-colors focus:bg-ivory'

// Formulario controlado: los datos viven en el componente padre
function Form({ datos, onChange }) {
  const cambiar = (e) => onChange({ ...datos, [e.target.name]: e.target.value })

  return (
    <div className="flex flex-col gap-4">
      <p className={etiqueta}>Datos de entrega</p>

      <label className="flex flex-col gap-2">
        <span className={etiqueta}>Nombre completo</span>
        <input name="nombre" value={datos.nombre} onChange={cambiar} autoComplete="name" className={`${caja} h-[52px]`} />
      </label>

      <label className="flex flex-col gap-2">
        <span className={etiqueta}>Provincia</span>
        <select name="provincia" value={datos.provincia} onChange={cambiar} className={`${caja} h-[52px] cursor-pointer`}>
          <option value="" disabled>
            Elige una provincia
          </option>
          {provincias.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>

      <div className="flex gap-2.5">
        <label className="flex flex-1 flex-col gap-2">
          <span className={etiqueta}>Cantón</span>
          <input name="canton" value={datos.canton} onChange={cambiar} className={`${caja} h-[52px]`} />
        </label>
        <label className="flex flex-1 flex-col gap-2">
          <span className={etiqueta}>Distrito</span>
          <input name="distrito" value={datos.distrito} onChange={cambiar} className={`${caja} h-[52px]`} />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={etiqueta}>Dirección exacta</span>
        <textarea
          name="direccion"
          value={datos.direccion}
          onChange={cambiar}
          rows={3}
          placeholder="Señas: 200 m norte de la iglesia, casa portón negro"
          className={`${caja} resize-none py-3 placeholder:text-ink/40`}
        />
      </label>
    </div>
  )
}

export default Form
