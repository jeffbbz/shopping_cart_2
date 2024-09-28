import { CartItems } from "./CartItems.tsx"
import { ShoppingCartProps } from "../types/index.ts";


const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, onCheckout }) => {
  let grandTotal = 0;
  
  return (
    <header>
      <h1>The Shop!</h1>
      <div className='cart'>
        <h2>Your Cart</h2>
        <table className="cart-items">
          {cartItems.length ? 
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead> : null}
          <tbody>
            {cartItems.length ? 
            <>
              { cartItems.map(item => {
                const itemTotal = item.price * item.quantity;
                grandTotal += itemTotal;
                return <CartItems
                  key={item._id}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.price}
                /> 
              })}
            </>
              : <tr><td>Your Cart is Empty!</td></tr>}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="total">Total: ${grandTotal}</td>
            </tr>
          </tfoot>
        </table>
        <div className="checkout-button">
          {cartItems.length ? <button className="checkout" onClick={(e) => {
            e.preventDefault();
            onCheckout();
          }}>Checkout</button> : <button className="checkout" disabled>Checkout</button>}
        </div>
      </div>
    </header>
  )
}

export default ShoppingCart
