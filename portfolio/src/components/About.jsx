const About = () => {
  const softwareSkills = [
    'JavaScript/TypeScript', 'React/React Native', 'Java', 'C/C++', 'Python',
    'Swift', 'Go', 'Spring', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'GraphQL'
  ];

  const mlSkills = [
    'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'YOLO',
    'Hugging Face', 'SQL', 'R', 'Spark', 'Kafka'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
          About Me
          <span className="block w-20 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="mb-6 text-gray-600 text-lg leading-relaxed">
              I'm a Computer Science student at North Carolina State University with a 3.9 GPA,
              graduating in December 2025. I'm passionate about leveraging technology to solve
              real-world problems, particularly in machine learning and software engineering.
            </p>
            <p className="mb-6 text-gray-600 text-lg leading-relaxed">
              My experience spans from building scalable backend systems to developing cutting-edge
              machine learning models for computer vision and time series prediction. I've worked
              with companies like Wells Fargo and Elder Research, and contributed to meaningful
              research in Alzheimer's detection.
            </p>

            <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-xl text-white shadow-xl shadow-red-600/30">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <i className="fas fa-graduation-cap"></i> Education
              </h3>
              <h4 className="text-xl font-medium mb-2">North Carolina State University</h4>
              <p className="text-red-50 mb-1">B.S. in Computer Science, Minor in Mathematics</p>
              <p className="text-red-50 mb-4">GPA: 3.9 | December 2025</p>
              <div className="pt-4 border-t border-red-400/30">
                <p className="text-red-50 text-sm">
                  <strong>Activities:</strong> Codepath, Intramural Sports Captain, Student Union Manager, Liquid Rocketry
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <i className="fas fa-code text-red-600"></i> Software Engineering
              </h3>
              <div className="flex flex-wrap gap-3">
                {softwareSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 font-medium hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <i className="fas fa-brain text-red-700"></i> Data Science & ML
              </h3>
              <div className="flex flex-wrap gap-3">
                {mlSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 font-medium hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
