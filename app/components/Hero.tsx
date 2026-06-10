import Image from "next/image";

const stats = [
    { value: "22+", label: "Years of Excellence" },
    { value: "500+", label: "Clients Served" },
    { value: "24/7", label: "Live IT Support" },
    { value: "#1", label: "Microsoft Partner NJ" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#040c1a]">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="https://cdn.shopify.com/s/files/1/0813/5917/5915/files/Outsourced-IT-New-York.jpg?v=1772053249"
                    alt=""
                    fill
                    priority
                    className="object-cover object-top opacity-[0.18]"
                    sizes="100vw"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#040c1a] via-[#040c1a]/80 to-[#040c1a]/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040c1a] via-transparent to-transparent" />
            </div>

            {/* Dot grid */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Ambient glow accents */}
            <div
                className="absolute left-1/4 bottom-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "rgba(37,99,235,0.12)" }}
            />
            <div
                className="absolute right-1/4 top-1/3 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
                style={{ background: "rgba(6,182,212,0.07)" }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center py-16 lg:py-20">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="fade-up inline-flex items-center gap-2 chip chip-blue mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        Microsoft Gold Partner · Trusted Since 2002
                    </div>

                    {/* Headline */}
                    <h1 className="fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-4">
                        Your Trusted<br />
                        <span className="gradient-text">Outsourced IT</span>
                        <br />Partner
                    </h1>

                    {/* Subtext */}
                    <p className="fade-up-delay-2 text-base sm:text-lg text-slate-400 max-w-xl mb-7 leading-relaxed">
                        We are technology strategists, problem solvers, and watchkeepers.
                        Boost your business&apos;s productivity to a whole new level — 24 hours a day,
                        365 days a year.
                    </p>

                    {/* CTAs */}
                    <div className="fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-10">
                        <a
                            href="/pages/contact"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30 text-base"
                        >
                            Start Free Assessment
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a
                            href="/blogs/testimonials"
                            className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 border border-white/12 hover:border-white/20 text-slate-200 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
                        >
                            See Client Reviews
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </a>
                    </div>

                    {/* Stats strip */}
                    <div className="border-t border-white/8 pt-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {stats.map((s) => (
                            <div key={s.value}>
                                <div className="stat-value text-3xl lg:text-4xl font-bold text-white mb-1">
                                    {s.value}
                                </div>
                                <div className="text-sm text-slate-500">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040c1a] to-transparent pointer-events-none" />
        </section>
    );
}
