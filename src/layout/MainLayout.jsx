import { Outlet } from "react-router-dom";
// import ComplexNavbar from "./ComplexNavbar";
import { Toaster } from "react-hot-toast";
import StickyNavbar from "./StickyNavbar";

export default function MainLayout() {

    return (
        <div>
            <Toaster/>
            <StickyNavbar/>
            {/* <ComplexNavbar/> */}
            <Outlet></Outlet>
        </div>
    )
}