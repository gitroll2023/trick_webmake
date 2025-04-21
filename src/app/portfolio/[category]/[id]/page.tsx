'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 임시 포트폴리오 상세 데이터 생성 함수
const getPortfolioDetail = (category: string, id: string) => {
  return {
    id,
    title: `${category} 포트폴리오 ${id.split('-')[1]}`,
    description: `${category} 카테고리의 포트폴리오 상세 내용입니다. 이 부분은 실제 데이터베이스에서 가져온 내용으로 대체될 예정입니다.`,
    content: `
      <p>이 프로젝트는 클라이언트의 요구사항에 맞춰 개발된 맞춤형 솔루션입니다.</p>
      <p>주요 기능:</p>
      <ul>
        <li>반응형 디자인</li>
        <li>사용자 친화적 UI/UX</li>
        <li>최적화된 성능</li>
        <li>SEO 최적화</li>
      </ul>
      <p>사용 기술: Next.js, React, Tailwind CSS, TypeScript</p>
    `,
    imageUrl: `/images/placeholder-detail.jpg`,
    date: new Date(2025, 0, 1).toISOString(),
    client: '트릭콘텐츠',
    duration: '2개월',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  };
};

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { category, id } = params as { category: string; id: string };
  const [portfolio, setPortfolio] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제로는 API에서 데이터를 가져올 것입니다
    // 여기서는 임시 데이터를 생성합니다
    const data = getPortfolioDetail(category, id);
    setPortfolio(data);
    setLoading(false);
  }, [category, id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">포트폴리오를 찾을 수 없습니다</h1>
        <Link href={`/portfolio/${category}`} className="text-primary hover:underline">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href={`/portfolio/${category}`} className="text-primary hover:underline mb-4 inline-block">
          ← 목록으로 돌아가기
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="bg-gray-200 dark:bg-gray-700 aspect-video flex items-center justify-center">
          <span className="text-lg font-medium">포트폴리오 이미지</span>
        </div>

        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{portfolio.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm">
              {new Date(portfolio.date).toLocaleDateString()}
            </div>
            {portfolio.technologies.map((tech: string) => (
              <div key={tech} className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full text-sm">
                {tech}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{portfolio.description}</p>
              
              <div className="prose dark:prose-invert max-w-none" 
                   dangerouslySetInnerHTML={{ __html: portfolio.content }}>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">프로젝트 정보</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-500 dark:text-gray-400">클라이언트</h4>
                  <p>{portfolio.client}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-500 dark:text-gray-400">개발 기간</h4>
                  <p>{portfolio.duration}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-500 dark:text-gray-400">카테고리</h4>
                  <p className="capitalize">{category.replace('-', ' ')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => window.open('#', '_blank')}
            >
              사이트 방문하기
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">다른 포트폴리오</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="portfolio-card">
              <div className="bg-gray-200 dark:bg-gray-700 aspect-video flex items-center justify-center">
                <span className="text-lg font-medium">이미지 {num}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{`${category} 포트폴리오 ${num}`}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">다른 포트폴리오 샘플입니다.</p>
                <button 
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
                  onClick={() => router.push(`/portfolio/${category}/${category}-${num}`)}
                >
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
