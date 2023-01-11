import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import swal1 from "sweetalert";
import swal2 from "sweetalert";
import "./SoruEkle.css";
import GeriDon from "../GeriDon/GeriDon";

const SoruEkle = () => {
  const [dersid, setDersId] = useState("");
  const [sinifid, setSinifId] = useState("");
  const [soru, setSoru] = useState("");
  const [sec1, setSec1] = useState("");
  const [sec2, setSec2] = useState("");
  const [sec3, setSec3] = useState("");
  const [cevap, setCevap] = useState("");
  const [cozumyontem, setCozumYontem] = useState("");
  const [dersler, setDersler] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/derslers").then(function (response) {
      setDersler(response.data);
    });
  }, []);

  console.log(dersid);
  async function submit(e) {
    e.preventDefault();

    try {
      if (true) {
        let res = await axios.post("http://127.0.0.1:8000/api/sorulars", {
          ders_id: dersid,
          sinif_id: sinifid,
          soru: soru,
          sec1: sec1,
          sec2: sec2,
          sec3: sec3,
          cevap: cevap,
          cozumyontem: cozumyontem,
        });
        if (res.status === 200) {
          swal1({
            title: "Başarlı bir şekilde eklenmiş !",
            icon: "success",
            button: "Tamam",
          });
        } else {
          swal2({
            title: "Başarlı bir şekilde eklenmiş !",
            icon: "warning",
            button: "Tamam",
          });
        }
      }
    } catch (err) {}
  }

  return (
    <div>
      <div className="container overflow-hidden">
        <div className=" text-center mt-4 ">
        <GeriDon />
          <h1>Soru Ekleme Formu</h1>
         
        </div>

        <div className="row first">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light main-card">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form" onSubmit={submit}>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="form_name">Bir Sınıf Seç</label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            value={sinifid}
                            onChange={(e) => setSinifId(e.target.value)}
                          >
                            <option>1.sinif</option>
                            <option>2.sinif</option>
                            <option>3.sinif</option>
                            <option>4.sinif</option>
                            <option>5.sinif</option>
                            <option>6.sinif</option>
                            <option>7.sinif</option>
                            <option>8.sinif</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="form_name">Bir Ders Seç</label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            value={dersid}
                            onChange={(e) => setDersId(e.target.value)}
                          >
                            {dersler
                              ? dersler.map((item) => {
                                  return (
                                    <option key={item.id}>
                                      {item.dersAdi}
                                    </option>
                                  );
                                })
                              : "no data"}
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="form_name">Soru</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Soru giriniz."
                              required="required"
                              data-error="Firstname is required."
                              value={soru}
                              onChange={(e) => setSoru(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label htmlFor="form_name">Sec1</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Soru giriniz."
                              required="required"
                              data-error="Firstname is required."
                              value={sec1}
                              onChange={(e) => setSec1(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label htmlFor="form_name">Sec2</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Soru giriniz."
                              required="required"
                              data-error="Firstname is required."
                              value={sec2}
                              onChange={(e) => setSec2(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label htmlFor="form_name">Sec1</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Soru giriniz."
                              required="required"
                              data-error="Firstname is required."
                              value={sec3}
                              onChange={(e) => setSec3(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label htmlFor="form_name">Cevap</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Soru giriniz."
                              required="required"
                              data-error="Firstname is required."
                              value={cevap}
                              onChange={(e) => setCevap(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Çözüm Yöntem</label>
                            <textarea
                              id="form_message"
                              name="cozumyontem"
                              className="form-control"
                              placeholder="Çözüm Yöntemi Açıklayın."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                              value={cozumyontem}
                              onChange={(e) => setCozumYontem(e.target.value)}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-12 d-flex justify-content-center">
                          <input
                            type="submit"
                            className="btn btn-success mt-4 btn-send pt-2 btn-block
                             "
                            value="Soru Ekle"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoruEkle;
