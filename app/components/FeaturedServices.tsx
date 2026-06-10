"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const services = [
    {
        title: "Dark Web Monitoring",
        desc: "Are your credentials for sale on the dark web? Continuous scanning detects leaked passwords and company data before attackers can use them.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/dark-web-monitoring-scan3.png?v=1772433412",
        href: "#",
        tag: "Security",
    },
    {
        title: "Network Security",
        desc: "Firewalls and antivirus alone are not enough. Layered defenses stop threats at every entry point.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/cloud-delivered-network-security3.png?v=1772432682",
        href: "/pages/ecare-secure-route",
        tag: "Security",
    },
    {
        title: "Email Defense",
        desc: "Block spam, phishing, and malware at the gateway before they ever reach your inbox.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/email-defense-services.png?v=1772432854",
        href: "/pages/mxinspect",
        tag: "Security",
    },
    {
        title: "Email Deliverability",
        desc: "SPF, DKIM and DMARC configuration to ensure your legitimate email always reaches its destination.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/spf-email-deliverability2.png?v=1772432938",
        href: "#",
        tag: "Security",
    },
    {
        title: "DKIM / DMARC Protection",
        desc: "Stop spoofing and protect your brand from email impersonation attacks.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/dkim-dmarc-email-protection2.png?v=1772432960",
        href: "#",
        tag: "Security",
    },
    {
        title: "Cloud Backup",
        desc: "Unlimited, automated, enterprise-grade backup that recovers in minutes, not days.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/unlimited-cloud-backup2.png?v=1772432815",
        href: "/pages/ecare-cloud-backup",
        tag: "Cloud",
    },
    {
        title: "Microsoft Teams",
        desc: "Collaborate from anywhere — fully managed Teams deployment with calling and integration.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/work-from-home-microsoft-teams-2.png?v=1772433248",
        href: "/pages/microsoft-teams",
        tag: "Cloud",
    },
    {
        title: "Dynamics 365",
        desc: "Take your operations to the next level with a fully integrated ERP and CRM platform.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/microsoft-dynamics-365-new-jersey-2.png?v=1772433292",
        href: "/pages/dynamics-365",
        tag: "Cloud",
    },
    {
        title: "Cloud Phone",
        desc: "Modern VoIP business communications — calls, meetings and messaging in one platform.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/cloud-phone-solutions-nj-2.png?v=1772433267",
        href: "#",
        tag: "Cloud",
    },
    {
        title: "Email Signature Manager",
        desc: "Centralised, on-brand email signatures for every employee, every device, automatically.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/email-signature-services-2.png?v=1772433383",
        href: "/pages/email-signature-services",
        tag: "Cloud",
    },
    {
        title: "eCare Compliance",
        desc: "Regulatory compliance and managed network services tailored to your industry requirements.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/ecare-compliance-managed-network2.png?v=1772432982",
        href: "/pages/managed-network-services",
        tag: "IT Support",
    },
    {
        title: "Network Management",
        desc: "Proactive 24/7 monitoring, patching, and management of your entire network infrastructure.",
        img: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/cloud-delivered-network-security3.png?v=1772432682",
        href: "/pages/network-management",
        tag: "IT Support",
    },
];

const CATEGORIES = ["All", "Security", "Cloud", "IT Support"] as const;
type Category = (typeof CATEGORIES)[number];

const tagColor: Record<string, { bg: string; text: string }> = {
    Security: { bg: "rgba(239,68,68,0.15)", text: "#f87171" },
    Cloud: { bg: "rgba(6,182,212,0.15)", text: "#67e8f9" },
    "IT Support": { bg: "rgba(37,99,235,0.15)", text: "#93c5fd" },
};

const CARD_W = 256; // px — card width
const GAP = 20; // px — gap between cards
const CARDS_PER_PAGE = 3; // cards scrolled per step
const STEP = (CARD_W + GAP) * CARDS_PER_PAGE;

