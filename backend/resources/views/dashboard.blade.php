<x-app-layout>
    <div class="flex h-screen bg-slate-950 overflow-hidden text-slate-200">
        <!-- Sidebar -->
        <aside class="w-20 lg:w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 flex flex-col transition-all duration-500">
            <div class="p-4 lg:p-6 border-b border-white/5">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                    </div>
                    <span class="text-xl font-black tracking-tight text-white uppercase hidden lg:block">Elite Admin</span>
                </div>
            </div>
            
            <nav class="flex-1 p-4 space-y-4 overflow-y-auto">
                <div class="space-y-1">
                    <a href="#overview" class="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20 transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                        <span class="hidden lg:block text-sm">Dashboard</span>
                    </a>
                    <a href="#audience" class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <span class="hidden lg:block text-sm">Traffic Insights</span>
                    </a>
                    <a href="#settings" class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
                        <span class="hidden lg:block text-sm">Profile CMS</span>
                    </a>
                </div>

                <div class="pt-4 border-t border-white/5 space-y-1">
                    <a href="{{ route('profile.edit') }}" class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-white/5 hover:text-slate-300 transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <span class="hidden lg:block text-sm">Account Settings</span>
                    </a>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500/70 hover:bg-red-500/10 hover:text-red-400 transition-all group text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                            <span class="hidden lg:block text-sm">Sign Out</span>
                        </button>
                    </form>
                </div>
            </nav>

            <div class="p-4 lg:p-6 border-t border-white/5 hidden lg:block">
                <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-white/5">
                    <div class="text-[10px] text-slate-600 uppercase font-black mb-1">Status</div>
                    <div class="flex items-center gap-2 text-green-500 font-bold text-xs uppercase tracking-widest">
                        <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Active Stream
                    </div>
                </div>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto custom-scrollbar relative bg-slate-950">
            <header class="sticky top-0 z-20 p-6 bg-slate-950/40 backdrop-blur-2xl border-b border-white/5 flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <div class="w-1.5 h-6 bg-cyan-600 rounded-full"></div>
                    <h1 class="text-2xl font-black text-white tracking-tighter uppercase italic">Control Panel</h1>
                </div>
                
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900 border border-white/10">
                        <div class="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md transform rotate-12"></div>
                        <span class="text-xs font-black text-slate-300">{{ Auth::user()->name }}</span>
                    </div>
                </div>
            </header>

            <div class="p-6 lg:p-10 space-y-12">
                <!-- Stat Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 rounded-[32px] bg-slate-900/30 border border-white/5 space-y-4 hover:border-cyan-500/20 transition-all group relative overflow-hidden">
                        <div class="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/5 rounded-full blur-3xl"></div>
                        <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        </div>
                        <div>
                            <div class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Live Impressions</div>
                            <div class="text-4xl font-black text-white mt-1 leading-none">{{ $visitsCount }}</div>
                        </div>
                    </div>

                    <div class="p-6 rounded-[32px] bg-slate-900/30 border border-white/5 space-y-4 hover:border-indigo-500/20 transition-all group relative overflow-hidden">
                        <div class="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/5 rounded-full blur-3xl"></div>
                        <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>
                            <div class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Dominant Locale</div>
                            <div class="text-2xl font-black text-white mt-1 uppercase truncate max-w-full italic">{{ $visitors->whereNotNull('country')->pluck('country')->mode()[0] ?? 'Global' }}</div>
                        </div>
                    </div>

                    <div class="p-6 rounded-[32px] bg-slate-900/30 border border-white/5 space-y-4 hover:border-purple-500/20 transition-all group relative overflow-hidden">
                        <div class="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl"></div>
                        <div class="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
                        </div>
                        <div>
                            <div class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Unique Identities</div>
                            <div class="text-4xl font-black text-white mt-1 leading-none">{{ $visitors->unique('ip_address')->count() }}</div>
                        </div>
                    </div>

                    <div class="p-6 rounded-[32px] bg-slate-900/30 border border-white/5 space-y-4 hover:border-green-500/20 transition-all group relative overflow-hidden">
                        <div class="absolute -right-4 -top-4 w-24 h-24 bg-green-500/5 rounded-full blur-3xl"></div>
                        <div class="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2 4-4"/><path d="m3 17 2 2 4-4"/><path d="m13 6 2 2 4-4"/></svg>
                        </div>
                        <div>
                            <div class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">Data Integrity</div>
                            <div class="text-4xl font-black text-white mt-1 leading-none uppercase italic">SECURE</div>
                        </div>
                    </div>
                </div>

                <!-- CMS Profile Form -->
                <section id="settings" class="bg-slate-900/20 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl">
                    <div class="p-8 lg:p-12">
                        <div class="flex items-center justify-between mb-10">
                            <div>
                                <h2 class="text-3xl font-black text-white tracking-tighter uppercase italic">Identity Forge</h2>
                                <p class="text-slate-500 mt-2 font-medium">Synchronize your portfolio persona with the cloud.</p>
                            </div>
                            @if(session('success'))
                                <div class="px-6 py-3 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-black uppercase tracking-widest animate-pulse">
                                    Broadcast Success
                                </div>
                            @endif
                        </div>

                        <form action="{{ route('settings.update') }}" method="POST" class="grid grid-cols-1 md:grid-cols-2 gap-10">
                            @csrf
                            <div class="space-y-8">
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] ml-1">Professional Title</label>
                                    <input type="text" name="role" value="{{ $settings['role'] ?? '' }}" class="w-full bg-slate-950 border border-white/5 rounded-2xl px-6 py-5 focus:border-cyan-500/50 focus:ring-0 transition-all text-white font-medium shadow-inner placeholder-slate-800">
                                </div>
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                    <input type="email" name="email" value="{{ $settings['email'] ?? '' }}" oninput="this.value = this.value.toLowerCase()" class="w-full bg-slate-950 border border-white/5 rounded-2xl px-6 py-5 focus:border-cyan-500/50 focus:ring-0 transition-all text-white font-medium shadow-inner placeholder-slate-800">
                                </div>
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] ml-1">Contact Phone</label>
                                    <input type="text" name="phone" value="{{ $settings['phone'] ?? '' }}" class="w-full bg-slate-950 border border-white/5 rounded-2xl px-6 py-5 focus:border-cyan-500/50 focus:ring-0 transition-all text-white font-medium shadow-inner placeholder-slate-800">
                                </div>
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] ml-1">Current Institution</label>
                                    <input type="text" name="school" value="{{ $settings['school'] ?? '' }}" class="w-full bg-slate-950 border border-white/5 rounded-2xl px-6 py-5 focus:border-cyan-500/50 focus:ring-0 transition-all text-white font-medium shadow-inner placeholder-slate-800">
                                </div>
                            </div>

                            <div class="space-y-8">
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] ml-1">Location Metadata</label>
                                    <input type="text" name="address" value="{{ $settings['address'] ?? '' }}" class="w-full bg-slate-950 border border-white/5 rounded-2xl px-6 py-5 focus:border-cyan-500/50 focus:ring-0 transition-all text-white font-medium shadow-inner placeholder-slate-800">
                                </div>
                                <div class="space-y-3">
                                    <label class="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] ml-1">Professional Narrative</label>
                                    <textarea name="about" rows="7" class="w-full bg-slate-950 border border-white/5 rounded-2xl px-6 py-5 focus:border-cyan-500/50 focus:ring-0 transition-all text-white font-medium resize-none shadow-inner leading-relaxed">{{ $settings['about'] ?? '' }}</textarea>
                                </div>
                            </div>

                            <div class="md:col-span-2 flex justify-end">
                                <button type="submit" class="group relative px-12 py-5 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.05] active:scale-95 transition-all shadow-2xl shadow-cyan-500/10">
                                    Deploy Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                <!-- Audience Table -->
                <section id="audience" class="bg-slate-900/10 border border-white/5 rounded-[40px] overflow-hidden relative">
                    <div class="p-8 lg:p-12">
                        <div class="flex items-center justify-between mb-12">
                            <div>
                                <h2 class="text-3xl font-black text-white tracking-tighter uppercase italic">Geographic Pulse</h2>
                                <p class="text-slate-500 mt-2 font-medium italic">Mapping the impact of your digital footprint.</p>
                            </div>
                            
                            <div class="px-4 py-2 rounded-xl bg-slate-950 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest hidden md:block">
                                <span class="animate-pulse mr-2">!</span> Localhost (IP 127.0.0.1) shows as 'Unknown City'
                            </div>
                        </div>

                        <div class="overflow-x-auto custom-scrollbar">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="border-b border-white/5">
                                        <th class="py-6 px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Origin</th>
                                        <th class="py-6 px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">IP Trace</th>
                                        <th class="py-6 px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">System</th>
                                        <th class="py-6 px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] text-right">Recency</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/5">
                                    @forelse($visitors as $visitor)
                                    <tr class="hover:bg-cyan-500/[0.03] transition-colors group">
                                        <td class="py-6 px-4">
                                            <div class="flex items-center gap-4">
                                                <div class="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center overflow-hidden shadow-lg group-hover:border-cyan-500/30 transition-all">
                                                    @if($visitor->country_code)
                                                        <img src="https://flagsapi.com/{{ strtoupper($visitor->country_code) }}/flat/64.png" alt="" class="w-full h-full object-cover transform group-hover:scale-125 transition-transform">
                                                    @else
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-700"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                                                    @endif
                                                </div>
                                                <div>
                                                    <div class="text-white font-black uppercase text-xs">{{ $visitor->city ?? ($visitor->ip_address == '127.0.0.1' ? 'Local System' : 'Unknown City') }}</div>
                                                    <div class="text-slate-600 text-[10px] font-black tracking-widest uppercase">{{ $visitor->country ?? 'Private Domain' }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-6 px-4">
                                            <span class="px-3 py-1 rounded-lg bg-slate-950 text-slate-400 font-mono text-[10px] border border-white/5 group-hover:text-cyan-400 transition-colors">
                                                {{ $visitor->ip_address }}
                                            </span>
                                        </td>
                                        <td class="py-6 px-4">
                                            <div class="text-slate-600 text-[10px] max-w-sm truncate font-medium group-hover:text-slate-400 transition-colors" title="{{ $visitor->user_agent }}">
                                                {{ $visitor->user_agent }}
                                            </div>
                                        </td>
                                        <td class="py-6 px-4 text-right">
                                            <div class="text-slate-400 text-xs font-black uppercase tracking-tighter tabular-nums">
                                                {{ \Carbon\Carbon::parse($visitor->visited_at)->diffForHumans() }}
                                            </div>
                                        </td>
                                    </tr>
                                    @empty
                                    <tr>
                                        <td colspan="4" class="py-32 text-center">
                                            <div class="text-slate-800 font-black text-4xl opacity-5 italic tracking-tighter">DATA SILENCE</div>
                                        </td>
                                    </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>

    <style>
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 255, 255, 0.2); }
        
        [dir="rtl"] .group-hover\:translate-x-1 { --tw-translate-x: -0.25rem; }
    </style>
</x-app-layout>
