import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ChatWindow } from './components/ChatWindow';
import { ChatInput } from './components/ChatInput';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Message, Sender } from './types';
import { generateGuidance } from './services/geminiService';
import { APP_TITLE } from './constants';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial-welcome-message',
      type: 'welcome',
      sender: Sender.BOT,
      timestamp: new Date(),
      text: '', // Welcome message text is handled by ChatMessage component
    }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = useCallback(async (inputText: string) => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      text: inputText,
      sender: Sender.USER,
      timestamp: new Date(),
      type: 'chat',
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const botResponseText = await generateGuidance(inputText);
      const botMessage: Message = {
        id: Date.now().toString() + '-bot',
        text: botResponseText,
        sender: Sender.BOT,
        timestamp: new Date(),
        type: 'chat',
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (err) {
      console.error("Error fetching guidance:", err);
      const errorMessageText = err instanceof Error ? err.message : "An unknown error occurred. Please try again.";
      setError(errorMessageText);
      const errorBotMessage: Message = {
        id: Date.now().toString() + '-error',
        text: `Sorry, I encountered an error: ${errorMessageText}`,
        sender: Sender.BOT,
        timestamp: new Date(),
        type: 'chat',
      };
      setMessages(prevMessages => [...prevMessages, errorBotMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    // Main chat card container - updated for computer screen dimensions
    <div className="bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] w-full max-w-5xl h-[calc(100vh-6rem)] max-h-[850px] flex flex-col overflow-hidden m-auto">
      <Header title={APP_TITLE} />
      <ChatWindow messages={messages} />
      {isLoading && (
        <div className="flex justify-center py-2 px-4 border-t border-slate-100">
          <LoadingSpinner />
        </div>
      )}
      {error && (
        <div className="p-3 text-center text-red-700 bg-red-100 border-t border-red-200 text-sm">
          <strong>Error:</strong> {error}
        </div>
      )}
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default App;