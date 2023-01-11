import React from "react";
import './Login.css'
import axios from "axios";
import { useState} from "react";
import GeriDon from "../GeriDon/GeriDon";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [accept, setaccept] = useState(false);
  const [emailerr, setemailerr] = useState("");
  const [dogru, setDogru] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setaccept(true);
    let flag = true;
    if (password.length < 8) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        axios
          .post(`http://127.0.0.1:8000/api/users/${email}/${password}`)
          .then((response) => {
            if (response.data != 0) {
              window.localStorage.setItem("email", email);
              window.localStorage.setItem("userId", response.data[0]);
              window.localStorage.setItem("role", response.data[1]);
              window.location.pathname = "/";
            } else {
              setDogru(true);
            }
          })
          .catch((response) => {});
      }
    } catch (err) {
      setemailerr(err.response.status);
    }
  }
  return (
    <div>
      <div className=" text-center geri">
        <GeriDon />
        </div>
      <div className="container-fluid  text-center mm ">
        
        <div className="row main-content bg-success text-center">
          
          <div className="col-md-8 col-xs-12 col-sm-12 login_form mmm">
            <div className="container-fluid">
              <div className="row">
                <h2>Giriş Yap</h2>
              </div>
              <div className="row">
                <form className="form-group" onSubmit={submit}>
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
                  {accept && dogru && (
                    <p className="error">
                      Epostanızı veya şifrenizi hatalıdır...
                    </p>
                  )}
                  <div className="row">
                    <input type="submit" value="Giriş Yap" className="btn1" />
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

export default Login;
