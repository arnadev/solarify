import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Zap, Wind, Sun, Activity, TrendingUp, Calendar, X, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCardSkeleton } from '@/components/LoadingSkeletons';
import { AnimatedCounter } from '@/components/AnimatedCounter';

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
  const [isLoading, setIsLoading] = useState(false);

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
      image: 'https://plus.unsplash.com/premium_photo-1679952890714-bb4bd9204275?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
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
        return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'Under Construction':
        return 'bg-orange-500/10 text-orange-700 border-orange-500/20';
      case 'Planning':
        return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Solar':
        return Sun;
      case 'Wind':
        return Wind;
      case 'Hybrid':
        return Activity;
      default:
        return Zap;
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setFilterCountry('all');
    setFilterType('all');
    setFilterStatus('all');
  };

  const hasActiveFilters = searchQuery || filterCountry !== 'all' || filterType !== 'all' || filterStatus !== 'all';

  return (
    <div className="min-h-screen py-32 md:py-40 px-6 relative">
      {/* Grid/Blueprint Illustration */}
      <div className="absolute left-10 top-1/4 w-96 h-96 pointer-events-none hidden xl:block opacity-6">
        <motion.svg
          viewBox="0 0 400 400"
          className="w-full h-full"
        >
          {/* Grid Lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <motion.line
                x1={i * 100}
                y1="0"
                x2={i * 100}
                y2="400"
                stroke="rgb(14 165 233)"
                strokeWidth="1"
                opacity="0.15"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1, ease: "easeInOut" }}
              />
              <motion.line
                x1="0"
                y1={i * 100}
                x2="400"
                y2={i * 100}
                stroke="rgb(14 165 233)"
                strokeWidth="1"
                opacity="0.15"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1, ease: "easeInOut" }}
              />
            </g>
          ))}
          
          {/* Building/Structure Shapes */}
          <motion.rect
            x="120"
            y="150"
            width="60"
            height="100"
            fill="none"
            stroke="rgb(16 185 129)"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.rect
            x="220"
            y="120"
            width="60"
            height="130"
            fill="none"
            stroke="rgb(99 102 241)"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          
          {/* Dimension Lines */}
          <motion.path
            d="M 120,140 L 180,140 M 120,135 L 120,145 M 180,135 L 180,145"
            stroke="rgb(14 165 233)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.svg>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32 md:mb-40"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              <TrendingUp className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-wider">
              Global Portfolio
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Powering the
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Clean Revolution
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            From sprawling solar fields to towering wind farms—
            <span className="font-semibold text-foreground"> each project brings us closer to a 100% renewable future</span>
          </p>
        </motion.div>

        {/* Standalone World Map with Project Locations */}
        <div className="py-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Global Presence</h3>
            <svg viewBox="0 0 800 400" className="w-full h-auto">
              {/* Simplified World Map Outline */}
              <motion.path
                d="M 100,200 L 150,180 L 200,160 L 250,170 L 300,150 L 350,160 L 400,140 L 450,150 L 500,160 L 550,170 L 600,180 L 650,190 L 700,200"
                stroke="rgb(148 163 184)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
              
              {/* Continents - Simplified */}
              <motion.path
                d="M 150,220 Q 180,200 220,210 L 250,180 L 280,200 L 260,240 L 200,250 Z"
                fill="rgb(14 165 233)"
                opacity="0.1"
                stroke="rgb(14 165 233)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
              <motion.path
                d="M 350,150 Q 400,140 450,155 L 480,180 L 470,210 L 420,220 L 360,200 Z"
                fill="rgb(16 185 129)"
                opacity="0.1"
                stroke="rgb(16 185 129)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              />
              
              {/* Project Location Pins */}
              {[
                { x: 180, y: 200, label: 'USA', count: 3, color: 'rgb(14 165 233)' },
                { x: 320, y: 180, label: 'Europe', count: 4, color: 'rgb(16 185 129)' },
                { x: 520, y: 240, label: 'Asia', count: 2, color: 'rgb(99 102 241)' },
              ].map((location, i) => (
                <motion.g
                  key={location.label}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.2 }}
                >
                  {/* Pulse Ring */}
                  <motion.circle
                    cx={location.x}
                    cy={location.y}
                    r="15"
                    fill="none"
                    stroke={location.color}
                    strokeWidth="2"
                    animate={{
                      r: [15, 30, 15],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                  
                  {/* Pin */}
                  <path
                    d={`M ${location.x},${location.y - 20} Q ${location.x - 8},${location.y - 10} ${location.x},${location.y} Q ${location.x + 8},${location.y - 10} ${location.x},${location.y - 20} Z`}
                    fill={location.color}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx={location.x} cy={location.y - 15} r="4" fill="white" />
                  
                  {/* Count Badge */}
                  <circle cx={location.x + 15} cy={location.y - 25} r="12" fill={location.color} />
                  <text
                    x={location.x + 15}
                    y={location.y - 21}
                    textAnchor="middle"
                    className="fill-white font-bold text-xs"
                  >
                    {location.count}
                  </text>
                  
                  {/* Label */}
                  <text
                    x={location.x}
                    y={location.y + 20}
                    textAnchor="middle"
                    className="fill-foreground font-semibold text-sm"
                  >
                    {location.label}
                  </text>
                </motion.g>
              ))}
              
              {/* Connection Lines */}
              <motion.path
                d="M 180,200 Q 250,150 320,180"
                stroke="rgb(234 179 8)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 1 }}
              />
              <motion.path
                d="M 320,180 Q 420,200 520,240"
                stroke="rgb(234 179 8)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7, duration: 1 }}
              />
              
              {/* Stats */}
              <motion.text
                x="400"
                y="350"
                textAnchor="middle"
                className="fill-primary font-bold text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
              >
                <tspan className="text-2xl">9 Active Projects</tspan>
                <tspan x="400" y="375" className="text-base opacity-70">Across 3 Continents</tspan>
              </motion.text>
            </svg>
          </motion.div>
        </div>

        {/* Filters - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-soft"
              >
                <TrendingUp className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground">Filter Projects</h3>
            </div>
            {hasActiveFilters && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="group border-2"
                >
                  <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" />
                  Clear All
                </Button>
              </motion.div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative rounded-xl shadow-soft" onMouseMove={handleMouseMove}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 border-2 focus:border-primary"
              />
            </div>

          <div className="bento-fill bento-fill-blue rounded-lg" onMouseMove={handleMouseMove}>
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
          </div>

          <div className="bento-fill bento-fill-green rounded-lg" onMouseMove={handleMouseMove}>
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
          </div>

          <div className="bento-fill bento-fill-purple rounded-lg" onMouseMove={handleMouseMove}>
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
          </div>
        </div>
        </motion.div>

        {/* Results Count */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-8"
          >
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> of{' '}
              <span className="font-semibold text-foreground">{projects.length}</span> projects
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => {
              const TypeIcon = getTypeIcon(project.type);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className={`group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-2xl transition-all cursor-pointer bento-fill ${
                    project.type === 'Solar' ? 'bento-fill-orange' :
                    project.type === 'Wind' ? 'bento-fill-blue' :
                    'bento-fill-green'
                  }`}
                  onMouseMove={handleMouseMove}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                      >
                        <TypeIcon className="w-6 h-6 text-primary" />
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getStatusColor(project.status)} border backdrop-blur-sm`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>

                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <TypeIcon className="h-5 w-5 text-primary" />
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
            );
          })}
        </div>
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 px-4"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6"
            >
              <Filter className="w-12 h-12 text-primary" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">No Projects Found</h3>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              We couldn't find any projects matching your filters. Try adjusting your search criteria.
            </p>
            <Button
              onClick={clearFilters}
              variant="outline"
              className="group"
            >
              <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" />
              Clear All Filters
            </Button>
          </motion.div>
        )}

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Project Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-12 shadow-soft mb-20 bento-fill bento-fill-teal"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-14 h-14 rounded-full bg-gradient-solar flex items-center justify-center"
            >
              <TrendingUp className="w-7 h-7 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Global Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={240} suffix="+" decimals={0} /> MW
              </div>
              <div className="text-muted-foreground">Total Capacity</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={6} />
              </div>
              <div className="text-muted-foreground">Active Projects</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={5} />
              </div>
              <div className="text-muted-foreground">Countries</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={100} suffix="K+" decimals={0} />
              </div>
              <div className="text-muted-foreground">Homes Powered</div>
            </motion.div>
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
          @arnadev
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
