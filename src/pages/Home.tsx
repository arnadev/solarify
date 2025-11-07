import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Leaf, Sun, Wind, Battery, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-sunrise-city.jpg';
import communityImage from '@/assets/community-solar.jpg';

gsap.registerPlugin(ScrollTrigger);

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
  const sunRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    if (!sunRef.current || !cityRef.current || !heroRef.current) return;

    // Sunrise animation on scroll
    gsap.to(sunRef.current, {
      y: -100,
      scale: 1.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom center',
        scrub: 1,
      },
    });

    gsap.to(cityRef.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // Cursor tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '12,500+', label: 'Homes Powered', icon: Users },
    { value: '45,000', label: 'Tons CO₂ Saved', icon: Leaf },
    { value: '85 MW', label: 'Capacity Installed', icon: Zap },
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
    <div className="overflow-x-hidden">
      {/* Cursor Glow Effect */}
      <div ref={cursorGlowRef} className="cursor-glow hidden md:block" />
      
      {/* Hero Section with Sunrise Animation */}
      <motion.section 
        ref={heroRef} 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden mb-16"
      >
        <div className="absolute inset-0 gradient-sky"></div>
        
        {/* Animated Sun */}
        <div ref={sunRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 rounded-full bg-primary opacity-50 blur-3xl animate-glow"></div>
        </div>

        {/* City Illustration */}
        <div ref={cityRef} className="absolute bottom-0 left-0 right-0 opacity-0 translate-y-10">
          <img src={heroImage} alt="Solar powered city" className="w-full h-auto" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Join the renewable revolution</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            Come Over to the <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Solarify</span> Network
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance"
          >
            Making local renewable energy affordable and accessible to everyone, so that fossil fuels become a thing of the past.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Button size="lg" className="group hover:scale-105 transition-all duration-500 shadow-glow">
              Let's Go Solar
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Solarify Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <Sun className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              About Solarify
            </motion.h2>
            <motion.p variants={textVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Solarify is on a mission to make renewable energy the default choice for communities everywhere. 
              We build and operate solar and wind farms that power local homes and businesses with clean, 
              affordable energy. Our vision is simple: accelerate the transition to 100% renewable energy 
              and make fossil fuels obsolete.
            </motion.p>
            <motion.p variants={textVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              By creating distributed renewable energy networks, we're not just generating clean power — 
              we're building resilient communities, creating local jobs, and proving that sustainable energy 
              can be both affordable and reliable. Every solar panel and wind turbine we install is a step 
              toward a future free from fossil fuels.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Impact</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Our Impact
            </motion.h2>
            <motion.p variants={textVariants} className="text-lg md:text-xl text-muted-foreground">
              Real results from real communities
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => {
              const cardRef = useRef<HTMLDivElement>(null);
              return (
                <motion.div
                  key={stat.label}
                  ref={cardRef}
                  variants={itemVariants}
                  className="bg-card rounded-2xl p-6 text-center shadow-soft transition-all duration-500 card-3d cursor-pointer bento-fill group"
                  onMouseMove={(e) => handleCardMouseMove(e, cardRef)}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={() => handleCardMouseLeave(cardRef)}
                >
                  <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-base text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Philosophy</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Our Philosophy
            </motion.h2>
            <motion.p variants={textVariants} className="text-lg md:text-xl text-muted-foreground">
              What drives us forward
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="text-center group bento-fill p-6 rounded-2xl transition-all duration-500"
                onMouseMove={handleSimpleMouseMove}
                onMouseEnter={handleSimpleMouseEnter}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-accent flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-soft bento-fill-small">
                  <item.icon className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </motion.h2>
            <motion.p variants={textVariants} className="text-lg md:text-xl text-muted-foreground">
              Your journey to clean energy in three simple steps
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                step: '01',
                title: 'Sign Up',
                description: 'Join the Solarify network with a simple online enrollment. No installation needed at your property.',
              },
              {
                step: '02',
                title: 'We Generate',
                description: 'Our solar and wind farms produce clean energy that feeds directly into your local grid.',
              },
              {
                step: '03',
                title: 'You Save',
                description: 'Enjoy lower energy bills while supporting renewable energy in your community.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="text-center group relative"
              >
                <div className="text-5xl font-bold text-primary/20 mb-5 group-hover:text-primary/40 transition-all duration-500 group-hover:scale-110">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              What Our Customers Say
            </motion.h2>
            <motion.p variants={textVariants} className="text-lg md:text-xl text-muted-foreground">
              Real stories from the Solarify community
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-card rounded-2xl p-6 shadow-soft transition-all duration-500 cursor-pointer border border-transparent bento-fill"
                onMouseMove={handleSimpleMouseMove}
                onMouseEnter={handleSimpleMouseEnter}
              >
                <p className="text-base mb-5 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-semibold text-sm">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial.location}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Environmental Benefits Section */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Environmental Impact</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
              Environmental Benefits
            </motion.h2>
            <motion.p variants={textVariants} className="text-lg md:text-xl text-muted-foreground">
              Every kilowatt-hour from renewable sources makes a difference
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Zero Emissions',
                description: 'Our solar and wind farms produce electricity without releasing any greenhouse gases or air pollutants.',
                stat: '100%',
                label: 'Clean Energy',
              },
              {
                title: 'Water Conservation',
                description: 'Unlike fossil fuel plants, our renewable installations require virtually no water to generate power.',
                stat: '99%',
                label: 'Less Water Use',
              },
              {
                title: 'Wildlife Protection',
                description: 'We design our farms to minimize environmental impact and protect local ecosystems and wildlife.',
                stat: '10+',
                label: 'Years of Study',
              },
              {
                title: 'Land Efficiency',
                description: 'Renewable energy sites can coexist with agriculture and natural habitats through careful planning.',
                stat: '85%',
                label: 'Land Preserved',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 shadow-soft transition-all duration-500 bento-fill"
                onMouseMove={handleSimpleMouseMove}
                onMouseEnter={handleSimpleMouseEnter}
              >
                <div className="flex items-start justify-between mb-5">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{benefit.stat}</div>
                    <div className="text-xs text-muted-foreground">{benefit.label}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="py-16 bg-background">
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

      {/* CTA Section */}
      <section className="py-24 gradient-solar relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              We're Ready — Are You?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of homes and businesses already powered by clean, local energy.
            </p>
            <Button size="lg" variant="secondary" className="group hover:scale-105 transition-all duration-500 shadow-glow bg-white text-primary hover:bg-white/90">
              Switch to Solarify
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
