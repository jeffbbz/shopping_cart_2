import './assets/whitespace-reset.css';
import './assets/index.css';

import React from 'react';
import { ProductList } from '../src/components/ProductList';
import ShoppingCart from '../src/components/ShoppingCart';
import ProductForm from './components/ProductForm';
import axios from "axios";

interface NewProduct {
  title: string,
  price: number,
  quantity: number
}

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, [products.length])


  const handleAddProduct = async ({title, price, quantity}: NewProduct) => {
    try{
      const {data} = await axios.post('/api/products', {title, price, quantity});
      // console.log(data);
      setProducts((prevState) => prevState.concat(data));
      console.log(products)
    } catch(error) {
      console.error(error)
    }
  
  }

  return (
    <div id='app'>
      <ShoppingCart />
      <main>
        <ProductList products={products}/>
        <ProductForm onAddProduct={handleAddProduct}/>
      </main>
    </div>
  )
}

export default App

