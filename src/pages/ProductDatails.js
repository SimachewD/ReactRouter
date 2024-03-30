import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ProductDatails() {

    const product = useLoaderData();

  return (
    <div>
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
    return res.json();
  }
