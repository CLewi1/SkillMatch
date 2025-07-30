import React, { useState, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';

export default function ComparePage() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef(null);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white border-opacity-10">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Upload Resume</h1>
                  <p className="text-sm text-gray-400">AI-powered resume analysis</p>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Step 1 of 3
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Upload Instructions */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">
                Upload Your Resume
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto">
                Upload your resume to get started with AI-powered skill extraction, role classification, and job matching.
              </p>
            </div>

            {/* Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 mb-8 ${
                dragActive
                  ? 'border-purple-400 bg-purple-500 bg-opacity-20 transform scale-105'
                  : 'border-gray-600 bg-white bg-opacity-5 hover:border-gray-500 hover:bg-white hover:bg-opacity-10'
              }`}

            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.doc,.docx"

                className="hidden"
              />
              
              <div className="mb-6">
                <FiUpload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Drop your resume here
                </h3>
                <p className="text-gray-400 mb-6">
                  or click to browse files
                </p>
                <button

                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Choose Files
                </button>
              </div>
              
              <div className="text-sm text-gray-500">
                Supports PDF, DOC, DOCX • Maximum 10MB per file
              </div>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold">
                    Uploaded Files ({uploadedFiles.length})
                  </h4>
                  <button 
                    onClick={() => setUploadedFiles([])}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                  >
                    Clear all
                  </button>
                </div>
                <div className="space-y-3">
                  {uploadedFiles.map((file) => (
                    <div className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div>

                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {file === 'ready' && (
                          <span className="text-gray-400 text-sm">Ready</span>
                        )}
                        {file === 'analyzing' && (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-purple-500 border-t-transparent"></div>
                            <span className="text-purple-400 text-sm">Analyzing...</span>
                          </div>
                        )}
                        <button
                          className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analysis Status */}
            {isAnalyzing && (
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 bg-purple-500 bg-opacity-20 rounded-full py-3 px-6">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-purple-400 border-t-transparent"></div>
                  <span className="text-purple-400 font-medium">AI is analyzing your resume...</span>
                </div>
              </div>
            )}
            
            {uploadedFiles.every(f => f === 'complete') && uploadedFiles.length > 0 && (
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 bg-green-500 bg-opacity-20 rounded-full py-3 px-6">
                  <span className="text-green-400 font-medium">Analysis complete!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white border-opacity-10">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="text-sm text-gray-400">
              {uploadedFiles.length > 0 && (
                <>
                  {uploadedFiles.length} file{uploadedFiles.length !== 1 ? 's' : ''} selected
                </>
              )}
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-2 text-gray-400 hover:text-white transition-colors">
                Cancel
              </button>
              {uploadedFiles.length > 0 && !isAnalyzing && uploadedFiles.some(f => f === 'ready') && (
                <button
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
                >
                  Start Analysis
                </button>
              )}
              {uploadedFiles.every(f => f === 'complete') && uploadedFiles.length > 0 && (
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200">
                  View Results
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}