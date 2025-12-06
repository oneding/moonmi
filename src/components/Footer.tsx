import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';

const translations = {
  zh: {
    rights: '© 2024 慕鸣营销策划有限公司. 保留所有权利.',
    privacy: '隐私政策',
    terms: '服务条款',
    social: {
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      instagram: 'Instagram',
      wechat: '微信'
    }
  },
  en: {
    rights: '© 2024 Moonmi Marketing Planning Co., Ltd. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    social: {
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      instagram: 'Instagram',
      wechat: 'WeChat'
    }
  },
  fr: {
    rights: '© 2024 Moonmi Marketing Planning Co., Ltd. Tous droits réservés.',
    privacy: 'Politique de Confidentialité',
    terms: 'Conditions d\'Utilisation',
    social: {
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      instagram: 'Instagram',
      wechat: 'WeChat'
    }
  },
  es: {
    rights: '© 2024 Moonmi Marketing Planning Co., Ltd. Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    social: {
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      instagram: 'Instagram',
      wechat: 'WeChat'
    }
  },
  ar: {
    rights: '© 2024 Moonmi Marketing Planning Co., Ltd. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    social: {
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      instagram: 'Instagram',
      wechat: 'WeChat'
    }
  }
};

export default function Footer({ language }: { language: 'zh' | 'en' | 'fr' | 'es' | 'ar' }) {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative h-screen bg-[#FFD700] text-black border-t border-black/10 flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Large Logo/Branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-7xl sm:text-8xl lg:text-9xl tracking-tight mb-8">
            {language === 'zh' ? '慕鸣' : 'Moonmi'}
          </h2>
          <p className="text-xl lg:text-2xl text-black/60">
            {language === 'zh' ? '国际化品牌传播专家' : 'International Brand Communication Experts'}
          </p>
        </motion.div>

        {/* Footer Info */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 border-t border-black/10 pt-12">
          {/* Left - Copyright */}
          <div className="text-sm text-black/60">
            {t.rights.replace('2024', currentYear.toString())}
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap gap-8">
            <a href="#" className="text-sm text-black/60 hover:text-black transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="text-sm text-black/60 hover:text-black transition-colors">
              {t.terms}
            </a>
          </div>

          {/* Right - Social */}
          <div className="flex gap-8">
            {Object.entries(t.social).map(([key, label]) => {
              const iconMap: { [key: string]: React.ReactNode } = {
                linkedin: <Linkedin className="w-5 h-5" />,
                twitter: <Twitter className="w-5 h-5" />,
                instagram: <Instagram className="w-5 h-5" />,
                wechat: <MessageCircle className="w-5 h-5" />
              };
              
              return (
                <a
                  key={key}
                  href="#"
                  className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors group"
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {iconMap[key]}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}