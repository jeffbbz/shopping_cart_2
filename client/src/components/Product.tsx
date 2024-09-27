import React from "react";
import { Product as ProductType } from "../services/products";
import { ProductEditForm } from "./ProductEditForm";

export const Product = ({_id, title, price, quantity, onDeleteProduct, onEditProduct }: ProductType) => {
  const [showEdit, setShowEdit] = React.useState(false);


  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={(e) => {
            e.preventDefault();
            setShowEdit(!showEdit);
          }}>Edit</button>
        </div>
        { showEdit ? <ProductEditForm /> : null}
        <button className="delete-button" onClick={(e) => {
          e.preventDefault();
          onDeleteProduct(_id)
        }}>
          <span>X</span>
        </button>
      </div>
    </li>
  )
}

