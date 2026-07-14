import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './component/header/Header.jsx'
import { Dashboard } from './component/dashboard/Dashboard.jsx'
import { Footer } from './component/footer/Footer.jsx'
import { About } from './component/about/About.jsx'
import Contact from './component/contact/Contact.jsx'
import Pagenotfound from './component/pagenotfound/Pagenotfound.jsx'



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 Page */}
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
