import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin } from 'lucide-react';

const translations = {
  zh: {
    title: '开启合作',
    subtitle: '我们一起将您的品牌带向世界',
    email: 'info@moonmi.com',
    phone: '+86 21 1234 5678',
    offices: '办公室',
    selectCity: '选择城市查看地图',

    telephone: '电话',
    faxNumber: '传真',
    locations: [
      {
        city: '上海 · 总部',
        address: '上海市黄浦区中山东一路18号外滩金融中心',
        phone: '+86 21 6888 9999',
        fax: '+86 21 6888 9998',
        coordinates: '121.490317,31.235929',
        mapImage: 'https://images.unsplash.com/photo-1578402572839-b4ac30a20d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFuZ2hhaSUyMGNpdHklMjBtYXAlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDI5NDczNHww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '30%', y: '50%' }
      },
      {
        city: '北京',
        address: '北京市朝阳区建国门外大街1号国贸大厦',
        phone: '+86 10 8888 6666',
        fax: '+86 10 8888 6665',
        coordinates: '116.458588,39.909006',
        mapImage: 'https://images.unsplash.com/photo-1643578382173-ca80495f555b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWlqaW5nJTIwY2l0eSUyMG1hcCUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzY0Mjk0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '25%', y: '35%' }
      },
      {
        city: '香港',
        address: '香港中环国际金融中心二期8号',
        phone: '+852 2888 7777',
        fax: '+852 2888 7776',
        coordinates: '114.158218,22.285397',
        mapImage: 'https://images.unsplash.com/photo-1620403695214-9baef6ec80c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb25nJTIwS29uZyUyMHNreWxpbmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDM3MzY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '32%', y: '65%' }
      },
      {
        city: '广州',
        address: '广州市天河区珠江新城珠江东路6号广州周大福金融中心',
        phone: '+86 20 3888 5555',
        fax: '+86 20 3888 5554',
        coordinates: '113.324520,23.120049',
        mapImage: 'https://images.unsplash.com/photo-1566807212505-bdf29b9021f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWFuZ3pob3UlMjBjaXR5JTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NjQyOTQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '28%', y: '58%' }
      }
    ]
  },
  en: {
    title: 'Start a Conversation',
    subtitle: 'Let\'s take your brand to the world together',
    email: 'info@moonmi.com',
    phone: '+86 21 1234 5678',
    offices: 'Offices',
    selectCity: 'Select a city to view map',

    telephone: 'Tel',
    faxNumber: 'Fax',
    locations: [
      {
        city: 'Shanghai · HQ',
        address: 'The Bund Finance Center, 18 Zhongshan East 1st Rd, Huangpu District, Shanghai',
        phone: '+86 21 6888 9999',
        fax: '+86 21 6888 9998',
        coordinates: '121.490317,31.235929',
        mapImage: 'https://images.unsplash.com/photo-1578402572839-b4ac30a20d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFuZ2hhaSUyMGNpdHklMjBtYXAlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDI5NDczNHww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '30%', y: '50%' }
      },
      {
        city: 'Beijing',
        address: 'China World Trade Center, 1 Jianguomenwai Ave, Chaoyang District, Beijing',
        phone: '+86 10 8888 6666',
        fax: '+86 10 8888 6665',
        coordinates: '116.458588,39.909006',
        mapImage: 'https://images.unsplash.com/photo-1643578382173-ca80495f555b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWlqaW5nJTIwY2l0eSUyMG1hcCUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzY0Mjk0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '25%', y: '35%' }
      },
      {
        city: 'Hong Kong',
        address: 'Two International Finance Centre, 8 Finance Street, Central, Hong Kong',
        phone: '+852 2888 7777',
        fax: '+852 2888 7776',
        coordinates: '114.158218,22.285397',
        mapImage: 'https://images.unsplash.com/photo-1620403695214-9baef6ec80c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb25nJTIwS29uZyUyMHNreWxpbmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDM3MzY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '32%', y: '65%' }
      },
      {
        city: 'Guangzhou',
        address: 'CTF Finance Centre, 6 Zhujiang East Rd, Tianhe District, Guangzhou',
        phone: '+86 20 3888 5555',
        fax: '+86 20 3888 5554',
        coordinates: '113.324520,23.120049',
        mapImage: 'https://images.unsplash.com/photo-1566807212505-bdf29b9021f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWFuZ3pob3UlMjBjaXR5JTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NjQyOTQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '28%', y: '58%' }
      }
    ]
  },
  fr: {
    title: 'Démarrer une Conversation',
    subtitle: 'Amenons votre marque dans le monde ensemble',
    email: 'info@moonmi.com',
    phone: '+86 21 1234 5678',
    offices: 'Bureaux',
    selectCity: 'Sélectionnez une ville pour voir la carte',

    telephone: 'Tél',
    faxNumber: 'Fax',
    locations: [
      {
        city: 'Shanghai · Siège',
        address: 'The Bund Finance Center, 18 Zhongshan East 1st Rd, District Huangpu, Shanghai',
        phone: '+86 21 6888 9999',
        fax: '+86 21 6888 9998',
        coordinates: '121.490317,31.235929',
        mapImage: 'https://images.unsplash.com/photo-1578402572839-b4ac30a20d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFuZ2hhaSUyMGNpdHklMjBtYXAlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDI5NDczNHww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '30%', y: '50%' }
      },
      {
        city: 'Pékin',
        address: 'China World Trade Center, 1 Jianguomenwai Ave, District Chaoyang, Pékin',
        phone: '+86 10 8888 6666',
        fax: '+86 10 8888 6665',
        coordinates: '116.458588,39.909006',
        mapImage: 'https://images.unsplash.com/photo-1643578382173-ca80495f555b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWlqaW5nJTIwY2l0eSUyMG1hcCUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzY0Mjk0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '25%', y: '35%' }
      },
      {
        city: 'Hong Kong',
        address: 'Two International Finance Centre, 8 Finance Street, Central, Hong Kong',
        phone: '+852 2888 7777',
        fax: '+852 2888 7776',
        coordinates: '114.158218,22.285397',
        mapImage: 'https://images.unsplash.com/photo-1620403695214-9baef6ec80c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb25nJTIwS29uZyUyMHNreWxpbmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDM3MzY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '32%', y: '65%' }
      },
      {
        city: 'Guangzhou',
        address: 'CTF Finance Centre, 6 Zhujiang East Rd, District Tianhe, Guangzhou',
        phone: '+86 20 3888 5555',
        fax: '+86 20 3888 5554',
        coordinates: '113.324520,23.120049',
        mapImage: 'https://images.unsplash.com/photo-1566807212505-bdf29b9021f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWFuZ3pob3UlMjBjaXR5JTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NjQyOTQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '28%', y: '58%' }
      }
    ]
  },
  es: {
    title: 'Iniciar una Conversación',
    subtitle: 'Llevemos su marca al mundo juntos',
    email: 'info@moonmi.com',
    phone: '+86 21 1234 5678',
    offices: 'Oficinas',
    selectCity: 'Seleccione una ciudad para ver el mapa',

    telephone: 'Tel',
    faxNumber: 'Fax',
    locations: [
      {
        city: 'Shanghái · Sede',
        address: 'The Bund Finance Center, 18 Zhongshan East 1st Rd, Distrito Huangpu, Shanghái',
        phone: '+86 21 6888 9999',
        fax: '+86 21 6888 9998',
        coordinates: '121.490317,31.235929',
        mapImage: 'https://images.unsplash.com/photo-1578402572839-b4ac30a20d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFuZ2hhaSUyMGNpdHklMjBtYXAlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDI5NDczNHww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '30%', y: '50%' }
      },
      {
        city: 'Pekín',
        address: 'China World Trade Center, 1 Jianguomenwai Ave, Distrito Chaoyang, Pekín',
        phone: '+86 10 8888 6666',
        fax: '+86 10 8888 6665',
        coordinates: '116.458588,39.909006',
        mapImage: 'https://images.unsplash.com/photo-1643578382173-ca80495f555b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWlqaW5nJTIwY2l0eSUyMG1hcCUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzY0Mjk0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '25%', y: '35%' }
      },
      {
        city: 'Hong Kong',
        address: 'Two International Finance Centre, 8 Finance Street, Central, Hong Kong',
        phone: '+852 2888 7777',
        fax: '+852 2888 7776',
        coordinates: '114.158218,22.285397',
        mapImage: 'https://images.unsplash.com/photo-1620403695214-9baef6ec80c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb25nJTIwS29uZyUyMHNreWxpbmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDM3MzY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '32%', y: '65%' }
      },
      {
        city: 'Guangzhou',
        address: 'CTF Finance Centre, 6 Zhujiang East Rd, District Tianhe, Guangzhou',
        phone: '+86 20 3888 5555',
        fax: '+86 20 3888 5554',
        coordinates: '113.324520,23.120049',
        mapImage: 'https://images.unsplash.com/photo-1566807212505-bdf29b9021f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWFuZ3pob3UlMjBjaXR5JTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NjQyOTQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '28%', y: '58%' }
      }
    ]
  },
  ar: {
    title: 'بدء محادثة',
    subtitle: 'لنأخذ علامتك التجارية إلى العالم معاً',
    email: 'info@moonmi.com',
    phone: '+86 21 1234 5678',
    offices: 'مكاتب',
    selectCity: 'حدد مدينة لعرض الخريطة',

    telephone: 'هاتف',
    faxNumber: 'فاكس',
    locations: [
      {
        city: 'شنغهاي · المقر',
        address: 'The Bund Finance Center, 18 Zhongshan East 1st Rd, Huangpu District, Shanghai',
        phone: '+86 21 6888 9999',
        fax: '+86 21 6888 9998',
        coordinates: '121.490317,31.235929',
        mapImage: 'https://images.unsplash.com/photo-1578402572839-b4ac30a20d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFuZ2hhaSUyMGNpdHklMjBtYXAlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDI5NDczNHww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '30%', y: '50%' }
      },
      {
        city: 'بكين',
        address: 'China World Trade Center, 1 Jianguomenwai Ave, Chaoyang District, Beijing',
        phone: '+86 10 8888 6666',
        fax: '+86 10 8888 6665',
        coordinates: '116.458588,39.909006',
        mapImage: 'https://images.unsplash.com/photo-1643578382173-ca80495f555b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWlqaW5nJTIwY2l0eSUyMG1hcCUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzY0Mjk0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '25%', y: '35%' }
      },
      {
        city: 'هونغ كونغ',
        address: 'Two International Finance Centre, 8 Finance Street, Central, Hong Kong',
        phone: '+852 2888 7777',
        fax: '+852 2888 7776',
        coordinates: '114.158218,22.285397',
        mapImage: 'https://images.unsplash.com/photo-1620403695214-9baef6ec80c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb25nJTIwS29uZyUyMHNreWxpbmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDM3MzY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '32%', y: '65%' }
      },
      {
        city: 'قوانغتشو',
        address: 'CTF Finance Centre, 6 Zhujiang East Rd, Tianhe District, Guangzhou',
        phone: '+86 20 3888 5555',
        fax: '+86 20 3888 5554',
        coordinates: '113.324520,23.120049',
        mapImage: 'https://images.unsplash.com/photo-1566807212505-bdf29b9021f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWFuZ3pob3UlMjBjaXR5JTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NjQyOTQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mapPosition: { x: '28%', y: '58%' }
      }
    ]
  }
};

