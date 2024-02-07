/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import api from "../API/api"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();


  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/login", {
        email,
        password,
      });

      // Simpan token ke localStorage
      // localStorage.setItem('token', response.data.token);
      setCookie("token", response.data.token, 1);
      console.log("ini cookie", document.cookie);
      // console.log("ini local",localStorage);
      console.log(response.data);

      // Setelah berhasil login, arahkan pengguna ke halaman dashboard
      navigate("/dashboard");
    } catch (error) {
      // console.error('Login failed:', error.response.data.message);
      if (error.response && error.response.status === 401) {
        console.error("Login failed:", "Invalid email or password");
      }
      //  else {
      //    // Jika respons bukan Unauthorized atau tidak ada respons
      //    console.error('Login failed:', 'An unknown error occurred');
      //  }
    }}
  return (
    <React.Fragment>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                 
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                 
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={(e) => setpassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
