import React from "react";
import { Route, Redirect } from "react-router-dom";


 const ProtectedRoute = ({
  component: Component,
  token,
  userId,
  ...rest
}) => {
  
  return (
    <Route
      {...rest}
      render={props => {
        let windowToken= window.localStorage.getItem("token")
        let windowUserId= window.localStorage.getItem("userId")
        
        if (token || windowToken) {
          
          return <Component {...props} userId ={userId || windowUserId }  />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: {
                  from: props.location,

                }
              }}
            />
          );
        }
      }}
    />
  );
};



export default ProtectedRoute

