import './DersExample.css';
import {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DersExample = (soru) => {
  //sorular arasında geçişler için
  const [next,setNext] = useState(0);
  
  const Next =()=>{
    
    setNext(next +1)  
    
  }
  const Previous =()=>{
    
    setNext(next -1)  
    if(next == 0){
      setNext(0)  

    }
    
    
  }
//cevapları doğru olup olmadığını kontrol amaçlı
  const [cevap ,setCevap] = useState();
  const Kontrol =()=>{
    if(soru.item[soru.id].sorular[next].cevap == cevap){
      notify();
    }else{
      notify1();
    }
    }
   const notify = () => toast.success('Cevapınız Doğrudur !', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
   const notify1 = () => toast.error('Cevapınız Yanlıştır !', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

     
    //soru id her değişiklerde bu hook çalışacak ve next değerini güncellencek
     useEffect(()=>{        
        setNext(0)
     
     },[soru.id])
  return (
      // soru kartı yapısı
         <div className="col-8">
          
            <div className="card border-success mb-3" >
              {soru.id < soru.item.length  ? 
              <>
              <div key={soru.item[soru.id].id} className="card-header title-t bg-transparent border-success"><h3>{soru.item[soru.id].DersAdi}</h3></div>
              <div  className="card-body text-success">
                  <h5 className="card-title">Tanıtım</h5>
                  <p className="card-text">{soru.item[soru.id].aciklama}</p>
                  
                  
                    {next < soru.item[soru.id].sorular.length  ? 
                    <div className='cont'>
                      <h5 className="card-title">Soru {next+1}</h5>
                      <p className="card-text">{soru.item[soru.id].sorular[next].soru}:</p>
                      <input className='radio' type="radio" id="html" name="fav_language" value={soru.item[soru.id].sorular[next].sec1} onChange={e=> setCevap(e.target.value)}/>
                      <label htmlFor="html">{soru.item[soru.id].sorular[next].sec1}</label><br/>
                      <input className='radio' type="radio" id="css" name="fav_language" value={soru.item[soru.id].sorular[next].sec2} onChange={e=> setCevap(e.target.value)}/>
                      <label htmlFor="css">{soru.item[soru.id].sorular[next].sec2}</label><br/>
                      <input className='radio' type="radio" id="javascript" name="fav_language" value={soru.item[soru.id].sorular[next].sec3} onChange={e=> setCevap(e.target.value)}/>
                      <label htmlFor="javascript">{soru.item[soru.id].sorular[next].sec3}</label>
                    </div>
                    : <h2>sorular bitmistir</h2>}
                          
                  
                

               </div>
              
              </>
              : <h2> dersler yok  </h2>}
            
              <div className="card-footer kontrol-panel bg-transparent border-success">
                <div>
                  <button className='btn btn-warning mar' onClick={Previous} >Önceki</button>
                  <button className='btn btn-success mar' onClick={Next} >Sonraki</button>
                  </div>
                  <button className='btn btn-danger' onClick={Kontrol} >Kontrol Et</button>
                  
                  
              </div>
            </div>
            <ToastContainer/>
        </div>
       
  )
}

export default DersExample