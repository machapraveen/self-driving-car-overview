import React, { useState } from 'react';
import { AlignJustify, Binary, Activity, FileCode } from 'lucide-react';
import ProjectStructure from './ProjectStructure';
import MindMap from './MindMap';
import ArchitectureDiagram from './ArchitectureDiagram';
import ProjectOverview from './ProjectOverview';

const SelfDrivingCarOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("structure");

  const renderContent = () => {
    switch (activeTab) {
      case "structure": return <ProjectStructure />;
      case "mindmap": return <MindMap />;
      case "architecture": return <ArchitectureDiagram />;
      case "overview": return <ProjectOverview />;
      default: return null;
    }
  };

  return (
    <div className="p-4 max-w-full mx-auto overflow-hidden">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Self-Driving Car Project Overview</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {['structure', 'mindmap', 'architecture', 'overview'].map((tab) => (
          <button
            key={tab}
            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
              activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'structure' && <AlignJustify size={18} className="mr-2" />}
            {tab === 'mindmap' && <Binary size={18} className="mr-2" />}
            {tab === 'architecture' && <Activity size={18} className="mr-2" />}
            {tab === 'overview' && <FileCode size={18} className="mr-2" />}
            <span className="capitalize">{tab}</span>
          </button>
        ))}
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default SelfDrivingCarOverview;