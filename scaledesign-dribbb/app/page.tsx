'use client'


import { useState, Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

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


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Departments', href: '#', current: true },
  { name: 'Services', href: '#', current: false },
]

const navigationTwo = [
  { name: 'My Items', href: '#', current: true },
  { name: 'Acount', href: '#', current: false },
  { name: '', href: '#', current: false },
]



const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
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
          <Disclosure as="nav" className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                    <a href="#" className="-m-1.5 p-1.5 rounded-full hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60" >
                        <span className="sr-only">Your Company</span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="130" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M72.22 20.02c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.33-5.84-5.81-5.84-2.3 0-4.13.64-5.13 1.22l.73 2.5a7.51 7.51 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zM0 6.67L3.76 22.1c.6 2.52 1.69 3.45 4.82 2.82l2.03-8.23c.51-2.05.86-3.5 1.19-5.59h.05c.24 2.1.57 3.55.99 5.6l1.24 5.7c.43 1.96 1.6 3.2 4.68 2.52l4.82-18.25h-3.9l-1.64 7.89c-.45 2.3-.85 4.1-1.16 6.2h-.05c-.28-2.09-.64-3.81-1.1-6.05l-1.7-8.04H9.97L8.13 14.5c-.51 2.38-1 4.3-1.3 6.33h-.06c-.32-1.9-.74-4.33-1.2-6.63L4.1 6.67H0m30.71 13.35c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.32-5.84-5.8-5.84-2.3 0-4.14.64-5.14 1.22l.73 2.5a7.52 7.52 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zm5.73 4.3V6.68h-3.7v18.25h3.7v-3.88M87.3 6.68v13.46c0 1.86.35 3.16 1.1 3.95.65.7 1.72 1.15 3.01 1.15 1.1 0 2.17-.2 2.68-.4l-.04-2.9c-.38.1-.82.17-1.41.17-1.26 0-1.69-.8-1.69-2.47v-5.15h3.23v-3.5h-3.23V6.67H87.3m-9.57 4.54v13.71h3.82V17.9c0-.38.03-.7.09-1.01.28-1.47 1.4-2.41 3.02-2.41.44 0 .76.04 1.1.1v-3.6a3.68 3.68 0 00-.84-.08c-1.43 0-3.05.92-3.73 2.9h-.1v-2.6h-3.36m-35.43 0v13.72H46v-8.04c0-.38.05-.78.18-1.12.3-.81 1.06-1.76 2.26-1.76 1.5 0 2.21 1.27 2.21 3.1v7.82h3.72v-8.14c0-.36.05-.8.16-1.11A2.35 2.35 0 0156.78 14c1.52 0 2.25 1.25 2.25 3.4v7.52h3.73v-8.08c0-4.25-2.17-5.94-4.6-5.94-1.09 0-1.94.27-2.71.74-.65.4-1.24.97-1.74 1.71h-.06a3.9 3.9 0 00-3.77-2.45 4.31 4.31 0 00-4 2.17h-.05v-1.86h-3.54"/><path fill="#F3B53B" d="M114.2 10.6c.74 0 1.34-.39 1.43-.88l.72-8.24c0-.81-.95-1.48-2.15-1.48s-2.15.67-2.15 1.48l.73 8.24c.08.5.69.87 1.42.87m-4.45 2.58c.37-.64.34-1.36-.05-1.68l-6.77-4.74c-.7-.41-1.75.08-2.35 1.12-.6 1.04-.5 2.2.2 2.6l7.5 3.49c.47.17 1.1-.16 1.47-.8m8.9 0c.37.64 1 .97 1.48.8l7.49-3.49c.7-.4.8-1.56.21-2.6-.6-1.04-1.66-1.53-2.36-1.12l-6.77 4.74c-.38.32-.41 1.04-.04 1.68m-4.46 7.7c.74 0 1.34.39 1.43.88l.72 8.24c0 .81-.95 1.48-2.15 1.48s-2.15-.67-2.15-1.48l.73-8.24c.08-.5.69-.87 1.42-.87m4.45-2.57c.37-.64 1-.97 1.48-.8l7.49 3.49c.7.4.8 1.57.21 2.6-.6 1.04-1.66 1.53-2.36 1.12l-6.77-4.74c-.38-.32-.41-1.04-.04-1.67m-8.91 0c.37.63.34 1.35-.05 1.67l-6.77 4.74c-.7.4-1.75-.08-2.35-1.12-.6-1.04-.5-2.2.2-2.6l7.5-3.49c.47-.17 1.1.16 1.47.8M129.2 24h.07c.08 0 .15-.03.15-.1 0-.06-.04-.1-.14-.1h-.08v.2zm0 .36h-.16v-.65l.25-.02c.13 0 .18.02.23.05.04.03.07.08.07.14 0 .08-.06.13-.14.16.06.02.1.08.12.16.02.1.03.14.05.16h-.16c-.02-.02-.04-.08-.06-.15-.01-.07-.05-.1-.13-.1h-.08v.26zm.1-.86c-.3 0-.51.24-.51.53 0 .29.22.52.51.52.29 0 .5-.23.5-.52a.5.5 0 00-.5-.53zm0-.13c.38 0 .67.29.67.66 0 .37-.3.66-.67.66a.66.66 0 01-.68-.66c0-.37.3-.66.68-.66z"/></g></svg></a>
                  
                      <div className="hidden lg:ml-10 lg:block">
                        <div className="flex space-x-6">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-white hover:bg-indigo-900 hover:bg-opacity-75',
                                'rounded-full py-2 px-3 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
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
                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
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
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
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
                          <HeartIcon className="h-6 w-6" aria-hidden="true" />
                          ReOrder
                          My Item
                        </button>
                        <button
                          type="button"
                          className=" relative flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 flex-shrink-0">
                          <div>
                            <Menu.Button className="relative flex rounded-full bg-indigo-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> 
                              <ShoppingCartIcon>$0.00</ShoppingCartIcon>
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
                        </Menu>
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
                            ? 'bg-indigo-700 text-white'
                            : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                          'block rounded-full py-2 px-3 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-indigo-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">{user.name}</div>
                        <div className="text-sm font-medium text-indigo-300">{user.email}</div>
                      </div>
                      <button
                        type="button"
                        className="relative ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
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
         
         
         
         
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">{/* Your content */} content</div>
        </main>
      </div>
    </>
  )
}









    {/* <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="32"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M72.22 20.02c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.33-5.84-5.81-5.84-2.3 0-4.13.64-5.13 1.22l.73 2.5a7.51 7.51 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zM0 6.67L3.76 22.1c.6 2.52 1.69 3.45 4.82 2.82l2.03-8.23c.51-2.05.86-3.5 1.19-5.59h.05c.24 2.1.57 3.55.99 5.6l1.24 5.7c.43 1.96 1.6 3.2 4.68 2.52l4.82-18.25h-3.9l-1.64 7.89c-.45 2.3-.85 4.1-1.16 6.2h-.05c-.28-2.09-.64-3.81-1.1-6.05l-1.7-8.04H9.97L8.13 14.5c-.51 2.38-1 4.3-1.3 6.33h-.06c-.32-1.9-.74-4.33-1.2-6.63L4.1 6.67H0m30.71 13.35c0 .26-.02.52-.1.74a2.6 2.6 0 01-2.5 1.76c-1.02 0-1.83-.58-1.83-1.82 0-1.88 2.07-2.4 4.43-2.39v1.71zm3.7-3.28c0-3.1-1.32-5.84-5.8-5.84-2.3 0-4.14.64-5.14 1.22l.73 2.5a7.52 7.52 0 013.74-1.05c2.28 0 2.65 1.29 2.65 2.11v.2c-4.96 0-8.1 1.71-8.1 5.21 0 2.14 1.6 4.14 4.38 4.14 1.7 0 3.13-.68 3.99-1.77h.08s.57 2.37 3.7 1.46c-.17-.99-.23-2.04-.23-3.3v-4.88zm5.73 4.3V6.68h-3.7v18.25h3.7v-3.88M87.3 6.68v13.46c0 1.86.35 3.16 1.1 3.95.65.7 1.72 1.15 3.01 1.15 1.1 0 2.17-.2 2.68-.4l-.04-2.9c-.38.1-.82.17-1.41.17-1.26 0-1.69-.8-1.69-2.47v-5.15h3.23v-3.5h-3.23V6.67H87.3m-9.57 4.54v13.71h3.82V17.9c0-.38.03-.7.09-1.01.28-1.47 1.4-2.41 3.02-2.41.44 0 .76.04 1.1.1v-3.6a3.68 3.68 0 00-.84-.08c-1.43 0-3.05.92-3.73 2.9h-.1v-2.6h-3.36m-35.43 0v13.72H46v-8.04c0-.38.05-.78.18-1.12.3-.81 1.06-1.76 2.26-1.76 1.5 0 2.21 1.27 2.21 3.1v7.82h3.72v-8.14c0-.36.05-.8.16-1.11A2.35 2.35 0 0156.78 14c1.52 0 2.25 1.25 2.25 3.4v7.52h3.73v-8.08c0-4.25-2.17-5.94-4.6-5.94-1.09 0-1.94.27-2.71.74-.65.4-1.24.97-1.74 1.71h-.06a3.9 3.9 0 00-3.77-2.45 4.31 4.31 0 00-4 2.17h-.05v-1.86h-3.54"/><path fill="#F3B53B" d="M114.2 10.6c.74 0 1.34-.39 1.43-.88l.72-8.24c0-.81-.95-1.48-2.15-1.48s-2.15.67-2.15 1.48l.73 8.24c.08.5.69.87 1.42.87m-4.45 2.58c.37-.64.34-1.36-.05-1.68l-6.77-4.74c-.7-.41-1.75.08-2.35 1.12-.6 1.04-.5 2.2.2 2.6l7.5 3.49c.47.17 1.1-.16 1.47-.8m8.9 0c.37.64 1 .97 1.48.8l7.49-3.49c.7-.4.8-1.56.21-2.6-.6-1.04-1.66-1.53-2.36-1.12l-6.77 4.74c-.38.32-.41 1.04-.04 1.68m-4.46 7.7c.74 0 1.34.39 1.43.88l.72 8.24c0 .81-.95 1.48-2.15 1.48s-2.15-.67-2.15-1.48l.73-8.24c.08-.5.69-.87 1.42-.87m4.45-2.57c.37-.64 1-.97 1.48-.8l7.49 3.49c.7.4.8 1.57.21 2.6-.6 1.04-1.66 1.53-2.36 1.12l-6.77-4.74c-.38-.32-.41-1.04-.04-1.67m-8.91 0c.37.63.34 1.35-.05 1.67l-6.77 4.74c-.7.4-1.75-.08-2.35-1.12-.6-1.04-.5-2.2.2-2.6l7.5-3.49c.47-.17 1.1.16 1.47.8M129.2 24h.07c.08 0 .15-.03.15-.1 0-.06-.04-.1-.14-.1h-.08v.2zm0 .36h-.16v-.65l.25-.02c.13 0 .18.02.23.05.04.03.07.08.07.14 0 .08-.06.13-.14.16.06.02.1.08.12.16.02.1.03.14.05.16h-.16c-.02-.02-.04-.08-.06-.15-.01-.07-.05-.1-.13-.1h-.08v.26zm.1-.86c-.3 0-.51.24-.51.53 0 .29.22.52.51.52.29 0 .5-.23.5-.52a.5.5 0 00-.5-.53zm0-.13c.38 0 .67.29.67.66 0 .37-.3.66-.67.66a.66.66 0 01-.68-.66c0-.37.3-.66.68-.66z"/></g></svg>
                        <img
                          className="block h-8 w-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                          alt="Your Company"
                        />
                      </div> */}

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
  //           <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
  //             <XMarkIcon className="h-6 w-6" aria-hidden="true" />
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
    //         <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
    //           <XMarkIcon className="h-6 w-6" aria-hidden="true" />
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
