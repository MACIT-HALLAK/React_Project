import {useEffect} from 'react'
import './Derslerim.css';
import DersCardlari from '../DersCardlari/DersCardlari';
import {soru} from '../DataSoru';
import { useLocation } from 'react-router-dom';


const color = ['blue','green','orange','brown','yellow']
function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Derslerim = () => {

  const location1 = useLocation().state
  useEffect(()=>{
    console.log(location1);

  },[])
  return (
    <>

<div className='baslik'>
         <h1>{location1.sinif}</h1>
       </div>
<div className="container bootstrap snippets bootdeys">
    <div className="row">
       
      

      {soru.length >1 ? 
          (soru.map((item)=>{
            return(
                
                <DersCardlari 
                key={item.id} 
                id={item.id} 
                color={color[randomNumberInRange(0, color.length-1)]} 
                ders={`Ders ${item.id}`} 
                dersAdi={item.DersAdi} 
                aciklama={item.aciklama}
          />
         
            )

        }))
       
      :<h2>Ders yoktur</h2>}
        
    </div>
</div>




    </>
  )
}

export default Derslerim