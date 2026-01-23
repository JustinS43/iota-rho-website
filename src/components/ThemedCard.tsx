export default function ThemedCard({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            {children}
        </div>
    );
}