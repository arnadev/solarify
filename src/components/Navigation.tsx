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
          className="bg-background/95 backdrop-blur-sm shadow-soft hover:shadow-glow transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Logo */}
      <div className="fixed top-6 left-20 z-40 flex items-center gap-2">
        <Sun className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl">Solarify</span>
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-md z-40"
          >
            <motion.nav
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className="text-5xl md:text-7xl font-bold hover:text-primary transition-colors"
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
