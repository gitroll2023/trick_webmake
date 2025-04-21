'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Memo {
  id: number;
  title: string;
  content: string;
  color: string;
  createdAt: string;
}

export default function Page() {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('#FFEB3B');
  const [isEditing, setIsEditing] = useState(false);
  const [currentMemoId, setCurrentMemoId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // 색상 옵션
  const colorOptions = [
    '#FFEB3B', // 노랑
    '#FF9800', // 주황
    '#4CAF50', // 초록
    '#2196F3', // 파랑
    '#9C27B0', // 보라
    '#F44336', // 빨강
  ];

  // 로컬 스토리지에서 메모 불러오기
  useEffect(() => {
    const savedMemos = localStorage.getItem('memos');
    if (savedMemos) {
      setMemos(JSON.parse(savedMemos));
    }
  }, []);

  // 메모가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('memos', JSON.stringify(memos));
  }, [memos]);

  // 메모 추가
  const addMemo = () => {
    if (title.trim() === '' && content.trim() === '') return;

    const newMemo: Memo = {
      id: Date.now(),
      title: title.trim() === '' ? '제목 없음' : title,
      content,
      color: selectedColor,
      createdAt: new Date().toISOString(),
    };

    setMemos([newMemo, ...memos]);
    resetForm();
  };

  // 메모 수정
  const updateMemo = () => {
    if (currentMemoId === null) return;

    setMemos(
      memos.map((memo) =>
        memo.id === currentMemoId
          ? {
              ...memo,
              title: title.trim() === '' ? '제목 없음' : title,
              content,
              color: selectedColor,
            }
          : memo
      )
    );

    resetForm();
    setIsEditing(false);
    setCurrentMemoId(null);
  };

  // 메모 삭제
  const deleteMemo = (id: number) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  // 메모 편집 모드로 전환
  const editMemo = (memo: Memo) => {
    setTitle(memo.title);
    setContent(memo.content);
    setSelectedColor(memo.color);
    setIsEditing(true);
    setCurrentMemoId(memo.id);
  };

  // 폼 초기화
  const resetForm = () => {
    setTitle('');
    setContent('');
    setSelectedColor('#FFEB3B');
  };

  // 취소 버튼
  const handleCancel = () => {
    resetForm();
    setIsEditing(false);
    setCurrentMemoId(null);
  };

  // 검색된 메모 목록
  const filteredMemos = memos.filter(
    (memo) =>
      memo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memo.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(
      date.getDate()
    ).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(
      date.getMinutes()
    ).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      {/* 포트폴리오 메인으로 돌아가기 버튼 */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-gray-600 font-medium">트릭콘텐츠 포트폴리오</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* 앱 헤더 */}
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-6 text-white rounded-t-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center">포켓 메모</h1>
            <p className="text-center text-amber-100 mt-2">간편하게 메모를 작성하고 관리하세요</p>
          </div>

          {/* 메모 작성 폼 */}
          <div className="bg-white p-6 shadow-md">
            <div className="mb-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력하세요"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            {/* 색상 선택 */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-600">메모 색상:</span>
                <div className="flex gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-6 h-6 rounded-full ${
                        selectedColor === color ? 'ring-2 ring-gray-400 ring-offset-2' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <button
                    onClick={updateMemo}
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    수정 완료
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    취소
                  </button>
                </>
              ) : (
                <button
                  onClick={addMemo}
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  메모 저장
                </button>
              )}
            </div>
          </div>

          {/* 검색 */}
          <div className="bg-white p-4 border-t border-gray-200">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="메모 검색..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* 메모 목록 */}
          <div className="bg-white p-6 rounded-b-xl shadow-lg">
            {filteredMemos.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {memos.length === 0
                  ? '새로운 메모를 작성해보세요!'
                  : '검색 결과가 없습니다.'}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredMemos.map((memo) => (
                  <motion.div
                    key={memo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    style={{ backgroundColor: `${memo.color}20` }} // 투명도 추가
                  >
                    <div className="absolute top-2 right-2 flex gap-1">
                      <button
                        onClick={() => editMemo(memo)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteMemo(memo.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className="w-4 h-4 rounded-full absolute top-2 left-2"
                      style={{ backgroundColor: memo.color }}
                    ></div>
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 pr-14">
                      {memo.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-wrap mb-4">{memo.content}</p>
                    <div className="text-xs text-gray-500">{formatDate(memo.createdAt)}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* 앱 소개 */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">포켓 메모 앱 소개</h2>
          <p className="text-gray-600">
            이 포켓 메모 앱은 React와 Next.js로 개발된 웹 애플리케이션입니다.
            로컬 스토리지를 활용하여 브라우저를 닫았다가 다시 열어도 데이터가 유지됩니다.
            메모 작성, 수정, 삭제 및 검색 기능을 제공하며, 각 메모마다 다른 색상을 지정할 수 있습니다.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            이 페이지는 홈페이지 제작 시안입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
