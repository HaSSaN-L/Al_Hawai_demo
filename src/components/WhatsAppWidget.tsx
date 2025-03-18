import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      window.open(`https://wa.me/971551230584?text=${encodeURIComponent(message)}`, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg mb-4 w-[320px] overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-green-100 mt-1">We'll reply as soon as possible</p>
          </div>

          {/* Chat Area */}
          <div className="p-4 bg-gray-50">
            <div className="bg-green-100 rounded-lg p-3 text-gray-700 text-sm">
              Hello! How can we assist you today?
            </div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;