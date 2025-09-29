function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#10172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#1c2333] border border-gray-700 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex justify-center items-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Email</h3>
              <p className="text-gray-300">aungkyawzall72@gmail.com</p>
            </div>
            <div className="bg-[#1c2333] border border-gray-700 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex justify-center items-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.287-.011-1.243-.017-2.253-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.665-.304-5.467-1.333-5.467-5.933 0-1.31.468-2.381 1.235-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.289-1.552 3.295-1.23 3.295-1.23.656 1.653.244 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.479 5.921.43.37.823 1.103.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Github</h3>
              <p className="text-gray-300">
                https://github.com/AungKyawZall-akashi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
