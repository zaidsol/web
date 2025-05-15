"use client";
import React, { useEffect, useState } from 'react';
import Card from '../components/card';

type Product = {
  id: number;
  image: string;
  hoverImage: string;
  name: string;
  price: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('./productlist.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch:', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-center text-xl font-semibold mb-4">
        Total Products: {products.length}
      </h1>

      <div className="flex justify-between items-center mb-6">
        <span>Filter</span>

        <button className="bg-black text-white px-4 py-2 rounded">!!!</button>

        <select className="px-4 py-2 border-2 border-gray-400 rounded">
          <option value="">- Low to High -</option>
          <option value="">- Select -</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-0">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image={product.image}
            hoverImage={product.hoverImage}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}


