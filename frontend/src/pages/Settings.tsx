function Settings({onLogout}: { onLogout: () => void }) {



    return(
    <div className="border-2 border-white">
        <h1 className="text-4xl font-bold">Settings</h1>
        <button onClick={onLogout} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
            Logout
        </button>
    </div>
    );
}

export default Settings;
