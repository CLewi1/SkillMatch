import { Sparkles, Target, BarChart3 } from 'lucide-react';

interface LandingPageProps {
    user: string | null;
    onOpenLoginModal: () => void;
}


function LandingPage({ onOpenLoginModal }: LandingPageProps) {

    return(
        <>

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
                    onClick={onOpenLoginModal}
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
        </>
    )
};
export default LandingPage;

