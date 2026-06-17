import React from 'react';

export default function GenericPage({ title, description }) {
  return (
    <div className="container mx-auto px-6 pt-32 pb-32 relative z-10 flex flex-col items-center text-center animate-fade-in">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h2>
      <p className="text-xl text-gray-400 max-w-2xl">{description}</p>
      <div className="mt-12 w-full max-w-4xl h-64 glass-panel rounded-2xl flex items-center justify-center">
        <span className="text-gray-500">Contenido en construcción...</span>
      </div>
    </div>
  );
}
