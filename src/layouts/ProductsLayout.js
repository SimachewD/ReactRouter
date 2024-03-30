import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProductsLayout() {
  return (
    <div>
        <p className='font-bold m-8 text-3xl'>Products</p> 
        <main className=''>
            <Outlet />
        </main>
    </div>
  )
}
