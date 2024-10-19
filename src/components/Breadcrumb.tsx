import React from 'react';
import { useMemoirContext } from '../contexts/MemoirContext';

const pageNames: { [key: string]: string } = {
  home: '主页',
  record: '录音',
  edit: '编辑',
  view: '查看',
  stats: '统计',
  export: '导出'
};

const Breadcrumb: React.FC = () => {
  const { currentPage, setCurrentPage } = useMemoirContext();

  const pages = ['home', currentPage];

  return (
    <nav className="breadcrumb" aria-label="面包屑导航">
      {pages.map((page, index) => (
        <React.Fragment key={page}>
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          <button
            onClick={() => setCurrentPage(page)}
            className="breadcrumb-item"
          >
            {pageNames[page]}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;