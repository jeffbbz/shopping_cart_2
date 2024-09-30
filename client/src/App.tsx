import './assets/whitespace-reset.css';
import './assets/index.css';
import { ErrorBoundary } from 'react-error-boundary';
import { ZodError } from 'zod';
import React from 'react';
import { ProductList } from '../src/components/ProductList';
import ShoppingCart from '../src/components/ShoppingCart';
import ProductAddForm from './components/ProductAddForm';
import { ErrorPage } from './components/ErrorPage';
import { deleteProduct, ProductSchema, getProducts, postProducts, editProduct, addToCart, getCartItems, checkout } from './services/products';
import { handleDeleteProduct, handleEditProduct, handleAddToCart } from './types';


function App() {
  const [products, setProducts] = React.useState<ProductSchema[]>([]);
  const [errorState, setErrorState] = React.useState(false);
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<ProductSchema[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log(data)
        setProducts(data);
      } catch (error) {
        if (error instanceof ZodError) {
          console.error("Zod Error!!!")
        }
        setErrorState(true);
        console.error(error);
      }
    }
    fetchProducts();
  }, []) // Never Update This After Mount!

  React.useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const prevCartItems: ProductSchema[] = await getCartItems();
        // Change this type later
        setCartItems(prevCartItems);
      } catch (error) {
        if (error instanceof ZodError) {
          console.error("Zod Error!!!")
        }
        setErrorState(true);
        console.error(error);
      }
    }
    fetchCartItems();
  }, [])


  const handleAddProduct = async ({_id, title, price, quantity}: ProductSchema) => {
    try{
      const data = await postProducts({_id, title, price, quantity});
      setProducts((prevState) => prevState.concat(data));
      setShowAddForm(false);
    } catch(error) {
      if (error instanceof ZodError) {
        console.error("Zod Error!!!")
      }
      setErrorState(true);
      console.error(error)
    }
  }

  const handleDeleteProduct: handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id)
      setProducts((prevState) => prevState.filter(product  => {
        return product._id !== id
      }))
    } catch(error) {
      if (error instanceof ZodError) {
        console.error("Zod Error!!!")
      }
      setErrorState(true);
      console.error(error)
    }
  }

  const handleEditProduct: handleEditProduct = async (editedProduct) => {
    try {
      const data = await editProduct(editedProduct)
      const updatedProducts = products.map(product => {
        if (product._id === data._id) {
          return data
        } else {
          return product
        }
      })

      setProducts(updatedProducts)
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Zod Error!!!")
      }
      setErrorState(true);
      console.error(error)
    }
  }

  const handleCancelAddProduct = () => {
    setShowAddForm(false);
  }

  const handleAddToCart: handleAddToCart = async (id) => {
    try{
      const { item, product } = await addToCart({productId: id});
      
      const updatedProducts = products.map(prod => {
        if (prod._id === product._id) {
          return product
        } else {
          return prod
        }
      })
      setProducts(updatedProducts)
      console.log(cartItems)
      if (cartItems.length !== 0) {
        let shouldAdd;
        const updatedCartItems = cartItems.map(prod => {
          if (prod._id === item._id) {
            shouldAdd = true;
            return item;
          } else {
            return prod;
          }
        })

        setCartItems(updatedCartItems)
        if (!shouldAdd) {
          setCartItems(cartItems.concat(item))
        }

      } else {
        setCartItems(cartItems.concat(item))
      }

    } catch(error) {
      if (error instanceof ZodError) {
        console.error("Zod Error!!!")
      }
      setErrorState(true);
      console.error(error)
    }
  }

  const handleCheckout = async () => {
    try {
      await checkout();
      setCartItems([]);
    } catch(error) {
      if (error instanceof ZodError) {
        console.error("Zod Error!!!")
      }
      setErrorState(true);
      console.error(error)
    }
  }

  if (errorState) {
    return <ErrorPage />
  }

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <div id='app'>
        <ShoppingCart cartItems={cartItems} onCheckout={handleCheckout}/>
        <main>
          <ProductList 
            products={products} 
            onDeleteProduct={handleDeleteProduct} 
            onEditProduct={handleEditProduct} 
            onAddToCart={handleAddToCart}/>
          {showAddForm ? <ProductAddForm onAddProduct={handleAddProduct} onCancelAddProduct={handleCancelAddProduct}/> 
          : <button 
              className="add-product-button" 
              onClick={() => setShowAddForm(!showAddForm)}>Add A Product
            </button>}
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App

