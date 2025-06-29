// components/ToolCard.jsx
function ToolCard({ gambar, nama, ket, delay }) {
  return (
    <div
      className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md group hover:bg-zinc-700 transition-all duration-300"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay={delay}
    >
      <img
        src={gambar}
        alt={`Tools ${nama}`}
        className="w-14 bg-zinc-800 p-1 rounded-md group-hover:bg-zinc-900 transition-all duration-300"
        loading="lazy"
      />
      <div>
        <h4 className="font-bold">{nama}</h4>
        <p className="opacity-50">{ket}</p>
      </div>
    </div>
  );
}

export default ToolCard;
