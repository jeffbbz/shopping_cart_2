import { Product } from "./Product"

interface Product {
  _id: string,
  title: string,
  quantity: number,
  price: number
}

export const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
    return ( 
      <div className='product-listing'>
        <h2>Products</h2>
        <ul className='product-list'>
          {products.map((product) => {
            return <Product
            key={ product._id }
            _id={ product._id }
            title={ product.title }
            quantity={ product.quantity }
            price={ product.price } 
            onDeleteProduct={onDeleteProduct}
            onEditProduct={onEditProduct}/>
          })}
        </ul>
      </div>
    )
}
