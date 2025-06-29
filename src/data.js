import HeroImage from "/assets/profil.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/hlogo.png";
import Tools3 from "/assets/tools/clogo.png";
import Tools4 from "/assets/tools/flutter.png";
import Tools5 from "/assets/tools/python.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/flask.jpg";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/sql.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/ps.png";
import Tools13 from "/assets/tools/reactjs.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "HTML",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "CSS",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Flutter",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Python",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Flask",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "MySQL",
    ket: "Database",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Adobe Photoshop",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "React JS",
    ket: "Framework",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/freelancing.png";
import Proyek2 from "/assets/proyek/anydo.jpg";
import Proyek3 from "/assets/proyek/nitip.png";
import Proyek4 from "/assets/proyek/game.jpeg";
import Proyek5 from "/assets/proyek/chatbot.jpeg";
import Proyek6 from "/assets/proyek/transjakarta.png";
import Proyek7 from "/assets/proyek/porto.jpeg";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Freelance Website (Freelancing)",
    shortDesk: "Freelancing is a platform used to find work with clients or companies that need services.",
    desk: "Freelancing is a platform used to find job opportunities from clients or companies that are in need of various services. On this platform, freelancers can showcase and offer their skills in a wide range of fields, such as writing, graphic design, programming, translatiom, and many others.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "200",
    slug: "freelancing",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "To Do List Application (Any.do)",
    shortDesk: "Any.do is an application designed to help users manage and organize lists of tasks that need to be completed.",
    desk: "Any.do is a productivity application designed to help users efficiently manage and organize their daily tasks, to-do-lists, and scheduled activities. With Any.do, users can easily record tasks, categorize them into different lists or projects, set priorities, add deadlines or reminders, and even sync their tasks across multiple devices. The app aims to improve personal organization and time management, making it easier for users to stay focused and productive. ",
    tools: ["Flutter", "Firebase"],
    dad: "300",
    slug: "company-profile",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "NiTiP Delivery (Aplikasi Pemesanan Makanan)",
    shortDesk: "NiTiP is a digital platform in the form of a mobile application that allows user to order food.",
    desk: "NiTiP is a digital platform in the form of a mobile application that allows users to conveniently order food from various restaurants or food vendors and have it delivered directly to their location through a dedicated courier (driver). The app is designed to provide a seamless and user-friendly experience, enabling customers to browse menus, place orders, track deliveries in real time, and enjoy their meals without leaving the comfort of their home or office.",
    tools: ["Flutter", "Dart", "Firebase"],
    dad: "400",
    slug: "nitip",
    posisi: "tengah"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Adventure Game",
    shortDesk: "Game 2D platformer that invites players to explore world full of obstacles, enemies, and secrets.",
    desk: "This game is a 2D platformer adventure game that invites players to explore a world full of obstacles, enemies, and secrets. Players will control the main character who adventures through various levels with unique challenges, collecting items, avoiding traps, and defeating enemies to reach the final goal. With simple controls but challenging gameplay, this game presents an exciting adventure experience full of action and exploration.",
    tools: ["Unity", "C#"],
    dad: "500",
    slug: "game"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Chatbot",
    shortDesk: "Chatbot application for pharmacies.",
    desk: "This Android-based chatbot application for pharmacies is built using Flutter and Dart for a responsive user interface (UI) on the Android platform. The chatbot in this application allows users to interact and get drug recommendations based on their symptoms or health conditions. On the backend, the application uses Python and Flask to handle server-side logic, such as processing user symptom data and searching for drugs in the pharmacy database. In addition, this application utilizes the REST API to connect the frontend (Flutter application on Android) with the backend (Flask) which allows data communication between the mobile application and the server.",
    tools: ["Flutter", "Dart", "Python", "Flask"],
    dad: "600",
    slug: "chatbot"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Project Standard Operating Procedures Transjakarta",
    shortDesk: "Develop Standard Operating Procedures (SOP) and flowcharts for electric Transjakarta.",
    desk: "This project aims to develop Standard Operating Procedures (SOP) and flowcharts for operational workflows for electric Transjakarta fleets. These SOP cover standard procedures ranging from charging, electric vehicle maintenance, daily fleet operations, to handling emergency conditions. The flowcharts are designed to provide a visual representation of the workflow to facilitate understanding and implementation of procedures by all related parties, including drivers, technicians, and operational management. With structured SOP and flowcharts, it is hoped that electric Transjakarta operations will be more efficient, safe, environmentally friendly, and in accordance with modern public transportation service quality standards.",
    tools: ["Microsoft Word", "Microsoft Visio"],
    dad: "700",
    slug: "transjakarta"
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Portofolio",
    shortDesk: "Portofolio website",
    desk: "This portofolio is designed to showcase my work and experience in web design, software development, and mobile application design. It features a variety of projects I have worked on, including User Interface (UI) designs, responsive websites, and fully functional mobile apps. The website serves as a professional presentation of my skills and capabilities for potential clients or recruiters.",
    tools: ["HTML", "CSS", "JavaScript"],
    dad: "700",
    slug: "portofolio"
  },
];
