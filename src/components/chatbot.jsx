import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Bot,
  Minimize2,
  RotateCcw,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { findMatchingFAQ, quickReplies } from '../data/faqData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi 👋 I'm your Jharkhand Travel Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      showQuickReplies: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const simulateTyping = () => {
    setIsTyping(true);
    // Simulate bot typing delay
    setTimeout(() => {
      setIsTyping(false);
    }, 1500);
  };

  const addMessage = (text, sender = 'user', showQuickReplies = false) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender,
      timestamp: new Date(),
      showQuickReplies
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = (messageText = inputText) => {
    if (!messageText.trim()) return;

    // Add user message
    addMessage(messageText.trim(), 'user');
    setInputText('');

    // Simulate bot typing
    simulateTyping();

    // Find and add bot response
    setTimeout(() => {
      const matchedFAQ = findMatchingFAQ(messageText);
      const shouldShowQuickReplies = matchedFAQ.category === 'greeting' || 
                                   matchedFAQ.category === 'general';
      
      addMessage(matchedFAQ.response, 'bot', shouldShowQuickReplies);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi 👋 I'm your Jharkhand Travel Assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
        showQuickReplies: true
      }
    ]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // Don't render if not open
  if (!isOpen) {
    return (
      <div className="chatbot-container">
        {/* Floating Chat Button */}
        <button
          className="chatbot-float-btn btn btn-success rounded-circle shadow-lg"
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            zIndex: 1050,
            border: 'none'
          }}
        >
          <MessageCircle size={24} className="text-white" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            !
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      <div
        className={`chatbot-window position-fixed shadow-lg ${isMinimized ? 'minimized' : ''}`}
        style={{
          bottom: '20px',
          right: '20px',
          width: '350px',
          height: isMinimized ? '60px' : '500px',
          zIndex: 1050,
          backgroundColor: 'white',
          borderRadius: '1rem',
          border: '1px solid #dee2e6',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Chat Header */}
        <div 
          className="chatbot-header d-flex align-items-center justify-content-between p-3 text-white"
          style={{
            background: 'linear-gradient(135deg, #1b5e20, #4caf50)',
            borderRadius: '1rem 1rem 0 0'
          }}
        >
          <div className="d-flex align-items-center">
            <div 
              className="bot-avatar bg-white rounded-circle d-flex align-items-center justify-content-center me-2"
              style={{ width: '35px', height: '35px' }}
            >
              <Bot size={20} className="text-success" />
            </div>
            <div>
              <h6 className="mb-0 fw-bold">Travel Assistant</h6>
              <small style={{ opacity: 0.9 }}>
                {isTyping ? '⌨️ Typing...' : '🟢 Online'}
              </small>
            </div>
          </div>
          
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm text-white p-1"
              onClick={() => setIsMinimized(!isMinimized)}
              style={{ border: 'none', background: 'rgba(255,255,255,0.2)' }}
            >
              <Minimize2 size={16} />
            </button>
            <button
              className="btn btn-sm text-white p-1"
              onClick={resetChat}
              style={{ border: 'none', background: 'rgba(255,255,255,0.2)' }}
            >
              <RotateCcw size={16} />
            </button>
            <button
              className="btn btn-sm text-white p-1"
              onClick={() => setIsOpen(false)}
              style={{ border: 'none', background: 'rgba(255,255,255,0.2)' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        {!isMinimized && (
          <>
            <div
              className="chatbot-messages p-3"
              style={{
                height: '350px',
                overflowY: 'auto',
                backgroundColor: '#f8f9fa'
              }}
            >
              {messages.map((message) => (
                <div key={message.id} className="mb-3">
                  <div
                    className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                  >
                    <div
                      className={`message-bubble p-3 rounded-3 shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-success text-white'
                          : 'bg-white border'
                      }`}
                      style={{ 
                        maxWidth: '80%',
                        fontSize: '0.9rem',
                        lineHeight: '1.4'
                      }}
                    >
                      {/* Message Avatar */}
                      <div className={`d-flex align-items-start ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div
                          className={`avatar rounded-circle d-flex align-items-center justify-content-center ${
                            message.sender === 'user' ? 'ms-2' : 'me-2'
                          }`}
                          style={{
                            width: '25px',
                            height: '25px',
                            backgroundColor: message.sender === 'user' ? '#fff' : '#4caf50',
                            color: message.sender === 'user' ? '#4caf50' : '#fff'
                          }}
                        >
                          {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                        </div>
                        <div className="flex-grow-1">
                          <div 
                            className="message-text"
                            style={{ whiteSpace: 'pre-line' }}
                          >
                            {message.text}
                          </div>
                          <small 
                            className={`d-block mt-1 ${
                              message.sender === 'user' ? 'text-white-50' : 'text-muted'
                            }`}
                            style={{ fontSize: '0.7rem' }}
                          >
                            {formatTime(message.timestamp)}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Replies */}
                  {message.sender === 'bot' && message.showQuickReplies && (
                    <div className="mt-2">
                      <div className="d-flex flex-wrap gap-1">
                        {quickReplies.slice(0, 4).map((reply, index) => (
                          <button
                            key={index}
                            className="btn btn-outline-success btn-sm"
                            style={{ 
                              fontSize: '0.75rem',
                              borderRadius: '1rem'
                            }}
                            onClick={() => handleQuickReply(reply)}
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="d-flex justify-content-start mb-3">
                  <div className="bg-white border p-3 rounded-3 shadow-sm">
                    <div className="d-flex align-items-center">
                      <Bot size={12} className="text-success me-2" />
                      <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="chatbot-input p-3 border-top">
              <div className="input-group">
                <input
                  ref={inputRef}
                  type="text"
                  className="form-control border-0"
                  placeholder="Type your message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  style={{ 
                    backgroundColor: '#f8f9fa',
                    borderRadius: '2rem 0 0 2rem'
                  }}
                />
                <button
                  className="btn btn-success"
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  style={{ borderRadius: '0 2rem 2rem 0' }}
                >
                  <Send size={16} />
                </button>
              </div>
              
              {/* Powered by indicator */}
              <div className="text-center mt-2">
                <small className="text-muted" style={{ fontSize: '0.7rem' }}>
                  Powered by EcoJharkhand AI 🤖
                </small>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Floating Chat Button (when window is open but minimized) */}
      {isMinimized && (
        <button
          className="chatbot-float-btn btn btn-success rounded-circle shadow-lg"
          onClick={() => setIsMinimized(false)}
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '60px',
            height: '60px',
            zIndex: 1049,
            border: 'none'
          }}
        >
          <MessageCircle size={24} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;