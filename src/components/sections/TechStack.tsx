import React from 'react';

const technologies = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }, 
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
  { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
  { name: 'dbt', icon: 'https://unpkg.com/simple-icons@v9/icons/dbt.svg' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'Tableau', icon: 'https://unpkg.com/simple-icons@v9/icons/tableau.svg' },
  { name: 'Power BI', icon: 'https://unpkg.com/simple-icons@v9/icons/powerbi.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

export function TechStack() {
  // Dividimos las tecnologías equitativamente para mantener las dos líneas independientes
  const half = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, half);
  const row2 = technologies.slice(half);

  // Duplicamos cada fila para que el bucle infinito no tenga cortes visuales
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  // Función helper para renderizar las tarjetas y evitar código repetido
  const renderCard = (tech: typeof technologies[0], index: number) => {
    const isTableau = tech.name === 'Tableau';
    const isDbt = tech.name === 'dbt';
    const isPowerBI = tech.name === 'Power BI';

    // Evitamos conflictos con punteros para asegurar el efecto hover en toda la tarjeta
    let iconClass = "w-6 h-6 object-contain pointer-events-none";
    if (isDbt) iconClass += " icon-dbt";
    if (isTableau) iconClass += " icon-tableau";
    if (isPowerBI) iconClass += " icon-powerbi";

    return (
      <div
        key={index}
        className="group flex items-center gap-3 bg-[#161b22]/40 border border-gray-800 rounded-xl px-5 py-3 select-none backdrop-blur-sm hover:border-gray-600 hover:bg-[#1c212a] transition-all duration-200 cursor-pointer"
      >
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className={iconClass}
          loading="lazy"
        />
        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-200 pointer-events-none">
          {tech.name}
        </span>
      </div>
    );
  };

  return (
    <section className="bg-[#0b0c10] text-white py-20 overflow-hidden flex flex-col items-center justify-center">
      <style>{`
        /* Animación hacia la izquierda */
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Animación hacia la derecha */
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee-left {
          animation: marqueeLeft 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 40s linear infinite;
        }

        /* Filtros CSS para inyectar los colores corporativos a los vectores monocromáticos */
        .icon-dbt { filter: invert(53%) sepia(68%) saturate(3019%) hue-rotate(344deg) brightness(101%) contrast(101%); }
        .icon-tableau { filter: invert(48%) sepia(34%) saturate(934%) hue-rotate(134deg) brightness(91%) contrast(89%); }
        .icon-powerbi { filter: invert(82%) sepia(62%) saturate(1750%) hue-rotate(1deg) brightness(103%) contrast(103%); }
      `}</style>

      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-gray-100">
          Tecnologías que domino
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Stack moderno y probado en producción para escalar cualquier proyecto de datos.
        </p>
      </div>

      {/* Contenedor de las líneas con máscara de desvanecimiento lateral */}
      <div className="w-full relative max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] flex flex-col gap-5 py-2">
        
        {/* LÍNEA 1: Va hacia la izquierda */}
        <div className="flex w-max gap-4 py-1 animate-marquee-left">
          {duplicatedRow1.map((tech, index) => renderCard(tech, index))}
        </div>

        {/* LÍNEA 2: Va hacia la derecha */}
        <div className="flex w-max gap-4 py-1 animate-marquee-right">
          {duplicatedRow2.map((tech, index) => renderCard(tech, index + 100))}
        </div>

      </div>
    </section>
  );
}