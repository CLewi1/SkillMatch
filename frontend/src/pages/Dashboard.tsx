function Dashboard({ onLogout }: { onLogout: () => void }) {

    return(
    <div className="border-b-2 border-black">
        <h1 className="text-4xl font-bold">Welcome to SkillMatch Dashboard</h1>
        <p className="mt-4">Your one-stop solution for AI-powered skill extraction and job matching.</p>
        <button onClick={onLogout} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
            Logout
        </button>
    </div>
    );
}

export default Dashboard;
