import React, { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges?: string;
  github: string;
  live?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "School Management System API",
    description:
      "A backend RESTful API for managing students, exams, questions, and exam results in a school environment, built with Node.js and MongoDB.",
    image:
      "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
    ],
    features: [
      "Student registration and login with JWT authentication",
      "Exam creation and question assignment",
      "Students can write exams with automated result calculation",
      "Secure password hashing using bcrypt",
      "Role-based access structure with scalable folder architecture",
      "Environment-configured server and database setup",
    ],
    challenges:
      "Handling exam result logic to prevent multiple submissions and ensuring secure authentication while keeping the code modular and scalable.",
    github: "https://github.com/athul457/schoolManagement-app",
  },

  {
    id: 2,
    title: "Guess My Number",
    description:
      "A fun number guessing game where players try to guess a secret number between 1 and 20. Features include score tracking, high score persistence, and immediate feedback.",
    image:
      "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    features: [
      "Random number generation",
      "Score tracking with decreasing points",
      "High score persistence",
      "Immediate guess feedback",
      "One-click game reset",
    ],
    challenges:
      "Implementing game state management and ensuring responsive design across different screen sizes.",
    github: "https://github.com/athul457/Guess-Game",
    live: "https://guesswhatnumbergame.netlify.app/",
  },
  {
    id: 3,
    title: "Monex Banking",
    description:
      "A modern minimalist digital banking interface with smooth animations and interactive components for a seamless financial experience.",
    image:
      "https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "100% digital banking experience with no physical branches",
      "Instant money transfers with zero fees",
      "Interactive features tab system with smooth animations",
      "Testimonial slider with customer reviews",
      "Modern minimalist UI with clean typography",
      "Responsive design that works on all devices",
      "Lazy loading for optimized performance",
      "Modal window for account signup",
    ],
    challenges:
      "Implementing smooth scroll animations while maintaining performance and creating intuitive banking interactions without traditional form-heavy approaches.",
    github: "https://github.com/athul457/Monex-Bank",
    live: "https://monexbankapp.netlify.app/",
  },
  {
    id: 4,
    title: "Movie Explorer",
    description:
      "A modern React web app that allows users to browse popular movies, search for specific titles, and manage a personalized favorites list. Powered by the TMDB API, it features real-time movie data and a sleek UI.",
    image:
      "https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "JavaScript", "CSS3", "TMDB API", "Context API"],
    features: [
      "Fetch and display popular movies from TMDB",
      "Search movies by title",
      "Add or remove movies from a favorites list",
      "Favorites list persists during session",
      "Responsive and mobile-friendly UI",
      "Global state management using Context API",
    ],
    challenges:
      "Managing global state efficiently for the favorites list and handling asynchronous API calls for search and popular movies.",
    github: "https://github.com/athul457/react-movie-app",
    live: "https://cinema-application-react.netlify.app/",
  },
  {
    id: 5,
    title: "Yum Yum Gooo",
    description:
      "A modern React food delivery app with a clean UI, allowing users to search for foods, manage favorites, and apply discount coupons for savings.",
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: [
      "React",
      "React DOM",
      "Vite",
      "JavaScript",
      "CSS3",
      "Context API",
      "React Router",
    ],
    features: [
      "Search Items by name",
      "Add or remove favorite Items",
      "Apply discount coupons",
      "Multi-page navigation with React Router",
      "Global state management using Redux Toolkit",
      "Component-based architecture",
    ],
    challenges:
      "Managing state for favorites, handling search efficiently, and applying coupon logic while maintaining performance.",
    github: "https://github.com/athul457/react-food-app",
    live: "https://yumyumgooo.netlify.app/",
  },
  {
    id: 2,
    title: "Multimart Ecommerce App",
    description:
      "A responsive ecommerce web application built with React and Redux Toolkit, offering product browsing, cart management, and a seamless shopping experience.",
    image:
      "https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Redux Toolkit", "React Router", "CSS"],
    features: [
      "Browse and view product details",
      "Add to cart, increase/decrease quantity",
      "User-friendly navigation and category filters",
      "Responsive design for all screen sizes",
      "Global state management using Redux Toolkit",
    ],
    challenges:
      "Implementing a scalable state management system and ensuring smooth UI performance while handling multiple product interactions.",
    github: "https://github.com/athul457/e-com-app",
    live: "https://e-com-shop-pplication.netlify.app/",
  },
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title="My Projects" subtitle="Recent work I've built" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="card overflow-hidden group project-card cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="project-overlay absolute inset-0 bg-dark-900/70 flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="py-1 px-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="py-1 px-2 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 sm:h-80 overflow-hidden">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-dark-900/70 text-white p-2 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-dark-900 dark:text-white">
                {activeProject.title}
              </h2>
              <p className="text-dark-600 dark:text-dark-300 mb-6">
                {activeProject.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-dark-800 dark:text-dark-100">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="py-1 px-3 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-dark-800 dark:text-dark-100">
                  Key Features
                </h3>
                <ul className="list-disc list-inside text-dark-600 dark:text-dark-300 space-y-2">
                  {activeProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {activeProject.challenges && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-dark-800 dark:text-dark-100">
                    Challenges & Solutions
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300">
                    {activeProject.challenges}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <Github size={18} />
                  View Code
                </a>
                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
