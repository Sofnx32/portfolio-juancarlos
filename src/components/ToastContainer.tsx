import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import type { Toast } from '../hooks/useToast';

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export const ToastContainer = ({ toasts, onRemove }: ToastContainerProps) => {
  const getIcon = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Info className="w-5 h-5 text-[#433bff]" />;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-[1000] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0a0820]/80 backdrop-blur-md border border-[#2f27ce]/30 rounded-xl px-6 py-4 min-w-[300px] max-w-[400px] flex items-center gap-3 pointer-events-all"
          >
            {getIcon(toast.type)}
            <span className="flex-1 text-sm text-white">{toast.message}</span>
            <button
              onClick={() => onRemove(toast.id)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};