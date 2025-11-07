import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
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
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Solar Street, Green Valley, CA 94102',
      href: 'https://maps.google.com',
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
            <span className="text-sm font-medium text-primary">Let's Talk</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about switching to solar? We're here to help you on your renewable energy journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as any }}
            className="glass rounded-3xl p-8 shadow-soft bento-fill border border-primary/10"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm">Your Name</Label>
                <Input id="name" placeholder="John Doe" required className="mt-2" />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="mt-2" />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm">Phone Number (Optional)</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your energy needs..."
                  required
                  className="mt-2 min-h-32"
                />
              </div>

              <Button type="submit" size="lg" className="w-full group hover:scale-105 transition-all duration-500">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
              </Button>
            </form>
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
            <div className="glass rounded-3xl p-6 shadow-soft bento-fill border border-primary/10" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-soft bento-fill-small">
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

            {/* Map Illustration */}
            <div className="glass rounded-3xl p-6 shadow-soft bento-fill border border-primary/10" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
              <div className="aspect-video bg-gradient-sky rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-primary animate-float" />
                  <p className="text-muted-foreground text-sm">Map View</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-3xl p-6 shadow-soft bento-fill border border-primary/10" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <Button key={social} variant="outline" size="sm" className="flex-1 hover:scale-105 transition-all duration-500 text-sm">
                    {social}
                  </Button>
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
