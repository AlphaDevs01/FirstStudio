import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Models from './components/pages/Models';
import Programming from './components/pages/Programming';
import Addons from './components/pages/Addons';
import ComingSoon from './components/pages/ComingSoon';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>();
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonData, setComingSoonData] = useState({ title: '', description: '' });

  // Listener para eventos customizados do footer
  React.useEffect(() => {
    const handleComingSoonEvent = (event: any) => {
      const { title, description } = event.detail;
      handleShowComingSoon(title, description);
    };

    window.addEventListener('showComingSoon', handleComingSoonEvent);
    return () => window.removeEventListener('showComingSoon', handleComingSoonEvent);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedItemId(undefined);
    setShowComingSoon(false);
  };

  const handleNavigate = (tab: string, itemId?: string) => {
    setActiveTab(tab);
    setSelectedItemId(itemId);
    setShowComingSoon(false);
  };

  const handleShowComingSoon = (title?: string, description?: string) => {
    setComingSoonData({
      title: title || 'Em Breve',
      description: description || 'Esta funcionalidade está sendo desenvolvida e estará disponível em breve.'
    });
    setShowComingSoon(true);
  };

  const handleBackFromComingSoon = () => {
    setShowComingSoon(false);
  };

  // Se estiver mostrando a página "Em Breve"
  if (showComingSoon) {
    return (
      <div className="min-h-screen bg-gray-100">
        <ComingSoon 
          onGoBack={handleBackFromComingSoon}
          title={comingSoonData.title}
          description={comingSoonData.description}
        />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={handleNavigate} onShowComingSoon={handleShowComingSoon} />;
      case 'equipe':
        return <Team />;
      case 'contato':
        return <Contact />;
      case 'modelos':
        return <Models selectedSetId={selectedItemId} />;
      case 'programacoes':
        return <Programming />;
      case 'addons':
        return <Addons />;
      default:
        return <Home onNavigate={handleNavigate} onShowComingSoon={handleShowComingSoon} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        activeTab={activeTab} 
        onTabChange={handleTabChange}
      />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;