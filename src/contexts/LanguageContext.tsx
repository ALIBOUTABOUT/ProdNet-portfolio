import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translations: Record<Language, Record<string, string>> = {
    en: {
      // Header
      'nav.project': 'Project',
      'nav.problem': 'Problem',
      'nav.solution': 'Solution',
      'nav.features': 'Features',
      'nav.contact': 'Contact',
      
      // Cover
      'cover.team': 'Team',
      'cover.role': 'Startup Platform Development',
      'cover.tagline': 'We don\'t just connect… we reinvent the rules of the game, where creativity becomes power and every idea turns into reality',
      'cover.viewApp': 'View Our App',
      'cover.getInTouch': 'Get In Touch',
      
      // Project Idea
      'project.title': 'Project Idea',
      'project.description': 'ProdNet is a platform that helps farmers, artisans, and small producers present their projects and connect directly with investors looking for real economic opportunities. We create a transparent bridge between productive talent and financial support, enabling growth and fostering meaningful partnerships in the real economy.',
      
      // Problem
      'problem.title': 'The Problem',
      'problem.subtitle': 'Current challenges in the producer-investor ecosystem',
      'problem.1.title': 'Producers lack visibility and funding',
      'problem.1.desc': 'Talented farmers and artisans struggle to showcase their work',
      'problem.2.title': 'Investors struggle to find real, trustworthy opportunities',
      'problem.2.desc': 'Limited access to genuine, vetted production projects',
      'problem.3.title': 'There is no direct bridge between production and investment',
      'problem.3.desc': 'Traditional channels create barriers and inefficiencies',
      
      // Solution
      'solution.title': 'The Solution',
      'solution.subtitle': 'How ProdNet bridges the gap',
      'solution.intro': 'ProdNet provides a comprehensive platform that connects producers directly with investors, eliminating intermediaries and creating transparent, trustworthy relationships.',
      'solution.feature1': 'Professional project profiles',
      'solution.feature2': 'A space to showcase ideas',
      'solution.feature3': 'Direct interaction between producers and investors',
      'solution.feature4': 'Transparent project evaluation',
      'solution.feature5': 'A community area to exchange ideas',
      
      // Target Audience
      'audience.title': 'Target Audience',
      'audience.subtitle': 'Who benefits from ProdNet',
      'audience.farmers': 'Farmers',
      'audience.farmers.desc': 'Need visibility and support to grow their agricultural projects and reach investors who understand the value of sustainable farming.',
      'audience.artisans': 'Artisans / Small Industries',
      'audience.artisans.desc': 'Need funding to grow their craft businesses, scale production, and connect with investors who appreciate handmade quality.',
      'audience.investors': 'Investors',
      'audience.investors.desc': 'Need clear, reliable opportunities to invest in real production projects with transparent evaluation and direct communication.',
      
      // Features
      'features.title': 'Main Features',
      'features.subtitle': 'Everything you need to connect and collaborate',
      'features.1.title': 'Custom Professional Profiles',
      'features.1.desc': 'Create detailed profiles showcasing your experience, projects, and capabilities with rich media support.',
      'features.2.title': 'Project Presentation Space',
      'features.2.desc': 'Present your ideas with comprehensive project pages including images, descriptions, and financial needs.',
      'features.3.title': 'Interaction & Messaging',
      'features.3.desc': 'Direct communication channels between producers and investors for questions, negotiations, and updates.',
      'features.4.title': 'Investment Flow',
      'features.4.desc': 'Streamlined process for investments with clear terms, milestones, and secure transaction tracking.',
      'features.5.title': 'Rating & Transparency System',
      'features.5.desc': 'Build trust through verified reviews, ratings, and transparent project progress tracking.',
      'features.screenshots': 'App Screenshots',
      
      // Contact
      'contact.title': 'Get In Touch',
      'contact.description': 'Interested in learning more about ProdNet? Reach out to our team.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      'contact.success': 'Thank you! Your message has been sent.',
      
      // Footer
      'footer.rights': '© 2025 Team ProdNet. All rights reserved.',
      'footer.tagline': 'Connecting producers with investors.',
    },
    ar: {
      // Header
      'nav.project': 'المشروع',
      'nav.problem': 'المشكلة',
      'nav.solution': 'الحل',
      'nav.features': 'المميزات',
      'nav.contact': 'اتصل بنا',
      
      // Cover
      'cover.team': 'فريق',
      'cover.role': 'تطوير منصة الشركات الناشئة',
      'cover.tagline': 'نحن لا نربط فقط... نحن نعيد اختراع قواعد اللعبة، حيث تصبح الإبداع قوة وكل فكرة تتحول إلى حقيقة',
      'cover.viewApp': 'عرض تطبيقنا',
      'cover.getInTouch': 'تواصل معنا',
      
      // Project Idea
      'project.title': 'فكرة المشروع',
      'project.description': 'برودنت هي منصة تساعد المزارعين والحرفيين والمنتجين الصغار على تقديم مشاريعهم والتواصل مباشرة مع المستثمرين الباحثين عن فرص اقتصادية حقيقية. نحن نبني جسرًا شفافًا بين المواهب الإنتاجية والدعم المالي، مما يتيح النمو ويعزز الشراكات الهادفة في الاقتصاد الحقيقي.',
      
      // Problem
      'problem.title': 'المشكلة',
      'problem.subtitle': 'التحديات الحالية في نظام المنتجين والمستثمرين',
      'problem.1.title': 'يفتقر المنتجون إلى الرؤية والتمويل',
      'problem.1.desc': 'المزارعون والحرفيون الموهوبون يكافحون لعرض أعمالهم',
      'problem.2.title': 'يكافح المستثمرون للعثور على فرص حقيقية وموثوقة',
      'problem.2.desc': 'وصول محدود إلى مشاريع إنتاج حقيقية ومعتمدة',
      'problem.3.title': 'لا يوجد جسر مباشر بين الإنتاج والاستثمار',
      'problem.3.desc': 'القنوات التقليدية تخلق حواجز وعدم كفاءة',
      
      // Solution
      'solution.title': 'الحل',
      'solution.subtitle': 'كيف تسد برودنت الفجوة',
      'solution.intro': 'توفر برودنت منصة شاملة تربط المنتجين مباشرة بالمستثمرين، مما يلغي الوسطاء ويخلق علاقات شفافة وموثوقة.',
      'solution.feature1': 'ملفات مشاريع احترافية',
      'solution.feature2': 'مساحة لعرض الأفكار',
      'solution.feature3': 'تفاعل مباشر بين المنتجين والمستثمرين',
      'solution.feature4': 'تقييم شفاف للمشاريع',
      'solution.feature5': 'منطقة مجتمعية لتبادل الأفكار',
      
      // Target Audience
      'audience.title': 'الجمهور المستهدف',
      'audience.subtitle': 'من يستفيد من برودنت',
      'audience.farmers': 'المزارعون',
      'audience.farmers.desc': 'يحتاجون إلى الرؤية والدعم لتنمية مشاريعهم الزراعية والوصول إلى المستثمرين الذين يفهمون قيمة الزراعة المستدامة.',
      'audience.artisans': 'الحرفيون / الصناعات الصغيرة',
      'audience.artisans.desc': 'يحتاجون إلى التمويل لتنمية أعمالهم الحرفية وتوسيع نطاق الإنتاج والتواصل مع المستثمرين الذين يقدرون الجودة اليدوية.',
      'audience.investors': 'المستثمرون',
      'audience.investors.desc': 'يحتاجون إلى فرص واضحة وموثوقة للاستثمار في مشاريع إنتاج حقيقية مع تقييم شفاف واتصال مباشر.',
      
      // Features
      'features.title': 'المميزات الرئيسية',
      'features.subtitle': 'كل ما تحتاجه للتواصل والتعاون',
      'features.1.title': 'ملفات شخصية احترافية مخصصة',
      'features.1.desc': 'إنشاء ملفات تعريف مفصلة تعرض خبرتك ومشاريعك وقدراتك مع دعم الوسائط الغنية.',
      'features.2.title': 'مساحة تقديم المشاريع',
      'features.2.desc': 'قدم أفكارك بصفحات مشاريع شاملة تتضمن الصور والأوصاف والاحتياجات المالية.',
      'features.3.title': 'التفاعل والمراسلة',
      'features.3.desc': 'قنوات اتصال مباشرة بين المنتجين والمستثمرين للأسئلة والمفاوضات والتحديثات.',
      'features.4.title': 'تدفق الاستثمار',
      'features.4.desc': 'عملية مبسطة للاستثمارات بشروط واضحة ومعالم وتتبع آمن للمعاملات.',
      'features.5.title': 'نظام التقييم والشفافية',
      'features.5.desc': 'بناء الثقة من خلال المراجعات المعتمدة والتقييمات وتتبع تقدم المشروع الشفاف.',
      'features.screenshots': 'لقطات شاشة التطبيق',
      
      // Contact
      'contact.title': 'تواصل معنا',
      'contact.description': 'هل أنت مهتم بمعرفة المزيد عن برودنت؟ تواصل مع فريقنا.',
      'contact.name': 'الاسم',
      'contact.email': 'البريد الإلكتروني',
      'contact.message': 'الرسالة',
      'contact.send': 'إرسال الرسالة',
      'contact.success': 'شكرًا لك! تم إرسال رسالتك.',
      
      // Footer
      'footer.rights': '© 2025 فريق برودنت. جميع الحقوق محفوظة.',
      'footer.tagline': 'ربط المنتجين بالمستثمرين.',
    },
    fr: {
      // Header
      'nav.project': 'Projet',
      'nav.problem': 'Problème',
      'nav.solution': 'Solution',
      'nav.features': 'Fonctionnalités',
      'nav.contact': 'Contact',
      
      // Cover
      'cover.team': 'Équipe',
      'cover.role': 'Développement de Plateforme de Startups',
      'cover.tagline': 'Nous ne connectons pas seulement... nous réinventons les règles du jeu, où la créativité devient pouvoir et chaque idée se transforme en réalité',
      'cover.viewApp': 'Voir Notre Application',
      'cover.getInTouch': 'Nous Contacter',
      
      // Project Idea
      'project.title': 'Idée du Projet',
      'project.description': 'ProdNet est une plateforme qui aide les agriculteurs, artisans et petits producteurs à présenter leurs projets et à se connecter directement avec les investisseurs à la recherche d\'opportunités économiques réelles. Nous créons un pont transparent entre le talent productif et le soutien financier, permettant la croissance et favorisant des partenariats significatifs dans l\'économie réelle.',
      
      // Problem
      'problem.title': 'Le Problème',
      'problem.subtitle': 'Défis actuels dans l\'écosystème producteur-investisseur',
      'problem.1.title': 'Les producteurs manquent de visibilité et de financement',
      'problem.1.desc': 'Les agriculteurs et artisans talentueux peinent à présenter leur travail',
      'problem.2.title': 'Les investisseurs peinent à trouver des opportunités réelles et fiables',
      'problem.2.desc': 'Accès limité à des projets de production authentiques et vérifiés',
      'problem.3.title': 'Il n\'existe pas de pont direct entre production et investissement',
      'problem.3.desc': 'Les canaux traditionnels créent des barrières et des inefficacités',
      
      // Solution
      'solution.title': 'La Solution',
      'solution.subtitle': 'Comment ProdNet comble le fossé',
      'solution.intro': 'ProdNet fournit une plateforme complète qui connecte directement les producteurs aux investisseurs, éliminant les intermédiaires et créant des relations transparentes et fiables.',
      'solution.feature1': 'Profils de projets professionnels',
      'solution.feature2': 'Un espace pour présenter les idées',
      'solution.feature3': 'Interaction directe entre producteurs et investisseurs',
      'solution.feature4': 'Évaluation transparente des projets',
      'solution.feature5': 'Un espace communautaire pour échanger des idées',
      
      // Target Audience
      'audience.title': 'Public Cible',
      'audience.subtitle': 'Qui bénéficie de ProdNet',
      'audience.farmers': 'Agriculteurs',
      'audience.farmers.desc': 'Besoin de visibilité et de soutien pour développer leurs projets agricoles et atteindre les investisseurs qui comprennent la valeur de l\'agriculture durable.',
      'audience.artisans': 'Artisans / Petites Industries',
      'audience.artisans.desc': 'Besoin de financement pour développer leurs entreprises artisanales, augmenter la production et se connecter avec des investisseurs qui apprécient la qualité artisanale.',
      'audience.investors': 'Investisseurs',
      'audience.investors.desc': 'Besoin d\'opportunités claires et fiables pour investir dans de vrais projets de production avec une évaluation transparente et une communication directe.',
      
      // Features
      'features.title': 'Fonctionnalités Principales',
      'features.subtitle': 'Tout ce dont vous avez besoin pour vous connecter et collaborer',
      'features.1.title': 'Profils Professionnels Personnalisés',
      'features.1.desc': 'Créez des profils détaillés présentant votre expérience, vos projets et vos capacités avec support multimédia riche.',
      'features.2.title': 'Espace de Présentation de Projet',
      'features.2.desc': 'Présentez vos idées avec des pages de projet complètes incluant images, descriptions et besoins financiers.',
      'features.3.title': 'Interaction & Messagerie',
      'features.3.desc': 'Canaux de communication directs entre producteurs et investisseurs pour questions, négociations et mises à jour.',
      'features.4.title': 'Flux d\'Investissement',
      'features.4.desc': 'Processus simplifié pour les investissements avec conditions claires, jalons et suivi sécurisé des transactions.',
      'features.5.title': 'Système d\'Évaluation et de Transparence',
      'features.5.desc': 'Construisez la confiance grâce à des avis vérifiés, des évaluations et un suivi transparent de l\'avancement du projet.',
      'features.screenshots': 'Captures d\'Écran de l\'Application',
      
      // Contact
      'contact.title': 'Contactez-Nous',
      'contact.description': 'Intéressé par en savoir plus sur ProdNet ? Contactez notre équipe.',
      'contact.name': 'Nom',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Envoyer le Message',
      'contact.success': 'Merci ! Votre message a été envoyé.',
      
      // Footer
      'footer.rights': '© 2025 Équipe ProdNet. Tous droits réservés.',
      'footer.tagline': 'Connecter les producteurs aux investisseurs.',
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
