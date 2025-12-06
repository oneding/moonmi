import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const translations = {
  zh: {
    title: '关于慕鸣',
    intro: '我们是一支专注于国际化品牌传播的专业团队，成立于2016年。我们深谙中国市场，同时具备全球视野，致力于帮助中国企业在国际舞台上建立强大的品牌影响力。',
    stats: [
      { value: '100+', label: '国家覆盖' },
      { value: '500+', label: '成功项目' },
      { value: '8+', label: '年行业经验' },
      { value: '100+', label: '专业团队' }
    ],
    expertise: [
      {
        title: '战略思维',
        description: '深入洞察市场，制定精准的品牌战略与市场进入策略'
      },
      {
        title: '创意执行',
        description: '结合本土文化与国际视野，创造跨文化共鸣的品牌体验'
      },
      {
        title: '全球网络',
        description: '遍布全球的合作伙伴网络，确保本地化执行的专业度'
      },
      {
        title: '数据驱动',
        description: '运用先进的数据分析工具，持续优化营销效果'
      }
    ]
  },
  en: {
    title: 'About Moonmi',
    intro: 'We are a professional team specializing in international brand communication, founded in 2016. With deep knowledge of the Chinese market and a global perspective, we help Chinese enterprises build strong brand influence on the international stage.',
    stats: [
      { value: '100+', label: 'Countries' },
      { value: '500+', label: 'Projects' },
      { value: '8+', label: 'Years Experience' },
      { value: '100+', label: 'Team Members' }
    ],
    expertise: [
      {
        title: 'Strategic Thinking',
        description: 'Deep market insights to develop precise brand strategies and market entry plans'
      },
      {
        title: 'Creative Execution',
        description: 'Combining local culture with global vision to create cross-cultural brand experiences'
      },
      {
        title: 'Global Network',
        description: 'Worldwide partner network ensuring professional localized execution'
      },
      {
        title: 'Data-Driven',
        description: 'Advanced analytics tools for continuous marketing optimization'
      }
    ]
  },
  fr: {
    title: 'À propos de Moonmi',
    intro: 'Nous sommes une équipe professionnelle spécialisée dans la communication de marque internationale, fondée en 2016. Avec une connaissance approfondie du marché chinois et une perspective mondiale, nous aidons les entreprises chinoises à construire une forte influence de marque sur la scène internationale.',
    stats: [
      { value: '100+', label: 'Pays' },
      { value: '500+', label: 'Projets' },
      { value: '8+', label: 'Années d\'Expérience' },
      { value: '100+', label: 'Membres de l\'Équipe' }
    ],
    expertise: [
      {
        title: 'Pensée Stratégique',
        description: 'Analyses profondes du marché pour développer des stratégies de marque précises'
      },
      {
        title: 'Exécution Créative',
        description: 'Combiner culture locale et vision mondiale pour créer des expériences de marque interculturelles'
      },
      {
        title: 'Réseau Mondial',
        description: 'Réseau de partenaires mondial garantissant une exécution localisée professionnelle'
      },
      {
        title: 'Axé sur les Données',
        description: 'Outils d\'analyse avancés pour l\'optimisation continue du marketing'
      }
    ]
  },
  es: {
    title: 'Acerca de Moonmi',
    intro: 'Somos un equipo profesional especializado en comunicación de marca internacional, fundado en 2016. Con un profundo conocimiento del mercado chino y una perspectiva global, ayudamos a las empresas chinas a construir una fuerte influencia de marca en el escenario internacional.',
    stats: [
      { value: '100+', label: 'Países' },
      { value: '500+', label: 'Proyectos' },
      { value: '8+', label: 'Años de Experiencia' },
      { value: '100+', label: 'Miembros del Equipo' }
    ],
    expertise: [
      {
        title: 'Pensamiento Estratégico',
        description: 'Análisis profundos del mercado para desarrollar estrategias de marca precisas'
      },
      {
        title: 'Ejecución Creativa',
        description: 'Combinando cultura local con visión global para crear experiencias de marca interculturales'
      },
      {
        title: 'Red Global',
        description: 'Red de socios mundial garantizando una ejecución localizada profesional'
      },
      {
        title: 'Basado en Datos',
        description: 'Herramientas de análisis avanzadas para la optimización continua del marketing'
      }
    ]
  },
  ar: {
    title: 'عن Moonmi',
    intro: 'نحن فريق محترف متخصص في اتصالات العلامات التجارية الدولية، تأسس في عام 2016. مع معرفة عميقة بالسوق الصينية ومنظور عالمي، نساعد الشركات الصينية على بناء تأثير علامة تجارية قوي على المسرح الدولي.',
    stats: [
      { value: '100+', label: 'دولة' },
      { value: '500+', label: 'مشروع' },
      { value: '8+', label: 'سنوات الخبرة' },
      { value: '100+', label: 'أعضاء الفريق' }
    ],
    expertise: [
      {
        title: 'التفكير الاستراتيجي',
        description: 'رؤى سوقية عميقة لتطوير استراتيجيات علامة تجارية دقيقة'
      },
      {
        title: 'التنفيذ الإبداعي',
        description: 'الجمع بين الثقافة المحلية والرؤية العالمية لخلق تجارب علامة تجارية عبر الثقافات'
      },
      {
        title: 'شبكة عالمية',
        description: 'شبكة شركاء عالمية تضمن تنفيذاً محلياً محترفاً'
      },
      {
        title: 'مدفوع بالبيانات',
        description: 'أدوات تحليلية متقدمة للتحسين المستمر للتسويق'
      }
    ]
  }
};

export default function About({ language }: { language: 'zh' | 'en' | 'fr' | 'es' | 'ar' }) {
  const t = translations[language];

  return (
    <section id="about" className="relative h-screen bg-white overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1707301451933-cbfd0d0aadb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM3MzA5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080)'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center">
        {/* Title and Intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
              {t.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center"
          >
            <p className="text-lg lg:text-xl text-black/60 leading-relaxed">
              {t.intro}
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-black/10"
        >
          {t.stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-black/40 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}