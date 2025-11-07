import { motion } from 'framer-motion';

export const ProjectCardSkeleton = () => {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-soft">
      <motion.div
        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="h-64 bg-gradient-to-r from-muted via-muted/50 to-muted"
        style={{ backgroundSize: '200% 100%' }}
      />
      <div className="p-6 space-y-4">
        <motion.div
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="h-6 bg-gradient-to-r from-muted via-muted/50 to-muted rounded w-3/4"
          style={{ backgroundSize: '200% 100%' }}
        />
        <motion.div
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.1 }}
          className="h-4 bg-gradient-to-r from-muted via-muted/50 to-muted rounded w-1/2"
          style={{ backgroundSize: '200% 100%' }}
        />
        <motion.div
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.2 }}
          className="h-4 bg-gradient-to-r from-muted via-muted/50 to-muted rounded w-1/3"
          style={{ backgroundSize: '200% 100%' }}
        />
      </div>
    </div>
  );
};

export const StatCardSkeleton = () => {
  return (
    <div className="bg-card rounded-2xl p-6 text-center shadow-soft">
      <motion.div
        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-10 h-10 mx-auto mb-4 rounded-xl bg-gradient-to-r from-muted via-muted/50 to-muted"
        style={{ backgroundSize: '200% 100%' }}
      />
      <motion.div
        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.1 }}
        className="h-8 bg-gradient-to-r from-muted via-muted/50 to-muted rounded mx-auto mb-2 w-24"
        style={{ backgroundSize: '200% 100%' }}
      />
      <motion.div
        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.2 }}
        className="h-4 bg-gradient-to-r from-muted via-muted/50 to-muted rounded mx-auto w-32"
        style={{ backgroundSize: '200% 100%' }}
      />
    </div>
  );
};
