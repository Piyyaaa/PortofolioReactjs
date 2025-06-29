// components/SectionTitle.jsx
function SectionTitle({ title, subtitle, center = false }) {
  const alignment = center ? 'text-center' : 'text-left';

  return (
    <div className={`mb-10 ${alignment}`} data-aos="fade-up" data-aos-duration="2000">
      <h1 className="text-5xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-2xl opacity-50">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
