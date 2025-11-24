import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      {/* Header */}
      <div className="bg-brand-secondary py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">أعمالنا السابقة</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            نماذج من مشاريعنا الناجحة التي ساهمنا فيها بتحقيق أهداف عملائنا الرقمية.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-brand-secondary rounded-xl overflow-hidden border border-gray-700 hover:border-brand-primary transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/10">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-brand-dark px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    زيارة الموقع <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;