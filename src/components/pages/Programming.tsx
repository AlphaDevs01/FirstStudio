import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code } from 'lucide-react';
import { siteConfig, programmingCategories, programmingSets, ProgrammingSet } from '../../data/mockData';
import ImageCarousel from '../common/ImageCarousel';

const Programming: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(programmingCategories[0].id);
  const [selectedSet, setSelectedSet] = useState<ProgrammingSet | null>(null);

  const filteredSets = programmingSets.filter(set => set.categoryId === selectedCategory);
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

  const handleSetClick = (set: ProgrammingSet) => {
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
              <span>Voltar às Programações</span>
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

          {/* Set Details */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <ImageCarousel images={selectedSet.codeImages} alt={`${selectedSet.name} - Code`} />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedSet.name}</h1>
                    <p className="text-lg text-gray-600">{selectedSet.description}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <Code className="mr-2" size={20} />
                      Funcionalidade
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{selectedSet.functionality}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Detalhes Técnicos</h2>
                  <p className="text-gray-700 leading-relaxed">{selectedSet.technicalDetails}</p>
                </div>
                
                {selectedSet.illustrations.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Ilustrações</h2>
                    <ImageCarousel images={selectedSet.illustrations} alt={`${selectedSet.name} - Illustrations`} />
                  </div>
                )}
              </div>
              
              {/* <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  Download Código
                </button>
                <button className="border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  Ver Documentação
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.pages.programming.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.pages.programming.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programmingCategories.map((category) => (
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

        {/* Programming Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSets.map((set) => (
            <div
              key={set.id}
              onClick={() => handleSetClick(set)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={set.codeImages[0]}
                  alt={set.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <Code className="mr-2" size={18} />
                  {set.name}
                </h3>
                <p className="text-gray-600 mb-4">{set.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {set.codeImages.length} screenshot{set.codeImages.length !== 1 ? 's' : ''}
                  </span>
                  <span className="text-green-700 font-semibold">Ver Detalhes →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhuma programação encontrada nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programming;