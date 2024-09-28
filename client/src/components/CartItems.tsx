import { CartItemsProps } from "../types"

export const CartItems: React.FC<CartItemsProps> = ({title, price, quantity}) => {
  
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>$ {price}</td>
    </tr>
  )
}


