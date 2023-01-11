import React from "react";
import "./Puan.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Puan = (props) => {
  const user = window.localStorage.getItem("userId");
  const [puan, setPuan] = useState();

  useEffect(() => {
    //bu api veritabanindan giriş yapmış olan kullanıcılar puanlarını gertirir.
    axios
      .get(`http://127.0.0.1:8000/api/puans/${user}`)
      .then(function (response) {
        setPuan(response.data);
      });

    //eğer kullanıcı doğru cevap seçmişse
    //veritabanına gidip puan olan colomun güncelleniyor.
    if (props.cevap == true) {
      axios
        .put(`http://127.0.0.1:8000/api/puans/${user}/${puan + 1}`)
        .then((response) => {
          if (response.data === "updated") {
            setPuan(puan + 1);
            props.getResult(false);
          } else {
          }
        });
    } else if (props.cevap == false) {
      setPuan(puan);
    } else {
      setPuan(puan);
    }
  }, [props.cevap]);

  return (
    <div className="puan-baslik">
      <h4 className="puan">Puanınız</h4>
      <div className="puan-value">{puan}</div>
    </div>
  );
};

export default Puan;
