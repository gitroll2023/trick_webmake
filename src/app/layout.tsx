import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '트릭콘텐츠 - 초고속 웹사이트 제작 전문',
  description: '단 일주일 만에 완성되는 고퀄리티 웹사이트, 트릭콘텐츠와 함께 시작하세요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <a href="#" className="text-2xl font-bold text-blue-600">트릭콘텐츠</a>
              
              {/* 모바일 햄버거 메뉴 */}
              <div className="block lg:hidden">
                <button 
                  id="mobile-menu-button"
                  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-blue-600 hover:border-blue-600"
                  aria-label="메뉴 열기"
                >
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>메뉴</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                  </svg>
                </button>
              </div>
              
              {/* 데스크탑 메뉴 */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium py-2">서비스</a>
                <a href="#comparison" className="text-gray-600 hover:text-blue-600 font-medium py-2">비교</a>
                <a href="#process" className="text-gray-600 hover:text-blue-600 font-medium py-2">프로세스</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium py-2">후기</a>
                <a href="#contact-form" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  무료 상담
                </a>
              </nav>
            </div>
            
            {/* 모바일 메뉴 (기본적으로 숨김) */}
            <div id="mobile-menu" className="lg:hidden hidden pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium py-2">서비스</a>
                <a href="#comparison" className="text-gray-600 hover:text-blue-600 font-medium py-2">비교</a>
                <a href="#process" className="text-gray-600 hover:text-blue-600 font-medium py-2">프로세스</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium py-2">후기</a>
                <a href="#contact-form" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
                  무료 상담
                </a>
              </div>
            </div>
          </div>
        </header>
        
        {/* 헤더 높이만큼 여백 추가 */}
        <div className="pt-16 md:pt-20"></div>
        
        {children}
        
        {/* 모바일 메뉴 토글 스크립트 */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const mobileMenuButton = document.getElementById('mobile-menu-button');
              const mobileMenu = document.getElementById('mobile-menu');
              
              if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', function() {
                  mobileMenu.classList.toggle('hidden');
                });
                
                // 모바일 메뉴 링크 클릭 시 메뉴 닫기
                const mobileMenuLinks = mobileMenu.querySelectorAll('a');
                mobileMenuLinks.forEach(link => {
                  link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                  });
                });
              }
            });
          `
        }} />
      </body>
    </html>
  )
}
