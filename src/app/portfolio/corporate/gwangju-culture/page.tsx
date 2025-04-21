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
      <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">아트스페이스 광주</h1>
            <nav>
              <ul className="flex space-x-6">
                <li className="hover:underline cursor-pointer">센터소개</li>
                <li className="hover:underline cursor-pointer">프로그램</li>
                <li className="hover:underline cursor-pointer">전시안내</li>
                <li className="hover:underline cursor-pointer">대관안내</li>
                <li className="hover:underline cursor-pointer">문의</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* 메인 배너 */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="문화 공간 이미지" 
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
            <h2 className="text-5xl font-bold mb-6">문화로 소통하는<br />광주의 새로운 공간</h2>
            <p className="text-xl mb-10">
              아트스페이스 광주는 지역 예술인들의 창작활동을 지원하고 시민들에게 
              다양한 문화예술 체험 기회를 제공하는 복합문화공간입니다.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-purple-700 transition-colors">
                프로그램 보기
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-purple-700 transition-colors">
                센터 둘러보기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 주요 프로그램 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">주요 프로그램</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">아트스페이스 광주는 다양한 문화예술 프로그램을 통해 시민들의 문화 향유 기회를 확대합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="예술 교육 프로그램" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-purple-50">
                <h3 className="text-xl font-bold mb-2 text-purple-800">예술 교육 프로그램</h3>
                <p className="text-gray-600">어린이부터 성인까지 다양한 연령층을 위한 맞춤형 예술 교육 프로그램을 제공합니다.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="전시 프로그램" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-purple-50">
                <h3 className="text-xl font-bold mb-2 text-purple-800">전시 프로그램</h3>
                <p className="text-gray-600">지역 예술가들의 작품을 소개하고 다양한 기획전시를 통해 시민들에게 예술 감상 기회를 제공합니다.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="공연 프로그램" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-purple-50">
                <h3 className="text-xl font-bold mb-2 text-purple-800">공연 프로그램</h3>
                <p className="text-gray-600">음악, 연극, 무용 등 다양한 장르의 공연을 통해 시민들에게 풍부한 문화 경험을 제공합니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 공간 소개 */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">공간 소개</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="전시 공간" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">다목적 문화공간</h3>
              <p className="text-gray-600 mb-6">
                아트스페이스 광주는 전시실, 공연장, 교육실, 미디어랩, 창작스튜디오 등 
                다양한 문화예술 활동을 위한 공간을 갖추고 있습니다. 
                지역 예술인들의 창작활동을 지원하고 시민들에게 다양한 문화예술 체험 기회를 제공합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>전시실 (300㎡) - 다양한 형태의 전시 가능</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>공연장 (200석) - 소규모 공연 및 강연</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>교육실 (3실) - 예술 교육 및 워크숍</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>창작스튜디오 (5실) - 예술가 레지던시 프로그램</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 일정 안내 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">전시 및 공연 일정</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">광주 청년 작가 기획전: 도시의 색채</h3>
                  <p className="text-gray-500 text-sm mt-1">2025.04.15 - 2025.05.15</p>
                </div>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">전시</span>
              </div>
            </div>
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">클래식 음악회: 봄의 선율</h3>
                  <p className="text-gray-500 text-sm mt-1">2025.04.20 (토) 19:00</p>
                </div>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">공연</span>
              </div>
            </div>
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">미디어아트 특별전: 빛과 소리의 대화</h3>
                  <p className="text-gray-500 text-sm mt-1">2025.05.01 - 2025.05.30</p>
                </div>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">전시</span>
              </div>
            </div>
            <div className="p-6">
              <a href="#" className="text-purple-600 hover:underline font-medium">전체 일정 보기 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">아트스페이스 광주</h2>
              <p className="text-gray-400">광주광역시의 문화예술 활성화를 위한 복합문화공간으로, 다양한 전시, 공연, 교육 프로그램을 운영합니다.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p className="text-gray-400 mb-2">광주광역시 동구 예술로 123</p>
              <p className="text-gray-400 mb-2">이메일: info@artspacegwangju.org</p>
              <p className="text-gray-400">전화: 062-123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p> 2025 아트스페이스 광주. All rights reserved.</p>
            <p className="mt-2 text-sm">이 페이지는 홈페이지 제작 시안입니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
