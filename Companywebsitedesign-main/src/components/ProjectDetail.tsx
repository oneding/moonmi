import image_5adf9c897ca1a38058871999761fe6d57b0b2c45 from '@assets/images/sequoia_logo.jpg';
import { motion } from 'motion/react';
import gac01 from '@assets/cases/gac/gac_01.jpg';
import gac02 from '@assets/cases/gac/gac_02.jpg';
import gac03 from '@assets/cases/gac/gac_03.jpg';
import gac04 from '@assets/cases/gac/gac_04.jpg';
import gac05 from '@assets/cases/gac/gac_05.png';
import gac06 from '@assets/cases/gac/gac_06.jpg';
import gac07 from '@assets/cases/gac/gac_07.jpg';
import gac08 from '@assets/cases/gac/gac_08.jpg';
import gachero from '@assets/cases/gac/gac_hero.jpg';

import icar01 from '@assets/cases/icar/icar_01.jpg';
import icar02 from '@assets/cases/icar/icar_02.jpg';
import icar03 from '@assets/cases/icar/icar_03.jpg';
import icar04 from '@assets/cases/icar/icar_04.jpg';
import icar05 from '@assets/cases/icar/icar_05.jpg';
import icar06 from '@assets/cases/icar/icar_06.jpg';
import icar07 from '@assets/cases/icar/icar_07.jpg';
import icar08 from '@assets/cases/icar/icar_08.jpg';
import icarhero from '@assets/cases/icar/icar_hero.jpg';
import { ArrowLeft, Calendar, Users, Target, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailProps {
  projectId: number;
  language: 'zh' | 'en' | 'fr' | 'es' | 'ar';
  onClose: () => void;
}

// 项目详细数据
const projectsData = {
  zh: [
    {
      id: 0,
      title: '广汽传祺',
      subtitle: '全球市场战略',
      category: '汽车 / 品牌战略',
      client: '广汽传祺',
      year: '2024',
      duration: '12个月',
      team: '15人',
      heroImage: gachero,
      challenge: '客户希望在中国市场重新定位其豪华汽车品牌，吸引更年轻的高净值人群，同时保持品牌的传统豪华形象。面临激烈的市场竞争和消费者偏好变化的双重挑战。',
      solution: '我们通过深入的市场研究和用户洞察，开发了一套全新的品牌传播策略。结合数字化营销和线下体验中心，打造了"新豪华主义"的品牌理念，强调科技与传统的完美融合。',
      results: [
        { metric: '品牌认知度提升', value: '158%', icon: TrendingUp },
        { metric: '年轻用户占比', value: '45%', icon: Users },
        { metric: '销售增长', value: '87%', icon: Target },
      ],
      images: [
          gac01,
          gac02,
          gac03,
          gac04,
          gac05,
          gac06,
          gac07,
          gac08,
        ],
      services: ['品牌战略', '市场定位', '数字营销', '体验设计', '内容创作', '社交媒体'],
      testimonial: {
        quote: '慕鸣团队对中国市场的深刻理解和创新思维，帮助我们成功实现了品牌年轻化转型。',
        author: 'GAC品牌市场总监',
        company: 'GAC Trumpchi'
      }
    },
    {
      id: 1,
      title: 'iCar',
      subtitle: '数字营销革新',
      category: '汽车 / 数字营销',
      client: 'iCar',
      year: '2024',
      duration: '8个月',
      team: '12人',
      heroImage: icarhero,
      challenge: '客户需要在欧洲市场建立品牌认知度，与路虎、牧马人等巨头竞争。缺乏本地化内容和有效的数字营销策略。',
      solution: '我们制定了全方位的数字营销策略，包括社交媒体营销、KOL合作、内容营销和精准广告投放。通过数据分析优化每个触点，实现高效转化。',
      results: [
        { metric: '网站流量增长', value: '320%', icon: TrendingUp },
        { metric: '社交媒体粉丝', value: '500K+', icon: Users },
        { metric: '销售转化率', value: '12.5%', icon: Target },
      ],
      images: [
          icar01,
          icar02,
          icar03,
          icar04,
          icar05,
          icar06,
          icar07,
          icar08,
         ],
      services: ['数字策略', '社交媒体', 'KOL营销', '内容创作', 'SEO优化', '数据分析'],
      testimonial: {
        quote: '与慕鸣的合作让我们的海外市场拓展事半功倍，他们的专业性和执行力令人印象深刻。',
        author: 'iCar海外市场负责人',
        company: 'iCar'
      }
    },
    {
      id: 2,
      title: '美妆国际化',
      subtitle: '跨境电商增长',
      category: '美妆 / 电商',
      client: '某国内美妆品牌',
      year: '2023',
      duration: '10个月',
      team: '18人',
      heroImage: 'https://images.unsplash.com/photo-1623882213146-e60f8b9e8875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjM2OTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: '客户希望将产品推向东南亚市场，但缺乏跨境电商经验和本地化运营能力。需要建立完整的线上销售体系。',
      solution: '我们为客户搭建了多平台电商体系，包括独立站和第三方平台。通过精准的用户画像和个性化营销，结合网红营销和直播带货，快速建立市场影响力。',
      results: [
        { metric: '跨境销售额', value: '2.8M', icon: TrendingUp },
        { metric: '新增客户', value: '15万+', icon: Users },
        { metric: '复购率', value: '68%', icon: Target },
      ],
      images: [
        'https://images.unsplash.com/photo-1655568561429-2da330af5442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0JTIwcGFja2FnaW5nfGVufDF8fHx8MTc2MzcwNjEzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1740805134242-876087bb56eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBzdG9yZSUyMGRpc3BsYXl8ZW58MXx8fHwxNzYzNzczMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      services: ['电商策略', '平台运营', '视觉设计', '网红营销', '客户服务', '物流优化'],
      testimonial: {
        quote: '慕鸣不仅帮我们打开了海外市场，更重要的是建立了一套可持续的运营体系。',
        author: '电商总监',
        company: '某国内美妆品牌'
      }
    },
    {
      id: 3,
      title: '金融科技',
      subtitle: '品牌重塑',
      category: '金融 / 品牌设计',
      client: '某互联网金融平台',
      year: '2023',
      duration: '6个月',
      team: '10人',
      heroImage: 'https://images.unsplash.com/photo-1651176118867-f4ac0b1d6da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFkaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzY0MTE2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: '在监管趋严的环境下，客户需要重塑品牌形象，从"互联网金融"转型为"金融科技"，提升用户信任度和合规性。',
      solution: '我们为客户设计了全新的品牌视觉系统，强调安全、专业和创新。同时优化产品体验，简化操作流程，提升用户信任感。通过内容营销传递专业价值。',
      results: [
        { metric: '品牌信任度', value: '+92%', icon: TrendingUp },
        { metric: '活跃用户', value: '200万', icon: Users },
        { metric: '用户留存率', value: '85%', icon: Target },
      ],
      images: [
        'https://images.unsplash.com/photo-1758611974022-ca3182694951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc2Mzc1MzY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1733503747506-773e56e4078f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc3MzE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      services: ['品牌重塑', 'UI/UX设计', '视觉系统', '内容策略', '用户研究', '合规咨询'],
      testimonial: {
        quote: '品牌重塑后，我们的用户信任度显著提升，业务发展也更加稳健。',
        author: '首席营销官',
        company: '某互联网金融平台'
      }
    }
  ],
  en: [
    {
      id: 0,
      title: 'GAC Trumpchi',
      subtitle: 'Global Market Strategy',
      category: 'Automotive / Brand Strategy',
      client: 'GAC Trumpchi',
      year: '2024',
      duration: '12 Months',
      team: '15 People',
      heroImage: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjM2OTIyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'The client wanted to reposition their luxury automotive brand in the Chinese market, attracting younger high-net-worth individuals while maintaining traditional luxury image. Facing dual challenges of fierce market competition and changing consumer preferences.',
      solution: 'Through in-depth market research and user insights, we developed a new brand communication strategy. Combining digital marketing with offline experience centers, we created the "New Luxury" brand concept, emphasizing the perfect fusion of technology and tradition.',
      results: [
        { metric: 'Brand Awareness Increase', value: '158%', icon: TrendingUp },
        { metric: 'Young User Ratio', value: '45%', icon: Users },
        { metric: 'Sales Growth', value: '87%', icon: Target },
      ],
      images: [
        image_5adf9c897ca1a38058871999761fe6d57b0b2c45,
        'https://images.unsplash.com/photo-1736426341937-656fc3363b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwc2hvd3Jvb20lMjBsdXh1cnl8ZW58MXx8fHwxNzYzNzczMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      services: ['Brand Strategy', 'Market Positioning', 'Digital Marketing', 'Experience Design', 'Content Creation', 'Social Media'],
      testimonial: {
        quote: "Moonmi's deep understanding of the Chinese market and innovative thinking helped us successfully achieve brand rejuvenation.",
        author: 'Brand Marketing Director',
        company: 'International Luxury Car Brand'
      }
    },
    {
      id: 1,
      title: 'Tech Brand Expansion',
      subtitle: 'Digital Marketing Innovation',
      category: 'Technology / Digital Marketing',
      client: 'Emerging Smartphone Brand',
      year: '2024',
      duration: '8 Months',
      team: '12 People',
      heroImage: 'https://images.unsplash.com/photo-1763541398528-83c5bf720883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM2Mjk4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'The client needed to establish brand awareness in the European market, competing with giants like Apple and Samsung. Lacking localized content and effective digital marketing strategies.',
      solution: 'We developed a comprehensive digital marketing strategy including social media marketing, KOL partnerships, content marketing, and precision advertising. Optimizing every touchpoint through data analysis for efficient conversion.',
      results: [
        { metric: 'Website Traffic Growth', value: '320%', icon: TrendingUp },
        { metric: 'Social Media Followers', value: '500K+', icon: Users },
        { metric: 'Sales Conversion Rate', value: '12.5%', icon: Target },
      ],
      images: [
        'https://images.unsplash.com/photo-1646737554389-49329965ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzcxMjEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzczODUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      services: ['Digital Strategy', 'Social Media', 'KOL Marketing', 'Content Creation', 'SEO Optimization', 'Data Analytics'],
      testimonial: {
        quote: 'Working with Moonmi made our overseas market expansion twice as effective. Their professionalism and execution were impressive.',
        author: 'International Market Director',
        company: 'Emerging Smartphone Brand'
      }
    },
    {
      id: 2,
      title: 'Beauty International',
      subtitle: 'E-commerce Growth',
      category: 'Beauty / E-commerce',
      client: 'Domestic Beauty Brand',
      year: '2023',
      duration: '10 Months',
      team: '18 People',
      heroImage: 'https://images.unsplash.com/photo-1623882213146-e60f8b9e8875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjM2OTQwMTL8MA&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'The client wanted to expand into Southeast Asian markets but lacked cross-border e-commerce experience and localized operations. Needed to establish a complete online sales system.',
      solution: 'We built a multi-platform e-commerce system including independent sites and third-party platforms. Through precise user profiling and personalized marketing, combined with influencer marketing and live streaming, we quickly established market presence.',
      results: [
        { metric: 'Cross-border Sales', value: '$2.8M', icon: TrendingUp },
        { metric: 'New Customers', value: '150K+', icon: Users },
        { metric: 'Repeat Purchase Rate', value: '68%', icon: Target },
      ],
      images: [
        'https://images.unsplash.com/photo-1655568561429-2da330af5442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0JTIwcGFja2FnaW5nfGVufDF8fHx8MTc2MzcwNjEzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1740805134242-876087bb56eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBzdG9yZSUyMGRpc3BsYXl8ZW58MXx8fHwxNzYzNzczMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      services: ['E-commerce Strategy', 'Platform Operations', 'Visual Design', 'Influencer Marketing', 'Customer Service', 'Logistics Optimization'],
      testimonial: {
        quote: 'Moonmi not only helped us open overseas markets, but more importantly established a sustainable operating system.',
        author: 'E-commerce Director',
        company: 'Domestic Beauty Brand'
      }
    },
    {
      id: 3,
      title: 'FinTech',
      subtitle: 'Brand Transformation',
      category: 'Finance / Brand Design',
      client: 'Internet Finance Platform',
      year: '2023',
      duration: '6 Months',
      team: '10 People',
      heroImage: 'https://images.unsplash.com/photo-1651176118867-f4ac0b1d6da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFkaW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzY0MTE2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      challenge: 'In an increasingly regulated environment, the client needed to reshape their brand image, transforming from "Internet Finance" to "FinTech," enhancing user trust and compliance.',
      solution: 'We designed a new brand visual system emphasizing security, professionalism, and innovation. We also optimized product experience, simplified workflows, and enhanced user trust through content marketing conveying professional value.',
      results: [
        { metric: 'Brand Trust', value: '+92%', icon: TrendingUp },
        { metric: 'Active Users', value: '2M', icon: Users },
        { metric: 'User Retention', value: '85%', icon: Target },
      ],
      images: [
        'https://images.unsplash.com/photo-1758611974022-ca3182694951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc2Mzc1MzY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1733503747506-773e56e4078f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc3MzE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      services: ['Brand Redesign', 'UI/UX Design', 'Visual System', 'Content Strategy', 'User Research', 'Compliance Consulting'],
      testimonial: {
        quote: 'After the brand transformation, our user trust significantly improved and business development became more stable.',
        author: 'Chief Marketing Officer',
        company: 'Internet Finance Platform'
      }
    }
  ]
};

export default function ProjectDetail({ projectId, language, onClose }: ProjectDetailProps) {
  const project = projectsData[language][projectId];
  
  const labels = {
    zh: {
      back: '返回',
      client: '客户',
      year: '年份',
      duration: '周期',
      team: '团队',
      challenge: '挑战',
      solution: '解决方案',
      results: '成果',
      gallery: '项目展示',
      services: '服务内容',
      testimonial: '客户评价'
    },
    en: {
      back: 'Back',
      client: 'Client',
      year: 'Year',
      duration: 'Duration',
      team: 'Team',
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results',
      gallery: 'Project Gallery',
      services: 'Services',
      testimonial: 'Testimonial'
    }
  };

  const t = labels[language];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Hero Section - Fullscreen */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          onClick={onClose}
          className="absolute top-24 left-8 lg:left-12 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/20 hover:border-white/50 hover:scale-110 transition-all duration-300 z-[100]"
        >
          <ArrowLeft className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
        </motion.button>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-8 lg:px-16 pb-16 lg:pb-24 bg-[rgba(58,34,34,0.47)]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Category */}
            <span className="inline-block mb-6 px-4 py-2 text-xs tracking-widest text-white/90 border border-white/30 rounded-full backdrop-blur-sm">
              {project.category}
            </span>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white mb-6">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl lg:text-3xl text-white/90 tracking-wide mb-8">
              {project.subtitle}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">{t.year}: {project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">{t.team}: {project.team}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span className="text-sm">{t.duration}: {project.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative bg-white">
        {/* Project Info Grid */}
        <section className="container mx-auto px-8 lg:px-16 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl lg:text-4xl tracking-tight mb-6">{t.challenge}</h3>
              <div className="w-16 h-1 bg-black mb-6" />
              <p className="text-lg text-black/70 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-3xl lg:text-4xl tracking-tight mb-6">{t.solution}</h3>
              <div className="w-16 h-1 bg-black mb-6" />
              <p className="text-lg text-black/70 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-black text-white py-20 lg:py-32">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl tracking-tight mb-16 text-center"
            >
              {t.results}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {project.results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-12 h-12 mx-auto mb-6 text-white/60" />
                    <div className="text-5xl lg:text-6xl tracking-tight mb-4">{result.value}</div>
                    <div className="text-lg text-white/70">{result.metric}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="container mx-auto px-8 lg:px-16 py-20 lg:py-32">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl tracking-tight mb-16"
          >
            {t.gallery}
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="bg-black/5 py-20 lg:py-32">
          <div className="container mx-auto px-8 lg:px-16">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl tracking-tight mb-16 text-center"
            >
              {t.services}
            </motion.h3>

            <div className="flex flex-wrap justify-center gap-4">
              {project.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-6 py-3 bg-white border border-black/10 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  <span className="text-sm tracking-wide">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="container mx-auto px-8 lg:px-16 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-4xl lg:text-5xl tracking-tight mb-16">{t.testimonial}</h3>
            
            <blockquote className="text-2xl lg:text-3xl text-black/80 italic leading-relaxed mb-12">
              "{project.testimonial.quote}"
            </blockquote>

            <div>
              <div className="text-lg tracking-wide mb-2">{project.testimonial.author}</div>
              <div className="text-base text-black/60">{project.testimonial.company}</div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-20 lg:py-32">
          <div className="container mx-auto px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl lg:text-5xl tracking-tight mb-8">
                {language === 'zh' ? '准备好开启您的项目了吗？' : 'Ready to Start Your Project?'}
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300"
              >
                <span className="text-base tracking-wide">
                  {language === 'zh' ? '返回案例' : 'Back to Work'}
                </span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}