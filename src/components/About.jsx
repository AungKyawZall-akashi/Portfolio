function About() {
  return (
    <section id="about" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative mx-auto">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-4 border-blue-500 flex justify-center items-center overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
                <span className="text-4xl font-bold text-blue-400 relative z-10">A</span>
              </div>
              
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <div className="flex flex-col space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-gray-300 mb-6">
             I'm a creative frontend developer passionate about crafting beautiful and intuitive user interfaces. 
             I specialize in building well-structured, responsive designs and enjoy turning complex requirements into clean, elegant solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;