import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const sharedLinks = {
  email: "rohp2002@gmail.com",
  github: "https://github.com/pedroramos-r4mos87",
  linkedin: "https://www.linkedin.com/in/pedro-ramos-0994b6338",
};

const content = {

  pt: {
      nav: {
            about: "Sobre",
            projects: "Projetos",
            skills: "Skills",
            experience: "Experiência",
           },

    languageButton: "English",
    photoAlt: "Foto de Pedro Ramos",
    photoFallbackText: "Adicione sua foto em",
    photoFallbackPath: "public/profile.jpg",

    profile: {
      name: "Pedro Ramos",
      role: "Full-Stack Developer | .NET, React & AI",
      location: "Campo Grande, MS - Brasil",
      summary:
        "Desenvolvo sistemas web, APIs, automações e soluções com IA para transformar problemas reais em produtos digitais simples, funcionais e bem estruturados.",
    },

    hero: {
      eyebrow: "Software Engineer • Campo Grande, Brasil",
      titleStart: "Construo sistemas",
      titleHighlight: "que resolvem",
      titleEnd: "problemas reais.",
      description:
        "Desenvolvedor full-stack especializado em .NET, React, APIs e inteligência artificial. Transformo ideias e processos complexos em produtos digitais simples, escaláveis e funcionais.",
      contact: "Vamos conversar",
      projectsButton: "Explorar projetos",
      available: "Disponível para projetos e oportunidades",
      scroll: "Role para explorar",
    },

    about: {
      kicker: "Sobre",
      title: "Desenvolvedor com visão prática de produto",
      description:
        "Sou estudante de Engenharia de Computação pela UFMS e desenvolvedor full-stack com experiência em backend, APIs, automações e inteligência artificial. Gosto de entender problemas reais, estruturar soluções simples e construir aplicações que ajudem pessoas, equipes e organizações no dia a dia.",
    },

    projectsSection: {
      kicker: "Projetos",
      title: "Trabalhos em destaque",
      viewProject: "Ver projeto",
    },

    skillsSection: {
      kicker: "Skills",
      title: "Ferramentas que uso no dia a dia",
    },

    experienceSection: {
      kicker: "Experiência",
      title: "Atuação profissional e acadêmica",
      items: [
        {
          title: "Software Engineering Intern",
          place: "Centro de Inovação do SESI",
          description:
            "Atuação no desenvolvimento e manutenção de sistemas, APIs e soluções internas utilizando C#, .NET, Entity Framework, PostgreSQL e boas práticas de arquitetura.",
        },
        {
          title: "Pesquisa em Inteligência Artificial",
          place: "UFMS",
          description:
            "Desenvolvimento de projeto acadêmico com classificação de notícias em português, utilizando NLP, modelos de linguagem, métricas de avaliação e explicabilidade.",
        },
      ],
    },

    footer: {
      text: "Vamos criar algo juntos?",
    },

    skillGroups: [
      {
        title: "Backend",
        items: ["C#", ".NET", "Entity Framework", "PostgreSQL", "REST APIs"],
      },
      {
        title: "Frontend",
        items: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
      },
      {
        title: "AI & Data",
        items: [
          "Python",
          "Machine Learning",
          "NLP",
          "Automation",
          "Data Analysis",
        ],
      },
      {
        title: "Tools & Practices",
        items: ["Git", "Clean Architecture", "APIs", "UI Design"],
      },
    ],

    projects: [
      {
        title: "Pés no Arado Check-in System",
        description:
          "Sistema de check-in para eventos, com interface web simples e backend em .NET para gerenciamento de participantes e validação de entradas.",
        tags: ["C#", ".NET", "HTML", "CSS", "REST API"],
        link: "#",
      },
      {
        title: "Ateliê Quiriquiqui do Campo",
        description:
          "Site institucional para um ateliê criativo, com foco em apresentação de marca, catálogo visual e contato direto com clientes.",
        tags: ["React", "CSS", "Landing Page", "UI Design"],
        link: "#",
      },
      {
        title: "Embaixadores do Rei Website",
        description:
          "Site informativo para organização cristã, estruturando conteúdos, identidade visual, informações institucionais e comunicação com o público.",
        tags: ["React", "Content", "Responsive Design", "UI"],
        link: "#",
      },
      {
        title: "Fake News Classification with BERTimbau",
        description:
          "Projeto de pesquisa em IA para classificação de notícias em português, utilizando modelos de linguagem, métricas de avaliação e explicabilidade.",
        tags: ["Python", "NLP", "BERT", "Machine Learning", "XAI"],
        link: "#",
      },
      {
        title: "Brazil Data Explorer",
        description:
          "Aplicação para consulta de dados públicos brasileiros, como CEP, CNPJ e bancos, usando APIs externas.",
        tags: ["React", "API Integration", "BrasilAPI"],
        link: "#",
      },
      {
        title: "EventFlow",
        description:
          "Sistema genérico para inscrição, gerenciamento e check-in de participantes em eventos.",
        tags: ["React", ".NET", "PostgreSQL", "Dashboard"],
        link: "#",
      },
    ],
  },

  en: {

    nav: {
            about: "About",
            projects: "Projects",
            skills: "Skills",
            experience: "Experience",
          },

    languageButton: "Português",
    photoAlt: "Photo of Pedro Ramos",
    photoFallbackText: "Add your photo at",
    photoFallbackPath: "public/profile.jpg",

    profile: {
      name: "Pedro Ramos",
      role: "Full-Stack Developer | .NET, React & AI",
      location: "Campo Grande, MS - Brazil",
      summary:
        "I build web systems, APIs, automations, and AI-powered solutions that turn real-world problems into simple, functional, and well-structured digital products.",
    },

    hero: {
      eyebrow: "Software Engineer • Campo Grande, Brazil",
      titleStart: "I build systems",
      titleHighlight: "that solve",
      titleEnd: "real problems.",
      description:
        "Full-stack developer specializing in .NET, React, APIs, and artificial intelligence. I turn complex ideas and processes into simple, scalable, and functional digital products.",
      contact: "Let's talk",
      projectsButton: "Explore projects",
      available: "Available for projects and opportunities",
      scroll: "Scroll to explore",
    },

    about: {
      kicker: "About",
      title: "Developer with a practical product mindset",
      description:
        "I'm a Computer Engineering student at UFMS and a full-stack developer with experience in backend development, APIs, automation, and artificial intelligence. I enjoy understanding real-world problems, designing simple solutions, and building applications that help people, teams, and organizations in their daily routines.",
    },

    projectsSection: {
      kicker: "Projects",
      title: "Featured work",
      viewProject: "View project",
    },

    skillsSection: {
      kicker: "Skills",
      title: "Tools I use in my daily work",
    },

    experienceSection: {
      kicker: "Experience",
      title: "Professional and academic background",
      items: [
        {
          title: "Software Engineering Intern",
          place: "SESI Innovation Center",
          description:
            "Worked on the development and maintenance of systems, APIs, and internal solutions using C#, .NET, Entity Framework, PostgreSQL, and software architecture best practices.",
        },
        {
          title: "Artificial Intelligence Research",
          place: "UFMS",
          description:
            "Developed an academic project focused on Portuguese fake news classification using NLP, language models, evaluation metrics, and explainability.",
        },
      ],
    },

    footer: {
      text: "Let's build something together?",
    },

    skillGroups: [
      {
        title: "Backend",
        items: ["C#", ".NET", "Entity Framework", "PostgreSQL", "REST APIs"],
      },
      {
        title: "Frontend",
        items: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
      },
      {
        title: "AI & Data",
        items: [
          "Python",
          "Machine Learning",
          "NLP",
          "Automation",
          "Data Analysis",
        ],
      },
      {
        title: "Tools & Practices",
        items: ["Git", "Clean Architecture", "APIs", "UI Design"],
      },
    ],

    projects: [
      {
        title: "Pés no Arado Check-in System",
        description:
          "Event check-in system with a simple web interface and a .NET backend for participant management and entry validation.",
        tags: ["C#", ".NET", "HTML", "CSS", "REST API"],
        link: "#",
      },
      {
        title: "Ateliê Quiriquiqui do Campo",
        description:
          "Institutional website for a creative atelier, focused on brand presentation, visual catalog, and direct customer contact.",
        tags: ["React", "CSS", "Landing Page", "UI Design"],
        link: "#",
      },
      {
        title: "DCER - Connect",
        description:
          "Informational website for a Christian organization, structuring content, visual identity, institutional information, and public communication.",
        tags: ["React", "Content", "Responsive Design", "UI"],
        link: "#",
      },
      {
        title: "Fake News Classification with BERTimbau",
        description:
          "AI research project for Portuguese fake news classification using language models, evaluation metrics, and explainability.",
        tags: ["Python", "NLP", "BERT", "Machine Learning", "XAI"],
        link: "#",
      },
      {
        title: "Brazil Data Explorer",
        description:
          "Application for searching Brazilian public data such as ZIP codes, company records, and banks using external APIs.",
        tags: ["React", "API Integration", "BrasilAPI"],
        link: "#",
      },
      {
        title: "EventFlow",
        description:
          "Generic system for event registration, participant management, and check-in tracking.",
        tags: ["React", ".NET", "PostgreSQL", "Dashboard"],
        link: "#",
      },
    ],
  },
};

