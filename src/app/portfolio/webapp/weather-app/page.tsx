'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  forecast: {
    day: string;
    condition: string;
    icon: string;
    maxTemp: number;
    minTemp: number;
  }[];
}

// 더미 날씨 데이터
const cities = [
  { id: 1, name: '서울', lat: 37.5665, lon: 126.9780 },
  { id: 2, name: '부산', lat: 35.1796, lon: 129.0756 },
  { id: 3, name: '인천', lat: 37.4563, lon: 126.7052 },
  { id: 4, name: '대구', lat: 35.8714, lon: 128.6014 },
  { id: 5, name: '광주', lat: 35.1595, lon: 126.8526 },
  { id: 6, name: '대전', lat: 36.3504, lon: 127.3845 },
  { id: 7, name: '울산', lat: 35.5384, lon: 129.3114 },
  { id: 8, name: '제주', lat: 33.4996, lon: 126.5312 },
];

const weatherConditions = [
  { condition: '맑음', icon: '☀️' },
  { condition: '구름 조금', icon: '🌤️' },
  { condition: '구름 많음', icon: '☁️' },
  { condition: '흐림', icon: '🌥️' },
  { condition: '비', icon: '🌧️' },
  { condition: '소나기', icon: '🌦️' },
  { condition: '눈', icon: '❄️' },
  { condition: '천둥번개', icon: '⛈️' },
];

const days = ['일', '월', '화', '수', '목', '금', '토'];

// 더미 날씨 데이터 생성 함수
const generateWeatherData = (cityName: string): WeatherData => {
  const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  const currentTemp = Math.floor(Math.random() * 25) + 5; // 5~30도
  
  const forecast = Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    const dayName = days[date.getDay()];
    const forecastCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const maxTemp = Math.floor(Math.random() * 10) + currentTemp - 2;
    const minTemp = maxTemp - Math.floor(Math.random() * 8) - 2;
    
    return {
      day: dayName,
      condition: forecastCondition.condition,
      icon: forecastCondition.icon,
      maxTemp,
      minTemp,
    };
  });
  
  return {
    location: cityName,
    temperature: currentTemp,
    condition: randomCondition.condition,
    icon: randomCondition.icon,
    humidity: Math.floor(Math.random() * 60) + 30, // 30~90%
    windSpeed: Math.floor(Math.random() * 20) + 1, // 1~20 m/s
    forecast,
  };
};

export default function Page() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 날씨 데이터 가져오기
  const fetchWeatherData = (city: { name: string }) => {
    setLoading(true);
    setError(null);
    
    // 실제 API 호출 대신 더미 데이터 생성
    setTimeout(() => {
      try {
        const data = generateWeatherData(city.name);
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError('날씨 정보를 가져오는 데 실패했습니다.');
        setLoading(false);
      }
    }, 800); // 로딩 효과를 위한 지연
  };

  // 초기 데이터 로드
  useEffect(() => {
    fetchWeatherData(selectedCity);
  }, []);

  // 도시 변경 시 날씨 데이터 업데이트
  const handleCityChange = (city: typeof cities[0]) => {
    setSelectedCity(city);
    fetchWeatherData(city);
  };

  // 현재 날짜 및 시간
  const now = new Date();
  const formattedDate = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${days[now.getDay()]}요일`;
  const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-sky-100">
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
          className="max-w-2xl mx-auto"
        >
          {/* 앱 헤더 */}
          <div className="bg-gradient-to-r from-blue-500 to-sky-600 p-6 text-white rounded-t-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center">날씨 정보</h1>
            <p className="text-center text-blue-100 mt-2">지역별 날씨를 확인하세요</p>
          </div>

          {/* 도시 선택 */}
          <div className="bg-white p-6 border-b border-gray-200 flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCityChange(city)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCity.id === city.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>

          {/* 날씨 정보 */}
          <div className="bg-white p-6 rounded-b-xl shadow-lg">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="text-center py-20 text-red-500">{error}</div>
            ) : weatherData ? (
              <>
                {/* 현재 날씨 */}
                <div className="text-center mb-8">
                  <div className="text-sm text-gray-500 mb-1">{formattedDate}</div>
                  <div className="text-sm text-gray-500 mb-4">{formattedTime} 기준</div>
                  <h2 className="text-2xl font-bold text-gray-800">{weatherData.location}</h2>
                  <div className="text-7xl my-4">{weatherData.icon}</div>
                  <div className="text-5xl font-bold text-gray-800 mb-2">{weatherData.temperature}°C</div>
                  <div className="text-xl text-gray-600">{weatherData.condition}</div>
                  <div className="flex justify-center gap-6 mt-4 text-gray-600">
                    <div>
                      <span className="text-sm">습도</span>
                      <div className="font-medium">{weatherData.humidity}%</div>
                    </div>
                    <div>
                      <span className="text-sm">풍속</span>
                      <div className="font-medium">{weatherData.windSpeed} m/s</div>
                    </div>
                  </div>
                </div>

                {/* 5일 예보 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">5일 예보</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="font-medium text-gray-700">{day.day}</div>
                        <div className="text-2xl my-2">{day.icon}</div>
                        <div className="text-sm">
                          <span className="text-red-500">{day.maxTemp}°</span> /{' '}
                          <span className="text-blue-500">{day.minTemp}°</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </motion.div>

        {/* 앱 소개 */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">날씨 앱 소개</h2>
          <p className="text-gray-600">
            이 날씨 정보 앱은 React와 Next.js로 개발된 웹 애플리케이션입니다.
            실제 API 연동 대신 더미 데이터를 사용하여 다양한 도시의 날씨 정보를 제공합니다.
            현재 날씨와 5일 예보를 확인할 수 있습니다.
          </p>
          <p className="mt-2 text-gray-600">
            실제 서비스에서는 OpenWeatherMap이나 기상청 API 등을 연동하여 실시간 날씨 정보를 제공할 수 있습니다.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            이 페이지는 홈페이지 제작 시안입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
