import tailwind from '../assets/tailwind.png'

function Skills() {
  const skillsList = [
    { 
      name: 'HTML', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Tailwind', 
      icon: tailwind
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'Git', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
      name: 'Figma', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    }
  ];
  
  return (
    <section id="skills" className="py-20 bg-[#10172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-[#1c2333] border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500 transition transform hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto flex justify-center items-center mb-4">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-center text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;