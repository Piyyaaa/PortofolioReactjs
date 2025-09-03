import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const navItems = [
    { name: "Home", href: "/#home", icon: "🏠" },
     { name: "About", href: "/#about", icon: "👤" },
    { name: "Projects", href: "/#project", icon: "💼" },
    { name: "Contact", href: "/#contact", icon: "📧" }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'py-6 bg-transparent backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo with animation */}
            <div className="logo group cursor-pointer">
              <div className="flex items-center space-x-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 
                  flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                  scrolled ? 'shadow-lg' : 'shadow-xl'
                }`}>
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <h1 className={`font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent 
                  transition-all duration-300 group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 ${
                  scrolled ? 'text-xl' : 'text-2xl'
                }`}>
                  Portofolio
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 
                      hover:bg-white/10 hover:backdrop-blur-sm flex items-center space-x-2 ${
                      activeSection === item.name.toLowerCase() 
                        ? 'text-blue-400 bg-white/10' 
                        : 'text-white hover:text-blue-300'
                    }`}
                    onClick={() => setActiveSection(item.name.toLowerCase())}
                  >
                    <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="text-sm lg:text-base">{item.name}</span>
                    
                    {/* Animated underline */}
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r 
                      from-blue-400 to-purple-400 transition-all duration-300 ${
                      activeSection === item.name.toLowerCase() ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`} />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 
                flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200
                hover:bg-white/20 hover:scale-105"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col items-center justify-center space-y-1">
                <span className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <span className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Background overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-xl 
          border-l border-white/10 transform transition-transform duration-500 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Menu header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center 
                  hover:bg-white/20 transition-colors duration-200"
              >
                <span className="text-white text-lg">×</span>
              </button>
            </div>
            
            {/* Menu items */}
            <div className="flex-1 p-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setActiveSection(item.name.toLowerCase());
                      }}
                      className={`group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 
                        hover:bg-white/10 hover:transform hover:translate-x-2 ${
                        activeSection === item.name.toLowerCase() 
                          ? 'bg-white/10 text-blue-400' 
                          : 'text-white hover:text-blue-300'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-xl group-hover:scale-125 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span className="text-lg font-medium">{item.name}</span>
                      <div className="flex-1" />
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 
                        transition-all duration-300 ${
                        activeSection === item.name.toLowerCase() ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Menu footer */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-center space-x-4 text-white/60 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Navbar;