"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Complete IT Solution",
        desc: "IT Support, Security & Cloud — the {e}Bundle",
        href: "/pages/e365",
    },
    {
        title: "Security & Privacy",
        desc: "Network security, threat monitoring & email defense",
        href: "/pages/security-and-privacy",
    },
    {
        title: "IT Support 24/7",
        desc: "Managed network, compliance & business continuity",
        href: "/pages/it-support-24-7",
    },
    {
        title: "vCIO Services",
        desc: "Strategic IT expertise tailored to your business",
        href: "/pages/vcio",
    },
    {
        title: "Cloud Services",
        desc: "Backup, Copilot, Teams, Dynamics 365 & more",
        href: "/pages/cloud-services",
    },
    {
        title: "Other Services",
        desc: "Digital signatures, QuickBooks, HR & more",
        href: "#",
    },
];

const industries = [
    { title: "Retail / Distribution", href: "/pages/retail-emazzanti" },
    { title: "Legal", href: "/pages/legal-emazzanti" },
    { title: "Manufacturing", href: "/pages/6a205d1536e8fcb863095b56" },
    { title: "Government", href: "/pages/government-emazzanti" },
    { title: "Municipalities", href: "/pages/municipalities-emazzanti" },
    { title: "Education", href: "/pages/69b2f1e9e4572c83e30a6938" },
    { title: "Non Profit", href: "/pages/nonprofit-emazzanti" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        if (mobileOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const openMenu = (name: string) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setActiveMenu(name);
    };

    const closeMenu = () => {
        timerRef.current = setTimeout(() => setActiveMenu(null), 120);
    };

    const keepMenu = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    const toggleMobile = (name: string) =>
        setMobileExpanded((p) => (p === name ? null : name));

    return (
        <>
            {/* ── Announcement Bar ── */}
            <div className="announce-bar text-white text-center text-xs sm:text-sm py-2.5 px-4">
                <span className="font-semibold tracking-wide">
                    🎯 AI &amp; AUTOMATION MASTER CLASS &nbsp;·&nbsp; JUN 11 · JUN 18 · JUL 9
                </span>
                <a
                    href="/pages/ai-automation-master-classes"
                    className="ml-3 inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-3 py-1 font-semibold text-xs"
                >
                    Register Now →
                </a>
            </div>

            {/* ── Main Nav ── */}
            <header
                ref={navRef}
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-[#040c1a]/95 backdrop-blur-xl shadow-xl shadow-black/30 border-b border-white/5"
                        : "bg-[#040c1a]"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="https://cdn.shopify.com/s/files/1/0732/4647/4379/files/eMazzanti_logo_200x53px-w.png?v=1772436151"
                                alt="eMazzanti Technologies"
                                width={160}
                                height={43}
                                priority
                                className="h-9 w-auto"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {/* About */}
                            <div className="relative" onMouseEnter={() => openMenu("about")} onMouseLeave={closeMenu}>
                                <button className="nav-link-animated flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white uppercase tracking-wide transition-colors">
                                    About
                                    <ChevronIcon />
                                </button>
                                <DropdownMenu
                                    open={activeMenu === "about"}
                                    onMouseEnter={keepMenu}
                                    onMouseLeave={closeMenu}
                                >
                                    <DropdownItem href="/pages/about" label="About Us" />
                                    <DropdownItem href="/blogs/case-studies" label="Case Studies" />
                                    <DropdownItem href="/blogs/testimonials" label="Testimonials" />
                                    <DropdownItem href="/pages/timeline" label="Our History" />
                                </DropdownMenu>
                            </div>

                            {/* Services */}
                            <div className="relative" onMouseEnter={() => openMenu("services")} onMouseLeave={closeMenu}>
                                <button className="nav-link-animated flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white uppercase tracking-wide transition-colors">
                                    Services
                                    <ChevronIcon />
                                </button>
                                <div
                                    className={`mega-menu w-[640px] ${activeMenu === "services" ? "mega-menu-open" : ""}`}
                                    onMouseEnter={keepMenu}
                                    onMouseLeave={closeMenu}
                                >
                                    <div className="grid grid-cols-2 gap-2">
                                        {services.map((s) => (
                                            <a
                                                key={s.href}
                                                href={s.href}
                                                className="group flex flex-col p-3 rounded-xl hover:bg-blue-600/10 border border-transparent hover:border-blue-600/20 transition-all"
                                            >
                                                <span className="text-sm font-semibold text-slate-200 group-hover:text-white">{s.title}</span>
                                                <span className="text-xs text-slate-500 mt-0.5">{s.desc}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Industries */}
                            <div className="relative" onMouseEnter={() => openMenu("industries")} onMouseLeave={closeMenu}>
                                <button className="nav-link-animated flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white uppercase tracking-wide transition-colors">
                                    Industries
                                    <ChevronIcon />
                                </button>
                                <DropdownMenu
                                    open={activeMenu === "industries"}
                                    onMouseEnter={keepMenu}
                                    onMouseLeave={closeMenu}
                                >
                                    {industries.map((i) => (
                                        <DropdownItem key={i.href} href={i.href} label={i.title} />
                                    ))}
                                </DropdownMenu>
                            </div>

                            {/* Blog */}
                            <a href="/blogs/articles" className="nav-link-animated px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white uppercase tracking-wide transition-colors">
                                Blog
                            </a>

                            {/* Events */}
                            <a href="/pages/events" className="nav-link-animated px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white uppercase tracking-wide transition-colors">
                                Events
                            </a>

                            {/* Contact */}
                            <a href="/pages/contact" className="nav-link-animated px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white uppercase tracking-wide transition-colors">
                                Contact
                            </a>
                        </div>

                        {/* Right side */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="tel:1-866-362-9926"
                                className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
                            >
                                1-866-362-9926
                            </a>
                            <a
                                href="/pages/contact"
                                className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                            >
                                Free Assessment
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="lg:hidden p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open menu"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            {/* ── Mobile Drawer ── */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[9999] lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className="absolute top-0 right-0 h-full w-[300px] bg-[#071428] overflow-y-auto flex flex-col">
                        <div className="flex items-center justify-between p-5 border-b border-white/8">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Menu</span>
                            <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg hover:bg-white/8 text-slate-400">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex-1 py-3">
                            <MobileItem label="About" href="/pages/about" />
                            <MobileAccordion
                                label="Services"
                                open={mobileExpanded === "services"}
                                onToggle={() => toggleMobile("services")}
                            >
                                {services.map((s) => (
                                    <a key={s.href} href={s.href} className="block py-2.5 px-6 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                                        {s.title}
                                    </a>
                                ))}
                            </MobileAccordion>
                            <MobileAccordion
                                label="Industries"
                                open={mobileExpanded === "industries"}
                                onToggle={() => toggleMobile("industries")}
                            >
                                {industries.map((i) => (
                                    <a key={i.href} href={i.href} className="block py-2.5 px-6 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                                        {i.title}
                                    </a>
                                ))}
                            </MobileAccordion>
                            <MobileItem label="Blog" href="/blogs/articles" />
                            <MobileItem label="Events" href="/pages/events" />
                            <MobileItem label="Contact" href="/pages/contact" />
                        </nav>

                        <div className="p-5 border-t border-white/8 space-y-3">
                            <a href="tel:1-866-362-9926" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                                <PhoneIcon />
                                1-866-362-9926
                            </a>
                            <a href="/pages/contact" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                                Free Assessment →
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

/* ── Sub-components ── */

function ChevronIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="opacity-50">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.68 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.59 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.54a16 16 0 006.55 6.55l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
    );
}

function DropdownMenu({
    open,
    onMouseEnter,
    onMouseLeave,
    children,
}: {
    open: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`absolute top-[calc(100%+8px)] left-0 bg-[#071428] border border-white/8 rounded-2xl shadow-2xl shadow-black/50 py-2 min-w-[220px] transition-all duration-150 ${open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    );
}

function DropdownItem({ href, label }: { href: string; label: string }) {
    return (
        <a
            href={href}
            className="block px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-blue-600/10 transition-colors mx-1 rounded-xl"
        >
            {label}
        </a>
    );
}

function MobileItem({ label, href }: { label: string; href: string }) {
    return (
        <a href={href} className="flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 uppercase tracking-wide transition-colors">
            {label}
        </a>
    );
}

function MobileAccordion({
    label,
    open,
    onToggle,
    children,
}: {
    label: string;
    open: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}) {
    return (
        <div>
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white uppercase tracking-wide hover:bg-white/5 transition-colors"
            >
                {label}
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            {open && <div className="bg-black/20">{children}</div>}
        </div>
    );
}
