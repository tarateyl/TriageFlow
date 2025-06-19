import React from 'react';

// Updated TriageFlowLogo to be a dark circle with a simple icon, as per image hints
const TriageFlowLogo: React.FC = () => (
  <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-sm">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  </div>
);

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center space-x-3 p-4 md:px-6 md:py-5 border-b border-slate-200 bg-white"> {/* Ensure bg is white if card has padding */}
      <TriageFlowLogo />
      <h1 className="text-xl font-bold text-slate-800">{title}</h1>
      {/* No navigation links, help icon, or profile avatar as per request */}
    </div>
  );
};