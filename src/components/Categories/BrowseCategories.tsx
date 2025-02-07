import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react';

const categories = [
  { name: 'Phones', icon: Smartphone },
  { name: 'Computers', icon: Monitor },
  { name: 'SmartWatch', icon: Watch },
  { name: 'Camera', icon: Camera },
  { name: 'HeadPhones', icon: Headphones },
  { name: 'Gaming', icon: Gamepad },
];

const BrowseCategories = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="container mx-auto px-4 mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-red-500 font-semibold mb-2">Categories</div>
          <h2 className="text-3xl font-bold">Browse By Category</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            disabled={currentPage === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPage}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg hover:bg-red-500 hover:text-white transition-colors cursor-pointer group"
              >
                <Icon className="w-8 h-8 mb-4 group-hover:text-white" />
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BrowseCategories;