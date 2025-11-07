import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Zap } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  capacity: string;
  country: string;
  type: 'Solar' | 'Wind' | 'Hybrid';
  status: 'Operational' | 'Under Construction' | 'Planning';
  image: string;
}

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCountry, setFilterCountry] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    element.style.setProperty('--mouse-x', `${x}%`);
    element.style.setProperty('--mouse-y', `${y}%`);
  };

  const projects: Project[] = [
    {
      id: 1,
      name: 'Sunrise Valley Solar Farm',
      capacity: '25 MW',
      country: 'United States',
      type: 'Solar',
      status: 'Operational',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Green Hills Wind Park',
      capacity: '40 MW',
      country: 'Germany',
      type: 'Wind',
      status: 'Operational',
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Coastal Energy Hub',
      capacity: '60 MW',
      country: 'United Kingdom',
      type: 'Hybrid',
      status: 'Under Construction',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Mountain Peak Solar',
      capacity: '35 MW',
      country: 'Spain',
      type: 'Solar',
      status: 'Operational',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Nordic Wind Array',
      capacity: '55 MW',
      country: 'Norway',
      type: 'Wind',
      status: 'Planning',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      name: 'Desert Sun Project',
      capacity: '80 MW',
      country: 'United States',
      type: 'Solar',
      status: 'Under Construction',
      image: 'https://images.unsplash.com/photo-1509390144987-d5f8dcf9d44f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = filterCountry === 'all' || project.country === filterCountry;
    const matchesType = filterType === 'all' || project.type === filterType;
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesCountry && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Operational':
        return 'bg-accent text-accent-foreground';
      case 'Under Construction':
        return 'bg-secondary text-secondary-foreground';
      case 'Planning':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Projects</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our growing network of renewable energy projects across the globe
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From sun-soaked valleys to wind-swept coastlines, each project represents our commitment 
            to building a sustainable energy future for local communities.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={filterCountry} onValueChange={setFilterCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="United States">United States</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="United Kingdom">United Kingdom</SelectItem>
              <SelectItem value="Spain">Spain</SelectItem>
              <SelectItem value="Norway">Norway</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Solar">Solar</SelectItem>
              <SelectItem value="Wind">Wind</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Operational">Operational</SelectItem>
              <SelectItem value="Under Construction">Under Construction</SelectItem>
              <SelectItem value="Planning">Planning</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft transition-all hover-gradient"
              onMouseMove={handleMouseMove}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>

                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-foreground">{project.capacity}</span>
                    <span>• {project.type}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{project.country}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-12 shadow-soft mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">240+ MW</div>
              <div className="text-muted-foreground">Total Capacity</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground">Homes Powered</div>
            </div>
          </div>
        </motion.div>

        {/* Data Updated Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-muted-foreground"
        >
          Data updated as of November 2024
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
