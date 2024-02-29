import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
// ? -----------------------------------------------------COMPONENTS
import Login2 from "./components/login/Login2";
import Register from "./components/register/Register";
import LandingPage from "./components/landingPage/LandingPage";
import NavBar from "./components/navBar/NavBar";
import Favorites from "./components/favorites/Favorites";
import Detail from "./components/detail/Detail";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Notification from "./components/notification system/Notification";
// ? -----------------------------------------------------STYLES
import "./App.css";
import CartReservation from "./components/cart/CartReservation";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" ? <NavBar /> : ""}
      <Routes>
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/rooms" element={<Home />} />
        <Route path="/cart-reservation" element={<CartReservation />} />
        <Route path="/reservation" element={<Notification />} />
      </Routes>
      {location.pathname !== "/login" ? <Footer /> : ""}
    </>
  );
}

export default App;
