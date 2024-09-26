import './assets/whitespace-reset.css';
import './assets/index.css';

import React from 'react';
import { ProductList } from '../src/components/ProductList';
import ShoppingCart from '../src/components/ShoppingCart';
import { mockProducts } from '../mockData/data.js';
import ProductForm from './components/ProductForm';
import axios from "axios";

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        return data
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, [])// this is no bueno 
  // No i think this is okay. he is putting data here
  // oh right
  // but isn't products an array?  I thought he said no objects -> hash or arrays
  // i ate a little ice cream for lunch and now my stomach is not happy 
// lol
// i hope you were listening cause i was away lol
// haha sort of
  const handleAddProduct = () => {

  }

  return (
    <div id='app'>
      <ShoppingCart />
      <main>
        <ProductList products={mockProducts}/>
        <ProductForm onAddProduct={handleAddProduct}/>
      </main>
    </div>
  )
}

export default App

