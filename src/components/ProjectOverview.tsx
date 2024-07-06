import React from 'react';

const ProjectOverview: React.FC = () => {
  return (
    <div className="space-y-4">
      <section>
        <h3 className="text-lg font-semibold mb-2">Objective</h3>
        <p>Develop a fully functional self-driving car simulation using deep learning, computer vision, and machine learning techniques.</p>
      </section>
      
      <section>
        <h3 className="text-lg font-semibold mb-2">Key Components</h3>
        <ul className="list-disc pl-5">
          <li>Data Processing</li>
          <li>Deep Learning Models</li>
          <li>Simulation Environment</li>
          <li>Training and Evaluation</li>
          <li>Deployment</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-lg font-semibold mb-2">Technologies and Tools</h3>
        <ul className="list-disc pl-5">
          <li>Python</li>
          <li>TensorFlow or PyTorch</li>
          <li>OpenCV</li>
          <li>Simulation tools (e.g., CARLA, AirSim)</li>
          <li>Git</li>
          <li>Docker</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-lg font-semibold mb-2">Milestones</h3>
        <ol className="list-decimal pl-5">
          <li>Data collection and preprocessing pipeline</li>
          <li>Development of individual deep learning models</li>
          <li>Creation of simulation environment</li>
          <li>Integration of models into simulation</li>
          <li>Comprehensive testing and evaluation</li>
          <li>Documentation and presentation of results</li>
        </ol>
      </section>
      
      <section>
        <h3 className="text-lg font-semibold mb-2">Challenges and Considerations</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Ensuring model generalization to various driving scenarios</li>
          <li>Balancing computation efficiency with model accuracy</li>
          <li>Addressing ethical considerations in decision-making algorithms</li>
          <li>Preparing for potential real-world testing and safety measures</li>
        </ul>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img 
            src="/images/challenge1.jpg" 
            alt="Challenge 1: Model Generalization" 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img 
            src="/images/challenge2.jpg" 
            alt="Challenge 2: Ethical Considerations" 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img 
            src="/images/challenge3.jpg" 
            alt="Challenge 3: Real-world Testing" 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectOverview;