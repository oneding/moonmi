import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const translations = {
  zh: {
    title: '国际化',
    subtitle: '品牌传播战略专家',
    description: '我们为中国企业打造国际市场的品牌影响力，将本土创新带向全球舞台',
    scroll: '探索更多',
    values: [
      '创意驱动 · 打造独特品牌',
      '专业团队 · 卓越执行',
      '协作共赢 · 携手成长',
      '创新思维 · 引领未来',
      '成就客户 · 价值共创'
    ]
  },
  en: {
    title: 'International Brand',
    subtitle: 'Communication Experts',
    description: 'We build global brand influence for Chinese enterprises, bringing local innovation to the world stage',
    scroll: 'Explore More',
    values: [
      'Creative Excellence · Unique Branding',
      'Professional Team · Outstanding Execution',
      'Collaborative Success · Growing Together',
      'Innovation Leadership · Future Forward',
      'Client Success · Value Creation'
    ]
  },
  fr: {
    title: 'Communication de Marque',
    subtitle: 'Internationale',
    description: 'Nous construisons l\'influence mondiale des marques pour les entreprises chinoises',
    scroll: 'Explorer Plus',
    values: [
      'Excellence Créative · Marque Unique',
      'Équipe Professionnelle · Exécution Parfaite',
      'Succès Collaboratif · Croissance Ensemble',
      'Leadership Innovation · Vers l\'Avenir',
      'Réussite Client · Création de Valeur'
    ]
  },
  es: {
    title: 'Comunicación de Marca',
    subtitle: 'Internacional',
    description: 'Construimos influencia de marca global para empresas chinas',
    scroll: 'Explorar Más',
    values: [
      'Excelencia Creativa · Marca Única',
      'Equipo Profesional · Ejecución Excepcional',
      'Éxito Colaborativo · Creciendo Juntos',
      'Liderazgo Innovador · Hacia el Futuro',
      'Éxito del Cliente · Creación de Valor'
    ]
  },
  ar: {
    title: 'اتصالات العلامة التجارية',
    subtitle: 'الدولية',
    description: 'نبني تأثير العلامة التجارية العالمية للشركات الصينية',
    scroll: 'استكشف المزيد',
    values: [
      'التميز الإبداعي · علامة فريدة',
      'فريق محترف · تنفيذ ممتاز',
      'نجاح تعاوني · النمو معاً',
      'قيادة الابتكار · نحو المستقبل',
      'نجاح العميل · خلق القيمة'
    ]
  }
};

// 背景图片数组，体现公司核心价值
const backgroundImages = [
  {
    url: 'https://images.unsplash.com/photo-1565351167686-7a19c5114965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBicmFpbnN0b3JtaW5nfGVufDF8fHx8MTc2MzczMjQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    value: 'creativity' // 创意
  },
  {
    url: 'https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNzE4Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    value: 'professionalism' // 专业
  },
  {
    url: 'https://images.unsplash.com/photo-1759884247142-028abd1e8ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MzcyNjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    value: 'collaboration' // 协作
  },
  {
    url: 'https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM3MzI0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    value: 'innovation' // 创新
  },
  {
    url: 'https://images.unsplash.com/photo-1758518731027-78a22c8852ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwY2VsZWJyYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjM3MzI0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    value: 'success' // 成功
  }
];

export default function Hero({ language }: { language: 'zh' | 'en' | 'fr' | 'es' | 'ar' }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = translations[language];

  // 自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Full Screen Background Images with Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex].url})`
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Value Indicator */}
      <div className="absolute top-32 right-6 lg:right-12 z-20">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Decorative Corner Accent */}
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-sm" />
          
          {/* Content removed */}
          
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-white/40 via-white/10 to-transparent origin-left"
            style={{ width: '100%' }}
          />
        </motion.div>
      </div>

      {/* Carousel Dots Indicator */}
      <div className="absolute bottom-32 right-6 lg:right-12 z-20 flex flex-col gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white h-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24">
        <div className="max-w-6xl">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white mb-4 tracking-tight leading-none">
              {t.title}
            </h1>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tight leading-none">
              {language === 'zh' ? (
                <>
                  品牌传播
                  <br className="sm:hidden" />
                  战略专家
                </>
              ) : (
                t.subtitle
              )}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-2xl text-white/80 max-w-3xl leading-relaxed"
          >
            {t.description}
          </motion.p>

          {/* Scroll Indicator - Centered and Elegant */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
          >
            <motion.button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative flex flex-col items-center gap-3 group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >

              
              {/* Animated Circle Button */}
              <div className="relative">
                {/* Pulsing Outer Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/10"
                  animate={{ 
                    scale: [1, 1.5, 1.5],
                    opacity: [0.3, 0, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  style={{ width: '64px', height: '64px', left: '-8px', top: '-8px' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/10"
                  animate={{ 
                    scale: [1, 1.5, 1.5],
                    opacity: [0.3, 0, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5
                  }}
                  style={{ width: '64px', height: '64px', left: '-8px', top: '-8px' }}
                />
                
                {/* Main Circle Button */}
                <motion.div
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300 shadow-lg shadow-black/10"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowDown className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[90%] max-w-6xl h-[60vh] bg-white/5 backdrop-blur-md border border-white/5 rounded-sm shadow-2xl" style={{ zIndex: -20 }} />
    </section>
  );
}