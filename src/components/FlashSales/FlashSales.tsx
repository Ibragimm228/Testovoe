import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../../data/products';
import Timer from './Timer';

const FlashSales = () => {
  const [currentProductPage, setCurrentProductPage] = useState(0);

  const nextProductPage = () => {
    setCurrentProductPage((prev) => Math.min(prev + 1, Math.ceil(products.length / 4) - 1));
  };

  const prevProductPage = () => {
    setCurrentProductPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="container mx-auto px-4 mt-16">
      {/* Header with Timer */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-red-500 font-semibold mb-2">Today's</div>
          <h2 className="text-3xl font-bold">Flash Sales</h2>
        </div>
        <div className="flex gap-4 items-center">
          <Timer />
          <div className="flex gap-2">
            <button
              onClick={prevProductPage}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              disabled={currentProductPage === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProductPage}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              disabled={currentProductPage === Math.ceil(products.length / 4) - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products
          .slice(currentProductPage * 4, (currentProductPage + 1) * 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;