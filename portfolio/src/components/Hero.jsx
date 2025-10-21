const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%)] z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Brennen Farrell</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Software Engineer & Machine Learning Developer
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Computer Science student at NC State with a passion for building innovative solutions
            at the intersection of software engineering and machine learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3.5 text-base font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3.5 text-base font-semibold rounded-lg bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="mailto:brennenfarrell12@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 text-xl shadow-md hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://linkedin.com/in/brennen-f/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 text-xl shadow-md hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/BrennenFa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 text-xl shadow-md hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="tel:4075957865"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-500 text-xl shadow-md hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
              aria-label="Phone"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
