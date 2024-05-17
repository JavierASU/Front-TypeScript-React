import { useState } from "react";
import { instance } from "../api/base.api";

export interface ProductInterface {
  Handle: string;
  Title: string;
  Description: string;
  SKU: string;
  Grams: string;
  Stock: string;
  Price: string;
  ComparePrice: string;
  Barcode: string;
  id: number;
  createdAt: Date;
  updatedAt: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const getProducts = async () => {
    const response = await instance.get<ProductInterface[]>("products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setProducts(response.data);
  };

  return { products, getProducts };
};

export interface CreateProductInterface {
  Handle: string;
  Title: string;
  Description: string;
  SKU: string;
  Grams: string;
  Stock: string;
  Price: string;
  ComparePrice: string;
  Barcode: string;
}

export const useCreateProduct = () => {
  const [product, setProduct] = useState<CreateProductInterface>({
    Handle: "",
    Title: "",
    Description: "",
    SKU: "",
    Grams: "",
    Stock: "",
    Price: "",
    ComparePrice: "",
    Barcode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const createProduct = async () => {
    const response = await instance.post<ProductInterface>(
      "products",
      product,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  };

  return { product, handleChange, createProduct };
};

export const useUpdateProduct = (id: number) => {
  const [updatedProduct, setUpdatedProduct] = useState<CreateProductInterface>({
    Handle: "",
    Title: "",
    Description: "",
    SKU: "",
    Grams: "",
    Stock: "",
    Price: "",
    ComparePrice: "",
    Barcode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const updateProduct = async () => {
    const response = await instance.put<ProductInterface>(
      `products/${id}`,
      updatedProduct,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  };

  return { updatedProduct, handleChange, updateProduct, setUpdatedProduct };
};

export const useDeleteProduct = () => {
  const deleteProduct = async (id: number) => {
    await instance.delete(`products/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  return { deleteProduct };
};

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<ProductInterface>();

  const getProduct = async () => {
    const response = await instance.get<ProductInterface>(`products/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setProduct(response.data);
    return response.data;
  };

  return { product, getProduct };
};
