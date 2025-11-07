import { motion } from 'framer-motion';
import { TrendingUp, Target, Award, Users, Sparkles } from 'lucide-react';
import energyIllustration from '@/assets/energy-illustration.jpg';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ParticleBackground } from '@/components/ParticleBackground';

const About = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    element.style.setProperty('--mouse-x', `${x}%`);
    element.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    element.style.setProperty('--mouse-x', `${x}%`);
    element.style.setProperty('--mouse-y', `${y}%`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const achievements = [
    {
      icon: TrendingUp,
      value: 650,
      suffix: 'M',
      prefix: '€',
      label: 'Capital Raised',
      description: 'Investment in renewable energy infrastructure',
    },
    {
      icon: Target,
      value: 200,
      suffix: '+ MW',
      label: 'Operational Capacity',
      description: 'Clean energy generating power today',
    },
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Building sustainable energy solutions',
    },
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Customers Served',
      description: 'Homes and businesses powered',
    },
  ];

  const values = [
    {
      title: 'Local Energy',
      description: 'We believe in energy that stays in your community, supporting local economies and reducing transmission losses.',
    },
    {
      title: 'Accessibility',
      description: 'Clean energy should be available to everyone, not just those who can afford rooftop solar.',
    },
    {
      title: 'Transparency',
      description: 'We openly share where your energy comes from and how our projects impact the environment.',
    },
    {
      title: 'Innovation',
      description: 'From battery storage to smart grids, we invest in technology that makes renewable energy more reliable.',
    },
  ];

  return (
    <div className="min-h-screen py-32 md:py-40 px-6 relative">
      <ParticleBackground />
      
      {/* Target/Goal Illustration */}
      <div className="absolute right-10 top-40 w-72 h-72 pointer-events-none hidden xl:block opacity-8">
        <motion.svg
          viewBox="0 0 300 300"
          className="w-full h-full"
        >
          {/* Concentric Target Rings */}
          {[60, 90, 120, 150].map((radius, i) => (
            <motion.circle
              key={radius}
              cx="150"
              cy="150"
              r={radius}
              fill="none"
              stroke="rgb(14 165 233)"
              strokeWidth="2"
              opacity={0.3 - i * 0.05}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1, 0.8],
                opacity: [0, 0.3 - i * 0.05, 0]
              }}
              transition={{ 
                duration: 4, 
                ease: "easeInOut", 
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
          
          {/* Center Bullseye */}
          <motion.circle
            cx="150"
            cy="150"
            r="25"
            fill="rgb(14 165 233)"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
          
          {/* Arrow Paths */}
          <motion.path
            d="M 50,150 L 110,150 M 95,140 L 110,150 L 95,160"
            stroke="rgb(16 185 129)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.6, 0],
              x: [0, 200]
            }}
            transition={{ 
              duration: 2.5, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </motion.svg>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">
              Our Story
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building a
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Renewable Future
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-foreground">We're making clean energy accessible to everyone</span>—because the planet can't wait for perfection.
          </p>
        </motion.div>

        {/* Mission Statement - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
          className="mb-32 md:mb-40"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative glass rounded-3xl p-10 md:p-14 shadow-soft border border-primary/10 bento-fill bento-fill-blue" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
              <div className="flex items-center justify-center gap-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                >
                  <Target className="w-7 h-7 text-white" />
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Mission
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center max-w-4xl mx-auto mb-6">
                <span className="font-semibold text-foreground">Accelerate the world's transition to 100% renewable energy.</span> We own and operate solar and wind farms that deliver clean, affordable power to entire communities—no rooftop required.
              </p>
              
              <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
                By building local energy networks, we're reducing fossil fuel dependence and empowering communities to control their energy future. Our ultimate goal: 
                <span className="font-bold text-primary"> make fossil fuels obsolete.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Standalone Renewable Energy Icons Grid */}
        <div className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <svg viewBox="0 0 600 200" className="w-full h-auto">
              {/* Connecting Line */}
              <motion.path
                d="M 100,100 L 250,100 L 250,50 L 350,50 L 350,100 L 500,100"
                stroke="rgb(14 165 233)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
              
              {/* Solar Panel Icon */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <circle cx="100" cy="100" r="35" fill="rgb(14 165 233)" opacity="0.2" />
                <rect x="75" y="85" width="50" height="30" rx="3" fill="rgb(14 165 233)" />
                <line x1="100" y1="85" x2="100" y2="115" stroke="white" strokeWidth="1" />
                <line x1="75" y1="100" x2="125" y2="100" stroke="white" strokeWidth="1" />
              </motion.g>
              
              {/* Wind Turbine Icon */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <circle cx="300" cy="50" r="35" fill="rgb(16 185 129)" opacity="0.2" />
                <path d="M 300,75 L 295,40 L 305,40 Z" fill="rgb(16 185 129)" />
                <circle cx="300" cy="40" r="6" fill="rgb(16 185 129)" />
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "300px 40px" }}
                >
                  {[0, 120, 240].map((angle) => (
                    <line
                      key={angle}
                      x1="300"
                      y1="40"
                      x2={300 + Math.cos((angle * Math.PI) / 180 - Math.PI / 2) * 20}
                      y2={40 + Math.sin((angle * Math.PI) / 180 - Math.PI / 2) * 20}
                      stroke="rgb(16 185 129)"
                      strokeWidth="2"
                    />
                  ))}
                </motion.g>
              </motion.g>
              
              {/* Battery Icon */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <circle cx="500" cy="100" r="35" fill="rgb(99 102 241)" opacity="0.2" />
                <rect x="480" y="90" width="35" height="20" rx="2" fill="none" stroke="rgb(99 102 241)" strokeWidth="2" />
                <rect x="515" y="95" width="5" height="10" rx="1" fill="rgb(99 102 241)" />
                <motion.rect
                  x="483"
                  y="93"
                  width="0"
                  height="14"
                  rx="1"
                  fill="rgb(99 102 241)"
                  animate={{ width: [0, 29, 29, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.g>
              
              {/* Labels */}
              <motion.text
                x="100"
                y="150"
                textAnchor="middle"
                className="fill-primary font-semibold text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Solar Power
              </motion.text>
              <motion.text
                x="300"
                y="100"
                textAnchor="middle"
                className="fill-accent font-semibold text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                Wind Energy
              </motion.text>
              <motion.text
                x="500"
                y="150"
                textAnchor="middle"
                className="fill-secondary font-semibold text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                Energy Storage
              </motion.text>
            </svg>
          </motion.div>
        </div>

        {/* Illustration - Enhanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any }}
          whileHover={{ scale: 1.02 }}
          className="mb-32 md:mb-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
        >
          <img src={energyIllustration} alt="Renewable energy systems" className="w-full h-auto" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32 md:mb-40"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bento-fill bento-fill-teal transition-all duration-500"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-accent flex items-center justify-center shadow-soft bento-fill-small bento-fill-teal"
                >
                  <achievement.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {achievement.prefix && <span>{achievement.prefix}</span>}
                  <AnimatedCounter end={achievement.value} />
                  {achievement.suffix && <span>{achievement.suffix}</span>}
                </div>
                <div className="font-semibold mb-1 text-sm">{achievement.label}</div>
                <div className="text-xs text-muted-foreground">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Values - Redesigned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32 md:mb-40"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Award className="w-5 h-5 text-accent" />
              </motion.div>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Core Principles
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Believe</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              These values guide every decision we make and every project we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className={`glass rounded-2xl p-6 shadow-soft bento-fill border border-primary/10 transition-all duration-500 ${
                  index === 0 ? 'bento-fill-purple' :
                  index === 1 ? 'bento-fill-green' :
                  index === 2 ? 'bento-fill-blue' :
                  'bento-fill-orange'
                }`}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
          className="text-center gradient-solar rounded-3xl p-12 md:p-14 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl animate-float"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join Us on This Journey
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Whether you're a homeowner, business, or community leader, there's a place for you in the renewable energy revolution.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
