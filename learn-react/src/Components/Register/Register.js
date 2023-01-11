import React from "react";
import "./Register.css";
import axios from "axios";
import { useState, useEffect } from "react";
import GeriDon from "../GeriDon/GeriDon";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordT, setpasswordT] = useState("");
  const [accept, setaccept] = useState(false);
  const [emailerr, setemailerr] = useState("");
  const [getuserid, setGetuserid] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/users").then(function (response) {
      setGetuserid(response.data);
    });
  }, []);

  async function submit(e) {
    e.preventDefault();
    setaccept(true);
    let flag = true;
    if (name === "" || password.length < 8 || passwordT !== password) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/users", {
          name: name,
          email: email,
          role: 0,
          password: password,
        });

        await axios.post("http://127.0.0.1:8000/api/puans", {
          user_id: getuserid + 1,
          puan: 0,
        });

        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("userId", getuserid + 1);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      //setemailerr(err.response.status);
    }
  }
  return (
    <div>
      <div className=" text-center vivo  ">
        <GeriDon />
      </div>

      <div className="container-fluid">
        <div className="row main-content  text-center">
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2>Kayıt Ol</h2>
              </div>
              <div className="row">
                <form className="form-group" onSubmit={submit}>
                  <div className="row">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form__input"
                      placeholder="Username"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                    {name === "" && accept && (
                      <p className="error">kullanıcı Adı Boş Olamaz</p>
                    )}
                  </div>
                  <div className="row">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form__input"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                    {accept && emailerr === 500 && (
                      <p className="error">e-postanızı zatten mevcut</p>
                    )}
                  </div>
                  <div className="row">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    {password.length < 8 && accept && (
                      <p className="error">
                        Şifreniz en az 8 karakterden olması gerekyor
                      </p>
                    )}
                  </div>
                  <div className="row">
                    <input
                      type="password"
                      name="password"
                      id="passwordT"
                      className="form__input"
                      placeholder="Tekrar Password"
                      value={passwordT}
                      onChange={(e) => setpasswordT(e.target.value)}
                    />
                    {passwordT !== password && accept && (
                      <p className="error">şifreleriniz eşleşmiyor</p>
                    )}
                  </div>

                  <div className="row justify-content-center">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn1"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
