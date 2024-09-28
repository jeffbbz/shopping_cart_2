import React from "react";

export const ProductEditForm = ({onEditProduct, onCancelEditProduct, id, title, price, quantity}) => {
  const [newTitle, setNewTitle] = React.useState(title);
  const [newPrice, setNewPrice] = React.useState(price);
  const [newQuantity, setNewQuantity] = React.useState(quantity);
  
  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        const editedProduct = {
          _id: id, 
          title: newTitle, 
          price: newPrice, 
          quantity: newQuantity
        }

        onEditProduct(editedProduct);
        onCancelEditProduct();
      }}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            aria-label="Product Name"
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
  
        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={newPrice}
            aria-label="Product Price"
            onChange={(e) => setNewPrice(Number(e.target.value))}
          />
        </div>
  
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={newQuantity}
            aria-label="Product Quantity"
            onChange={(e) => setNewQuantity(Number(e.target.value))}
          />
        </div>
  
        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={() => onCancelEditProduct()}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
