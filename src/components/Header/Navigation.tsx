import React from 'react';
import { Search, ShoppingCart, Heart } from 'lucide-react';

const Navigation = () => {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Exclusive</h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-600">Home</a>
        <a href="#" className="hover:text-gray-600">Contact</a>
        <a href="#" className="hover:text-gray-600">About</a>
        <a href="#" className="hover:text-gray-600">Sign Up</a>
      </nav>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 rounded-md py-2 px-4 pr-10 w-[300px]"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <Heart className="w-6 h-6" />
        <ShoppingCart className="w-6 h-6" />
      </div>
    </header>
  );
};

export default Navigation;