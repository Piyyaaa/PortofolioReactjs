// pages/ProjectDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { listProyek } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { additionalProjectImages } from "../pages/ProjectImages";
import { FiArrowLeft, FiExternalLink, FiGithub, FiCalendar, FiUsers, FiCode, FiStar, FiEye, FiDownload } from "react-icons/fi";
import { useState, useEffect } from "react";

function ProjectDetail() {
  const { slug } = useParams();
  const proyek = listProyek.find((p) => p.slug === slug);
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!proyek) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="text-center p-10 bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-white mb-4">404 - Project Not Found</h1>
          <p className="text-zinc-400 mb-6">The project you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <FiArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [
    proyek.gambar,
    ...(additionalProjectImages[proyek.slug] || [])
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className={`relative z-10 pt-28 pb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <div className="p-2 rounded-full bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors duration-300">
                <FiArrowLeft className="transform group-hover:-translate-x-1 transition-transform duration-300" />
              </div>
              <span>Back</span>
            </button>
            <div className="h-6 w-px bg-zinc-700"></div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span>Projects</span>
              <span>/</span>
              <span className="text-blue-400">{proyek.nama}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left Column - Project Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FiStar className="animate-pulse" />
                Featured Project
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {proyek.nama}
              </h1>
              
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                {proyek.desk}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <FiCode className="text-blue-400" size={20} />
                    </div>
                    <span className="text-sm text-zinc-400">Technologies</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{proyek.tools.length}</div>
                </div>
                
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <FiEye className="text-green-400" size={20} />
                    </div>
                    <span className="text-sm text-zinc-400">Status</span>
                  </div>
                  <div className="text-lg font-semibold text-green-400">Completed</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {proyek.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="group py-3 px-4 bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-blue-600/20 hover:to-purple-600/20 text-white rounded-xl border border-zinc-600/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <span className="font-medium">{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image Gallery */}
            <div>
              <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Project Gallery</h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <span>{activeImageIndex + 1}</span>
                    <span>/</span>
                    <span>{allImages.length}</span>
                  </div>
                </div>

                {/* Enhanced Swiper */}
                <div className="mb-6 swiper-container">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    navigation={{
                      nextEl: '.swiper-button-next-custom',
                      prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{ 
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    effect="coverflow"
                    coverflowEffect={{
                      rotate: 20,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveImageIndex(swiper.activeIndex)}
                    className="project-swiper"
                  >
                    {allImages.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative group cursor-pointer">
                          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl bg-zinc-900 flex items-center justify-center">
                            <img
                              src={image}
                              alt={`${proyek.nama} - Image ${idx + 1}`}
                              className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    
                    {/* Custom Navigation */}
                    <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-all duration-300 cursor-pointer">
                      <FiArrowLeft />
                    </div>
                    <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-all duration-300 cursor-pointer">
                      <FiExternalLink className="rotate-180" />
                    </div>
                  </Swiper>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
                  {allImages.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        // You can add swiper instance control here
                        setActiveImageIndex(idx);
                      }}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        activeImageIndex === idx
                          ? 'border-blue-500 shadow-lg shadow-blue-500/25'
                          : 'border-zinc-600 hover:border-zinc-500'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .project-swiper .swiper-pagination-bullet {
          background: rgba(59, 130, 246, 0.5);
          opacity: 1;
        }
        .project-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.2);
        }
        .swiper-container {
          overflow: visible;
        }
      `}</style>
    </div>
  );
}

export default ProjectDetail;