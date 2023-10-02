"use client";

// import { Fragment, useState } from 'react'
import { useState, Fragment } from "react";
import {} from "@heroicons/react/24/outline";
import {
  Bars3Icon as Bars3Icon_OL,
  MagnifyingGlassIcon as MagnifyingGlassIcon_OL,
  ShoppingCartIcon as ShoppingCartIcon_OL,
  UserIcon as UserIcon_OL,
  XMarkIcon as XMarkIcon_OL,
  BellIcon as BellIcon_OL,
  HeartIcon as HeartIcon_OL,
  ChevronDownIcon as ChevronDownIcon_OL,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon as ChevronDownIcon_Solid,
  HeartIcon as HeartIcon_Solid,
  MagnifyingGlassIcon as magGlassIcon_Solid,
  ShoppingCartIcon as shopCartIcon_Solid,
} from "@heroicons/react/20/solid";

import {} from "@headlessui/react";
import {
  Disclosure,
  Menu,
  Dialog,
  Popover,
  Tab,
  Transition,
} from "@headlessui/react";
import { Button } from "iwommds";
import Image from "next/image";

// const products = [
//   { name: 'Departments', href: '#' },
//   { name: 'Services', href: '#' },
// ]
// const ecom = [
//   { name: 'My Items', href: '#' },
//   { name: 'Account', href: '#' },
//   { name: 'Cart', href: '#' },
// ]

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const secondNavigation = {
  categories: [
    {
      name: "Deals",
      featured: [
        { name: "Sleep", href: "#" },
        { name: "Swimwear", href: "#" },
        { name: "Underwear", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
        { name: "Bottoms", href: "#" },
        { name: "Underwear", href: "#" },
        { name: "Accessories", href: "#" },
      ],
      brands: [
        { name: "Full Nelson", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Significant Other", href: "#" },
      ],
    },
    {
      name: "Grocery & Essentials",
      featured: [
        { name: "Casual", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Outdoor", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Artwork Tees", href: "#" },
        { name: "Pants", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Basic Tees", href: "#" },
      ],
      brands: [
        { name: "Significant Other", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Full Nelson", href: "#" },
      ],
    },
  ],
  pages: [
    { name: "Back to Schools", href: "#" },
    { name: "Dorm Essentials", href: "#" },
    { name: "Fashion", href: "#" },
    { name: "Home", href: "#" },
  ],
};
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Departments", href: "#", current: true },
  { name: "Services", href: "#", current: false },
];

const navigationTwo = [
  { name: "My Items", href: "#", current: true },
  { name: "Acount", href: "#", current: false },
  { name: "", href: "#", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const footerNavigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <div className="bg-indigo-600 pb-32">
          <Disclosure
            as="nav"
            className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none"
          >
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <a
                        href="#"
                        className="-m-1.5 p-1.5 rounded-full hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60"
                      >
                        <span className="sr-only">Your Company123</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="130"
                          height="32"
                        >
                          <g fill="none" fillRule="evenodd">
                            <path
                              fill="#FFF"
                              d="M72.22 20.02c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.33-5.84-5.81-5.84-2.3 0-4.13.64-5.13 1.22l.73 2.5a7.51 7.51 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zM0 6.67L3.76 22.1c.6 2.52 1.69 3.45 4.82 2.82l2.03-8.23c.51-2.05.86-3.5 1.19-5.59h.05c.24 2.1.57 3.55.99 5.6l1.24 5.7c.43 1.96 1.6 3.2 4.68 2.52l4.82-18.25h-3.9l-1.64 7.89c-.45 2.3-.85 4.1-1.16 6.2h-.05c-.28-2.09-.64-3.81-1.1-6.05l-1.7-8.04H9.97L8.13 14.5c-.51 2.38-1 4.3-1.3 6.33h-.06c-.32-1.9-.74-4.33-1.2-6.63L4.1 6.67H0m30.71 13.35c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.32-5.84-5.8-5.84-2.3 0-4.14.64-5.14 1.22l.73 2.5a7.52 7.52 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zm5.73 4.3V6.68h-3.7v18.25h3.7v-3.88M87.3 6.68v13.46c0 1.86.35 3.16 1.1 3.95.65.7 1.72 1.15 3.01 1.15 1.1 0 2.17-.2 2.68-.4l-.04-2.9c-.38.1-.82.17-1.41.17-1.26 0-1.69-.8-1.69-2.47v-5.15h3.23v-3.5h-3.23V6.67H87.3m-9.57 4.54v13.71h3.82V17.9c0-.38.03-.7.09-1.01.28-1.47 1.4-2.41 3.02-2.41.44 0 .76.04 1.1.1v-3.6a3.68 3.68 0 00-.84-.08c-1.43 0-3.05.92-3.73 2.9h-.1v-2.6h-3.36m-35.43 0v13.72H46v-8.04c0-.38.05-.78.18-1.12.3-.81 1.06-1.76 2.26-1.76 1.5 0 2.21 1.27 2.21 3.1v7.82h3.72v-8.14c0-.36.05-.8.16-1.11A2.35 2.35 0 0156.78 14c1.52 0 2.25 1.25 2.25 3.4v7.52h3.73v-8.08c0-4.25-2.17-5.94-4.6-5.94-1.09 0-1.94.27-2.71.74-.65.4-1.24.97-1.74 1.71h-.06a3.9 3.9 0 00-3.77-2.45 4.31 4.31 0 00-4 2.17h-.05v-1.86h-3.54"
                            />
                            <path
                              fill="#F3B53B"
                              d="M114.2 10.6c.74 0 1.34-.39 1.43-.88l.72-8.24c0-.81-.95-1.48-2.15-1.48s-2.15.67-2.15 1.48l.73 8.24c.08.5.69.87 1.42.87m-4.45 2.58c.37-.64.34-1.36-.05-1.68l-6.77-4.74c-.7-.41-1.75.08-2.35 1.12-.6 1.04-.5 2.2.2 2.6l7.5 3.49c.47.17 1.1-.16 1.47-.8m8.9 0c.37.64 1 .97 1.48.8l7.49-3.49c.7-.4.8-1.56.21-2.6-.6-1.04-1.66-1.53-2.36-1.12l-6.77 4.74c-.38.32-.41 1.04-.04 1.68m-4.46 7.7c.74 0 1.34.39 1.43.88l.72 8.24c0 .81-.95 1.48-2.15 1.48s-2.15-.67-2.15-1.48l.73-8.24c.08-.5.69-.87 1.42-.87m4.45-2.57c.37-.64 1-.97 1.48-.8l7.49 3.49c.7.4.8 1.57.21 2.6-.6 1.04-1.66 1.53-2.36 1.12l-6.77-4.74c-.38-.32-.41-1.04-.04-1.67m-8.91 0c.37.63.34 1.35-.05 1.67l-6.77 4.74c-.7.4-1.75-.08-2.35-1.12-.6-1.04-.5-2.2.2-2.6l7.5-3.49c.47-.17 1.1.16 1.47.8M129.2 24h.07c.08 0 .15-.03.15-.1 0-.06-.04-.1-.14-.1h-.08v.2zm0 .36h-.16v-.65l.25-.02c.13 0 .18.02.23.05.04.03.07.08.07.14 0 .08-.06.13-.14.16.06.02.1.08.12.16.02.1.03.14.05.16h-.16c-.02-.02-.04-.08-.06-.15-.01-.07-.05-.1-.13-.1h-.08v.26zm.1-.86c-.3 0-.51.24-.51.53 0 .29.22.52.51.52.29 0 .5-.23.5-.52a.5.5 0 00-.5-.53zm0-.13c.38 0 .67.29.67.66 0 .37-.3.66-.67.66a.66.66 0 01-.68-.66c0-.37.3-.66.68-.66z"
                            />
                          </g>
                        </svg>
                      </a>

                      <div className="hidden lg:ml-10 lg:block">
                        <div className="flex space-x-6">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-indigo-700 text-white"
                                  : "text-white hover:bg-indigo-900 hover:bg-opacity-75",
                                "rounded-full py-2 px-3 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                          <div className="w-full max-w-lg lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">
                              Search
                            </label>
                            <div className="relative text-gray-400 focus-within:text-gray-600">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MagnifyingGlassIcon_OL
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </div>
                              <input
                                id="search"
                                className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Search"
                                type="search"
                                name="search"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex flex-3 justify-center px-2 lg:ml-6 lg:justify-end">
                   content---------------------------------------------------
                    </div> */}
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon_OL
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon_OL
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:ml-4 lg:block">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="relative flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <HeartIcon_OL
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                          ReOrder My Item
                        </button>
                        <button
                          type="button"
                          className=" relative flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <BellIcon_OL className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          className=" relative flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <ShoppingCartIcon_OL
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>

                        {/* Profile dropdown */}
                        {/* <Menu as="div" className="relative ml-3 flex-shrink-0">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <picture>
                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> 
                                </picture>
                              <ShoppingCartIcon_OL title='123'>$0.00</ShoppingCartIcon_OL>
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu> */}
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-700 text-white"
                            : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                          "block rounded-full py-2 px-3 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-indigo-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <picture>
                          <img
                            image-full="true"
                            className="h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="ml-3">
                        <div
                          className="text-base font-medium text-white"
                          text-white="true"
                        >
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-indigo-300">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon_OL className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="bg-indigo-600">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 lg:hidden"
                onClose={setOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                      <div className="flex px-4 pb-2 pt-5">
                        <button
                          type="button"
                          className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon_OL
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      {/* Links */}
                      <Tab.Group as="div" className="mt-2">
                        <div className="border-b border-gray-200">
                          <Tab.List className="-mb-px flex space-x-8 px-4">
                            {secondNavigation.categories.map((category) => (
                              <Tab
                                key={category.name}
                                className={({ selected }) =>
                                  classNames(
                                    selected
                                      ? "border-indigo-600 text-indigo-600"
                                      : "border-transparent text-gray-900",
                                    "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                                  )
                                }
                              >
                                {category.name}
                              </Tab>
                            ))}
                          </Tab.List>
                        </div>
                        <Tab.Panels as={Fragment}>
                          {secondNavigation.categories.map(
                            (category, categoryIdx) => (
                              <Tab.Panel
                                key={category.name}
                                className="space-y-12 px-4 pb-6 pt-10"
                              >
                                <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                                  <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                                    <div>
                                      <p
                                        id={`mobile-featured-heading-${categoryIdx}`}
                                        className="font-medium text-gray-900"
                                      >
                                        Featured
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                                        className="mt-6 space-y-6"
                                      >
                                        {category.featured.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="text-gray-500"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <p
                                        id="mobile-categories-heading"
                                        className="font-medium text-gray-900"
                                      >
                                        Categories
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="mobile-categories-heading"
                                        className="mt-6 space-y-6"
                                      >
                                        {category.categories.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="text-gray-500"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                                    <div>
                                      <p
                                        id="mobile-collection-heading"
                                        className="font-medium text-gray-900"
                                      >
                                        Collection
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="mobile-collection-heading"
                                        className="mt-6 space-y-6"
                                      >
                                        {category.collection.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="text-gray-500"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div>
                                      <p
                                        id="mobile-brand-heading"
                                        className="font-medium text-gray-900"
                                      >
                                        Brands
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="mobile-brand-heading"
                                        className="mt-6 space-y-6"
                                      >
                                        {category.brands.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="text-gray-500"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Panel>
                            )
                          )}
                        </Tab.Panels>
                      </Tab.Group>

                      <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                        {secondNavigation.pages.map((page) => (
                          <div key={page.name} className="flow-root">
                            <a
                              href={page.href}
                              className="-m-2 block p-2 font-medium text-gray-900"
                            >
                              {page.name}
                            </a>
                          </div>
                        ))}
                      </div>

                      {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                        <div className="flow-root">
                          <a
                            href="#"
                            className="-m-2 block p-2 font-medium text-gray-900"
                          >
                            Create an account
                          </a>
                        </div>
                        <div className="flow-root">
                          <a
                            href="#"
                            className="-m-2 block p-2 font-medium text-gray-900"
                          >
                            Sign in
                          </a>
                        </div>
                      </div> */}

                      {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                        {/* Currency selector */}
                      {/*<form>
                          <div className="inline-block">
                            <label
                              htmlFor="mobile-currency"
                              className="sr-only"
                            >
                              Currency
                            </label>
                            <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                              <select
                                id="mobile-currency"
                                name="currency"
                                className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                              >
                                {currencies.map((currency) => (
                                  <option key={currency}>{currency}</option>
                                ))}
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                                <ChevronDownIcon_Solid
                                  className="h-5 w-5 text-gray-500"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div> 
                      */}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>

            <header className="relative">
              <nav aria-label="Top">
                {/* Top navigation */}

                {/* Secondary navigation */}
                <div className="bg-indigo-600">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                      <div className="flex h-16 items-center justify-between">
                        <div className="hidden h-full lg:flex">
                          {/* Mega menus */}
                          <Popover.Group className="ml-8">
                            <div className="flex h-full justify-center space-x-8">
                              {secondNavigation.categories.map(
                                (category, categoryIdx) => (
                                  <Popover key={category.name} className="flex">
                                    {({ open }) => (
                                      <>
                                        <div className="relative flex">
                                          <Popover.Button
                                            className={classNames(
                                              open
                                                ? "border-indigo-600 text-indigo-600"
                                                : "border-transparent text-white hover:text-gray-800",
                                              "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                            )}
                                          >
                                            {category.name}
                                          </Popover.Button>
                                        </div>

                                        <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-200"
                                          enterFrom="opacity-0"
                                          enterTo="opacity-100"
                                          leave="transition ease-in duration-150"
                                          leaveFrom="opacity-100"
                                          leaveTo="opacity-0"
                                        >
                                          <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                            <div
                                              className="absolute inset-0 top-1/2 bg-white shadow"
                                              aria-hidden="true"
                                            />

                                            <div className="relative bg-white">
                                              <div className="mx-auto max-w-7xl px-8">
                                                <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                                    <div>
                                                      <p
                                                        id={`desktop-featured-heading-${categoryIdx}`}
                                                        className="font-medium text-gray-900"
                                                      >
                                                        Featured
                                                      </p>
                                                      <ul
                                                        role="list"
                                                        aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                      >
                                                        {category.featured.map(
                                                          (item) => (
                                                            <li
                                                              key={item.name}
                                                              className="flex"
                                                            >
                                                              <a
                                                                href={item.href}
                                                                className="hover:text-gray-800"
                                                              >
                                                                {item.name}
                                                              </a>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </div>
                                                    <div>
                                                      <p
                                                        id="desktop-categories-heading"
                                                        className="font-medium text-gray-900"
                                                      >
                                                        Categories
                                                      </p>
                                                      <ul
                                                        role="list"
                                                        aria-labelledby="desktop-categories-heading"
                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                      >
                                                        {category.categories.map(
                                                          (item) => (
                                                            <li
                                                              key={item.name}
                                                              className="flex"
                                                            >
                                                              <a
                                                                href={item.href}
                                                                className="hover:text-gray-800"
                                                              >
                                                                {item.name}
                                                              </a>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </div>
                                                  </div>
                                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                                    <div>
                                                      <p
                                                        id="desktop-collection-heading"
                                                        className="font-medium text-gray-900"
                                                      >
                                                        Collection
                                                      </p>
                                                      <ul
                                                        role="list"
                                                        aria-labelledby="desktop-collection-heading"
                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                      >
                                                        {category.collection.map(
                                                          (item) => (
                                                            <li
                                                              key={item.name}
                                                              className="flex"
                                                            >
                                                              <a
                                                                href={item.href}
                                                                className="hover:text-gray-800"
                                                              >
                                                                {item.name}
                                                              </a>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </div>

                                                    <div>
                                                      <p
                                                        id="desktop-brand-heading"
                                                        className="font-medium text-gray-900"
                                                      >
                                                        Brands
                                                      </p>
                                                      <ul
                                                        role="list"
                                                        aria-labelledby="desktop-brand-heading"
                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                      >
                                                        {category.brands.map(
                                                          (item) => (
                                                            <li
                                                              key={item.name}
                                                              className="flex"
                                                            >
                                                              <a
                                                                href={item.href}
                                                                className="hover:text-gray-800"
                                                              >
                                                                {item.name}
                                                              </a>
                                                            </li>
                                                          )
                                                        )}
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </Popover.Panel>
                                        </Transition>
                                      </>
                                    )}
                                  </Popover>
                                )
                              )}

                              {secondNavigation.pages.map((page) => (
                                <a
                                  key={page.name}
                                  href={page.href}
                                  className="flex items-center text-sm font-medium text-white hover:text-gray-800"
                                >
                                  {page.name}
                                </a>
                              ))}
                            </div>
                          </Popover.Group>
                        </div>

                        {/* Mobile menu and search (lg-) */}
                        <div className="flex flex-1 items-center lg:hidden">
                          <button
                            type="button"
                            className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                            onClick={() => setOpen(true)}
                          >
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon_OL
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>

                          {/* Search */}
                          <a
                            href="#"
                            className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon_OL
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </a>
                        </div>

                        <div className="flex flex-1 items-center justify-end">
                          <div className="flex items-center lg:ml-8">
                            <div className="flex space-x-8">
                              <div className="hidden lg:flex">
                                <a
                                  href="#"
                                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">Search</span>
                                  <MagnifyingGlassIcon_OL
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>

                              <div className="flex">
                                <a
                                  href="#"
                                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">Account</span>
                                  <UserIcon_OL
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </div>

                            <span
                              className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                              aria-hidden="true"
                            />

                            <div className="flow-root">
                              <a
                                href="#"
                                className="group -m-2 flex items-center p-2"
                              >
                                <ShoppingCartIcon_OL
                                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 text-sm font-medium text-white group-hover:text-gray-800">
                                  0
                                </span>
                                <span className="sr-only">
                                  items in cart, view bag
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </div>
          {/* <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                HEADER TODO
              </h1>
            </div>
          </header> */}
        </div>

        <main className="-mt-32 bg-white">
          <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img
              src="/img/beams.jpg"
              alt=""
              class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
              width="1308"
            />
            <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              <div class="mx-auto max-w-md">
                <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" />
                <div class="divide-y divide-gray-300/50">
                  <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                    <p>
                      An advanced online playground for Tailwind CSS, including
                      support for things like:
                    </p>
                    <ul class="space-y-4">
                      <li class="flex items-center">
                        <svg
                          class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="11" />
                          <path
                            d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                            fill="none"
                          />
                        </svg>
                        <p class="ml-4">
                          Customizing your
                          <code class="text-sm font-bold text-gray-900">
                            tailwind.config.js
                          </code>{" "}
                          file
                        </p>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="11" />
                          <path
                            d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                            fill="none"
                          />
                        </svg>
                        <p class="ml-4">
                          Extracting classes with
                          <code class="text-sm font-bold text-gray-900">
                            @apply
                          </code>
                        </p>
                      </li>
                      <li class="flex items-center">
                        <svg
                          class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="11" />
                          <path
                            d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                            fill="none"
                          />
                        </svg>
                        <p class="ml-4">Code completion with instant preview</p>
                      </li>
                    </ul>
                    <p>
                      Perfect for learning how the framework works, prototyping
                      a new idea, or creating a demo to share online.
                    </p>
                  </div>
                  <div class="pt-8 text-base font-semibold leading-7">
                    <p class="text-gray-900">
                      Want to dig deeper into Tailwind?
                    </p>
                    <p>
                      <a
                        href="https://tailwindcss.com/docs"
                        class="text-sky-500 hover:text-sky-600"
                      >
                        Read the docs &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {/* Your content */}
            <div className="card w-96 bg-base-100 shadow-xl imageFull">
              <figure>
                <Image
                  width={100}
                  height={100}
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  fill
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Button label="Hey its a IWOMMDS Btn" />
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl" image-full>
              <figure>
                <Image
                  width={300}
                  height={300}
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  fill
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-indigo-600 pb-32" text-white="true">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            {footerNavigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a
                  href={item.href}
                  className="text-sm leading-6 text-white hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-white">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

{
  /* <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M72.22 20.02c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.33-5.84-5.81-5.84-2.3 0-4.13.64-5.13 1.22l.73 2.5a7.51 7.51 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zM0 6.67L3.76 22.1c.6 2.52 1.69 3.45 4.82 2.82l2.03-8.23c.51-2.05.86-3.5 1.19-5.59h.05c.24 2.1.57 3.55.99 5.6l1.24 5.7c.43 1.96 1.6 3.2 4.68 2.52l4.82-18.25h-3.9l-1.64 7.89c-.45 2.3-.85 4.1-1.16 6.2h-.05c-.28-2.09-.64-3.81-1.1-6.05l-1.7-8.04H9.97L8.13 14.5c-.51 2.38-1 4.3-1.3 6.33h-.06c-.32-1.9-.74-4.33-1.2-6.63L4.1 6.67H0m30.71 13.35c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.32-5.84-5.8-5.84-2.3 0-4.14.64-5.14 1.22l.73 2.5a7.52 7.52 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zm5.73 4.3V6.68h-3.7v18.25h3.7v-3.88M87.3 6.68v13.46c0 1.86.35 3.16 1.1 3.95.65.7 1.72 1.15 3.01 1.15 1.1 0 2.17-.2 2.68-.4l-.04-2.9c-.38.1-.82.17-1.41.17-1.26 0-1.69-.8-1.69-2.47v-5.15h3.23v-3.5h-3.23V6.67H87.3m-9.57 4.54v13.71h3.82V17.9c0-.38.03-.7.09-1.01.28-1.47 1.4-2.41 3.02-2.41.44 0 .76.04 1.1.1v-3.6a3.68 3.68 0 00-.84-.08c-1.43 0-3.05.92-3.73 2.9h-.1v-2.6h-3.36m-35.43 0v13.72H46v-8.04c0-.38.05-.78.18-1.12.3-.81 1.06-1.76 2.26-1.76 1.5 0 2.21 1.27 2.21 3.1v7.82h3.72v-8.14c0-.36.05-.8.16-1.11A2.35 2.35 0 0156.78 14c1.52 0 2.25 1.25 2.25 3.4v7.52h3.73v-8.08c0-4.25-2.17-5.94-4.6-5.94-1.09 0-1.94.27-2.71.74-.65.4-1.24.97-1.74 1.71h-.06a3.9 3.9 0 00-3.77-2.45 4.31 4.31 0 00-4 2.17h-.05v-1.86h-3.54"/><path fill="#F3B53B" d="M114.2 10.6c.74 0 1.34-.39 1.43-.88l.72-8.24c0-.81-.95-1.48-2.15-1.48s-2.15.67-2.15 1.48l.73 8.24c.08.5.69.87 1.42.87m-4.45 2.58c.37-.64.34-1.36-.05-1.68l-6.77-4.74c-.7-.41-1.75.08-2.35 1.12-.6 1.04-.5 2.2.2 2.6l7.5 3.49c.47.17 1.1-.16 1.47-.8m8.9 0c.37.64 1 .97 1.48.8l7.49-3.49c.7-.4.8-1.56.21-2.6-.6-1.04-1.66-1.53-2.36-1.12l-6.77 4.74c-.38.32-.41 1.04-.04 1.68m-4.46 7.7c.74 0 1.34.39 1.43.88l.72 8.24c0 .81-.95 1.48-2.15 1.48s-2.15-.67-2.15-1.48l.73-8.24c.08-.5.69-.87 1.42-.87m4.45-2.57c.37-.64 1-.97 1.48-.8l7.49 3.49c.7.4.8 1.57.21 2.6-.6 1.04-1.66 1.53-2.36 1.12l-6.77-4.74c-.38-.32-.41-1.04-.04-1.67m-8.91 0c.37.63.34 1.35-.05 1.67l-6.77 4.74c-.7.4-1.75-.08-2.35-1.12-.6-1.04-.5-2.2.2-2.6l7.5-3.49c.47-.17 1.1.16 1.47.8M129.2 24h.07c.08 0 .15-.03.15-.1 0-.06-.04-.1-.14-.1h-.08v.2zm0 .36h-.16v-.65l.25-.02c.13 0 .18.02.23.05.04.03.07.08.07.14 0 .08-.06.13-.14.16.06.02.1.08.12.16.02.1.03.14.05.16h-.16c-.02-.02-.04-.08-.06-.15-.01-.07-.05-.1-.13-.1h-.08v.26zm.1-.86c-.3 0-.51.24-.51.53 0 .29.22.52.51.52.29 0 .5-.23.5-.52a.5.5 0 00-.5-.53zm0-.13c.38 0 .67.29.67.66 0 .37-.3.66-.67.66a.66.66 0 01-.68-.66c0-.37.3-.66.68-.66z"/></g></svg>
                        <img
                          className="block h-8 w-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                          alt="Your Company"
                        />
                      </div> */
}

//export default function Example() {
//const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// return (
//   <header className="bg-indigo-600">
//     <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
//       <div className="flex lg:flex-1">
//         <a href="#" className="-m-1.5 p-1.5 rounded-full hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60" >
//           <span className="sr-only">Your Company</span>
//           <svg xmlns="http://www.w3.org/2000/svg" width="130" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M72.22 20.02c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.33-5.84-5.81-5.84-2.3 0-4.13.64-5.13 1.22l.73 2.5a7.51 7.51 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zM0 6.67L3.76 22.1c.6 2.52 1.69 3.45 4.82 2.82l2.03-8.23c.51-2.05.86-3.5 1.19-5.59h.05c.24 2.1.57 3.55.99 5.6l1.24 5.7c.43 1.96 1.6 3.2 4.68 2.52l4.82-18.25h-3.9l-1.64 7.89c-.45 2.3-.85 4.1-1.16 6.2h-.05c-.28-2.09-.64-3.81-1.1-6.05l-1.7-8.04H9.97L8.13 14.5c-.51 2.38-1 4.3-1.3 6.33h-.06c-.32-1.9-.74-4.33-1.2-6.63L4.1 6.67H0m30.71 13.35c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.32-5.84-5.8-5.84-2.3 0-4.14.64-5.14 1.22l.73 2.5a7.52 7.52 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zm5.73 4.3V6.68h-3.7v18.25h3.7v-3.88M87.3 6.68v13.46c0 1.86.35 3.16 1.1 3.95.65.7 1.72 1.15 3.01 1.15 1.1 0 2.17-.2 2.68-.4l-.04-2.9c-.38.1-.82.17-1.41.17-1.26 0-1.69-.8-1.69-2.47v-5.15h3.23v-3.5h-3.23V6.67H87.3m-9.57 4.54v13.71h3.82V17.9c0-.38.03-.7.09-1.01.28-1.47 1.4-2.41 3.02-2.41.44 0 .76.04 1.1.1v-3.6a3.68 3.68 0 00-.84-.08c-1.43 0-3.05.92-3.73 2.9h-.1v-2.6h-3.36m-35.43 0v13.72H46v-8.04c0-.38.05-.78.18-1.12.3-.81 1.06-1.76 2.26-1.76 1.5 0 2.21 1.27 2.21 3.1v7.82h3.72v-8.14c0-.36.05-.8.16-1.11A2.35 2.35 0 0156.78 14c1.52 0 2.25 1.25 2.25 3.4v7.52h3.73v-8.08c0-4.25-2.17-5.94-4.6-5.94-1.09 0-1.94.27-2.71.74-.65.4-1.24.97-1.74 1.71h-.06a3.9 3.9 0 00-3.77-2.45 4.31 4.31 0 00-4 2.17h-.05v-1.86h-3.54"/><path fill="#F3B53B" d="M114.2 10.6c.74 0 1.34-.39 1.43-.88l.72-8.24c0-.81-.95-1.48-2.15-1.48s-2.15.67-2.15 1.48l.73 8.24c.08.5.69.87 1.42.87m-4.45 2.58c.37-.64.34-1.36-.05-1.68l-6.77-4.74c-.7-.41-1.75.08-2.35 1.12-.6 1.04-.5 2.2.2 2.6l7.5 3.49c.47.17 1.1-.16 1.47-.8m8.9 0c.37.64 1 .97 1.48.8l7.49-3.49c.7-.4.8-1.56.21-2.6-.6-1.04-1.66-1.53-2.36-1.12l-6.77 4.74c-.38.32-.41 1.04-.04 1.68m-4.46 7.7c.74 0 1.34.39 1.43.88l.72 8.24c0 .81-.95 1.48-2.15 1.48s-2.15-.67-2.15-1.48l.73-8.24c.08-.5.69-.87 1.42-.87m4.45-2.57c.37-.64 1-.97 1.48-.8l7.49 3.49c.7.4.8 1.57.21 2.6-.6 1.04-1.66 1.53-2.36 1.12l-6.77-4.74c-.38-.32-.41-1.04-.04-1.67m-8.91 0c.37.63.34 1.35-.05 1.67l-6.77 4.74c-.7.4-1.75-.08-2.35-1.12-.6-1.04-.5-2.2.2-2.6l7.5-3.49c.47-.17 1.1.16 1.47.8M129.2 24h.07c.08 0 .15-.03.15-.1 0-.06-.04-.1-.14-.1h-.08v.2zm0 .36h-.16v-.65l.25-.02c.13 0 .18.02.23.05.04.03.07.08.07.14 0 .08-.06.13-.14.16.06.02.1.08.12.16.02.1.03.14.05.16h-.16c-.02-.02-.04-.08-.06-.15-.01-.07-.05-.1-.13-.1h-.08v.26zm.1-.86c-.3 0-.51.24-.51.53 0 .29.22.52.51.52.29 0 .5-.23.5-.52a.5.5 0 00-.5-.53zm0-.13c.38 0 .67.29.67.66 0 .37-.3.66-.67.66a.66.66 0 01-.68-.66c0-.37.3-.66.68-.66z"/></g></svg>
//         </a>
//       </div>
//       <div className="hidden lg:flex lg:gap-x-12">
//         {products.map((item) => (
//           <a key={item.name} href={item.href} className="rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//             {item.name}
//           </a>
//         ))}

//          {ecom.map((item) => (
//           <a key={item.name} href={item.href} className="rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//             {item.name}
//           </a>
//         ))}
//       </div>
//       <div className="flex flex-1 items-center justify-end gap-x-6">
//       <a
//           href="#"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Log in
//         </a>
//         <a
//           href="#"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Sign up
//         </a>
//       </div>
//       <div className="flex lg:hidden">
//         <button
//           type="button"
//           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//           onClick={() => setMobileMenuOpen(true)}
//         >
//           <span className="sr-only">Open main menu</span>
//           <Bars3Icon_OL className="h-6 w-6" aria-hidden="true" />
//         </button>
//       </div>
//     </nav>
//     <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//       <div className="fixed inset-0 z-10" />
//       <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//         <div className="flex items-center gap-x-6">
//           <a href="#" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <img
//               className="h-8 w-auto"
//               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//               alt=""
//             />
//           </a>
//           <a
//             href="#"
//             className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Sign up
//           </a>
//           <button
//             type="button"
//             className="-m-2.5 rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             <span className="sr-only">Close menu</span>
//             <XMarkIcon_OL className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <div className="mt-6 flow-root">
//           <div className="-my-6 divide-y divide-gray-500/10">
//             <div className="space-y-2 py-6">
//               {products.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="-mx-3 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//             <div className="py-6">
//               <a
//                 href="#"
//                 className="-mx-3 block rounded-full px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:text-green-500"
//               >
//                 Log in
//               </a>
//             </div>
//           </div>
//         </div>
//       </Dialog.Panel>
//     </Dialog>
//   </header>
// <header className="bg-indigo-600">
//   <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
//     <div className="flex lg:flex-1">
//       <a href="#" className="-m-1.5 p-1.5">
//         <span className="sr-only">Your Company</span>
//         <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
//       </a>
//     </div>
//     <div className="flex lg:hidden">
//       <button
//         type="button"
//         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-300"
//         onClick={() => setMobileMenuOpen(true)}
//       >
//         <span className="sr-only">Open main menu</span>
//         <Bars3Icon_OL className="h-6 w-6" aria-hidden="true" />
//       </button>
//     </div>
//     <div className="hidden lg:flex lg:gap-x-12">
//       {navigation.map((item) => (
//         <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
//           {item.name}
//         </a>
//       ))}
//     </div>
//     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//       <a href="#" className="text-sm font-semibold leading-6 text-white">
//         Log in <span aria-hidden="true">&rarr;</span>
//       </a>
//     </div>
//   </nav>
//   <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//     <div className="fixed inset-0 z-10" />
//     <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//       <div className="flex items-center justify-between">
//         <a href="#" className="-m-1.5 p-1.5">
//           <span className="sr-only">Your Company</span>
//           <img
//             className="h-8 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt=""
//           />
//         </a>
//         <button
//           type="button"
//           className="-m-2.5 rounded-md p-2.5 text-gray-700"
//           onClick={() => setMobileMenuOpen(false)}
//         >
//           <span className="sr-only">Close menu</span>
//           <XMarkIcon_OL className="h-6 w-6" aria-hidden="true" />
//         </button>
//       </div>
//       <div className="mt-6 flow-root">
//         <div className="-my-6 divide-y divide-gray-500/10">
//           <div className="space-y-2 py-6">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div className="py-6">
//             <a
//               href="#"
//               className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//             >
//               Log in
//             </a>
//           </div>
//         </div>
//       </div>
//     </Dialog.Panel>
//   </Dialog>
// </header>
//)
//}
