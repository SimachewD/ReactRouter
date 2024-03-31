import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products, { productsLoader } from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDatails, { productDetailsLoader } from "./pages/ProductDatails";
import ProductError from "./pages/ProductError";


//layouts
import Navbar from "./layouts/Navbar";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/ReactRouter" element = {<Navbar />}>

        <Route index element = {<Home />} />

        <Route path="home" element = {<Home />} />

        <Route path="about" element = {<About />} />
          
        <Route path="products" element = {<Products />} loader={productsLoader} errorElement={<ProductError />} >
            <Route path=":id" element = {<ProductDatails />} loader = {productDetailsLoader} />       
        </Route>

        <Route path="contact" element = {<Contact />} />

        <Route path="*" element = {<NotFound />} />
          
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
