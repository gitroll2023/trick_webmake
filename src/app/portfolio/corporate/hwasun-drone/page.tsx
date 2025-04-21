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
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">에코드론 화순</h1>
            <nav>
              <ul className="flex space-x-6">
                <li className="hover:underline cursor-pointer">회사소개</li>
                <li className="hover:underline cursor-pointer">서비스</li>
                <li className="hover:underline cursor-pointer">장비소개</li>
                <li className="hover:underline cursor-pointer">시공사례</li>
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
            src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="드론 이미지" 
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
            <h2 className="text-5xl font-bold mb-6">첨단 기술로<br />농업의 미래를 선도합니다</h2>
            <p className="text-xl mb-10">
              에코드론 화순은 최신 드론 기술을 활용한 정밀 농업 서비스를 제공하여
              농작물 생산성 향상과 환경 보호를 동시에 실현합니다.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-blue-600 transition-colors">
                서비스 신청
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-blue-700 transition-colors">
                장비 둘러보기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">주요 서비스</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">에코드론 화순은 다양한 농업 환경에 맞춘 맞춤형 드론 방제 서비스를 제공합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="농약 살포" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-blue-50">
                <h3 className="text-xl font-bold mb-2 text-blue-700">농약 살포 서비스</h3>
                <p className="text-gray-600">드론을 활용한 정밀 농약 살포로 농작물 보호와 농약 사용량 감소를 동시에 실현합니다.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1530907487668-af02f65b4afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="작물 모니터링" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-blue-50">
                <h3 className="text-xl font-bold mb-2 text-blue-700">작물 모니터링</h3>
                <p className="text-gray-600">고해상도 카메라와 열화상 장비를 통해 작물 상태를 정밀하게 분석하고 문제점을 조기에 발견합니다.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="파종 및 비료 살포" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 bg-blue-50">
                <h3 className="text-xl font-bold mb-2 text-blue-700">파종 및 비료 살포</h3>
                <p className="text-gray-600">정밀 GPS를 활용한 균일한 파종과 비료 살포로 작물의 생산성을 극대화합니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 장비 소개 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">최첨단 드론 장비</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="농업용 드론" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">농업 특화 드론</h3>
              <p className="text-gray-600 mb-6">
                에코드론 화순은 농업 환경에 최적화된 고성능 드론을 보유하고 있습니다.
                최대 20L의 약제를 탑재할 수 있으며, 한 번의 비행으로 약 1.5헥타르의 면적을 처리할 수 있습니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>최대 20L 약제 탱크 용량</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>최대 30분 비행 시간</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>정밀 GPS 시스템 탑재</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>자동 비행 및 자동 귀환 기능</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 시공 사례 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">시공 사례</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">화순군 도곡면 벼농사 단지 방제 작업</h3>
                  <p className="text-gray-500 text-sm mt-1">2025.03.15 완료 | 면적: 15헥타르</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">농약 살포</span>
              </div>
            </div>
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">화순군 능주면 과수원 병해충 방제</h3>
                  <p className="text-gray-500 text-sm mt-1">2025.03.05 완료 | 면적: 8헥타르</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">농약 살포</span>
              </div>
            </div>
            <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">화순군 청풍면 고추밭 생육 상태 모니터링</h3>
                  <p className="text-gray-500 text-sm mt-1">2025.02.20 완료 | 면적: 5헥타르</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">모니터링</span>
              </div>
            </div>
            <div className="p-6">
              <a href="#" className="text-blue-600 hover:underline font-medium">모든 사례 보기 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">에코드론 화순</h2>
              <p className="text-gray-400">최신 드론 기술을 활용한 정밀 농업 서비스를 제공하여 농업의 미래를 선도합니다.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p className="text-gray-400 mb-2">전라남도 화순군 화순읍 농업로 123</p>
              <p className="text-gray-400 mb-2">이메일: info@ecodrone.co.kr</p>
              <p className="text-gray-400">전화: 061-456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p> 2025 에코드론 화순. All rights reserved.</p>
            <p className="mt-2 text-sm">이 페이지는 홈페이지 제작 시안입니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
