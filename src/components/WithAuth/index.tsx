// import React from "react";
// //import Router from "next/router";
// import { useNavigate } from  "react-router-dom";
// import { useUser } from "../../components/auth";
// import SplashScreen from "../../components/SplashScreen";

// interface Props {
//   children?: React.ReactNode
// }

// const withAuth = (Component: React.ComponentType<any>) => (props: unknown) => {
//   const [{ user }, { error, loading }] = useUser();
//   const navigate = useNavigate();
//   if (loading) return <SplashScreen />;
//   if (!user || error) {
//     navigate("/login");
//     return <SplashScreen />;
//   }
//   return <Component {...props} />;
// };

// export default withAuth;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../components/auth"; // Adjust the import according to your directory structure
import SplashScreen from "../../components/SplashScreen"; // Adjust the import according to your directory structure

const withAuth =
  (Component: React.ComponentType<any>) => (props: Record<string, any>) => {
    const [{ user }, { error, loading }] = useUser();
    const navigate = useNavigate();

    if (loading) return <SplashScreen />;
    if (!user || error) {
      navigate("/login");
      return <SplashScreen />;
    }

    return <Component {...props} />;
  };

export default withAuth;
