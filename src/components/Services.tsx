import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Zap, TrendingUp, Radio, ArrowLeft, Check } from 'lucide-react';

const translations = {
  zh: {
    title: '服务',
    back: '返回服务列表',
    services: [
      {
        number: '01',
        title: '品牌战略',
        description: '深入洞察目标市场，为品牌制定国际化战略定位与市场进入策略',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1612541587845-9b5d36adc3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc3MzYxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: '在全球化竞争的今天，品牌战略不仅是企业发展的方向盘，更是连接中国市场与国际舞台的桥梁。我们深入研究目标市场的文化特性、消费者行为和竞争格局，为您的品牌量身定制国际化战略路径。',
        features: [
          '市场洞察与机会分析',
          '品牌定位与差异化策略',
          '国际化路线图规划',
          '竞争对手深度分析',
          '目标市场进入策略'
        ],
        capabilities: [
          '全球市场研究能力',
          '跨文化品牌策略',
          '数据驱动决策支持',
          '行业专家顾问团队'
        ]
      },
      {
        number: '02',
        title: '创意执行',
        description: '结合本土文化与国际视野，创造跨文化共鸣的品牌内容与视觉体验',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjM3MDQwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: '创意是品牌与消费者沟通的语言。我们的创意团队融合东西方美学，将中国品牌的独特价值转化为全球通用的视觉语言和情感体验，让您的品牌在国际舞台上脱颖而出。',
        features: [
          '品牌视觉识别系统设计',
          '跨文化创意内容制作',
          '多语言文案创作',
          '视频与动态内容制作',
          '包装与产品设计'
        ],
        capabilities: [
          '国际化创意团队',
          '多文化背景洞察',
          '全流程制作能力',
          '创新技术应用'
        ]
      },
      {
        number: '03',
        title: '数字营销',
        description: '整合全球数字渠道，实现精准触达与高效转化，建立品牌影响力',
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mzc1ODM4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: '数字化时代，品牌的国际化离不开数字营销的助力。我们整合全球主流数字平台资源，运用数据分析和智能技术，为您的品牌打造精准高效的数字营销矩阵。',
        features: [
          '全球社交媒体营销',
          '搜索引擎优化与广告',
          '内容营销与社群运营',
          '数据分析与效果优化',
          'KOL与影响者营销'
        ],
        capabilities: [
          '全球数字平台资源',
          '数据分析与BI系统',
          '智能营销技术',
          '专业投放团队'
        ]
      },
      {
        number: '04',
        title: '公关传播',
        description: '构建国际媒体网络，打造品牌声量，提升企业在全球市场的认知度',
        icon: Radio,
        image: 'https://images.unsplash.com/photo-1762968280286-0bfcc4afd0ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjByZWxhdGlvbnMlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2Mzc3MzYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: '在信息碎片化的时代，公关传播是建立品牌公信力和影响力的关键。我们拥有覆盖全球的媒体资源网络，帮助中国品牌在国际舞台上发出强有力的声音。',
        features: [
          '国际媒体关系管理',
          '新闻发布与传播策略',
          '危机公关与声誉管理',
          '活动策划与执行',
          '意见领袖合作'
        ],
        capabilities: [
          '全球媒体资源网络',
          '多语言传播能力',
          '危机响应机制',
          '活动执行经验'
        ]
      }
    ]
  },
  en: {
    title: 'Services',
    back: 'Back to Services',
    services: [
      {
        number: '01',
        title: 'Brand Strategy',
        description: 'Deep market insights to define international brand positioning and market entry strategies',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1612541587845-9b5d36adc3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc3MzYxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'In today\'s globalized marketplace, brand strategy serves as both a compass and a bridge connecting Chinese markets to the international stage. We conduct deep research into target market cultures, consumer behaviors, and competitive landscapes to craft customized internationalization strategies.',
        features: [
          'Market Insights & Opportunity Analysis',
          'Brand Positioning & Differentiation',
          'Internationalization Roadmap',
          'Competitive Intelligence',
          'Market Entry Strategy'
        ],
        capabilities: [
          'Global Market Research',
          'Cross-Cultural Strategy',
          'Data-Driven Decision Making',
          'Industry Expert Advisory'
        ]
      },
      {
        number: '02',
        title: 'Creative Execution',
        description: 'Combining local culture with global vision to create cross-cultural brand resonance',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjM3MDQwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'Creativity is the language brands use to communicate with consumers. Our creative team blends Eastern and Western aesthetics to transform unique Chinese brand values into universal visual languages and emotional experiences that stand out on the global stage.',
        features: [
          'Brand Visual Identity Design',
          'Cross-Cultural Content Creation',
          'Multilingual Copywriting',
          'Video & Motion Content',
          'Packaging & Product Design'
        ],
        capabilities: [
          'International Creative Team',
          'Multi-Cultural Insights',
          'Full Production Capabilities',
          'Innovative Technology'
        ]
      },
      {
        number: '03',
        title: 'Digital Marketing',
        description: 'Integrating global digital channels for precise reach, efficient conversion, and brand influence',
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mzc1ODM4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'In the digital era, brand internationalization relies heavily on digital marketing. We integrate global mainstream digital platform resources and leverage data analytics and smart technology to build precise and efficient digital marketing matrices for your brand.',
        features: [
          'Global Social Media Marketing',
          'SEO & Paid Advertising',
          'Content Marketing & Community',
          'Data Analytics & Optimization',
          'KOL & Influencer Marketing'
        ],
        capabilities: [
          'Global Platform Resources',
          'Advanced Analytics & BI',
          'Marketing Automation',
          'Professional Media Buying'
        ]
      },
      {
        number: '04',
        title: 'PR & Communications',
        description: 'Building international media networks to amplify brand voice and enhance global recognition',
        icon: Radio,
        image: 'https://images.unsplash.com/photo-1762968280286-0bfcc4afd0ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjByZWxhdGlvbnMlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2Mzc3MzYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'In an era of fragmented information, public relations is key to building brand credibility and influence. With our global media network, we help Chinese brands make powerful voices heard on the international stage.',
        features: [
          'International Media Relations',
          'Press Release & Distribution',
          'Crisis Management',
          'Event Planning & Execution',
          'Thought Leadership Programs'
        ],
        capabilities: [
          'Global Media Network',
          'Multilingual Communications',
          'Crisis Response System',
          'Event Execution Expertise'
        ]
      }
    ]
  },
  fr: {
    title: 'Services',
    back: 'Retour aux Services',
    services: [
      {
        number: '01',
        title: 'Stratégie de Marque',
        description: 'Analyses de marché approfondies pour définir le positionnement international de la marque',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1612541587845-9b5d36adc3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc3MzYxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'Dans le contexte de la mondialisation, la stratégie de marque est à la fois une boussole et un pont reliant les marchés chinois à la scène internationale. Nous effectuons des recherches approfondies sur les cultures des marchés cibles, les comportements des consommateurs et les paysages concurrentiels.',
        features: [
          'Analyse du marché et opportunités',
          'Positionnement et différenciation',
          'Feuille de route d\'internationalisation',
          'Intelligence concurrentielle',
          'Stratégie d\'entrée sur le marché'
        ],
        capabilities: [
          'Recherche de marché mondiale',
          'Stratégie interculturelle',
          'Décisions basées sur les données',
          'Conseil d\'experts du secteur'
        ]
      },
      {
        number: '02',
        title: 'Exécution Créative',
        description: 'Combiner culture locale et vision globale pour créer une résonance de marque interculturelle',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjM3MDQwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'La créativité est le langage que les marques utilisent pour communiquer avec les consommateurs. Notre équipe créative fusionne l\'esthétique orientale et occidentale pour transformer les valeurs uniques des marques chinoises en langages visuels universels.',
        features: [
          'Design d\'identité visuelle',
          'Création de contenu interculturel',
          'Rédaction multilingue',
          'Contenu vidéo et motion',
          'Design d\'emballage et produit'
        ],
        capabilities: [
          'Équipe créative internationale',
          'Perspectives multiculturelles',
          'Capacités de production complètes',
          'Technologie innovante'
        ]
      },
      {
        number: '03',
        title: 'Marketing Digital',
        description: 'Intégrer les canaux numériques mondiaux pour une portée précise et une influence de marque',
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mzc1ODM4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'À l\'ère numérique, l\'internationalisation des marques repose fortement sur le marketing digital. Nous intégrons les ressources des principales plateformes numériques mondiales et utilisons l\'analyse de données et la technologie intelligente.',
        features: [
          'Marketing sur réseaux sociaux',
          'SEO et publicité payante',
          'Marketing de contenu et communauté',
          'Analyse de données et optimisation',
          'Marketing d\'influence'
        ],
        capabilities: [
          'Ressources de plateforme mondiale',
          'Analytique avancée et BI',
          'Automatisation marketing',
          'Achat média professionnel'
        ]
      },
      {
        number: '04',
        title: 'Relations Publiques',
        description: 'Construire des réseaux médiatiques internationaux pour amplifier la voix de la marque',
        icon: Radio,
        image: 'https://images.unsplash.com/photo-1762968280286-0bfcc4afd0ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjByZWxhdGlvbnMlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2Mzc3MzYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'À une époque d\'information fragmentée, les relations publiques sont essentielles pour établir la crédibilité et l\'influence de la marque. Avec notre réseau médiatique mondial, nous aidons les marques chinoises à se faire entendre sur la scène internationale.',
        features: [
          'Relations médias internationales',
          'Communiqués de presse et distribution',
          'Gestion de crise',
          'Planification et exécution d\'événements',
          'Programmes de leadership d\'opinion'
        ],
        capabilities: [
          'Réseau médiatique mondial',
          'Communications multilingues',
          'Système de réponse aux crises',
          'Expertise en exécution d\'événements'
        ]
      }
    ]
  },
  es: {
    title: 'Servicios',
    back: 'Volver a Servicios',
    services: [
      {
        number: '01',
        title: 'Estrategia de Marca',
        description: 'Análisis profundos del mercado para definir posicionamiento internacional de marca',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1612541587845-9b5d36adc3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc3MzYxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'En el mercado globalizado de hoy, la estrategia de marca sirve como brújula y puente que conecta los mercados chinos con el escenario internacional. Realizamos investigaciones profundas sobre las culturas del mercado objetivo, los comportamientos del consumidor y los panoramas competitivos.',
        features: [
          'Análisis de mercado y oportunidades',
          'Posicionamiento y diferenciación',
          'Hoja de ruta de internacionalización',
          'Inteligencia competitiva',
          'Estrategia de entrada al mercado'
        ],
        capabilities: [
          'Investigación de mercado global',
          'Estrategia intercultural',
          'Toma de decisiones basada en datos',
          'Asesoría de expertos de la industria'
        ]
      },
      {
        number: '02',
        title: 'Ejecución Creativa',
        description: 'Combinando cultura local con visión global para crear resonancia de marca intercultural',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjM3MDQwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'La creatividad es el lenguaje que las marcas usan para comunicarse con los consumidores. Nuestro equipo creativo fusiona la estética oriental y occidental para transformar los valores únicos de las marcas chinas en lenguajes visuales universales.',
        features: [
          'Diseño de identidad visual de marca',
          'Creación de contenido intercultural',
          'Redacción multilingüe',
          'Contenido de video y motion',
          'Diseño de empaque y producto'
        ],
        capabilities: [
          'Equipo creativo internacional',
          'Perspectivas multiculturales',
          'Capacidades de producción completas',
          'Tecnología innovadora'
        ]
      },
      {
        number: '03',
        title: 'Marketing Digital',
        description: 'Integrando canales digitales globales para alcance preciso e influencia de marca',
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mzc1ODM4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'En la era digital, la internacionalización de marca depende en gran medida del marketing digital. Integramos recursos de las principales plataformas digitales globales y aprovechamos el análisis de datos y la tecnología inteligente.',
        features: [
          'Marketing en redes sociales globales',
          'SEO y publicidad pagada',
          'Marketing de contenidos y comunidad',
          'Análisis de datos y optimización',
          'Marketing de influencers'
        ],
        capabilities: [
          'Recursos de plataforma global',
          'Analítica avanzada y BI',
          'Automatización de marketing',
          'Compra de medios profesional'
        ]
      },
      {
        number: '04',
        title: 'Relaciones Públicas',
        description: 'Construyendo redes de medios internacionales para amplificar la voz de la marca',
        icon: Radio,
        image: 'https://images.unsplash.com/photo-1762968280286-0bfcc4afd0ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjByZWxhdGlvbnMlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2Mzc3MzYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'En una era de información fragmentada, las relaciones públicas son clave para construir credibilidad e influencia de marca. Con nuestra red de medios global, ayudamos a las marcas chinas a hacerse escuchar en el escenario internacional.',
        features: [
          'Relaciones con medios internacionales',
          'Comunicados de prensa y distribución',
          'Gestión de crisis',
          'Planificación y ejecución de eventos',
          'Programas de liderazgo de pensamiento'
        ],
        capabilities: [
          'Red de medios global',
          'Comunicaciones multilingües',
          'Sistema de respuesta a crisis',
          'Experiencia en ejecución de eventos'
        ]
      }
    ]
  },
  ar: {
    title: 'خدمات',
    back: 'العودة إلى الخدمات',
    services: [
      {
        number: '01',
        title: 'استراتيجية العلامة التجارية',
        description: 'رؤى سوقية عميقة لتحديد وضع العلامة التجارية الدولية',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1612541587845-9b5d36adc3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0cmF0ZWd5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc3MzYxMXww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'في السوق العالمية اليوم، تعمل استراتيجية العلامة التجارية كبوصلة وجسر يربط الأسواق الصينية بالمسرح الدولي. نجري بحثاً عميقاً في ثقافات السوق المستهدفة وسلوكيات المستهلك والمناظر التنافسية.',
        features: [
          'تحليل السوق والفرص',
          'تحديد الموضع والتمايز',
          'خارطة طريق التدويل',
          'الذكاء التنافسي',
          'استراتيجية دخول السوق'
        ],
        capabilities: [
          'أبحاث السوق العالمية',
          'استراتيجية عبر الثقافات',
          'اتخاذ القرارات المبنية على البيانات',
          'استشارات خبراء الصناعة'
        ]
      },
      {
        number: '02',
        title: 'التنفيذ الإبداعي',
        description: 'الجمع بين الثقافة المحلية والرؤية العالمية لخلق صدى علامة تجارية عابرة للثقافات',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjM3MDQwODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'الإبداع هو اللغة التي تستخدمها العلامات التجارية للتواصل مع المستهلكين. يمزج فريقنا الإبداعي بين الجماليات الشرقية والغربية لتحويل قيم العلامة التجارية الصينية الفريدة إلى لغات بصرية عالمية.',
        features: [
          'تصميم الهوية البصرية للعلامة التجارية',
          'إنشاء محتوى عبر الثقافات',
          'كتابة نصوص متعددة اللغات',
          'محتوى الفيديو والحركة',
          'تصميم التغليف والمنتج'
        ],
        capabilities: [
          'فريق إبداعي دولي',
          'رؤى متعددة الثقافات',
          'قدرات إنتاج كاملة',
          'تكنولوجيا مبتكرة'
        ]
      },
      {
        number: '03',
        title: 'التسويق الرقمي',
        description: 'دمج القنوات الرقمية العالمية للوصول الدقيق والتأثير على العلامة التجارية',
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mzc1ODM4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'في العصر الرقمي، يعتمد تدويل العلامة التجارية بشكل كبير على التسويق الرقمي. ندمج موارد المنصات الرقمية العالمية الرئيسية ونستفيد من تحليلات البيانات والتكنولوجيا الذكية.',
        features: [
          'التسويق عبر وسائل التواصل الاجتماعي العالمية',
          'تحسين محركات البحث والإعلانات المدفوعة',
          'تسويق المحتوى والمجتمع',
          'تحليل البيانات والتحسين',
          'التسويق عبر المؤثرين'
        ],
        capabilities: [
          'موارد المنصات العالمية',
          'التحليلات المتقدمة وذكاء الأعمال',
          'أتمتة التسويق',
          'شراء الوسائط المحترف'
        ]
      },
      {
        number: '04',
        title: 'العلاقات العامة',
        description: 'بناء شبكات إعلامية دولية لتضخيم صوت العلامة التجارية',
        icon: Radio,
        image: 'https://images.unsplash.com/photo-1762968280286-0bfcc4afd0ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjByZWxhdGlvbnMlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2Mzc3MzYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'في عصر المعلومات المجزأة، تعد العلاقات العامة مفتاحاً لبناء مصداقية العلامة التجارية وتأثيرها. من خلال شبكتنا الإعلامية العالمية، نساعد العلامات التجارية الصينية على إسماع أصواتها على المسرح الدولي.',
        features: [
          'علاقات وسائل الإعلام الدولية',
          'البيانات الصحفية والتوزيع',
          'إدارة الأزمات',
          'تخطيط وتنفيذ الفعاليات',
          'برامج قيادة الفكر'
        ],
        capabilities: [
          'شبكة إعلامية عالمية',
          'اتصالات متعددة اللغات',
          'نظام الاستجابة للأزمات',
          'خبرة في تنفيذ الفعاليات'
        ]
      }
    ]
  }
};

