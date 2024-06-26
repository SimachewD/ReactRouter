import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function Products() {

  const products = useLoaderData();

  return (
    <div className=" flex">
      <div className=" w-1/2">
      {products && products.map(product=>(
        <div className="text-center p-5 mb-5 shadow-md ml-10 mt-10 bg-sky-950 rounded-md" key={product.id}>
          <Link to={product.id}>
            <p className="font-bold text-xl">{product.name}</p>
            <p className=" font-semibold text-sm">{product.category}</p>
          </Link>
        </div>  
      ))}
      </div>
      <div className=" text-center w-1/2">
        <Outlet />
      </div>
    </div>
  )
}

export const productsLoader = async()=>{
  const res = await fetch('http://localhost:4000/products');

  if (!res.ok) {
    throw Error('Unable to fetch products');
  }

  return res.json();
}