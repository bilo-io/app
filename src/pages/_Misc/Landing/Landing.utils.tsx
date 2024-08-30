/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable sort-keys */

import imgCreative from 'assets/img/landing/landing-creative.svg';
import imgProductive from 'assets/img/landing/landing-productive.svg';
import imgProfessional from 'assets/img/landing/landing-professional.svg';
import imgCharactersDark from 'assets/img/landing/Vision-Characters-Dark.png';
import imgCharactersLight from 'assets/img/landing/Vision-Characters-Light.png';
import imgDashboardDark from 'assets/img/landing/Vision-Dashboard-Dark.png';
import imgDashboardLight from 'assets/img/landing/Vision-Dashboard-Light.png';
import imgProjectsDark from 'assets/img/landing/Vision-Projects-Dark.png';
import imgProjectsLight from 'assets/img/landing/Vision-Projects-Light.png';
import { CompanyIcon, FlagIcon, Icon } from 'components/Core';
import ThemePalette from 'components/Core/ThemeButton/ThemePalette';
import { ITranslation, SupportedLanguages } from 'data/translations';
import { ThemeName, useAppTheme } from 'hooks';
import { messages } from 'pages/Auth/Auth.utils';
import React from 'react';
import { ITheme } from 'styles/themes';

export interface ISection {
  titles: string[],
  id: number,
  description: string,
  img?: string,
  images?: string[],
  icon?: any,
  type?: string,
  items?: any[],
  cta?: {
    name?: string;
    type: 'primary' | 'secondary',
    onClick?: () => void
  }
}


// export const heroImage = 'https://i.imgur.com/Yfg0ZEz.jpeg';
export const heroImage = 'https://visionstudio.ai/assets/img/VisionHeroImage.png';

