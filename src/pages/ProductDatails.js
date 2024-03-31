import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ProductDatails() {

    const product = useLoaderData();

  return (
    <div className=' bg-sky-800 rounded-md shadow-md my-10 py-10 mx-10 mb-10 h-2/3'>
        <h1 className=' text-2xl font-bold mb-10'>Product Details:  {product&&product.name}</h1>
        <h1 className=' text-md'>Name: {product&&product.name}</h1>
        <h1 className=' text-md'>Category: {product&&product.category}</h1>
        <h1 className=' text-md'>Price: {product&&product.price}</h1>
        <h1 className=' text-md'>Stock: {product&&product.stock}</h1>
    </div>
  )
}

export const productDetailsLoader = async({ params })=>{
    const { id } = params;
    const res = await fetch('http://localhost:4000/products/'+ id);
    if (res.ok) {
      return res.json();
    }
    throw Error('Product not found');
  }
