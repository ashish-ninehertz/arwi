import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Plus, Edit, Trash2, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { TeamMember } from '../../data/mockData';

export function TeamManagementPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<TeamMember>();

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    if (!supabase) return;
    
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setTeamMembers(data);
    }
    setLoading(false);
  };

  const onSubmit = async (data: any) => {
    if (!supabase) return;

    const memberData = {
      name: data.name,
      role: data.role,
      bio: data.bio,
      photo_url: data.photoUrl,
      linkedin: data.linkedin || null,
      twitter: data.twitter || null,
      github: data.github || null,
    };

    if (editingMember) {
      const { error } = await supabase
        .from('team_members')
        .update(memberData)
        .eq('id', editingMember.id);

      if (!error) {
        fetchTeamMembers();
        closeModal();
      }
    } else {
      const { error } = await supabase
        .from('team_members')
        .insert([memberData]);

      if (!error) {
        fetchTeamMembers();
        closeModal();
      }
    }
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setValue('name', member.name);
    setValue('role', member.role);
    setValue('bio', member.bio);
    setValue('photoUrl', member.photoUrl);
    setValue('linkedin', member.linkedin || '');
    setValue('twitter', member.twitter || '');
    setValue('github', member.github || '');
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!supabase) return;
    if (!confirm('Are you sure you want to delete this team member?')) return;

    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchTeamMembers();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingMember(null);
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
            <h1 className="text-3xl font-bold text-text font-heading">Team Management</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Team Member</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={member.photo_url}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(member)}
                    className="flex-1 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit className="w-5 h-5 text-primary mx-auto" />
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="flex-1 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-error mx-auto" />
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
                  {editingMember ? 'Edit Team Member' : 'Add Team Member'}
                </h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-6 h-6 text-text" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Name *</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.name && <p className="mt-1 text-sm text-error">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Role *</label>
                  <input
                    {...register('role', { required: 'Role is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.role && <p className="mt-1 text-sm text-error">{errors.role.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Bio *</label>
                  <textarea
                    {...register('bio', { required: 'Bio is required' })}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.bio && <p className="mt-1 text-sm text-error">{errors.bio.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Photo URL *</label>
                  <input
                    {...register('photoUrl', { required: 'Photo URL is required' })}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.photoUrl && <p className="mt-1 text-sm text-error">{errors.photoUrl.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">LinkedIn URL</label>
                  <input
                    {...register('linkedin')}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">Twitter URL</label>
                  <input
                    {...register('twitter')}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">GitHub URL</label>
                  <input
                    {...register('github')}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    {editingMember ? 'Update Member' : 'Add Member'}
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
