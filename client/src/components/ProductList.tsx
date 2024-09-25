import { Product } from "./Product"

export const ProductList = ({ mockProducts }) => {
    return ( 
        <>
            <div className='product-listing'>
            <h2>Products</h2>
                <ul className='product-list'></ul>
                {mockProducts.map(product => {
                    <Product productInfo={ product } />
                })}
            </div>
        </>
    )
}

{/* <div class="product-listing">
      <h2>Products</h2>
      <ul class="product-list">
        <li class="product">
          <div class="product-details">
            <h3>Amazon Kindle E-reader</h3>
            <p class="price">$79.99</p>
            <p class="quantity">5 left in stock</p>
            <div class="actions product-actions">
              <button class="add-to-cart">Add to Cart</button>
              <button class="edit">Edit</button>
            </div>
            <button class="delete-button"><span>X</span></button>
          </div>
        </li>

        <li class="product">
          <div class="product-details">
            <h3>Apple 10.5-Inch iPad Pro</h3>
            <p class="price">$649.99</p>
            <p class="quantity">2 left in stock</p>
            <div class="actions product-actions">
              <button class="add-to-cart">Add to Cart</button>
              <button class="edit">Edit</button>
            </div>
            <button class="delete-button"><span>X</span></button>
          </div>
        </li>

        <li class="product">
          <div class="product-details">
            <h3>Yamaha Portable Keyboard</h3>
            <p class="price">$155.99</p>
            <p class="quantity">0 left in stock</p>
            <div class="actions product-actions">
              <button class="add-to-cart" disabled>Add to Cart</button>
              <button class="edit">Edit</button>
            </div>
            <button class="delete-button"><span>X</span></button>
          </div>
        </li>
      </ul>
    </div>
    <p>
      <button className="add-product-button">Add A Product</button>
    </p> */}