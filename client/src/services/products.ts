import axios from "axios";
import { z } from "zod";

const productSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number()
});

const cartItemSchema = z.object({
  item: productSchema,
  product: productSchema,
})

const productSchemaArray = z.array(productSchema);
export type ProductSchema = z.infer<typeof productSchema>;

interface productId {
  productId: string;
}

export const getProducts = async () => {
  const { data } = await axios.get<ProductSchema[]>("/api/products");
  return productSchemaArray.parse(data);
}

export const getCartItems = async () => {
  const { data } = await axios.get("/api/cart");
  return productSchemaArray.parse(data);
}

export const postProducts = async (newProduct: ProductSchema) => {
  const { data } = await axios.post('/api/products', newProduct);
  return productSchema.parse(data);
}

export const deleteProduct = async (productId: String) => {
  await axios.delete(`/api/products/${productId}`);
}

export const editProduct = async (editedProduct: ProductSchema) => {
  const { data } = await axios.put(`/api/products/${editedProduct._id}`, editedProduct);
  return productSchema.parse(data);
}

export const addToCart = async (productId: productId) => {
  const { data } = await axios.post('/api/add-to-cart', productId);
  return cartItemSchema.parse(data)
}

export const checkout = async () => {
  await axios.post("/api/checkout");
}

