import React from 'react';
import { Message, Sender } from '../types';

// Basic markdown to HTML conversion for lists and bold text
const formatMarkdown = (text: string): React.ReactNode => {
  // Replace escaped newlines from Gemini with actual newlines for processing
  const processedText = text.replace(/\\n/g, '\n');
  const lines = processedText.split('\n');
  const elements: React.ReactNode[] = [];
  let currentListItems: string[] = [];

  const flushList = (keyPrefix: string) => {
    if (currentListItems.length > 0) {
      elements.push(
        <ul className="list-disc list-inside space-y-1 my-1 pl-1" key={`${keyPrefix}-ul-${elements.length}`}>
          {currentListItems.map((item, index) => (
            <li key={index}>{parseLine(item)}</li>
          ))}
        </ul>
      );
      currentListItems = [];
    }
  };

  const parseLine = (line: string): React.ReactNode => {
    line = line.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong>$1$2</strong>');
    line = line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 hover:underline">$1</a>');
    return <span dangerouslySetInnerHTML={{ __html: line }} />;
  };
  
  lines.forEach((line, i) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ') || trimmedLine.startsWith('+ ')) {
      currentListItems.push(trimmedLine.substring(2));
    } else {
      flushList(`line-${i}`);
      if (trimmedLine) {
         elements.push(<p key={`p-${i}`} className="my-0.5">{parseLine(trimmedLine)}</p>);
      }
    }
  });

  flushList("final");

  if (elements.length === 0 && processedText.trim() !== "") {
     return <p className="my-0.5">{parseLine(processedText)}</p>;
  }
  
  // If elements array is empty but there was non-empty text (e.g. only spaces or newlines after processing)
  // return a single non-breaking space to maintain layout if needed, or null.
  return elements.length > 0 ? elements : null;
};

const BotAvatar: React.FC = () => (
  <div className="w-8 h-8 rounded-full bg-[#2d5a59] flex items-center justify-center text-white flex-shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.03 1.123 0 1.131.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5h7.5M8.25 7.5V9c0 .663-.162 1.294-.466 1.846-.459.839-1.207 1.44-2.034 1.753m7.5-3.592V9c0 .663.162 1.294.466 1.846.459.839 1.207 1.44 2.034 1.753M6.75 21a.75.75 0 0 0 .75-.75V18a2.25 2.25 0 0 1 2.25-2.25h3c1.24 0 2.25 1.01 2.25 2.25v2.25a.75.75 0 0 0 .75.75m-9-3h9M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  </div>
);

const UserAvatar: React.FC = () => (
  <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-slate-600 text-sm font-semibold flex-shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A18.75 18.75 0 0 1 12 22.5c-2.786 0-5.433-.608-7.499-1.688Z" />
    </svg>
  </div>
);

export const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  if (message.type === 'welcome') {
    return (
      <div className="text-center my-10 py-8">
        <h1 className="text-3xl font-bold text-slate-700 mb-3">Welcome to TriageFlow</h1>
        <p className="text-lg text-slate-500">Describe your symptoms or ask a question to start your triage.</p>
      </div>
    );
  }

  const isUser = message.sender === Sender.USER;

  const bubbleBaseStyles = "px-4 py-3 rounded-xl shadow-sm max-w-lg lg:max-w-xl break-words";
  const userBubbleStyles = `bg-[#1877f2] text-white ${bubbleBaseStyles}`;
  const botBubbleStyles = `bg-[#f0f2f5] text-slate-800 ${bubbleBaseStyles}`;

  const formattedContent = formatMarkdown(message.text);

  if (isUser) {
    return (
      <div className="flex justify-end items-start space-x-3 ml-10">
        <div className={userBubbleStyles}>
          <div className="prose prose-sm max-w-none text-white prose-strong:text-white prose-a:text-white hover:prose-a:underline">
             {formattedContent}
          </div>
          <p className="text-xs mt-1.5 text-sky-200 text-right">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
        <UserAvatar />
      </div>
    );
  }

  // Bot message
  return (
    <div className="flex justify-start items-start space-x-3 mr-10">
      <BotAvatar />
      <div className={botBubbleStyles}>
        <div className="prose prose-sm max-w-none text-slate-800 prose-strong:text-slate-900 prose-a:text-sky-700 hover:prose-a:underline">
           {formattedContent}
        </div>
        <p className="text-xs mt-1.5 text-slate-500 text-right">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};