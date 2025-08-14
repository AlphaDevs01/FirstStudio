import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Youtube, MessageCircle, Instagram } from 'lucide-react';
import { siteConfig } from '../../data/mockData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: siteConfig.contact.phone,
      link: `tel:${siteConfig.contact.phone.replace(/\D/g, '')}`
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: siteConfig.contact.location,
      link: null
    }
  ];

  const socialMedia = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: siteConfig.contact.socialMedia.youtube,
      color: 'text-red-600 hover:text-red-700 hover:bg-red-50'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: siteConfig.contact.socialMedia.discord,
      color: 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: siteConfig.contact.socialMedia.instagram,
      color: 'text-pink-600 hover:text-pink-700 hover:bg-pink-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.pages.contact.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.pages.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{siteConfig.pages.contact.contactInfoTitle}</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-center p-4 mb-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-green-700" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </div>
                  );

                  return item.link ? (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{siteConfig.pages.contact.socialMediaTitle}</h2>
              <div className="flex space-x-4">
                {socialMedia.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-white rounded-lg shadow-md transition-all duration-200 ${social.color}`}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{siteConfig.pages.contact.formTitle}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Send size={20} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;