import { useNavigate } from "react-router-dom";

function LoginPage({ onLogin }: { onLogin: (userData: string) => void }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        const userData = "user123";
        onLogin(userData);
        console.log("User logged in:", userData);
        navigate("/dashboard");
    };

    return(
    <div className="border-b-2 border-black">
        <h1 className="text-4xl font-bold">Welcome to SkillMatch Login Page</h1>
        <p className="mt-4">Your one-stop solution for AI-powered skill extraction and job matching.</p>
        <button onClick={handleLogin}>Login Button</button>
    </div>
    );
}

export default LoginPage;
