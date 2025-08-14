import React from 'react';
import { Youtube } from 'lucide-react';
import { siteConfig, teamMembers } from '../../data/mockData';

const Team: React.FC = () => {
  const partnership = siteConfig.specialPartnership;

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-[5px]">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.pages.team.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.pages.team.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-700 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Linha divisória */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[5px]">
        <hr className="border-gray-300 my-[50px]" />
      </div>

      {/* Seção de Parceria Especial */}
      <div className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
        {/* Imagem */}
        <div className="w-full sm:w-1/2">
          <img 
            src={partnership.image}
            alt={partnership.name}
            className="w-full h-48 sm:h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="p-4 sm:p-6 flex flex-col justify-between w-full sm:w-1/2">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{partnership.name}</h3>
            <p className="text-green-700 font-semibold text-xs mb-2">Parceiro Oficial</p>
            <p className="text-gray-600 text-sm mb-4">
              Estúdio especializado em criação de conteúdo para Minecraft.
            </p>
          </div>
          <a 
            href={partnership.socialLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 text-sm"
          >
            <Youtube size={14} />
            <span>{partnership.socialLink.buttonText}</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Team;
