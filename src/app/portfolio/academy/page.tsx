'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// 프로젝트 데이터
const projects = [
  {
    id: 'coding-school',
    title: '코딩스쿨',
    description: '실무 중심의 커리큘럼과 경험 많은 강사진으로 프로그래밍 역량을 키우는 코딩 전문 교육기관',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">학원 웹사이트 포트폴리오</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            다양한 교육 기관을 위한 웹사이트 디자인 포트폴리오입니다.
            학생들에게 정보를 제공하고 수강 신청을 유도하는 최적의 웹사이트를 확인해보세요.
          </p>
        </div>
      </header>

      {/* 포트폴리오 그리드 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/portfolio/academy/${project.id}`} className="block h-full">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                    <div className="relative h-48">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
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
                          살펴보기
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
            {['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'].map((tech) => (
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
