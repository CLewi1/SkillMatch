import Navbar from "./Navbar";

interface LayoutProps {
    user: string | null;
    children: React.ReactNode;
}

function Layout({ user, children }: LayoutProps) {
    return (
        <div className="bg-gray-100">
            <header className="header">
                <Navbar user={user}/>
            </header>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

export default Layout;
