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
    <div className="border-2 border-white">
        <h1 className="text-4xl font-bold">Login Page</h1>
        <button onClick={handleLogin}>Login Button</button>
    </div>
    );
}

export default LoginPage;
