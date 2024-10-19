import React from 'react';
import { Mic, Edit, BookOpen, BarChart2, Download, Calendar } from 'lucide-react';
import { useMemoirContext } from '../contexts/MemoirContext';
import Milestone from './Milestone';

const HomePage: React.FC = () => {
  const { memoirs, setCurrentPage } = useMemoirContext();

  const menuItems = [
    { icon: Mic, text: '开始录音', page: 'record' },
    { icon: Edit, text: '编辑回忆', page: 'edit' },
    { icon: BookOpen, text: '查看回忆', page: 'view' },
    { icon: BarChart2, text: '统计信息', page: 'stats' },
    { icon: Download, text: '导出回忆录', page: 'export' },
    { icon: Calendar, text: '历史上的今天', page: 'history' },
  ];

  const getMilestone = (count: number) => {
    if (count === 1) return { title: "记录第一个回忆！", description: "您已经开始了珍贵的回忆之旅。继续记录，留下更多美好时刻！" };
    if (count === 10) return { title: "十个珍贵回忆！", description: "您已经记录了10个回忆，真是了不起的成就！" };
    if (count === 50) return { title: "五十个回忆里程碑！", description: "五十个回忆，五十个珍贵时刻。您的人生故事正在徐徐展开。" };
    if (count === 100) return { title: "百个回忆的见证！", description: "一百个回忆！您的人生故事如此丰富多彩，值得骄傲！" };
    return null;
  };

  const milestone = getMilestone(memoirs.length);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">欢迎来到您的珍贵回忆录</h2>
      {milestone && <Milestone title={milestone.title} description={milestone.description} />}
      <p className="text-2xl mb-8 text-center text-gray-600 dark:text-gray-300">
        您已经记录了 {memoirs.length} 条珍贵的回忆。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(item.page)}
            className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <item.icon size={64} className="mb-6 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-semibold text-gray-800 dark:text-white">{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;