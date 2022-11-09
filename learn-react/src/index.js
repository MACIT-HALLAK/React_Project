
import ReactDOM from 'react-dom';
import App from './App';
import Egzersiz from './Components/Egzersiz/Egzersiz';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Derslerim from './Components/Derslerim/Derslerim';


ReactDOM.render(
    
      <Router>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/Egzersiz' element={<Egzersiz />}/>
          <Route path='/Derslerim' element={<Derslerim />}/>
        </Routes>
      </Router>
     
    
    
    ,document.getElementById('root'));

