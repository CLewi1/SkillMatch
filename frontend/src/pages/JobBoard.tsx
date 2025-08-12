import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import JobCard from '../components/JobCard.tsx';

function JobBoard() {

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


    return(
        <div className="max-w-screen-2xl mx-auto px-6 py-8">
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
}

export default JobBoard;
