import { motion } from 'framer-motion';
import { TrendingUp, Target, Award, Users } from 'lucide-react';
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
    <div className="min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8">About Solarify</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make renewable energy the default choice for communities everywhere
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 rounded-3xl overflow-hidden shadow-soft"
        >
          <img src={energyIllustration} alt="Renewable energy systems" className="w-full h-auto" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="font-semibold mb-2">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-3xl p-8 shadow-soft hover-gradient"
                onMouseMove={handleMouseMove}
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-solar rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Join Us on This Journey
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Whether you're a homeowner, business, or community leader, there's a place for you in the renewable energy revolution.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
