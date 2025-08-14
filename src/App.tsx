import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Models from './components/pages/Models';
import Programming from './components/pages/Programming';
import Addons from './components/pages/Addons';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedItemId(undefined);
  };

  const handleNavigate = (tab: string, itemId?: string) => {
    setActiveTab(tab);
    setSelectedItemId(itemId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
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
        return <Home onNavigate={handleNavigate} />;
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