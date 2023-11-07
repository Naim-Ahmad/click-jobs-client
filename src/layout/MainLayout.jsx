import { Outlet } from "react-router-dom";
// import ComplexNavbar from "./ComplexNavbar";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import StickyNavbar from "./StickyNavbar";

export default function MainLayout() {
  return (
    <div>
      <Toaster toastOptions={{
        className: "min-w-fit"
      }}/>
      <StickyNavbar />
      
      <div className="min-h-[90svh]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
