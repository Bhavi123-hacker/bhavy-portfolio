// Portfolio Data Constants — Bhavy Garg

export const PERSONAL_INFO = {
  name: 'Bhavy Garg',
  title: 'Software Engineer & ML Engineer',
  email: 'bhavygarg7636@gmail.com',
  phone: '+91 8810517347',
  location: 'New Delhi, India',
  github: 'https://github.com/Bhavi123-hacker',
  githubUsername: 'Bhavi123-hacker',
  linkedin: 'https://www.linkedin.com/in/bhavy-garg-11636231b/',
  resume: '/bhavyresume.pdf',
  profileImage: 'https://i.postimg.cc/bv4CSCyg/Screenshot-2026-07-30-191615.png',
  bio: 'Building AI-powered products with Machine Learning, Full-Stack Development, and Data Engineering to solve real-world problems.',
  objective: 'To leverage AI and software engineering to build impactful technology that solves real-world problems while continuously growing as a versatile engineer and AI practitioner.',
  cgpa: '9.15/10',
  year: 'B.Tech CSE (AI & ML) · 2024–2028',
};

export const STATS = [
  { value: 7, suffix: '+', label: 'Projects Shipped' },
  { value: 170, suffix: '+', label: 'Problems Solved' },
  { value: 1490, suffix: '', label: 'LeetCode Rating' },
  { value: 9.15, suffix: '', label: 'CGPA / 10', decimals: 2 },
];

export const TYPING_ROLES = [
  'Software Engineer',
  'Machine Learning Engineer',
  'AI Engineer',
  'Full Stack Developer',
  'Data Scientist',
];

export const EDUCATION = [
  {
    id: 'vit',
    institution: 'Vellore Institute of Technology',
    location: 'Chennai, Tamil Nadu',
    degree: 'B.Tech, Computer Science & Engineering (AI & ML)',
    period: '2024 – 2028',
    grade: 'CGPA: 9.15/10',
    description: 'Specializing in Artificial Intelligence and Machine Learning with strong focus on software engineering, data structures, algorithms, and full-stack development.',
    highlights: ['AI & ML Specialization', 'Core CS Foundation', '9.15 CGPA', 'Active in R&D & Clubs'],
    icon: '🎓',
  },
  {
    id: 'nvps-12',
    institution: 'National Victor Public School',
    location: 'New Delhi',
    degree: 'CBSE Class XII',
    period: '2024',
    grade: '85.8%',
    description: 'Senior secondary education with focus on Science, Mathematics and Computer Science.',
    highlights: ['Science Stream', 'Mathematics', 'Computer Science'],
    icon: '🏫',
  },
  {
    id: 'nvps-10',
    institution: 'National Victor Public School',
    location: 'New Delhi',
    degree: 'CBSE Class X',
    period: '2022',
    grade: '92%',
    description: 'Secondary education with strong academic performance across all subjects.',
    highlights: ['92% Score', 'All Subjects'],
    icon: '📚',
  },
];

