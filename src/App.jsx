import { Routes, Route, Navigate } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/main/Hero.jsx'
import Counter from './sections/main/Counter.jsx'
import FirstDrop from './sections/main/FirstDrop.jsx'
import Benefits from './sections/main/Benefits.jsx'
import Jersey from './sections/main/Jersey.jsx'
import JerseyBuy from './sections/products/JerseyBuy.jsx'
import SizeGuide from './sections/products/SizeGuide.jsx'
import { useCuentaRegresiva } from './hooks/useCuentaRegresiva.js'
import { FORZAR_ABIERTO } from './data/lanzamiento.js'

function App() {
  const tiempo = useCuentaRegresiva()
  const abierto = FORZAR_ABIERTO ?? tiempo.terminado

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar abierto={abierto} />
      <main className="flex-1">
        {abierto ? (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero abierto />
                  <FirstDrop />
                  <Benefits />
                  <Jersey />
                </>
              }
            />
            <Route path="/productos" element={<JerseyBuy />} />
            <Route path="/guia-tallas" element={<SizeGuide />} />
          </Routes>
        ) : (
          // Previa: solo hero + counter; cualquier otra ruta vuelve al inicio
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero abierto={false} />
                  <Counter tiempo={tiempo} />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
