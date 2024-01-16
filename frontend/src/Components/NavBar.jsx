import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";

const NavBar = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="navbar w-full h-[75px] bg-[#662671] flex justify-between items-center text-center px-10">
        <div className="logo flex ">
          <img
            className="w-[35px] h-[30px]"
            src="\src\assets\D-logo.png"
            alt="logo-d"
          />
          <img
            className="w-[140px] h-[30px]"
            src="\src\assets\Nav-logo-name.png"
            alt="logo-d"
          />
        </div>
        <div className="nav-buttons mr-28">
          {token ? (
            <ul className="flex gap-5 text-white">
              <Link to={`/home`}>Home</Link>
              <Link to={`/category`}>Category</Link>
              <Link to={`/products`}>Products</Link>
            </ul>
          ) : (
            ""
          )}
        </div>
        <div className="user-logo">
          <img
            onClick={handleSignOut}
            className="cursor-pointer w-8"
            src="\src\assets\Vector.png"
            alt="vector"
            data-tooltip-id="user-logo"
          />
        </div>
        <ReactTooltip
          id="user-logo"
          place="bottom"
          content={token ? "Log Out" : "Log In"}
        />
      </div>
    </>
  );
};

export default NavBar;
