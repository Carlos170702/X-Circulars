"use server";

import { INSTANCE_API } from "@/api/api";
import { Products, ProductsResponse } from "@/interface/products";

export const getProductsService = async (): Promise<Products[]> => {
  try {
    const res = await INSTANCE_API.get<ProductsResponse>("/getProducts");

    if (res.status !== 200) {
      throw new Error("Failed to fetch products");
    }

    return res.data.result;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};
