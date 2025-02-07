import React from 'react';
import { Truck, HeadphonesIcon, ShieldCheck } from 'lucide-react';

const NewArrival = () => {
  return (
    <div className="container mx-auto px-4 mt-16 mb-16">
      <div className="mb-8">
        <div className="text-red-500 font-semibold mb-2">Featured</div>
        <h2 className="text-3xl font-bold">New Arrival</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        <div className="relative bg-black text-white rounded-lg overflow-hidden">
          <img
            src="/купите/ployka.png"
            alt="PlayStation 5"
            className="w-full h-[400px] object-cover opacity-90"
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
            <p className="mb-4 text-gray-300">Black and White version of the PS5 coming out on sale.</p>
            <button className="text-white hover:underline inline-block w-fit">
              Shop Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative bg-black text-white rounded-lg overflow-hidden col-span-2">
            <img
              src="/купите/woman.webp"
              alt="Women's Collections"
              className="w-full h-[250px] object-cover opacity-90"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">Women's Collections</h3>
              <p className="mb-4 text-sm text-gray-300">Featured women collections that give you another vibe.</p>
              <button className="text-white hover:underline inline-block w-fit">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative bg-black text-white rounded-lg overflow-hidden">
            <img
              src="/купите/muzika.jpg"
              alt="Speakers"
              className="w-full h-[200px] object-cover opacity-90"
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1">Speakers</h3>
              <p className="mb-2 text-xs text-gray-300">Amazon wireless speakers</p>
              <button className="text-white hover:underline inline-block w-fit">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative bg-black text-white rounded-lg overflow-hidden">
            <img
              src="/купите/savuage.webp"
              alt="Perfume"
              className="w-full h-[200px] object-cover opacity-90"
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1">Perfume</h3>
              <p className="mb-2 text-xs text-gray-300">GUCCI INTENSE OUD EDP</p>
              <button className="text-white hover:underline inline-block w-fit">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <Truck className="w-8 h-8" />
          </div>
          <h3 className="font-bold mb-2">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-600 text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <HeadphonesIcon className="w-8 h-8" />
          </div>
          <h3 className="font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-600 text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="font-bold mb-2">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-600 text-sm">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;