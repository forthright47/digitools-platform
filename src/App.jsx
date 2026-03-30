import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    // wrapped all the components with a empty fragment
    <>
      <Navbar />
      <Banner />
    </>
  )
}

export default App
