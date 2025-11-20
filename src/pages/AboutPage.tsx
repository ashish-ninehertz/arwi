import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their success is our success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We believe in open communication and honest relationships with our clients and team members.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              About arwi
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering businesses through innovative technology solutions since 2009
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-text mb-6 font-heading">
                Our Story
              </h2>
              <p className="text-text-secondary mb-4">
                Founded in 2009, arwi began with a simple mission: to help businesses harness the power of technology 
                to achieve their goals. What started as a small team of passionate developers has grown into a 
                full-service IT company serving clients worldwide.
              </p>
              <p className="text-text-secondary mb-4">
                Over the years, we've evolved alongside the technology landscape, continuously expanding our expertise 
                and service offerings. From web development to artificial intelligence, cloud solutions to cybersecurity, 
                we've built a comprehensive portfolio of services designed to meet the diverse needs of modern businesses.
              </p>
              <p className="text-text-secondary">
                Today, we're proud to have completed over 1,000 projects for more than 500 clients across various 
                industries. Our success is built on a foundation of technical excellence, innovative thinking, and 
                unwavering commitment to client satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8"
            >
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-text mb-4 font-heading">Our Mission</h3>
              <p className="text-text-secondary">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and 
                competitive advantage. We strive to be more than just a service provider – we aim to be a trusted 
                partner in our clients' digital transformation journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8"
            >
              <Eye className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-3xl font-bold text-text mb-4 font-heading">Our Vision</h3>
              <p className="text-text-secondary">
                To be the leading IT solutions provider recognized globally for innovation, excellence, and client 
                success. We envision a future where technology seamlessly integrates with business operations, 
                enabling organizations to achieve their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-4 font-heading">
              Our Values
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-text mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Happy Clients' },
              { value: '1000+', label: 'Projects Completed' },
              { value: '50+', label: 'Team Members' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
