'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 포트폴리오 메인으로 돌아가기 버튼 */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-gray-600 font-medium">트릭콘텐츠 포트폴리오</span>
        </Link>
      </div>

      {/* 헤더 */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">코딩스쿨</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li className="hover:underline cursor-pointer">소개</li>
                <li className="hover:underline cursor-pointer">커리큘럼</li>
                <li className="hover:underline cursor-pointer">강사진</li>
                <li className="hover:underline cursor-pointer">수강후기</li>
                <li className="hover:underline cursor-pointer">문의</li>
              </ul>
            </nav>
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 메인 배너 */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="코딩 학원 이미지" 
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <motion.div 
            className="text-white max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">미래를 코딩하는<br />창의적 인재 양성</h2>
            <p className="text-xl mb-10">
              코딩스쿨은 실무 중심의 커리큘럼과 경험 많은 강사진으로
              여러분의 프로그래밍 역량을 키워드립니다.
              초보자부터 전문가까지, 모두를 위한 맞춤형 교육을 제공합니다.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-purple-700 transition-colors">
                수강신청
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-purple-700 transition-colors">
                무료 체험 신청
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 주요 과정 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">주요 교육 과정</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">다양한 분야의 코딩 교육을 통해 여러분의 꿈을 실현하세요.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="웹 개발 과정" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-purple-50">
                <h3 className="text-xl font-bold mb-2 text-purple-800">웹 개발 과정</h3>
                <p className="text-gray-600">HTML, CSS, JavaScript부터 React, Node.js까지 웹 개발의 모든 것을 배웁니다.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-purple-600 font-medium">16주 과정</span>
                  <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">인기 과정</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="앱 개발 과정" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-purple-50">
                <h3 className="text-xl font-bold mb-2 text-purple-800">앱 개발 과정</h3>
                <p className="text-gray-600">Flutter와 React Native를 활용한 크로스 플랫폼 모바일 앱 개발을 배웁니다.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-purple-600 font-medium">12주 과정</span>
                  <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">신규 개설</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="데이터 사이언스 과정" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-purple-50">
                <h3 className="text-xl font-bold mb-2 text-purple-800">데이터 사이언스 과정</h3>
                <p className="text-gray-600">Python, R, 머신러닝, 딥러닝을 활용한 데이터 분석과 AI 개발을 배웁니다.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-purple-600 font-medium">20주 과정</span>
                  <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">취업 연계</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 학원 특징 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">코딩스쿨의 특별함</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="코딩 교육 현장" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">실무 중심 커리큘럼</h3>
                    <p className="text-gray-600">현업에서 사용하는 최신 기술과 실무 사례를 바탕으로 한 커리큘럼으로 취업 경쟁력을 높입니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">소수정예 밀착 교육</h3>
                    <p className="text-gray-600">한 클래스당 최대 15명의 소수정예 인원으로 강사의 밀착 지도를 받을 수 있습니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">현업 개발자 강사진</h3>
                    <p className="text-gray-600">5년 이상의 실무 경험을 가진 현업 개발자들이 직접 강의하여 실질적인 지식을 전달합니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">취업 연계 프로그램</h3>
                    <p className="text-gray-600">수료 후 포트폴리오 제작, 이력서 컨설팅, 모의 면접 등 취업 지원 프로그램을 제공합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">코딩스쿨</h2>
              <p className="text-gray-400">미래를 코딩하는 창의적 인재 양성을 위한 코딩 전문 교육기관입니다.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p className="text-gray-400 mb-2">서울특별시 강남구 테헤란로 123</p>
              <p className="text-gray-400 mb-2">이메일: info@codingschool.kr</p>
              <p className="text-gray-400">전화: 02-123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 코딩스쿨. All rights reserved.</p>
            <p className="mt-2 text-sm">이 페이지는 홈페이지 제작 시안입니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
