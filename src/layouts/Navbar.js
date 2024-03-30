import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function navbar() {
  return (
  <>
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-white font-semibold">Logo</div>
            <ul class="flex space-x-4">
            <li><NavLink to="/" class="text-white hover:text-gray-300">Home</NavLink></li>
            <li><NavLink to="about" class="text-white hover:text-gray-300">About</NavLink></li>
            <li><NavLink to="products" class="text-white hover:text-gray-300">Products</NavLink></li>
            <li><NavLink to="contact" class="text-white hover:text-gray-300">Contact</NavLink></li>
            </ul>
        </div>
    </nav>

    <main>
      <Outlet />
    </main>
  </>
  )
}