export const EXPERIENCE = [
  {
    id: 'cognifyz',
    company: 'Cognifyz Technologies',
    role: 'Machine Learning Intern',
    period: 'June 2026 – July 2026',
    location: 'Remote',
    description: [
      'Built scalable data preprocessing pipelines using Pandas and Scikit-learn for datasets exceeding 10,000 records, improving data quality and model readiness',
      'Developed and evaluated regression and classification models using feature engineering and model evaluation techniques',
      'Applied hyperparameter tuning, cross-validation, and performance metrics to optimize ML model accuracy',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Feature Engineering', 'Data Analytics'],
    icon: '🤖',
    type: 'internship',
  },
];

export const SKILLS = [
  {
    category: 'Programming Languages',
    icon: '💻',
    color: '#00FF88',
    proficiency: 90,
    technologies: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'C++', level: 78 },
      { name: 'C', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
    ],
  },
  {
    category: 'Machine Learning & AI',
    icon: '🧠',
    color: '#00FF88',
    proficiency: 85,
    technologies: [
      { name: 'Scikit-learn', level: 88 },
      { name: 'Pandas', level: 92 },
      { name: 'NumPy', level: 90 },
      { name: 'Classification', level: 85 },
      { name: 'Regression', level: 85 },
      { name: 'NLP', level: 80 },
      { name: 'Feature Engineering', level: 83 },
      { name: 'Model Evaluation', level: 87 },
    ],
  },
  {
    category: 'Frontend Development',
    icon: '🎨',
    color: '#00FF88',
    proficiency: 82,
    technologies: [
      { name: 'React.js', level: 85 },
      { name: 'Streamlit', level: 88 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Seaborn', level: 83 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Responsive Design', level: 85 },
    ],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    color: '#00FF88',
    proficiency: 78,
    technologies: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'Flask', level: 82 },
      { name: 'REST APIs', level: 85 },
      { name: 'JWT Auth', level: 78 },
      { name: 'RBAC', level: 75 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: '#00FF88',
    proficiency: 80,
    technologies: [
      { name: 'MySQL', level: 85 },
      { name: 'SQLite', level: 88 },
      { name: 'ETL Pipelines', level: 80 },
      { name: 'SQL Queries', level: 87 },
      { name: 'Data Modeling', level: 78 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    color: '#00FF88',
    proficiency: 83,
    technologies: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Power BI', level: 82 },
      { name: 'Jupyter Notebook', level: 92 },
      { name: 'Google Colab', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 80 },
    ],
  },
  {
    category: 'Core CS',
    icon: '📐',
    color: '#00FF88',
    proficiency: 85,
    technologies: [
      { name: 'Data Structures', level: 88 },
      { name: 'Algorithms', level: 85 },
      { name: 'OOP', level: 90 },
      { name: 'DBMS', level: 82 },
      { name: 'OS Concepts', level: 78 },
      { name: 'Computer Networks', level: 75 },
    ],
  },
  {
    category: 'Software Engineering',
    icon: '🏗️',
    color: '#00FF88',
    proficiency: 76,
    technologies: [
      { name: 'System Design', level: 75 },
      { name: 'Agile', level: 78 },
      { name: 'Clean Architecture', level: 78 },
      { name: 'API Design', level: 82 },
      { name: 'Code Review', level: 80 },
    ],
  },
];

export const SERVICES = [
  {
    icon: '🧠',
    title: 'Machine Learning Solutions',
    description: 'Build predictive models, recommendation systems, NLP pipelines, and intelligent data-driven systems with proper model evaluation and optimization.',
    highlights: ['Predictive Models', 'NLP & Sentiment Analysis', 'Recommendation Engines', 'Model Optimization'],
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'End-to-end exploratory data analysis, business intelligence dashboards with Power BI and Streamlit, and statistical insight extraction.',
    highlights: ['EDA & Visualization', 'Power BI Dashboards', 'Statistical Analysis', 'Streamlit Apps'],
  },
  {
    icon: '🌐',
    title: 'Full Stack Development',
    description: 'Responsive web applications with modern frontend frameworks, robust REST APIs, database integration, and authentication systems.',
    highlights: ['React & Node.js', 'REST APIs', 'JWT Authentication', 'Responsive Design'],
  },
  {
    icon: '💻',
    title: 'Software Development',
    description: 'Scalable, maintainable software with clean architecture, efficient algorithms, database systems, and solid engineering principles.',
    highlights: ['Clean Architecture', 'Algorithm Design', 'Database Systems', 'Code Quality'],
  },
  {
    icon: '🔧',
    title: 'Technical Consulting',
    description: 'Guidance on AI integration, system architecture, data pipeline design, and engineering best practices for your projects.',
    highlights: ['AI Integration', 'Architecture Review', 'Data Pipelines', 'Git Workflows'],
  },
  {
    icon: '🔌',
    title: 'API & Backend Development',
    description: 'RESTful API design and implementation using Node.js, Express, Flask, and SQL backends with proper documentation.',
    highlights: ['Node.js & Express', 'Flask APIs', 'SQL Databases', 'API Documentation'],
  },
];

export interface CaseStudyData {
  overview: string;
  problemStatement: string;
  solution: string;
  objectives: string[];
  keyFeatures: string[];
  architecture: {
    client: string;
    api: string;
    data: string;
    dataFlow?: string;
  };
  techStack: { name: string; role: string; why: string }[];
  mlDetails?: {
    dataset: string;
    preprocessing: string;
    algorithms: { name: string; notes: string }[];
    metrics: { name: string; value: string }[];
    limitations: string;
  };
  apiDesign?: {
    description: string;
    endpoints: { method: string; path: string; description: string }[];
  };
  databaseSchema: string;
  highlights: string[];
  challengesFaced: { title: string; description: string }[];
  results: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  timeline: string;
  teamSize: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  subTagline: string;
  description: string;
  longDescription: string;
  highlights: string[];
  technologies: string[];
  github: string;
  live: string | null;
  featured: boolean;
  category: string;
  image: string;
  caseStudy: CaseStudyData;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bluestock',
    title: 'Bluestock',
    tagline: 'Mutual Fund Analytics Platform',
    subTagline: 'End-to-end ETL, risk analytics and Power BI intelligence for mutual funds.',
    description: 'Engineered an end-to-end ETL and analytics pipeline to ingest, clean, validate, and store mutual fund data in SQLite using modular Python scripts.',
    longDescription: 'Engineered a comprehensive mutual fund analytics platform featuring modular ETL pipelines, advanced portfolio risk analytics using financial mathematics, and a 4-page interactive Power BI dashboard.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=90',
    highlights: [
      'Engineered end-to-end ETL pipeline to ingest, clean, validate & store mutual fund data in SQLite using modular Python scripts.',
      'Performed portfolio risk analytics using Sharpe Ratio, Alpha, Beta, VaR, CVaR, Monte Carlo simulation & Markowitz Efficient Frontier optimization.',
      'Designed a 4-page interactive Power BI dashboard with KPI cards, risk-return analysis, investor insights, SIP trends & interactive filtering.',
    ],
    technologies: ['Python', 'SQL', 'SQLite', 'Pandas', 'ETL', 'Power BI', 'Streamlit'],
    github: 'https://github.com/Bhavi123-hacker/mutual-fund-analysis',
    live: null,
    featured: true,
    category: 'Data Analytics',
    caseStudy: {
      overview: 'Bluestock processes mutual fund data end-to-end — from raw ingestion to risk factor calculation and Power BI decision dashboards.',
      problemStatement: 'Retail and institutional investors lack standardized quantitative visibility into mutual fund downside risk and Modern Portfolio Theory metrics.',
      solution: 'A modular Python ETL pipeline feeding normalized financial metrics into SQLite and rendering executive dashboards in Power BI and Streamlit.',
      keyFeatures: [
        'Automated ETL data ingestion & cleaning scripts',
        'Sharpe Ratio, Alpha, Beta, & Treynor risk calculations',
        'Monte Carlo 10,000-path portfolio simulation engine',
        'Value at Risk (VaR 95% & 99%) and CVaR compute',
        'Markowitz Efficient Frontier portfolio optimization',
        '4-page interactive Power BI financial dashboard',
      ],
      architecture: {
        client: 'Power BI Executive Dashboard & Streamlit Web Interface',
        api: 'Python Analytics & Portfolio Compute Engine',
        data: 'SQLite Normalized Financial Data Store',
      },
      databaseSchema: 'funds(id, name, category, risk_rating) nav_history(fund_id, date, nav) risk_metrics(fund_id, sharpe_ratio, beta, var_95, cvar_95)',
      highlights: [
        'Engineered an end-to-end ETL and analytics pipeline to ingest, clean, validate, and store mutual fund data in SQLite using modular Python scripts.',
        'Performed portfolio risk analytics using Sharpe Ratio, Alpha, Beta, VaR, CVaR, Monte Carlo simulation and Markowitz Efficient Frontier optimization.',
        'Designed a 4-page interactive Power BI dashboard with KPI cards, risk-return analysis, investor insights, SIP trends and interactive filtering.',
      ],
      challengesFaced: 'Vectorizing Monte Carlo portfolio simulations over 10,000 iterations without memory bottlenecks.',
      lessonsLearned: 'Vectorized Matrix operations in NumPy outperform iterative loop loops by over 14x in quantitative finance tasks.',
      futureImprovements: [
        'Live ticker integration with NSE/BSE stock exchanges',
        'LSTM-based predictive NAV forecasting',
      ],
      timeline: '2026 · 4 weeks',
      teamSize: 'Individual Project',
    },
  },
  {
    id: 'nifty100',
    title: 'Nifty 100 Financial Intelligence Platform',
    tagline: 'Financial Intelligence System',
    subTagline: 'AI-powered analysis of Nifty 100 fundamentals, valuation and cash flows.',
    description: 'AI-powered financial intelligence system analyzing Nifty 100 companies through financial statements, valuation metrics, and cash flow analysis.',
    longDescription: 'A comprehensive financial analysis system that processes real-time data from India\'s top 100 companies, applying machine learning models to surface actionable investment insights.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1600&q=90',
    highlights: [
      'AI-powered financial intelligence system analyzing Nifty 100 companies through financial statements, valuation metrics & cash flow analysis.',
      'Applies machine learning to surface investment insights from fundamental financial data.',
      'Interactive screening and valuation dashboards with sector comparative clustering.',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization', 'Streamlit', 'SQLite'],
    github: 'https://github.com/Bhavi123-hacker/nifty100-analytics',
    live: null,
    featured: true,
    category: 'Machine Learning',
    caseStudy: {
      overview: 'Nifty 100 Financial Intelligence screens, categorizes, and evaluates India\'s top 100 companies using fundamental ratio analysis and ML clustering.',
      problemStatement: 'Sifting through multi-year balance sheets, P&L reports, and valuation metrics across 100 companies is time-consuming for equity research.',
      solution: 'An automated machine learning screening engine that clusters stocks into Value, Growth, and High-Risk tiers with instant DuPont ratio breakdowns.',
      keyFeatures: [
        'Automated fundamental balance sheet & P&L parser',
        'K-Means Clustering stock classification (K=4)',
        'DuPont Analysis Breakdown (ROE decomposition)',
        'Discounted Cash Flow (DCF) valuation calculator',
        'Interactive Plotly chart visualizations',
      ],
      architecture: {
        client: 'Streamlit Interactive Financial Dashboard',
        api: 'Python Scikit-learn & Ratio Analysis Engine',
        data: 'SQLite Financial Statement Repository',
      },
      databaseSchema: 'companies(ticker, name, sector) financials(ticker, year, revenue, net_profit, free_cash_flow) ratio_scores(ticker, pe_ratio, du_pont_roe, cluster_id)',
      highlights: [
        'AI-powered financial intelligence system analyzing Nifty 100 companies through financial statements, valuation metrics and cash flow analysis.',
        'Applies machine learning to surface investment insights from fundamental data.',
        'Interactive stock classification and sector valuation benchmarks.',
      ],
      challengesFaced: 'Handling distinct ratio baselines across heterogeneous sectors like Banking vs IT.',
      lessonsLearned: 'Sector-wise percentile normalization is critical before feeding ratios to clustering algorithms.',
      futureImprovements: [
        'Earnings call sentiment analysis via NLP Transformers',
        'Automated daily alert webhooks for valuation shifts',
      ],
      timeline: '2026 · 3 weeks',
      teamSize: 'Individual Project',
    },
  },
  {
    id: 'restaurant-analytics',
    title: 'Restaurant Analytics ML Suite',
    tagline: 'ML Performance Prediction',
    subTagline: 'Predicting customer behavior and restaurant performance with ML.',
    description: 'Machine learning system predicting customer behavior and restaurant performance using advanced analytics, statistical modeling, and visualization.',
    longDescription: 'A sophisticated analytics suite leveraging machine learning to predict restaurant success metrics, customer ordering patterns, and performance optimization strategies.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=90',
    highlights: [
      'ML system predicting customer behavior & restaurant performance using advanced analytics and visualization.',
      'Feature engineering on restaurant data including location, cuisine, pricing & ratings.',
      'Interactive Streamlit dashboards surfacing top revenue and rating drivers.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    github: 'https://github.com/Bhavi123-hacker/restaurant-analytics-ml-suite',
    live: null,
    featured: true,
    category: 'Machine Learning',
    caseStudy: {
      overview: 'Restaurant Analytics ML Suite leverages XGBoost and Random Forest models to forecast restaurant ratings, footfall, and revenue drivers.',
      problemStatement: 'Restaurant operators struggle with dynamic pricing, menu profitability, and predicting customer churn due to unstructured review data.',
      solution: 'A machine learning analytics platform evaluating customer feedback, price tiers, and location coordinates to output actionable business recommendations.',
      keyFeatures: [
        'Restaurant Rating Prediction (R² = 0.89)',
        'Customer Footfall & Demand Forecasting',
        'Geographical cuisine popularity mapping',
        'SHAP feature importance visualization',
        'Streamlit business intelligence dashboard',
      ],
      architecture: {
        client: 'Streamlit Executive Intelligence Suite',
        api: 'Scikit-learn & XGBoost Regressors',
        data: 'Pandas Dataframes & Processed CSV Repository',
      },
      databaseSchema: 'restaurants(id, name, location, cuisine, cost_for_two) ratings(restaurant_id, rating_score, votes, review_sentiment)',
      highlights: [
        'ML system predicting customer behavior and restaurant performance using advanced analytics.',
        'Feature engineering on restaurant dataset exceeding 10,000 records.',
        'SHAP values integration for business model interpretability.',
      ],
      challengesFaced: 'Encoding high-cardinality location features without introducing dimension sparsity.',
      lessonsLearned: 'Frequency and Target Encoding preserve predictive signals better than one-hot encoding for high-cardinality spatial features.',
      futureImprovements: [
        'Computer vision integration for dish presentation quality scoring',
        'Real-time POS sales API connection',
      ],
      timeline: '2026 · 3 weeks',
      teamSize: 'Individual Project',
    },
  },
  {
    id: 'truthlens',
    title: 'TruthLens AI — Fake News Detection',
    tagline: 'NLP Fake News Detection',
    subTagline: 'NLP classifier detecting fake news with 93% accuracy.',
    description: 'Developed an NLP-based fake news detection model using TF-IDF and text preprocessing, achieving 93% classification accuracy.',
    longDescription: 'A production-ready fake news detection system combining NLP techniques with machine learning to classify news articles with high accuracy, deployed as an interactive web application.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=90',
    highlights: [
      'Developed NLP-based fake news detection using TF-IDF & text preprocessing, achieving 93% classification accuracy.',
      'Trained and evaluated Logistic Regression and Naive Bayes models using precision, recall, and F1-score.',
      'Interactive Streamlit interface for sub-second text verification.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NLP', 'TF-IDF', 'Streamlit', 'Logistic Regression'],
    github: 'https://github.com/Bhavi123-hacker/truthlens-ai',
    live: null,
    featured: true,
    category: 'NLP',
    caseStudy: {
      overview: 'TruthLens AI is an NLP pipeline and machine learning web application built to combat online misinformation by predicting article authenticity in real-time.',
      problemStatement: 'The rapid spread of unverified news online poses significant challenges for digital information integrity.',
      solution: 'An automated machine learning text classifier utilizing TF-IDF n-grams to detect subtle linguistic indicators of fake news.',
      keyFeatures: [
        'TF-IDF text vectorization with n-gram feature extraction',
        '93% accuracy on benchmark news datasets',
        'Linguistic analysis highlighting suspicious keyword triggers',
        'Interactive Streamlit web interface',
      ],
      architecture: {
        client: 'Streamlit Text Analysis UI',
        api: 'NLTK Preprocessing & Scikit-learn Classifier',
        data: 'Vectorized N-Gram Feature Matrix',
      },
      databaseSchema: 'articles(id, title, content, tfidf_vector, prediction, confidence_score)',
      highlights: [
        'Developed an NLP-based fake news detection model using TF-IDF and text preprocessing, achieving 93% classification accuracy.',
        'Trained and evaluated Logistic Regression and Naive Bayes models.',
        'Interactive Streamlit interface for real-time article verification.',
      ],
      challengesFaced: 'Mitigating overfitting on dataset-specific political keyword biases.',
      lessonsLearned: 'Strict lemmatization and L2 regularization prevent models from memorizing specific entity names.',
      futureImprovements: [
        'Fine-tuning BERT Transformer models for contextual news analysis',
        'Browser extension for instant web browsing verification',
      ],
      timeline: '2026 · 2 weeks',
      teamSize: 'Individual Project',
    },
  },
  {
    id: 'foodshare',
    title: 'FoodShare — Food Waste Management System',
    tagline: 'Food Redistribution Platform',
    subTagline: 'Full-stack platform connecting donors, NGOs and volunteers.',
    description: 'Built a full-stack platform connecting food donors, NGOs, volunteers, and administrators to streamline food donation and redistribution.',
    longDescription: 'A comprehensive food waste management solution built with a modern Node.js/Express backend and MySQL database, featuring JWT authentication and SQL-based analytics.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=90',
    highlights: [
      'Built full-stack platform connecting food donors, NGOs, volunteers, and administrators to streamline food donation and redistribution.',
      'Implemented JWT authentication, role-based access control, REST APIs, and SQL-based analytics dashboards.',
      'Real-time tracking of donation lifecycles from creation to pickup.',
    ],
    technologies: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'JWT', 'REST APIs', 'RBAC'],
    github: 'https://github.com/Bhavi123-hacker/food-waste-management-system',
    live: null,
    featured: false,
    category: 'Full Stack',
    caseStudy: {
      overview: 'FoodShare coordinates surplus food logistics end-to-end — from a donor listing a surplus batch to a volunteer completing the delivery.',
      problemStatement: 'Edible surplus food is wasted because donors, NGOs and volunteers have no shared, real-time coordination layer.',
      solution: 'A role-aware Node/Express application over MySQL where each actor gets a purpose-built dashboard and every donation has a tracked lifecycle.',
      keyFeatures: [
        'Donor, NGO, volunteer and admin roles',
        'JWT authentication with role-based access control',
        'Donation lifecycle tracking (Pending -> Accepted -> Delivered)',
        'REST API surface for all resources',
        'SQL-backed analytics dashboards',
      ],
      architecture: {
        client: 'Role-based responsive dashboard views',
        api: 'Express REST routes with auth middleware',
        data: 'Normalized MySQL schema',
      },
      databaseSchema: 'users(id, name, email, password_hash, role) donations(id, donor_id, food_type, quantity, expiry, status) claims(id, donation_id, ngo_id, volunteer_id, status) deliveries(id, claim_id, picked_at, delivered_at)',
      highlights: [
        'Built a full-stack platform connecting food donors, NGOs, volunteers and administrators to streamline food donation and redistribution.',
        'Implemented JWT authentication, role-based access control, REST APIs and SQL-backed analytics dashboards.',
      ],
      challengesFaced: 'Modeling a donation lifecycle with four different actors cleanly without route pollution.',
      lessonsLearned: 'Access control is a schema and middleware decision before it is a UI decision.',
      futureImprovements: [
        'Live map tracking for volunteers',
        'Mobile app client for field pickup teams',
      ],
      timeline: '2025 · 8 weeks',
      teamSize: 'Team of 4',
    },
  },
  {
    id: 'movie4u',
    title: 'Movie4U — Movie Recommendation System',
    tagline: 'Content Recommendation Engine',
    subTagline: 'Content-based movie recommendation system with cosine similarity.',
    description: 'Content-based recommendation engine using cosine similarity with an interactive Streamlit UI for personalized movie discovery.',
    longDescription: 'A sophisticated recommendation engine that analyzes movie metadata including genres, cast, crew, and plot to deliver personalized recommendations using cosine similarity.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=90',
    highlights: [
      'Content-based recommendation engine using cosine similarity with an interactive Streamlit UI.',
      'TF-IDF vectorization on movie metadata including genres, cast, crew & plot keywords.',
      'Real-time poster fetching via TMDB API integration.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NLP', 'Cosine Similarity', 'Streamlit', 'TF-IDF'],
    github: 'https://github.com/Bhavi123-hacker/Movie4U',
    live: null,
    featured: false,
    category: 'Machine Learning',
    caseStudy: {
      overview: 'Movie4U is a content-based film recommendation system calculating TF-IDF text similarity matrices across 5,000+ titles.',
      problemStatement: 'Users spend excessive time browsing catalogs without finding films that match their specific narrative or director preferences.',
      solution: 'A vector similarity recommendation engine mapping genres, keywords, cast, and directors into a high-dimensional feature space.',
      keyFeatures: [
        'Cosine similarity calculation across multi-feature TF-IDF matrices',
        'Live movie poster & rating lookup via TMDB API',
        'Top 5 similar movie suggestions with match percentages',
        'Interactive Streamlit UI with title search auto-complete',
      ],
      architecture: {
        client: 'Streamlit Web Discovery App',
        api: 'Scikit-learn Vector Engine & TMDB REST API',
        data: 'Precomputed Pickle Similarity Matrix',
      },
      databaseSchema: 'movies(id, title, genres, keywords, cast, director, similarity_vector)',
      highlights: [
        'Content-based recommendation engine using cosine similarity with an interactive Streamlit UI.',
        'TF-IDF vectorization on movie metadata.',
        'Real-time movie poster fetching via TMDB API integration.',
      ],
      challengesFaced: 'Precomputing and storing large similarity matrices efficiently.',
      lessonsLearned: 'Compressing precomputed NumPy matrices with Pickle cuts cold-start loading time down to milliseconds.',
      futureImprovements: [
        'Collaborative filtering integration using SVD Matrix Factorization',
        'User preference history saving',
      ],
      timeline: '2026 · 2 weeks',
      teamSize: 'Individual Project',
    },
  },
  {
    id: 'sevasetu',
    title: 'SevaSetu — Volunteer & Community Service Platform',
    tagline: 'Community Service Platform',
    subTagline: 'Centralised coordination for volunteers, NGOs and beneficiaries.',
    description: 'Full-stack platform connecting volunteers, NGOs, and beneficiaries through a centralized coordination system with role-based dashboards.',
    longDescription: 'A comprehensive volunteer management system enabling NGOs, volunteers, and administrators to coordinate social service initiatives, manage events, and track service requests efficiently.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=90',
    highlights: [
      'Full-stack platform connecting volunteers, NGOs and beneficiaries through a centralized coordination system.',
      'Enables volunteer registration, event management and service request tracking.',
      'Role-based dashboards for volunteers, NGOs and administrators.',
    ],
    technologies: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'JWT', 'REST APIs', 'RBAC'],
    github: 'https://github.com/Bhavi123-hacker/sevasetu',
    live: null,
    featured: false,
    category: 'Full Stack',
    caseStudy: {
      overview: 'SevaSetu is a coordination backbone for community service: NGOs post events, volunteers sign up, beneficiaries raise requests, admins keep it accountable.',
      problemStatement: 'Community service effort is fragmented across chat groups and spreadsheets, so impact is impossible to track.',
      solution: 'A single role-aware platform with registration, event management and service request tracking, each role getting a tailored dashboard.',
      keyFeatures: [
        'Volunteer registration and profiles',
        'NGO event creation and management',
        'Service request intake and tracking',
        'Role-based dashboards',
        'Participation and impact reporting',
      ],
      architecture: {
        client: 'Client — role-based dashboard views',
        api: 'API — Express REST services',
        data: 'Data — MySQL relational store',
      },
      databaseSchema: 'users(id, name, role, contact) events(id, ngo_id, title, date, capacity) signups(id, event_id, volunteer_id, status) requests(id, beneficiary_id, category, status)',
      highlights: [
        'Full-stack platform connecting volunteers, NGOs and beneficiaries through a centralized coordination system.',
        'Enables volunteer registration, event management and service request tracking.',
        'Role-based dashboards for volunteers, NGOs and administrators.',
      ],
      challengesFaced: 'Balancing three very different user journeys in one product.',
      lessonsLearned: 'Shipping the smallest useful workflow first keeps scope honest.',
      futureImprovements: [
        'Impact analytics dashboard',
        'Notification system',
      ],
      timeline: '2026 · ongoing',
      teamSize: 'Team project',
    },
  },
];

