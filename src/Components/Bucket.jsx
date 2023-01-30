import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Bucket = () => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-sm">
          <span className="sr-only">Open bucket</span>

          <AiOutlineShoppingCart
            color="#fff"
            className="h-6 w-6"
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
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              ></div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Bucket;
