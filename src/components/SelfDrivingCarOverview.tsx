import React, { useState } from 'react';
import { AlignJustify, Binary, Activity, FileCode } from 'lucide-react';
import ProjectStructure from './ProjectStructure';
import MindMap from './MindMap';
import ArchitectureDiagram from './ArchitectureDiagram';
import ProjectOverview from './ProjectOverview';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4">{children}</div>
);

const CardHeader: React.FC<CardProps> = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const CardTitle: React.FC<CardProps> = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

const CardContent: React.FC<CardProps> = ({ children }) => (
  <div>{children}</div>
);

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onClick }) => (
  <button
    className={`flex items-center px-4 py-2 rounded-md transition-colors ${
      isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

const SelfDrivingCarOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("structure");

  const renderContent = () => {
    switch (activeTab) {
      case "structure":
        return <ProjectStructure />;
      case "mindmap":
        return <MindMap />;
      case "architecture":
        return <ArchitectureDiagram />;
      case "overview":
        return <ProjectOverview />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Self-Driving Car Project Overview</h1>
      <div className="flex space-x-2 mb-4">
        <TabButton 
          icon={<AlignJustify size={18} />} 
          label="Structure" 
          isActive={activeTab === "structure"} 
          onClick={() => setActiveTab("structure")} 
        />
        <TabButton 
          icon={<Binary size={18} />} 
          label="Mind Map" 
          isActive={activeTab === "mindmap"} 
          onClick={() => setActiveTab("mindmap")} 
        />
        <TabButton 
          icon={<Activity size={18} />} 
          label="Architecture" 
          isActive={activeTab === "architecture"} 
          onClick={() => setActiveTab("architecture")} 
        />
        <TabButton 
          icon={<FileCode size={18} />} 
          label="Overview" 
          isActive={activeTab === "overview"} 
          onClick={() => setActiveTab("overview")} 
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>
            {activeTab === "structure" && "Project Structure"}
            {activeTab === "mindmap" && "Mind Map"}
            {activeTab === "architecture" && "Architecture Diagram"}
            {activeTab === "overview" && "Project Overview"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
};

export default SelfDrivingCarOverview;