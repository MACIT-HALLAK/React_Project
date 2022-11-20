import React from 'react'
import {soru} from '../DataSoru'
import './SideNav.css'
import Shake from 'react-reveal/Shake';



function SideNav( {filterById} ) {

   //side nav kısmında dersler arsında geçişler sağlıyor
   //ve herhangi elemanına tıkladığında elemanın idsini 
   //filterById metoduna gönderilecek, buadaki -1 sebepi dizinin indexleri 0dan başlar
    const onfilter =(id)=>{
        filterById(id-1)
    }
    //side nav bileşeni
  return (
    <div className="wrapper-vir col-2"  >
                 <div className="sidebar">
                    <h2>Derslerim</h2>
                    <ul>
                       {soru.length ? (soru.map((item) => 
                       { 
                           return( 
                                <>
                                   <Shake>
                                    <li>
                                         <button
                                         key={item.id} 
                                         onClick={()=> onfilter(item.id)} 
                                         className='btn-side-nav'>{item.DersAdi}
                                         </button>
                                    </li>
                                    </Shake>

                                </>
                          ) 

                       })): null }
                                  
                    </ul> 
                </div>
          
          </div>
  )
}

export default SideNav