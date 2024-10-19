import React from 'react';
import { MemoirProvider, useMemoirContext } from './contexts/MemoirContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import HomePage from './components/HomePage';
import RecordingPage from './components/RecordingPage';
import EditPage from './components/EditPage';
import ViewPage from './components/ViewPage';
import StatsPage from './components/StatsPage';
import ExportPage from './components/ExportPage';
import HistoryPage from './components/HistoryPage';

function App() {
  return (
    <ThemeProvider>
      <MemoirProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Breadcrumb />
            <Content />
          </main>
        </div>
      </MemoirProvider>
    </ThemeProvider>
  );
}

const Content: React.FC = () => {
  const { currentPage } = useMemoirContext();

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'record':
      return <RecordingPage />;
    case 'edit':
      return <EditPage />;
    case 'view':
      return <ViewPage />;
    case 'stats':
      return <StatsPage />;
    case 'export':
      return <ExportPage />;
    case 'history':
      return <HistoryPage />;
    default:
      return <HomePage />;
  }
};

export default App;