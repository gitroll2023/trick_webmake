'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 카테고리 정보 타입 정의
type CategoryInfo = {
  name: string;
  description: string;
};

type CategoryInfoMap = {
  [key: string]: CategoryInfo;
};

// 포트폴리오 아이템 타입 정의
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  color: string;
  textColor: string;
  borderColor: string;
  hoverColor: string;
  thumbnail?: {
    bgColor: string;
    textColor: string;
    title: string;
    subtitle: string;
  };
}

// 카테고리 정보
const categoryInfo: CategoryInfoMap = {
  'web-app': { name: '웹앱', description: '다양한 웹 애플리케이션 포트폴리오' },
  'corporate': { name: '기업', description: '기업 웹사이트 포트폴리오' },
  'academy': { name: '학원', description: '학원 웹사이트 포트폴리오' },
  'organization': { name: '단체', description: '단체 웹사이트 포트폴리오' },
  'ecommerce': { name: '이커머스', description: '이커머스 웹사이트 포트폴리오' },
  'admin': { name: '관리자', description: '관리자 페이지 포트폴리오' },
  'landing': { name: '랜딩', description: '랜딩 페이지 포트폴리오' },
  'onepage': { name: '원페이지', description: '원페이지 웹사이트 포트폴리오' },
};

// 포트폴리오 데이터 생성 함수
const generatePortfolios = (category: string): PortfolioItem[] => {
  // 각 카테고리별 포트폴리오 아이템 생성
  if (category === 'organization') {
    return [
      {
        id: 'organization-1',
        title: '전남 나주시 청년 비영리 단체',
        description: '나주시 청년들의 활동과 소통을 위한 반응형 웹사이트',
        image: '/thumbnails/naju-youth.jpg', // 실제 이미지는 없지만 경로 지정
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        link: '/portfolio/organization/naju-youth',
        color: 'bg-green-500',
        textColor: 'text-green-500',
        borderColor: 'border-green-500',
        hoverColor: 'hover:bg-green-500',
        thumbnail: {
          bgColor: 'bg-green-600',
          textColor: 'text-white',
          title: '함께 만들어가는 나주의 미래',
          subtitle: '나주시 청년 비영리 단체'
        }
      }
    ];
  } else if (category === 'corporate') {
    return [
      {
        id: 'corporate-1',
        title: '광주광역시 공감문화진흥센터',
        description: '광주 지역 문화예술 활성화를 위한 공공기관 웹사이트',
        image: '/thumbnails/gwangju-culture.jpg',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        link: '/portfolio/corporate/gwangju-culture',
        color: 'bg-purple-700',
        textColor: 'text-purple-700',
        borderColor: 'border-purple-700',
        hoverColor: 'hover:bg-purple-700',
        thumbnail: {
          bgColor: 'bg-purple-600',
          textColor: 'text-white',
          title: '문화로 소통하는 광주',
          subtitle: '광주광역시 공감문화진흥센터'
        }
      },
      {
        id: 'corporate-2',
        title: '화순 드론방제',
        description: '농업용 드론 방제 서비스 제공 기업 웹사이트',
        image: '/thumbnails/hwasun-drone.jpg',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        link: '/portfolio/corporate/hwasun-drone',
        color: 'bg-blue-800',
        textColor: 'text-blue-800',
        borderColor: 'border-blue-800',
        hoverColor: 'hover:bg-blue-800',
        thumbnail: {
          bgColor: 'bg-blue-700',
          textColor: 'text-white',
          title: '최첨단 드론 기술로 농업의 미래를 선도합니다',
          subtitle: '화순 드론방제'
        }
      }
    ];
  }

  // 다른 카테고리에 대한 기본 처리
  return Array.from({ length: 6 }, (_, i) => {
    const id = `${category}-${i + 1}`;
    return {
      id,
      title: `${categoryInfo[category]?.name || category} 포트폴리오 ${i + 1}`,
      description: `${categoryInfo[category]?.name || category} 관련 프로젝트 설명이 들어갑니다.`,
      image: `/thumbnails/${id}.jpg`,
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      link: `/portfolio/${category}/${id}`,
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      borderColor: 'border-blue-500',
      hoverColor: 'hover:bg-blue-500'
    };
  });
};

export default function PortfolioPage() {
  const params = useParams();
  const category = params.category as string;
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const data = generatePortfolios(category);
    setPortfolios(data);
  }, [category]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  if (!mounted) return null;

  const categoryData = categoryInfo[category as keyof typeof categoryInfo];

  if (!categoryData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">카테고리를 찾을 수 없습니다</h1>
        <Link href="/" className="text-primary hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/" className="text-primary hover:underline mb-4 inline-block">
          ← 홈으로 돌아가기
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">{categoryData.name} 포트폴리오</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">{categoryData.description}</p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {portfolios.map((portfolio) => (
          <Link href={portfolio.link} key={portfolio.id}>
            <motion.div 
              className="portfolio-card group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* 섬네일 영역 */}
              <div className={`h-48 ${portfolio.thumbnail ? portfolio.thumbnail.bgColor : 'bg-gray-200'} flex items-center justify-center relative overflow-hidden`}>
                {portfolio.thumbnail ? (
                  <div className="text-center p-6">
                    <h3 className={`text-xl font-bold ${portfolio.thumbnail.textColor}`}>{portfolio.thumbnail.title}</h3>
                    <p className={`mt-2 ${portfolio.thumbnail.textColor}`}>{portfolio.thumbnail.subtitle}</p>
                  </div>
                ) : (
                  <div className="text-gray-500">썸네일 이미지</div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary">{portfolio.title}</h3>
                <p className="text-gray-600 mb-4">{portfolio.description}</p>
                <div className="flex flex-wrap gap-2">
                  {portfolio.technologies.map((tech: string, index: number) => (
                    <span 
                      key={index} 
                      className={`text-xs px-3 py-1 rounded-full ${portfolio.borderColor} border ${portfolio.textColor} ${portfolio.hoverColor} hover:text-white transition-colors`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
