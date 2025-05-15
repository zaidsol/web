"use client";
import React, { useEffect, useState } from 'react';
import Card from '../components/card';

type Product = {
  id: number;
  image: string;       // Default image
  hoverImage: string;  // Hover image
  name: string;
  price: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('');  // To manage sorting

  useEffect(() => {
    fetch('./productlist.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);  // Set both states to initial products
      })
      .catch(err => console.error("Failed to fetch:", err));
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    setSortOrder(order);

    // Sort the products based on the selected filter
    let sortedProducts = [...filteredProducts];

    if (order === 'low-to-high') {
      sortedProducts = sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (order === 'high-to-low') {
      sortedProducts = sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-xl font-semibold mb-4">Total Products: {filteredProducts.length}</h1>

      <div className="flex justify-between items-center mb-6">
        <span>Filter</span>

        {/* You can modify this button to handle other types of filtering */}
        <button className="bg-black text-white px-4 py-2 rounded">!!!</button>

        <select
          className="px-4 py-2 border-2 border-gray-400 rounded"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">- Select -</option>
          <option value="low-to-high">- Low to High -</option>
          <option value="high-to-low">- High to Low -</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image={product.image}        // Default image
            hoverImage={product.hoverImage}  // Hover image
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

