import React from 'react';

export default function PreviewContent() {
  return (
    <div className="w-full h-full bg-white text-gray-900 overflow-hidden">
      {/* 헤더 섹션 */}
      <div className="bg-white border-b border-gray-100 p-4 flex justify-between items-center">
        <div className="font-bold text-xl text-blue-600">트릭콘텐츠</div>
        <div className="flex space-x-6">
          <div className="text-gray-800 font-medium">홈</div>
          <div className="text-gray-500 hover:text-gray-800">포트폴리오</div>
          <div className="text-gray-500 hover:text-gray-800">서비스</div>
          <div className="text-gray-500 hover:text-gray-800">문의</div>
        </div>
      </div>
      
      {/* 히어로 섹션 */}
      <div className="bg-white p-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          <span className="text-blue-600">일주일도 채 걸리지 않는</span><br />
          <span className="text-blue-600">획기적인 기획력</span>
        </h1>
        <p className="mb-8 text-gray-600 max-w-lg">다른 에이전시는 3개월, 트릭콘텐츠는 단 일주일 이내 완성! 빠른 속도와 함께 차별화된 아이디어로 경쟁사와 다른 웹사이트를 만들어 드립니다.</p>
        <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">지금 바로 시작하기</div>
      </div>
      
      {/* 서비스 섹션 */}
      <div className="p-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-10 text-center">트릭콘텐츠만의 차별점</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-gray-900">초고속 제작</h3>
            <p className="text-sm text-gray-600">업계 최고 속도! 3개월 걸리는 프로젝트를 단 일주일 이내 완성하는 놀라운 속도</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-gray-900">혁신적 기획력</h3>
            <p className="text-sm text-gray-600">남들과 같은 템플릿은 No! 트릭콘텐츠만의 독창적인 아이디어로 차별화된 웹사이트 제공</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-gray-900">검증된 성과</h3>
            <p className="text-sm text-gray-600">단순한 디자인이 아닌 매출 증대로 이어지는 전략적 웹사이트 구축</p>
          </div>
        </div>
      </div>
      
      {/* 성공 사례 섹션 */}
      <div className="p-12 bg-white">
        <h2 className="text-2xl font-bold mb-10 text-center">트릭콘텐츠의 실제 성과</h2>
        <div className="flex justify-between gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-100 flex-1">
            <div className="text-4xl font-bold text-blue-600 mb-2">10배</div>
            <p className="text-gray-900 font-medium">더 빠른 제작</p>
            <p className="text-sm text-gray-600 mt-2">경쟁사 대비 일주일 이내 완성</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 flex-1">
            <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
            <p className="text-gray-900 font-medium">매출 증가</p>
            <p className="text-sm text-gray-600 mt-2">트릭콘텐츠 웹사이트 도입 후 평균 성과</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 flex-1">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-900 font-medium">고객 만족도</p>
            <p className="text-sm text-gray-600 mt-2">150+ 프로젝트 완료 후 평가</p>
          </div>
        </div>
      </div>
      
      {/* 고객 후기 섹션 */}
      <div className="p-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-10 text-center">고객이 말하는 트릭콘텐츠</h2>
        <div className="bg-white p-8 rounded-lg border border-gray-100 relative">
          <div className="text-gray-400 text-6xl absolute top-4 left-4">"</div>
          <p className="text-gray-700 text-lg relative z-10 mb-6">다른 에이전시에서는 3개월이 걸릴 거라 했는데, 트릭콘텐츠는 단 일주일 만에 완성해주었습니다. 게다가 품질은 오히려 더 뛰어났죠. 독창적인 아이디어와 빠른 실행력이 정말 인상적이었습니다.</p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <div className="font-medium text-gray-900">박성민 대표</div>
              <div className="text-sm text-gray-500">테크스타트업 A사</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA 섹션 */}
      <div className="p-12 bg-blue-600 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">왜 기다리시나요?</h2>
        <p className="mb-8 text-blue-100">다른 에이전시는 3개월, 트릭콘텐츠는 단 일주일! 더 빠르고 혁신적인 웹사이트를 원하신다면</p>
        <div className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium">지금 바로 상담 신청하기</div>
      </div>
      
      {/* 푸터 */}
      <div className="bg-white p-8 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-xl text-blue-600 mb-2">트릭콘텐츠</div>
            <div className="text-sm text-gray-500">초고속 제작, 혁신적 기획, 검증된 성과</div>
          </div>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; 2025 트릭콘텐츠. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
