import { BriefcaseIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  InboxArrowDownIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import useAuth from "../hooks/useAuth";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    route: "/my-profile",
  },
  {
    label: "My Jobs",
    icon: BriefcaseIcon,
    route: "/my-jobs",
  },
  {
    label: "Applied Jobs",
    icon: InboxArrowDownIcon,
    route: "/applied-jobs",
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const { logout, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = (e) => {
    setIsMenuOpen(false);
    if (e.target.innerText === "Sign Out") {
      logout()
        .then(() => {
          toast.success("Sign Out Successful!");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.code);
        });
    }
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          title={user?.displayName}
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt={user?.displayName}
            className="border border-gray-900 p-0.5"
            src={user?.photoURL || "https://i.ibb.co/fMhTpQd/no-User.jpg"}
          />

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, route }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <Link to={route} key={label}>
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user } = useAuth();

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
      {user && (
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
      )}
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
    <Navbar className="sticky top-0 max-w-full z-40 rounded-none py-2 px-0">
      <div className="max-w-7xl px-4 md:pr-4 md:pl-0 mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            to="/"
            className="mr-4 cursor-pointer flex items-center font-extrabold text-slate-900 md:text-2xl"
          >
            <img src={logo} className="w-16 md:w-24" alt="" />{" "}
            <span className="text-violet-500 -translate-x-4">Jobs</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden md:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {!user ? (
                <>
                  <Link to="/sign-up">
                    <Button
                      size="sm"
                      variant="outlined"
                      color="purple"
                      className="hidden md:inline-block"
                    >
                      {" "}
                      <span>Sign Up</span>
                    </Button>
                  </Link>

                  <Link to="/sign-in">
                    <Button
                      size="sm"
                      className="hidden bg-violet-500 md:inline-block"
                    >
                      {" "}
                      <span>Sign in</span>
                    </Button>
                  </Link>
                </>
              ) : (
                <ProfileMenu />
              )}
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
            <Link to="/sign-up" className="w-full">
              <Button
                size="sm"
                fullWidth
                variant="outlined"
                color="purple"
                className=""
              >
                {" "}
                <span>Sign Up</span>
              </Button>
            </Link>
            <Link to="/sign-in" className="w-full">
              <Button fullWidth size="sm" className="bg-violet-500">
                <span>Sign in</span>
              </Button>
            </Link>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
}
