import { motion } from 'motion/react';
import gaccover from '@assets/cases/gac/gac_02.jpg';
import icarcover from '@assets/cases/icar/icar_02.jpg';
import { ImageWithFallback } from './figma/ImageWithFallback';

const translations = {
  zh: {
    title: '精选案例',
    viewProject: '查看项目',
    cases: [
      {
        title: '广汽传祺',
        subtitle: '全球市场战略',
        category: '汽车 / 品牌战略',
        image: gaccover
      },
      {
        title: 'iCar',
        subtitle: '数字营销革新',
        category: '汽车 / 数字营销',
        image: icarcover
      },
      {
        title: '美妆国际化',
        subtitle: '跨境电商增长',
        category: '美妆 / 电商',
        image: 'https://images.unsplash.com/photo-1623882213146-e60f8b9e8875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjM2OTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: '金融科技',
        subtitle: '品牌重塑',
        category: '金融 / 品牌设计',
        image: 'https://images.unsplash.com/photo-1651176118867-f4ac0b1d6da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFkaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzY0MTE2NXww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  },
  en: {
    title: 'Selected Work',
    viewProject: 'View Project',
    cases: [
      {
        title: 'GAC Motor',
        subtitle: 'Global Market Strategy',
        category: 'Automotive / Brand Strategy',
        image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjM2OTIyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'Tech Brand Expansion',
        subtitle: 'Digital Marketing Innovation',
        category: 'Technology / Digital Marketing',
        image: 'https://images.unsplash.com/photo-1763541398528-83c5bf720883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM2Mjk4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'Beauty International',
        subtitle: 'E-commerce Growth',
        category: 'Beauty / E-commerce',
        image: 'https://images.unsplash.com/photo-1623882213146-e60f8b9e8875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjM2OTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'FinTech',
        subtitle: 'Brand Transformation',
        category: 'Finance / Brand Design',
        image: 'https://images.unsplash.com/photo-1651176118867-f4ac0b1d6da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFkaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzY0MTE2NXww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  },
  fr: {
    title: 'Projets Sélectionnés',
    viewProject: 'Voir le Projet',
    cases: [
      {
        title: 'GAC Motor',
        subtitle: 'Stratégie de Marché Mondial',
        category: 'Automobile / Stratégie de Marque',
        image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjM2OTIyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'Expansion Marque Tech',
        subtitle: 'Innovation Marketing Digital',
        category: 'Technologie / Marketing Digital',
        image: 'https://images.unsplash.com/photo-1763541398528-83c5bf720883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM2Mjk4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'Beauté International',
        subtitle: 'Croissance E-commerce',
        category: 'Beauté / E-commerce',
        image: 'https://images.unsplash.com/photo-1623882213146-e60f8b9e8875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjM2OTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'FinTech',
        subtitle: 'Transformation de Marque',
        category: 'Finance / Design de Marque',
        image: 'https://images.unsplash.com/photo-1651176118867-f4ac0b1d6da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFkaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzY0MTE2NXww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  },
  es: {
    title: 'Proyectos Seleccionados',
    viewProject: 'Ver Proyecto',
    cases: [
      {
        title: 'GAC Motor',
        subtitle: 'Estrategia de Mercado Global',
        category: 'Automotriz / Estrategia de Marca',
        image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjM2OTIyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'Expansión Marca Tecnológica',
        subtitle: 'Innovación en Marketing Digital',
        category: 'Tecnología / Marketing Digital',
        image: 'https://images.unsplash.com/photo-1763541398528-83c5bf720883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM2Mjk4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'Belleza Internacional',
        subtitle: 'Crecimiento E-commerce',
        category: 'Belleza / E-commerce',
        image: 'https://images.unsplash.com/photo-1623882213146-e60f8b9e8875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjM2OTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'FinTech',
        subtitle: 'Transformación de Marca',
        category: 'Finanzas / Diseño de Marca',
        image: 'https://images.unsplash.com/photo-1651176118867-f4ac0b1d6da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFkaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzY0MTE2NXww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  },
  ar: {
    title: 'مشاريع مختارة',
    viewProject: 'عرض المشروع',
    cases: [
      {
        title: 'جاك موتور',
        subtitle: 'استراتيجية السوق العالمية',
        category: 'سيارات / استراتيجية العلامة التجارية',
        image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjM2OTIyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'توسع العلامة التقنية',
        subtitle: 'ابتكار التسويق الرقمي',
        category: 'تكنولوجيا / تسويق رقمي',
        image: 'https://images.unsplash.com/photo-1763541398528-83c5bf720883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM2Mjk4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'الجمال الدولي',
        subtitle: 'نمو التجارة الإلكترونية',
        category: 'تجميل / تجارة إلكترونية',
        image: 'https://images.unsplash.com/photo-1623882213146-e60f8b9e8875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjM2OTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        title: 'التكنولوجيا المالية',
        subtitle: 'تحول العلامة التجارية',
        category: 'مالية / تصميم العلامة التجارية',
        image: 'https://images.unsplash.com/photo-1651176118867-f4ac0b1d6da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFkaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzY0MTE2NXww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  }
};

export default function CaseStudies({ language, onProjectClick }: { language: 'zh' | 'en' | 'fr' | 'es' | 'ar'; onProjectClick: (projectId: number) => void }) {
  const t = translations[language];

  return (
    <section id="work" className="relative h-screen bg-white overflow-hidden">
      {/* Fullscreen Images Grid - No gaps */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {t.cases.map((caseItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onProjectClick(index)}
            className="group cursor-pointer relative bg-black"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Full Size Image - Lowest Layer - z-index 1 */}
            <div className="absolute inset-0 z-[1]">
              <ImageWithFallback
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
            
            {/* Gradient Overlay - z-index 2 */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/60 transition-all duration-700" />
            
            {/* Elegant Content Overlay - z-index 100 - HIGHEST PRIORITY */}
            <div className="absolute inset-0 z-[100] flex flex-col justify-end p-8 lg:p-12 pointer-events-none">
              {/* Title and View Project Button - Side by Side */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight group-hover:translate-x-3 transition-transform duration-500 pointer-events-auto">
                  {caseItem.title}
                </h3>
                
                {/* View Project Button - Next to Title */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto flex-shrink-0"
                >
                  {/* Breathing Glow Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-white/30 rounded-full blur-xl"
                  />
                  
                  {/* Button Container */}
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 group/btn"
                  >
                    <span className="inline-flex items-center gap-3 text-sm tracking-widest text-white whitespace-nowrap">
                      {t.viewProject}
                      {/* Animated Arrow with Pulse */}
                      <motion.svg
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Subtitle and Category Tag - Side by Side */}
              <div className="flex items-center gap-4 flex-wrap">
                {/* Subtitle */}
                <p className="text-base lg:text-xl text-white/90 tracking-wide group-hover:translate-x-3 transition-transform duration-500 delay-75 pointer-events-auto">
                  {caseItem.subtitle}
                </p>

                {/* Category Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="pointer-events-auto"
                >
                  <span className="inline-block px-3 py-1 text-xs tracking-widest text-white/70 border border-white/20 rounded-full backdrop-blur-sm">
                    {caseItem.category}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Title Overlay - Right Center with Glass Background */}
      <div className="absolute right-8 lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >

         
          
        </motion.div>
      </div>
    </section>
  );
}