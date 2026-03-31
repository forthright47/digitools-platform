import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import Tools from './components/Tools/Tools'

// API fetch
const getTools = async () => {
  const res = await fetch("/tools.json");
  return res.json();
}

const toolsPromise = getTools(); 

function App() {

  return (
    // wrapped all the components with a empty fragment
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Tools toolsPromise={toolsPromise}/>
    </>
  )
}

export default App
