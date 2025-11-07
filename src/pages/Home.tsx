import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Leaf, Sun, Wind, Battery } from 'lucide-react';
import heroImage from '@/assets/hero-sunrise-city.jpg';
import communityImage from '@/assets/community-solar.jpg';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sunRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <div className="overflow-x-hidden">
      {/* Cursor Glow Effect */}
      <div ref={cursorGlowRef} className="cursor-glow hidden md:block" />
      
      {/* Hero Section with Sunrise Animation */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden mb-32">
        <div className="absolute inset-0 gradient-sky"></div>
        
        {/* Animated Sun */}
        <div ref={sunRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 rounded-full bg-primary opacity-80 blur-3xl"></div>
        </div>

        {/* City Illustration */}
        <div ref={cityRef} className="absolute bottom-0 left-0 right-0 opacity-0 translate-y-10">
          <img src={heroImage} alt="Solar powered city" className="w-full h-auto" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            Come Over to the <span className="text-primary">Solarify</span> Network
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Making local renewable energy affordable and accessible to everyone, so that fossil fuels become a thing of the past.
          </p>
          <Button size="lg" className="group hover:scale-105 transition-all duration-300">
            Let's Go Solar
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>
      </section>

      {/* About Solarify Section */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Solarify</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Solarify is on a mission to make renewable energy the default choice for communities everywhere. 
              We build and operate solar and wind farms that power local homes and businesses with clean, 
              affordable energy. Our vision is simple: accelerate the transition to 100% renewable energy 
              and make fossil fuels obsolete.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              By creating distributed renewable energy networks, we're not just generating clean power — 
              we're building resilient communities, creating local jobs, and proving that sustainable energy 
              can be both affordable and reliable. Every solar panel and wind turbine we install is a step 
              toward a future free from fossil fuels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-40 gradient-sky">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Real results from real communities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const cardRef = useRef<HTMLDivElement>(null);
              return (
                <motion.div
                  key={stat.label}
                  ref={cardRef}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-3xl p-8 text-center shadow-soft transition-all duration-300 card-3d cursor-pointer hover-gradient"
                  onMouseMove={(e) => handleCardMouseMove(e, cardRef)}
                  onMouseLeave={() => handleCardMouseLeave(cardRef)}
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-lg md:text-xl text-muted-foreground">What drives us forward</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group hover-gradient"
                onMouseMove={handleSimpleMouseMove}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="w-10 h-10 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-40 gradient-sky">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Your journey to clean energy in three simple steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-6xl font-bold text-primary/20 mb-6 group-hover:text-primary/40 transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Real stories from the Solarify community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-3xl p-8 shadow-soft transition-all duration-300 cursor-pointer border border-transparent hover-gradient"
                onMouseMove={handleSimpleMouseMove}
              >
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Benefits Section */}
      <section className="py-40 gradient-sky">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Environmental Benefits</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Every kilowatt-hour from renewable sources makes a difference</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-3xl p-8 shadow-soft transition-all duration-300 hover-gradient"
                onMouseMove={handleSimpleMouseMove}
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{benefit.stat}</div>
                    <div className="text-sm text-muted-foreground">{benefit.label}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-soft"
          >
            <img src={communityImage} alt="Community powered by solar" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 gradient-solar">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              We're Ready — Are You?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of homes and businesses already powered by clean, local energy.
            </p>
            <Button size="lg" variant="secondary" className="group hover:scale-105 transition-all duration-300">
              Switch to Solarify
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
