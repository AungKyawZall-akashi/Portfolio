import Profile from '../assets/me.png';

function Hero() {
  return (
    <section id="home" className="py-20 bg-[#10172a] text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className='text-sky-400'>Aung Kyaw Zall</span></h1>
          <p className="text-lg mb-8">Designing Websites with Fun</p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-white text-sky-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">Contact Me</a>
            <a href="#experience" className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-sky-600 transition">View Experiences</a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-64 h-64 rounded-full bg-white/20 border-4 border-white overflow-hidden shadow-2xl">

            <img 
              src={Profile}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;