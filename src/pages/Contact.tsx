import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Sparkles, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { ParticleBackground } from '@/components/ParticleBackground';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const validateForm = () => {
    const newErrors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast({
      title: 'Message Sent!',
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@solarify.com',
      href: 'mailto:hello@solarify.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 (555) 123-4567',
      href: 'tel:+915551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Solar Street, Hyderabad, Telangana 500032',
      href: 'https://www.google.com/maps/place/Hyderabad,+Telangana/@17.385044,78.486671,11z',
    },
  ];

  return (
    <div className="min-h-screen py-32 md:py-40 px-6 relative overflow-hidden">
      <ParticleBackground />
      
      {/* Communication Network Illustration */}
      <div className="absolute right-20 top-1/3 w-80 h-80 pointer-events-none hidden xl:block opacity-8">
        <motion.svg
          viewBox="0 0 300 300"
          className="w-full h-full"
        >
          {/* Central Hub */}
          <motion.circle
            cx="150"
            cy="150"
            r="25"
            fill="rgb(14 165 233)"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          />
          
          {/* Satellite Nodes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const radius = 90;
            const x = 150 + Math.cos((angle * Math.PI) / 180) * radius;
            const y = 150 + Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <g key={angle}>
                {/* Connection Line */}
                <motion.line
                  x1="150"
                  y1="150"
                  x2={x}
                  y2={y}
                  stroke="rgb(16 185 129)"
                  strokeWidth="1.5"
                  opacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ 
                    duration: 3, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
                
                {/* Node */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="12"
                  fill="rgb(99 102 241)"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              </g>
            );
          })}
          
          {/* Data Packets */}
          {[45, 135, 225, 315].map((angle, i) => {
            const radius = 60;
            return (
              <motion.circle
                key={`packet-${angle}`}
                cx="150"
                cy="150"
                r="4"
                fill="rgb(14 165 233)"
                animate={{
                  x: [
                    0,
                    Math.cos((angle * Math.PI) / 180) * radius,
                  ],
                  y: [
                    0,
                    Math.sin((angle * Math.PI) / 180) * radius,
                  ],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            );
          })}
        </motion.svg>
      </div>
      
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
          className="text-center mb-32 md:mb-40"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">
              Let's Connect
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ready to Go
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Solar?
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
            <span className="font-semibold text-foreground">We're here to answer your questions</span> and help you take the first step toward clean, affordable energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 md:mb-40">
          {/* Contact Form - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative glass rounded-3xl p-8 shadow-soft bento-fill bento-fill-blue border border-primary/10"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                  >
                    <Send className="w-6 h-6 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold">Your Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={`mt-2 ${errors.subject ? 'border-red-500' : ''}`}
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 mt-1"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-sm">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your energy needs..."
                  className={`mt-2 min-h-32 ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <Sparkles className="h-4 w-4" />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="glass rounded-3xl p-6 shadow-soft bento-fill bento-fill-green border border-primary/10" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
              <h2 className="text-2xl font-bold mb-5">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-soft bento-fill-small bento-fill-green">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-sm">{info.label}</div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Message Flow Illustration */}
            <div className="py-8">
              <svg viewBox="0 0 400 200" className="w-full h-auto">
                {/* Person Icon (Sender) */}
                <motion.g
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <circle cx="50" cy="80" r="25" fill="rgb(14 165 233)" opacity="0.2" />
                  <circle cx="50" cy="70" r="12" fill="rgb(14 165 233)" />
                  <path d="M 35,90 Q 50,95 65,90" stroke="rgb(14 165 233)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <text x="50" y="130" textAnchor="middle" className="fill-primary font-semibold text-xs">You</text>
                </motion.g>
                
                {/* Message Envelope - Animated */}
                <motion.g
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.g
                    animate={{
                      x: [0, 100, 200, 300],
                      y: [0, -10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 2,
                    }}
                  >
                    <rect x="90" y="70" width="40" height="30" rx="3" fill="white" stroke="rgb(16 185 129)" strokeWidth="2" />
                    <path d="M 90,70 L 110,85 L 130,70" stroke="rgb(16 185 129)" strokeWidth="2" fill="none" />
                    <motion.circle
                      cx="110"
                      cy="85"
                      r="3"
                      fill="rgb(234 179 8)"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    />
                  </motion.g>
                </motion.g>
                
                {/* Connection Path */}
                <motion.path
                  d="M 80,85 Q 200,60 320,85"
                  stroke="rgb(14 165 233)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    strokeDashoffset: [0, -10],
                  }}
                  transition={{
                    pathLength: { duration: 2, delay: 0.5 },
                    strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" },
                  }}
                />
                
                {/* Building/Office Icon (Receiver) */}
                <motion.g
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <circle cx="350" cy="80" r="25" fill="rgb(16 185 129)" opacity="0.2" />
                  <rect x="335" y="70" width="30" height="25" fill="rgb(16 185 129)" />
                  <rect x="340" y="75" width="5" height="5" fill="white" opacity="0.6" />
                  <rect x="350" y="75" width="5" height="5" fill="white" opacity="0.6" />
                  <rect x="360" y="75" width="5" height="5" fill="white" opacity="0.6" />
                  <rect x="340" y="85" width="5" height="5" fill="white" opacity="0.6" />
                  <rect x="350" y="85" width="5" height="5" fill="white" opacity="0.6" />
                  <rect x="360" y="85" width="5" height="5" fill="white" opacity="0.6" />
                  <text x="350" y="130" textAnchor="middle" className="fill-accent font-semibold text-xs">Solarify Team</text>
                </motion.g>
                
                {/* Response Arrow */}
                <motion.path
                  d="M 320,100 Q 200,125 80,100"
                  stroke="rgb(99 102 241)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  opacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    strokeDashoffset: [0, 10],
                  }}
                  transition={{
                    pathLength: { duration: 2, delay: 2.5 },
                    strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear", delay: 2.5 },
                  }}
                />
                
                {/* Response Icon */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 4,
                  }}
                >
                  <circle cx="200" cy="112" r="8" fill="rgb(99 102 241)" />
                  <path d="M 197,112 L 200,115 L 203,109" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </motion.g>
                
                {/* Label */}
                <motion.text
                  x="200"
                  y="170"
                  textAnchor="middle"
                  className="fill-foreground/70 font-medium text-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  We typically respond within 24 hours
                </motion.text>
              </svg>
            </div>

            <div className="glass rounded-3xl p-6 shadow-soft bento-fill bento-fill-orange border border-primary/10" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.1557479761!2d78.12587629999999!3d17.412608699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699327000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hyderabad Location"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-3xl p-6 shadow-soft bento-fill bento-fill-purple border border-primary/10" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
                  <motion.div
                    key={social}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary"
                    >
                      {social}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
