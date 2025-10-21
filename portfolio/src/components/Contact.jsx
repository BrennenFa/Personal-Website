const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Get In Touch
          <span className="block w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:brennenfarrell12@gmail.com"
              className="bg-white p-8 rounded-xl text-center no-underline hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 border-2 border-transparent shadow-md"
            >
              <i className="fas fa-envelope text-5xl mb-4 block bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm break-words">brennenfarrell12@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/brennen-f/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl text-center no-underline hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 border-2 border-transparent shadow-md"
            >
              <i className="fab fa-linkedin text-5xl mb-4 block bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm">linkedin.com/in/brennen-f/</p>
            </a>

            <a
              href="https://github.com/BrennenFa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl text-center no-underline hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 border-2 border-transparent shadow-md"
            >
              <i className="fab fa-github text-5xl mb-4 block bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
              <p className="text-gray-600 text-sm">github.com/BrennenFa</p>
            </a>

            <a
              href="tel:4075957865"
              className="bg-white p-8 rounded-xl text-center no-underline hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 border-2 border-transparent shadow-md"
            >
              <i className="fas fa-phone text-5xl mb-4 block bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">(407) 595-7865</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
