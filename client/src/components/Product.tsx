import React from "react";
import { Product as ProductType } from "../services/products";
import { ProductEditForm } from "./ProductEditForm";

export const Product = ({_id, title, price, quantity, onDeleteProduct, onEditProduct, onAddToCart }: ProductType) => {
  const [showEditForm, setShowEditForm] = React.useState(false);  
  
  const handleCancelEditProduct = () => {
    setShowEditForm(false);
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          {quantity ? 
          <button className="add-to-cart" onClick={(e) => {
            e.preventDefault();
            onAddToCart(_id);
          }}>Add to Cart</button> : <button className="add-to-cart" disabled>Add to Cart</button>}
          <button className="edit" onClick={(e) => {
            e.preventDefault();
            setShowEditForm(!showEditForm);
          }}>Edit</button>
        </div>
        { showEditForm ? <ProductEditForm 
          onCancelEditProduct={handleCancelEditProduct}
          onEditProduct={onEditProduct}
          id={_id}
          title={title}
          price={price}
          quantity={quantity} /> : null}
        <button className="delete-button" onClick={(e) => {
          e.preventDefault();
          onDeleteProduct(_id);
        }}>
          <span>X</span>
        </button>
      </div>
    </li>
  )
}

