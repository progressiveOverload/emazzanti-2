export default function CaseStudy() {
    return (
        <section className="section-light py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Video – opens on YouTube (embedding disabled by owner) */}
                    <a
                        href="https://www.youtube.com/watch?v=o73nPg-Q0uU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60"
                        style={{ paddingBottom: "56.25%", height: 0 }}
                    >
                        {/* Thumbnail */}
                        <img
                            src="https://img.youtube.com/vi/o73nPg-Q0uU/maxresdefault.jpg"
                            alt="Pandora Times Square – Retail IT Case Study"
                            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                            loading="lazy"
                        />
                        {/* Dark overlay */}
                        <div
                            className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"
                        />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-2xl transition-all group-hover:scale-110">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                                    <polygon points="5,3 19,12 5,21" />
                                </svg>
                            </div>
                        </div>
                        {/* Watch on YouTube label */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                            <span className="bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                                Watch on YouTube ↗
                            </span>
                        </div>
                    </a>

                    {/* Text */}
                    <div>
                        <p className="chip mb-5" style={{ color: "#2563eb", background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}>
                            Case Study Spotlight
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-5">
                            Retail Solutions for{" "}
                            <span className="text-blue-600">Pandora Times Square</span>
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            eMazzanti Technologies is your one-stop partner for network security,
                            PCI compliance, digital video security, and complete IT management.
                            See how we transformed Pandora&apos;s flagship Times Square store.
                        </p>

                        {/* Outcomes */}
                        <ul className="space-y-3 mb-10">
                            {[
                                "PCI compliance and network segmentation",
                                "Digital video security with 24/7 monitoring",
                                "Zero-downtime POS infrastructure",
                                "Rapid deployment across multiple locations",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                                    <svg
                                        className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/blogs/case-studies"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                            >
                                View all case studies
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                            >
                                Read case study
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
