import './Footer.css';
import { FaFacebook,FaInstagram,FaTwitter,FaMapMarkedAlt,FaRegEnvelope,FaPhoneSquareAlt,FaFax} from "react-icons/fa";
const Footer = () => {
  return (
    

  <div className="d-flex flex-column h-100 footerbody">

    
    <section className="hero text-white py-5 flex-grow-1">
        <div className="container py-4">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="display-4">Matematik Benim Hayatım</h1>
                    <p className="fst-italic text-muted"> <a class="text-primary" href="https://bootstrapious.com/" target="_blank">Dahi</a> olmak için Matematik öğrenmelisin</p>
                </div>
            </div>
        </div>
    </section>
    
    <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white"><FaMapMarkedAlt/> Adress</h5>
                    <p className="small text-muted">Taşlıçiftlik Mh. Tokat Gaziosmanpaşa Üniversitesi Taşçiflik Kampüsü Mühendislik ve Mimarlık Fakültesi 3.Kat
Bilgisayar Mühendisliği Bölümü.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. Tüm haklar saklıdır. <a className="text-primary" href="#">Maced & Bara & Faysal</a></p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">iletişim</h5>
                    <ul className="list-unstyled text-muted">
                        <li><FaRegEnvelope/> Matematik@bara.maced</li>
                        <li><FaPhoneSquareAlt/> +905541662332</li>
                        <li><FaFax/> Fax : ---- </li>
                    </ul>
                </div>
                
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Sosyal Midyamız</h5>
                    <ul className="list-unstyled text-muted">
                        <li><FaFacebook/> Facebook@bara.maced</li>
                        <li><FaInstagram/> math_Bara&Maced</li>
                        <li><FaTwitter/> @baraMaced </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</div>



  )
}

export default Footer