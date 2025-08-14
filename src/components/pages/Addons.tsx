import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { siteConfig, addonCategories, addonSets, AddonSet } from '../../data/mockData';

const Addons: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(addonCategories[0].id);
  const [selectedSet, setSelectedSet] = useState<AddonSet | null>(null);

  const filteredSets = addonSets.filter(set => set.categoryId === selectedCategory);
  const currentSetIndex = selectedSet ? filteredSets.findIndex(set => set.id === selectedSet.id) : -1;

  const goToPreviousSet = () => {
    if (currentSetIndex > 0) {
      setSelectedSet(filteredSets[currentSetIndex - 1]);
    } else if (filteredSets.length > 0) {
      setSelectedSet(filteredSets[filteredSets.length - 1]);
    }
  };

  const goToNextSet = () => {
    if (currentSetIndex < filteredSets.length - 1) {
      setSelectedSet(filteredSets[currentSetIndex + 1]);
    } else if (filteredSets.length > 0) {
      setSelectedSet(filteredSets[0]);
    }
  };

  const handleSetClick = (set: AddonSet) => {
    setSelectedSet(set);
    setSelectedCategory(set.categoryId);
  };

  const handleBackToGrid = () => {
    setSelectedSet(null);
  };

  if (selectedSet) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBackToGrid}
              className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors duration-200"
            >
              <ChevronLeft size={20} />
              <span>Voltar aos Addons</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={goToPreviousSet}
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-gray-600">
                {currentSetIndex + 1} de {filteredSets.length}
              </span>
              <button
                onClick={goToNextSet}
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Video Player */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedSet.name}</h1>
                <p className="text-lg text-gray-600">{selectedSet.description}</p>
              </div>
              
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedSet.embedId}`}
                  title={selectedSet.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  Download Addon
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  Ver no YouTube
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.pages.addons.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.pages.addons.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {addonCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-800 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Addon Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSets.map((set) => (
            <div
              key={set.id}
              onClick={() => handleSetClick(set)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-600 opacity-80"></div>
                <div className="relative z-10 text-white text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Play size={32} className="ml-1" />
                  </div>
                  <p className="text-sm font-medium">Clique para assistir</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{set.name}</h3>
                <p className="text-gray-600 mb-4">{set.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-800 font-semibold bg-green-50 px-3 py-1 rounded-full">
                    Vídeo Demo
                  </span>
                  <span className="text-green-700 font-semibold">Assistir →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum addon encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addons;