import React from 'react';
import { useMemoirContext } from '../contexts/MemoirContext';
import { Edit, ChevronLeft, ChevronRight } from 'lucide-react';

const ViewPage: React.FC = () => {
  const { memoirs, setCurrentMemoir, setCurrentPage } = useMemoirContext();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const currentMemoir = memoirs[currentIndex];

  const handleEdit = () => {
    setCurrentMemoir(currentMemoir);
    setCurrentPage('edit');
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : memoirs.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < memoirs.length - 1 ? prevIndex + 1 : 0));
  };

  if (memoirs.length === 0) {
    return (
      <div className="text-center">
        <p className="text-2xl mb-6">您还没有记录任何回忆。</p>
        <button onClick={() => setCurrentPage('edit')} className="btn btn-primary text-2xl">
          开始记录新回忆
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">回忆浏览</h2>
      <div className="card">
        <h3 className="text-3xl font-semibold mb-4">{currentMemoir.title}</h3>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
          分类: {currentMemoir.category || '未分类'} | 
          创建时间: {new Date(currentMemoir.createdAt).toLocaleDateString()}
        </p>
        <p className="mb-8 text-xl leading-relaxed whitespace-pre-wrap">{currentMemoir.content}</p>
        <div className="flex justify-between items-center">
          <button onClick={handleEdit} className="btn btn-secondary flex items-center text-xl">
            <Edit size={24} className="mr-3" />
            编辑此回忆
          </button>
          <div className="flex items-center space-x-6">
            <button onClick={handlePrevious} className="p-3 rounded-full bg-gray-200 dark:bg-gray-600">
              <ChevronLeft size={32} />
            </button>
            <span className="text-xl">{currentIndex + 1} / {memoirs.length}</span>
            <button onClick={handleNext} className="p-3 rounded-full bg-gray-200 dark:bg-gray-600">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;