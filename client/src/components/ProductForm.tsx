import React from "react";

const ProductForm = ({ onAddProduct }) => {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  console.log(title, price, quantity)

  return (
    <div className="add-form">
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        onAddProduct({title, price, quantity});
      }}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name={String(price)}
            min="0"
            step="0.01"
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name={String(quantity)}
            min="0"
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm

