import React from 'react';
import { Heart, Eye } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-lg ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg p-4 relative group shadow-md">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm flex items-center gap-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center bg-red-600 rounded-md text-xs font-bold">
            -{product.discount}%
          </div>
        </div>
      )}

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
        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          Add To Cart
        </button>
      </div>

      {/* Product Info */}
      <h3 className="font-semibold mb-2">{product.name}</h3>
      <div className="flex gap-2 mb-2">
        <span className="text-red-500 font-semibold">${product.price}</span>
        <span className="text-gray-400 line-through">${product.originalPrice}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex">{renderStars(product.rating)}</div>
        <span className="text-gray-500">({product.reviews})</span>
      </div>
    </div>
  );
};

export default ProductCard;