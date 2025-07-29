import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import ComparePage from "./pages/ComparePage";
import JobBoard from "./pages/JobBoard";
import Settings from "./pages/Settings";

function App() {
    const [user, setUser] = useState<string | null>(null);

    const handleLogin = (user: string) => {
        setUser(user);
    };

    const handleLogout = () => {
        setUser(null);
    };


   return (
    <BrowserRouter>
        <Layout user={user}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute user={user} element={<Dashboard onLogout={handleLogout} />} />

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
                        <ProtectedRoute user={user} element={<Settings />} />
                    }
                />

            </Routes>
        </Layout>
    </BrowserRouter>
    );
}

export default App;
