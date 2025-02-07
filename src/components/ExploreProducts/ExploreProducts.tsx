import React from 'react';
import { Heart, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Мистер Рэй',
    price: 9999999,
    rating: 3.5,
    reviews: 35,
    image: '/рэй/1.jpg',
    isNew: false
  },
  {
    id: 2,
    name: 'Кошка 1',
    price: 9999999,
    rating: 4.0,
    reviews: 95,
    image: '/рэй/2.jpg',
    isNew: false
  },
  {
    id: 3,
    name: 'Кошка 2',
    price: 9999999,
    rating: 4.8,
    reviews: 325,
    image: '/рэй/3.jpg',
    isNew: false
  },
  {
    id: 4,
    name: 'Кошка 3',
    price: 9999999,
    rating: 4.3,
    reviews: 145,
    image: '/рэй/4.jpg',
    isNew: false
  },
  {
    id: 5,
    name: 'Кошка 4',
    price: 9999999,
    rating: 5,
    reviews: 65,
    image: '/рэй/5.jpg',
    isNew: true,
    colors: ['red', 'black']
  },
  {
    id: 6,
    name: 'Кошка 5',
    price: 9999999,
    rating: 4.8,
    reviews: 35,
    image: '/рэй/6.jpg',
    isNew: false,
    colors: ['yellow', 'red']
  },
  {
    id: 7,
    name: 'Кошка 6',
    price: 9999999,
    rating: 4.8,
    reviews: 55,
    image: '/рэй/7.jpg',
    isNew: true,
    colors: ['black', 'red']
  },
  {
    id: 8,
    name: 'Кошка 7',
    price: 9999999,
    rating: 4.7,
    reviews: 55,
    image: '/рэй/8.jpg',
    isNew: false,
    colors: ['green', 'red']
  }
];

const ExploreProducts = () => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-lg ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-red-500 font-semibold mb-2">Our Products</div>
          <h2 className="text-3xl font-bold">Explore Our Products</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <span className="sr-only">Previous</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <span className="sr-only">Next</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-lg p-4 relative group">
            {product.isNew && (
              <div className="absolute top-4 left-4 bg-green-400 text-white px-2 py-1 rounded text-sm">
                NEW
              </div>
            )}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <Eye className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add To Cart
              </button>
            </div>
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <div className="flex gap-2 mb-2">
              <span className="text-red-500 font-semibold">${product.price}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-gray-500">({product.reviews})</span>
            </div>
            {product.colors && (
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className={`w-4 h-4 rounded-full border border-gray-300`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ExploreProducts;