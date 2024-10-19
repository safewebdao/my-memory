import React, { useState } from 'react';
import { useMemoirContext } from '../contexts/MemoirContext';
import { Download, Check } from 'lucide-react';

const ExportPage: React.FC = () => {
  const { memoirs } = useMemoirContext();
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const content = memoirs.map(memoir => `
标题: ${memoir.title}
分类: ${memoir.category || '未分类'}
创建时间: ${new Date(memoir.createdAt).toLocaleString()}
更新时间: ${new Date(memoir.updatedAt).toLocaleString()}

${memoir.content}

-------------------
`).join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '我的珍贵回忆录.txt';
    link.click();
    URL.revokeObjectURL(url);
    setExported(true);
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">导出您的回忆录</h2>
      <div className="card mb-8">
        <p className="mb-6 text-2xl leading-relaxed">
          您已经记录了 <span className="font-bold text-blue-600 dark:text-blue-400">{memoirs.length} 条珍贵回忆</span>。
          现在，您可以将所有这些美好的时刻汇集成一本完整的回忆录。
        </p>
        <p className="mb-8 text-xl">
          点击下面的按钮，将您的回忆录导出为文本文件。
          这本独一无二的回忆录将包含您记录的每一条回忆，包括标题、日期、分类和内容。
        </p>
        <button 
          onClick={handleExport} 
          className="btn btn-primary flex items-center justify-center mx-auto text-2xl"
          disabled={exported}
        >
          {exported ? (
            <>
              <Check size={32} className="mr-3" />
              回忆录已导出
            </>
          ) : (
            <>
              <Download size={32} className="mr-3" />
              导出我的回忆录
            </>
          )}
        </button>
      </div>
      {exported && (
        <div className="card bg-green-100 dark:bg-green-800">
          <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">恭喜您！</h3>
          <p className="text-xl text-green-700 dark:text-green-300">
            您的回忆录已成功导出。这是您人生旅程的珍贵记录，凝聚了无数美好时刻。
            您可以随时重温这些回忆，也可以与亲朋好友分享您的故事。
          </p>
        </div>
      )}
    </div>
  );
};

export default ExportPage;