export const sections = (
  themeName: ThemeName,
  theme: ITheme,
  navigate: Function,
  language: SupportedLanguages,
  images?: string[],
  t?: ITranslation,
): ISection[] => [
  {
    cta: {
      name: t?.common.getStarted,
      onClick: () => navigate('/v2/dashboard'),
      type: 'primary'
    },

    description: `
      Use AI to supercharge your conceptualisation of Games, Movies and other creative media!
    `,

    id: 0,

    images: [
      heroImage
    ],
    // title: 'Value Proposition & Main Offer',
    titles: messages,
    type: 'header'
  },
  {
    description: `
      Show proof that you can deliver what you say you can. Overall ratings, company logos you've worked with or impressive stats.
    `,
    id: 1,
    items: [
      {
        text: (
          <div className="flex flex-col items-center justify-center">
            <div>{'Operating in 7+ languages across the globe'}</div>
            <div className="-ml-48 mt-8">
              <LanguageFlags />
            </div>
          </div>
        )
      },
      {
        text: (
          <div className="flex flex-col items-center justify-center">
            <div>
              {'Powered by various A.I. models to supercharge your workflow'}
            </div>
            <Icon name="ai" size={42} imageClass='mt-4' color={theme?.PRIMARY} />
          </div>
        )
      },
      {
        text: (
          <div className="flex flex-col items-center justify-center">
            <div>
              {'Choose from a variety of themes, dark, light, neon, vibrant, classic and more.'}
            </div>
            <div className="flex flex-row mt-4">
              {[
                'dark',
                'neonTheme1',
                'neonTheme12',
                'neonTheme2',
                'vibrantTheme1',
                'light'
                // @ts-ignore
              ].map((themeName: ThemeName, i: number) => (
                <ThemePalette
                  key={`${themeName}-${i}`}
                  themeName={themeName as ThemeName}
                  size={32}
                />
              ))}
            </div>
          </div>
        )
      },
      {
        text: (
          <div>
            <div>{'Secured with trusted SSO providers'}</div>
            <div className="ml-16 mt-8">
              <SSOLogos />
            </div>
          </div>
        )

      }
    ],
    titles: [
      'Social Proof'
    ],
    type: 'marquee',
  },
  {
    description: `
      Showcase how you can make a visitors life better (Their end result). Avoid talking about features. Talk about what these features can do for them (Benefits).
    `,
    id: 2,
    items: [
      {
        image: imgCreative,
        name: 'Unleash Your Creativity',
        text: 'Vision Studio empowers you to bring your ideas to life with ease and precision, helping you transform your creative vision into reality.'
        // icon: light bulb and paint brush
      },
      {
        image: imgProductive,
        name: 'Boost Productivity',
        text: 'Our AI-driven tools streamline your workflow, saving you time and effort, so you can focus on what truly matters: creating amazing content.'
        // icon: check boxes & trending chart
      },
      {
        image: imgProfessional,
        name: 'Professional Results',
        text: 'Vision Studio helps you produce high-quality projects, ensuring your work achieves the professional excellence it deserves.'
        // icon: suit & stars ???
      }
    ],
    titles: [
      'Revolutionize your creative process'
    ],
    type: 'benefits'
  },
  {
    description: `
      Show off your product or service. Talk about features, your company differences, show pictures or videos (Bragging Section).
    `,
    id: 3,
    items: [
      {
        image: themeName === 'dark' ? imgProjectsDark : imgProjectsLight,
        name: 'Projects & Workspaces',
        text: 'Scope all your ideas by Project, and create Workspaces for collaboration with other creators.'
      },
      {
        image: themeName === 'dark' ? imgCharactersDark : imgCharactersLight,
        name: 'AI World Building',
        text: 'Use integrated AI to create scripts, characters, locations, and more that describes your creative vision.'
      },
      {
        image: themeName === 'dark' ? imgDashboardDark : imgDashboardLight,
        name: 'Export your Creations',
        text: 'You can export your projects in read-only formats, to share with other stakeholders, or promote your ideas.'
      }
    ],
    titles: [
      'Features'
    ],
    type: 'features'
  },
  {
    cta: {
      name: 'Get started',
      onClick: () => navigate('/v2/dashboard'),
      type: 'primary'
    },
    description: 'Sign up and never look back',
    id: 4,
    titles: [
      'Join Vision Studio',
      'Click to fly',
      ''
    ],
    type: 'cta-reminder'
  },
  {
    description: `
      Build additional trust to a visitor. Common forms of testimonials are: card layouts with a 5-star icon, tagged instagram posts with a caption, or complete case study/customer journey.
    `,
    id: 4,
    items: [
      {
        country: 'US',
        image: 'https://cgfaces.com/collection/preview/5c8bd387-10ee-4f07-a3f6-437ec9c421df.jpg',
        name: 'Kamila Quinn',
        role: 'Film Director',
        text: 'The versatility of Vision Studio’s AI has been invaluable for my film projects. It assists in everything from scriptwriting to visual effects planning, ensuring a cohesive and creative output.'
      },
      {
        country: 'GR',
        image: 'https://preview.redd.it/handsome-and-ugly-old-adult-young-men-as-ai-mj-imagined-them-v0-2axoo8tojkva1.png?width=1024&format=png&auto=webp&s=1b56e79442539ca00bb6ebb75689078c06a0c7dc',
        name: 'Aarden Zola',
        role: 'Prodigy Game Designer',
        text: 'Vision Studio has revolutionized my creative process. The AI tools are intuitive and have helped me bring my game design ideas to life effortlessly.'
      },
      {
        country: 'NL',
        image: 'https://img.freepik.com/premium-photo/gamer-girl-blonde-neon_278265-228.jpg',
        name: 'Dalia Von Chella',
        role: 'Senior Digital Artist',
        text: 'As a digital artist, Vision Studio has been a game-changer. The AI suggestions are incredibly helpful, and the platform is user-friendly. It’s like having a creative partner by my side.'
      },
      {
        country: 'IT',
        image: 'https://preview.redd.it/handsome-and-ugly-old-adult-young-men-as-ai-mj-imagined-them-v0-hjq2g46pjkva1.png?width=1024&format=png&auto=webp&s=fb4cff4a7612b98aa26ddd11dd0d5d6a559d40fe',
        name: 'Matteo Allesandro',
        role: 'Game Developer',
        text: 'I’ve been able to develop complex game mechanics and storylines with ease thanks to Vision Studio. The AI-driven insights are spot-on and save me a ton of time.'

      },
      {
        country: 'CH',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76f9f115-20d9-4aae-afd8-e8d575fa6119/dg7ryut-03b65de0-b53c-48fe-a827-b88c34c2a847.jpg/v1/fill/w_894,h_894,q_70,strp/gamer_girl__by_girlsofmidjourney_dg7ryut-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzc2ZjlmMTE1LTIwZDktNGFhZS1hZmQ4LWU4ZDU3NWZhNjExOVwvZGc3cnl1dC0wM2I2NWRlMC1iNTNjLTQ4ZmUtYTgyNy1iODhjMzRjMmE4NDcuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0pR-Sm-XjzrVoD8NtFmQOyEoElvfZie8FIyTEKXgpoY',
        name: 'Cecilia Bourgeaux',
        role: 'Senior Game Developer',
        text: 'Vision Studio’s AI capabilities have exceeded my expectations. It has streamlined our development process and sparked new ideas that we hadn’t considered before.',
      },
      {
        country: 'GB',
        image: 'https://cdn.pixabay.com/photo/2023/07/14/05/38/ai-generated-8126314_1280.jpg',
        name: 'Felix Marlowe',
        role: 'Creative Director',
        text: 'Using Vision Studio has significantly enhanced my workflow. The AI assists in generating innovative concepts and fine-tuning designs, making my job much easier.',
      },
      {
        country: 'DE',
        image: 'https://pleated-jeans.com/wp-content/uploads/2023/07/midjourney-ai-average-women-without-makeup-from-different-countries-2.jpg',
        name: 'Anikka Müller',
        role: 'Novelist',
        text: 'Vision Studio offers an unparalleled experience for novelists. The AI helps in crafting compelling narratives and provides valuable feedback on story arcs and character development.',
      }
    ],
    titles: [
      'Testimonials'
    ],
    type: 'testimonial'
  },
  {
    description: `
      Create Qs&As to common objections a visitor may have. For example, questions about time, money or trust. Phrase a question about it and write your best rebuttal.
    `,
    id: 5,
    items: [
      {
        answer: 'Vision Studio is an AI-powered platform designed to help you create, develop, and visualize your ideas for video games, movies, novels, and other creative media. Our AI tools assist you in generating concepts, characters, plots, and more.',
        question: 'What is Vision Studio?'
      },
      {
        answer: 'Vision Studio provides a suite of AI tools that can help brainstorm ideas, create character profiles, develop plotlines, design environments, and more. It is designed to enhance your creativity and streamline the creative process.',
        question: 'How can this help with my creative projects?'
      },
      {
        answer: 'Absolutely! Vision Studio is designed to be user-friendly and intuitive. Whether you are a beginner or a seasoned creator, our AI tools and resources are here to assist you at every step of your creative journey.',
        question: 'Is Vision Studio suitable for beginners?'
      },
      {
        answer: 'Yes, Vision Studio supports collaborative projects. You can invite team members to work together on your projects, share ideas, and provide feedback in real-time.',
        question: 'Can I collaborate with others?'
      },
      {
        answer: 'Vision Studio is versatile and supports the creation of various types of media including video games, movies, novels, comics, and other forms of creative media. Our tools are adaptable to different creative needs.',
        question: 'What types of media can I create?'
      },
      {
        answer: 'Our AI analyzes your input and generates creative suggestions based on vast datasets of existing media. It helps you brainstorm ideas, generate content, and refine your concepts, making the creative process faster and more efficient.',
        question: 'How does the AI in Vision Studio work?'
      },
      {
        answer: 'Yes, we offer a free trial period for new users to explore Vision Studio and experience its features. You can sign up on our website to start your free trial today.',
        question: 'Is there a free trial available?'
      },
      {
        answer: 'Vision Studio provides comprehensive support including tutorials, documentation, and a dedicated customer service team. We are here to help you make the most out of our platform.',
        question: 'What kind of support is offered?'
      },
      {
        answer: 'Yes, Vision Studio allows you to export your projects in various formats depending on your needs. You can easily share your work or continue developing it in other software.',
        question: 'Can I export my projects?'
      },
      {
        answer: 'We take data security very seriously. Vision Studio uses advanced encryption and security protocols to ensure that your projects and personal information are safe and secure.',
        question: 'How secure is my data?'
      }
    ],
    titles: [
      'Objection Handling (FAQs)',
    ],
    type: 'faq'
  },
  // {
  //   id: 6,
  //   titles: [
  //     'Additional Call to Action',
  //   ],
  //   description: `
  //   Final chance to convert a visitor, so make a clear and simple call-to-action. Either copy paste from the header, or create a contact form for additional details.
  // `
  // },
  // TODO: Footer
  // Include only links relevant to your service or product.
  // Include a contact number, email, or company address.
];

