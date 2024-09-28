import { Product } from "./Product"
import { ProductSchema } from "../services/products"
import { ProductListProps } from "../types"

export const ProductList: React.FC<ProductListProps> = ({ products, onDeleteProduct, onEditProduct, onAddToCart }) => {

  return ( 
      <div className='product-listing'>
        <h2>Products</h2>
        <ul className='product-list'>
          {products.map((product: ProductSchema) => {
            return <Product
            key={ product._id }
            _id={ product._id }
            title={ product.title }
            quantity={ product.quantity }
            price={ product.price } 
            onDeleteProduct={onDeleteProduct}
            onEditProduct={onEditProduct}
            onAddToCart={onAddToCart}/>
          })}
        </ul>
      </div>
    )
}
