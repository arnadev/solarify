import { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Our Projects' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Fixed hamburger button */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMenu}
          className="glass backdrop-blur-md shadow-soft hover:shadow-glow transition-all duration-500 border-primary/20 hover:border-primary/40"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Logo */}
      <div className="fixed top-6 left-20 z-40 flex items-center gap-2">
        <Sun className="h-6 w-6 text-primary animate-pulse" />
        <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Solarify</span>
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed inset-0 glass-dark backdrop-blur-xl z-40"
          >
            <motion.nav
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className="text-4xl md:text-6xl font-bold hover:text-primary transition-all duration-500 hover:scale-105 inline-block"
                    activeClassName="text-primary"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
