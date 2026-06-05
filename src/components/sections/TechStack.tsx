import React from 'react';

const technologies = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }, 
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
  { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
  { name: 'dbt', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FF6B4A"><path d="M12 0L2.4 5.4v13.2L12 24l9.6-5.4V5.4L12 0zm7.2 17.4l-7.2 4.1-7.2-4.1V6.6l7.2-4.1 7.2 4.1v10.8z"/></svg>' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'Tableau', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2311548F"><path d="M11.233 11.233H6.711v1.517h4.522v4.522h1.517v-4.522h4.522v-1.517h-4.522V6.711h-1.517z"/></svg>' },
  { name: 'Power BI', icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23F2C811"><path d="M9.215 5.215h4.308v13.57H9.215zm6.462 4.308H20v9.262h-4.323zM2.754 11.677h4.308v7.108H2.754z"/></svg>' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

export function TechStack() {
  return (
    <section className="bg-[#0b0c10] text-white py-20 flex flex-col items-center justify-center">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-gray-100">
          Tecnologías que domino
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Stack moderno y probado en producción para escalar cualquier proyecto de datos.
        </p>
      </div>

      {/* Contenedor Flex con envoltura para recrear la cuadrícula original alineada al centro */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 px-6">
        {technologies.map((tech, index) => {
          // Resaltado amarillo específico para Power BI tal como en la captura
          const isPowerBI = tech.name === 'Power BI';
          
          return (
            <div
              key={index}
              className={`flex items-center gap-3 bg-[#161b22]/40 border rounded-xl px-5 py-3 select-none backdrop-blur-sm transition-all duration-300 hover:scale-105
                ${isPowerBI 
                  ? 'border-yellow-500/70 shadow-[0_0_15px_rgba(234,179,8,0.1)]' 
                  : 'border-gray-800 hover:border-gray-700'
                }`}
            >
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                className="w-6 h-6 object-contain"
                loading="lazy"
              />
              <span className="text-sm font-medium text-gray-300">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}