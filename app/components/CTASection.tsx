export default function CTASection() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, #1d4ed8 0%, #1e40af 40%, #0369a1 100%)",
                }}
            />
            {/* Grid texture */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            {/* Ambient glows */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px]"
                style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div
                className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-[80px]"
                style={{ background: "rgba(0,0,0,0.15)" }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="inline-flex items-center gap-2 chip mb-8" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Free Assessment · No Obligation
                </p>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                    Let&apos;s get started.
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 leading-relaxed">
                    When it comes to managing IT for your business, you need an expert. Let us
                    show you what responsive, reliable, and accountable IT support looks like.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/pages/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl text-base"
                    >
                        Start with a Free Assessment
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a
                        href="tel:1-866-362-9926"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.68 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.59 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.54a16 16 0 006.55 6.55l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        1-866-362-9926
                    </a>
                </div>
            </div>
        </section>
    );
}
