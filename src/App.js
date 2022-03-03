import React, { useEffect, useState } from 'react'
import TopMenu from './components/TopMenu';
import useFetch from './hooks/useFetch';
import { urlApiProducts } from "./utils/constants"
import Products from './components/Products';
import { STORAGE_PRODUCTS_CART } from './utils/constants';
import { toast, ToastContainer } from 'react-toastify'

function App() {
  const products = useFetch(urlApiProducts, null)
  const [productsCart, setProductsCart] = useState([])

  useEffect(() => {
    getProductsCart()
  }, [])
  

  const getProductsCart = () => {
    const idsProductsSplit = localStorage.getItem(STORAGE_PRODUCTS_CART)
    if (idsProductsSplit) {
      const idsProducts = idsProductsSplit.split(',')
      setProductsCart(idsProducts)
    } else {
      setProductsCart([])
    }
  }

  const addProductCart = (id, name) => {
    const idsProducts = productsCart
    idsProducts.push(id)
    setProductsCart(idsProducts)
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart)
    getProductsCart()

    toast.success(`${name} añadido al carrito correctamente`)
  }

  return (
    <div>
      <TopMenu productsCart={productsCart} getProductsCart={getProductsCart} products={products} />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer position='bottom-left' autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} draggable pauseOnHover={false} />
    </div>
  );
}

export default App;
