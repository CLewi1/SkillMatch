import React, { useState } from 'react';
import { Search, Bookmark, User, FileText, Briefcase, Settings, X, Github, MapPin, Filter, Clock, DollarSign, Target, BarChart3, Sparkles } from 'lucide-react';

const TestPage = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jobFilters, setJobFilters] = useState({
    title: 'Any',
    seniority: 'Any',
    location: 'Any',
    type: 'Any',
    datePosted: 'Any'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [customJobDescription, setCustomJobDescription] = useState('');

  // Sample data
  const jobListings = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp',
      logo: '🚀',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $150k',
      posted: '2 hours ago',
      description: 'Looking for a senior React developer to join our dynamic team and build cutting-edge web applications.',
      tags: ['React', 'TypeScript', 'Node.js', 'AWS']
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      logo: '⚡',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $120k',
      posted: '5 hours ago',
      description: 'Join our fast-growing startup as a full stack engineer and help shape the future of our platform.',
      tags: ['JavaScript', 'Python', 'PostgreSQL', 'Docker']
    },
    {
      id: 3,
      title: 'Frontend Developer Intern',
      company: 'WebSolutions',
      logo: '🎯',
      location: 'San Francisco, CA',
      type: 'Internship',
      salary: '$25 - $35/hr',
      posted: '1 day ago',
      description: 'Great opportunity for students to gain real-world experience in frontend development.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
    }
  ];

  const savedJobs = [
    {
      id: 1,
      title: 'Software Engineer Intern - Google Cloud',
      company: 'Google',
      logo: '🔵',
      location: 'Mountain View, CA',
      type: 'Internship',
      salary: '$40 - $50/hr',
      posted: '3 days ago',
      tags: ['Go', 'Python', 'Cloud', 'Kubernetes']
    },
    {
      id: 2,
      title: 'React Developer - E-commerce Platform',
      company: 'ShopifyPlus',
      logo: '🛍️',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $130k',
      posted: '1 week ago',
      tags: ['React', 'GraphQL', 'Shopify', 'E-commerce']
    }
  ];

  const LoginModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={() => setShowLoginModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Continue with</h2>
          <p className="text-gray-600">Choose a method to continue</p>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={() => {
              setIsLoggedIn(true);
              setShowLoginModal(false);
              setCurrentPage('jobs');
            }}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-xl">G</span>
            <span className="font-medium">Google</span>
          </button>
          
          <button 
            onClick={() => {
              setIsLoggedIn(true);
              setShowLoginModal(false);
              setCurrentPage('jobs');
            }}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Github</span>
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          By clicking continue, you agree to our{' '}
          <span className="text-teal-600 hover:underline cursor-pointer">Terms of Service</span>
          {' '}and{' '}
          <span className="text-teal-600 hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </div>
  );

  const Navigation = () => (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ResumeAI</span>
          </div>
          
          {isLoggedIn && (
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setCurrentPage('jobs')}
                className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'jobs' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Search
              </button>
              <button 
                onClick={() => setCurrentPage('custom')}
                className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'custom' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Custom Job Gen
              </button>
              <button 
                onClick={() => setCurrentPage('bookmarked')}
                className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'bookmarked' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Bookmarked
              </button>
              <button 
                onClick={() => setCurrentPage('applied')}
                className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'applied' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Applied
              </button>
              <button 
                onClick={() => setCurrentPage('resume')}
                className={`px-3 py-2 rounded-lg transition-colors ${currentPage === 'resume' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Resume
              </button>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for jobs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent w-64"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              </div>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </>
          ) : (
            <button 
              onClick={() => setShowLoginModal(true)}
              className="px-6 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg hover:from-teal-600 hover:to-emerald-700 transition-colors font-medium"
            >
              Join the beta
            </button>
          )}
        </div>
      </div>
    </nav>
  );

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                ResumeIQ
              </span>
            </div>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-200 font-medium"
            >
              Join the beta
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Now in Beta - Get Early Access
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Optimize Your Resume with
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent block">
              AI-Powered SEO
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform job descriptions into resume gold. Our AI analyzes job postings and optimizes your resume with the right keywords to beat ATS systems and land more interviews.
          </p>
          
          <button 
            onClick={() => setShowLoginModal(true)}
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-teal-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Start Building Your Resume
          </button>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Job Description Analysis</h3>
            <p className="text-slate-600 leading-relaxed">
              Upload any job description and our AI extracts key requirements, skills, and keywords that matter most to hiring managers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Smart Optimization</h3>
            <p className="text-slate-600 leading-relaxed">
              Automatically optimize your resume with relevant keywords and phrases while maintaining natural flow and readability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">ATS Score Tracking</h3>
            <p className="text-slate-600 leading-relaxed">
              Get real-time ATS compatibility scores and see exactly how your resume performs against applicant tracking systems.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">75%</div>
              <div className="text-blue-100">of resumes are rejected by ATS before human review</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">of Fortune 500 companies use ATS systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-blue-100">more interviews with optimized resumes</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  type Job = {
    id: number;
    title: string;
    company: string;
    logo: string;
    location: string;
    type: string;
    salary: string;
    posted: string;
    description?: string;
    tags: string[];
  };

  interface JobCardProps {
    job: Job;
    showBookmark?: boolean;
    isBookmarked?: boolean;
  }

  const JobCard: React.FC<JobCardProps> = ({ job, showBookmark = true, isBookmarked = false }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center text-2xl">
            {job.logo}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        {showBookmark && (
          <button className="p-2 text-gray-400 hover:text-teal-600 transition-colors">
            <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current text-teal-600' : ''}`} />
          </button>
        )}
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {job.location}
        </div>
        <div className="flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          {job.type}
        </div>
        <div className="flex items-center gap-1">
          <DollarSign className="w-4 h-4" />
          {job.salary}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {job.posted}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{job.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          View Details
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
          <Bookmark className="w-4 h-4" />
          Bookmark
        </button>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
          Apply
        </button>
      </div>
    </div>
  );

  const JobsPage = () => (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex gap-8">
        <div className="w-80 shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Filters</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                  <option>Any</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seniority Level</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                  <option>Any</option>
                  <option>Intern</option>
                  <option>Junior</option>
                  <option>Mid-level</option>
                  <option>Senior</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                  <option>Any</option>
                  <option>Remote</option>
                  <option>New York</option>
                  <option>San Francisco</option>
                  <option>Los Angeles</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                  <option>Any</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Posted</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                  <option>Any</option>
                  <option>Last 24 hours</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Search
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Reset Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Job Listings</h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              {jobListings.length} jobs found
            </div>
          </div>
          
          <div className="space-y-6">
            {jobListings.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const BookmarkedPage = () => (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Saved Jobs</h1>
      <div className="space-y-6">
        {savedJobs.map(job => (
          <JobCard key={job.id} job={job} isBookmarked={true} />
        ))}
      </div>
    </div>
  );

  const AppliedPage = () => (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Applied Jobs</h1>
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Briefcase className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-gray-500 text-lg">No applied jobs</p>
        <p className="text-gray-400 mt-2">Start applying to jobs to see them here</p>
      </div>
    </div>
  );

  const ResumePage = () => (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Resume</h1>
      
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Import information from existing resume</h2>
          <div className="flex gap-4">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Upload PDF Resume
            </button>
            <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Parse Resume
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            Preview Resume
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              defaultValue="Colin Lewandowski"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              defaultValue="LewandowC30@uww.edu"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
            <input 
              type="url" 
              defaultValue="www.linkedin.com/in/clewi1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              defaultValue="773 399 9092"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
            <input 
              type="url" 
              defaultValue="https://github.com/CLewi1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input 
              type="text" 
              defaultValue="Elmhurst, IL"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
        
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Summary</label>
          <textarea 
            rows={4}
            defaultValue="I am a Computer Science student at the University of Wisconsin-Whitewater with experience in technology services and software development. I have developed various projects, including a Java based song database application, and C#/Blazor based NFL API website, showcasing my programming skills in multiple languages and frameworks."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input 
                type="text" 
                defaultValue="York High School"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role Title</label>
              <input 
                type="text" 
                defaultValue="Technology Service Intern"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>
        
        <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderPage = () => {
    if (!isLoggedIn && currentPage !== 'landing') {
      return <LandingPage />;
    }
    
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'jobs':
        return <JobsPage />;
      case 'bookmarked':
        return <BookmarkedPage />;
      case 'applied':
        return <AppliedPage />;
      case 'resume':
        return <ResumePage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderPage()}
      {showLoginModal && <LoginModal />}
    </div>
  );
};

export default TestPage;