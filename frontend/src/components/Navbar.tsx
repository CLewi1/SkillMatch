import { NavLink } from "react-router-dom";
import { FileText } from 'lucide-react';

interface NavbarProps {
    user: string | null;
    onOpenLoginModal: () => void;
}

function Navbar ({ user, onOpenLoginModal }: NavbarProps) {

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <NavLink to={user ? "/dashboard" : "/"} className="flex items-center space-x-2">

                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                            ResumeIQ
                        </span>


                    </NavLink>

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
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink to="/upload">Upload</NavLink></li>
                            <li><NavLink to="/jobs">Jobs</NavLink></li>
                            <li><NavLink to="/compare">Compare</NavLink></li>
                            <li><NavLink to="/settings">Settings</NavLink></li>
                        </>
                    }


                </div>
            </div>
        </nav>
    );
}

export default Navbar;