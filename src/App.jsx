import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/main/Hero.jsx'
import FirstDrop from './sections/main/FirstDrop.jsx'
import Benefits from './sections/main/Benefits.jsx'
import Jersey from './sections/main/Jersey.jsx'
import JerseyBuy from './sections/products/JerseyBuy.jsx'
import SizeGuide from './sections/products/SizeGuide.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FirstDrop />
                <Benefits />
                <Jersey />
              </>
            }
          />
          <Route path="/productos" element={<JerseyBuy />} />
          <Route path="/guia-tallas" element={<SizeGuide />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
