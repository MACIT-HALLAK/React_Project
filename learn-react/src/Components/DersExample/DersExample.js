import "./DersExample.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import one from "../../Audio/one.mp3";
import tow from "../../Audio/two.mp3";
import axios from "axios";
//bu metot bir soru dogru yada yanlis durumuna gore bir sesle uyari verecek
function play() {
  new Audio(one).play();
}
function play2() {
  new Audio(tow).play();
}

const DersExample = ({ getResult, item, id, sinif }) => {
  useEffect(() => {
    setdata([]);
  }, [id]);
  //api den veri çekme
  const [Data, setData] = useState(null);
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState("");
  const [dersaciklama, setDersAciklama] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/sorulars").then(function (response) {
      setData(response.data);
    });

    axios.get("http://127.0.0.1:8000/api/derslers").then(function (response) {
      setDersAciklama(response.data);
    });
  }, []);

  //props.id
  //props.sinif

  // console.log(Data);

  function get() {
    const result = [];
    return (
      <div>
        {Data
          ? Data.map((item) => {
              if (item.sinif_id == sinif && item.ders_id == id) {
                result.push(item);
                setdata([result]);
              }
            })
          : "no Data"}
      </div>
    );
  }

  async function getaciklama() {
    return (
      <div>
        {dersaciklama
          ? dersaciklama.map((item) => {
              if (id == item.dersAdi) {
                setdata1(item.dersAciklama);
              }
            })
          : "no Data"}
      </div>
    );
  }

  //sorular arasında geçişler için
  const [next, setNext] = useState(0);
  const Next = () => {
    setNext(next + 1);
    setYanlis(false);
    setButonPasif(false);
  };
  const Previous = () => {
    setNext(next - 1);
    setYanlis(false);
    setButonPasif(true);
    if (next == 0) {
      setNext(0);
    }
  };

  //cevapları doğru olup olmadığını kontrol amaçlı
  const [cevap, setCevap] = useState();
  const [yanlis, setYanlis] = useState(false);
  const [butonPasif, setButonPasif] = useState(false);
  const Kontrol = () => {
    data.map((item) => {
      if (item[next].cevap == cevap) {
        notify();
        play();
        setYanlis(false);
        getResult(true);
      } else {
        setYanlis(true);
        play2();
        notify1();
        getResult(false);
      }
    });
    setButonPasif(true);
  };
  const notify = () =>
    toast.success("Cevapınız Doğrudur !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notify1 = () =>
    toast.error("Cevapınız Yanlıştır !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  //props id her değişiklerde bu hook çalışacak ve next değerini güncellencek
  useEffect(() => {
    getaciklama();
    setNext(0);
    get();
  }, [id, Data]);

  return (
    // soru kartı yapısı
    <div className="col-lg-8 col-md-7 col-sm-7">
      <div className="card border-success mb-3 main-card">
        <>
          {data
            ? data.map((itemm) => (
                <div
                  key={itemm.id}
                  className="card-header title-t bg-transparent border-success"
                >
                  <h3>{itemm[0].ders_id}</h3>
                </div>
              ))
            : "data"}

          <div className="card-body text-success">
            <h5 className="card-title">Tanıtım</h5>
            <p className="card-text">{data1}</p>

            {data
              ? data.map((item) => (
                  <>
                    {next < item.length ? (
                      <div key={item[next].id} className="cont">
                        <h5 className="card-title">Soru {next + 1}</h5>
                        <p className="card-text">{item[next].soru}</p>
                        <input
                          className="radio"
                          type="radio"
                          id="html"
                          name="fav_language"
                          value={item[next].sec1}
                          onChange={(e) => setCevap(e.target.value)}
                        />
                        <label htmlFor="html">{item[next].sec1}</label>
                        <br />
                        <input
                          className="radio"
                          type="radio"
                          id="css"
                          name="fav_language"
                          value={item[next].sec2}
                          onChange={(e) => setCevap(e.target.value)}
                        />
                        <label htmlFor="css">{item[next].sec2}</label>
                        <br />
                        <input
                          className="radio"
                          type="radio"
                          id="javascript"
                          name="fav_language"
                          value={item[next].sec3}
                          onChange={(e) => setCevap(e.target.value)}
                        />
                        <label htmlFor="javascript">{item[next].sec3}</label>
                      </div>
                    ) : (
                      <h3>sorular bitmistir</h3>
                    )}

                    {yanlis ? <h6>{item[next].cozumyontem}</h6> : null}
                  </>
                ))
              : "no data"}
          </div>
        </>

        <div className="card-footer kontrol-panel bg-transparent border-success">
          <div>
            <button className="btn btn-warning mar" onClick={Previous}>
              Önceki
            </button>
            <button className="btn btn-success mar" onClick={Next}>
              Sonraki
            </button>
          </div>

          <button
            className="btn btn-danger"
            disabled={butonPasif}
            onClick={Kontrol}
          >
            Kontrol Et{" "}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DersExample;
