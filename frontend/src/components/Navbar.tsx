import { NavLink } from "react-router-dom";
import { FileText, Settings } from 'lucide-react';

interface NavbarProps {
    user: string | null;
    onOpenLoginModal: () => void;
}

function Navbar ({ user, onOpenLoginModal }: NavbarProps) {

    return (
        <nav className="bg-white">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                        <NavLink to={user ? "/dashboard" : "/"} className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                ResumeIQ
                            </span>
                        </NavLink>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6">
                        {!user && 
                            <button 
                                onClick={onOpenLoginModal}
                                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-200 font-medium"
                            >
                                Join the beta
                            </button>
                        } 
                        {user && 
                            <>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                                <NavLink to="/upload">Resume</NavLink>
                                <NavLink to="/jobs">Jobs</NavLink>
                                <NavLink to="/compare">Compare</NavLink>
                                <NavLink to="/applied">Applied</NavLink>
                                <NavLink to="/saved">Saved</NavLink>
                            </>
                        }
                    </div>

                    {/* Settings */}
                    {user && 
                        <NavLink to="/settings" className="flex items-center space-x-1">
                            <Settings className="w-6 h-6" />
                        </NavLink>
                    }


                </div>
            </div>
        </nav>
    );
}

export default Navbar;