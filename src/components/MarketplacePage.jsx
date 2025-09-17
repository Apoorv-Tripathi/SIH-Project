import React from 'react';
import { marketplaceItems } from '../data/marketplace';
import MarketplaceCard from './Marketplace';
import Navbar from './Navbar';
import Footer from './Footer';

const MarketplacePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-2">Artisan Marketplace</h1>
        <p className="text-center text-gray-600 mb-8">Support local artisans and entrepreneurs from Jharkhand.</p>
        
        {/* Filter Section (Non-functional for prototype) */}
        <div className="flex justify-center items-center mb-10">
          <select className="px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Categories</option>
            <option>Handicrafts</option>
            <option>Homestays</option>
            <option>Events</option>
            <option>Equipment</option>
          </select>
        </div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {marketplaceItems.map(item => (
            <MarketplaceCard key={item.id} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketplacePage;