import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Lock, Mail, AlertCircle, User } from 'lucide-react';

interface LoginFormData {
  email: string;
  password: string;
}

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: loginErrors } } = useForm<LoginFormData>();
  const { register: registerSignup, handleSubmit: handleSubmitSignup, formState: { errors: signupErrors }, watch } = useForm<SignupFormData>();
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const password = watch('password');

  const onLoginSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { error } = await signIn(data.email, data.password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/admin/dashboard');
    }
  };

  const onSignupSubmit = async (data: SignupFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    const { error } = await signUp(data.email, data.password, data.fullName);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess('Account created successfully! Please check your email to verify your account.');
      setLoading(false);
      setTimeout(() => {
        setIsSignup(false);
        setSuccess(null);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-accent flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-text mb-2 font-heading">
            {isSignup ? 'Create Admin Account' : 'Admin Login'}
          </h1>
          <p className="text-text-secondary">
            {isSignup ? 'Sign up to access the dashboard' : 'Sign in to access the dashboard'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-error/10 border border-error rounded-lg flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
            <p className="text-sm text-error">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <p className="text-sm text-success">{success}</p>
          </div>
        )}

        {!isSignup ? (
          // Login Form
          <form onSubmit={handleSubmitLogin(onLoginSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  {...registerLogin('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="admin@arwi.com"
                />
              </div>
              {loginErrors.email && (
                <p className="mt-1 text-sm text-error">{loginErrors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="password"
                  id="password"
                  {...registerLogin('password', { required: 'Password is required' })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
              {loginErrors.password && (
                <p className="mt-1 text-sm text-error">{loginErrors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        ) : (
          // Signup Form
          <form onSubmit={handleSubmitSignup(onSignupSubmit)} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-text mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="text"
                  id="fullName"
                  {...registerSignup('fullName', { required: 'Full name is required' })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              {signupErrors.fullName && (
                <p className="mt-1 text-sm text-error">{signupErrors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-text mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="email"
                  id="signup-email"
                  {...registerSignup('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="admin@arwi.com"
                />
              </div>
              {signupErrors.email && (
                <p className="mt-1 text-sm text-error">{signupErrors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-text mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="password"
                  id="signup-password"
                  {...registerSignup('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
              {signupErrors.password && (
                <p className="mt-1 text-sm text-error">{signupErrors.password.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-text mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                <input
                  type="password"
                  id="confirmPassword"
                  {...registerSignup('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
              {signupErrors.confirmPassword && (
                <p className="mt-1 text-sm text-error">{signupErrors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
        )}

        {/* Toggle between Login and Signup */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setError(null);
              setSuccess(null);
            }}
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            {isSignup ? (
              <>
                Already have an account? <span className="font-semibold">Sign In</span>
              </>
            ) : (
              <>
                Don't have an account? <span className="font-semibold">Sign Up</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
