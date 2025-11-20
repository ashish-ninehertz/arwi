import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '../data/mockData';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-border group"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
      </div>
      <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-text-secondary text-sm mb-4 line-clamp-3">
        {service.description}
      </p>
      <div className="flex items-center justify-between">
        {service.pricing && (
          <span className="text-sm font-medium text-primary">
            {service.pricing}
          </span>
        )}
        <span className="text-sm text-accent font-medium group-hover:translate-x-2 transition-transform">
          Learn More →
        </span>
      </div>
    </motion.div>
  );
}
