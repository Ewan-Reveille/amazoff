import React from 'react';
import ProductCard from './ProductCard';

export default function Products() {
  return (
    <div className="md:mx-12 md:px-28 my-24">
      <h2 className="text-3xl font-bold mb-8">Nos produits</h2>
      
      <div className="flex flex-wrap justify-center sm:justify-start gap-6">
        <div className="flex-[1_1_100%] sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(33%-1rem)] xl:flex-[1_1_calc(25%-1rem)] flex justify-center xl:block max-w-[350px]">
          <ProductCard size="small" />
        </div>
        <div className="flex-[1_1_100%] sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(33%-1rem)] xl:flex-[1_1_calc(25%-1rem)] flex justify-center xl:block max-w-[350px]">
          <ProductCard size="small" />
        </div>
        <div className="flex-[1_1_100%] sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(33%-1rem)] xl:flex-[1_1_calc(25%-1rem)] flex justify-center xl:block max-w-[350px]">
          <ProductCard size="small" />
        </div>
        <div className="flex-[1_1_100%] sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(33%-1rem)] xl:flex-[1_1_calc(25%-1rem)] flex justify-center xl:block max-w-[350px]">
          <ProductCard size="small" />
        </div>
        <div className="flex-[1_1_100%] sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(33%-1rem)] xl:flex-[1_1_calc(25%-1rem)] flex justify-center xl:block max-w-[350px]">
          <ProductCard size="small" />
        </div>
        <div className="flex-[1_1_100%] sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(33%-1rem)] xl:flex-[1_1_calc(25%-1rem)] flex justify-center xl:block max-w-[350px]">
          <ProductCard size="small" />
        </div>
        <div className="flex-[1_1_100%] sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(33%-1rem)] xl:flex-[1_1_calc(25%-1rem)] flex justify-center xl:block max-w-[350px]">
          <ProductCard size="small" />
        </div>
        <div className="flex-[1_1_100%] sm:flex-[1_1_calc(50%-1rem)] lg:flex-[1_1_calc(33%-1rem)] xl:flex-[1_1_calc(25%-1rem)] flex justify-center xl:block max-w-[350px]">
          <ProductCard size="small" />
        </div>
      </div>
    </div>
  );
}
