import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const ErrorModal = ({ isOpen, onClose, title, message }: ErrorModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-amber-200">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 px-6 py-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-amber-800">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-700 leading-relaxed">{message}</p>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 px-6 py-4 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ErrorModal;
