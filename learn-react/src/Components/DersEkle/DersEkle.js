import React from "react";
import { useState } from "react";
import GeriDon from "../GeriDon/GeriDon";
import axios from "axios";
import swal1 from "sweetalert";
import swal2 from "sweetalert";
import "./DersEkle.css";

const DersEkle = () => {
  const [dersAdi, setDersAdi] = useState("");
  const [dersAciklama, setDersAciklama] = useState("");
  const [sinifAdi, setSinifAdi] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      if (true) {
        let res = await axios.post("http://127.0.0.1:8000/api/derslers", {
          dersAdi: dersAdi,
          dersAciklama: dersAciklama,
          sinifAdi: sinifAdi,
        });
        if (res.status === 200) {
          swal1({
            title: "Başarlı bir şekilde eklenmiş !",
            icon: "success",
            button: "Tamam",
          });
        } else {
          swal2({
            title: "Bır hata oluştu!",
            icon: "warning",
            button: "Tamam",
          });
        }
      }
    } catch (err) {}
  }

  return (
    <div className="overflow-hidden first">
      <div className="container">
      

        <div className=" text-center mt-5 ">
        <GeriDon />
          <h1>Ders Ekleme Formu</h1>
        </div>

        <div className="row card-row">
          <div className="col-lg-7 mx-auto">
            <div className="card mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form" onSubmit={submit}>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6 main">
                          <label htmlFor="form_name">Bir Sınıf Seç</label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            value={sinifAdi}
                            onChange={(e) => setSinifAdi(e.target.value)}
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
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_name">Ders Adı</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Ders adını girin."
                              required="required"
                              data-error="Firstname is required."
                              value={dersAdi}
                              onChange={(e) => setDersAdi(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Ders Açıklama</label>
                            <textarea
                              id="form_message"
                              name="dersAciklama"
                              className="form-control"
                              placeholder="Ders açıklaması burada yaz."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                              value={dersAciklama}
                              onChange={(e) => setDersAciklama(e.target.value)}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-12 mt-5 d-flex justify-content-center">
                          <input
                            type="submit"
                            className="btn btn-success btn-send
                            "
                            value="Ders Ekle"
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

export default DersEkle;
