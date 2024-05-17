import Header from "./components/Header"
import SobreMi from "./components/SobreMi"
import Titulo from "./components/Titulo"
import Proyectos from "./components/Proyectos"
//import './App.css'

function App() {
  

  return (
    <div>
      <Header/>
        <div>
          <Titulo/>
          <SobreMi/>
          <Proyectos/>
        </div>
    </div>
  )
}

export default App
