import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="bg-[#040c1a] py-24 lg:py-32 dot-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="chip chip-blue mx-auto mb-4">Who We Are</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                        One mission drives everything.
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Deliver exceptional customer service — always.
                    </p>
                </div>

                {/* Content grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: text + world map */}
                    <div>
                        <div className="glass rounded-2xl p-8 mb-6">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Worldwide 24/7 IT Support
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Helping businesses worldwide from our global network of offices across the US, Canada, Mexico, and Latin America.
                            </p>
                            <Image
                                src="https://cdn.shopify.com/s/files/1/0813/5917/5915/files/eMazzanti-World-Map-2023-v2.png?v=1772073825"
                                alt="eMazzanti worldwide IT support map"
                                width={650}
                                height={350}
                                className="w-full h-auto rounded-xl opacity-90"
                            />
                        </div>

                        {/* Office list snippet */}
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                "Hoboken, NJ (HQ)",
                                "Bellevue, WA",
                                "Wilmington, DE",
                                "Mililani, HI",
                                "St. Petersburg, FL",
                                "Montreal, QC",
                                "Markham, ON",
                                "Mexico City, MX",
                            ].map((loc) => (
                                <div
                                    key={loc}
                                    className="flex items-center gap-2 text-sm text-slate-400"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                    {loc}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: mission statement + video */}
                    <div className="flex flex-col gap-6">
                        <div className="glass rounded-2xl p-8">
                            <blockquote className="text-2xl font-bold text-white leading-snug mb-6">
                                "At eMazzanti Technologies, we are not satisfied to simply meet
                                industry standards — we aim to{" "}
                                <span className="gradient-text">smash them.</span>"
                            </blockquote>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                From lightning-fast response times to the friendliest support team
                                you will ever speak to, eMazzanti Technologies goes the extra mile.
                                Our engineering expertise is matched only by our engineers&apos;
                                enthusiasm — and there is nothing they love more than solving what&apos;s
                                been irking you.
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/8 flex items-center gap-4">
                                <div>
                                    <div className="text-sm font-semibold text-white">Carl Mazzanti</div>
                                    <div className="text-xs text-slate-500">CEO & Co-Founder, eMazzanti Technologies</div>
                                </div>
                            </div>
                        </div>

                        {/* Video – opens on YouTube (embedding disabled by owner) */}
                        <a
                            href="https://www.youtube.com/watch?v=Ws41uO7Wpy8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block rounded-2xl overflow-hidden border border-white/8"
                            style={{ paddingBottom: "56.25%", height: 0 }}
                        >
                            {/* Thumbnail */}
                            <img
                                src="https://img.youtube.com/vi/Ws41uO7Wpy8/maxresdefault.jpg"
                                alt="eMazzanti Technologies – 18 Years of Learning"
                                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                                loading="lazy"
                            />
                            {/* Dark overlay */}
                            <div
                                className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"
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
                                <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                                    Watch on YouTube ↗
                                </span>
                            </div>
                        </a>

                        <a
                            href="/pages/about"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Read our full story
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
