import React from 'react';
import { Book, Moon, Sun, Home, ArrowLeft } from 'lucide-react';
import { useThemeContext } from '../contexts/ThemeContext';
import { useMemoirContext } from '../contexts/MemoirContext';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();
  const { currentPage, setCurrentPage } = useMemoirContext();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {currentPage !== 'home' && (
            <button
              onClick={() => setCurrentPage('home')}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="返回主页"
            >
              <Home size={32} />
            </button>
          )}
          {currentPage !== 'home' && (
            <button
              onClick={() => window.history.back()}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="返回上一页"
            >
              <ArrowLeft size={32} />
            </button>
          )}
          <div className="flex items-center space-x-2" onClick={() => setCurrentPage('home')}>
            <Book size={32} className="text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">珍贵回忆录</h1>
          </div>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          aria-label={darkMode ? "切换到浅色模式" : "切换到深色模式"}
        >
          {darkMode ? <Sun size={32} /> : <Moon size={32} />}
        </button>
      </div>
    </header>
  );
};

export default Header;