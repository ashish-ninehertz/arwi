import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Plus, Edit, Trash2, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Project } from '../../data/mockData';

export function PortfolioManagementPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<Project>();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    if (!supabase) return;
    
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProjects(data);
    }
    setLoading(false);
  };

  const onSubmit = async (data: any) => {
    if (!supabase) return;

    const projectData = {
      title: data.title,
      description: data.description,
      image_url: data.imageUrl,
      client: data.client,
      technologies: data.technologies.split(',').map((t: string) => t.trim()),
      category: data.category,
      url: data.url || null,
      completed_date: data.completedDate,
    };

    if (editingProject) {
      const { error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', editingProject.id);

      if (!error) {
        fetchProjects();
        closeModal();
      }
    } else {
      const { error } = await supabase
        .from('projects')
        .insert([projectData]);

      if (!error) {
        fetchProjects();
        closeModal();
      }
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setValue('title', project.title);
    setValue('description', project.description);
    setValue('imageUrl', project.imageUrl);
    setValue('client', project.client);
    setValue('technologies', project.technologies.join(', '));
    setValue('category', project.category);
    setValue('url', project.url || '');
    setValue('completedDate', project.completedDate);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!supabase) return;
    if (!confirm('Are you sure you want to delete this project?')) return;

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchProjects();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
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
            <h1 className="text-3xl font-bold text-text font-heading">Portfolio Management</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Project</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2">{project.title}</h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Edit className="w-5 h-5 text-primary" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-error" />
                    </button>
                  </div>
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
                  {editingProject ? 'Edit Project' : 'Add Project'}
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
                  <label className="block text-sm font-medium text-text mb-2">Image URL *</label>
                  <input
                    {...register('imageUrl', { required: 'Image URL is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.imageUrl && <p className="mt-1 text-sm text-error">{errors.imageUrl.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Client *</label>
                  <input
                    {...register('client', { required: 'Client is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.client && <p className="mt-1 text-sm text-error">{errors.client.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Technologies (comma-separated) *</label>
                  <input
                    {...register('technologies', { required: 'Technologies are required' })}
                    placeholder="React, Node.js, PostgreSQL"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.technologies && <p className="mt-1 text-sm text-error">{errors.technologies.message}</p>}
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
                  <label className="block text-sm font-medium text-text mb-2">Project URL</label>
                  <input
                    {...register('url')}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Completed Date *</label>
                  <input
                    {...register('completedDate', { required: 'Completed date is required' })}
                    placeholder="2024-01"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.completedDate && <p className="mt-1 text-sm text-error">{errors.completedDate.message}</p>}
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    {editingProject ? 'Update Project' : 'Add Project'}
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
