import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Star } from 'lucide-react';
import { SERVICES, FEATURES, PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Grid & Gradient */}
        <div className="absolute inset-0 bg-brand-dark">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-brand-accent text-sm font-semibold tracking-wide">الخيار الأول للحلول الأمنية والبرمجية</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            نحمي ممتلكاتك، <br />
            <span className="gradient-text">ونبتكر مستقبلك الرقمي</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            نقدم حلولاً متكاملة في الأنظمة الأمنية، تطوير البرمجيات، وتطبيقات الموبايل. 
            شريكك الاستراتيجي في التحول الرقمي بأحدث التقنيات العالمية.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-blue-600 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              اطلب استشارة مجانية
              <ArrowLeft size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
            >
              شاهد أعمالنا
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">خدماتنا المتكاملة</h2>
            <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              نغطي كافة احتياجاتك التقنية من البنية التحتية الأمنية وحتى التواجد الرقمي المتطور.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="group p-6 bg-brand-secondary rounded-2xl border border-gray-800 hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                  <service.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <Link to="/services" className="text-brand-accent text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  اقرأ المزيد <ArrowLeft size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-secondary/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                لماذا تختار <span className="text-brand-accent">Information System Security</span>؟
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                نحن لا نقدم مجرد خدمات، بل نقدم حلولاً تضمن نجاح أعمالك واستمراريتها. نجمع بين الخبرة التقنية العميقة وفهم احتياجات السوق المصري والعربي.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-brand-primary/10 p-2 rounded-lg shrink-0">
                      <feature.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl rotate-3 opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Technology Team" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-secondary p-6 rounded-xl border border-gray-700 shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-brand-accent">100%</div>
                  <div className="text-sm text-gray-300">
                    نسبة رضا <br /> العملاء
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Slider (Grid for simplicity in code) */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">أحدث أعمالنا</h2>
              <p className="text-gray-400">مشاريع نفخر بإنجازها لعملائنا</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex px-6 py-2 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
              عرض كل الأعمال
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.id} className="group relative overflow-hidden rounded-xl aspect-video bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {project.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/portfolio" className="inline-block px-6 py-3 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
              عرض كل الأعمال
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">جاهز لبدء مشروعك القادم؟</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            دعنا نساعدك في بناء أنظمتك الأمنية أو تطوير برمجياتك بأعلى معايير الجودة.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            تواصل معنا الآن
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;