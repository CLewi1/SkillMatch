import { useNavigate } from "react-router-dom";
import { X, Github } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: (user: string) => void; // What happens after successful login
}

function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
    const navigate = useNavigate();

    if (!isOpen) return null;
    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
                <button 
                onClick={onClose}
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
                        if (onLogin) onLogin("Google"); // Call onLogin if provided
                        navigate('jobs');
                        onClose();
                    }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    <span className="text-xl">G</span>
                    <span className="font-medium">Google</span>
                </button>
                
                <button 
                    onClick={() => {
                        if (onLogin) onLogin("Github"); // Call onLogin if provided
                        navigate('jobs');
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
}

export default LoginModal;
