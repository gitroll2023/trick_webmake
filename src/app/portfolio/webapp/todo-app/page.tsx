'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // 로컬 스토리지에서 할 일 목록 불러오기
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 새 할 일 추가
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // 할 일 완료 상태 토글
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 할 일 삭제
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 필터링된 할 일 목록
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // 남은 할 일 개수
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
          className="max-w-lg mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
        >
          {/* 앱 헤더 */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
            <h1 className="text-3xl font-bold text-center">투두 리스트</h1>
            <p className="text-center text-blue-100 mt-2">간편하게 할 일을 관리하세요</p>
          </div>

          {/* 할 일 입력 폼 */}
          <div className="p-6 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                placeholder="할 일을 입력하세요"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addTodo}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                추가
              </button>
            </div>

            {/* 필터 버튼 */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                전체
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'active'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                미완료
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-md ${
                  filter === 'completed'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                완료
              </button>
            </div>

            {/* 할 일 목록 */}
            <div className="mt-6 space-y-2">
              {filteredTodos.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  {filter === 'all' 
                    ? '할 일을 추가해보세요!' 
                    : filter === 'active' 
                      ? '미완료된 할 일이 없습니다.' 
                      : '완료된 할 일이 없습니다.'}
                </div>
              ) : (
                filteredTodos.map((todo) => (
                  <motion.div
                    key={todo.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
                    />
                    <span
                      className={`flex-1 ml-3 ${
                        todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
                      }`}
                    >
                      {todo.text}
                    </span>
                    <button
                      onClick={() => deleteTodo(todo.id)}
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
                  </motion.div>
                ))
              )}
            </div>

            {/* 요약 정보 */}
            <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-500 flex justify-between items-center">
              <span>{remainingTodos}개의 할 일이 남았습니다</span>
              {todos.length > 0 && (
                <button
                  onClick={() => setTodos(todos.filter((todo) => !todo.completed))}
                  className="text-blue-500 hover:text-blue-700"
                >
                  완료된 항목 삭제
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* 앱 소개 */}
        <div className="max-w-lg mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">투두 앱 소개</h2>
          <p className="text-gray-600">
            이 투두 리스트 앱은 React와 Next.js로 개발된 간단하면서도 실용적인 웹 애플리케이션입니다.
            로컬 스토리지를 활용하여 브라우저를 닫았다가 다시 열어도 데이터가 유지됩니다.
            할 일 추가, 완료 체크, 삭제 및 필터링 기능을 제공합니다.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            이 페이지는 홈페이지 제작 시안입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
