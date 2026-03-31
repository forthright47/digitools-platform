import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'

function App() {

  return (
    // wrapped all the components with a empty fragment
    <>
      <Navbar />
      <Banner />
      <Stats />
    </>
  )
}

export default App
