
import './assets/index.css';
import './assets/whitespace-reset.css';
import { useState } from 'react';
import { mockProducts } from '../mockData/data.js';
import { ProductList } from '../src/components/ProductList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>The Shop!</h1>
      <div className='cart'>
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className='checkout' disabled>Checkout</button>
      </div>

      {/* <ProductList products={ mockProducts }/> */}
    </div>
  )
}


export default App



//   return ce('div', { children: [
//     ce("h1", {}, "The'Shop!"),
//     ce("div", { className: "cart", children: [
//       ce("h2", {}, "Your Cart"),
//       ce("p", {}, "Your cart is empty"),
//       ce("p", {}, "Total: $0"),
//       ce("button", { className: "checkout", disabled: true }, "Checkout")
//     ]})
//   ]}),
//   ProductList({ mockProducts })
// const App = () => {

//   return (
//     <div>
//       <h1>The Shop!</h1>
//       <div className='cart'>
//         <h2>Your Cart</h2>
//         <p>Your cart is empty</p>
//         <p>Total: $0</p>
//         <button className='checkout' disabled>Checkout</button>
//       </div>

//       <ProductList products={mockProducts}/>
//     </div>
//   )
// }