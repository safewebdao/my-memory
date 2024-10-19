import React from 'react';
import { useMemoirContext } from '../contexts/MemoirContext';

const StatsPage: React.FC = () => {
  const { memoirs } = useMemoirContext();

  const totalMemoirs = memoirs.length;

  const memoirsByMonth = memoirs.reduce((acc, memoir) => {
    const date = new Date(memoir.createdAt);
    const monthYear = `${date.getFullYear()}年${(date.getMonth() + 1).toString().padStart(2, '0')}月`;
    acc[monthYear] = (acc[monthYear] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const memoirsByCategory = memoirs.reduce((acc, memoir) => {
    const category = memoir.category || '未分类';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">回忆统计</h2>
      
      <div className="card mb-8">
        <h3 className="text-2xl font-semibold mb-4">总览</h3>
        <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{totalMemoirs} 条珍贵回忆</p>
      </div>

      <div className="card mb-8">
        <h3 className="text-2xl font-semibold mb-6">每月回忆数量</h3>
        <ul className="space-y-4">
          {Object.entries(memoirsByMonth).sort().reverse().map(([month, count]) => (
            <li key={month} className="flex justify-between items-center text-xl">
              <span>{month}</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">{count} 条</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3 className="text-2xl font-semibold mb-6">分类统计</h3>
        <ul className="space-y-4">
          {Object.entries(memoirsByCategory).map(([category, count]) => (
            <li key={category} className="flex justify-between items-center text-xl">
              <span>{category}</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">{count} 条</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatsPage;