function Footer() {
  return (
    <footer className="bg-[#0f1419] border-t border-gray-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-xl font-bold">Akashi Portfolio</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Akashi Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;