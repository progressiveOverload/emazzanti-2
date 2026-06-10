"use client";

const PARTNER_STRIP =
    "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/Outsourced-IT-Support-Microsoft-Partner-Gold-Partner--oxso0kne5bwp6sn26nhb3219ghb24pghd06aauwouw.png?v=1772435092";

export default function Partners() {
    return (
        <section className="section-light py-16 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
                <p
                    className="chip mb-3 mx-auto"
                    style={{
                        color: "#2563eb",
                        background: "rgba(37,99,235,0.08)",
                        border: "1px solid rgba(37,99,235,0.2)",
                    }}
                >
                    Our Partners
                </p>
                <p className="text-slate-500 text-sm">
                    Backed by the world&apos;s leading technology providers.
                </p>
            </div>

            {/* Marquee track */}
            <div className="relative">
                {/* Left fade */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to right, #f8fafd 0%, transparent 100%)",
                    }}
                />
                {/* Right fade */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to left, #f8fafd 0%, transparent 100%)",
                    }}
                />

                <div className="bg-white border-y border-slate-100 py-8">
                    <div
                        className="flex items-center gap-16"
                        style={{
                            animation: "partnerScroll 28s linear infinite",
                            width: "max-content",
                        }}
                    >
                        {/* Duplicate 4× for seamless loop at any screen width */}
                        {[0, 1, 2, 3].map((i) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                key={i}
                                src={PARTNER_STRIP}
                                alt={i === 0 ? "eMazzanti partner logos" : ""}
                                width={1270}
                                height={60}
                                className="h-10 w-auto object-contain flex-shrink-0"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes partnerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}