export const CODING_PROFILES = [
  {
    platform: 'LeetCode',
    handle: 'bhavygarg6969',
    url: 'https://leetcode.com/u/bhavygarg6969/',
    rating: 1490,
    solved: 170,
    solvedLabel: 'Problems Solved',
    ratingLabel: 'Contest Rating',
    icon: '⚡',
    color: '#FFA116',
    description: 'Active competitive programmer with 170+ problems solved across Easy, Medium, and Hard categories.',
  },
  {
    platform: 'Codeforces',
    handle: 'bhaviiii',
    url: 'https://codeforces.com/profile/bhaviiii',
    rating: 940,
    solved: null,
    ratingLabel: 'Current Rating',
    rankLabel: 'Newbie',
    icon: '🔵',
    color: '#1A73E8',
    description: 'Participating in Codeforces rounds, developing algorithmic problem-solving skills.',
  },
  {
    platform: 'GitHub',
    handle: 'Bhavi123-hacker',
    url: 'https://github.com/Bhavi123-hacker',
    icon: '🐙',
    color: '#ffffff',
    description: 'Active open source contributor with multiple ML, Data Analytics, and Full Stack projects.',
    isDynamic: true,
  },
  {
    platform: 'CodeChef',
    handle: 'bhavygarg',
    url: 'https://www.codechef.com/users/bhavygarg',
    icon: '👨‍🍳',
    color: '#5B4638',
    description: 'Practicing competitive programming on CodeChef platform.',
  },
  {
    platform: 'GeeksforGeeks',
    handle: 'bhavygarg',
    url: 'https://auth.geeksforgeeks.org/user/bhavygarg',
    icon: '🟢',
    color: '#00C853',
    description: 'Learning DSA concepts and practicing coding problems on GeeksforGeeks.',
  },
];

