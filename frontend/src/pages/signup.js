import { LockClosedIcon } from '@heroicons/react/solid'
import logo from "../images/logo1.svg"
import image from "../images/sign_up_image.svg"
export default function SignUp() {
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
  
            <form className="mt-8 space-y-5" action="#" method="POST">
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
                                autoComplete="email"
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
                                id="city"
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-1"
                            />
                            </div>

                            <div className="col-span-4 sm:col-span-4 lg:col-span-1">
                            <label htmlFor="state" className="block text-sm font-sans text-gray-700">
                                Province
                            </label>
                            <input
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
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>USA</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                            </div>

                            <div className="col-span-8 sm:col-span-4 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-sans text-gray-700">
                                ZIP / Postal
                            </label>
                            <input
                                type="text"
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
                  type="submit"
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
