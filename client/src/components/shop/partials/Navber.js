import React, { Fragment, useContext } from "react";
import { useState, useEffect } from "react"; //For navbar color change

import { useHistory, useLocation } from "react-router-dom";
import "./style.css";

import { logout } from "./Action";
import { LayoutContext } from "../index";
import { isAdmin } from "../auth/fetchApi";

// import { Dropdown } from "react-multilevel-dropdown";

const Navber = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [navbar, setNavbar] = useState(false); //

  const { data, dispatch } = useContext(LayoutContext);

  const [reload, setReload] = useState(false);

  const navberToggleOpen = () =>
    data.navberHamburger
      ? dispatch({ type: "hamburgerToggle", payload: false })
      : dispatch({ type: "hamburgerToggle", payload: true });

  const loginModalOpen = () =>
    data.loginSignupModal
      ? dispatch({ type: "loginSignupModalToggle", payload: false })
      : dispatch({ type: "loginSignupModalToggle", payload: true });

  const cartModalOpen = () =>
    data.cartModal
      ? dispatch({ type: "cartModalToggle", payload: false })
      : dispatch({ type: "cartModalToggle", payload: true });

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("jwt")));
    setReload(false);
    {
      reload ? window.location.reload() : setReload(false);
    }
  }, [reload]);

  const handleHistory = (url) => {
    history.push(url);
    setReload(true);
  };
  // const fetchData = async () => {
  //   try {
  //     let responseData = await getAllCategory();
  //     if (responseData && responseData.Categories) {
  //       setCategories(responseData.Categories);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleCartOpen = () => {
    setTimeout(() => {
      cartModalOpen();
    }, 0);
  };

  return (
    <Fragment>
      {/* Navber Section */}
      <nav
        className={
          navbar
            ? "navbar active fixed top-0 w-full z-10 transition-all duration-500 shadow-lg"
            : "navbar fixed top-0 w-full z-10 lg:shadow-none"
        }
      >
        <div className="m-4 md:mx-12 md:my-6 grid grid-cols-4 lg:grid-cols-3  items-center">
          <div className="container hidden lg:block items-left  justify-start h-12 mt-1">
            {/* <span
              className=" userDropdownbtn relative hover:bg-gray-200 px-4 py-3 rounded-lg font-bold tracking-widest hover:text-gray-800 cursor-pointer"
              onClick={(e) => history.push("/")}
            >
              Shop
            </span> */}

            <span
              className="m-2 px-4 py-2 bg-transparent text-black font-bold rounded-lg  shadow-lg hover:blur-lg focus:ring focus:ring-blue-200 cursor-pointer hover:bg-white hover:bg-opacity-50"
              onClick={(e) => history.push("/")}
            >
              Home
            </span>

            <div className="dropdown inline-block relative">
              <button className="m-0 px-4 py-2 bg-transparent text-black font-bold rounded-lg  shadow-lg hover:blur-lg focus:ring focus:ring-blue-200 cursor-pointer hover:bg-white hover:bg-opacity-50">
                <span>Categories</span>
              </button>
              <ul className="dropdown-content absolute hidden text-black font-semibold">
                <li className="dropdown">
                  <a
                    className="rounded-t bg-white shadow-lg hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={(e) =>
                      handleHistory(
                        `/products/category/61c2cf94254b4908645c2e70`
                      )
                    }
                  >
                    Men
                  </a>
                  <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
                    <li>
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-t"
                        onClick={(e) =>
                          handleHistory(
                            `/products/category/62a574c73b25543da0c5abc9`
                          )
                        }
                      >
                        Cloth
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={(e) =>
                          handleHistory(
                            `/products/category/62a59b2d3b25543da0c5ad09`
                          )
                        }
                      >
                        Jewelleries
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-b"
                        onClick={(e) =>
                          handleHistory(
                            `/products/category/62a5910a3b25543da0c5ac94`
                          )
                        }
                      >
                        Watches
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Women
                  </a>
                </li> */}
                <li className="dropdown">
                  <a
                    className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={(e) =>
                      handleHistory(
                        `/products/category/61c2cfaa254b4908645c2e74`
                      )
                    }
                  >
                    Women
                  </a>
                  <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
                    <li>
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-t"
                        onClick={(e) =>
                          handleHistory(
                            `/products/category/62a585f63b25543da0c5abfe`
                          )
                        }
                      >
                        Cloth
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={(e) =>
                          handleHistory(
                            `/products/category/62a591eb3b25543da0c5acb9`
                          )
                        }
                      >
                        Jewelleries
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-b"
                        onClick={(e) =>
                          handleHistory(
                            `/products/category/62a5a3f93b25543da0c5ad37`
                          )
                        }
                      >
                        Watches
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={(e) =>
                      handleHistory(
                        `/products/category/61c2cfb6254b4908645c2e78`
                      )
                    }
                  >
                    Kids
                  </a>
                  <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
                    <li>
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-t"
                        onClick={(e) =>
                          handleHistory(
                            `/products/category/62a5a70f3b25543da0c5ad59`
                          )
                        }
                      >
                        Boy
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-b"
                        onClick={(e) =>
                          handleHistory(
                            `/products/category/62a5a7d93b25543da0c5ad6a`
                          )
                        }
                      >
                        Girl
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* </span> */}

            <span
              className="overflow-visible m-2 px-4 py-2 bg-transparent text-black font-bold rounded-lg  shadow-lg hover:blur-lg focus:ring focus:ring-blue-200 cursor-pointer hover:bg-white hover:bg-opacity-50"
              onClick={(e) => history.push("/contact-us")}
            >
              Contact us
            </span>
          </div>
          <div className="col-span-2 lg:hidden flex justify-items-stretch	items-center">
            {/* <svg
              onClick={(e) => navberToggleOpen()}
              className="col-span-1 lg:hidden w-8 h-8 cursor-pointer text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg> */}
            <svg
              onClick={(e) => navberToggleOpen()}
              className="col-span-1 lg:hidden w-8 h-8 cursor-pointer text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 17"
              fill="black"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>

            <span
              onClick={(e) => history.push("/")}
              style={{ letterSpacing: "0.10rem" }}
              className="font-Lobster flex items-left text-center font-bold text-black text-2xl cursor-pointer px-2"
              // className={navbar ? "hidden lg:block flex items-left col-span-1 text-center text-black font-bold tracking-widest uppercase text-3xl cursor-pointer" : "hidden lg:block flex items-left col-span-1 text-center text-white font-extrabold tracking-widest uppercase text-3xl cursor-pointer"}
            >
              i-store
              {/* <img src="https://i.ibb.co/ynpKYRd/rsz-1imageedit-1-7663599023.png" height="70%" width="80%"></img> */}
            </span>
          </div>
          <div
            onClick={(e) => history.push("/")}
            style={{ letterSpacing: "0.10rem" }}
            // className="hidden lg:block flex items-left col-span-1 text-center text-black font-bold tracking-widest uppercase text-3xl cursor-pointer"
            className={
              navbar
                ? "hidden lg:block flex items-left col-span-1 text-center text-black font-bold tracking-widest text-3xl cursor-pointer"
                : "hidden lg:block flex items-left col-span-1 text-center text-white font-extrabold tracking-widest text-3xl cursor-pointer logo-border"
            }
          >
            i-store
            {/* <img src="https://i.ibb.co/ynpKYRd/rsz-1imageedit-1-7663599023.png" ></img> */}
          </div>
          <div className="flex items-right col-span-2 lg:col-span-1 justify-end h-12 ">
            {/*  WishList Page Button */}
            <div
              className={`font-bold text-black self-center pr-2 ${
                localStorage.getItem("jwt") ? "" : "focus: cursor-pointer"
              }`}
            >
              {localStorage.getItem("jwt") ? (
                `Hello, ${JSON.parse(localStorage.getItem("jwt")).user.name}`
              ) : (
                <span onClick={(e) => loginModalOpen()}>Login/Signup</span>
              )}

              {/* {`Hello ${
              localStorage.getItem("jwt")
                ? JSON.parse(localStorage.getItem("jwt")).user.name
                : "Please login"
            },`} */}
            </div>
            <div
              onClick={(e) => history.push("/wish-list")}
              className="bg-transparent hover:bg-white hover:bg-opacity-50 rounded-lg px-2 py-2 shadow-lg cursor-pointer"
              title="Wishlist"
            >
              <svg
                className={`${
                  location.pathname === "/wish-list"
                    ? "fill-current text-black"
                    : ""
                } w-8 h-8 text-black cursor-pointer`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24 "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            {localStorage.getItem("jwt") ? (
              <Fragment>
                <div
                  className="userDropdownBtn bg-transparent hover:bg-white hover:bg-opacity-50 text-black px-2 py-2 rounded-lg relative shadow-lg"
                  title="Logout"
                >
                  <svg
                    className="cursor-pointer w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <div className="userDropdown absolute right-0 mt-1 bg-white rounded-lg shadow-lg">
                    {!isAdmin() ? (
                      <Fragment>
                        <li className="flex flex-col text-black w-48 shadow-lg rounded-lg">
                          <span
                            onClick={(e) => history.push("/user/orders")}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer rounded-lg"
                          >
                            <span>
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </span>
                            <span className="font-medium">My Orders</span>
                          </span>
                          <span
                            onClick={(e) => history.push("/user/profile")}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer rounded-lg"
                          >
                            <span>
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                            <span className="font-medium">My Account</span>
                          </span>
                          <span
                            onClick={(e) => history.push("/wish-list")}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer rounded-lg"
                          >
                            <span>
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            </span>
                            <span className="font-medium">My Wishlist</span>
                          </span>
                          <span
                            onClick={(e) => history.push("/user/setting")}
                            className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer rounded-lg"
                          >
                            <span>
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </span>
                            <span className="font-medium">Setting</span>
                          </span>
                          <span
                            onClick={(e) => logout()}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer rounded-lg"
                          >
                            <span>
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                              </svg>
                            </span>
                            <span className="font-medium">Logout</span>
                          </span>
                        </li>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <li className="flex flex-col text-black w-48 shadow-lg rounded-lg">
                          <span
                            onClick={(e) => history.push("/admin/dashboard")}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer rounded-lg"
                          >
                            <span>
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </span>
                            <span className="font-medium">Admin Panel</span>
                          </span>
                          <span
                            onClick={(e) => logout()}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer rounded-lg"
                          >
                            <span>
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                              </svg>
                            </span>
                            <span className="font-medium">Logout</span>
                          </span>
                        </li>
                      </Fragment>
                    )}
                  </div>
                </div>
              </Fragment>
            ) : (
              /* Login Modal Button */
              <div
                onClick={(e) => loginModalOpen()}
                className="cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg"
                title="Login"
              >
                <svg
                  className="w-8 h-8 text-black hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
            )}
            {/* Cart Modal Button */}
            <div
              className="bg-transparent hover:bg-white hover:bg-opacity-50 px-2 py-2 rounded-lg relative cursor-pointer shadow-lg"
              title="Cart"
            >
              <svg
                onClick={(e) => handleCartOpen()}
                // onMouseLeave={(e) =>
                //   dispatch({ type: "cartModalToggle", payload: false })
                // }
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute top-0 ml-6 mt-1 bg-yellow-700 rounded px-1 text-white text-xs hover:text-gray-200 font-semibold">
                {data.cartProduct !== null ? data.cartProduct.length : 0}
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            data.navberHamburger && data.navberHamburger
              ? "px-1 pb-2 md:pb-0 md:px-10 lg:hidden"
              : "hidden px-1 pb-2 md:pb-0 md:px-10 lg:hidden"
          }
        >
          <div className="col-span-1 flex flex-col text-gray-600">
            <span
              className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={(e) => history.push("/")}
            >
              Home
            </span>
            <span
              className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={(e) => history.push("/")}
            >
              Shop
            </span>
            <span
              className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={(e) => history.push("/contact-us")}
            >
              Contact us
            </span>
          </div>
        </div>
      </nav>
      {/* End Navber Section */}
    </Fragment>
  );
};

export default Navber;
