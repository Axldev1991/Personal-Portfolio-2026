export function Footer() {
    return (
        <footer className="py-20 border-t border-border bg-background">
            <div className="max-w-6xl px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-muted">
                        © 2026_ALL_RIGHTS_RESERVED
                    </p>
                    <p className="text-xl font-black">
                        MODULAR_PORTFOLIO.V1
                    </p>
                </div>

                <div className="flex gap-12 text-[10px] uppercase font-bold tracking-widest text-muted">
                    <div className="flex flex-col gap-1">
                        <span className="text-foreground">Built with</span>
                        <span>Spite & Next.js</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-foreground">Experience</span>
                        <span>Premium_Hybrid</span>
                    </div>
                </div>

                <div className="text-right flex flex-col items-end gap-1">
                    <p className="text-xs font-mono text-muted">40.7128° N, 74.0060° W</p>
                    <p className="text-[10px] bg-accent text-black px-2 py-0.5 font-black rounded">
                        SYSTEM_STATUS: ONLINE
                    </p>
                </div>
            </div>
        </footer>
    );
}
