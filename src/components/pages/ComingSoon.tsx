import React from 'react';
import { Clock, ArrowLeft, Mail, Bell } from 'lucide-react';
import { siteConfig } from '../../data/mockData';

interface ComingSoonProps {
  onGoBack: () => void;
  title?: string;
  description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  onGoBack, 
  title = "Em Breve",
  description = "Esta funcionalidade está sendo desenvolvida e estará disponível em breve."
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Back Button */}
        <button
          onClick={onGoBack}
          className="absolute top-8 left-8 flex items-center space-x-2 text-white hover:text-green-300 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </button>

        {/* Main Content */}
        <div className="bg-[rgb(22,101,52)] bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl border border-white border-opacity-20">
          {/* Icon */}
          <div className="w-24 h-24 bg-green-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Clock size={48} className="text-green-400" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>

          {/* Features Coming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[rgb(22,101,52)] bg-opacity-5 rounded-lg p-6 border border-white border-opacity-10">
              <div className="w-12 h-12 bg-green-600 bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bell size={24} className="text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Notificações</h3>
              <p className="text-gray-400 text-sm">
                Receba atualizações quando estiver pronto
              </p>
            </div>

            <div className="bg-[rgb(22,101,52)] bg-opacity-5 rounded-lg p-6 border border-white border-opacity-10">
              <div className="w-12 h-12 bg-green-600 bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Contato</h3>
              <p className="text-gray-400 text-sm">
                Entre em contato para mais informações
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGoBack}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Voltar ao Site
            </button>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="border-2 border-white text-white hover:bg-[rgb(22,101,52)] hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Mail size={18} />
              <span>Entrar em Contato</span>
            </a>
          </div>

          {/* Footer Info */}
          <div className="mt-10 pt-8 border-t border-white border-opacity-20">
            <p className="text-gray-400 text-sm">
              Acompanhe nosso progresso nas redes sociais
            </p>
            <p className="text-green-400 font-semibold mt-2">
              {siteConfig.siteName} - Criando o futuro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;