export default function FeaturedServices() {
    const [active, setActive] = useState<Category>("All");
    const [activePage, setActivePage] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    const filtered =
        active === "All" ? services : services.filter((s) => s.tag === active);

    const pageCount = Math.ceil(filtered.length / CARDS_PER_PAGE);

    const handleCategoryChange = (cat: Category) => {
        setActive(cat);
        setActivePage(0);
        trackRef.current?.scrollTo({ left: 0 });
    };

    const handleScroll = () => {
        const el = trackRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll > 0 && el.scrollLeft >= maxScroll - 5) {
            setActivePage(pageCount - 1);
        } else {
            setActivePage(Math.round(el.scrollLeft / STEP));
        }
    };

    const scroll = (dir: "prev" | "next") => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === "next" ? STEP : -STEP, behavior: "smooth" });
    };

    return (
        <section className="bg-[#040c1a] py-16 lg:py-20 dot-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section heading */}
                <div className="mb-10">
                    <p className="chip chip-blue mb-4 inline-flex" style={{ color: "#60a5fa", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.3)" }}>
                        Featured Services
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                        Stay up. Stay running. Stay protected.
                    </h2>
                    <p className="text-slate-400">
                        Purpose-built solutions designed to keep your business resilient in a complex threat landscape.
                    </p>
                </div>

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
                    {/* Category tabs */}
                    <div className="flex items-center gap-2 flex-wrap">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className="relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                                style={
                                    active === cat
                                        ? {
                                            background: "rgba(37,99,235,0.18)",
                                            border: "1px solid rgba(37,99,235,0.45)",
                                            color: "#93c5fd",
                                        }
                                        : {
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            color: "#64748b",
                                        }
                                }
                            >
                                {cat}
                                {active === cat && (
                                    <span className="ml-1.5 text-[10px] text-blue-400 font-bold">
                                        {filtered.length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Scrollable track */}
                <div className="relative">
                    {/* Right fade */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10"
                        style={{ background: "linear-gradient(to right, transparent, #040c1a)" }}
                    />

                    <div
                        ref={trackRef}
                        onScroll={handleScroll}
                        className="flex gap-5 overflow-x-auto pb-4"
                        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
                    >
                        {filtered.map((s) => (
                            <div
                                key={s.title + s.tag}
                                style={{ scrollSnapAlign: "start", flex: `0 0 ${CARD_W}px`, width: CARD_W }}
                            >
                                <ServiceCard service={s} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot indicators + Prev/Next */}
                <div className="flex items-center justify-center gap-3 mt-6">
                    <button
                        onClick={() => scroll("prev")}
                        aria-label="Previous"
                        className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/6 transition-all"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-1.5">
                        {Array.from({ length: pageCount }, (_, i) => (
                            <button
                                key={i}
                                aria-label={`Page ${i + 1}`}
                                onClick={() => {
                                    const el = trackRef.current;
                                    if (!el) return;
                                    el.scrollTo({ left: i * STEP, behavior: "smooth" });
                                    setActivePage(i);
                                }}
                                className="rounded-full transition-all duration-300"
                                style={
                                    i === activePage
                                        ? {
                                            width: "20px",
                                            height: "6px",
                                            background: "#3b82f6",
                                            boxShadow: "0 0 8px 2px rgba(59,130,246,0.6)",
                                        }
                                        : {
                                            width: "6px",
                                            height: "6px",
                                            background: "rgba(255,255,255,0.18)",
                                        }
                                }
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => scroll("next")}
                        aria-label="Next"
                        className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/6 transition-all"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
    const tag = tagColor[service.tag];
    return (
        <a
            href={service.href}
            className="card-lift group flex flex-col bg-[#071428] border border-white/6 rounded-2xl overflow-hidden hover:border-white/14 h-full"
        >
            {/* Image */}
            <div className="relative overflow-hidden bg-[#0c1830]" style={{ aspectRatio: "4/3" }}>
                <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                <span
                    className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm"
                    style={{ background: tag.bg, color: tag.text, border: `1px solid ${tag.text}30` }}
                >
                    {service.tag}
                </span>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col p-5">
                <h3 className="font-semibold text-slate-200 group-hover:text-white transition-colors mb-1.5 leading-snug">
                    {service.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed flex-1">{service.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">
                    Learn more
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:translate-x-0.5 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </a>
    );
}
