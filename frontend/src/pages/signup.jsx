import { LockClosedIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { useState } from 'react'
import logo from "../images/logo1.svg"
import image from "../images/sign_up_image.svg"
export default function SignUp(props) {
    const [user, setUser] = useState({})

    const signUp = async () => {
        setTimeout(() => {
            props.history.push('/signin')
          },1000)
    }

    return (
    <div className="min-h-screen min-w-screen px-30 py-20 sm:px-auto lg:px-auto inset-x-2">
        <div className="border-solid rounded-xl border-grey">
          <div className="float-right">
              <img
                className="px-10 py-20 object-scale-down"
                src={image}
                alt="Signup"
              />
          </div>
          <div className="max-w-md w-full mx-20 my-5">
            <div>
              <img
                className="h-10 w-auto"
                src={logo}
                alt="Logo"
              />
              <h2 className="mt-6 text-left text-4xl font-inter text-gray-900 my-5">Create an account</h2>
            </div>
  
            <form className="mt-8 space-y-5">
                <div className=" overflow-hidden sm:rounded-md">
                    <div className="px-40 py-20 bg-white sm:p-1">
                        <div className="grid grid-cols-8 gap-3">
                            <div className="col-span-5 sm:col-span-4">
                            <label htmlFor="first-name" className="block text-sm font-sans text-gray-700">
                                First name
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                onChange={(e) => setUser({...user, firstName: e.target.value })}
                                autoComplete="given-name"
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
                            />
                            </div>

                            <div className="col-span-5 sm:col-span-4">
                            <label htmlFor="last-name" className="block text-sm font-sans text-gray-700">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                onChange={(e) => setUser({...user, lastName: e.target.value })}
                                autoComplete="family-name"
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
                            />
                            </div>

                            <div className="col-span-8">
                            <label htmlFor="email-address" className="block text-sm font-sans text-gray-700">
                                Email address
                            </label>
                            <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                onChange={(e) => setUser({...user, email: e.target.value })}
                                autoComplete="email"
                                className="appearance-none rounded-lg relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-1"
                            />
                            </div>
                            <div className="col-span-8">
                            <label htmlFor="password" className="block text-sm font-sans text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={(e) => setUser({...user, password: e.target.value })}
                                autoComplete="password"
                                className="appearance-none rounded-lg relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-1"
                            />
                            </div>
                            <div className="col-span-8">
                            <label htmlFor="street-address" className="block text-sm font-sans text-gray-700">
                                Street address
                            </label>
                            <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                onChange={(e) => setUser({...user, address: e.target.value })}
                                autoComplete="street-address"
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-1"
                            />
                            </div>

                            <div className="col-span-2 sm:col-span-4 lg:col-span-3">
                            <label htmlFor="city" className="block text-sm font-sans text-gray-700">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                onChange={(e) => setUser({...user, city: e.target.value })}
                                id="city"
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-1"
                            />
                            </div>

                            <div className="col-span-4 sm:col-span-4 lg:col-span-1">
                            <label htmlFor="state" className="block text-sm font-sans text-gray-700">
                                Province
                            </label>
                            <input
                                onChange={(e) => setUser({...user, province: e.target.value })}
                                type="text"
                                name="state"
                                id="state" 
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-1"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <label htmlFor="country" className="block text-sm pl-2 font-sans text-gray-700">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                onChange={(e) => setUser({...user, country: e.target.value })}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>USA</option>
                                <option>Canada</option>
                            </select>
                            </div>

                            <div className="col-span-8 sm:col-span-4 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-sans text-gray-700">
                                ZIP / Postal
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setUser({...user, code: e.target.value })}
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-1"
                            />
                            </div>
                        </div>
                    </div>
                </div>
              <div>
                <button
                    onClick={() => signUp}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-800 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-pink-500 group-hover:text-pink-400" aria-hidden="true" />
                  </span>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
