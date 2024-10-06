import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface ProductCardProps {
  title?: string;
  description?: string;
  price?: number;
  oldPrice?: number;
  image?: string;
  stars?: number;
  tags?: string[];
  size?: 'small' | 'normal';
}

export default function ProductCard({
  title = 'Amazing Product',
  description = 'Dai fantom filecoin celo gala. Arweave shiba-inu amp helium flow uniswap filecoin. Kusama terraUSD monero audius klaytn algorand elrond. Dai USD crypto PancakeSwap enjin quant serum nexo EOS terra. Shiba-inu bitcoin kusama avalanche solana algorand vechain.',
  price = 50.00,
  oldPrice = 100.00,
  image = 'https://picsum.photos/200',
  stars = 4.8,
  tags = ['Top 1%', '-50%'],
  size = 'normal',
}: ProductCardProps) {
  const renderStars = () => {
    const fullStars = Math.floor(stars);
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
      starsArray.push(
        <Star key={i} className={`${i < fullStars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          width={20}
          height={20}
        />
      );
    }
    return (
      <div className="flex items-center space-x-1">
        {starsArray}
        <span className="text-sm text-gray-600">{stars}/5</span>
      </div>
    );
  };

  const truncateDescription = (text: string, maxLength: number) => {
    const lines = text.split('\n');
    const truncatedLines = lines.slice(0, maxLength).join('\n');
    return truncatedLines.length < text.length ? truncatedLines + '...' : truncatedLines;
  };

  const cardSizeClasses = size === 'small' ? 'w-full p-4' : 'w-[390px] p-6';
  const imageAspectRatioClasses = size === 'small' ? 'aspect-[5/4]' : 'aspect-square';

  return (
    <div className={`bg-white border border-gray-200 rounded-[15px] mx-auto md:mx-0 shadow-lg hover:shadow-md transition-shadow duration-300 max-w-[350px] sm:min-w-[295px] ${cardSizeClasses}`}>
      <div className={`relative w-full ${imageAspectRatioClasses} mb-4 rounded-2xl overflow-hidden`}>
        <Image src={image} alt={title} fill={true} objectFit="cover" />
      </div>

      <div>
        <h2 className="text-2xl mb-2 font-bold">{title}</h2>
        {renderStars()}
      </div>

      <p className="text-lg text-gray-600 mt-2 mb-4 line-clamp-3">{truncateDescription(description, 3)}</p>

      <div className="flex space-x-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`
              px-4 rounded-full text-[12px] font-semibold
              ${tag === 'Top 1%' ? 'bg-yellow-400 text-black' : ''} 
              ${tag === '-50%' ? 'bg-[#14FF00] text-black px-3' : ''} 
              ${tag !== 'Top 1%' && tag !== '-50%' ? 'bg-gray-100 text-gray-800' : ''}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className='flex justify-between items-center mb-4'>
        <div>
          <span className="text-md font-bold mr-2 line-through">€{oldPrice.toFixed(2)}</span>
          <span className="text-md font-bold">€{price.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <Button variant="outline" className="w-full md:w-1/2">Details</Button>
        <Button variant="default" className="w-full md:w-1/2">Add to Cart</Button>
      </div>
    </div>
  );
}
