import weather from "../assets/weather.png"
import ecommerce from "../assets/ecommerce.png"
import tasty from "../assets/tasty.png"

function Projects() {
  const projects = [
    {
      title: "Weather Forecast App",
      description: "Weather forecast application with ReactJS, Tailwind, and Openweather API.",
      tags: ['React', 'Tailwind', 'JavaScript', 'Openweather API'],
      demoLink: "https://weatherforecastakashi.netlify.app",
      codeLink: "https://github.com/AungKyawZall-akashi/Weather-Forecast-Website.git",
      image: weather,
    },
    {
      title: "E_Commerce Project",
      description: "E-commerce project with ReactJS, Tailwind,and Fake Store API.",
      tags: ['React', 'Tailwind', 'JavaScript', 'Fake Store API'],
      demoLink: "https://e-commerce-with-api-olive.vercel.app/",
      codeLink: "https://github.com/AungKyawZall-akashi/e_commerce-with-api.git",
      image: ecommerce,
    },
    {
      title: "Tasty Table Application",
      description: "Food recipes and cooking instructions application with Flutter(Dart) and Firebase.",
      tags: ['Flutter(Dart)', 'Firebase', 'API'],
      demoLink: "#",
      codeLink: "#",
      image:tasty,
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-[#1c2333] border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:border-blue-500 transition">
              {/* Project Image */}
              <div className="h-48 flex justify-center items-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-500/30">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">View Demo</a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
