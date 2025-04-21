'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// 더미 상품 데이터
const products = [
  {
    id: 1,
    name: '친환경 대나무 칫솔',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1570091376041-8b75d699b887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: '욕실용품',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 2,
    name: '유기농 면 에코백',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: '패션',
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 3,
    name: '스테인리스 텀블러',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: '주방용품',
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 4,
    name: '천연 밀랍 랩',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1621844061203-3f9a5ac32a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: '주방용품',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 5,
    name: '유기농 면 손수건 세트',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: '패션',
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 6,
    name: '친환경 대나무 수저 세트',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1584577574143-ab872cbbc4b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: '주방용품',
    isNew: true,
    isBestSeller: false,
  },
];

// 카테고리 목록
const categories = ['전체', '욕실용품', '패션', '주방용품'];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [cartCount, setCartCount] = useState(0);

  // 카테고리별 상품 필터링
  const filteredProducts = activeCategory === '전체'
    ? products
    : products.filter(product => product.category === activeCategory);

  // 장바구니에 상품 추가
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

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
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">에코샵</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="검색어를 입력하세요" 
                  className="px-4 py-2 rounded-full text-gray-800 text-sm w-40 md:w-64"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
          <nav className="mt-4">
            <ul className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
              <li className="whitespace-nowrap hover:text-green-200 cursor-pointer">홈</li>
              <li className="whitespace-nowrap hover:text-green-200 cursor-pointer">신상품</li>
              <li className="whitespace-nowrap hover:text-green-200 cursor-pointer">베스트</li>
              <li className="whitespace-nowrap hover:text-green-200 cursor-pointer">특가</li>
              <li className="whitespace-nowrap hover:text-green-200 cursor-pointer">이벤트</li>
              <li className="whitespace-nowrap hover:text-green-200 cursor-pointer">브랜드</li>
              <li className="whitespace-nowrap hover:text-green-200 cursor-pointer">매장안내</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 메인 배너 */}
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="친환경 제품" 
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <motion.div 
            className="text-white max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-full mb-4">
              NEW ARRIVAL
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">지구를 생각하는<br />친환경 라이프스타일</h2>
            <p className="text-lg mb-6">
              일상 속 작은 실천으로 지구를 지켜요.<br />
              에코샵의 친환경 제품으로 지속 가능한 라이프스타일을 시작하세요.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              친환경 제품 보러가기
            </button>
          </motion.div>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-2 md:space-x-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 상품 목록 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">친환경 제품</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="relative h-64">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                      BEST
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs text-gray-500">{product.category}</span>
                  <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">{product.price.toLocaleString()}원</span>
                    <button 
                      onClick={addToCart}
                      className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 친환경 가치 */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">에코샵의 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">지구를 생각하는 제품</h3>
              <p className="text-gray-600">
                환경에 해를 끼치지 않는 재료와 생산 방식으로 만든 제품만을 엄선합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">안전한 소재</h3>
              <p className="text-gray-600">
                인체에 무해한 안전한 소재로 제작된 제품만을 취급합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">친환경 패키지</h3>
              <p className="text-gray-600">
                모든 제품은 재활용 가능한 친환경 패키지로 배송됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">에코샵</h3>
              <p className="text-gray-400 text-sm">
                지구를 생각하는 친환경 라이프스타일 스토어입니다.
                지속 가능한 소비 문화를 만들어갑니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">고객센터</h3>
              <p className="text-gray-400 text-sm mb-2">평일 10:00 - 18:00</p>
              <p className="text-gray-400 text-sm mb-2">점심 12:30 - 13:30</p>
              <p className="text-gray-400 text-sm">주말 및 공휴일 휴무</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">회사 정보</h3>
              <p className="text-gray-400 text-sm mb-2">상호명: 에코샵</p>
              <p className="text-gray-400 text-sm mb-2">대표: 홍길동</p>
              <p className="text-gray-400 text-sm">사업자등록번호: 123-45-67890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">© 2025 에코샵. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-500">이 페이지는 홈페이지 제작 시안입니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
