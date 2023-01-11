
import ReactDOM from 'react-dom';
import App from './App';
import Egzersiz from './Components/Egzersiz/Egzersiz';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Derslerim from './Components/Derslerim/Derslerim';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import DersEkle from './Components/DersEkle/DersEkle';
import SoruEkle from './Components/SoruEkle/SoruEkle';


ReactDOM.render(
    
      <Router>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/Egzersiz' element={<Egzersiz />}/>
          <Route path='/Derslerim' element={<Derslerim />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/DersEkle' element={<DersEkle />}/>
          <Route path='/SoruEkle' element={<SoruEkle />}/>
          
        </Routes>
      </Router>
    
    ,document.getElementById('root'));

