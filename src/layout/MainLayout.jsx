import { Outlet } from "react-router-dom";
// import ComplexNavbar from "./ComplexNavbar";
import StickyNavbar from "./StickyNavbar";

export default function MainLayout() {

    return (
        <div>
            <StickyNavbar/>
            {/* <ComplexNavbar/> */}
            <Outlet></Outlet>
        </div>
    )
}