'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  slug: string;
  color?: string;
}

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 컨테이너 애니메이션
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // 아이템 애니메이션
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  // 배경색 랜덤 생성 함수
  const getRandomGradient = (index: number) => {
    const gradients = [
      'from-blue-500 to-purple-500',
      'from-green-400 to-blue-500',
      'from-yellow-400 to-red-500',
      'from-pink-500 to-purple-500',
      'from-indigo-500 to-purple-500',
      'from-red-500 to-yellow-500',
      'from-teal-400 to-blue-500',
      'from-orange-400 to-pink-500',
    ];
    
    return gradients[index % gradients.length];
  };

  if (!mounted) return null;

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category, index) => (
        <motion.div 
          key={category.id} 
          variants={itemVariants}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link href={`/portfolio/${category.slug}`}>
            <div className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}>
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${getRandomGradient(index)} opacity-80`}
                initial={{ opacity: 0.7 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 0.9 : 0.7,
                  scale: hoveredIndex === index ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="aspect-square flex items-center justify-center relative z-10 p-6">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-center text-white"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1,
                    y: hoveredIndex === index ? -5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {category.name}
                </motion.h3>
              </div>
              
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute bottom-4 left-0 right-0 text-center text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium">자세히 보기</span>
                </motion.div>
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
