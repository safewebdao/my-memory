import React, { useState, useEffect } from 'react';
import { useMemoirContext } from '../contexts/MemoirContext';

const HistoryPage: React.FC = () => {
  const [historyEvent, setHistoryEvent] = useState('');
  const { setCurrentPage } = useMemoirContext();

  useEffect(() => {
    // 这里应该是从API获取历史上的今天的事件
    // 为了演示，我们使用一个固定的事件
    setHistoryEvent('1969年7月20日：阿波罗11号成功登月，人类第一次踏上月球表面。');
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">历史上的今天</h2>
      <div className="card mb-8">
        <p className="text-2xl mb-6">{historyEvent}</p>
        <p className="text-xl mb-6">这个历史事件是否唤起了您的某些回忆？</p>
        <button
          onClick={() => setCurrentPage('edit')}
          className="btn btn-primary"
        >
          记录相关回忆
        </button>
      </div>
    </div>
  );
};

export default HistoryPage;