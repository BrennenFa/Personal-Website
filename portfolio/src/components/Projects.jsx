const Projects = () => {
  const projects = [
    {
      title: 'Potluck Markets',
      link: 'https://potluck.support/',
      description: 'Built the frontend of a peer-to-peer wagering iOS app enabling trust-based transactions between users with transparent state management and real-time updates in an attempt to foster community through MVC.',
      highlights: [
        'Implemented scalable backend leveraging Firebase and NoSQL to emulate smart contract logic',
        'Supporting verifiable wager states, event-driven notifications, and transaction management for 40+ users'
      ],
      tech: ['Swift', 'SwiftUI', 'Firebase', 'Google Cloud']
    },
    {
      title: 'Cognitive Impairment Detection through Gait Analysis',
      link: 'https://ieeexplore.ieee.org/document/10782745',
      spieLink: 'https://spie.org/defense-commercial-sensing/presentation/Human-pose-estimation-and-gait-analysis-with-convolutional-neural-networks/13036-21',
      description: 'Developed an ETL pipeline for an OpenPose pose estimation process extracting joint data from images to Pandas.',
      highlights: [
        'Developed a 93% accurate SVM model in Alzheimer\'s detection from gait',
        'First authored diagnosis papers published in IEEE and SPIE Defense + Commercial Sensing 2024'
      ],
      tech: ['Python', 'Pandas', 'OpenCV', 'SVM']
    },
    {
      title: 'ECG Disease Detection',
      link: null,
      description: 'Solely designed and implemented a large scale data pipeline involving Convolutional Neural Networks and vision transformer models to analyze ECGs.',
      highlights: [
        'Using GradCAM to understand feature importance to assist cardiologists',
        'Completed condition classification on extracted features with XGBoost, achieving an F1 Score over 0.8'
      ],
      tech: ['PyTorch', 'CNN', 'XGBoost', 'Docker']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Featured Projects
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800 flex-1">{project.title}</h3>
                <div className="flex gap-3 ml-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-lg hover:scale-125 hover:text-purple-600 transition-all duration-300"
                      title="IEEE Publication"
                    >
                      <i className="fas fa-file-alt"></i>
                    </a>
                  )}
                  {project.spieLink && (
                    <a
                      href={project.spieLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-lg hover:scale-125 hover:text-purple-600 transition-all duration-300"
                      title="SPIE Publication"
                    >
                      <i className="fas fa-book"></i>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>

              <ul className="space-y-3 mb-6 flex-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-600 pl-6 relative text-sm leading-relaxed">
                    <span className="absolute left-0 text-blue-500 font-bold">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl text-xs text-blue-600 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
