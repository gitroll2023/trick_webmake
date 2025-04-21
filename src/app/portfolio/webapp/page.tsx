'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// 웹앱 포트폴리오 항목 정의
const webapps = [
  {
    id: 'todo-app',
    title: '투두 리스트 앱',
    description: '할 일을 관리하는 간편한 웹 애플리케이션',
    image: '/images/webapp/todo-app.jpg',
    gradient: 'from-blue-500 to-indigo-600',
    path: '/portfolio/webapp/todo-app'
  },
  {
    id: 'weather-app',
    title: '날씨 정보 앱',
    description: '지역별 날씨 정보를 확인할 수 있는 웹 애플리케이션',
    image: '/images/webapp/weather-app.jpg',
    gradient: 'from-blue-400 to-sky-500',
    path: '/portfolio/webapp/weather-app'
  },
  {
    id: 'memo-app',
    title: '포켓 메모 앱',
    description: '간편하게 메모를 작성하고 관리하는 웹 애플리케이션',
    image: '/images/webapp/memo-app.jpg',
    gradient: 'from-amber-400 to-yellow-500',
    path: '/portfolio/webapp/memo-app'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">웹앱 포트폴리오</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            실용적이고 인터랙티브한 웹 애플리케이션 포트폴리오입니다.
            각 앱은 실제 기능을 갖추고 있으며 사용자 경험을 중심으로 디자인되었습니다.
          </p>
        </div>
      </header>

      {/* 포트폴리오 그리드 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webapps.map((webapp, index) => (
              <motion.div
                key={webapp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={webapp.path} className="block h-full">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                    <div className={`h-48 bg-gradient-to-r ${webapp.gradient} relative flex items-center justify-center`}>
                      <div className="text-white text-6xl">{
                        webapp.id === 'todo-app' ? '📝' :
                        webapp.id === 'weather-app' ? '🌤️' :
                        '📒'
                      }</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{webapp.title}</h3>
                      <p className="text-gray-600 mb-4">{webapp.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">React + Next.js</span>
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
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="font-medium">React</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="font-medium">Next.js</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-medium">Tailwind CSS</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="font-medium">Framer Motion</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">💾</div>
              <h3 className="font-medium">Local Storage</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 트릭콘텐츠 포트폴리오. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">이 페이지는 홈페이지 제작 시안입니다.</p>
        </div>
      </footer>
    </div>
  );
}
