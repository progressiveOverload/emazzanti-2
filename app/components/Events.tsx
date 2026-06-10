import Image from "next/image";

const upcomingEvents = [
    {
        date: "JUN 11",
        title: "AI & Automation Master Class",
        type: "Workshop",
        href: "/pages/6a21732b05cdf44eba0d5e92",
    },
    {
        date: "JUN 18",
        title: "AI & Automation Master Class",
        type: "Workshop",
        href: "/pages/6a21732b05cdf44eba0d5e92",
    },
    {
        date: "JUL 9",
        title: "AI & Automation Master Class",
        type: "Workshop",
        href: "/pages/6a21732b05cdf44eba0d5e92",
    },
    {
        date: "JUN",
        title: "World Cup 2026 Watch Party",
        type: "Social Event",
        href: "/pages/world-cup-2026-watch-party",
    },
    {
        date: "2026",
        title: "Aspire 2026",
        type: "Annual Conference",
        href: "/pages/aspire-2026",
    },
];

const pastEvents = [
    "22 Years of Learning",
    "Cyber Security Workshop Series",
    "Hawaii State Bar Association – CLE",
    "New York State Cyber Security Conference",
    "Manufacturing Day",
    "NJLM Annual Conference",
    "WatchGuard Master Classes",
    "Slip & Fall Risk Master Classes",
];

export default function Events() {
    return (
        <section className="bg-[#071428] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
                    <div>
                        <p className="chip chip-cyan mb-4">Webinar Series &amp; Events</p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
                            Stay on top of<br />your IT game.
                        </h2>
                        <p className="text-slate-400">Hands-on workshops, webinars, and industry events.</p>
                    </div>
                    <a
                        href="https://www.emazzanti.com/pages/events-page"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
                    >
                        View all events
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Upcoming events */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Upcoming</h3>
                        <div className="space-y-3">
                            {upcomingEvents.map((ev) => (
                                <a
                                    key={ev.title + ev.date}
                                    href={ev.href}
                                    className="card-lift group flex items-center gap-5 glass rounded-xl p-5 hover:border-blue-600/25 transition-all"
                                >
                                    <div className="text-center shrink-0 w-14">
                                        <div className="text-lg font-bold text-blue-400 leading-none">{ev.date}</div>
                                        <div className="text-[10px] text-slate-600 uppercase tracking-wider mt-0.5">2026</div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                                            {ev.title}
                                        </div>
                                        <div className="text-xs text-slate-500 mt-0.5">{ev.type}</div>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Featured event card + past events */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass rounded-2xl overflow-hidden">
                            <Image
                                src="https://cdn.shopify.com/s/files/1/0732/4647/4379/files/Hands-on-immersion-workshop-2.png?v=1772434541"
                                alt="Engage! eMazzanti Webinar Series"
                                width={410}
                                height={227}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Featured Series</p>
                                <h3 className="text-lg font-bold text-white mb-2">Engage! Webinar Series</h3>
                                <p className="text-slate-400 text-sm mb-4">
                                    Microsoft Teams · Azure · M365<br />Hands-On Immersion Workshops
                                </p>
                                <a href="#" className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                                    Register →
                                </a>
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Previous Events</h3>
                            <ul className="space-y-2">
                                {pastEvents.map((ev) => (
                                    <li key={ev} className="flex items-center gap-2 text-sm text-slate-400">
                                        <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                                        {ev}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
