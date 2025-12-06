import sequoiaLogo from '@assets/images/sequoia_logo.jpg';
import jetourLogo from '@assets/images/jetour_logo.png';
import baiyaoLogo from '@assets/images/baiyao_logo.png';
import haierLogo from '@assets/images/haier_logo.png';
import gwmLogo from '@assets/images/gwm_logo.png';
import cheryLogo from '@assets/images/chery_logo.png';
import baiduLogo from '@assets/images/baidu_logo.png';
import gacLogo from '@assets/images/gac_logo.png';
import vivoLogo from '@assets/images/vivo_logo.png';
import geelyLogo from '@assets/images/geely_logo.svg';
import oppoLogo from '@assets/images/oppo_logo.png';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const translations = {
  zh: {
    title: '我们的客户',
    subtitle: '与行业领军企业共同成长',
    description: '服务超过100家知名品牌，覆盖科技、汽车、消费品、金融等多个领域'
  },
  en: {
    title: 'Our Clients',
    subtitle: 'Growing with Industry Leaders',
    description: 'Serving over 100 renowned brands across technology, automotive, consumer goods, finance and more'
  },
  fr: {
    title: 'Nos Clients',
    subtitle: 'Croissance avec les Leaders de l\'Industrie',
    description: 'Au service de plus de 100 marques renommées dans la technologie, l\'automobile, les biens de consommation, la finance et plus'
  },
  es: {
    title: 'Nuestros Clientes',
    subtitle: 'Creciendo con Líderes de la Industria',
    description: 'Sirviendo a más de 100 marcas reconocidas en tecnología, automoción, bienes de consumo, finanzas y más'
  },
  ar: {
    title: 'عملاؤنا',
    subtitle: 'النمو مع قادة الصناعة',
    description: 'خدمة أكثر من 100 علامة تجارية مشهورة عبر التكنولوجيا والسيارات والسلع الاستهلاكية والمالية والمزيد'
  }
};

// 客户LOGO数据 - 使用真实品牌图片
const clients = [
  { logo: sequoiaLogo, name: 'Sequoia' },
  { logo: jetourLogo, name: 'Jetour' },
  { logo: baiyaoLogo, name: 'Baiyao' },
  { logo: haierLogo, name: 'Haier' },
  { logo: gwmLogo, name: 'GWM' },
  { logo: cheryLogo, name: 'Chery' },
  { logo: baiduLogo, name: 'Baidu' },
  { logo: gacLogo, name: 'GAC' },
  { logo: vivoLogo, name: 'Vivo' },
  { logo: geelyLogo, name: 'Geely' },
  { logo: oppoLogo, name: 'Oppo' }
];

// 复制数组用于无限滚动
const allClients = [...clients, ...clients];

export default function Clients({ language }: { language: 'zh' | 'en' | 'fr' | 'es' | 'ar' }) {
  const t = translations[language];

  return (
    <section id="clients" className="relative h-screen bg-white overflow-hidden flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Header - Centered */}
      <div className="relative z-10 pt-16 lg:pt-24 pb-8 lg:pb-12 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Small Label */}
          <div className="inline-block mb-6">
            <span className="text-xs tracking-[0.3em] uppercase text-black/40 border border-black/10 px-4 py-2 rounded-full">
              {language === 'zh' ? '合作伙伴' : 'Partners'}
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-6">
            {t.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-black/60 tracking-wide">
            {t.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Logo Wall - Fullscreen */}
      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Row 1 - Scroll Right */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-8 lg:gap-12 absolute top-[10%] left-0"
        >
          {allClients.map((client, index) => (
            <div
              key={`row1-${index}`}
              className="group relative bg-white border border-black/5 rounded-2xl p-8 lg:p-12 flex items-center justify-center hover:border-black/15 hover:shadow-2xl transition-all duration-500"
              style={{ minWidth: '280px', minHeight: '200px' }}
            >
              <ImageWithFallback
                src={client.logo}
                alt={client.name}
                className="w-48 h-32 object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Scroll Left (Opposite Direction) */}
        <motion.div
          initial={{ x: '-50%' }}
          animate={{ x: 0 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-8 lg:gap-12 absolute top-[50%] left-0 -translate-y-1/2"
        >
          {allClients.map((client, index) => (
            <div
              key={`row2-${index}`}
              className="group relative bg-white border border-black/5 rounded-2xl p-8 lg:p-12 flex items-center justify-center hover:border-black/15 hover:shadow-2xl transition-all duration-500"
              style={{ minWidth: '280px', minHeight: '200px' }}
            >
              <ImageWithFallback
                src={client.logo}
                alt={client.name}
                className="w-48 h-32 object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 3 - Scroll Right */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-8 lg:gap-12 absolute bottom-[10%] left-0"
        >
          {allClients.map((client, index) => (
            <div
              key={`row3-${index}`}
              className="group relative bg-white border border-black/5 rounded-2xl p-8 lg:p-12 flex items-center justify-center hover:border-black/15 hover:shadow-2xl transition-all duration-500"
              style={{ minWidth: '280px', minHeight: '200px' }}
            >
              <ImageWithFallback
                src={client.logo}
                alt={client.name}
                className="w-64 h-44 object-contain opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays - Left and Right Fade */}
        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 lg:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}