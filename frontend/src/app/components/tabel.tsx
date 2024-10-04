"use client";
import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios.config";

interface Product {
  id: number;
  brand: string;
  model: string;
  screen_size: string;
  color: string;
  harddisk: string;
  cpu: string;
  ram: string;
  OS: string;
  special_features: string;
  graphics: string;
  graphics_coprocessor: string;
  cpu_speed: string;
  rating: string;
  price: string;
}

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance().get("/products");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Brand</th>
              <th className="border px-4 py-2">Model</th>
              <th className="border px-4 py-2">Screen Size</th>
              <th className="border px-4 py-2">Color</th>
              <th className="border px-4 py-2">Harddisk</th>
              <th className="border px-4 py-2">CPU</th>
              <th className="border px-4 py-2">RAM</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.id}</td>
                <td className="border px-4 py-2">{product.brand}</td>
                <td className="border px-4 py-2">{product.model}</td>
                <td className="border px-4 py-2">{product.screen_size}</td>
                <td className="border px-4 py-2">{product.color}</td>
                <td className="border px-4 py-2">{product.harddisk}</td>
                <td className="border px-4 py-2">{product.cpu}</td>
                <td className="border px-4 py-2">{product.ram}</td>
                <td className="border px-4 py-2">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductTable;
