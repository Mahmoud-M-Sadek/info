import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      {/* Header */}
      <div className="bg-brand-secondary py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">من نحن</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            شركة Information System Security هي كيان رائد في مجال تكنولوجيا المعلومات والحلول الأمنية.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="prose prose-lg prose-invert">
            <h2 className="text-3xl font-bold text-white mb-6">قصتنا</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              تأسست شركتنا بهدف سد الفجوة بين التطور التكنولوجي المتسارع واحتياجات السوق المحلي للحلول الأمنية والبرمجية الموثوقة.
              نحن نؤمن بأن التكنولوجيا هي عصب الأعمال الحديثة، ولذلك نكرس جهودنا لتقديم حلول متكاملة تضمن لعملائنا الأمان والكفاءة والنمو.
            </p>
            <p className="text-gray-300 leading-relaxed">
              يضم فريقنا نخبة من المهندسين والمبرمجين المتخصصين الذين يمتلكون خبرات واسعة في تصميم وتنفيذ الأنظمة الأمنية المعقدة وتطوير البرمجيات الحديثة.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team meeting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brand-secondary p-8 rounded-2xl border border-gray-800 hover:border-brand-primary/50 transition-all text-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">مهمتنا</h3>
            <p className="text-gray-400">
              تمكين الشركات والأفراد من خلال توفير بيئة عمل آمنة وحلول رقمية ذكية تساهم في تحقيق أهدافهم بكفاءة.
            </p>
          </div>

          <div className="bg-brand-secondary p-8 rounded-2xl border border-gray-800 hover:border-brand-primary/50 transition-all text-center">
            <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">رؤيتنا</h3>
            <p className="text-gray-400">
              أن نكون الشريك التكنولوجي الأول والمفضل في مصر والشرق الأوسط للأنظمة الأمنية والتحول الرقمي.
            </p>
          </div>

          <div className="bg-brand-secondary p-8 rounded-2xl border border-gray-800 hover:border-brand-primary/50 transition-all text-center">
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">قيمنا</h3>
            <p className="text-gray-400">
              الابتكار المستمر، النزاهة في التعامل، الالتزام بالجودة، والتركيز الكامل على رضا العميل.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;