export default sections;

export const LanguageFlags = (): React.ReactElement => {
  const languageCodes = ['fr', 'us', 'de', 'jp', 'za', 'nl', 'es', 'it',];
  const maxFlagSize = 50;
  const minFlagSize = 25;

  // Calculate sizes and zIndex
  const calculateSize = (index: number): number => {
    const midIndex = (languageCodes.length - 1) / 2;
    const distanceFromCenter = Math.abs(index - midIndex);
    return maxFlagSize - distanceFromCenter * (maxFlagSize - minFlagSize) / midIndex;
  };

  return (
    <div className="flex flex-row items-center justify-center relative">
      {languageCodes.map((code, i) => {
        const size = calculateSize(i);
        const zIndex = languageCodes.length - Math.abs(i - Math.floor(languageCodes.length / 2));

        return (
          <div
            key={code + i}
            className="absolute"
            style={{
              left: `${i * (maxFlagSize / 2)}px`,
              transform: `translateX(-${(size - minFlagSize) / 2}px)`,
              zIndex: zIndex
            }}
          >
            <FlagIcon alpha2={code} size={size} />
          </div>
        );
      })}
    </div>
  );
};

export const SSOLogos = (): React.ReactElement => {
  const { theme } = useAppTheme();

  const ssoProviders = ['apple', 'google', 'facebook', 'github'];
  const maxFlagSize = 60;
  const minFlagSize = 30;

  // Calculate sizes and zIndex
  const calculateSize = (index: number): number => {
    const midIndex = (ssoProviders.length - 1) / 2;
    const distanceFromCenter = Math.abs(index - midIndex);
    return maxFlagSize - distanceFromCenter * (maxFlagSize - minFlagSize) / midIndex;
  };

  return (
    <div className="flex flex-row items-center justify-center relative">
      {ssoProviders.map((code, i) => {
        const size = calculateSize(i);
        const zIndex = ssoProviders.length - Math.abs(i - Math.floor(ssoProviders.length / 2));

        return (
          <div
            key={code + i}
            className="absolute"
            style={{
              backgroundColor: theme?.TEXT,
              borderRadius: '100%',
              left: `${i * (maxFlagSize / 2)}px`,
              padding: '0.2rem',
              transform: `translateX(-${(size - minFlagSize) / 2}px)`,
              zIndex: zIndex,
            }}
          >
            <CompanyIcon code={code} imgStyle={{
              marginLeft: '0.25rem',
              marginRight: '0.25rem',
              width: `${size / 2}px`
            }} />
          </div>
        );
      })}
    </div>
  );
};
