import React, { useState, useEffect } from 'react';
import { useMemoirContext } from '../contexts/MemoirContext';

const EditPage: React.FC = () => {
  const { currentMemoir, setCurrentMemoir, categories, setMemoirs, setCurrentPage } = useMemoirContext();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (currentMemoir) {
      setTitle(currentMemoir.title);
      setContent(currentMemoir.content);
      setCategory(currentMemoir.category);
    }
  }, [currentMemoir]);

  const handleSave = () => {
    const newMemoir = {
      id: currentMemoir?.id || Date.now().toString(),
      title,
      content,
      category,
      createdAt: currentMemoir?.createdAt || new Date(),
      updatedAt: new Date(),
    };

    setMemoirs(prevMemoirs => {
      if (currentMemoir) {
        return prevMemoirs.map(memoir => memoir.id === currentMemoir.id ? newMemoir : memoir);
      } else {
        return [...prevMemoirs, newMemoir];
      }
    });

    setCurrentMemoir(null);
    setCurrentPage('view');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">
        {currentMemoir ? '编辑您的回忆' : '记录新的回忆'}
      </h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
        <div>
          <label htmlFor="title" className="label">回忆标题</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            required
            placeholder="给这段回忆起个标题"
          />
        </div>
        <div>
          <label htmlFor="category" className="label">分类</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
          >
            <option value="">选择分类</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="content" className="label">回忆内容</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="input h-64"
            required
            placeholder="在这里详细描述您的回忆..."
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary text-2xl">
            保存回忆
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;