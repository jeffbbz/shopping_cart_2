import './assets/whitespace-reset.css';
import './assets/index.css';
import { ErrorBoundary } from 'react-error-boundary';
import { ZodError } from 'zod';
import React from 'react';
import { ProductList } from '../src/components/ProductList';
import ShoppingCart from '../src/components/ShoppingCart';
import ProductAddForm from './components/ProductAddForm';
import { ErrorPage } from './components/ErrorPage';
import { deleteProduct, Product, getProducts, postProducts, editProduct } from './services/products';

function App() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [errorState, setErrorState] = React.useState(false);
  const [showAddForm, setShowAddForm] = React.useState(false);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
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


  const handleAddProduct = async ({_id, title, price, quantity}: Product) => {
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

  const handleDeleteProduct = async (id: String) => {
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

  const handleEditProduct = async (id: String) => {
    // try {
    //   const data = await editProduct(id)
    //   setProducts((prevState) => prevState.concat(data));
    // } catch (error) {
    //   console.error(error)
    // }
  }

  const handleCancelAddProduct = () => {
    setShowAddForm(false);
  }

  if (errorState) {
    return <ErrorPage />
  }

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <div id='app'>
        <ShoppingCart />
        <main>
          <ProductList products={products} onDeleteProduct={handleDeleteProduct} onEditProduct={handleEditProduct}/>
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

