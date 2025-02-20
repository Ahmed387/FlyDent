import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Contactinfo from "../Contactinfo/Contactinfo";

export default function Layout() {
  return (
    <div className=" mt-5  min-h-screen flex flex-col">
      <Contactinfo />

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
