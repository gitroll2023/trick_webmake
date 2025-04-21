'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CategoryGrid from '@/components/CategoryGrid';
import PreviewContent from './preview-content';

// 장르 카테고리 정의
const categories = [
  { id: 'web-app', name: '웹앱', slug: 'webapp' },
  { id: 'corporate', name: '기업', slug: 'corporate' },
  { id: 'academy', name: '학원', slug: 'academy' },
  { id: 'organization', name: '단체', slug: 'organization' },
  { id: 'ecommerce', name: '이커머스', slug: 'ecommerce' },
  { id: 'admin', name: '관리자', slug: 'admin' },
  { id: 'landing', name: '랜딩', slug: 'landing' },
  { id: 'onepage', name: '원페이지', slug: 'onepage' },
];

// 전문 분야 정의
const expertise = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    title: '초고속 제작',
    description: '다른 에이전시는 3개월, 우리는 단 일주일 이내 완성! 놀라운 속도와 뛰어난 품질, 트릭콘텐츠만의 혁신적인 워크플로우로 불가능을 가능하게 만듭니다.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
    title: '혁신적인 기획력',
    description: '평범한 웹사이트는 이제 그만. 트릭콘텐츠의 창의적인 기획팀이 귀사의 비즈니스를 완벽히 이해하고 경쟁사와 차별화된 독창적인 웹 경험을 설계합니다.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    title: '성과 중심 접근',
    description: '단순한 디자인을 넘어 비즈니스 성과에 직접 기여하는 웹사이트를 제작합니다. 방문자를 고객으로 전환하는 최적화된 사용자 경험을 제공합니다.'
  },
];

