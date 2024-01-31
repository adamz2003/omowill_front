import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import "./App.css";
import ContactPage from "./pages/contactpage";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import AbilityPage from "./pages/abilitypage";
import InfoPage from "./pages/infopage";
import AboutPage from "./pages/aboutpage";
import ResetPage from "./pages/resetpage";
import ForgotPage from "./pages/forgotpage";
import { AuthProvider } from "./context/AuthProvider";
import Layout from "./component/includes/layout";
import ProtectedRoute from "./component/includes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Death from "./pages/mypage/death";
import NewBorn from "./pages/mypage/newborn";
import SmpWill from "./pages/mypage/smpWill";
import Reqviewpage from "./pages/reqviewpage";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <div className="App">
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot" element={<ForgotPage />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="reset" element={<ResetPage />} />
                <Route path="ability" element={<AbilityPage />} />
                <Route path="info" element={<InfoPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="/mypage/death" element={<ProtectedRoute><Death /></ProtectedRoute>} />
                <Route path="/mypage/newborn" element={<ProtectedRoute><NewBorn /></ProtectedRoute>} />
                <Route path="/mypage/smpwill" element={<SmpWill />} />
                <Route path="/reqview" element={<Reqviewpage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </CookiesProvider>
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
}

export default App;
