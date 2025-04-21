'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen">
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
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-indigo-600">AppLaunch</div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">기능</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">가격</a>
              <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">후기</a>
              <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a>
            </nav>
            <div className="hidden md:block">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                무료로 시작하기
              </button>
            </div>
            <button className="md:hidden text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                비즈니스를 성장시키는<br />최고의 앱 솔루션
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                AppLaunch는 당신의 비즈니스를 위한 최적의 모바일 앱 솔루션입니다.
                쉽고 빠르게 앱을 제작하고 고객과 소통하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors">
                  무료로 시작하기
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
                  데모 보기
                </button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[500px] md:h-[600px]">
                <Image 
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="앱 스크린샷" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">앱의 주요 기능</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AppLaunch는 비즈니스 성장에 필요한 모든 기능을 제공합니다.
              쉽고 직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">맞춤형 대시보드</h3>
              <p className="text-gray-600">
                사용자의 필요에 맞게 커스터마이징 가능한 대시보드로 중요한 정보를 한눈에 확인하세요.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">실시간 분석</h3>
              <p className="text-gray-600">
                실시간 데이터 분석으로 비즈니스 성과를 즉시 확인하고 빠른 의사결정을 내릴 수 있습니다.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">모바일 최적화</h3>
              <p className="text-gray-600">
                모든 모바일 기기에 최적화된 반응형 디자인으로 언제 어디서나 비즈니스를 관리할 수 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
              <p className="text-gray-600">활성 사용자</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <p className="text-gray-600">국가</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
              <p className="text-gray-600">가동 시간</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <p className="text-gray-600">고객 지원</p>
            </div>
          </div>
        </div>
      </section>

      {/* 가격 플랜 */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">합리적인 가격 플랜</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              비즈니스 규모와 필요에 맞는 다양한 가격 플랜을 제공합니다.
              언제든지 업그레이드하거나 다운그레이드할 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">기본</h3>
              <div className="text-4xl font-bold mb-6">무료</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>기본 대시보드</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>최대 100명의 사용자</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>이메일 지원</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                무료로 시작하기
              </button>
            </div>
            <div className="border border-indigo-600 rounded-lg p-8 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                인기
              </div>
              <h3 className="text-xl font-bold mb-4">프로</h3>
              <div className="text-4xl font-bold mb-1">₩49,000</div>
              <div className="text-gray-600 mb-6">월간</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>고급 대시보드</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>최대 1,000명의 사용자</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>우선 이메일 및 채팅 지원</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>고급 분석 기능</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors">
                지금 시작하기
              </button>
            </div>
            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">엔터프라이즈</h3>
              <div className="text-4xl font-bold mb-1">문의</div>
              <div className="text-gray-600 mb-6">맞춤형 가격</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>맞춤형 대시보드</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>무제한 사용자</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 전담 지원</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>맞춤형 기능 개발</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                영업팀 문의하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            AppLaunch와 함께 비즈니스를 성장시키세요.
            14일 무료 체험 기간 동안 모든 기능을 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors">
              무료로 시작하기
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
              데모 예약하기
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AppLaunch</h3>
              <p className="text-gray-400">
                비즈니스를 위한 최고의 앱 솔루션.
                쉽고 빠르게 앱을 제작하고 고객과 소통하세요.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">제품</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">기능</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">가격</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">통합</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">로드맵</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">회사</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">소개</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">블로그</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">채용</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">연락처</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">지원</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">도움말 센터</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">문서</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">상태</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 AppLaunch. All rights reserved.</p>
            <p className="mt-2 text-sm">이 페이지는 홈페이지 제작 시안입니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
