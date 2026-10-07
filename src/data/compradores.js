// Cuando alguien compre: reemplaza null por { nombre: 'Nombre Apellido', talla: 'M' }
export const compradores = [null, null, null, null, null]

export const total = compradores.length
export const vendidos = compradores.filter(Boolean).length
export const quedan = total - vendidos

// Stock inicial por talla (debe sumar 5)
const stockInicial = { XS: 1, S: 1, M: 2, 'S mujer': 1 }

export const tallas = Object.entries(stockInicial).map(([talla, stock]) => ({
  talla,
  quedan: stock - compradores.filter((c) => c?.talla === talla).length,
}))
