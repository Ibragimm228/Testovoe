import React from 'react';
import TopBanner from './components/Header/TopBanner';
import Navigation from './components/Header/Navigation';
import CategorySidebar from './components/Categories/CategorySidebar';
import HeroSlider from './components/Hero/HeroSlider';
import FlashSales from './components/FlashSales/FlashSales';
import BrowseCategories from './components/Categories/BrowseCategories';
import BestSellers from './components/BestSellers/BestSellers';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import ExploreProducts from './components/ExploreProducts/ExploreProducts';
import NewArrival from './components/NewArrival/NewArrival';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Navigation />
      
      <main>
        {/* Categories Sidebar and Hero Section */}
        <div className="container mx-auto px-4 flex gap-8 mt-8">
          <CategorySidebar />
          <HeroSlider />
        </div>

        <FlashSales />
        <BrowseCategories />
        <BestSellers />
        <FeaturedProduct />
        <ExploreProducts />
        <NewArrival />
      </main>

      <Footer />
    </div>
  );
}

export default App;