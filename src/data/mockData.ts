export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  client: string;
  technologies: string[];
  category: string;
  url?: string;
  completedDate: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  logoUrl: string;
}

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices. From responsive websites to complex enterprise solutions.',
    icon: 'Code',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Integration',
      'Performance Optimization'
    ],
    pricing: 'Starting at $5,000',
    category: 'Development'
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    icon: 'Smartphone',
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    pricing: 'Starting at $10,000',
    category: 'Development'
  },
  {
    id: '3',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for AWS, Azure, and Google Cloud Platform.',
    icon: 'Cloud',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Auto-scaling Solutions',
      'Disaster Recovery',
      'Cost Optimization',
      '24/7 Monitoring'
    ],
    pricing: 'Custom Pricing',
    category: 'Infrastructure'
  },
  {
    id: '4',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
    icon: 'Brain',
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Chatbots & Virtual Assistants',
      'Data Analysis'
    ],
    pricing: 'Starting at $15,000',
    category: 'AI/ML'
  },
  {
    id: '5',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    icon: 'Shield',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Management',
      'Incident Response',
      'Security Training',
      'Threat Monitoring'
    ],
    pricing: 'Starting at $8,000',
    category: 'Security'
  },
  {
    id: '6',
    title: 'DevOps & CI/CD',
    description: 'Streamline your development workflow with automated deployment pipelines and infrastructure management.',
    icon: 'GitBranch',
    features: [
      'Continuous Integration',
      'Continuous Deployment',
      'Container Orchestration',
      'Infrastructure Automation',
      'Monitoring & Logging',
      'Performance Tuning'
    ],
    pricing: 'Starting at $6,000',
    category: 'Infrastructure'
  },
  {
    id: '7',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
    icon: 'Palette',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
      'Design Systems',
      'Accessibility Compliance'
    ],
    pricing: 'Starting at $4,000',
    category: 'Design'
  },
  {
    id: '8',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization.',
    icon: 'BarChart',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Modeling',
      'Real-time Analytics',
      'Custom Dashboards',
      'Data Warehousing'
    ],
    pricing: 'Starting at $7,000',
    category: 'Analytics'
  },
  {
    id: '9',
    title: 'Blockchain Development',
    description: 'Decentralized applications and smart contracts built on leading blockchain platforms.',
    icon: 'Link',
    features: [
      'Smart Contract Development',
      'DApp Development',
      'Token Creation',
      'NFT Platforms',
      'Blockchain Integration',
      'Security Audits'
    ],
    pricing: 'Starting at $12,000',
    category: 'Blockchain'
  },
  {
    id: '10',
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.',
    icon: 'Users',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'System Architecture',
      'Vendor Selection',
      'Project Management',
      'Training & Support'
    ],
    pricing: 'Hourly Rate: $150',
    category: 'Consulting'
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform Redesign',
    description: 'Complete redesign and development of a multi-vendor e-commerce platform with advanced filtering, real-time inventory management, and integrated payment processing.',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'RetailCorp Inc.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    category: 'E-commerce',
    url: 'https://example.com',
    completedDate: '2024-01'
  },
  {
    id: '2',
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management system with appointment scheduling, electronic health records, and telemedicine capabilities.',
    imageUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'MediCare Solutions',
    technologies: ['Angular', 'Python', 'MongoDB', 'Docker', 'Azure'],
    category: 'Healthcare',
    completedDate: '2023-11'
  },
  {
    id: '3',
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial analytics platform with predictive modeling, risk assessment, and automated reporting for investment firms.',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'InvestTech Partners',
    technologies: ['Vue.js', 'Django', 'Redis', 'TensorFlow', 'GCP'],
    category: 'Finance',
    completedDate: '2024-02'
  },
  {
    id: '4',
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with personalized workout plans, nutrition tracking, and social features for community engagement.',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'FitLife Technologies',
    technologies: ['React Native', 'Firebase', 'GraphQL', 'Stripe'],
    category: 'Mobile',
    completedDate: '2023-12'
  },
  {
    id: '5',
    title: 'AI-Powered Customer Service',
    description: 'Intelligent chatbot system with natural language processing for automated customer support and ticket routing.',
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'ServiceHub Global',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Kubernetes', 'AWS'],
    category: 'AI/ML',
    completedDate: '2024-03'
  },
  {
    id: '6',
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain visibility platform with real-time tracking, inventory optimization, and predictive analytics.',
    imageUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'LogiTech Systems',
    technologies: ['React', 'Java', 'Oracle', 'Kafka', 'Docker'],
    category: 'Enterprise',
    completedDate: '2023-10'
  },
  {
    id: '7',
    title: 'Real Estate Marketplace',
    description: 'Property listing platform with virtual tours, mortgage calculators, and AI-powered property recommendations.',
    imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'PropertyPro Realty',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Mapbox', 'AWS'],
    category: 'Real Estate',
    completedDate: '2024-01'
  },
  {
    id: '8',
    title: 'Educational Learning Platform',
    description: 'Interactive e-learning platform with video courses, live sessions, assessments, and progress tracking for students.',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'EduTech Academy',
    technologies: ['React', 'Express', 'MongoDB', 'WebRTC', 'AWS'],
    category: 'Education',
    completedDate: '2023-09'
  },
  {
    id: '9',
    title: 'Restaurant Management System',
    description: 'Comprehensive restaurant management solution with POS, inventory management, online ordering, and delivery tracking.',
    imageUrl: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'FoodChain Restaurants',
    technologies: ['Flutter', 'Firebase', 'Stripe', 'Google Maps API'],
    category: 'Hospitality',
    completedDate: '2024-02'
  },
  {
    id: '10',
    title: 'IoT Smart Home Platform',
    description: 'Unified smart home control system integrating multiple IoT devices with voice control and automation rules.',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'SmartHome Innovations',
    technologies: ['React', 'MQTT', 'Node.js', 'InfluxDB', 'AWS IoT'],
    category: 'IoT',
    completedDate: '2023-11'
  },
  {
    id: '11',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting platform using blockchain technology for elections and corporate governance.',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'DemocracyChain',
    technologies: ['Solidity', 'Ethereum', 'React', 'Web3.js', 'IPFS'],
    category: 'Blockchain',
    completedDate: '2024-03'
  },
  {
    id: '12',
    title: 'Social Media Analytics Tool',
    description: 'Comprehensive social media monitoring and analytics platform with sentiment analysis and competitor tracking.',
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'SocialMetrics Pro',
    technologies: ['Vue.js', 'Python', 'Elasticsearch', 'Redis', 'GCP'],
    category: 'Marketing',
    completedDate: '2023-12'
  },
  {
    id: '13',
    title: 'Telemedicine Platform',
    description: 'HIPAA-compliant telemedicine solution with video consultations, prescription management, and patient records.',
    imageUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'HealthConnect',
    technologies: ['React', 'WebRTC', 'Node.js', 'PostgreSQL', 'AWS'],
    category: 'Healthcare',
    completedDate: '2024-01'
  },
  {
    id: '14',
    title: 'Inventory Management System',
    description: 'Cloud-based inventory tracking system with barcode scanning, automated reordering, and multi-location support.',
    imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'WarehousePro',
    technologies: ['Angular', 'Java', 'MySQL', 'Docker', 'Azure'],
    category: 'Enterprise',
    completedDate: '2023-10'
  },
  {
    id: '15',
    title: 'Travel Booking Platform',
    description: 'Multi-service travel booking platform with flights, hotels, car rentals, and personalized itinerary planning.',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    client: 'TravelEase',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Stripe', 'AWS'],
    category: 'Travel',
    completedDate: '2024-02'
  }
];

export const MOCK_TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    bio: 'With over 15 years of experience in software architecture and team leadership, Sarah drives our technical vision and innovation strategy.',
    photoUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    github: 'https://github.com'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Lead Full-Stack Developer',
    bio: 'Michael specializes in building scalable web applications and has a passion for clean code and modern development practices.',
    photoUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UI/UX Design Lead',
    bio: 'Emily creates beautiful and intuitive user experiences, combining aesthetic design with user-centered research and testing.',
    photoUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'DevOps Engineer',
    bio: 'David ensures our infrastructure is reliable, scalable, and secure, with expertise in cloud platforms and automation.',
    photoUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: '5',
    name: 'Jessica Martinez',
    role: 'AI/ML Engineer',
    bio: 'Jessica develops intelligent solutions using machine learning and artificial intelligence to solve complex business problems.',
    photoUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: '6',
    name: 'Robert Taylor',
    role: 'Cybersecurity Specialist',
    bio: 'Robert protects our clients\' digital assets with comprehensive security strategies and proactive threat monitoring.',
    photoUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    id: '7',
    name: 'Amanda Foster',
    role: 'Mobile Development Lead',
    bio: 'Amanda builds high-performance mobile applications for iOS and Android, focusing on user experience and performance.',
    photoUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: '8',
    name: 'James Wilson',
    role: 'Data Scientist',
    bio: 'James transforms data into actionable insights, specializing in predictive analytics and business intelligence.',
    photoUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'John Anderson',
    company: 'TechCorp Solutions',
    position: 'CEO',
    content: 'Working with arwi transformed our digital presence. Their team delivered a cutting-edge solution that exceeded our expectations and significantly improved our operational efficiency.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2',
    clientName: 'Maria Garcia',
    company: 'HealthFirst Medical',
    position: 'CTO',
    content: 'The healthcare management system developed by arwi has revolutionized how we manage patient care. The attention to security and compliance was exceptional.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '3',
    clientName: 'David Thompson',
    company: 'RetailPro Inc.',
    position: 'Director of IT',
    content: 'Our e-commerce platform redesign was completed on time and within budget. The results speak for themselves - 40% increase in conversions and improved customer satisfaction.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '4',
    clientName: 'Lisa Chen',
    company: 'FinanceHub',
    position: 'VP of Technology',
    content: 'The financial analytics dashboard has become an indispensable tool for our investment team. Real-time insights and predictive modeling have given us a competitive edge.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '5',
    clientName: 'Robert Martinez',
    company: 'EduLearn Platform',
    position: 'Founder',
    content: 'arwi built our e-learning platform from the ground up. Their expertise in educational technology and user experience design resulted in a platform our students love.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '6',
    clientName: 'Jennifer Lee',
    company: 'SmartHome Tech',
    position: 'Product Manager',
    content: 'The IoT platform developed by arwi seamlessly integrates all our smart home devices. The user interface is intuitive and the system is incredibly reliable.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '7',
    clientName: 'Michael Brown',
    company: 'LogiChain Solutions',
    position: 'Operations Director',
    content: 'Our supply chain visibility has improved dramatically thanks to arwi\'s custom solution. Real-time tracking and predictive analytics have optimized our entire operation.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '8',
    clientName: 'Sarah Williams',
    company: 'PropertyVision',
    position: 'CEO',
    content: 'The real estate marketplace platform has transformed how we connect buyers with properties. The virtual tour feature and AI recommendations are game-changers.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '9',
    clientName: 'Kevin Park',
    company: 'FitLife App',
    position: 'Co-Founder',
    content: 'Our mobile fitness app has received outstanding reviews thanks to arwi\'s development expertise. The app is fast, reliable, and our users love the features.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '10',
    clientName: 'Rachel Green',
    company: 'SocialMetrics',
    position: 'Marketing Director',
    content: 'The social media analytics tool has become essential for our marketing strategy. The insights and competitor analysis features are incredibly valuable.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '11',
    clientName: 'Thomas Wright',
    company: 'SecureBank',
    position: 'CISO',
    content: 'arwi\'s cybersecurity team conducted a thorough audit and implemented robust security measures. We now have complete confidence in our digital infrastructure.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '12',
    clientName: 'Nicole Davis',
    company: 'CloudScale',
    position: 'VP Engineering',
    content: 'The cloud migration project was executed flawlessly. arwi\'s expertise in cloud architecture and DevOps practices ensured a smooth transition with zero downtime.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise Software Development',
    slug: 'future-of-ai-enterprise-software',
    content: `Artificial Intelligence is revolutionizing how we build and deploy enterprise software. In this comprehensive guide, we explore the latest trends and practical applications of AI in software development.

## Key Trends in AI-Powered Development

Machine learning models are now being integrated into every stage of the software development lifecycle. From automated code reviews to intelligent testing frameworks, AI is making developers more productive than ever.

### Automated Code Generation

Tools like GitHub Copilot and ChatGPT are changing how developers write code. These AI assistants can generate boilerplate code, suggest optimizations, and even help debug complex issues.

### Intelligent Testing

AI-powered testing tools can automatically generate test cases, identify edge cases, and predict potential bugs before they reach production. This significantly reduces the time spent on manual testing.

## Practical Applications

Many enterprises are already seeing the benefits of AI integration:

- **Predictive Maintenance**: AI models can predict system failures before they occur
- **Automated Documentation**: Natural language processing can generate and maintain documentation
- **Code Quality Analysis**: Machine learning models can identify code smells and suggest improvements

## Challenges and Considerations

While AI offers tremendous benefits, there are important considerations:

1. **Data Privacy**: Ensuring AI models don't expose sensitive information
2. **Model Bias**: Addressing potential biases in training data
3. **Integration Complexity**: Seamlessly integrating AI into existing workflows

## Conclusion

The future of enterprise software development is undoubtedly intertwined with AI. Organizations that embrace these technologies early will have a significant competitive advantage.`,
    excerpt: 'Explore how artificial intelligence is transforming enterprise software development and what it means for the future of technology.',
    coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Johnson',
    publishedAt: '2024-03-15',
    tags: ['AI', 'Machine Learning', 'Enterprise', 'Software Development'],
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Building Scalable Microservices Architecture',
    slug: 'building-scalable-microservices',
    content: `Microservices architecture has become the de facto standard for building modern, scalable applications. This guide covers best practices and common pitfalls.

## Why Microservices?

Microservices offer several advantages over monolithic architectures:

- **Independent Deployment**: Each service can be deployed independently
- **Technology Diversity**: Different services can use different tech stacks
- **Scalability**: Scale individual services based on demand
- **Fault Isolation**: Failures in one service don't bring down the entire system

## Key Design Principles

### 1. Single Responsibility

Each microservice should have a single, well-defined responsibility. This makes services easier to understand, test, and maintain.

### 2. API Gateway Pattern

Use an API gateway to handle cross-cutting concerns like authentication, rate limiting, and request routing.

### 3. Service Discovery

Implement service discovery to allow services to find and communicate with each other dynamically.

## Communication Patterns

### Synchronous Communication

REST APIs and gRPC are common choices for synchronous communication between services.

### Asynchronous Communication

Message queues and event streams enable loose coupling and better scalability.

## Monitoring and Observability

Distributed tracing, centralized logging, and metrics collection are essential for managing microservices in production.

## Conclusion

While microservices add complexity, the benefits in terms of scalability and maintainability make them worth considering for large-scale applications.`,
    excerpt: 'Learn the best practices for designing and implementing microservices architecture in modern applications.',
    coverImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Michael Chen',
    publishedAt: '2024-03-10',
    tags: ['Microservices', 'Architecture', 'DevOps', 'Cloud'],
    readTime: '10 min read'
  },
  {
    id: '3',
    title: 'Cybersecurity Best Practices for 2024',
    slug: 'cybersecurity-best-practices-2024',
    content: `As cyber threats continue to evolve, organizations must stay ahead with robust security practices. Here's what you need to know for 2024.

## The Threat Landscape

Cybersecurity threats are becoming more sophisticated:

- **Ransomware Attacks**: Increasingly targeted and damaging
- **Supply Chain Vulnerabilities**: Attacks through third-party dependencies
- **AI-Powered Threats**: Automated attacks using machine learning
- **Zero-Day Exploits**: Unknown vulnerabilities being exploited

## Essential Security Measures

### 1. Zero Trust Architecture

Never trust, always verify. Implement strict access controls and continuous authentication.

### 2. Multi-Factor Authentication

MFA should be mandatory for all user accounts, especially those with elevated privileges.

### 3. Regular Security Audits

Conduct penetration testing and vulnerability assessments regularly.

### 4. Employee Training

Human error remains the weakest link. Regular security awareness training is crucial.

## Incident Response Planning

Have a comprehensive incident response plan that includes:

- Detection and analysis procedures
- Containment strategies
- Recovery processes
- Post-incident review

## Compliance and Regulations

Stay compliant with relevant regulations like GDPR, HIPAA, and SOC 2.

## Conclusion

Cybersecurity is an ongoing process, not a one-time implementation. Stay vigilant and keep your defenses updated.`,
    excerpt: 'Stay protected with the latest cybersecurity best practices and strategies for defending against modern threats.',
    coverImage: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Robert Taylor',
    publishedAt: '2024-03-05',
    tags: ['Cybersecurity', 'Security', 'Best Practices', 'Compliance'],
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Modern UI/UX Design Trends',
    slug: 'modern-ui-ux-design-trends',
    content: `User experience design continues to evolve. Here are the trends shaping digital experiences in 2024.

## Minimalism and Clarity

Less is more. Clean, uncluttered interfaces with clear visual hierarchy are dominating modern design.

## Dark Mode

Dark mode is no longer optional. Users expect the ability to switch between light and dark themes.

## Micro-Interactions

Small animations and feedback mechanisms create delightful user experiences and improve usability.

## Accessibility First

Designing for accessibility from the start ensures your product is usable by everyone.

## Voice User Interfaces

Voice interaction is becoming increasingly important, especially for mobile and IoT devices.

## Personalization

AI-powered personalization creates unique experiences tailored to individual users.

## Conclusion

Great design is invisible. Focus on creating intuitive, accessible experiences that users love.`,
    excerpt: 'Discover the latest UI/UX design trends that are shaping the future of digital experiences.',
    coverImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Emily Rodriguez',
    publishedAt: '2024-02-28',
    tags: ['UI/UX', 'Design', 'Trends', 'User Experience'],
    readTime: '6 min read'
  },
  {
    id: '5',
    title: 'Cloud Migration Strategies for Enterprises',
    slug: 'cloud-migration-strategies',
    content: `Moving to the cloud is a major undertaking. This guide covers proven strategies for successful cloud migration.

## Assessment Phase

Before migrating, assess your current infrastructure:

- Application dependencies
- Data storage requirements
- Compliance needs
- Performance requirements

## Migration Strategies

### Rehost (Lift and Shift)

Move applications to the cloud with minimal changes. Quick but doesn't take full advantage of cloud benefits.

### Replatform

Make some optimizations during migration without changing core architecture.

### Refactor

Redesign applications to be cloud-native. Most time-consuming but offers maximum benefits.

## Best Practices

1. Start with non-critical applications
2. Implement robust monitoring
3. Plan for data migration carefully
4. Train your team on cloud technologies
5. Optimize costs continuously

## Common Pitfalls

- Underestimating complexity
- Ignoring security considerations
- Poor cost management
- Inadequate testing

## Conclusion

Cloud migration is a journey, not a destination. Plan carefully and execute methodically for success.`,
    excerpt: 'Learn proven strategies for successfully migrating your enterprise applications to the cloud.',
    coverImage: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'David Kim',
    publishedAt: '2024-02-20',
    tags: ['Cloud', 'Migration', 'AWS', 'Azure', 'DevOps'],
    readTime: '9 min read'
  }
];

export const MOCK_TECHNOLOGIES: Technology[] = [
  { id: '1', name: 'React', category: 'Frontend', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { id: '2', name: 'Angular', category: 'Frontend', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { id: '3', name: 'Vue.js', category: 'Frontend', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { id: '4', name: 'Node.js', category: 'Backend', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { id: '5', name: 'Python', category: 'Backend', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { id: '6', name: 'Java', category: 'Backend', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { id: '7', name: 'PostgreSQL', category: 'Database', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { id: '8', name: 'MongoDB', category: 'Database', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { id: '9', name: 'Redis', category: 'Database', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { id: '10', name: 'AWS', category: 'Cloud', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { id: '11', name: 'Azure', category: 'Cloud', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { id: '12', name: 'Google Cloud', category: 'Cloud', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { id: '13', name: 'Docker', category: 'DevOps', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { id: '14', name: 'Kubernetes', category: 'DevOps', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { id: '15', name: 'TensorFlow', category: 'AI/ML', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { id: '16', name: 'PyTorch', category: 'AI/ML', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { id: '17', name: 'GraphQL', category: 'API', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { id: '18', name: 'TypeScript', category: 'Language', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { id: '19', name: 'Flutter', category: 'Mobile', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { id: '20', name: 'React Native', category: 'Mobile', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
];