export const LEADERSHIP = [
  {
    id: 'csed',
    organization: 'Centre for Social Entrepreneurship and Development',
    role: 'R&D Member',
    institution: 'VIT Chennai',
    period: 'Jul 2025 – Present',
    description: 'Coordinated club events and represented the organization during the VIT Club Expo. Actively contributing to research and development initiatives focused on social entrepreneurship.',
    icon: '🔬',
  },
  {
    id: 'nexus',
    organization: 'Nexus VIT Chennai',
    role: 'Management Member',
    institution: 'VIT Chennai',
    period: 'Oct 2025 – Present',
    description: 'Coordinated a hackathon with 250+ teams and supported a technology forum with 1000+ participants. Managing logistics, communications, and event execution.',
    highlights: ['250+ Teams Hackathon', '1000+ Participants Forum'],
    icon: '⚡',
  },
];

export const CERTIFICATIONS = [
  {
    id: 'google-ai',
    name: 'Google AI Essentials',
    issuer: 'Coursera (Google)',
    year: '2024',
    topics: ['Generative AI', 'Prompt Engineering', 'Responsible AI'],
    icon: '🤖',
    color: '#4285F4',
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 'google-prompting',
    name: 'Google Prompting Essentials',
    issuer: 'Coursera (Google)',
    year: '2024',
    topics: ['LLM Prompting', 'AI Productivity', 'Prompt Optimization'],
    icon: '💬',
    color: '#34A853',
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 'elements-ai',
    name: 'Elements of AI',
    issuer: 'University of Helsinki & MinnaLearn',
    year: '2024',
    topics: ['AI Fundamentals', 'Machine Learning Basics', 'Neural Networks'],
    icon: '🧬',
    color: '#FF6B6B',
    verifyUrl: 'https://elementsofai.com',
  },
  {
    id: 'nptel-conservation',
    name: 'Conservation Economics',
    issuer: 'NPTEL — IIT Madras',
    year: '2024',
    topics: ['Environmental Economics', 'Conservation Policy', 'Sustainability'],
    icon: '🌱',
    color: '#00C853',
    verifyUrl: 'https://nptel.ac.in',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const FLOATING_TECH = [
  { label: 'Python', emoji: '🐍' },
  { label: 'React', emoji: '⚛️' },
  { label: 'ML', emoji: '🧠' },
  { label: 'Node.js', emoji: '🟢' },
  { label: 'SQL', emoji: '🗄️' },
  { label: 'Git', emoji: '🔧' },
  { label: 'AI', emoji: '🤖' },
  { label: 'TS', emoji: '📘' },
];
