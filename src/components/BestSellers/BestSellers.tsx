import React from 'react';
import { Heart, Eye } from 'lucide-react';

const bestSellers = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    originalPrice: 360,
    rating: 4.9,
    reviews: 65,
    image: "/third/kurtochka.webp"
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    rating: 4.8,
    reviews: 65,
    image: "/third/sumochka.webp"
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4.7,
    reviews: 65,
    image: "/third/cpu.webp"
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 360,
    rating: 4.9,
    reviews: 65,
    image: "/third/polochka.jpg"
  }
];

const BestSellers = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-lg ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-red-500 font-semibold mb-2">This Month</div>
          <h2 className="text-3xl font-bold">Best Selling Products</h2>
        </div>
        <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition">
          View All
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-lg p-4 relative group shadow-md">
            {/* Wishlist and Quick View */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
              </button>
              <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <Eye className="w-5 h-5 text-gray-500 hover:text-blue-500" />
              </button>
            </div>

            {/* Product Image */}
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex gap-2 mb-2">
              <span className="text-red-500 font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through">${product.originalPrice}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-gray-500">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
