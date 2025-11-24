import { ShieldCheck, Code, Globe, Smartphone, Server, Zap, Clock, ThumbsUp, Headset } from 'lucide-react';
import { Service, Project, Feature } from './types';

export const COMPANY_PHONE = "+201030417663";
export const COMPANY_WHATSAPP_LINK = `https://wa.me/201030417663`;
export const COMPANY_ADDRESS = "المنصورة - الدقهلية - مصر";

export const NAV_ITEMS = [
  { label: 'الرئيسية', path: '/' },
  { label: 'من نحن', path: '/about' },
  { label: 'خدماتنا', path: '/services' },
  { label: 'أعمالنا', path: '/portfolio' },
  { label: 'تواصل معنا', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'security',
    title: 'أنظمة أمنية',
    description: 'حلول أمنية متكاملة تشمل كاميرات المراقبة، أنظمة الإنذار، البصمات، والشبكات لتأمين منشأتك بالكامل.',
    icon: ShieldCheck,
    details: ['كاميرات مراقبة CCTV & IP', 'أنظمة حضور وانصراف (بصمة)', 'أنظمة إنذار الحرائق والسرقة', 'تأسيس شبكات Network Infrastructure']
  },
  {
    id: 'software',
    title: 'حلول برمجية',
    description: 'تطوير أنظمة إدارة موارد الشركات (ERP) وحلول برمجية مخصصة تناسب حجم وطبيعة عملك لزيادة الإنتاجية.',
    icon: Server,
    details: ['أنظمة إدارة المخازن والمبيعات', 'أنظمة HR وشؤون الموظفين', 'تطبيقات سطح المكتب', 'الربط الإلكتروني API Integration']
  },
  {
    id: 'web',
    title: 'تطوير المواقع',
    description: 'تصميم وبرمجة مواقع إلكترونية عصرية، سريعة، ومتجاوبة مع جميع الأجهزة لتعزيز وجودك الرقمي.',
    icon: Globe,
    details: ['متاجر إلكترونية E-commerce', 'مواقع تعريفية للشركات', 'لوحات تحكم Dashboard', 'تحسين محركات البحث SEO']
  },
  {
    id: 'mobile',
    title: 'تطبيقات الموبايل',
    description: 'تحويل فكرتك إلى تطبيق جوال احترافي يعمل على أنظمة Android و iOS بأحدث التقنيات.',
    icon: Smartphone,
    details: ['تطبيقات Android & iOS', 'تصميم واجهات المستخدم UI/UX', 'صيانة وتحديث التطبيقات', 'رفع التطبيقات على المتاجر']
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Albob Express Delivery',
    category: 'Logistics & Delivery',
    url: 'https://www.albobexpressdelivery.com/',
    image: 'https://images.unsplash.com/photo-1566576912321-158fa7599663?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Endex Express Delivery',
    category: 'Logistics Solutions',
    url: 'https://www.endexexpressdelivery.com/',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Future Bright Housing',
    category: 'Real Estate',
    url: 'https://futurebrighthousing.com/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Seet CL',
    category: 'Corporate Website',
    url: 'https://seet-cl.com/',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Seet E',
    category: 'Digital Service',
    url: 'https://seet-e.com/',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Panda Fast Food',
    category: 'E-commerce / Food',
    url: 'https://pandafastfood.com/',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'سرعة فائقة',
    description: 'نضمن لك أداءً سريعاً لموقعك وتطبيقاتك لتحسين تجربة المستخدم وتصدر نتائج البحث.',
    icon: Zap
  },
  {
    title: 'جودة عالمية',
    description: 'نستخدم أحدث التقنيات وأفضل المعايير البرمجية والأمنية لضمان استقرار وموثوقية أعمالك.',
    icon: ThumbsUp
  },
  {
    title: 'التزام بالمواعيد',
    description: 'نقدر وقت عملائنا، لذا نلتزم بتسليم المشاريع في الجدول الزمني المتفق عليه بدقة.',
    icon: Clock
  },
  {
    title: 'دعم فني متواصل',
    description: 'فريقنا متاح دائماً لتقديم الدعم الفني والاستشارات وحل أي مشكلات قد تواجهك.',
    icon: Headset
  }
];