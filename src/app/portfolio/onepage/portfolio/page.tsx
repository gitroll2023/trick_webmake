'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 포트폴리오 메인으로 돌아가기 버튼 */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-gray-600 font-medium">트릭콘텐츠 포트폴리오</span>
        </Link>
      </div>

      {/* 헤더 섹션 */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-80"></div>
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="배경 이미지" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">김민준</h1>
            <div className="text-xl md:text-2xl font-light mb-8">웹 개발자 & UI/UX 디자이너</div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300">
              창의적인 디자인과 효율적인 코드로 사용자 경험을 향상시키는 
              웹 개발자입니다. 최신 기술 트렌드를 활용한 웹 솔루션을 제공합니다.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#portfolio" className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                작업물 보기
              </a>
              <a href="#contact" className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors">
                연락하기
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* 스킬 섹션 */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">기술 스택</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              다양한 프로젝트 경험을 통해 습득한 기술 스택입니다.
              최신 웹 기술과 디자인 트렌드를 지속적으로 학습하고 있습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-gray-700 p-6 rounded-lg text-center"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">프론트엔드</h3>
              <p className="text-gray-400">React, Next.js, Vue.js, Tailwind CSS</p>
            </motion.div>
            <motion.div 
              className="bg-gray-700 p-6 rounded-lg text-center"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">백엔드</h3>
              <p className="text-gray-400">Node.js, Express, MongoDB, Firebase</p>
            </motion.div>
            <motion.div 
              className="bg-gray-700 p-6 rounded-lg text-center"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">디자인</h3>
              <p className="text-gray-400">Figma, Adobe XD, Photoshop, Illustrator</p>
            </motion.div>
            <motion.div 
              className="bg-gray-700 p-6 rounded-lg text-center"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">기타</h3>
              <p className="text-gray-400">Git, Docker, AWS, Vercel</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 포트폴리오 섹션 */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">포트폴리오</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              다양한 프로젝트를 통해 쌓은 경험과 기술력을 확인하세요.
              각 프로젝트는 고유한 문제 해결과 창의적인 접근 방식을 담고 있습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="bg-gray-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="relative h-60">
                  <Image 
                    src={`https://images.unsplash.com/photo-${1550000000000 + item * 10000}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`} 
                    alt={`프로젝트 ${item}`} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">프로젝트 {item}</h3>
                  <p className="text-gray-400 mb-4">
                    {item % 2 === 0 ? '웹 애플리케이션' : '웹사이트'} 디자인 및 개발 프로젝트입니다.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      {item % 3 === 0 ? 'React' : item % 3 === 1 ? 'Next.js' : 'Vue.js'}
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      {item % 2 === 0 ? 'Tailwind CSS' : 'SCSS'}
                    </span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    자세히 보기 →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 경력 섹션 */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">경력</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              다양한 기업과 프로젝트에서 쌓은 경험을 소개합니다.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              { 
                year: '2023 - 현재', 
                company: 'ABC 테크놀로지', 
                position: '시니어 프론트엔드 개발자',
                description: '대규모 웹 애플리케이션 개발 및 유지보수, 주니어 개발자 멘토링'
              },
              { 
                year: '2020 - 2023', 
                company: 'XYZ 디지털', 
                position: '프론트엔드 개발자',
                description: 'React와 Vue.js를 활용한 웹 서비스 개발, UI/UX 개선'
              },
              { 
                year: '2018 - 2020', 
                company: '123 스튜디오', 
                position: '웹 디자이너 & 개발자',
                description: '기업 웹사이트 디자인 및 개발, 반응형 웹 구현'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="mb-12 relative pl-8 border-l-2 border-gray-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="text-blue-400 font-medium mb-1">{item.year}</div>
                <h3 className="text-xl font-bold mb-1">{item.position}</h3>
                <div className="text-gray-300 mb-2">{item.company}</div>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">연락하기</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              프로젝트 문의나 협업 제안은 언제든지 환영합니다.
              이메일이나 소셜 미디어를 통해 연락해주세요.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">이메일</h4>
                    <p className="text-gray-400">contact@minjun.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">전화번호</h4>
                    <p className="text-gray-400">010-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">위치</h4>
                    <p className="text-gray-400">서울특별시 강남구</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">소셜 미디어</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-700 p-3 rounded-lg text-white hover:bg-gray-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 p-3 rounded-lg text-white hover:bg-gray-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 p-3 rounded-lg text-white hover:bg-gray-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-700 p-3 rounded-lg text-white hover:bg-gray-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">메시지 보내기</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">이름</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">이메일</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">메시지</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="메시지를 입력하세요"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full"
                >
                  메시지 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 bg-gray-800 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>© 2025 김민준. All rights reserved.</p>
          <p className="mt-2 text-sm">이 페이지는 홈페이지 제작 시안입니다.</p>
        </div>
      </footer>
    </div>
  );
}