// 통계 데이터
const stats = [
  { value: '10배', label: '더 빠른 제작 속도' },
  { value: '98%', label: '고객 만족도' },
  { value: '150+', label: '성공 프로젝트' },
  { value: '300%', label: '평균 전환율 증가' }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 섹션 애니메이션 설정
  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  // 아이템 애니메이션 설정
  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <motion.section 
        className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="w-full lg:w-1/2 mb-12 lg:mb-0"
              variants={itemVariants}
            >
              <motion.span 
                className="inline-block text-blue-600 font-semibold mb-4"
                variants={itemVariants}
              >
                초고속 웹사이트 제작 서비스
              </motion.span>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                단 <span className="text-blue-600">일주일</span>만에<br />
                완성되는 웹사이트
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
                variants={itemVariants}
              >
                트릭콘텐츠는 최신 기술과 독자적인 개발 방법론으로 
                고객님의 비즈니스에 딱 맞는 웹사이트를 초고속으로 제작해 드립니다.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                variants={itemVariants}
              >
                <a 
                  href="#contact-form" 
                  className="inline-block bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300 text-center text-base sm:text-lg"
                >
                  무료 상담 받기
                </a>
                <a 
                  href="#services" 
                  className="inline-block bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:bg-gray-50 transition-colors duration-300 text-center text-base sm:text-lg"
                >
                  서비스 알아보기
                </a>
              </motion.div>
              
              <motion.div 
                className="mt-12 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-blue-600 mr-2">100+</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-center sm:text-left">완료된 프로젝트</p>
                </div>
                
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-blue-600 mr-2">7일</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-center sm:text-left">평균 제작 기간</p>
                </div>
                
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-blue-600 mr-2">98%</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-center sm:text-left">고객 만족도</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2 relative"
              variants={itemVariants}
            >
              <div className="relative mx-auto max-w-md lg:max-w-full">
                <div className="bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="/images/portfolio-preview.jpg" 
                    alt="트릭콘텐츠 웹사이트 미리보기" 
                    className="w-full h-auto max-h-[400px] object-cover object-top rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=트릭콘텐츠";
                      target.style.filter = "grayscale(100%)";
                    }}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-600/20 to-transparent rounded-xl"></div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">평균 제작 기간</p>
                      <p className="font-bold text-gray-900">단 7일 소요</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden sm:block">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">무제한 수정</p>
                      <p className="font-bold text-gray-900">100% 만족 보장</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </motion.section>

      {/* 통계 섹션 */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-600">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 전문 분야 섹션 */}
      <motion.section 
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block text-blue-600 font-semibold mb-2"
            >
              OUR EXPERTISE
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              전문 분야
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              최고의 웹 경험을 위한 트릭콘텐츠의 핵심 역량
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="text-blue-600 mb-6 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 서비스 섹션 */}
      <motion.section 
        id="services"
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block text-blue-600 font-semibold mb-2"
            >
              OUR SERVICES
            </motion.span>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              트릭콘텐츠 서비스
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              단 일주일 만에 완성되는 고퀄리티 웹사이트
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">반응형 웹사이트</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                모든 디바이스에 최적화된 반응형 웹사이트로 모바일, 태블릿, 데스크탑 어디서든 완벽한 사용자 경험을 제공합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm md:text-base">모바일 퍼스트 디자인</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm md:text-base">크로스 브라우저 호환성</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm md:text-base">빠른 로딩 속도</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#contact-form" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center text-sm md:text-base">
                  자세히 알아보기
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">랜딩 페이지 제작</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                전환율을 극대화하는 랜딩 페이지로 방문자를 고객으로 전환시키는 마케팅 최적화 페이지를 제작합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm md:text-base">고전환율 디자인</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm md:text-base">A/B 테스트 지원</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm md:text-base">마케팅 최적화</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#contact-form" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center text-sm md:text-base">
                  자세히 알아보기
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">쇼핑몰 구축</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                판매부터 결제, 배송까지 원활한 쇼핑 경험을 제공하는 맞춤형 온라인 쇼핑몰을 구축합니다.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm md:text-base">안전한 결제 시스템</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm md:text-base">재고 관리 시스템</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm md:text-base">모바일 쇼핑 최적화</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a href="#contact-form" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center text-sm md:text-base">
                  자세히 알아보기
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#contact-form" 
              className="inline-block bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300 text-base sm:text-lg"
            >
              무료 상담 받기
            </a>
          </div>
        </div>
      </motion.section>

      {/* 카테고리 섹션 */}
      <motion.section 
        id="categories" 
        className="py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block text-blue-600 font-semibold mb-2"
            >
              OUR PORTFOLIO
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              포트폴리오 카테고리
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              다양한 장르의 웹 포트폴리오를 확인해보세요
            </motion.p>
          </motion.div>

          {mounted && <CategoryGrid categories={categories} />}
        </div>
      </motion.section>

      {/* CTA 섹션 */}
      <motion.section 
        className="py-24 bg-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" variants={itemVariants}>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              왜 모두가 트릭콘텐츠를 선택할까요?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-10 leading-relaxed"
            >
              빠른 제작 속도, 혁신적인 기획력, 그리고 검증된 성과.<br />
              트릭콘텐츠는 단순한 웹사이트가 아닌, 비즈니스 성장의 파트너입니다.
            </motion.p>
            <motion.div>
              <a 
                href="#contact-form" 
                className="inline-block bg-white text-blue-600 font-semibold px-10 py-5 rounded-xl shadow-lg hover:bg-blue-50 transition-colors duration-300 text-lg"
              >
                무료 상담 신청하기
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 비교 섹션 */}
      <motion.section 
        id="comparison"
        className="py-16 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block text-blue-600 font-semibold mb-2"
            >
              COMPARISON
            </motion.span>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              왜 트릭콘텐츠인가?
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              다른 에이전시와 트릭콘텐츠의 차이점을 확인하세요
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                일반 에이전시
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">최소 2-3개월 소요</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">수정 횟수 제한</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">유지보수 별도 비용</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">평균 30% 전환율</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-blue-100"
              variants={itemVariants}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                트릭콘텐츠
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 font-medium">단 일주일 이내 완성</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 font-medium">무제한 수정 가능</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 font-medium">6개월 무료 유지보수</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 font-medium">평균 300% 전환율 증가</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#contact-form" 
              className="inline-block bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300 text-base sm:text-lg"
            >
              무료 상담 신청하기
            </a>
          </div>
        </div>
      </motion.section>

      {/* 고객 후기 섹션 */}
      <motion.section 
        id="testimonials"
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block text-blue-600 font-semibold mb-2"
            >
              TESTIMONIALS
            </motion.span>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              고객 후기
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              트릭콘텐츠의 서비스를 경험한 실제 고객들의 이야기
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 relative"
              variants={itemVariants}
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                "
              </div>
              <div className="mb-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "다른 회사들은 최소 2개월이 걸린다고 했는데, 트릭콘텐츠는 정말 일주일 만에 완성해주셨어요. 게다가 퀄리티는 기대 이상이었습니다. 덕분에 빠르게 비즈니스를 시작할 수 있었습니다."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    김
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">김민수 대표</h4>
                  <p className="text-gray-500 text-sm">테크스타트업 A사</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 relative"
              variants={itemVariants}
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                "
              </div>
              <div className="mb-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "트릭콘텐츠와 함께한 후 온라인 매출이 300% 이상 증가했습니다. 웹사이트 제작뿐만 아니라 전략적인 기획과 마케팅 조언까지 해주셔서 정말 감사합니다. 무엇보다 빠른 속도에 놀랐습니다."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    이
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">이지현 마케팅 이사</h4>
                  <p className="text-gray-500 text-sm">온라인 쇼핑몰 B사</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 relative"
              variants={itemVariants}
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                "
              </div>
              <div className="mb-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "우리 기관은 공공기관이라 보통 웹사이트 제작에 몇 개월씩 걸렸는데, 트릭콘텐츠는 단 일주일 만에 완성해주셨습니다. 행정 절차도 간소화해주시고 결과물도 만족스러웠습니다."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    박
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">박정훈 팀장</h4>
                  <p className="text-gray-500 text-sm">공공기관 C</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#contact-form" 
              className="inline-block bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300 text-base sm:text-lg"
            >
              무료 상담 받기
            </a>
          </div>
        </div>
      </motion.section>

      {/* 작업 프로세스 섹션 */}
      <motion.section 
        id="process"
        className="py-16 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <motion.span className="inline-block text-blue-600 font-semibold mb-2">OUR PROCESS</motion.span>
            <motion.h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-900">작업 프로세스</motion.h2>
            <motion.p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              트릭콘텐츠는 체계적인 프로세스로 일주일 안에 고퀄리티 웹사이트를 제작합니다
            </motion.p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* 프로세스 연결선 (데스크탑에서만 표시) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 -ml-0.5 z-0"></div>
              
              {/* 프로세스 1 */}
              <motion.div 
                className="relative z-10 mb-12 md:mb-24"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">1. 요구사항 분석</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      고객의 비즈니스 목표와 요구사항을 정확히 파악합니다. 타겟 고객, 경쟁사 분석, 디자인 선호도 등 프로젝트의 성공을 위한 모든 정보를 수집합니다.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-6 md:mb-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                      1
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* 프로세스 2 */}
              <motion.div 
                className="relative z-10 mb-12 md:mb-24"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-center md:justify-end order-1 mb-6 md:mb-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">2. 기획 및 디자인</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      수집된 정보를 바탕으로 웹사이트 구조와 와이어프레임을 설계합니다. 고객의 브랜드 아이덴티티를 반영한 독창적인 디자인을 제안하고 피드백을 반영합니다.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* 프로세스 3 */}
              <motion.div 
                className="relative z-10 mb-12 md:mb-24"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">3. 개발 및 구현</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      최신 웹 기술을 활용하여 승인된 디자인을 실제 웹사이트로 구현합니다. 반응형 디자인, 빠른 로딩 속도, SEO 최적화 등 최고의 사용자 경험을 위한 개발을 진행합니다.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-6 md:mb-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                      3
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* 프로세스 4 */}
              <motion.div 
                className="relative z-10 mb-12 md:mb-24"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 flex justify-center md:justify-end order-1 mb-6 md:mb-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                      4
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">4. 테스트 및 검수</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      다양한 기기와 브라우저에서 웹사이트의 기능과 디자인을 철저히 테스트합니다. 사용성, 성능, 접근성 등 모든 측면에서 완벽한 품질을 보장합니다.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* 프로세스 5 */}
              <motion.div 
                className="relative z-10"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">5. 론칭 및 지원</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      완성된 웹사이트를 서버에 배포하고 공개합니다. 론칭 후에도 지속적인 기술 지원과 유지보수 서비스를 제공하여 웹사이트가 항상 최상의 상태를 유지하도록 합니다.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2 mb-6 md:mb-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                      5
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="text-center mt-16"
              variants={itemVariants}
            >
              <p className="text-gray-600 mb-8 text-sm md:text-base">
                트릭콘텐츠의 체계적인 프로세스로 빠르고 효율적인 웹사이트 제작이 가능합니다.<br />
                지금 바로 문의하고 일주일 안에 완성된 웹사이트를 만나보세요!
              </p>
              <a 
                href="#contact-form" 
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base"
              >
                무료 상담 신청하기
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 문의 양식 섹션 */}
      <motion.section 
        id="contact-form" 
        className="py-16 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block text-blue-600 font-semibold mb-2"
            >
              CONTACT US
            </motion.span>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              무료 상담 신청
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              지금 바로 무료 상담을 신청하고 트릭콘텐츠의 특별한 서비스를 경험해보세요
            </motion.p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-10 bg-blue-600 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-6">연락처 정보</h3>
                  <p className="mb-8 text-blue-100 text-sm md:text-base">
                    아래 연락처로 직접 문의하시거나 옆의 양식을 작성해주세요. 빠른 시간 내에 답변 드리겠습니다.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm md:text-base">02-123-4567</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm md:text-base">info@trickcontents.com</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm md:text-base">서울특별시 강남구 테헤란로 123 트릭빌딩 4층</span>
                    </li>
                  </ul>
                  <h4 className="text-lg font-semibold mb-4">근무 시간</h4>
                  <p className="text-blue-100 text-sm md:text-base">
                    월요일 - 금요일: 9:00 AM - 6:00 PM<br />
                    주말 및 공휴일: 휴무
                  </p>
                </div>
                
                <div className="p-6 md:p-10">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">이름 *</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors text-sm md:text-base" 
                        placeholder="이름을 입력하세요" 
                        required 
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">이메일 *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors text-sm md:text-base" 
                        placeholder="이메일을 입력하세요" 
                        required 
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">연락처</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors text-sm md:text-base" 
                        placeholder="연락처를 입력하세요" 
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">프로젝트 설명</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors text-sm md:text-base" 
                        placeholder="프로젝트에 대해 간략히 설명해주세요" 
                      ></textarea>
                    </div>
                    <div className="mb-6">
                      <label className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" required />
                        <span className="ml-2 text-gray-700 text-sm">개인정보 수집 및 이용에 동의합니다. *</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300 text-lg"
                      >
                        상담 신청하기
                      </button>
                      <p className="text-gray-500 text-sm mt-4">
                        * 상담 신청 후 1영업일 이내에 답변 드리겠습니다
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 text-sm md:text-base">
                더 궁금한 점이 있으신가요? <a href="mailto:info@trickcontents.com" className="text-blue-600 font-semibold">이메일</a>로 문의하시거나 <a href="tel:02-123-4567" className="text-blue-600 font-semibold">전화</a>로 연락주세요.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">트릭콘텐츠</h3>
              <p className="text-gray-400 text-sm md:text-base mb-6">
                단 일주일 만에 완성되는 고퀄리티 웹사이트 제작 서비스
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">바로가기</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">홈</a></li>
                <li><a href="#categories" className="text-gray-400 hover:text-white transition-colors">포트폴리오</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">문의하기</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <ul className="space-y-3 text-gray-400 text-sm md:text-base">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>02-123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@trickcontents.com</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>서울특별시 강남구 테헤란로 123 트릭빌딩 4층</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} 트릭콘텐츠. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
