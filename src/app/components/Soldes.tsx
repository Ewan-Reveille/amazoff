import React from 'react';
import ProductCard from './ProductCard';

export default function Soldes() {
  return (
    <article className="w-full md:w-[82%] md:mx-[9%] pb-12">
      <h2 className="text-4xl font-bold mb-12">Nos soldes</h2>

      <div className="relative">

        <div className="bg-white rounded-2xl md:p-10 shadow-2xl transition-shadow hover:shadow-3xl duration-300 ease-in-out md:px-[120px]">
          <div className='w-full flex flex-wrap justify-between gap-4'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </article>
  );
}
