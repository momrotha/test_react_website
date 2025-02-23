import React from 'react'

const RegisterComponent = () => {
  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <img className="mx-auto h-12 w-auto" src="logo.png" alt="User Icon" />
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>
          <form className="space-y-6" method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1">
                <input name="username" type="text" required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input name="email" type="email" autoComplete="email" required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input name="password" type="password" autoComplete="new-password" required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1">
                <input name="confirm_password" type="password" autoComplete="new-password" required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <button type="submit"
                className="flex w-full justify-center rounded-md border border-transparent  bg-green-500 hover:bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2">
                Register Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent
