import React from 'react';

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]"> {/* Minimum width to prevent squishing on small screens */}
        <svg viewBox="0 0 1000 800" className="w-full h-auto"> {/* Increased size for better visibility */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
              refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
            </marker>
          </defs>
          
          <g transform="translate(50,50)">
            <rect width="180" height="80" rx="5" fill="#E3F2FD" stroke="#2196F3" />
            <text x="90" y="45" textAnchor="middle">Data Collection</text>
            <line x1="180" y1="40" x2="260" y2="40" stroke="#000" markerEnd="url(#arrowhead)" />
            
            <g transform="translate(260,0)">
              <rect width="180" height="80" rx="5" fill="#E3F2FD" stroke="#2196F3" />
              <text x="90" y="45" textAnchor="middle">Data Preprocessing</text>
              <line x1="180" y1="40" x2="260" y2="40" stroke="#000" markerEnd="url(#arrowhead)" />
            </g>
            
            <g transform="translate(520,0)">
              <rect width="180" height="80" rx="5" fill="#FFF3E0" stroke="#FF9800" />
              <text x="90" y="45" textAnchor="middle">Model Development</text>
              <line x1="90" y1="80" x2="90" y2="140" stroke="#000" markerEnd="url(#arrowhead)" />
            </g>
            
            <g transform="translate(520,140)">
              <rect width="180" height="80" rx="5" fill="#FFF3E0" stroke="#FF9800" />
              <text x="90" y="45" textAnchor="middle">Training</text>
              <line x1="90" y1="80" x2="90" y2="140" stroke="#000" markerEnd="url(#arrowhead)" />
            </g>
            
            <g transform="translate(520,280)">
              <rect width="180" height="80" rx="5" fill="#E8F5E9" stroke="#4CAF50" />
              <text x="90" y="45" textAnchor="middle">Evaluation</text>
              <line x1="90" y1="80" x2="90" y2="140" stroke="#000" markerEnd="url(#arrowhead)" />
            </g>
            
            <g transform="translate(520,420)">
              <polygon points="90,0 180,40 90,80 0,40" fill="#FFEBEE" stroke="#F44336" />
              <text x="90" y="45" textAnchor="middle">Performance Check</text>
              <line x1="180" y1="40" x2="260" y2="40" stroke="#000" markerEnd="url(#arrowhead)" />
              <line x1="90" y1="0" x2="90" y2="-60" stroke="#000" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              <text x="100" y="-30" fontSize="14">Needs Improvement</text>
            </g>
            
            <g transform="translate(780,420)">
              <rect width="180" height="80" rx="5" fill="#E0F7FA" stroke="#00BCD4" />
              <text x="90" y="45" textAnchor="middle">Simulation</text>
            </g>
          </g>
          
          <g transform="translate(50,650)">
            <rect width="900" height="130" rx="5" fill="#FFF3E0" stroke="#FF9800" strokeDasharray="5,5" />
            <text x="20" y="30" fontSize="18" fontWeight="bold">Model Development</text>
            
            <g transform="translate(20,50)">
              <rect width="150" height="70" rx="5" fill="#FFFFFF" stroke="#FF9800" />
              <text x="75" y="40" textAnchor="middle" fontSize="14">Computer Vision</text>
            </g>
            
            <g transform="translate(190,50)">
              <rect width="150" height="70" rx="5" fill="#FFFFFF" stroke="#FF9800" />
              <text x="75" y="40" textAnchor="middle" fontSize="14">Object Detection</text>
            </g>
            
            <g transform="translate(360,50)">
              <rect width="150" height="70" rx="5" fill="#FFFFFF" stroke="#FF9800" />
              <text x="75" y="35" textAnchor="middle" fontSize="14">Semantic</text>
              <text x="75" y="55" textAnchor="middle" fontSize="14">Segmentation</text>
            </g>
            
            <g transform="translate(530,50)">
              <rect width="150" height="70" rx="5" fill="#FFFFFF" stroke="#FF9800" />
              <text x="75" y="40" textAnchor="middle" fontSize="14">Path Planning</text>
            </g>
            
            <g transform="translate(700,50)">
              <rect width="150" height="70" rx="5" fill="#FFFFFF" stroke="#FF9800" />
              <text x="75" y="35" textAnchor="middle" fontSize="14">Decision</text>
              <text x="75" y="55" textAnchor="middle" fontSize="14">Making</text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;