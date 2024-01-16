import React from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // const [users, setUsers] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const apiurl = "http://localhost:3001";

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiurl}/login`, { email, password });
      console.log("response", response);
      const token = response.data.token;
      console.log(token, "token");
      alert("Login successful");
      setEmail("");
      setPassword("");
      // fetchUsers();
      navigate("/home");
      // window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      alert(`${error.message}`);
    }
  };

  return (
    <>
      <div className="container w-full h-full bg-[url('/src/assets/login-bg.png')] bg-cover">
        <form onSubmit={handleLogin}>
          <div className="w-[50%] h-[600px] flex mt-4">
            <div className="flex flex-col w-[480px] h-[550px] p-[40px] justify-center mx-auto  bg-white rounded-lg border-4 ">
              <div className="logo mx-auto">
                <img
                  className="w-[200px]"
                  src="\src\assets\df-logo.png"
                  alt="logo"
                />
              </div>
              <span className="font-normal mx-auto">
                Welcome to Digitalflake Admin
              </span>

              <div className="login-inputs flex flex-col gap-2 mt-4">
                <input
                  className="border border-black p-2 mt-2 rounded-md"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Email-Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="border-2 border-black-600  p-2 mt-3 rounded-md"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Link to={`/forgotpassword`} className="font-bold text-[#A08CB1] text-end mt-2">
                Forgot Password
              </Link>
              <br />
              <button
                type="submit"
                className="bg-[#5C218B] p-2 mt-1 rounded-lg text-white"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
