import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import ComparePage from "./pages/ComparePage";
import JobBoard from "./pages/JobBoard";
import Settings from "./pages/Settings";
import LoginModal from "./components/LoginModal"; // Importing LoginModal
import TestPage from "./pages/TestPage"; // Importing TestPage

function App() {
    const [user, setUser] = useState<string | null>(null);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleLogin = (user: string) => {
        setUser(user);
    };

    const handleLogout = () => {
        setUser(null);
    };


   return (
    <BrowserRouter>
        <LoginModal 
            isOpen={showLoginModal} 
            onClose={() => setShowLoginModal(false)} 
            onLogin={handleLogin} // Pass handleLogin
        />
        <Layout user={user} onOpenLoginModal={() => setShowLoginModal(true)}>
            <Routes>
                <Route path="/" element={<LandingPage user={user} onOpenLoginModal={() => setShowLoginModal(true)}/>} />
                <Route path="/test" element={<TestPage />} /> {/* Adding TestPage route */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute user={user} element={<Dashboard />} />

                    }
                />
                <Route
                    path="/upload"
                    element={
                        <ProtectedRoute user={user} element={<UploadPage />} />
                    }
                />
                <Route
                    path="/compare"
                    element={
                        <ProtectedRoute user={user} element={<ComparePage />} />
                    }
                />
                <Route
                    path="/jobs"
                    element={
                        <ProtectedRoute user={user} element={<JobBoard />} />
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute user={user} element={<Settings onLogout={handleLogout} />} />
                    }
                />

            </Routes>
        </Layout>
    </BrowserRouter>
    );
}

export default App;
