import Header from "../Header/Header";
import "./Egzersiz.css";
import DersExample from "../DersExample/DersExample";
import SideNav from "../SideNav/SideNav";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Puan from "../Puan/Puan";

const Egzersiz = () => {
  const location = useLocation().state.data;
  const location1 = useLocation().state.desun;//sidenabvar kisnindan
  const location2 = useLocation().state.ders;

  const [dersadi, setDersAdi] = useState(location2);
  const [cevapkontrol, setCevapkontrol] = useState();
  useEffect(() => {
    if (location1 == null) {
      setDersAdi(location2);
    } else {
      setDersAdi(location1);
    }
  }, []);
  //console.log(dersadi);
  //hangi derse basıldğının öğrenmek için next değişken diğer sayfaya
  //göndererek hangi elemana basıldığını idsini alıp DersExample bileşene göderilmektedir

  //bu fonction yardımyla her sefer tıkılan elemanın idsini
  //güncellemk için

  const filterByders = (DersId) => {
    setDersAdi(DersId);
  };
  const getExampleResult = (cevap) => {
    setCevapkontrol(cevap);
  };

  //Egzersiz sayfası
  return (
    <>
      <Header />
      <div className="row g-0">
        <SideNav filterById={filterByders} sinif={location} />
        <DersExample
          getResult={getExampleResult}
          id={dersadi}
          sinif={location}
        />

        <div className="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center">
          <Puan cevap={cevapkontrol} getResult={getExampleResult} />
        </div>
      </div>
    </>
  );
};

export default Egzersiz;
