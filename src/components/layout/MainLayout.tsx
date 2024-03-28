import { Outlet } from "react-router-dom";
import Nabvar from "./Nabvar";
import Footer from "../ui/Footer";

export default function MainLayout() {
  return (
    <div>
      <Nabvar />
      <Outlet />
      <Footer />
    </div>
  );
}
