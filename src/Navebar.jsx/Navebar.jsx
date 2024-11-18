import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavImg from "./images/logo.svg"; // Ensure the path is correct
import moonDarkMode from "./images/icons8-dark-mode-50.png"; // Ensure the path is correct

import { FaLinkedinIn } from "react-icons/fa6";
import { MdMan2 } from "react-icons/md";

const navigation = [
  { name: "Feature", href: "#nabout", current: true },
  { name: "About", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Reviews", href: "#", current: false },
  { name: "Contact", href: "#", current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className=" relative">
      <Disclosure as="nav" className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:items-stretch">
              <div className="container flex items-center w-full">
                {/* Logo */}
                <img alt="Your Company" src={NavImg} className="h-8 w-auto" />

                {/* Navigation Items */}
                <ul className="hidden lg:flex lg:ml-20 lg:pt-3  lg:gap-4  flex-1  justify-center lg:mr-8  xl:gap-10 xl:ml-32 xl:mt-5">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        className="no-underline text-gray-400 text-lg hover:text-[(rgb(138,91,244)]"
                        href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  ))}

                  {/* Dropdown Menu */}
                  <div className="relative inline-block text-left lg:mr-32">
                    <div>
                      <button
                        type="button"
                        onClick={toggleDropdown}
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        id="menu-button"
                        aria-expanded={isOpen}
                        aria-haspopup="true">
                        Pages
                        <svg
                          className="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {isOpen && (
                      <div
                        className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1">
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 no-underline hover:text-[rgb(138,91,244)]"
                            role="menuitem">
                            Blog Grid pages
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 no-underline hover:text-[rgb(138,91,244)]"
                            role="menuitem">
                            Blog details page
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </ul>
              </div>
            </div>

            {/* Additional Items */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4">
              {/* Download Button */}
              <button className="hidden md:inline-block relative focus:outline-none text-white pr-8 py-3 text-center pl-9 bg-[rgb(138,91,244)] rounded z-10">
                Download
              </button>

              {/* Profile Dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="hidden md:flex relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={moonDarkMode}
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
              </Menu>

              {/* Mobile Menu Button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 lg:hidden text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <DisclosurePanel className="lg:hidden">
          <div className="container float-right w-32 h-96 border">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white no-underline"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white no-underline",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}>
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

export default Navebar;
