import axios from "axios";
import { z } from "zod";

const productSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number()
});

const productSchemaArray = z.array(productSchema);
export type Product = z.infer<typeof productSchema>;

export const getProducts = async () => {
  const { data } = await axios.get<Product[]>("/api/products");
  return productSchemaArray.parse(data);
}

export const postProducts = async (newProduct: Product) => {
  const {data} = await axios.post('/api/products', newProduct);
  return productSchema.parse(data);
}

export const deleteProduct = async (productId: String) => {
  await axios.delete(`/api/products/${productId}`);
}

export const editProduct = async (productId: String) => {
  const { data } = await axios.put(`/api/products/${productId}`);
  return productSchemaArray.parse(data);
}