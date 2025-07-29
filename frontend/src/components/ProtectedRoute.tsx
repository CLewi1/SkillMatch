import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-dev-runtime";


function ProtectedRoute ({ user, element }: { user: string | null; element: JSX.Element }) {
    console.log("ProtectedRoute received user:", user);
    
    return (
        <>
            {user ? element : <Navigate to="/login" />}
            
        </>
    );
}


export default ProtectedRoute;
