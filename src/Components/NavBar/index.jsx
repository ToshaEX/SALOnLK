import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { resetUser } from "../../features/user/user-slice";
import { Roles } from "../../roles";
import Logo from "../../assets/logo-white.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfileDropdown = ({ userName, role, email, dispatch }) => {
  const history = useHistory();

  const logOut = (dispatch) => {
    localStorage.removeItem("accessToken");
    dispatch(resetUser());
    history.push("/");
  };

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <img
            className="h-8 w-8 rounded-full mini:h-6 mini:w-6"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-gray-dark py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-light whitespace-nowrap">
          {userName && (
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {userName + " "}({" " + role.toUpperCase() + " "})
                </div>
              )}
            </Menu.Item>
          )}
          {email && (
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {email}
                </div>
              )}
            </Menu.Item>
          )}

          {!userName ? (
            <>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/sign-up">
                    <div
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700 "
                      )}
                    >
                      Sign Up
                    </div>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/sign-in">
                    <div
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign In
                    </div>
                  </Link>
                )}
              </Menu.Item>
            </>
          ) : (
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={() => {
                    logOut(dispatch);
                  }}
                  className={classNames(
                    active ? "bg-gray-100 cursor-pointer" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Sign Out
                </div>
              )}
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const Navbar = () => {
  const { email, userName, role } = useSelector((state) => ({
    email: state.user.email,
    userName: state.user.userName,
    role: state.user.role,
  }));

  const dispatch = useDispatch();

  const navigation = [
    { name: "Home", to: "/", current: false },
    { name: "Services", to: "services", current: false },
    {
      name: "About us",
      to: "about-us",
      current: false,
    },
    role === Roles.ADMIN && {
      name: "Manage",
      to: "manage",
      current: false,
    },
    (role === Roles.BEAUTICIAN || role === Roles.USER) && {
      name: "Appointments",
      to: "appointment",
      current: false,
    },
  ];

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-gray-dark ">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-6 md:px-8 lg:px-16">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-light hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 mini:h-5 mini:w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 mini:h-5 mini:w-5"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-[48px] w-auto mini:h-[38px] lg:hidden"
                      src={Logo}
                      alt="logo"
                    />
                  </Link>
                  <Link to="/">
                    <div className="hidden w-auto lg:block">
                      <img src={Logo} alt="logo" className="h-[50px]" />
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block md:pl-3 md:ml-12">
                  <div className="flex space-x-4 p-5">
                    {navigation
                      .filter((val) => val.current === false)
                      .map((item) => (
                        <Link
                          to={(location) => ({
                            ...location,
                            pathname: item.to,
                          })}
                          key={`${item.name}-nav-item-1`}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white hover:bg-blue hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium text-gray-light"
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              {/* login button */}
              <div
                className={`absolute inset-y-0 right-0 flex items-center pl-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ${
                  role ? "hidden" : "flex"
                }`}
              >
                <Link to="/sign-in">
                  <button className="flex text-gray-300 bg-blue bg-opacity-10 px-2 py-2 rounded-md text-[13.5px] leading-5 font-medium tracking-wide text-white hover:bg-opacity-30 mini:px-[6px] md:px-3">
                    Sign in
                  </button>
                </Link>
              </div>

              {/* notification bell and profile icon */}
              <div
                className={`absolute inset-y-0 right-0 flex items-center pl-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ${
                  !role ? "hidden" : "flex"
                }`}
              >
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-light hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <BellIcon
                    className="h-[22px] w-[22px] mini:h-5 mini:w-5"
                    aria-hidden="true"
                  />
                </button> */}

                {/* Profile dropdown */}
                <ProfileDropdown
                  dispatch={dispatch}
                  email={email}
                  role={role}
                  userName={userName}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="absolute w-[100vw] bg-gray-dark/70 text-gray-light sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 ">
              {navigation
                .filter((val) => val.current === false)
                .map((item) => (
                  <Link
                    to={(location) => ({ ...location, pathname: item.to })}
                    key={`${item.name}-nav-item-2`}
                    as="a"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium mini:text-[14px] mini:py-1"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;