export default function Contact({ language }: { language: 'zh' | 'en' | 'fr' | 'es' | 'ar' }) {
  const [selectedCity, setSelectedCity] = useState(0);
  const t = translations[language];

  return (
    <section id="contact" className="relative h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Dynamic Background Map with Animation */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCity}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                [
                  'https://images.unsplash.com/photo-1675075576591-2b7e33f0bef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFuZ2hhaSUyMHNreWxpbmUlMjBsYW5kbWFya3xlbnwxfHx8fDE3NjQzMjQwMzV8MA&ixlib=rb-4.1.0&q=100&w=1920',
                  'https://images.unsplash.com/photo-1601202904975-d6ddc42deb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWlqaW5nJTIwbGFuZG1hcmslMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0MzI0MDM1fDA&ixlib=rb-4.1.0&q=100&w=1920',
                  'https://images.unsplash.com/photo-1620403695214-9baef6ec80c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb25nJTIwS29uZyUyMHNreWxpbmUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NDM3MzY5Mnww&ixlib=rb-4.1.0&q=100&w=1920',
                  'https://images.unsplash.com/photo-1763483540867-5287558ef156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWFuZ3pob3UlMjBjaXR5JTIwbGFuZG1hcmt8ZW58MXx8fHwxNzY0MzI0MDM1fDA&ixlib=rb-4.1.0&q=100&w=1920'
                ][selectedCity]
              })`
            }}
          />
        </AnimatePresence>
      </div>

      {/* Map Markers Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[5]">
        {t.locations.map((location, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: location.mapPosition.x,
              top: location.mapPosition.y,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: selectedCity === index ? 1.2 : 1,
              opacity: selectedCity === index ? 1 : 0.4
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Pin Icon */}
            <motion.div
              animate={selectedCity === index ? {
                y: [0, -8, 0],
              } : {}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Pulsing Glow Effect for Selected City */}
              {selectedCity === index && (
                <motion.div
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-white rounded-full blur-md"
                  style={{ width: '24px', height: '24px', left: '-4px', top: '-4px' }}
                />
              )}
              
              {/* Map Pin */}
              <MapPin 
                className={`relative z-10 ${
                  selectedCity === index 
                    ? 'w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                    : 'w-4 h-4 text-white/60'
                }`}
                fill={selectedCity === index ? 'white' : 'none'}
              />
            </motion.div>

            {/* City Label */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ 
                opacity: selectedCity === index ? 1 : 0.5,
                y: 0,
                scale: selectedCity === index ? 1 : 0.85
              }}
              transition={{ delay: 0.2 }}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs tracking-wider ${
                selectedCity === index 
                  ? 'text-white font-medium' 
                  : 'text-white/50'
              }`}
            >
              {location.city}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Compact and Elegant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >

          </motion.div>

          {/* Right Column - Refined Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Offices Tabs - Compact Tab Design */}
            <div className="mb-6">
              <p className="text-xs text-white/40 tracking-[0.2em] mb-3 uppercase">
                {t.offices}
              </p>
              <div className="flex border-b border-white/5">
                {t.locations.map((location, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedCity(index)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative py-2.5 px-4 text-sm transition-all duration-300 flex items-center gap-1.5 ${
                      selectedCity === index
                        ? 'text-white/95'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{location.city}</span>
                    
                    {/* Active Tab Indicator */}
                    {selectedCity === index && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/90"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Selected City Details - Elegant Card */}
            <motion.div
              key={selectedCity}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/20" />
              
              <div className="space-y-6">
                {/* Address */}
                <div>
                  <p className="text-xs text-white/40 tracking-[0.15em] mb-2 uppercase">
                    {language === 'zh' ? '地址' : 'Address'}
                  </p>
                  <p className="text-base text-white/85 leading-relaxed">
                    {t.locations[selectedCity].address}
                  </p>
                </div>

                {/* Contact Info Grid */}
            <div className="grid grid-cols-1 gap-5 pt-2 border-t border-white/5">
              <div>
                <p className="text-xs text-white/40 tracking-[0.15em] mb-1.5 uppercase">
                  {t.telephone}
                </p>
                <p className="text-base text-white/85 font-mono tracking-wide">
                  {t.locations[selectedCity].phone}
                </p>
              </div>

              <div>
                <p className="text-xs text-white/40 tracking-[0.15em] mb-1.5 uppercase">
                  {t.faxNumber}
                </p>
                <p className="text-base text-white/75 font-mono tracking-wide">
                  {t.locations[selectedCity].fax}
                </p>
              </div>
            </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}