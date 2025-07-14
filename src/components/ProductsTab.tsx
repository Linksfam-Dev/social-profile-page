import React from 'react';

const ProductsTab: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Creator Merchandise',
      price: '$29.99',
      image: 'https://via.placeholder.com/150?text=Merch'
    },
    {
      id: 2,
      name: 'Digital Course',
      price: '$99.99',
      image: 'https://via.placeholder.com/150?text=Course'
    },
    {
      id: 3,
      name: 'Premium Content',
      price: '$19.99/mo',
      image: 'https://via.placeholder.com/150?text=Content'
    },
    {
      id: 4,
      name: 'Exclusive Ebook',
      price: '$14.99',
      image: 'https://via.placeholder.com/150?text=Ebook'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-3">
      {products.map(product => (
        <div key={product.id} className="bg-gray-800 rounded-lg p-3 flex flex-col">
          <div className="h-32 w-full mb-3 overflow-hidden rounded">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{product.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-green-400">{product.price}</span>
              <button className="bg-blue-600 rounded px-3 py-1 text-xs">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsTab;
