import { LockClosedIcon } from '@heroicons/react/solid'
import logo from "../images/logo1.svg"
import image from "../images/sign_in_image.svg"
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
  const [user, setUser] = useState({})

  const signIn = async () => {
    // const res = await axios.post('/api/user/sign-in', { user })
    setTimeout(() => {
      props.history.push('/home')
    },1000)
  }
  return (
    
    <div className="min-h-screen py-20 sm:px-auto lg:px-auto inset-x-2">
      <div className="border-solid rounded-xl border-grey">
        <div className="float-right">
            <img
              className="px-20 py-10 object-scale-down"
              src={image}
              alt="Login"
            />
        </div>
        <div className="max-w-md w-full mx-20 my-10">
          <div>
            <img
              className="h-10 w-auto"
              src={logo}
              alt="Logo"
            />
            <h2 className="mt-6 text-left text-4xl font-inter text-gray-900 my-10">Sign in to your account</h2>
          </div>

          <form className="mt-8 space-y-8">
            <div className="shadow-sm -space-y-px font-sans">
              <div>
                <label htmlFor="password" className="">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setUser({...user, email: e.target.value })}
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
                  onChange={(e) => setUser({...user, password: e.target.value })}
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
                  checked
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Don't have an account?</Link>
              </div>
            </div>
            <div>
              <button
                onClick={() => signIn}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-800 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-pink-500 group-hover:text-pink-400" aria-hidden="true" />
                </span>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
