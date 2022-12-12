import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Proyects from './components/Proyects'
import Footer from './components/Footer'
import './styles/App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Proyects />
      <Footer />
    </div>
  )
}

export default App
