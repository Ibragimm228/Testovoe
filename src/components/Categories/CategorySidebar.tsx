import React from 'react';
import { ChevronRight } from 'lucide-react';

const categories = [
  { name: "Woman's Fashion", hasSubmenu: true },
  { name: "Men's Fashion", hasSubmenu: true },
  { name: "Electronics", hasSubmenu: false },
  { name: "Home & Lifestyle", hasSubmenu: false },
  { name: "Medicine", hasSubmenu: false },
  { name: "Sports & Outdoor", hasSubmenu: false },
  { name: "Baby's & Toys", hasSubmenu: false },
  { name: "Groceries & Pets", hasSubmenu: false },
  { name: "Health & Beauty", hasSubmenu: false },
];

const CategorySidebar = () => {
  return (
    <div className="hidden md:block w-64 space-y-4">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex items-center justify-between hover:text-red-500 cursor-pointer"
        >
          <span>{category.name}</span>
          {category.hasSubmenu && <ChevronRight className="w-4 h-4" />}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;