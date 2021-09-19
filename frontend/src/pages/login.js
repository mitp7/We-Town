import { LockClosedIcon } from '@heroicons/react/solid'
import logo from "../images/logo1.svg"
import image from "../images/sign_in_image.svg"

export default function Example() {
  return (
    
    <div className="min-h-screen py-12 px-2 sm:px-auto lg:px-auto inset-x-2">
      <div className="border-solid rounded-xl border-grey">
        <div className="float-right">
            <img
              className="right-50 px-20 py-10"
              src={image}
              alt="Workflow"
            />
        </div>
        <div className="max-w-md w-full mx-40 my-20">
          <div>
            <img
              className="h-10 w-auto"
              src={logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-left text-4xl font-inter text-gray-900 my-10">Sign in to your account</h2>
          </div>

          <form className="mt-8 space-y-8" action="#" method="POST">
            <div className="shadow-sm -space-y-px font-sans">
              <div>
                <label htmlFor="password" className="">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-4"
                />
              </div>
              <div>
                <label htmlFor="password" className="">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-4"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Don't have an account?
                </a>
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
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
