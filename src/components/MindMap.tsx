import React from 'react';

const MindMap: React.FC = () => {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto">
      <g transform="translate(400,300)">
        {/* Root node */}
        <g>
          <circle r="70" fill="#4CAF50" />
          <text textAnchor="middle" dy=".3em" fill="white" fontSize="18">Self-Driving Car</text>
        </g>
        
        {/* Data branch */}
        <g transform="translate(-250,-150)">
          <circle r="60" fill="#2196F3" />
          <text textAnchor="middle" dy=".3em" fill="white" fontSize="16">Data</text>
          <line x1="50" y1="-30" x2="120" y2="-70" stroke="#2196F3" strokeWidth="2" />
          <text x="125" y="-75" fontSize="14">Collection</text>
          <line x1="60" y1="0" x2="130" y2="0" stroke="#2196F3" strokeWidth="2" />
          <text x="135" y="5" fontSize="14">Preprocessing</text>
          <line x1="50" y1="30" x2="120" y2="70" stroke="#2196F3" strokeWidth="2" />
          <text x="125" y="75" fontSize="14">Augmentation</text>
        </g>
        
        {/* Deep Learning branch */}
        <g transform="translate(250,-150)">
          <circle r="60" fill="#FFC107" />
          <text textAnchor="middle" dy=".3em" fill="white" fontSize="16">Deep Learning</text>
          <line x1="-50" y1="-30" x2="-120" y2="-70" stroke="#FFC107" strokeWidth="2" />
          <text x="-125" y="-75" fontSize="14" textAnchor="end">Computer Vision</text>
          <line x1="-60" y1="0" x2="-130" y2="0" stroke="#FFC107" strokeWidth="2" />
          <text x="-135" y="5" fontSize="14" textAnchor="end">Object Detection</text>
          <line x1="-50" y1="30" x2="-120" y2="70" stroke="#FFC107" strokeWidth="2" />
          <text x="-125" y="75" fontSize="14" textAnchor="end">Path Planning</text>
        </g>
        
        {/* Machine Learning branch */}
        <g transform="translate(-250,150)">
          <circle r="60" fill="#9C27B0" />
          <text textAnchor="middle" dy=".3em" fill="white" fontSize="16">Machine Learning</text>
          <line x1="60" y1="0" x2="130" y2="0" stroke="#9C27B0" strokeWidth="2" />
          <text x="135" y="5" fontSize="14">Reinforcement Learning</text>
          <line x1="50" y1="30" x2="120" y2="70" stroke="#9C27B0" strokeWidth="2" />
          <text x="125" y="75" fontSize="14">Decision Making</text>
        </g>
        
        {/* Simulation branch */}
        <g transform="translate(250,150)">
          <circle r="60" fill="#FF5722" />
          <text textAnchor="middle" dy=".3em" fill="white" fontSize="16">Simulation</text>
          <line x1="-50" y1="-30" x2="-120" y2="-70" stroke="#FF5722" strokeWidth="2" />
          <text x="-125" y="-75" fontSize="14" textAnchor="end">Environment</text>
          <line x1="-60" y1="0" x2="-130" y2="0" stroke="#FF5722" strokeWidth="2" />
          <text x="-120" y="5" fontSize="14" textAnchor="end">Physics Engine</text>
        </g>
      </g>
    </svg>
  );
};

export default MindMap;