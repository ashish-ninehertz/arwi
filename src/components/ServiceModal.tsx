import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '../data/mockData';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
              </div>
              <h2 className="text-2xl font-bold text-text">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-text" />
            </button>
          </div>

          <div className="p-6">
            <p className="text-text-secondary mb-6">{service.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {service.pricing && (
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-text mb-2">Pricing</h3>
                <p className="text-2xl font-bold text-primary">{service.pricing}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
