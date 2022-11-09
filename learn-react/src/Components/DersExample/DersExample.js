import './DersExample.css';
import {useEffect, useState} from 'react';

const DersExample = (soru) => {
  //sorular arasında geçişler için
  const [next,setNext] = useState(0);
  
  const Next =()=>{
    
    setNext(next +1)  
    
  }
//cevapları doğru olup olmadığını kontrol amaçlı
  const [cevap ,setCevap] = useState();
  const Kontrol =()=>{
    if(soru.item[soru.id].sorular[next].cevap == cevap){
      alert('cevapiniz dogrudur ');
    }else{
      alert('cevapiniz yanlistir ');
    }
    }
     
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
              <div key={soru.item[soru.id].id} className="card-header bg-transparent border-success"><h3>{soru.item[soru.id].DersAdi}</h3></div>
              <div  className="card-body text-success">
                  <h5 className="card-title">Tanıtım</h5>
                  <p className="card-text">{soru.item[soru.id].aciklama}</p>
                  
                  
                    {next < soru.item[soru.id].sorular.length ? 
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
              : <h2>derler yok  </h2>}
            
              <div className="card-footer kontrol-panel bg-transparent border-success">
                
                  <button className='btn btn-primary' onClick={Next} >Next</button>
                  <button className='btn btn-success' onClick={Kontrol} >Kontrol Et</button>
                  
                  
              </div>
            </div>
        </div>
       
  )
}

export default DersExample