import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./routes/routes";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/login";
import Consultation from "./pages/Consultation";
import User from './components/users/New'
import AuthGaurd from "./routes/AuthGaurd";
import SidebarLayout from "./layouts/SidebarNavigation";

export default function App() {
  return (
    <BrowserRouter>
    <div className="global-container">
      {/* <Router /> */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<AuthGaurd><SidebarLayout /></AuthGaurd>}></Route>
        <Route path="/opd/consultation/:appointmentid" element={<AuthGaurd><Consultation /></AuthGaurd>}></Route>
        <Route path="/user/new" element={<AuthGaurd><User /></AuthGaurd>}></Route>
      </Routes>
      <ToastContainer />
    </div>
    </BrowserRouter>
  );
}
