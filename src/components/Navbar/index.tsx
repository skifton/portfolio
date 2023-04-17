import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "_main", to: "/main" },
  { name: "_about", to: "/about" },
  { name: "_projects", to: "/projects" },
  { name: "_contact", to: "/contact" },
];

const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-gray-900 border-b border-gray-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-12 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 px-4 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          clsx(
                            "px-20 py-2.5 border-b border-r border-gray-600 text-white font-medium text-xl hover:text-yellow-500",
                            {
                              "border-t-2 border-t-yellow-500 text-yellow-500 border-b-0": isActive,
                            }
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.to}
                  className={({ isActive }: any) =>
                    clsx(
                      "block rounded-md text-center py-2 text-white font-medium text-xl text-gray-300 hover:text-yellow-500",
                      {
                        "text-yellow-500": isActive,
                      }
                    )
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
