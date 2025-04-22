import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(o => !o);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-yellow-500 text-white p-4 flex justify-between items-center">
              <h4 className="font-semibold">Chat with us</h4>
              <button onClick={toggleOpen} className="focus:outline-none">
                <FaTimes />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 p-4 overflow-auto">
              <p className="text-gray-500 text-sm">Hello! How can we help you today?</p>
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <form onSubmit={e => { e.preventDefault(); /* TODO: send message */ }}>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600 focus:outline-none"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        onClick={toggleOpen}
        className="w-14 h-14 bg-yellow-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-600 focus:outline-none"
      >
        <FaComments className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Chatbot;
