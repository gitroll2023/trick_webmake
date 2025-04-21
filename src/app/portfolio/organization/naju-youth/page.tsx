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
      <header className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">그린유스 나주</h1>
            <nav>
              <ul className="flex space-x-6">
                <li className="hover:underline cursor-pointer">소개</li>
                <li className="hover:underline cursor-pointer">활동</li>
                <li className="hover:underline cursor-pointer">참여방법</li>
                <li className="hover:underline cursor-pointer">공지사항</li>
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
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="청년들이 함께 모여 있는 이미지" 
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
            <h2 className="text-5xl font-bold mb-6">함께 만들어가는<br />나주의 미래</h2>
            <p className="text-xl mb-10">
              그린유스 나주는 지속가능한 미래를 위해 환경, 사회, 문화 분야에서 
              활동하는 청년들의 비영리 단체입니다. 우리의 목소리로 더 나은 지역사회를 만들어갑니다.
            </p>
            <div className="flex gap-4">
              <button className="bg-teal-500 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-teal-600 transition-colors">
                참여하기
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-teal-500 transition-colors">
                더 알아보기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 주요 활동 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">주요 활동</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">그린유스 나주는 환경 보호, 지역사회 발전, 청년 역량 강화를 위한 다양한 활동을 진행합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="환경 보호 활동" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-teal-50">
                <h3 className="text-xl font-bold mb-2 text-teal-700">환경 보호 활동</h3>
                <p className="text-gray-600">나주 지역의 자연환경을 보호하고 지속가능한 생활 방식을 알리기 위한 다양한 활동을 진행합니다.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="청년 정책 제안" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-teal-50">
                <h3 className="text-xl font-bold mb-2 text-teal-700">청년 정책 제안</h3>
                <p className="text-gray-600">청년들의 목소리를 모아 지역 발전을 위한 정책을 제안하고, 청년 친화적인 나주를 만들기 위해 노력합니다.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="청년 네트워킹" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-teal-50">
                <h3 className="text-xl font-bold mb-2 text-teal-700">청년 네트워킹</h3>
                <p className="text-gray-600">다양한 분야의 청년들이 모여 네트워크를 형성하고 협업할 수 있는 기회를 제공합니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 성과 */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">우리의 성과</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <p className="text-gray-600">활동 회원</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <p className="text-gray-600">진행 프로젝트</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">20+</div>
              <p className="text-gray-600">협력 기관</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">5년</div>
              <p className="text-gray-600">활동 기간</p>
            </div>
          </div>
        </div>
      </section>

      {/* 공지사항 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">공지사항</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-semibold">2025년 상반기 청년 환경 프로젝트 공모 안내</h3>
              <p className="text-gray-500 text-sm mt-1">2025.04.01</p>
            </div>
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-semibold">4월 정기 모임 및 환경의 날 행사 안내</h3>
              <p className="text-gray-500 text-sm mt-1">2025.03.25</p>
            </div>
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-semibold">나주시 청년 정책 간담회 참가자 모집</h3>
              <p className="text-gray-500 text-sm mt-1">2025.03.15</p>
            </div>
            <div className="p-6">
              <a href="#" className="text-teal-600 hover:underline font-medium">더 보기 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">그린유스 나주</h2>
              <p className="text-gray-400">전라남도 나주시 청년들이 모여 환경과 지역사회 발전을 위해 활동하는 비영리 단체입니다.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p className="text-gray-400 mb-2">전라남도 나주시 청년로 123</p>
              <p className="text-gray-400 mb-2">이메일: info@greenyouth.org</p>
              <p className="text-gray-400">전화: 061-123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p> 2025 그린유스 나주. All rights reserved.</p>
            <p className="mt-2 text-sm">이 페이지는 홈페이지 제작 시안입니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
