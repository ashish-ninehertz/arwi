import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Plus, Edit, Trash2, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Service } from '../../data/mockData';

export function ServicesManagementPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<Service>();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    if (!supabase) return;
    
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setServices(data);
    }
    setLoading(false);
  };

  const onSubmit = async (data: any) => {
    if (!supabase) return;

    const serviceData = {
      title: data.title,
      description: data.description,
      icon: data.icon,
      features: data.features.split(',').map((f: string) => f.trim()),
      pricing: data.pricing || null,
      category: data.category,
    };

    if (editingService) {
      const { error } = await supabase
        .from('services')
        .update(serviceData)
        .eq('id', editingService.id);

      if (!error) {
        fetchServices();
        closeModal();
      }
    } else {
      const { error } = await supabase
        .from('services')
        .insert([serviceData]);

      if (!error) {
        fetchServices();
        closeModal();
      }
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setValue('title', service.title);
    setValue('description', service.description);
    setValue('icon', service.icon);
    setValue('features', service.features.join(', '));
    setValue('pricing', service.pricing || '');
    setValue('category', service.category);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!supabase) return;
    if (!confirm('Are you sure you want to delete this service?')) return;

    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchServices();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
    reset();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/admin/dashboard"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-text" />
            </Link>
            <h1 className="text-3xl font-bold text-text font-heading">Services Management</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Service</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-text mb-2">{service.title}</h3>
              <p className="text-sm text-text-secondary mb-4 line-clamp-2">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {service.category}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit className="w-5 h-5 text-primary" />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-error" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text font-heading">
                  {editingService ? 'Edit Service' : 'Add Service'}
                </h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-6 h-6 text-text" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Title *</label>
                  <input
                    {...register('title', { required: 'Title is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.title && <p className="mt-1 text-sm text-error">{errors.title.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Description *</label>
                  <textarea
                    {...register('description', { required: 'Description is required' })}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.description && <p className="mt-1 text-sm text-error">{errors.description.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Icon Name *</label>
                  <input
                    {...register('icon', { required: 'Icon is required' })}
                    placeholder="e.g., Code, Smartphone, Cloud"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.icon && <p className="mt-1 text-sm text-error">{errors.icon.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Features (comma-separated) *</label>
                  <textarea
                    {...register('features', { required: 'Features are required' })}
                    rows={3}
                    placeholder="Feature 1, Feature 2, Feature 3"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.features && <p className="mt-1 text-sm text-error">{errors.features.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Category *</label>
                  <input
                    {...register('category', { required: 'Category is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.category && <p className="mt-1 text-sm text-error">{errors.category.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Pricing</label>
                  <input
                    {...register('pricing')}
                    placeholder="e.g., Starting at $5,000"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    {editingService ? 'Update Service' : 'Add Service'}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 border-2 border-border text-text rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
