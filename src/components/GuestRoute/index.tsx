import React, { ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../components/auth"; // Adjust the import according to your directory structure
import SplashScreen from "../../components/SplashScreen"; // Adjust the import according to your directory structure

interface UserState {
  loggedIn: boolean;
}

interface UserActions {
  loading: boolean;
}

const guestRoute = (Component: ComponentType<any>) => {
  return (props: any) => {
    const navigate = useNavigate();
    const [userState, userActions]: [UserState, UserActions] = useUser();

    if (userActions.loading) return <SplashScreen />;

    if (userState.loggedIn) {
      navigate("/dashboard");
      return <SplashScreen />;
    }

    return <Component {...props} />;
  };
};

export default guestRoute;
