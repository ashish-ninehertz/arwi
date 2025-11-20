import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Briefcase, 
  Users, 
  FolderOpen, 
  MessageSquare, 
  FileText, 
  Settings,
  LogOut,
  BarChart
} from 'lucide-react';

export function DashboardPage() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const menuItems = [
    {
      title: 'Services',
      description: 'Manage service offerings',
      icon: Briefcase,
      path: '/admin/services',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Portfolio',
      description: 'Manage project showcase',
      icon: FolderOpen,
      path: '/admin/portfolio',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Team Members',
      description: 'Manage team profiles',
      icon: Users,
      path: '/admin/team',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Testimonials',
      description: 'Manage client reviews',
      icon: MessageSquare,
      path: '/admin/testimonials',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Blog Posts',
      description: 'Manage blog content',
      icon: FileText,
      path: '/admin/blog',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Careers',
      description: 'Manage job postings',
      icon: Briefcase,
      path: '/admin/careers',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-text font-heading">Admin Dashboard</h1>
              <p className="text-sm text-text-secondary">Welcome back, {user?.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 px-4 py-2 bg-error text-white rounded-lg hover:bg-error/90 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text mb-8 font-heading">
            Content Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
