import React, { useEffect, useState } from 'react';

function App() {
    const [webMapVersion, setWebMapVersion] = useState<string | null>(null);
    const [androidAppVersion, setAndroidAppVersion] = useState<string | null>(null);

    useEffect(() => {
        const fetchVersions = async () => {
            // Fetch Web Map Version
            try {
                const response = await fetch(`https://map.volcanoyt.com/version.json?t=${Date.now()}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.version) {
                        setWebMapVersion(data.version);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch web map version", error);
            }

            // Fetch Android App Version
            try {
                const response = await fetch(`https://file2.yuuki.me/p/Local_EU/App/Android/VolcanoYT/version.json?alist_ts=${Math.random()}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.versionName) { // Assuming format is { versionName: "x.y.z", versionCode: 123 }
                        setAndroidAppVersion(data.versionName);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch android app version", error);
            }
        };

        fetchVersions();
        const interval = setInterval(fetchVersions, 3600000); // Check every hour
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-dark text-white font-sans">
            {/* Hero Section */}
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="max-w-4xl mx-auto">
                            {/* Hero Logo - Now Above Title */}
                            <div className="relative mb-6 w-20 h-20 sm:w-48 sm:h-48 mx-auto">
                                <img
                                    src="/logo.png"
                                    alt="VolcanoYT Logo"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>

                            <h1 className="font-extrabold tracking-tight mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 text-4xl sm:text-6xl lg:text-6xl">
                                    VolcanoYT
                                </span>
                                <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/50 text-xs sm:text-base font-bold uppercase tracking-wider self-center mt-1 sm:mt-2">
                                    Beta
                                </span>
                            </h1>
                            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                                Earthquakes, Volcanoes, Weather, and more.
                                <p className="text-sm sm:text-base text-gray-400 mt-2">The all-in-one disaster monitoring network.</p>
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-stretch px-4 sm:px-0">
                                <a
                                    href={`https://file2.yuuki.me/p/Local_EU/App/Android/VolcanoYT/volcanoyt-${androidAppVersion}.apk`}
                                    className="px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 flex flex-col items-center justify-center min-w-[160px] shadow-lg shadow-black/20"
                                >
                                    <span className="leading-tight">Android App</span>
                                    {androidAppVersion ? (
                                        <span className="text-xs text-slate-400 font-normal leading-none mt-1.5 px-2 py-0.5 bg-slate-900/50 rounded-full">v{androidAppVersion}</span>
                                    ) : (
                                        <div className="h-4"></div>
                                    )}
                                </a>
                                <a
                                    href="https://volcanoyt.com"
                                    className="px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 flex flex-col items-center justify-center min-w-[160px] shadow-lg shadow-black/20"
                                >
                                    <span className="leading-tight">Web Portal</span>
                                    <div className="h-4"></div>
                                </a>
                                <a
                                    href={`https://map.volcanoyt.com?v=${webMapVersion}`}
                                    className="px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 flex flex-col items-center justify-center min-w-[160px] shadow-lg shadow-black/20"
                                >
                                    <span className="leading-tight">Web Maps</span>
                                    {webMapVersion ? (
                                        <span className="text-xs text-slate-400 font-normal leading-none mt-1.5 px-2 py-0.5 bg-slate-900/50 rounded-full">v{webMapVersion}</span>
                                    ) : (
                                        <div className="h-4"></div>
                                    )}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Value Proposition */}
            <section className="py-12 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Why VolcanoYT?</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <FeatureCard
                            title="Earthquakes (Live)"
                            description="Advanced hybrid detection network monitoring seismic activity worldwide in real-time."
                            icon={
                                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            }
                        />
                        <FeatureCard
                            title="Volcanoes (Coming Soon)"
                            description="Live eruption monitoring and ash advisory tracking for active volcanoes globally."
                            icon={
                                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                </svg>
                            }
                        />
                        <FeatureCard
                            title="Weather (Coming Soon)"
                            description="Severe weather alerts, storm tracking, and local forecasts integrated into the map."
                            icon={
                                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            }
                        />
                        <FeatureCard
                            title="Public CCTV (Coming Soon)"
                            description="Live video feeds from critical areas to visually confirm disaster impacts."
                            icon={
                                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.818v6.364a1 1 0 01-.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            }
                        />
                        <div className="lg:col-span-4 md:col-span-2">
                            <FeatureCard
                                title="Active Development"
                                description="VolcanoYT is currently in active development. While earthquake detection is live, other features are coming soon. False alarms may occur."
                                icon={
                                    <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Hybrid Architecture Explanation */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">The Hybrid Advantage</h2>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                We combine the raw power of native Android code for sensor access with the flexibility of modern Web technologies for the user interface.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mr-3 mt-1">✓</span>
                                    <span className="text-gray-300"><strong>Native Core:</strong> Runs reliably in the background to detect vibrations.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mr-3 mt-1">✓</span>
                                    <span className="text-gray-300"><strong>Web UI:</strong> Always up-to-date visualization without app updates.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mr-3 mt-1">✓</span>
                                    <span className="text-gray-300"><strong>Privacy First:</strong> No camera, no microphone, only coarse location.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12 lg:mt-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 blur-3xl opacity-20 transform -rotate-6 rounded-full"></div>
                            <div className="relative bg-dark p-8 rounded-2xl border border-slate-700 shadow-2xl">
                                <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
                                    {`// Native Core
Service {
  background: constant;
  battery_drain: low;
  sensor: accelerometer;
}

// Web UI
Interface {
  updates: instant;
  charts: dynamic;
  platform: cross-device;
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-20 bg-dark relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
                        <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
                        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                            Please follow us to get news and early warnings via our account bot and social channels.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            <SocialLink href="https://t.me/VolcanoYT" label="Telegram" icon={
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                            } color="bg-[#0088cc]" />
                            <SocialLink href="https://youtube.com/@VolcanoYT" label="YouTube" icon={
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            } color="bg-[#ff0000]" />
                            <SocialLink href="https://twitter.com/VolcanoYTz" label="Twitter (Main)" icon={
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                            } color="bg-[#000000]" />
                            <SocialLink href="https://x.com/VolcanoEWS" label="Twitter (Bot)" icon={
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                            } color="bg-[#000000]" />
                            <SocialLink href="https://bsky.app/profile/volcanoyt.com" label="Bluesky (Main)" icon={
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                            } color="bg-[#000000]" />
                            <SocialLink href="https://bsky.app/profile/ews.volcanoyt.com" label="Bluesky (Bot)" icon={
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                            } color="bg-[#000000]" />
                            <SocialLink href="https://facebook.com/volcanoytz" label="Facebook" icon={
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            } color="bg-[#1877f2]" />
                            <SocialLink href="https://instagram.com/volcanoytz" label="Instagram" icon={
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.137a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
                            } color="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]" />
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full -z-0 pointer-events-none"></div>
            </section>

            {/* Footer */}
            <footer className="bg-dark border-t border-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">VolcanoYT</h3>
                        <p className="text-gray-400 text-sm">Disaster Monitoring</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/VolcanoYT" className="text-gray-400 hover:text-white transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
    return (
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800 group">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-dark rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-black/50 flex-shrink-0">
                    {icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

function SocialLink({ href, label, icon, color }: { href: string, label: string, icon: React.ReactNode, color: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className={`flex items-center gap-3 px-5 py-2.5 rounded-xl border border-white/10 text-white transition-all hover:scale-105 hover:shadow-xl active:scale-95 ${color} hover:brightness-110`}
        >
            {icon}
            <span className="font-semibold hidden sm:inline">{label}</span>
        </a>
    )
}

export default App;
