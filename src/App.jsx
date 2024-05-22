import Header from "./components/Header"
import SobreMi from "./components/SobreMi"
import Titulo from "./components/Titulo"
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from './components/Contacto';
import Footer from "./components/Footer";
//import './App.css'

function App() {
  

  return (
    <div>
      <Header/>
      <Titulo/>
      <SobreMi/>
      <Proyectos/>
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
