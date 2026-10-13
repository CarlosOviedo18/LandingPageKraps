import { useEffect, useState } from 'react'
import { FECHA_APERTURA } from '../data/lanzamiento.js'

function calcular() {
  const restante = Math.max(0, FECHA_APERTURA.getTime() - Date.now())
  const s = Math.floor(restante / 1000)
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    seg: s % 60,
    terminado: restante === 0,
  }
}

// Tiempo que falta para FECHA_APERTURA, actualizado cada segundo
export function useCuentaRegresiva() {
  const [tiempo, setTiempo] = useState(calcular)

  useEffect(() => {
    if (tiempo.terminado) return
    const id = setInterval(() => setTiempo(calcular()), 1000)
    return () => clearInterval(id)
  }, [tiempo.terminado])

  return tiempo
}
