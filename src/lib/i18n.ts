export type Lang = "EN" | "ES";

export const translations = {
  ES: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      stack: "Stack",
      contact: "Contacto",
      available: "Disponible ahora",
    },
    hero: {
      badge: "Agenda abierta para Q3 2026",
      headline1: "Transformo datos",
      headline2: "en decisiones estrategicas.",
      subtitle: "Ingeniero de Datos | Data Analyst | Data Scientist",
      description: "Construyo pipelines escalables, dashboards inteligentes y modelos de ML que convierten datos crudos en ventajas competitivas.",
      ctaProjects: "Ver Proyectos →",
      ctaCall: "Agendar Llamada",
    },
    stats: {
      projects: "Proyectos entregados",
      experience: "Años de experiencia",
      clients: "Clientes activos",
      awards: "Premios internacionales",
    },
    services: {
      label: "Servicios Especializados",
      title: "Soluciones de datos a la medida",
      subtitle: "Desde la ingesta hasta la inteligencia artificial, cubro todo el ciclo de vida del dato.",
      engineering: {
        title: "DATA ENGINEERING",
        items: ["Pipelines ETL/ELT", "Data Warehouses", "Cloud Infrastructure", "Real-time Streaming", "Data Governance"],
      },
      analytics: {
        title: "DATA ANALYTICS",
        items: ["Dashboards Interactivos", "BI Reporting", "SQL Analysis Avanzado", "A/B Testing", "KPI Tracking"],
      },
      science: {
        title: "DATA SCIENCE",
        items: ["Machine Learning", "Predictive Models", "NLP & Computer Vision", "MLOps", "AutoML"],
      },
      more: "Saber mas",
    },
    techStack: {
      label: "Mi Arsenal Tecnico",
      title: "Tecnologias que domino",
      subtitle: "Stack moderno y probado en produccion para escalar cualquier proyecto de datos.",
    },
    projects: {
      label: "Proyectos Seleccionados",
      title: "Impacto real, resultados medibles",
      subtitle: "Cada proyecto es una historia de transformacion de datos en valor de negocio.",
      cases: [
        {
          title: "Dashboard Predictivo Real",
          tag: "Retail Analytics",
          stack: "Python · Streamlit · AWS · Redshift",
          desc: "Reduccion del 35% en stockouts mediante prediccion de demanda en tiempo real.",
        },
        {
          title: "Pipeline ETL en Tiempo Real",
          tag: "Fintech",
          stack: "Apache Spark · Kafka · S3 · Airflow",
          desc: "Procesamiento de 2M+ transacciones/dia con latencia < 100ms.",
        },
        {
          title: "Modelo de Churn 94%",
          tag: "SaaS B2B",
          stack: "Scikit-learn · XGBoost · MLflow · FastAPI",
          desc: "Identificacion proactiva de clientes en riesgo, ahorro de $500K anual.",
        },
        {
          title: "Visualizacion 3D Geoespacial",
          tag: "Logistica",
          stack: "D3.js · Three.js · Python · PostGIS",
          desc: "Dashboard interactivo 3D para optimizacion de rutas de distribucion.",
        },
      ],
      viewCase: "Ver caso",
    },
    testimonials: {
      label: "Testimonios",
      title: "Lo que dicen mis clientes",
      items: [
        {
          quote: "Su trabajo con nuestros datos transformo completamente nuestra toma de decisiones. El dashboard predictivo que construyo ahorra 20 horas semanales al equipo de operaciones.",
          author: "Carlos Mendez",
          role: "CTO, Fintech Startup",
          location: "Madrid",
        },
        {
          quote: "El pipeline de datos que implemento procesa millones de registros sin fallos. La calidad del codigo y la documentacion son excepcionales.",
          author: "Ana Garcia",
          role: "Head of Data, RetailCorp",
          location: "Barcelona",
        },
        {
          quote: "Su modelo de ML para prediccion de churn aumento nuestra retencion de clientes en un 40%. Resultados medibles desde el primer mes.",
          author: "Luis Torres",
          role: "CEO, SaaS B2B",
          location: "Valencia",
        },
      ],
    },
    cta: {
      title: "Tienes un proyecto de datos?",
      subtitle: "Agenda una llamada gratuita de 30 minutos",
      description: "y descubramos como puedo ayudarte a escalar tu negocio con datos.",
      schedule: "Agendar Llamada",
      email: "Enviar Email",
      direct: "O escribeme directamente:",
    },
    footer: {
      role: "Ingeniero de Datos",
      links: "Links",
      social: "Social",
      contact: "Contacto",
      copyright: "2026 DataCraft. Hecho con amor y mucho cafe.",
    },
  },
  EN: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
      available: "Available now",
    },
    hero: {
      badge: "Open agenda for Q3 2026",
      headline1: "I transform data",
      headline2: "into strategic decisions.",
      subtitle: "Data Engineer | Data Analyst | Data Scientist",
      description: "I build scalable pipelines, intelligent dashboards and ML models that turn raw data into competitive advantages.",
      ctaProjects: "View Projects →",
      ctaCall: "Schedule Call",
    },
    stats: {
      projects: "Projects delivered",
      experience: "Years of experience",
      clients: "Active clients",
      awards: "International awards",
    },
    services: {
      label: "Specialized Services",
      title: "Tailored data solutions",
      subtitle: "From ingestion to artificial intelligence, I cover the entire data lifecycle.",
      engineering: {
        title: "DATA ENGINEERING",
        items: ["ETL/ELT Pipelines", "Data Warehouses", "Cloud Infrastructure", "Real-time Streaming", "Data Governance"],
      },
      analytics: {
        title: "DATA ANALYTICS",
        items: ["Interactive Dashboards", "BI Reporting", "Advanced SQL Analysis", "A/B Testing", "KPI Tracking"],
      },
      science: {
        title: "DATA SCIENCE",
        items: ["Machine Learning", "Predictive Models", "NLP & Computer Vision", "MLOps", "AutoML"],
      },
      more: "Learn more",
    },
    techStack: {
      label: "My Tech Arsenal",
      title: "Technologies I master",
      subtitle: "Modern and production-proven stack to scale any data project.",
    },
    projects: {
      label: "Selected Projects",
      title: "Real impact, measurable results",
      subtitle: "Each project is a story of transforming data into business value.",
      cases: [
        {
          title: "Real Predictive Dashboard",
          tag: "Retail Analytics",
          stack: "Python · Streamlit · AWS · Redshift",
          desc: "35% reduction in stockouts through real-time demand prediction.",
        },
        {
          title: "Real-time ETL Pipeline",
          tag: "Fintech",
          stack: "Apache Spark · Kafka · S3 · Airflow",
          desc: "Processing 2M+ transactions/day with < 100ms latency.",
        },
        {
          title: "Churn Model 94%",
          tag: "SaaS B2B",
          stack: "Scikit-learn · XGBoost · MLflow · FastAPI",
          desc: "Proactive identification of at-risk clients, $500K annual savings.",
        },
        {
          title: "3D Geospatial Visualization",
          tag: "Logistics",
          stack: "D3.js · Three.js · Python · PostGIS",
          desc: "Interactive 3D dashboard for distribution route optimization.",
        },
      ],
      viewCase: "View case",
    },
    testimonials: {
      label: "Testimonials",
      title: "What my clients say",
      items: [
        {
          quote: "His work with our data completely transformed our decision-making. The predictive dashboard he built saves our operations team 20 hours weekly.",
          author: "Carlos Mendez",
          role: "CTO, Fintech Startup",
          location: "Madrid",
        },
        {
          quote: "The data pipeline he implemented processes millions of records without failures. Code quality and documentation are exceptional.",
          author: "Ana Garcia",
          role: "Head of Data, RetailCorp",
          location: "Barcelona",
        },
        {
          quote: "His ML model for churn prediction increased our customer retention by 40%. Measurable results from the first month.",
          author: "Luis Torres",
          role: "CEO, SaaS B2B",
          location: "Valencia",
        },
      ],
    },
    cta: {
      title: "Have a data project?",
      subtitle: "Schedule a free 30-minute call",
      description: "and let's discover how I can help you scale your business with data.",
      schedule: "Schedule Call",
      email: "Send Email",
      direct: "Or write me directly:",
    },
    footer: {
      role: "Data Engineer",
      links: "Links",
      social: "Social",
      contact: "Contact",
      copyright: "2026 DataCraft. Made with love and lots of coffee.",
    },
  },
} as const;

export type Translations = typeof translations[Lang];