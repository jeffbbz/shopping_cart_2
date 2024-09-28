import { ProductSchema } from "../services/products";

export type handleDeleteProduct = (id: String) => Promise<void>
export type handleEditProduct = (editedProduct: ProductSchema) => Promise<void>
export type handleAddToCart = (id: string) => Promise<void>

export interface ProductListProps {
  products: ProductSchema[],
  onDeleteProduct: handleDeleteProduct, 
  onEditProduct: handleEditProduct, 
  onAddToCart: handleAddToCart,
}

export interface ShoppingCartProps {
  cartItems: ProductSchema[];
  onCheckout: () => void;
}

export type CartItemsProps = Omit<ProductSchema, '_id'>;