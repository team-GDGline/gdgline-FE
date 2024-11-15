import {Outlet, useLocation, useNavigate} from "react-router-dom";

import { useEffect } from "react";
const TokenRouter = () => {

const location = useLocation();
  const navigate = useNavigate();
  const isAuthPath = location.pathname === "/login" || location.pathname === "/signup";
  
  
  //   useEffect(() => {
  //   if(!localStorage.getItem("accessToken") && !isAuthPath){
  //     navigate("/login");
  //   }

  // }, [location.pathname, isAuthPath, navigate]);
  return (
    <div>
            <Outlet />
    </div>
  );
};

export default TokenRouter;
