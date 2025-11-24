import React from 'react';
import { Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      {/* Header */}
      <div className="bg-brand-secondary py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">خدماتنا</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            نقدم مجموعة واسعة من الخدمات التقنية المصممة لتلبية احتياجاتك بدقة واحترافية.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image/Icon Area (Visual) */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden bg-brand-secondary aspect-[4/3] flex items-center justify-center border border-gray-700 shadow-2xl group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-transparent opacity-50"></div>
                   <service.icon className="w-32 h-32 text-brand-primary opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-20 h-20 text-brand-accent drop-shadow-2xl" />
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-bold rounded-full border border-brand-primary/20">
                    {`0${index + 1}`}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                </div>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="bg-green-500/10 p-1 rounded-full shrink-0">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-brand-primary hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                >
                  اطلب هذه الخدمة
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;