import { useState} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import laptop from "../assets/icons/laptop.png";

function NavBar() {
  //Redux store data for cart total items
  const cartTotalQiantity = useSelector((state) => state.cart.totalQuantity);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/Products" },
    { name: "Contact us", href: "/Contacts" },
    { name: `Cart (${cartTotalQiantity})`, href: "/Cart" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0">
      <nav className="bg-blue flex h-[90px]">
        <div className="flex justify-between items-center w-full pl-10 pr-5">
          <NavLink
            to="/"
            className="flex items-center justify-center text-white font-[600] text-2xl gap-3 "
          >
            <img src={laptop} alt="" />
            Gatget Store
          </NavLink>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => {
              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-white hover:text-gray-300 text-xl font-600"
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          {/* <div className="fixed inset-0 z-50" /> */}
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 active"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </header>
  );
}
export default NavBar;
