import { useEffect, useState } from "react";
import "./Derslerim.css";
import axios from "axios";
import DersCardlari from "../DersCardlari/DersCardlari";
import { useLocation } from "react-router-dom";
import GeriDon from "../GeriDon/GeriDon";

const color = ["blue", "green", "orange", "brown", "yellow"];
function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Derslerim = () => {
  //api den veri çekme
  const [Data, setData] = useState(null);

 
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/derslers").then(function (response) {
      setData(response.data);
    });
  }, []);

  const location1 = useLocation().state;
  



  return (
    <>
    <div className="text-center bbo">
    <GeriDon />
    </div>
      <div className="baslik">
        <h1>{location1.sinif}</h1>
      </div>
      <div className="container bootstrap snippets bootdeys">
        <div className="row">
          {Data ? (
            Data.map((ite) => {
              if (ite.sinifAdi == location1.sinif) {
                return (
                  <DersCardlari
                    key={ite.id}
                    id={location1.ders} //ite.id
                    sinif={location1.sinif} //ite.id
                    color={color[randomNumberInRange(0, color.length - 1)]}
                    dersAdi={ite.dersAdi}
                    aciklama={ite.dersAciklama}
                  />
                );
              }
            })
          ) : (
            <h2>Ders yoktur</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Derslerim;
