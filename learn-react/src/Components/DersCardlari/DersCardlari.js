import React from 'react'
import './DersCardlari.css';
import {Link} from 'react-router-dom';
import NavItems from '../navItems/NavItems';



const DersCardlari = (props) => {

 

  return (
    <>

            <div className="col-md-4 col-sm-6 content-card">

                <div className="card-big-shadow ">
                <Link to='/Egzersiz'  state={{data:props.id}} >
                    <div className="card card-just-text" data-background="color" data-color={props.color} data-radius="none" >
                        <div className="content">
                            <h6 className="category">{props.ders}</h6>
                            <h4 className="title">{props.dersAdi}</h4>
                            <p className="description">{props.aciklama}</p>
                        </div>
                    </div>
               
                </Link>
                </div>
            </div>
        
    </>
  )
}

export default DersCardlari