export default function Services({ language }: { language: 'zh' | 'en' | 'fr' | 'es' | 'ar' }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const t = translations[language];

  // Detail Page Component
  const ServiceDetail = ({ serviceIndex }: { serviceIndex: number }) => {
    const service = t.services[serviceIndex];
    const Icon = service.icon;

    // Lock body scroll when detail page is open
    useEffect(() => {
      // Lock body scroll - only use overflow hidden to preserve nav bar
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Cleanup: restore scroll when component unmounts
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }, []);

    // Prevent scroll chaining (bounce scroll to parent)
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
      const target = e.currentTarget;
      const isScrollingDown = e.deltaY > 0;
      const isAtBottom = target.scrollHeight - target.scrollTop === target.clientHeight;
      const isAtTop = target.scrollTop === 0;

      // Prevent scroll chaining when at boundaries
      if ((isAtTop && !isScrollingDown) || (isAtBottom && isScrollingDown)) {
        e.preventDefault();
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-white overflow-y-auto"
        onWheel={handleWheel}
        style={{ overscrollBehavior: 'contain' }}
      >
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
          
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            onClick={() => setSelectedService(null)}
            className="absolute top-24 left-6 lg:left-12 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-[100]"
          >
            <ArrowLeft className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </motion.button>

          {/* Title & Number */}
          <div className="absolute bottom-12 left-6 lg:left-12 right-6 lg:right-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-end justify-between"
            >
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-white/40 text-6xl lg:text-8xl tracking-tighter" style={{ lineHeight: 0.8 }}>
                    {service.number}
                  </span>
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight">
                  {service.title}
                </h1>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16 lg:mb-24"
            >
              <p className="text-2xl lg:text-3xl text-black/80 leading-relaxed">
                {service.detailedDescription}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-16 lg:mb-24"
            >
              <h2 className="text-3xl lg:text-4xl tracking-tight mb-8">
                {language === 'zh' ? '服务内容' : language === 'ar' ? 'محتوى الخدمة' : language === 'fr' ? 'Contenu du Service' : language === 'es' ? 'Contenido del Servicio' : 'Service Features'}
              </h2>
              <div className="grid gap-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg lg:text-xl text-black/70 flex-1">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-16"
            >
              <h2 className="text-3xl lg:text-4xl tracking-tight mb-8">
                {language === 'zh' ? '核心能力' : language === 'ar' ? 'القدرات الأساسية' : language === 'fr' ? 'Capacités Clés' : language === 'es' ? 'Capacidades Clave' : 'Core Capabilities'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="p-6 lg:p-8 bg-black/5 hover:bg-black/10 transition-colors rounded-sm border border-black/10"
                  >
                    <p className="text-lg lg:text-xl tracking-tight">
                      {capability}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="relative h-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {selectedService !== null ? (
          <ServiceDetail key="detail" serviceIndex={selectedService} />
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Services Grid - 2x2 No Gap */}
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2">
              {t.services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredIndex === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.1, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedService(index)}
                    className="group relative overflow-hidden cursor-pointer"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      {/* Overlay - Darker on hover */}
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-700" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12">
                      {/* Top: Number & Icon */}
                      <div className="flex items-start justify-between">
                        {/* Number */}
                        <motion.span
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                            opacity: isHovered ? 0.2 : 0.15
                          }}
                          transition={{ duration: 0.4 }}
                          className="text-8xl lg:text-9xl text-white tracking-tighter"
                          style={{ lineHeight: 0.8 }}
                        >
                          {service.number}
                        </motion.span>

                        {/* Icon */}
                        <motion.div
                          animate={{
                            rotate: isHovered ? 360 : 0,
                            scale: isHovered ? 1.2 : 1
                          }}
                          transition={{ duration: 0.6 }}
                          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                        >
                          <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                        </motion.div>
                      </div>

                      {/* Bottom: Title & Description */}
                      <div>
                        {/* Title */}
                        <motion.h3
                          animate={{
                            x: isHovered ? 10 : 0
                          }}
                          transition={{ duration: 0.4 }}
                          className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4"
                        >
                          {service.title}
                        </motion.h3>

                       

                        {/* Arrow Indicator */}
                        <motion.div
                          animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 0 : -20
                          }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="mt-6 flex items-center gap-3"
                        >
                          <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
                            <motion.svg
                              animate={{
                                x: isHovered ? 3 : 0,
                                y: isHovered ? -3 : 0
                              }}
                              transition={{ duration: 0.3 }}
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 17L17 7M17 7H7M17 7V17"
                              />
                            </motion.svg>
                          </div>
                          <span className="text-sm text-white/80 tracking-wider uppercase">
                            {language === 'zh' ? '了解更多' : 'Learn More'}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Border Effect */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 border-4 border-white/20 pointer-events-none"
                    />

                    {/* Spotlight Effect */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 0.1 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Grid Lines - Decorative */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Vertical Center Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
              {/* Horizontal Center Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/10" />
            </div>

            {/* Subtle Animated Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
