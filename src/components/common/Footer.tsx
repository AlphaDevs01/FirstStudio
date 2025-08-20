import React from 'react';
import { Youtube, MessageCircle, Instagram, Mail } from 'lucide-react';
import { siteConfig } from '../../data/mockData';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: siteConfig.contact.socialMedia.youtube,
      color: 'text-red-600 hover:text-red-700'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: siteConfig.contact.socialMedia.discord,
      color: 'text-indigo-600 hover:text-indigo-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: siteConfig.contact.socialMedia.instagram,
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${siteConfig.contact.email}`,
      color: 'text-gray-600 hover:text-gray-700'
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              {siteConfig.siteName}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {siteConfig.siteDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Nossos Projetos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contato</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Redes Sociais</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-900 rounded-lg transition-all duration-200 hover:bg-gray-800 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 {siteConfig.siteName}. Todos os direitos reservados.
          </p>
          <p className="text-gray-400">
            <a href="https://alphadevss.com.br" target='_blank' rel='external'>By AlphaDevss.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;