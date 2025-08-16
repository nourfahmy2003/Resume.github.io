import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App';
import { useThemeBoot } from './hooks/useThemeBoot.js';

function Boot() {
  useThemeBoot();
  return <App />;
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<Boot />);
}