function App() {
  const [language, setLanguage] = React.useState("pt");
  const [isChangingLanguage, setIsChangingLanguage] = React.useState(false);

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("intro-title");
  
  const data = content[language];
  const { profile } = data;


  React.useEffect(() => {
  function handleScroll() { setIsScrolled(window.scrollY > 120);  }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => { window.removeEventListener("scroll", handleScroll);};
  }, []);

  React.useEffect(() => {
  const sectionIds = [
    "intro-title",
    "about-title",
    "projects-title",
    "skills-title",
    "experience-title",
  ];

  const elements = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (firstEntry, secondEntry) =>
            secondEntry.intersectionRatio - firstEntry.intersectionRatio
        )[0];

      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75],
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => {
    observer.disconnect();
  };
}, []);


function toggleLanguage() {
  if (isChangingLanguage) return;

  setIsChangingLanguage(true);

  window.setTimeout(() => {
    setLanguage((currentLanguage) =>
      currentLanguage === "pt" ? "en" : "pt"
    );

    window.setTimeout(() => {
      setIsChangingLanguage(false);
    }, 50);
  }, 220);
}

  return (
    <>
  <header
      className={`topBar ${
        isScrolled ? "topBarScrolled" : ""
      }`}
    >
      <div className="topBarInner">
        <a
          className="brandMark"
          href="#intro-title"
          aria-label="Ir ao início"
        >
          PR
        </a>

        <nav className="navLinks" aria-label="Navegação principal">
          <a
            href="#about-title"
            className={activeSection === "about-title" ? "active" : ""}
          >
            <span className="navIndex">01</span>
            <span className="navLabel">{data.nav.about}</span>
          </a>

          <a
            href="#projects-title"
            className={activeSection === "projects-title" ? "active" : ""}
          >
            <span className="navIndex">02</span>
            <span className="navLabel">{data.nav.projects}</span>
          </a>

          <a
            href="#skills-title"
            className={activeSection === "skills-title" ? "active" : ""}
          >
            <span className="navIndex">03</span>
            <span className="navLabel">{data.nav.skills}</span>
          </a>

          <a
            href="#experience-title"
            className={activeSection === "experience-title" ? "active" : ""}
          >
            <span className="navIndex">04</span>
            <span className="navLabel">{data.nav.experience}</span>
          </a>
        </nav>

        <button
          className={`languageToggle ${
            isChangingLanguage ? "isChanging" : ""
          }`}
          type="button"
          onClick={toggleLanguage}
          aria-label="Alterar idioma"
          disabled={isChangingLanguage}
        >
          <span className={language === "pt" ? "active" : ""}>PT</span>
          <span className={language === "en" ? "active" : ""}>EN</span>
        </button>
      </div>
    </header>

  <main
      className={`languageContent ${
      isChangingLanguage ? "languageChanging" : ""
    }`}>
    <section className="hero" aria-labelledby="intro-title">
      <div
        className="heroCoordinates heroCoordinatesLeft"
        aria-hidden="true"
      >
        <span>20.4697° S</span>
        <span>54.6201° W</span>
      </div>

      <div
        className="heroCoordinates heroCoordinatesRight"
        aria-hidden="true"
      >
        <span>FULL STACK</span>
        <span>2026</span>
      </div>

      <div className="heroContent">
        <p className="eyebrow">
          <span className="statusDot" aria-hidden="true" />
          {data.hero.eyebrow}
        </p>

        <h1 id="intro-title" className="heroTitle">
          <span>{data.hero.titleStart}</span>

          <span className="heroTitleHighlight">
            {data.hero.titleHighlight}
          </span>

          <span>{data.hero.titleEnd}</span>
        </h1>

        <p className="heroDescription">{data.hero.description}</p>

        <div className="heroActions" aria-label="Links principais">
          <a className="primaryButton" href={`mailto:${sharedLinks.email}`}>
            <Mail size={18} aria-hidden="true" />
            {data.hero.contact}
          </a>

          <a className="secondaryButton" href="#projects-title">
            {data.hero.projectsButton}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>

          <a
            className="iconButton"
            href={sharedLinks.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={20} aria-hidden="true" />
          </a>

          <a
            className="iconButton"
            href={sharedLinks.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <BriefcaseBusiness size={20} aria-hidden="true" />
          </a>
        </div>

        <div className="heroMeta">
          <span>
            <MapPin size={18} aria-hidden="true" />
            {profile.location}
          </span>

          <span>
            <BriefcaseBusiness size={18} aria-hidden="true" />
            {data.hero.available}
          </span>
        </div>

        <a className="scrollIndicator" href="#projects-title">
          <span>{data.hero.scroll}</span>
          <span className="scrollLine" aria-hidden="true" />
        </a>
      </div>

      <div className="heroVisual" aria-hidden="true">
        <div className="visualGrid" />

        <div className="codeWindow">
          <div className="codeWindowHeader">
            <span />
            <span />
            <span />
          </div>

          <div className="codeContent">
            <p>
              <span className="codePurple">const</span>{" "}
              <span className="codeBlue">developer</span> = {"{"}
            </p>

            <p className="codeIndent">
              name: <span className="codeGreen">"Pedro Ramos"</span>,
            </p>

            <p className="codeIndent">
              stack: [
              <span className="codeGreen">".NET"</span>,{" "}
              <span className="codeGreen">"React"</span>,{" "}
              <span className="codeGreen">"AI"</span>],
            </p>

            <p className="codeIndent">
              mindset: <span className="codeGreen">"product"</span>,
            </p>

            <p className="codeIndent">
              status: <span className="codeGreen">"building"</span>
            </p>

            <p>{"};"}</p>
          </div>
        </div>

        <div className="floatingBadge floatingBadgeTop">
          <span>01</span>
          Backend
        </div>

        <div className="floatingBadge floatingBadgeBottom">
          <span>02</span>
          AI & Products
        </div>

        <div className="orbit orbitOne" />
        <div className="orbit orbitTwo" />
      </div>
    </section>

    <section
      className="section aboutSection"
      aria-labelledby="about-title"
    >
      <span className="sectionNumber" aria-hidden="true">
        01
      </span>

      <div className="sectionHeader">
        <p className="kicker">
          <Sparkles size={16} aria-hidden="true" />
          {data.about.kicker}
        </p>

        <h2 id="about-title">{data.about.title}</h2>
      </div>

      <p className="sectionText">{data.about.description}</p>
    </section>

    <section
      className="section projectsSection"
      aria-labelledby="projects-title"
    >
      <span className="sectionNumber" aria-hidden="true">
        02
      </span>

      <div className="sectionHeader">
        <p className="kicker">
          <Code2 size={16} aria-hidden="true" />
          {data.projectsSection.kicker}
        </p>

        <h2 id="projects-title">{data.projectsSection.title}</h2>
      </div>

      <div className="featuredProject">
        <div className="featuredProjectVisual">
          <div className="featuredProjectNumber">01</div>

          <div className="featuredProjectMockup">
            <span>
              {language === "pt"
                ? "Projeto em destaque"
                : "Featured project"}
            </span>

            <strong>{data.projects[0].title}</strong>
          </div>
        </div>

        <div className="featuredProjectContent">
          <p className="projectLabel">
            {language === "pt"
              ? "Projeto em destaque"
              : "Featured project"}
          </p>

          <h3>{data.projects[0].title}</h3>

          <p>{data.projects[0].description}</p>

          <div className="tagRow">
            {data.projects[0].tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <a
            href={data.projects[0].link}
            target="_blank"
            rel="noreferrer"
          >
            {data.projectsSection.viewProject}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="projectGrid">
        {data.projects.slice(1).map((project) => (
          <article className="projectCard" key={project.title}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="tagRow">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              {data.projectsSection.viewProject}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>

    <section
      className="section split skillsSection"
      aria-labelledby="skills-title"
    >
      <span className="sectionNumber" aria-hidden="true">
        03
      </span>

      <div>
        <p className="kicker">
          <Sparkles size={16} aria-hidden="true" />
          {data.skillsSection.kicker}
        </p>

        <h2 id="skills-title">{data.skillsSection.title}</h2>
      </div>

      <div className="skillGroupGrid" aria-label="Lista de habilidades">
        {data.skillGroups.map((group) => (
          <div className="skillGroup" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skillGrid">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section
      className="section experienceSection"
      aria-labelledby="experience-title"
    >
      <span className="sectionNumber" aria-hidden="true">
        04
      </span>

      <div className="sectionHeader">
        <p className="kicker">
          <BriefcaseBusiness size={16} aria-hidden="true" />
          {data.experienceSection.kicker}
        </p>

        <h2 id="experience-title">{data.experienceSection.title}</h2>
      </div>

      <div className="experienceGrid">
        {data.experienceSection.items.map((item) => (
          <article className="experienceCard" key={item.title}>
            <h3>{item.title}</h3>
            <strong>{item.place}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <footer>
      <p>{data.footer.text}</p>
      <a href={`mailto:${sharedLinks.email}`}>{sharedLinks.email}</a>
    </footer>
  </main>
</>
  );
}

createRoot(document.getElementById("root")).render(<App />);