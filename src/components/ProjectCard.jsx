import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProjectCard({ gambar, nama, shortDesk, tools, delay, slug, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Dynamic gradient colors based on index
  const gradients = [
    'from-blue-500/20 to-cyan-500/20',
    'from-purple-500/20 to-pink-500/20',
    'from-green-500/20 to-emerald-500/20',
    'from-orange-500/20 to-red-500/20',
    'from-indigo-500/20 to-blue-500/20',
    'from-teal-500/20 to-cyan-500/20'
  ];
  
  const borderColors = [
    'border-blue-500/50',
    'border-purple-500/50', 
    'border-green-500/50',
    'border-orange-500/50',
    'border-indigo-500/50',
    'border-teal-500/50'
  ];

  const shadowColors = [
    'hover:shadow-blue-500/25',
    'hover:shadow-purple-500/25',
    'hover:shadow-green-500/25', 
    'hover:shadow-orange-500/25',
    'hover:shadow-indigo-500/25',
    'hover:shadow-teal-500/25'
  ];

  const currentGradient = gradients[index % gradients.length];
  const currentBorder = borderColors[index % borderColors.length];
  const currentShadow = shadowColors[index % shadowColors.length];

  return (
    <div
      className={`group relative p-1 rounded-2xl bg-gradient-to-br ${currentGradient} transition-all duration-500 hover:scale-[1.02] ${currentShadow} hover:shadow-2xl`}
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay={delay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border effect */}
      <div className={`absolute inset-0 rounded-2xl border-2 ${currentBorder} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative h-full bg-zinc-900/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 flex flex-col justify-between min-h-[520px] sm:min-h-[580px] overflow-hidden">
        
        {/* Floating particles effect */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
        <div className="absolute bottom-6 sm:bottom-8 left-3 sm:left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-300"></div>
        
        {/* Image container with overlay - Responsive */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6 bg-zinc-800 group">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={gambar}
            alt={`Project ${nama}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Image overlay buttons - Hidden on mobile, shown on tablet+ */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <button className="p-2 sm:p-3 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-black/90 transform hover:scale-110 transition-all duration-200">
              <FiEye size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button className="p-2 sm:p-3 bg-black/70 backdrop-blur-sm rounded-full text-white hover:bg-black/90 transform hover:scale-110 transition-all duration-200">
              <FiGithub size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col flex-grow">
          {/* Project number badge - Responsive */}
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <span className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded text-[10px] sm:text-xs">
              #{String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                    isHovered ? 'bg-blue-400' : 'bg-zinc-600'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 leading-tight">
            {nama}
          </h1>
          
          <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300 line-clamp-3">
            {shortDesk}
          </p>

          {/* Enhanced tools display - Responsive */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {tools.map((tool, toolIndex) => (
              <span
                key={toolIndex}
                className={`py-1.5 sm:py-2 px-2.5 sm:px-4 text-xs sm:text-sm font-medium rounded-full border transition-all duration-300 transform hover:scale-105 ${currentBorder} text-blue-300 hover:bg-gradient-to-r hover:${currentGradient} hover:text-white hover:shadow-lg`}
                style={{ 
                  animationDelay: `${toolIndex * 100}ms`,
                  animation: isHovered ? 'pulse 2s infinite' : 'none'
                }}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Enhanced CTA button - Responsive */}
          <div className="mt-auto">
            <Link
              to={`/project/${slug}`}
              className="group/btn relative inline-flex items-center justify-center gap-2 sm:gap-3 w-full bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-blue-600 hover:to-purple-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl border border-zinc-600 transition-all duration-500 overflow-hidden text-sm sm:text-base"
            >
              {/* Button background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative z-10 font-medium">See Details</span>
              <FiExternalLink className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;