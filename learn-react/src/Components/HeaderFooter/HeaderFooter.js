import './HeaderFooter.css'
import avatar from '../../assets/images/MATH.jpeg'

const HeaderFooter = (props) => {
  return (
    <div className="wrapper-cart">
       <div className="wrapper-element we">
            <h1>{props.name}</h1>
            <button className="but-element" >Egzersiz</button>
            <button className="but-element">Konular</button>
           
       </div>
        <div className="wrapper-element ">
        <img className="hf-img" src={avatar} />
        </div>
    </div>
  )
}

export default HeaderFooter