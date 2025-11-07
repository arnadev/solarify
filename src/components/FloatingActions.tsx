import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: Phone, label: 'Call Us', href: 'tel:+915551234567', color: 'bg-green-500' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@solarify.com', color: 'bg-blue-500' },
    { icon: ArrowUp, label: 'Scroll to Top', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }), color: 'bg-purple-500' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                {action.href ? (
                  <a href={action.href}>
                    <Button
                      size="lg"
                      className={`${action.color} text-white shadow-lg hover:scale-110 transition-transform group`}
                    >
                      <action.icon className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      {action.label}
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="lg"
                    onClick={action.onClick}
                    className={`${action.color} text-white shadow-lg hover:scale-110 transition-transform group`}
                  >
                    <action.icon className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                    {action.label}
                  </Button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all ${
          isOpen ? 'bg-red-500 rotate-45' : 'bg-gradient-solar'
        }`}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.button>
    </div>
  );
};
