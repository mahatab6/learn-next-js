import Link from 'next/link'
import React from 'react'

export default function Notfound404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link href='/'>
      <p className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go Back Home</p>
      </Link>
    </div>
  )
}
