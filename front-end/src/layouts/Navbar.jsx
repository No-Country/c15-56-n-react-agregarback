import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link className="flex flex-shrink-0 items-center" to={'/'}>
                  <p className='hereMeNowNav'>HereMe<span className='nowNav'>Now</span>!</p>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                      <NavLink to={'/'}
                        className={'rounded-md px-3 py-2 navLinkItem'}
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={'/employments'}
                        className={'rounded-md px-3 py-2 navLinkItem'}
                      >
                        Employments
                      </NavLink>
                      <NavLink
                        to={'/devs'}
                        className={'rounded-md px-3 py-2 navLinkItem'}
                      >
                        Devs
                      </NavLink>
                  </div>
                </div>
              </div>
              <div className=" button-log-reg absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <NavLink to={'/login'} className={'bg-blue-500 text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mr-2'
                        }>Log In</NavLink>
                <NavLink to={'/register'} className={'bg-green-500 text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                        }>Sign Up</NavLink>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className={'nav-col-hamb bg-gray-900 text-white text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}
                >
                  <NavLink
                        to={'/'}
                        className={'bg-gray-900 text-white text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={'/employments'}
                        className={'bg-gray-900 text-white text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                      >
                        Employments
                      </NavLink>
                      <NavLink
                        to={'/devs'}
                        className={'bg-gray-900 text-white text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                      >
                        Devs
                      </NavLink>
                      <NavLink
                        to={'/register'}
                        className={'bg-gray-900 text-white text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                      >
                        Register
                      </NavLink>
                      <NavLink
                        to={'/login'}
                        className={'bg-gray-900 text-white text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                      >
                        Login
                      </NavLink>
                </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}