import './App.css'
import {Header, Footer, Container, Headerfirst,HeaderMiddel,HeaderFooter } from './Components/index';

const App = () => {
  return (
    <>
      <Header />
        
        <Container >
          
          <HeaderMiddel />
          <Headerfirst />
          
          <HeaderFooter name="ilkokul" />
          <hr/>
          <HeaderFooter name="ortaokul" />
        </Container> 
        <Footer />
      
    </>
  )
}

export default App
