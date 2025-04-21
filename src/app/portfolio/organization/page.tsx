'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// 프로젝트 데이터
const projects = [
  {
    id: 'raonhj',
    title: '라온하제',
    description: '청소년 자원봉사 활동 지원 단체 웹사이트',
    image: '/images/raonhj-thumbnail.jpg',
    tags: ['NextJS', 'Tailwind CSS', 'Responsive Design', 'Community'],
    url: 'http://raonhj.com/'
  },
  {
    id: 'gonggam',
    title: '공감 광주문화진흥센터',
    description: '지역 문화 예술 활동 지원 및 진흥을 위한 센터 웹사이트',
    image: '/images/gonggam-thumbnail.jpg',
    tags: ['NextJS', 'Tailwind CSS', 'Responsive Design', 'Cultural', 'Community'],
    url: 'http://gonggamculture.org/'
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center mb-6 text-white hover:text-blue-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            메인으로 돌아가기
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">단체 웹사이트 포트폴리오</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            다양한 단체 및 기관을 위한 웹사이트 디자인 포트폴리오입니다.
            비영리 단체, 교육 기관, 커뮤니티 등을 위한 웹사이트를 확인해보세요.
          </p>
        </div>
      </header>

      {/* 포트폴리오 그리드 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                    <div className="relative h-60">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        외부 링크
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center text-blue-600 font-medium">
                          방문하기
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">사용된 기술 스택</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {['WordPress', 'PHP', 'MySQL', 'JavaScript', 'Responsive Design', 'CSS3'].map((tech) => (
              <div 
                key={tech}
                className="bg-white px-6 py-3 rounded-full shadow-md text-gray-700 font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
