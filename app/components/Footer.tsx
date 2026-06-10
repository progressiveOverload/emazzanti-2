import Image from "next/image";

const serviceLinks = [
    { label: "IT Support 24/7", href: "/pages/it-support-24-7", bold: true },
    { label: "eCare Network Management", href: "/pages/network-management" },
    { label: "eCare Compliance", href: "/pages/managed-network-services" },
    { label: "e365 Bundle", href: "/pages/e365", bold: true },
    { label: "Security & Privacy", href: "/pages/security-and-privacy", bold: true },
    { label: "Secure Route", href: "/pages/ecare-secure-route" },
    { label: "SOC Monitoring", href: "/pages/soc" },
    { label: "Multi-Factor Authentication", href: "#" },
    { label: "Dark Web Monitoring", href: "#" },
    { label: "Email Defense", href: "/pages/mxinspect" },
    { label: "Email Deliverability", href: "#" },
    { label: "Penetration Testing", href: "/pages/penetration-testing-services" },
];

const cloudLinks = [
    { label: "Cloud Services", href: "/pages/cloud-services", bold: true },
    { label: "Cloud Backup", href: "/pages/ecare-cloud-backup" },
    { label: "Microsoft Copilot", href: "/pages/microsoft-copilot" },
    { label: "Microsoft Teams", href: "/pages/microsoft-teams" },
    { label: "Dynamics 365", href: "/pages/dynamics-365" },
    { label: "Dynamics 365 Sales", href: "/pages/dynamics-365-sales" },
    { label: "ePower Analytics", href: "/pages/epower-analytics" },
    { label: "Cloud Marketplace", href: "/pages/cloud-marketplace" },
    { label: "Other Services", href: "#", bold: true },
    { label: "QuickBooks Online", href: "/pages/qbo-advanced" },
    { label: "Email Signature Manager", href: "/pages/email-signature-services" },
    { label: "HR Solutions – ADP", href: "/pages/adp-workforce" },
];

const industryLinks = [
    { label: "Industry Solutions", href: "#", bold: true },
    { label: "Retail / Distribution", href: "/pages/retail-emazzanti" },
    { label: "Legal", href: "/pages/legal-emazzanti" },
    { label: "Manufacturing", href: "/pages/6a205d1536e8fcb863095b56" },
    { label: "Government", href: "/pages/government-emazzanti" },
    { label: "Education", href: "/pages/69b2f1e9e4572c83e30a6938" },
    { label: "Municipalities", href: "/pages/municipalities-emazzanti" },
    { label: "Non-Profit", href: "/pages/nonprofit-emazzanti" },
    { label: "Resources", href: "#", bold: true },
    { label: "Blog", href: "/blogs/articles" },
    { label: "Events", href: "#" },
    { label: "Resource Library", href: "/resource-library/" },
];

const offices = [
    { country: "🇺🇸", lines: ["701 Grand St, Hoboken, NJ 07030 (HQ)"] },
    { country: "🇺🇸", lines: ["724 Clinton Street, Hoboken, NJ (Fall 2025)"] },
    { country: "🇺🇸", lines: ["170 120th Ave, Bellevue, WA 98005"] },
    { country: "🇺🇸", lines: ["3422 Old Capitol Trail #644, Wilmington, DE"] },
    { country: "🇺🇸", lines: ["95-390 Kuahelani Ave, Mililani, HI 96789"] },
    { country: "🇺🇸", lines: ["7901 4th St N, St Petersburg, FL 33702"] },
    { country: "🇨🇦", lines: ["1 Place Ville Marie, Suite 4000, Montréal, QC"] },
    { country: "🇨🇦", lines: ["2900 John St, Markham, ON L3R 5G3"] },
    { country: "🇲🇽", lines: ["36 Periférico Blvd. Manuel Ávila Camacho, CDMX"] },
];

export default function Footer() {
    return (
        <footer className="bg-[#040c1a] border-t border-white/6">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Column 1: Services */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Services</h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        className={`footer-link ${l.bold ? "text-slate-400 font-semibold" : ""}`}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Cloud + Other */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Cloud &amp; More</h4>
                        <ul className="space-y-2">
                            {cloudLinks.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        className={`footer-link ${l.bold ? "text-slate-400 font-semibold" : ""}`}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Industries + Resources */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Industries</h4>
                        <ul className="space-y-2">
                            {industryLinks.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        className={`footer-link ${l.bold ? "text-slate-400 font-semibold" : ""}`}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Get in Touch + Offices */}
                    <div>
                        <div className="mb-8">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Get in Touch</h4>
                            <div className="space-y-3 mb-5">
                                <a href="tel:1-844-360-4400" className="flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors font-medium">
                                    <svg className="w-4 h-4 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.68 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.59 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.54a16 16 0 006.55 6.55l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                    1-844-360-4400
                                </a>
                                <a href="mailto:info@emazzanti.net" className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors">
                                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                                    </svg>
                                    info@emazzanti.net
                                </a>
                            </div>
                            {/* Social */}
                            <div className="flex items-center gap-3">
                                <SocialLink href="https://www.facebook.com/emazzanti" label="Facebook">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </SocialLink>
                                <SocialLink href="https://www.linkedin.com/company/emazzanti-technologies" label="LinkedIn">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                                </SocialLink>
                                <SocialLink href="https://twitter.com/emazzanti" label="X / Twitter">
                                    <path d="M4 4l16 16M4 20L20 4" strokeLinecap="round" />
                                </SocialLink>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Offices</h4>
                            <ul className="space-y-2">
                                {offices.map((o, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                        <span>{o.country}</span>
                                        <span>{o.lines[0]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0732/4647/4379/files/eMazzanti_logo_200x53px-w.png?v=1772436151"
                        alt="eMazzanti Technologies"
                        width={130}
                        height={35}
                        className="h-8 w-auto opacity-60"
                    />
                    <p className="text-xs text-slate-600 text-center">
                        © {new Date().getFullYear()} eMazzanti Technologies. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        {["Privacy Policy", "Terms of Use", "DMCA"].map((label) => (
                            <a key={label} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all"
        >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {children}
            </svg>
        </a>
    );
}
