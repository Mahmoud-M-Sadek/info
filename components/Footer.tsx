import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_ADDRESS, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-brand-accent" />
              <div className="flex flex-col">
                 <span className="font-bold text-lg text-white">INFORMATION</span>
                 <span className="text-xs text-brand-accent">SYSTEM SECURITY</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              شريكك التقني الموثوق لتقديم أحدث الحلول الأمنية والبرمجية. نساعدك في حماية ممتلكاتك وتطوير أعمالك رقمياً.
            </p>
            <div className="flex space-x-4 space-x-reverse pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-r-4 border-brand-primary pr-3">روابط سريعة</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="text-gray-400 hover:text-brand-accent transition-colors text-sm hover:translate-x-[-5px] inline-block transform duration-200">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-r-4 border-brand-primary pr-3">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">أنظمة المراقبة الأمنية</li>
              <li className="text-gray-400 text-sm">تطوير البرمجيات (Software)</li>
              <li className="text-gray-400 text-sm">تصميم المواقع والمتاجر</li>
              <li className="text-gray-400 text-sm">تطبيقات الهواتف الذكية</li>
              <li className="text-gray-400 text-sm">الشبكات والبنية التحتية</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-r-4 border-brand-primary pr-3">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span dir="ltr">{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Information System Security. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;