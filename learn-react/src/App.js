import './App.css'
import avatar from './assets/images/ilkokul.jpeg'
import avatar1 from './assets/images/ortaokul.jpeg'

import {Header, Footer, Container, Headerfirst,HeaderMiddel,HeaderFooter } from './Components/index';

const App = () => {
  return (
    <>
      <Header />
        
        <Container >
          
          <HeaderMiddel />
          <Headerfirst />
          
          <HeaderFooter name="Ilk okul" img={avatar}/>
          <hr/>
          <HeaderFooter name="Orta okul" img={avatar1}/>
        </Container>
         
        <Footer />
      
    </>
  )
}

export default App
