import React from 'react';
import { AlignJustify, Binary, Activity, FileCode } from 'lucide-react';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <TabButton icon={<AlignJustify />} label="Structure" value="structure" activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabButton icon={<Binary />} label="Mind Map" value="mindmap" activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabButton icon={<Activity />} label="Architecture" value="architecture" activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabButton icon={<FileCode />} label="Overview" value="overview" activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, value, activeTab, setActiveTab }) => {
  const isActive = activeTab === value;
  return (
    <button
      className={`flex items-center px-4 py-2 rounded-md transition-colors ${
        isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
      onClick={() => setActiveTab(value)}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

export default Tabs;