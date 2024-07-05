import React from 'react';

const ProjectStructure: React.FC = () => {
  return (
    <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
      {`self_driving_car/
├── data/
│   ├── raw/
│   ├── processed/
│   └── models/
├── src/
│   ├── data_processing/
│   ├── model/
│   ├── training/
│   ├── evaluation/
│   └── simulation/
├── tests/
├── docs/
├── config/
├── notebooks/
├── requirements.txt
└── README.md`}
    </pre>
  );
};

export default ProjectStructure;