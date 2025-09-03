import DataImage from "./data"
import { listTools, listProyek } from "./data"
import SplashScreen from "./components/SplashScreen";
import ToolCard from "./components/ToolCard";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import SectionTitle from "./components/SectionTitle";
import { useState, useEffect } from "react";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Enhanced Hero Section */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10"></div>
        <div 
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 via-purple-500/3 to-transparent rounded-full blur-3xl"></div>

        {/* Splash Screen */}
        <SplashScreen />

        {/* Hero Content */}
        <div className={`hero relative z-10 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
              
              {/* Left Column - Text Content */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                
                {/* Quote Badge */}
                <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-5 rounded-2xl mx-auto lg:mx-0 max-w-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <img 
                    src="/assets/profil.png" 
                    alt="Foto Profil" 
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg object-cover flex-shrink-0" 
                    loading="lazy" 
                  />
                  <q className="italic text-white/90 text-sm sm:text-base leading-relaxed">
                    One line of code, a million hopes (and errors). 😊
                  </q>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                      Jordy Apriyanto
                    </span>
                  </h1>
                  
                  {/* Animated Role Tags */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm font-medium border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                      Frontend Developer
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 text-purple-400 rounded-full text-xs sm:text-sm font-medium border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      UI/UX Enthusiast
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Combining creative design and programming logic to craft engaging and functional digital experiences. 
                  I focus on developing <span className="text-blue-400 font-medium">Websites</span> and <span className="text-purple-400 font-medium">Mobile Applications</span>, 
                  as well as designing intuitive and modern user interfaces.
                </p>

                {/* Skills Quick Preview */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                  {['React.js', 'Flutter', 'Next.js', 'Tailwind', 'JavaScript', 'Python'].map((skill, idx) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-zinc-300 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a 
                    href="Curriculum Vitae - Jordy Apriyanto.pdf" 
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 text-sm sm:text-base"
                  >
                    <span>Download CV</span>
                    <i className="ri-download-line ri-lg group-hover:animate-bounce"></i>
                  </a>
                </div>
              </div>

              {/* Right Column - Profile Image */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-3xl blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 sm:w-28 h-20 sm:h-28 bg-purple-500/20 rounded-3xl blur-xl animate-pulse delay-1000"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <img 
                      src="/assets/profil.png" 
                      alt="Foto Profil" 
                      className="relative w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] h-48 sm:h-64 md:h-80 lg:h-[350px] xl:h-[400px] rounded-3xl border-2 border-white/20 shadow-2xl object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-blue-500/30"
                      loading="lazy"
                    />
                    
                    {/* Floating Stats */}
                    <div className="absolute top-4 -right-2 sm:-right-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-3 sm:p-4 text-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
                      <div className="text-lg sm:text-xl font-bold text-blue-400">{listProyek.length}+</div>
                      <div className="text-xs text-zinc-400">Projects</div>
                    </div>
                    
                    <div className="absolute bottom-4 -left-2 sm:-left-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-3 sm:p-4 text-center transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                      <div className="text-lg sm:text-xl font-bold text-purple-400">2024</div>
                      <div className="text-xs text-zinc-400">Graduate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced About Section */}
      <div className="about py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="about">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-800"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div 
            className="bg-gradient-to-br from-zinc-800/80 to-zinc-700/80 backdrop-blur-sm rounded-3xl border border-zinc-700/50 p-6 sm:p-8 lg:p-12 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500" 
            data-aos="fade-up" 
            data-aos-duration="2000"
          >
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Text Content */}
              <div className="space-y-6 sm:space-y-8">
                <p className="text-sm sm:text-base lg:text-lg text-zinc-200 leading-relaxed">
                  Hello! I'm <strong className="text-blue-400 font-semibold">Jordy Apriyanto</strong>, a passionate and detail-oriented fresh graduate in 
                  <span className="text-purple-400 font-medium"> Informatics Engineering</span> from 
                  <span className="text-cyan-400 font-medium"> Tarumanagara University (2024)</span>.
                </p>

                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  I specialize in <span className="text-blue-400 font-medium">Frontend Development</span> and have hands-on experience in building web and mobile applications using modern technologies.
                </p>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  I love creating digital products that are not only functional but also beautifully designed. 
                  I believe technology is a tool to solve real-world problems, and I'm excited to keep learning and growing.
                </p>

                {/* Tech Stack Highlight */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  {[
                    { name: 'HTML', color: 'text-orange-400' },
                    { name: 'CSS', color: 'text-blue-400' },
                    { name: 'JavaScript', color: 'text-yellow-400' },
                    { name: 'React.js', color: 'text-cyan-400' },
                    { name: 'Next.js', color: 'text-white' },
                    { name: 'Tailwind', color: 'text-teal-400' },
                    { name: 'Flutter', color: 'text-blue-500' },
                    { name: 'Python', color: 'text-green-400' }
                  ].map((tech, idx) => (
                    <div 
                      key={tech.name}
                      className="text-center p-3 bg-zinc-800/50 rounded-xl border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <span className={`text-xs sm:text-sm font-medium ${tech.color}`}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Stats & Achievements */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">2024</div>
                    <div className="text-xs sm:text-sm text-zinc-400">Graduated</div>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">{listProyek.length}+</div>
                    <div className="text-xs sm:text-sm text-zinc-400">Projects</div>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
                    <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">8+</div>
                    <div className="text-xs sm:text-sm text-zinc-400">Technologies</div>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">∞</div>
                    <div className="text-xs sm:text-sm text-zinc-400">Learning</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-zinc-700/50">
                  <h3 className="text-lg font-semibold text-white mb-2">Ready to Collaborate</h3>
                  <p className="text-sm text-zinc-400 mb-4">Looking for opportunities with forward-thinking teams</p>
                  <a 
                  href="#contact">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105">
                    Let's Connect
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tools Section */}
      <div className="tools py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionTitle 
            title="Tools and Technology" 
            subtitle="Tools and platforms that support my productivity" 
          />

          <div className="tools-box mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {listTools.map(tool => (
              <ToolCard
                key={tool.id}
                gambar={tool.gambar}
                nama={tool.nama}
                ket={tool.ket}
                delay={tool.dad}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Project Section - Responsive */}
      <div className="proyek py-16 sm:py-20 lg:py-32 relative overflow-hidden px-4 sm:px-6 lg:px-8" id="project">
        {/* Background Effects - Responsive */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10 pointer-events-none"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionTitle 
            title="My Projects" 
            subtitle="Innovative solutions crafted with passion and precision" 
          />
          
          {/* Project Stats - Responsive */}
          <div className="flex justify-center mt-6 sm:mt-8 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-zinc-700/50 w-full max-w-md sm:max-w-none">
              <div className="text-center flex-1">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">{listProyek.length}+</div>
                <div className="text-xs sm:text-sm text-zinc-400">Projects</div>
              </div>
              <div className="hidden sm:block w-px bg-zinc-700"></div>
              <div className="sm:hidden h-px bg-zinc-700 mx-4"></div>
              <div className="text-center flex-1">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">3+</div>
                <div className="text-xs sm:text-sm text-zinc-400">Technologies</div>
              </div>
              <div className="hidden sm:block w-px bg-zinc-700"></div>
              <div className="sm:hidden h-px bg-zinc-700 mx-4"></div>
              <div className="text-center flex-1">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-xs sm:text-sm text-zinc-400">Passion</div>
              </div>
            </div>
          </div>

          {/* Projects Grid - Responsive */}
          <div className="proyek-box mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {listProyek.map((proyek, index) => (
              <ProjectCard
                key={proyek.id}
                gambar={proyek.gambar}
                nama={proyek.nama}
                shortDesk={proyek.shortDesk}
                tools={proyek.tools}
                delay={proyek.dad}
                slug={proyek.slug}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action - Responsive */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-block p-6 sm:p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl sm:rounded-3xl border border-zinc-700/50 backdrop-blur-sm mx-4 sm:mx-0 w-full max-w-md sm:max-w-none sm:w-auto">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Have a project in mind?</h3>
              <p className="text-sm sm:text-base text-zinc-300 mb-4">Let's collaborate and bring your ideas to life</p>
              <a 
              href="https://wa.me/6281283269921"
              target="_blank"
              rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base">
                Get In Touch
              </button>
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </>
  )
}

export default Home