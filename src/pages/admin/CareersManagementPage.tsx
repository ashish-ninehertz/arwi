import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Plus, Edit, Trash2, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  created_at?: string;
}

export function CareersManagementPage() {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<JobPosting>();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    if (!supabase) return;
    
    const { data, error } = await supabase
      .from('job_postings')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setJobs(data);
    }
    setLoading(false);
  };

  const onSubmit = async (data: JobPosting) => {
    if (!supabase) return;

    const jobData = {
      title: data.title,
      department: data.department,
      location: data.location,
      type: data.type,
      description: data.description,
    };

    if (editingJob) {
      const { error } = await supabase
        .from('job_postings')
        .update(jobData)
        .eq('id', editingJob.id);

      if (!error) {
        fetchJobs();
        closeModal();
      }
    } else {
      const { error } = await supabase
        .from('job_postings')
        .insert([jobData]);

      if (!error) {
        fetchJobs();
        closeModal();
      }
    }
  };

  const handleEdit = (job: JobPosting) => {
    setEditingJob(job);
    setValue('title', job.title);
    setValue('department', job.department);
    setValue('location', job.location);
    setValue('type', job.type);
    setValue('description', job.description);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!supabase) return;
    if (!confirm('Are you sure you want to delete this job posting?')) return;

    const { error } = await supabase
      .from('job_postings')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchJobs();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingJob(null);
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
            <h1 className="text-3xl font-bold text-text font-heading">Careers Management</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Job Posting</span>
          </button>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text mb-2">{job.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(job)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit className="w-5 h-5 text-primary" />
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
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
                  {editingJob ? 'Edit Job Posting' : 'Add Job Posting'}
                </h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-6 h-6 text-text" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Job Title *</label>
                  <input
                    {...register('title', { required: 'Title is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.title && <p className="mt-1 text-sm text-error">{errors.title.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Department *</label>
                  <input
                    {...register('department', { required: 'Department is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.department && <p className="mt-1 text-sm text-error">{errors.department.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Location *</label>
                  <input
                    {...register('location', { required: 'Location is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.location && <p className="mt-1 text-sm text-error">{errors.location.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Employment Type *</label>
                  <select
                    {...register('type', { required: 'Type is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                  {errors.type && <p className="mt-1 text-sm text-error">{errors.type.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Description *</label>
                  <textarea
                    {...register('description', { required: 'Description is required' })}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.description && <p className="mt-1 text-sm text-error">{errors.description.message}</p>}
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    {editingJob ? 'Update Job' : 'Add Job'}
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
