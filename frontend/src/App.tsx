// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/sso-calback" 
          element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"}/>} />
        <Route path="auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </>
  );
}

export default App
