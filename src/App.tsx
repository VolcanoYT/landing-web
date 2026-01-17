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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        {/* Hero Image Mockup - Top Center - Simplified & Smaller */}
                        <div className="relative mb-8 w-40 h-40 sm:w-48 sm:h-48">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img
                                    src="/logo.png"
                                    alt="VolcanoYT Logo"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl lg:text-3xl font-extrabold tracking-tight mb-6 flex items-center justify-center gap-4">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 text-6xl lg:text-7xl">
                                    VolcanoYT
                                </span>
                                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/50 text-base font-bold uppercase tracking-wider self-center mt-2">
                                    Beta
                                </span>
                            </h1>
                            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                                Earthquakes, Volcanoes, Weather, and more. The all-in-one disaster monitoring network.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-stretch">
                                <a
                                    href={`https://file2.yuuki.me/p/Local_EU/App/Android/VolcanoYT/volcanoyt.apk?v=${androidAppVersion}`}
                                    className="px-8 py-3 rounded-lg bg-slate-800 text-white font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 flex flex-col items-center justify-center min-w-[160px]"
                                >
                                    <span>Android App</span>
                                    {androidAppVersion && (
                                        <span className="text-xs text-slate-400 font-normal leading-none mt-1">v{androidAppVersion}</span>
                                    )}
                                </a>
                                <a
                                    href="https://volcanoyt.com"
                                    className="px-8 py-3 rounded-lg bg-slate-800 text-white font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center min-w-[160px]"
                                >
                                    Web Portal
                                </a>
                                <a
                                    href={`https://map.volcanoyt.com?v=${webMapVersion}`}
                                    className="px-8 py-3 rounded-lg bg-slate-800 text-white font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 flex flex-col items-center justify-center min-w-[160px]"
                                >
                                    <span>Web Maps</span>
                                    {webMapVersion && (
                                        <span className="text-xs text-slate-400 font-normal leading-none mt-1">v{webMapVersion}</span>
                                    )}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Value Proposition */}
            <section className="py-5 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why VolcanoYT?</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <a href="https://www.facebook.com/volcanoytz" className="text-gray-400 hover:text-white transition-colors">
                            Facebook
                        </a>
                        <a href="https://twitter.com/VolcanoYTz" className="text-gray-400 hover:text-white transition-colors">
                            Twitter (X)
                        </a>
                        <a href="https://www.youtube.com/@VolcanoYT" className="text-gray-400 hover:text-white transition-colors">
                            YouTube
                        </a>
                        <a href="https://t.me/VolcanoYT" className="text-gray-400 hover:text-white transition-colors">
                            Telegram
                        </a>
                        <a href="https://www.instagram.com/volcanoytz" className="text-gray-400 hover:text-white transition-colors">
                            Instagram
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
    return (
        <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800 group">
            <div className="mb-4 p-3 bg-dark rounded-xl inline-block group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default App;
