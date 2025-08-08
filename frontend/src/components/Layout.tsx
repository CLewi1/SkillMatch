import Navbar from "./Navbar";

interface LayoutProps {
    user: string | null;
    children: React.ReactNode;
    onOpenLoginModal: () => void;
}

function Layout({ user, children, onOpenLoginModal }: LayoutProps) {
    return (
        <>
            <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
                <Navbar user={user} onOpenLoginModal={onOpenLoginModal} />
            </header>
            <main className="main-content">
                {children}
            </main>
        </>
    );
}

export default Layout;
