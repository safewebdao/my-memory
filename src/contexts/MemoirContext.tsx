import React, { createContext, useContext, useState, useEffect } from 'react';
import { Memoir, Category } from '../types';

interface MemoirContextType {
  memoirs: Memoir[];
  currentMemoir: Memoir | null;
  categories: Category[];
  isRecording: boolean;
  currentPage: string;
  setMemoirs: React.Dispatch<React.SetStateAction<Memoir[]>>;
  setCurrentMemoir: React.Dispatch<React.SetStateAction<Memoir | null>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const MemoirContext = createContext<MemoirContextType | undefined>(undefined);

export const MemoirProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [memoirs, setMemoirs] = useState<Memoir[]>([]);
  const [currentMemoir, setCurrentMemoir] = useState<Memoir | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const storedMemoirs = localStorage.getItem('memoirs');
    const storedCategories = localStorage.getItem('categories');

    if (storedMemoirs) {
      setMemoirs(JSON.parse(storedMemoirs));
    }
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('memoirs', JSON.stringify(memoirs));
  }, [memoirs]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  return (
    <MemoirContext.Provider
      value={{
        memoirs,
        currentMemoir,
        categories,
        isRecording,
        currentPage,
        setMemoirs,
        setCurrentMemoir,
        setCategories,
        setIsRecording,
        setCurrentPage,
      }}
    >
      {children}
    </MemoirContext.Provider>
  );
};

export const useMemoirContext = () => {
  const context = useContext(MemoirContext);
  if (context === undefined) {
    throw new Error('useMemoirContext must be used within a MemoirProvider');
  }
  return context;
};