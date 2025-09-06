import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear("isLogin");
    sessionStorage.setItem("islogin", 0);

    //  navigate('/login');
  };

  return (
    <>
      <li onClick={handleLogout}>
        <IoIosLogOut className="me-3" />
        {/* { Navigate("/login")} */}
        Logout
      </li>
    </>
  );
};

export default logout;
