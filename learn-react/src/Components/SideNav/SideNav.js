import React from "react";
import "./SideNav.css";
import Shake from "react-reveal/Shake";
import { useState, useEffect } from "react";
import axios from "axios";

function SideNav({ filterById, sinif }) {
  //sinif like props

  //side nav kısmında dersler arsında geçişler sağlıyor
  //ve herhangi elemanına tıkladığında elemanın idsini
  //filterById metoduna gönderilecek, buadaki -1 sebepi dizinin indexleri 0dan başlar
  const onfilter = (id) => {
    filterById(id);
  };

  //api den veri çekme
  const [Data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/derslers").then(function (response) {
      setData(response.data);
    });
  }, []);

  //side nav bileşeni
  return (
    <div className="wrapper-vir col-lg-2 col-md-3 col-sm-5">
      <div className="menu"></div>
      <div className="sidebar">
        <h2>Derslerim</h2>
        <ul>
          {Data
            ? Data.map((ite) => {
                if (ite.sinifAdi == sinif) {
                  return (
                    <>
                      <Shake>
                        <li>
                          <button
                            key={ite.id}
                            onClick={() => onfilter(ite.dersAdi)}
                            className="btn-side-nav"
                          >
                            {ite.dersAdi}
                          </button>
                        </li>
                      </Shake>
                    </>
                  );
                }
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
