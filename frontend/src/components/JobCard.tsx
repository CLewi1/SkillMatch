import React from 'react';
import { Bookmark, MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';

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


export default JobCard;
