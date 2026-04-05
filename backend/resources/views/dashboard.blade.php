<x-app-layout>
    <div class="flex h-screen bg-slate-950 overflow-hidden text-slate-200">
        <!-- Sidebar -->
        <aside class="w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 flex flex-col hidden md:flex">
            <div class="p-6 border-b border-white/5">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                    </div>
                    <span class="text-xl font-bold tracking-tight text-white uppercase">Elite Hub</span>
                </div>
            </div>
            
            <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
                <a href="#overview" class="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                    Overview
                </a>
                <a href="#audience" class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Audience Info
                </a>
                <a href="#settings" class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
                    Profile CMS
                </a>
            </nav>

            <div class="p-6 border-t border-white/5">
                <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5">
                    <div class="text-xs text-slate-500 uppercase font-bold mb-1">Status</div>
                    <div class="flex items-center gap-2 text-green-400 font-medium">
                        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Server Online
                    </div>
                </div>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto custom-scrollbar relative">
            <header class="sticky top-0 z-10 p-6 bg-slate-950/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
                <h1 class="text-2xl font-bold text-white tracking-tight">Performance Analytics</h1>
                
                <div class="flex items-center gap-4">
                    <button class="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                        <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-950"></span>
                    </button>
                    <div class="h-8 w-px bg-white/10"></div>
                    <div class="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <div class="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <span class="text-sm font-medium text-slate-300">{{ Auth::user()->name }}</span>
                    </div>
                </div>
            </header>

            <div class="p-8 space-y-10">
                <!-- Stat Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 rounded-3xl bg-slate-900/40 border border-white/5 space-y-4 hover:border-cyan-500/20 transition-all group">
                        <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        </div>
                        <div>
                            <div class="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Views</div>
                            <div class="text-3xl font-black text-white mt-1">{{ $visitsCount }}</div>
                        </div>
                    </div>

                    <div class="p-6 rounded-3xl bg-slate-900/40 border border-white/5 space-y-4 hover:border-indigo-500/20 transition-all group">
                        <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>
                            <div class="text-sm font-bold text-slate-500 uppercase tracking-wider">Top Location</div>
                            <div class="text-3xl font-black text-white mt-1">{{ $visitors->whereNotNull('country')->pluck('country')->mode()[0] ?? 'N/A' }}</div>
                        </div>
                    </div>

                    <div class="p-6 rounded-3xl bg-slate-900/40 border border-white/5 space-y-4 hover:border-purple-500/20 transition-all group">
                        <div class="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
                        </div>
                        <div>
                            <div class="text-sm font-bold text-slate-500 uppercase tracking-wider">Unique IPs</div>
                            <div class="text-3xl font-black text-white mt-1">{{ $visitors->unique('ip_address')->count() }}</div>
                        </div>
                    </div>

                    <div class="p-6 rounded-3xl bg-slate-900/40 border border-white/5 space-y-4 hover:border-green-500/20 transition-all group">
                        <div class="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2 4-4"/><path d="m3 17 2 2 4-4"/><path d="m13 6 2 2 4-4"/></svg>
                        </div>
                        <div>
                            <div class="text-sm font-bold text-slate-500 uppercase tracking-wider">Success Rate</div>
                            <div class="text-3xl font-black text-white mt-1">100%</div>
                        </div>
                    </div>
                </div>

                <!-- CMS Profile Form -->
                <section id="settings" class="bg-slate-900/40 border border-white/5 rounded-[40px] overflow-hidden shadow-3xl">
                    <div class="p-10">
                        <div class="flex items-center justify-between mb-8">
                            <div>
                                <h2 class="text-3xl font-black text-white tracking-tight">Identity CMS</h2>
                                <p class="text-slate-500 mt-1">Refine your public portfolio persona instantaneously.</p>
                            </div>
                            @if(session('success'))
                                <div class="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm animate-bounce">
                                    {{ session('success') }}
                                </div>
                            @endif
                        </div>

                        <form action="{{ route('settings.update') }}" method="POST" class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            @csrf
                            <div class="grid gap-8">
                                <div class="space-y-3">
                                    <label class="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Professional Title</label>
                                    <input type="text" name="role" value="{{ $settings['role'] ?? '' }}" class="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-500/50 focus:ring-0 transition-all text-white placeholder-slate-700 shadow-inner">
                                </div>
                                <div class="space-y-3">
                                    <label class="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Contact Phone</label>
                                    <input type="text" name="phone" value="{{ $settings['phone'] ?? '' }}" class="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-500/50 focus:ring-0 transition-all text-white placeholder-slate-700 shadow-inner">
                                </div>
                                <div class="space-y-3">
                                    <label class="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Current Institution</label>
                                    <input type="text" name="school" value="{{ $settings['school'] ?? '' }}" class="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-500/50 focus:ring-0 transition-all text-white placeholder-slate-700 shadow-inner">
                                </div>
                            </div>

                            <div class="grid gap-8">
                                <div class="space-y-3">
                                    <label class="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Official Address</label>
                                    <input type="text" name="address" value="{{ $settings['address'] ?? '' }}" class="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-500/50 focus:ring-0 transition-all text-white placeholder-slate-700 shadow-inner">
                                </div>
                                <div class="space-y-3">
                                    <label class="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Biography / About</label>
                                    <textarea name="about" rows="6" class="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyan-500/50 focus:ring-0 transition-all text-white resize-none shadow-inner">{{ $settings['about'] ?? '' }}</textarea>
                                </div>
                            </div>

                            <div class="md:col-span-2 flex justify-end pt-4">
                                <button type="submit" class="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-2xl font-black text-white shadow-2xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition-all overflow-hidden">
                                    <span class="relative z-10">Broadcast Profile Update</span>
                                    <div class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                <!-- Audience Table -->
                <section id="audience" class="bg-slate-900/40 border border-white/5 rounded-[40px] overflow-hidden">
                    <div class="p-10">
                        <div class="flex items-center justify-between mb-10">
                            <div>
                                <h2 class="text-3xl font-black text-white tracking-tight">Geographic Audience</h2>
                                <p class="text-slate-500 mt-1">Deep dive into where your portfolio is making waves.</p>
                            </div>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="border-b border-white/5">
                                        <th class="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Location</th>
                                        <th class="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">IP Address</th>
                                        <th class="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest">Device Details</th>
                                        <th class="py-5 px-6 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Activity</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/5">
                                    @forelse($visitors as $visitor)
                                    <tr class="hover:bg-white/[0.02] transition-colors group">
                                        <td class="py-6 px-6">
                                            <div class="flex items-center gap-4">
                                                @if($visitor->country_code)
                                                    <img src="https://flagsapi.com/{{ strtoupper($visitor->country_code) }}/flat/32.png" alt="" class="w-8 h-8 rounded-lg shadow-lg">
                                                @else
                                                    <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-600 text-[10px] font-bold">??</div>
                                                @endif
                                                <div>
                                                    <div class="text-white font-bold">{{ $visitor->city ?? 'Unknown City' }}</div>
                                                    <div class="text-slate-500 text-xs">{{ $visitor->country ?? 'Unknown Locale' }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-6 px-6">
                                            <span class="px-3 py-1 rounded-full bg-slate-800/80 text-cyan-400 font-mono text-xs border border-white/5">
                                                {{ $visitor->ip_address }}
                                            </span>
                                        </td>
                                        <td class="py-6 px-6">
                                            <div class="text-slate-300 text-xs max-w-sm truncate opacity-60 group-hover:opacity-100 transition-opacity" title="{{ $visitor->user_agent }}">
                                                {{ $visitor->user_agent }}
                                            </div>
                                        </td>
                                        <td class="py-6 px-6 text-right">
                                            <span class="text-slate-400 text-sm font-medium whitespace-nowrap">
                                                {{ \Carbon\Carbon::parse($visitor->visited_at)->diffForHumans() }}
                                            </span>
                                        </td>
                                    </tr>
                                    @empty
                                    <tr>
                                        <td colspan="4" class="py-20 text-center">
                                            <div class="text-slate-600 font-black text-2xl opacity-20">NO DATA STREAM DETECTED</div>
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
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.1); }
        
        @media (max-width: 768px) {
            .shadow-3xl { box-shadow: none; }
        }
    </style>
</x-app-layout>
