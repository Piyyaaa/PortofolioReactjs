import DataImage from "./data"
import { listTools, listProyek } from "./data"
import SplashScreen from "./components/SplashScreen";
import ToolCard from "./components/ToolCard";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import SectionTitle from "./components/SectionTitle";

function Home() {
  return (
    <>
    <div className="pt-28"></div>
    <SplashScreen />
      <div className="hero grid md:grid-cols-2 items-center pt-10 gap-6 grid-cols-1 
                    text-white px-6 sm:px-10 md:px-20 py-16 rounded-xl
                      transition-colors duration-500">
      <div className="space-y-6 max-w-lg mx-auto md:mx-0">
        <div className="flex items-center gap-3 mb-6 bg-white/10 w-fit p-4 rounded-2xl backdrop-blur-sm border border-white/20">
          <img src="/assets/profil.png" alt="Foto Profil" className="w-10 rounded-md" loading="lazy" />
          <q className="italic text-white/90">One line of code, a million hopes (and errors). 😊</q>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Hi, I'm <span className="text-blue-400">Jordy Apriyanto</span>
        </h1>
        <p className="text-base sm:text-lg opacity-80">
          Combining creative design and programming logic to craft engaging and functional digital experiences. I focus on developing Websites and Mobile Applications, as well as designing intuitive and modern user interfaces.
        </p>
        <div>
          <a 
            href="/Curriculum Vitae - Jordy Apriyanto.pdf" 
            className="inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-300
                    text-black font-semibold rounded-2xl px-6 py-3 shadow-lg shadow-white-400/60
                      transition duration-300 transform hover:scale-105"
          >
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img 
          src="/assets/profil.png" 
          alt="Foto Profil" 
          className="w-64 sm:w-80 md:w-[400px] rounded-3xl border-4 border-white-400
                    shadow-2xl shadow-white-400/70
                    transition-transform duration-500 hover:scale-105 hover:shadow-blue-500/90"
          loading="lazy"
        />
      </div>
    </div>


      {/* About */}
      <div className="about mt-32 py-10" id="about">
        <div 
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-10 bg-zinc-800 rounded-xl shadow-lg space-y-8" 
          data-aos="fade-up" data-aos-duration="2000"
        >
          <h2 className="text-5xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>

          <p className="text-base/loose text-white/90 leading-relaxed">
            Hello! I'm <strong className="text-blue-400">Jordy Apriyanto</strong>, a passionate and detail-oriented fresh graduate in Informatics Engineering from Tarumanagara University (2024).
            I specialize in Frontend Development and have hands-on experience in building web and mobile applications using 
            <span className="text-blue-400 font-medium"> HTML</span>, 
            <span className="text-blue-400 font-medium"> CSS</span>, 
            <span className="text-blue-400 font-medium"> JavaScript</span>, 
            <span className="text-blue-400 font-medium"> Flutter</span>, and 
            <span className="text-blue-400 font-medium"> Python</span>.
          </p>

          <p className="text-base/loose text-white/70 leading-relaxed">
            I love creating digital products that are not only functional but also beautifully designed. 
            I believe technology is a tool to solve real-world problems, and I'm excited to keep learning and growing. 
            I'm currently looking for opportunities to collaborate with forward-thinking teams and make impactful contributions.
          </p>
        </div>

        {/* Tools Section tetap sama dengan hover */}
        <div className="tools mt-32">
          <SectionTitle 
            title="Tools and Technology" 
            subtitle="Tools and platforms that support my productivity" 
          />

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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



      {/* Project */}
      
      <div className="proyek mt-32 py-10" id="project">
        <SectionTitle 
          title="My Projects" 
          subtitle="Projects I've worked on" 
        />
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <ProjectCard
              key={proyek.id}
              gambar={proyek.gambar}
              nama={proyek.nama}
              shortDesk={proyek.shortDesk}
              tools={proyek.tools}
              delay={proyek.dad}
              slug={proyek.slug}
            />
          ))}
        </div>
      </div>

      {/* Contact */}

      <ContactForm />
    </>
  )
}

export default Home
