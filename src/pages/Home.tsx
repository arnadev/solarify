import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Leaf, Sun, Wind, Battery, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ParticleBackground } from '@/components/ParticleBackground';
import { FloatingActions } from '@/components/FloatingActions';
import communityImage from '@/assets/community-solar.jpg';
import heroImage from '@/assets/hero-sunrise-city.jpg';

// Animation variants for staggered reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1] as any,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.34, 1.56, 0.64, 1] as any,
    },
  },
};

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 12500, label: 'Homes Powered', icon: Users, suffix: '+' },
    { value: 45000, label: 'Tons CO₂ Saved', icon: Leaf, suffix: '' },
    { value: 85, label: 'MW Capacity', icon: Zap, suffix: '' },
  ];

  const philosophy = [
    {
      icon: Sun,
      title: 'Energy in Communities',
      description: 'Local renewable energy that powers your neighborhood and supports your community.',
    },
    {
      icon: Battery,
      title: 'Works Day and Night',
      description: 'Advanced battery storage means clean energy even when the sun sets and wind calms.',
    },
    {
      icon: Wind,
      title: 'The Future is Renewable',
      description: 'Sooner or later, the world will move to renewables. Why not make it sooner?',
    },
  ];

  const testimonials = [
    {
      quote: "Switching to Solarify was the best decision for our family. Clean energy and lower bills!",
      author: "Sarah Mitchell",
      location: "Portland, OR",
    },
    {
      quote: "I love knowing our business runs on 100% renewable energy. It's good for the planet and our brand.",
      author: "Marcus Chen",
      location: "Austin, TX",
    },
    {
      quote: "The installation was seamless, and our energy costs dropped immediately. Highly recommend!",
      author: "Emily Rodriguez",
      location: "Denver, CO",
    },
  ];

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty('--mouse-x', `${x}%`);
    ref.current.style.setProperty('--mouse-y', `${y}%`);
    
    const centerX = e.clientX - rect.left - rect.width / 2;
    const centerY = e.clientY - rect.top - rect.height / 2;
    const rotateX = (centerY / rect.height) * -10;
    const rotateY = (centerX / rect.width) * 10;
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    element.style.setProperty('--mouse-x', `${x}%`);
    element.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleCardMouseLeave = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const handleSimpleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    element.style.setProperty('--mouse-x', `${x}%`);
    element.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleSimpleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    element.style.setProperty('--mouse-x', `${x}%`);
    element.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div className="overflow-x-hidden relative">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Action Buttons */}
      <FloatingActions />
      
      {/* Hero Section with Sunrise Animation */}
      <motion.section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'blur(4px)',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/70" />

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl"
          />
        </div>
        
        {/* Animated Sun Icon */}
        <div className="absolute top-1/4 right-1/4 hidden lg:block">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity },
            }}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          {/* Badge with animated icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powering Tomorrow, Today
            </span>
          </motion.div>

          {/* Main Headline with animated icons */}
          <div className="mb-8 relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-0 hidden xl:block"
            >
              <Sun className="w-16 h-16 text-primary/30" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-8 top-0 hidden xl:block"
            >
              <Wind className="w-16 h-16 text-accent/30" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
              Clean Energy for
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Everyone
                </span>
                <motion.div
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                />
              </span>
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl mx-auto text-balance leading-relaxed"
          >
            Access clean, renewable energy from local solar and wind farms—no rooftop installation needed. 
            <span className="font-semibold text-foreground"> Save money while saving the planet.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-2xl px-8 py-6 text-lg">
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-primary/5">
                <Leaf className="mr-2 h-5 w-5" />
                See Our Impact
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
            className="mt-16 flex flex-wrap gap-8 justify-center items-center text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
              </motion.div>
              <span>50,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
              </motion.div>
              <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">200+ MW</span>
              <span className="text-foreground/80">Clean Energy Generated</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
              </motion.div>
              <span>100% Renewable Sources</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Solarify Section - Redesigned */}
      <section className="py-32 md:py-40 bg-vibrant-purple relative overflow-hidden">
        {/* Decorative floating elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
        />
        
        {/* Off-grid geometric illustration */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -45 }}
          whileInView={{ opacity: 0.15, x: -50, rotate: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute -left-20 top-1/4 w-80 h-80 pointer-events-none hidden xl:block"
        >
          <div className="relative w-full h-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-secondary/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border-4 border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
            />
          </div>
        </motion.div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:pr-8"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sun className="w-5 h-5 text-secondary" />
                </motion.div>
                <span className="text-sm font-bold text-secondary uppercase tracking-wider">Who We Are</span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Democratizing Clean Energy
              </motion.h2>
              
              <motion.div variants={textVariants} className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Solarify makes renewable energy accessible to everyone</span>—not just those with rooftops or upfront capital. We own and operate solar and wind farms that power entire communities.
                </p>
                <p>
                  Instead of installing panels on your roof, you simply subscribe to clean energy from our local farms. 
                  <span className="font-semibold text-foreground"> It's renewable energy made simple.</span>
                </p>
                <p className="text-secondary font-medium">
                  Join 50,000+ customers who've already made the switch.
                </p>
              </motion.div>

              {/* Key benefits */}
              <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Zap, text: "No Installation Required", color: "text-primary" },
                  { icon: TrendingUp, text: "Lower Energy Bills", color: "text-accent" },
                  { icon: Leaf, text: "100% Clean Energy", color: "text-green-600" },
                  { icon: Users, text: "Support Local Jobs", color: "text-secondary" },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br from-white to-primary/20 flex items-center justify-center ${benefit.color}`}
                    >
                      <benefit.icon className="w-5 h-5" />
                    </motion.div>
                    <span className="font-medium text-foreground text-sm">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Element - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any }}
              className="relative"
            >
              <div className="bg-gradient-solar rounded-3xl p-8 md:p-12 shadow-glow">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Sun, label: 'Solar' },
                    { icon: Wind, label: 'Wind' },
                    { icon: Battery, label: 'Storage' },
                    { icon: Leaf, label: 'Eco-Friendly' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center bento-fill-small bento-fill-purple">
                      <item.icon className="w-10 h-10 mx-auto mb-3 text-white" />
                      <p className="text-white font-semibold">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Standalone Solar Panel Illustration */}
      <div className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <svg viewBox="0 0 800 300" className="w-full h-auto">
              {/* Solar Panel Grid */}
              {[0, 1, 2].map((row) =>
                [0, 1, 2, 3, 4, 5].map((col) => {
                  const x = 50 + col * 120;
                  const y = 50 + row * 80;
                  return (
                    <motion.g key={`panel-${row}-${col}`}>
                      {/* Panel Base */}
                      <motion.rect
                        x={x}
                        y={y}
                        width="100"
                        height="60"
                        fill="url(#solarGradient)"
                        stroke="rgb(14 165 233)"
                        strokeWidth="2"
                        rx="4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (row * 6 + col) * 0.05 }}
                      />
                      
                      {/* Panel Grid Lines */}
                      <motion.line
                        x1={x + 50}
                        y1={y}
                        x2={x + 50}
                        y2={y + 60}
                        stroke="rgb(14 165 233)"
                        strokeWidth="1"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (row * 6 + col) * 0.05 + 0.2 }}
                      />
                      <motion.line
                        x1={x}
                        y1={y + 30}
                        x2={x + 100}
                        y2={y + 30}
                        stroke="rgb(14 165 233)"
                        strokeWidth="1"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (row * 6 + col) * 0.05 + 0.3 }}
                      />
                      
                      {/* Energy Pulse */}
                      <motion.circle
                        cx={x + 50}
                        cy={y + 30}
                        r="3"
                        fill="rgb(234 179 8)"
                        animate={{
                          scale: [0, 1.5, 0],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: (row * 6 + col) * 0.1,
                        }}
                      />
                    </motion.g>
                  );
                })
              )}
              
              {/* Sun Icon */}
              <motion.g
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.circle
                  cx="750"
                  cy="50"
                  r="25"
                  fill="rgb(234 179 8)"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <motion.line
                    key={angle}
                    x1="750"
                    y1="50"
                    x2={750 + Math.cos((angle * Math.PI) / 180) * 40}
                    y2={50 + Math.sin((angle * Math.PI) / 180) * 40}
                    stroke="rgb(234 179 8)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: angle / 360,
                    }}
                  />
                ))}
              </motion.g>
              
              {/* Energy Flow Arrow */}
              <motion.path
                d="M 700,130 L 750,130 L 740,120 M 750,130 L 740,140"
                stroke="rgb(16 185 129)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="solarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(14 165 233)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Our Impact Section - Redesigned */}
      <section className="py-32 md:py-48 bg-gradient-to-br from-bold-teal to-primary/10 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        
        {/* Off-grid polygon illustration */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 bottom-0 w-[600px] h-[600px] pointer-events-none hidden lg:block"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.polygon
              points="100,10 40,60 10,130 80,180 160,160 190,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            />
            <motion.polygon
              points="100,30 50,70 30,130 90,170 150,155 170,95"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="5"
              className="fill-primary/40"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <TrendingUp className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Real Impact, Real Numbers</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4">
              Powering Communities,
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transforming Lives
              </span>
            </motion.h2>
            
            <motion.p variants={textVariants} className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              These aren't just numbers—they represent real homes, real savings, and a real commitment to a cleaner future.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => {
              const cardRef = useRef<HTMLDivElement>(null);
              return (
                <motion.div
                  key={stat.label}
                  ref={cardRef}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div
                    className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-soft hover:shadow-2xl transition-all duration-500 cursor-pointer bento-fill bento-fill-teal border border-white/60"
                    onMouseMove={(e) => handleCardMouseMove(e, cardRef)}
                    onMouseEnter={handleCardMouseEnter}
                    onMouseLeave={() => handleCardMouseLeave(cardRef)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        decimals={0}
                      />
                    </div>
                    
                    <div className="text-lg font-semibold text-foreground/80">{stat.label}</div>
                    
                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      className="mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto w-16"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Standalone Wind Turbine Illustration */}
      <div className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <svg viewBox="0 0 900 400" className="w-full h-auto">
              {/* Three Wind Turbines */}
              {[200, 450, 700].map((xPos, index) => (
                <motion.g
                  key={`turbine-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Tower */}
                  <motion.path
                    d={`M ${xPos},350 L ${xPos - 10},150 L ${xPos + 10},150 Z`}
                    fill="rgb(100 116 139)"
                    stroke="rgb(71 85 105)"
                    strokeWidth="2"
                  />
                  
                  {/* Hub */}
                  <circle cx={xPos} cy="150" r="12" fill="rgb(71 85 105)" />
                  
                  {/* Blades - Rotating */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4 - index * 0.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: `${xPos}px 150px` }}
                  >
                    {[0, 120, 240].map((angle) => {
                      const radian = (angle * Math.PI) / 180;
                      const bladeLength = 80;
                      const x1 = xPos + Math.cos(radian) * 12;
                      const y1 = 150 + Math.sin(radian) * 12;
                      const x2 = xPos + Math.cos(radian) * bladeLength;
                      const y2 = 150 + Math.sin(radian) * bladeLength;
                      
                      return (
                        <motion.path
                          key={angle}
                          d={`M ${x1},${y1} Q ${x1 + Math.cos(radian + 0.3) * (bladeLength / 2)},${
                            y1 + Math.sin(radian + 0.3) * (bladeLength / 2)
                          } ${x2},${y2} Q ${x1 + Math.cos(radian - 0.3) * (bladeLength / 2)},${
                            y1 + Math.sin(radian - 0.3) * (bladeLength / 2)
                          } ${x1},${y1} Z`}
                          fill="white"
                          stroke="rgb(14 165 233)"
                          strokeWidth="2"
                        />
                      );
                    })}
                  </motion.g>
                  
                  {/* Energy Output Indicator */}
                  <motion.circle
                    cx={xPos}
                    cy="150"
                    r="20"
                    fill="none"
                    stroke="rgb(16 185 129)"
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.g>
              ))}
              
              {/* Ground Line */}
              <motion.line
                x1="50"
                y1="350"
                x2="850"
                y2="350"
                stroke="rgb(100 116 139)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
              
              {/* Energy Flow Lines */}
              {[200, 450, 700].map((xPos, index) => (
                <motion.path
                  key={`flow-${index}`}
                  d={`M ${xPos},350 Q ${xPos + 50},300 ${xPos + 100},350`}
                  stroke="rgb(234 179 8)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              ))}
              
              {/* Power Stats */}
              <motion.g
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <text x="450" y="50" textAnchor="middle" className="font-bold">
                  <tspan className="text-4xl fill-foreground">200+ MW</tspan>
                </text>
                <text x="450" y="85" textAnchor="middle">
                  <tspan className="text-xl fill-muted-foreground">Clean Wind Energy</tspan>
                </text>
              </motion.g>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Our Philosophy Section - Redesigned */}
      <section className="py-32 md:py-44 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        {/* Off-grid abstract wave illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl pointer-events-none"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <motion.path
              d="M 50 200 Q 100 100 150 200 T 250 200 T 350 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
              animate={{ 
                d: [
                  "M 50 200 Q 100 100 150 200 T 250 200 T 350 200",
                  "M 50 200 Q 100 300 150 200 T 250 200 T 350 200",
                  "M 50 200 Q 100 100 150 200 T 250 200 T 350 200"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M 50 220 Q 100 120 150 220 T 250 220 T 350 220"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-accent"
              animate={{ 
                d: [
                  "M 50 220 Q 100 120 150 220 T 250 220 T 350 220",
                  "M 50 220 Q 100 320 150 220 T 250 220 T 350 220",
                  "M 50 220 Q 100 120 150 220 T 250 220 T 350 220"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Sticky Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Leaf className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Our Values</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built on Principles That
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Matter
                </span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                These core beliefs guide every decision we make and every project we build.
              </p>
            </motion.div>

            {/* Right Side - Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:col-span-8 space-y-6"
            >
              {philosophy.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className={`p-6 rounded-2xl transition-all duration-500 bento-fill group cursor-pointer ${
                    index === 0 ? 'bg-bold-purple bento-fill-purple' : 
                    index === 1 ? 'bg-bold-orange bento-fill-orange' : 
                    'bg-bold-green bento-fill-green'
                  }`}
                  onMouseMove={handleSimpleMouseMove}
                  onMouseEnter={handleSimpleMouseEnter}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-accent flex items-center justify-center shadow-soft bento-fill-small ${
                        index === 0 ? 'bento-fill-purple' : 
                        index === 1 ? 'bento-fill-orange' : 
                        'bento-fill-green'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Interactive Timeline */}
      <section className="py-32 md:py-40 bg-vibrant-orange relative overflow-hidden">
        {/* Off-grid lightning bolt illustration */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          whileInView={{ opacity: 0.12, x: 0, rotate: -15 }}
          transition={{ duration: 1.2 }}
          className="absolute right-10 top-20 w-64 h-64 pointer-events-none hidden xl:block"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M 50 10 L 35 45 L 50 45 L 30 85 L 60 50 L 45 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-orange-600/40"
              animate={{ 
                strokeDasharray: ["0 200", "200 0"],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                strokeDasharray: { duration: 3, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity }
              }}
            />
          </svg>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-5 h-5 text-orange-800" />
              </motion.div>
              <span className="text-sm font-semibold text-orange-800 uppercase tracking-wider">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-foreground/80">
              Your journey to clean energy in three simple steps
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative space-y-8"
          >
            {/* Timeline connector line */}
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-full hidden lg:block" />
            
            {[
              {
                step: '01',
                title: 'Sign Up',
                description: 'Join the Solarify network with a simple online enrollment. No installation needed at your property.',
                icon: 'UserPlus',
              },
              {
                step: '02',
                title: 'We Generate',
                description: 'Our solar and wind farms produce clean energy that feeds directly into your local grid.',
                icon: 'Zap',
              },
              {
                step: '03',
                title: 'You Save',
                description: 'Enjoy lower energy bills while supporting renewable energy in your community.',
                icon: 'TrendingDown',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`group relative ${
                  index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-32'
                }`}
              >
                <div className="flex gap-6 items-start">
                  {/* Step Number with pulse animation */}
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-16 h-16 rounded-2xl bg-white text-orange-600 flex items-center justify-center font-bold text-2xl shadow-lg relative z-10"
                    >
                      {item.step}
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute inset-0 bg-orange-400 rounded-2xl"
                    />
                  </div>
                  
                  {/* Content Card with enhanced hover */}
                  <motion.div
                    whileHover={{ boxShadow: "0 20px 60px rgba(249, 115, 22, 0.3)" }}
                    className="flex-1 p-6 rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-500 bento-fill bento-fill-orange"
                    onMouseMove={handleSimpleMouseMove}
                    onMouseEnter={handleSimpleMouseEnter}
                  >
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Standalone Energy Storage/Battery Illustration */}
      <div className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <svg viewBox="0 0 800 350" className="w-full h-auto">
              {/* Battery Container */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Battery Body */}
                <rect
                  x="200"
                  y="100"
                  width="400"
                  height="200"
                  rx="20"
                  fill="none"
                  stroke="rgb(14 165 233)"
                  strokeWidth="4"
                />
                
                {/* Battery Terminal */}
                <rect
                  x="600"
                  y="140"
                  width="40"
                  height="120"
                  rx="5"
                  fill="rgb(100 116 139)"
                  stroke="rgb(71 85 105)"
                  strokeWidth="2"
                />
                
                {/* Charging Fill Animation */}
                <motion.rect
                  x="210"
                  y="110"
                  width="380"
                  height="180"
                  rx="15"
                  fill="url(#batteryGradient)"
                  initial={{ height: 0, y: 290 }}
                  animate={{
                    height: [0, 180, 180, 0],
                    y: [290, 110, 110, 290],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Energy Level Indicators */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.line
                    key={i}
                    x1="220"
                    y1={150 + i * 50}
                    x2="580"
                    y2={150 + i * 50}
                    stroke="rgb(148 163 184)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.3"
                  />
                ))}
              </motion.g>
              
              {/* Lightning Bolt - Charging Symbol */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.path
                  d="M 400,150 L 360,200 L 390,200 L 370,250 L 410,200 L 380,200 Z"
                  fill="rgb(234 179 8)"
                  stroke="rgb(202 138 4)"
                  strokeWidth="2"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.g>
              
              {/* Energy Particles */}
              {[...Array(20)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={220 + (i % 10) * 36}
                  cy={120 + Math.floor(i / 10) * 80}
                  r="4"
                  fill="rgb(16 185 129)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
              
              {/* Solar/Wind Input */}
              <motion.g
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {/* Sun */}
                <circle cx="100" cy="150" r="30" fill="rgb(234 179 8)" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="100"
                    y1="150"
                    x2={100 + Math.cos((angle * Math.PI) / 180) * 45}
                    y2={150 + Math.sin((angle * Math.PI) / 180) * 45}
                    stroke="rgb(234 179 8)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                ))}
                
                {/* Wind */}
                <path
                  d="M 80,240 Q 90,235 100,240 M 70,260 Q 85,253 100,260 M 75,280 Q 90,272 105,280"
                  stroke="rgb(14 165 233)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.g>
              
              {/* Power Output */}
              <motion.g
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {/* House/Grid */}
                <path
                  d="M 680,170 L 730,120 L 780,170 L 780,240 L 680,240 Z"
                  fill="none"
                  stroke="rgb(16 185 129)"
                  strokeWidth="3"
                />
                <rect x="700" y="190" width="30" height="40" fill="rgb(234 179 8)" opacity="0.6" />
                <rect x="740" y="190" width="30" height="40" fill="rgb(234 179 8)" opacity="0.6" />
              </motion.g>
              
              {/* Energy Flow Arrows */}
              <motion.path
                d="M 150,200 L 190,200 M 180,190 L 190,200 L 180,210"
                stroke="rgb(16 185 129)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <motion.path
                d="M 610,200 L 670,200 M 660,190 L 670,200 L 660,210"
                stroke="rgb(16 185 129)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="batteryGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="rgb(14 165 233)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section - Masonry Layout */}
      <section className="py-32 md:py-40 bg-vibrant-green relative overflow-hidden">
        {/* Off-grid speech bubble illustrations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-10 bottom-20 w-48 h-48 pointer-events-none hidden lg:block"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.circle
              cx="50"
              cy="40"
              r="35"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-green-600/40"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.polygon
              points="45,70 35,90 55,75"
              fill="currentColor"
              className="text-green-600/40"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Quote marks */}
            <text x="35" y="50" className="text-3xl fill-green-600/40 font-bold">"</text>
          </svg>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-green-800" />
              <span className="text-sm font-semibold text-green-800 uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What Our Customers Say
            </h2>
            <p className="text-lg text-foreground/80">
              Real stories from the Solarify community
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5,
                  z: 50,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bento-fill bento-fill-green ${
                  index === 1 ? 'lg:mt-8' : index === 2 ? 'lg:mt-16' : ''
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                onMouseMove={handleSimpleMouseMove}
                onMouseEnter={handleSimpleMouseEnter}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-4"
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="w-4 h-4 fill-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
                <p className="text-base mb-5 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-semibold text-sm">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial.location}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Environmental Benefits Section - Split Layout */}
      <section className="relative py-32 md:py-44 bg-vibrant-blue overflow-hidden">
        {/* Organic Leaf/Plant Illustration */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none hidden xl:block opacity-10">
          <motion.svg
            viewBox="0 0 400 400"
            className="w-full h-full"
          >
            {/* Main Leaf */}
            <motion.path
              d="M200,100 Q250,150 240,220 Q235,260 200,300 Q165,260 160,220 Q150,150 200,100 Z"
              fill="none"
              stroke="rgb(22 163 74)"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            {/* Leaf Veins */}
            <motion.path
              d="M200,120 L200,280"
              stroke="rgb(22 163 74)"
              strokeWidth="2"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
            />
            <motion.path
              d="M200,150 Q220,170 215,190"
              stroke="rgb(22 163 74)"
              strokeWidth="1.5"
              opacity="0.25"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            />
            <motion.path
              d="M200,150 Q180,170 185,190"
              stroke="rgb(22 163 74)"
              strokeWidth="1.5"
              opacity="0.25"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
            />
            {/* Small Leaves */}
            <motion.ellipse
              cx="140"
              cy="200"
              rx="20"
              ry="35"
              fill="rgb(34 197 94)"
              opacity="0.2"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            />
            <motion.ellipse
              cx="260"
              cy="180"
              rx="18"
              ry="30"
              fill="rgb(22 163 74)"
              opacity="0.2"
              animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
            />
          </motion.svg>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side - Visual/Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
              className="lg:col-span-5"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <Leaf className="w-16 h-16 text-green-600 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Making a Real Impact</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">Clean Energy Generated</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-secondary mb-2">99%</div>
                    <div className="text-muted-foreground">Less Water Usage</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-accent mb-2">85%</div>
                    <div className="text-muted-foreground">Land Preserved</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-blue-800" />
                <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">Environmental Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Environmental Benefits
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Every kilowatt-hour from renewable sources makes a difference
              </p>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="space-y-4"
              >
                {[
                  {
                    title: 'Zero Emissions',
                    description: 'Our solar and wind farms produce electricity without releasing any greenhouse gases or air pollutants.',
                  },
                  {
                    title: 'Water Conservation',
                    description: 'Unlike fossil fuel plants, our renewable installations require virtually no water to generate power.',
                  },
                  {
                    title: 'Wildlife Protection',
                    description: 'We design our farms to minimize environmental impact and protect local ecosystems and wildlife.',
                  },
                  {
                    title: 'Land Efficiency',
                    description: 'Renewable energy sites can coexist with agriculture and natural habitats through careful planning.',
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    variants={itemVariants}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg transition-all duration-500 bento-fill bento-fill-blue"
                    onMouseMove={handleSimpleMouseMove}
                    onMouseEnter={handleSimpleMouseEnter}
                  >
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="py-16 bg-vibrant-pink">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any }}
            className="rounded-3xl overflow-hidden shadow-glow"
          >
            <img src={communityImage} alt="Community powered by solar" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Standalone Electric Vehicle Charging Illustration */}
      <div className="py-24 bg-vibrant-pink relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <svg viewBox="0 0 700 300" className="w-full h-auto">
              {/* Electric Car */}
              <motion.g
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
              >
                {/* Car Body */}
                <path
                  d="M 150,180 L 180,140 L 280,140 L 310,180 Z"
                  fill="rgb(14 165 233)"
                  stroke="rgb(3 105 161)"
                  strokeWidth="2"
                />
                <rect
                  x="120"
                  y="180"
                  width="220"
                  height="40"
                  rx="5"
                  fill="rgb(14 165 233)"
                  stroke="rgb(3 105 161)"
                  strokeWidth="2"
                />
                
                {/* Windows */}
                <path
                  d="M 190,145 L 200,155 L 250,155 L 260,145 Z"
                  fill="rgb(186 230 253)"
                  opacity="0.6"
                />
                
                {/* Wheels */}
                <circle cx="170" cy="220" r="20" fill="rgb(71 85 105)" />
                <circle cx="170" cy="220" r="12" fill="rgb(148 163 184)" />
                <circle cx="290" cy="220" r="20" fill="rgb(71 85 105)" />
                <circle cx="290" cy="220" r="12" fill="rgb(148 163 184)" />
                
                {/* Electric Symbol on Car */}
                <motion.path
                  d="M 230,185 L 220,200 L 228,200 L 218,215 L 238,200 L 230,200 Z"
                  fill="rgb(234 179 8)"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.g>
              
              {/* Charging Station */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {/* Station Pole */}
                <rect
                  x="380"
                  y="120"
                  width="40"
                  height="120"
                  rx="5"
                  fill="rgb(100 116 139)"
                  stroke="rgb(71 85 105)"
                  strokeWidth="2"
                />
                
                {/* Display Screen */}
                <rect
                  x="385"
                  y="130"
                  width="30"
                  height="40"
                  rx="3"
                  fill="rgb(16 185 129)"
                />
                
                {/* Charging Cable */}
                <motion.path
                  d="M 380,180 Q 360,190 340,200"
                  stroke="rgb(234 179 8)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  animate={{
                    d: [
                      "M 380,180 Q 360,190 340,200",
                      "M 380,180 Q 360,185 340,200",
                      "M 380,180 Q 360,190 340,200",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                {/* Plug */}
                <circle cx="340" cy="200" r="8" fill="rgb(234 179 8)" stroke="rgb(202 138 4)" strokeWidth="2" />
              </motion.g>
              
              {/* Energy Flow Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx="380"
                  cy="180"
                  r="3"
                  fill="rgb(16 185 129)"
                  initial={{ opacity: 0 }}
                  animate={{
                    x: [-40, -100],
                    y: [0, 20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                />
              ))}
              
              {/* Solar Panel Connection */}
              <motion.g
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {/* Solar Panel */}
                <rect
                  x="500"
                  y="100"
                  width="120"
                  height="80"
                  rx="5"
                  fill="url(#solarGradient2)"
                  stroke="rgb(14 165 233)"
                  strokeWidth="2"
                />
                
                {/* Panel Grid */}
                <line x1="560" y1="100" x2="560" y2="180" stroke="rgb(14 165 233)" strokeWidth="1" opacity="0.3" />
                <line x1="500" y1="140" x2="620" y2="140" stroke="rgb(14 165 233)" strokeWidth="1" opacity="0.3" />
                
                {/* Connection Line to Charger */}
                <motion.path
                  d="M 560,180 L 560,200 L 420,200 L 420,180"
                  stroke="rgb(16 185 129)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{
                    strokeDashoffset: [0, -10],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.g>
              
              {/* Sun for Solar Panel */}
              <motion.g
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "620px 60px" }}
              >
                <circle cx="620" cy="60" r="20" fill="rgb(234 179 8)" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="620"
                    y1="60"
                    x2={620 + Math.cos((angle * Math.PI) / 180) * 30}
                    y2={60 + Math.sin((angle * Math.PI) / 180) * 30}
                    stroke="rgb(234 179 8)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ))}
              </motion.g>
              
              {/* Charging Status */}
              <motion.text
                x="350"
                y="50"
                textAnchor="middle"
                className="fill-primary font-bold text-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <tspan className="text-3xl">Clean Energy</tspan>
                <tspan x="350" y="80" className="text-xl opacity-70">Powers Everything</tspan>
              </motion.text>
              
              {/* Charging Percentage */}
              <motion.text
                x="400"
                y="155"
                textAnchor="middle"
                className="fill-accent font-bold text-lg"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                ⚡ 85%
              </motion.text>
              
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="solarGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(14 165 233)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* CTA Section - Enhanced Center Layout with Ripple Effect */}
      <section className="relative py-32 md:py-48 bg-background overflow-hidden">
        {/* Energy Burst Illustration */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none hidden xl:block">
          <motion.svg
            viewBox="0 0 400 400"
            className="w-full h-full opacity-8"
          >
            {/* Radiating Energy Lines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.line
                key={angle}
                x1="200"
                y1="200"
                x2={200 + Math.cos((angle * Math.PI) / 180) * 150}
                y2={200 + Math.sin((angle * Math.PI) / 180) * 150}
                stroke="rgb(14 165 233)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.4, 0]
                }}
                transition={{ 
                  duration: 3, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
            
            {/* Pulsing Center Circle */}
            <motion.circle
              cx="200"
              cy="200"
              r="20"
              fill="rgb(14 165 233)"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            />
            
            {/* Orbiting Particles */}
            {[60, 90, 120].map((radius, i) => (
              <motion.circle
                key={radius}
                cx="200"
                cy="200"
                r="6"
                fill="rgb(99 102 241)"
                animate={{
                  x: [
                    Math.cos(0) * radius,
                    Math.cos(Math.PI * 2) * radius,
                  ],
                  y: [
                    Math.sin(0) * radius,
                    Math.sin(Math.PI * 2) * radius,
                  ],
                }}
                transition={{
                  duration: 4 + i,
                  ease: "linear",
                  repeat: Infinity,
                }}
                opacity="0.5"
              />
            ))}
          </motion.svg>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-tl from-secondary/20 to-transparent"></div>
          <div className="absolute top-20 right-1/4 w-32 h-32 rounded-full bg-accent/30 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-primary/30 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="gradient-solar rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
              {/* Inner glow effects */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
              
              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-6 text-white"
                >
                  We're Ready — Are You?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl mb-8 text-white/90"
                >
                  Join thousands of homes and businesses already powered by clean, local energy.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 shadow-glow"
                  >
                    <motion.span
                      className="absolute inset-0 bg-primary/10"
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileHover={{
                        scale: 2,
                        opacity: 0,
                        transition: { duration: 0.6 }
                      }}
                    />
                    <span className="relative flex items-center">
                      Switch to Solarify
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
