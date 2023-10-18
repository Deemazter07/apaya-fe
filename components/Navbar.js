"use client"; // This is a client component 👈🏽
import Login from "@/pages/login";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarStyle, setNavbarStyle] = useState({
    navbar: "bg-transparent",
    logo: "bg-transparent text-white",
    menu: "bg-transparent",
    menuListStyle: "text-white",
    getStarted: "text-white",
    activeTab: "bg-white",
  });

  // Add a scroll event listener to change the navbar background when scrolling.
  useEffect(() => {
    // scroll to top left every reload / change page
    window.scroll(0, 0);

    // trigger navbar classes
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathName = usePathname();
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setNavbarStyle({
        navbar: "bg-white border-b border-gray-200",
        logo: "bg-primary text-black",
        menu: "text-blue-500",
        menuListStyle: "text-black",
        getStarted: "text-black",
        activeTab: "bg-quaternary",
      });
    } else {
      setNavbarStyle({
        navbar: "bg-transparent",
        logo: "bg-transparent text-white",
        menu: "bg-transparent",
        menuListStyle: "text-white",
        getStarted: "text-white",
        activeTab: "bg-white",
      });
    }
  };

  const { navbar, logo, menu, menuListStyle, getStarted, activeTab } =
    navbarStyle;

  const menuList = [
    {
      title: "Home",
      direct: "/",
      key: "home",
    },
    {
      title: "Articles",
      direct: "/articles",
      key: "articles",
    },
    {
      title: "Contact",
      direct: "/contact",
      key: "contact",
    },
  ];

// LoginButton
const [loginButton, setLoginButton] = useState(false)
// console.log(`loginButton ${loginButton}`);
const OpenLoginButton = () => {
  setLoginButton(true)
}
const CloseLoginButton = () => {
  setLoginButton(false)
}
  return (
    <nav
      className={`fixed ${navbar} w-full z-20 top-0 left-0 transition duration-300 ease-in-out font-montserrat`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-20">
        <a href="/" className={`${logo} flex items-center h-full`}>
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-lg whitespace-nowrap p-6">
            ApaYa?
          </span>
        </a>
        <div className="flex md:order-2">
          {/* LOGIN */}
          {loginButton ? <Login closeLogin={CloseLoginButton}/> : ''}
          {/* LOGIN */}
          <button onClick={OpenLoginButton} className={`${getStarted} no-underline hover:underline `}>
            login
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 h-full`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 md:p-0.5 mt-4 font-medium border border-gray-100 ${menu} md:flex-row md:space-x-8 md:mt-0 md:border-0 h-full`}
          >
            {menuList.map((item) => (
              <li key={item.key} className="">
                <div className="grid place-items-center mx-5 h-full">
                  <Link
                    href={item.direct}
                    className={`${menuListStyle}`}
                    aria-current="page"
                    scroll={false}
                  >
                    {item.title}
                  </Link>
                </div>
                <div className={`h-1 w-full flex justify-center`}>
                  <div
                    className={`${
                      pathName == item.direct && activeTab
                    } h-full w-10`}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
