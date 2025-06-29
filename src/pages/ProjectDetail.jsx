// pages/ProjectDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { listProyek } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { additionalProjectImages } from "../pages/ProjectImages";

function ProjectDetail() {
  const { slug } = useParams();
  const proyek = listProyek.find((p) => p.slug === slug);
  const navigate = useNavigate();

  if (!proyek) {
    return (
      <div className="p-10 text-white">
        <h1 className="text-3xl font-bold">404 - Project Not Found</h1>
        <Link to="/" className="text-blue-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 p-10 text-white">
      <h1 className="text-4xl font-bold mb-4">{proyek.nama}</h1>
      <p className="mb-6 text-zinc-300">{proyek.desk}</p>

      {/* Carousel Swiper */}
      <div className="mb-6">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {/* Gambar utama */}
          <SwiperSlide>
            <img
              src={proyek.gambar}
              alt={`${proyek.nama} utama`}
              className="rounded-xl max-h-[500px] w-auto mx-auto object-contain"
            />
          </SwiperSlide>

          {/* Gambar tambahan */}
          {additionalProjectImages[proyek.slug]?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="rounded-xl max-h-[500px] w-auto mx-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {proyek.tools.map((tool, idx) => (
          <span key={idx} className="py-1 px-3 bg-blue-700 text-white rounded-md">
            {tool}
          </span>
        ))}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="text-blue-400 hover:underline"
      >
        ← Back to Home
      </button>
    </div>
  );
}

export default ProjectDetail;
