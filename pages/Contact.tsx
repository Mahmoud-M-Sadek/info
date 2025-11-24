import React from 'react';
import { Phone, MapPin, Send } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-brand-dark">
      {/* Header */}
      <div className="bg-brand-secondary py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">تواصل معنا</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار الحل الأنسب لأعمالك.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">معلومات الاتصال</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">الهاتف / واتساب</h3>
                  <p dir="ltr" className="text-gray-400 font-mono text-lg">{COMPANY_PHONE}</p>
                  <p className="text-sm text-gray-500 mt-1">متاح طوال أيام الأسبوع</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">العنوان</h3>
                  <p className="text-gray-400 text-lg">{COMPANY_ADDRESS}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.161676662497!2d31.2357116!3d30.0444196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840934661001f%3A0x2a3e622419409848!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1690000000000!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-secondary p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">الاسم</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-brand-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="اسمك الكامل"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-brand-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="رقم هاتفك"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-brand-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">نوع الخدمة</label>
                <select 
                  id="service"
                  className="w-full bg-brand-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                >
                  <option value="">اختر الخدمة المطلوبة</option>
                  <option value="security">أنظمة أمنية</option>
                  <option value="software">حلول برمجية</option>
                  <option value="web">تطوير مواقع</option>
                  <option value="mobile">تطبيقات موبايل</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">الرسالة</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-brand-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                  placeholder="اكتب تفاصيل مشروعك هنا..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-brand-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20"
              >
                إرسال الطلب <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;