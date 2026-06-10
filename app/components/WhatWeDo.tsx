import Image from "next/image";

const pillars = [
    {
        title: "Security & Privacy",
        desc: "Protect your business with layered defenses — network security, threat monitoring, email defense, dark web scanning, and penetration testing.",
        icon: "https://cdn.shopify.com/s/files/1/0813/5917/5915/files/CyberSecurity-Privacy-services.png?v=1772058192",
        href: "/pages/security-and-privacy",
        accent: "#2563eb",
    },
    {
        title: "IT Support 24/7",
        desc: "Responsive, reliable managed IT services. From network management and compliance to business continuity — we keep you running.",
        icon: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/IT-Support.png?v=1772432411",
        href: "/pages/it-support-24-7",
        accent: "#0891b2",
    },
    {
        title: "Cloud Services",
        desc: "Seamless cloud migration and management. Microsoft 365, Azure, Copilot, Dynamics 365, Teams, and cloud backup — fully managed.",
        icon: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/cloud-services-365.png?v=1772432380",
        href: "/pages/cloud-services",
        accent: "#7c3aed",
    },
];

export default function WhatWeDo() {
    return (
        <section className="section-light py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <p className="chip chip-blue mb-4" style={{ color: "#2563eb", background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}>
                        What we do
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-5">
                        More than just fixing things<br />when they break.
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        At eMazzanti Technologies, we are technology strategists, problem solvers,
                        facilitators, and watchkeepers. We keep your business running, protected,
                        and growing.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-14">
                    {pillars.map((p) => (
                        <a
                            key={p.title}
                            href={p.href}
                            className="card-lift group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 transition-all"
                        >
                            {/* Icon */}
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                                style={{ background: p.accent, boxShadow: `0 4px 20px ${p.accent}44` }}
                            >
                                <Image src={p.icon} alt={p.title} width={36} height={36} className="object-contain" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                {p.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.desc}</p>

                            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                                Learn more
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>

                            {/* Hover accent line */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
                            />
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
