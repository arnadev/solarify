import { motion } from 'framer-motion';
import { TrendingUp, Target, Award, Users, Sparkles } from 'lucide-react';
import energyIllustration from '@/assets/energy-illustration.jpg';

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
      value: '€650M',
      label: 'Capital Raised',
      description: 'Investment in renewable energy infrastructure',
    },
    {
      icon: Target,
      value: '200+ MW',
      label: 'Operational Capacity',
      description: 'Clean energy generating power today',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      description: 'Building sustainable energy solutions',
    },
    {
      icon: Users,
      value: '50,000+',
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
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Solarify</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make renewable energy the default choice for communities everywhere
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
          className="mb-20"
        >
          <div className="glass rounded-3xl p-8 md:p-12 shadow-soft border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Mission</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Solarify exists to accelerate the world's transition to 100% renewable energy. We build and operate 
              solar and wind farms that make clean energy accessible and affordable for everyone. By creating local 
              energy networks, we reduce dependence on fossil fuels and empower communities to take control of their 
              energy future. Our ultimate goal: make fossil fuels obsolete.
            </p>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any }}
          className="mb-20 rounded-3xl overflow-hidden shadow-glow"
        >
          <img src={energyIllustration} alt="Renewable energy systems" className="w-full h-auto" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bento-fill transition-all duration-500"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-accent flex items-center justify-center shadow-soft bento-fill-small">
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="font-semibold mb-1 text-sm">{achievement.label}</div>
                <div className="text-xs text-muted-foreground">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="glass rounded-2xl p-6 shadow-soft bento-fill border border-primary/10 transition-all duration-500"
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
