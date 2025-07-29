import { NavLink } from "react-router-dom";

function Navbar ({ user }: { user: string | null }) {

    return (
        <nav className="flex justify-between items-center bg-black px-10 py-4">
            <h1 className="text-4xl font-bold text-white">SkillMatch</h1>
            <ul className="flex space-x-4">

                {!user && 
                    <>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </>
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


            </ul>
        </nav>
    );
}

export default Navbar;