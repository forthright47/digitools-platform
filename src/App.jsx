import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'
import Tools from './components/Tools/Tools'

// API fetch
const getTools = async () => {
  const res = await fetch("/tools.json");
  return res.json();
}

const toolsPromise = getTools(); 

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Tools toolsPromise={toolsPromise}/>
      <Steps />
    </>
  )
}

export default App
