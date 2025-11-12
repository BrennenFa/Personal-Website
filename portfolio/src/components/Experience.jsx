const Experience = () => {
  const experiences = [
    {
      title: 'Summer Technology Analyst',
      company: 'Wells Fargo',
      location: 'Charlotte, NC',
      date: 'June 2025 - Aug. 2025',
      description: [
        'Developed and deployed YOLO and MediaPipe pose estimation models in C++ for real-time edge inference across 100+ live camera streams, enabling low-latency high-risk behavior detection with 80% accuracy',
        'Engineered a scalable backend microservices pipeline using Apache Kafka, Apache Spark, and Kubernetes, delivering video to a Gemini-powered RAG agent for LLM behavior classification to save a projected $100k'
      ],
      tech: ['C++', 'YOLO', 'Kafka', 'Kubernetes', 'LLM']
    },
    {
      title: 'Software Engineering Intern',
      company: 'Precision Sustainable Agriculture',
      location: 'Raleigh, NC',
      date: 'Jan 2024 - Present',
      description: [
        'Take ownership over a reusable component library with React/React Native, improving accessibility, UI consistency, and the overall functionality of decision tools to help farmers nationally optimize crop selection',
        'Built custom Node.js/Express endpoints and integrated database migration tests into a CI/CD pipeline, enabling smooth integration with a regional PostgreSQL plant database',
        'Enhanced a ResNet-based vision CNN for tree genus detection in infestation analysis by integrating open-source API datasets and utilizing Cloud HPC, achieving a 10% increase in accuracy demonstrated with data visualization'
      ],
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'CNN', 'Cloud HPC']
    },
    {
      title: 'Machine Learning Engineering Intern',
      company: 'Elder Research',
      location: 'Raleigh, NC',
      date: 'May 2024 - Aug. 2024',
      description: [
        'Engineered a time series prediction Flask API with a less than 10% average error by testing XGBoost, Deep Learning, and ARIMA models and displaying with React to assist with attracting high profile clientele',
        'Containerized a full stack application and deployed on AWS ECS and EC2, ensuring easy, consistent deployment'
      ],
      tech: ['Flask', 'XGBoost', 'React', 'Docker', 'AWS']
    },
    {
      title: 'Project Lead',
      company: '180 Degrees Consulting',
      location: 'Raleigh, NC',
      date: 'Jan. 2024 - August 2025',
      description: [
        'Spearhead the creation of a tech consulting team, growing club participation by 10% and increasing impactful projects',
        'Lead a team developing software and statistical analysis tools, improving a nonprofit\'s digital engagement by 40% through streamlined processes and data-driven insights'
      ],
      tech: ['Leadership', 'Consulting', 'Data Analysis']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Work Experience
          <span className="block w-20 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-red-800 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-0 md:pl-16 mb-12">
              {/* Timeline dot */}
              <div className="absolute left-3 top-0 w-5 h-5 rounded-full bg-white border-4 border-red-600 z-10 hidden md:block"></div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
                  <span className="inline-block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-semibold text-lg mr-4">
                    {exp.company}
                  </span>
                  <span className="text-gray-500 text-sm">{exp.date}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-600 pl-6 relative leading-relaxed">
                      <span className="absolute left-0 text-red-600 font-bold">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-50 rounded-2xl text-xs text-gray-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
