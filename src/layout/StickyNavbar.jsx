import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg';

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-violet-500 font-extrabold"
              : "flex items-center hover:text-violet-500"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/all-jobs"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-violet-500 font-extrabold"
              : "flex items-center hover:text-violet-500"
          }
        >
          All Jobs
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/post-jobs"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-violet-500 font-extrabold"
              : "flex items-center hover:text-violet-500"
          }
        >
          Post A Job
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-violet-500 font-extrabold"
              : "flex items-center hover:text-violet-500"
          }
        >
          Blogs
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 max-w-full z-10 h-max rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/"
            className="mr-4 cursor-pointer py-1.5 flex items-center font-extrabold text-slate-900 md:text-2xl"
          >
            <img src={logo} className="w-24" alt="" /> <span className="text-violet-500 -translate-x-4">Jobs</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden md:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                size="sm"
                className="hidden md:inline-block bg-violet-500"
              >
                <Link to="/sign-in">
                  {" "}
                  <span>Sign in</span>
                </Link>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="gradient" size="sm" className="bg-violet-500">
              <span>Sign in</span>
            </Button>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
}
