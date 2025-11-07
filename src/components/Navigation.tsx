import { useState, useEffect } from 'react';
import { Menu, X, Sun, Sparkles, Zap } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { to: '/', label: 'Home', icon: Sparkles },
    { to: '/projects', label: 'Our Projects', icon: Zap },
    { to: '/about', label: 'About Us', icon: Sun },
    { to: '/contact', label: 'Contact', icon: Menu },
  ];

  return (
    <>
      {/* Fixed navigation bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass backdrop-blur-xl shadow-lg border-b border-primary/10' : ''
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sun className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="font-bold text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Solarify
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10 flex items-center gap-2 group"
                activeClassName="bg-primary/20 text-primary"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {item.label}
              </NavLink>
            ))}
            <Button 
              size="sm" 
              className="ml-4 group"
            >
              Get Started
              <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </Button>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 glass-dark backdrop-blur-xl z-40 md:hidden"
            onClick={closeMenu}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-background border-l border-primary/20 p-8 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={closeMenu}
                      className="flex items-center gap-3 text-xl font-medium py-3 px-4 rounded-lg hover:bg-primary/10 transition-all group"
                      activeClassName="bg-primary/20 text-primary"
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <Button className="mt-6 w-full group">
                  Get Started
                  <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
