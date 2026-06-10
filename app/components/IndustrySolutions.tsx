import Image from "next/image";

const industries = [
    {
        title: "Retail / Distribution",
        desc: "POS systems, PCI compliance, and network security for multi-location retail.",
        icon: "https://cdn.shopify.com/s/files/1/0813/5917/5915/files/Outsourced-IT-Support-Retail.png?v=1772067186",
        href: "/pages/retail-emazzanti",
    },
    {
        title: "Legal",
        desc: "Secure document management, compliance, and uptime for law firms.",
        icon: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/IT-Industry-Solutions-Law.png?v=1772433802",
        href: "/pages/legal-emazzanti",
    },
    {
        title: "Government & Education",
        desc: "Compliant IT infrastructure for public sector and educational institutions.",
        icon: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/Outsourced-IT-Support-Government.png?v=1772433906",
        href: "/pages/government-emazzanti",
    },
    {
        title: "Manufacturing",
        desc: "Production-floor connectivity, ERP integration, and OT security.",
        icon: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/Outsourced-IT-Support-Manufacturing_580e11ad-3694-42d6-b0c3-f415edef1172.png?v=1772433972",
        href: "/pages/6a205d1536e8fcb863095b56",
    },
    {
        title: "Municipalities",
        desc: "Scalable, cost-effective IT services for local government bodies.",
        icon: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/Outsourced-IT-Support-Government.png?v=1772433906",
        href: "/pages/municipalities-emazzanti",
    },
    {
        title: "Non-Profit",
        desc: "Budget-conscious IT solutions with maximum impact for non-profits.",
        icon: "https://cdn.shopify.com/s/files/1/0813/5917/5915/files/Outsourced-IT-Support-Retail.png?v=1772067186",
        href: "/pages/nonprofit-emazzanti",
    },
];

export default function IndustrySolutions() {
    return (
        <section className="section-light py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                    <div className="max-w-xl">
                        <p className="chip mb-4" style={{ color: "#2563eb", background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}>
                            Industry Solutions
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            Built for your<br />specific industry.
                        </h2>
                        <p className="text-slate-500 leading-relaxed">
                            Our vertical expertise lets your business streamline workflow and increase
                            productivity. Industry-compliant solutions, customized to your needs.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
                    >
                        View all solutions
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {industries.map((ind) => (
                        <a
                            key={ind.title}
                            href={ind.href}
                            className="card-lift group flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
                                <Image src={ind.icon} alt={ind.title} width={28} height={28} className="object-contain" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                                    {ind.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* IT Partnership callout */}
                <div className="mt-14 grid md:grid-cols-2 gap-5">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Have an IT department?</h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-5">
                            Partner with us for co-managed IT services to grow and enhance your existing infrastructure.
                        </p>
                        <a href="/pages/contact" className="inline-flex items-center gap-1.5 bg-white text-blue-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                            Partner with us
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-[#040c1a] rounded-2xl p-8 text-white border border-white/8">
                        <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center mb-5">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">No IT department?</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5">
                            Work with us as your complete IT management partner. One call, one team — fully managed.
                        </p>
                        <a href="/pages/contact" className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
                            Get started
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
