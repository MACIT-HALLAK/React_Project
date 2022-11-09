import React from 'react';
import Header from '../Header/Header';
import './Egzersiz.css';
import DersExample from '../DersExample/DersExample';
import {soru} from '../DataSoru'
import SideNav from '../SideNav/SideNav';
import { useState } from 'react';

const Egzersiz = (props) => {
  //bu item içinde datamizi tutacak
  const [item,setItem] = useState(soru);
  //hangi derse basıldğının öğrenmek için next değişken diğer sayfaya
  //göndererek hangi elemana basıldığını idsini alıp DersExample bileşene göderilmektedir
  const [next,setNext] = useState(0);
 //bu fanction yardımyla her sefer tıkılan elemanın idsini 
 //güncellemk için
  const filterByders = (DersId)=>{
    
      // const newArry = soru.filter((item) => item.id === DersId)
      setNext(DersId)
      

  }

  
  //Egzersiz sayfası
  return (
  <>      
 
      <Header />
      <div className="row con">        
            <SideNav filterById={filterByders}/>
            <DersExample  item={item} id={next}/>
          
          <div className='col-2'>
                addddds kısmı
          </div>
           
      </div>

    </>
  )
}

export  default Egzersiz