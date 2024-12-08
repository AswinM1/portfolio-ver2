
import Contents from './components/Contents'
import Navabar from './components/Navabar'
import './App.css'

import Project from './components/Project'
import Results from './components/Results'


import About from './components/About'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <div style={{backgroundColor:'black'}}>
      <Navabar></Navabar>
    
      <Contents></Contents>
     <About></About>
     
   <Project></Project>
      <Results></Results>
      <Footer></Footer>
   
     
 
       </div>
    </>
  )
}

export default App
