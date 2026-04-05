<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-between items-center">
            <h2 class="font-bold text-2xl text-cyan-400 leading-tight">
                {{ __('Elite Admin Dashboard') }}
            </h2>
            <div class="flex gap-4">
                <span class="px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
                    Total Views: {{ $visitsCount }}
                </span>
            </div>
        </div>
    </x-slot>

    <div class="py-12 bg-slate-950 min-h-screen text-slate-200">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8">
            
            @if(session('success'))
                <div class="p-4 rounded-xl bg-green-900/30 border border-green-500/30 text-green-400 animate-pulse">
                    {{ session('success') }}
                </div>
            @endif

            <!-- Profile Settings Form -->
            <div class="bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl sm:rounded-2xl">
                <div class="p-8">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Personal Information Management
                    </h3>
                    
                    <form action="{{ route('settings.update') }}" method="POST" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        @csrf
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-slate-400">Professional Role</label>
                            <input type="text" name="role" value="{{ $settings['role'] ?? '' }}" class="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 focus:ring-0 transition-all text-white">
                        </div>
                        
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-slate-400">Phone Number</label>
                            <input type="text" name="phone" value="{{ $settings['phone'] ?? '' }}" class="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 focus:ring-0 transition-all text-white">
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-slate-400">Email Address</label>
                            <input type="email" name="email" value="{{ $settings['email'] ?? '' }}" class="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 focus:ring-0 transition-all text-white">
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-slate-400">Location / Address</label>
                            <input type="text" name="address" value="{{ $settings['address'] ?? '' }}" class="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 focus:ring-0 transition-all text-white">
                        </div>

                        <div class="space-y-2 md:col-span-2">
                            <label class="text-sm font-medium text-slate-400">Current School/Institution</label>
                            <input type="text" name="school" value="{{ $settings['school'] ?? '' }}" class="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 focus:ring-0 transition-all text-white">
                        </div>

                        <div class="space-y-2 md:col-span-2">
                            <label class="text-sm font-medium text-slate-400">About Me Bio</label>
                            <textarea name="about" rows="4" class="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500/50 focus:ring-0 transition-all text-white resize-none">{{ $settings['about'] ?? '' }}</textarea>
                        </div>

                        <div class="md:col-span-2 flex justify-end">
                            <button type="submit" class="bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
                                Save Profile Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Visitor Tracking Table -->
            <div class="bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl sm:rounded-2xl">
                <div class="p-8">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        Audience Traffic Insights
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="border-b border-white/5">
                                    <th class="py-4 px-4 text-slate-400 font-medium text-sm">IP Address</th>
                                    <th class="py-4 px-4 text-slate-400 font-medium text-sm">Device / Browser</th>
                                    <th class="py-4 px-4 text-slate-400 font-medium text-sm text-right">Time Elapsed</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                @forelse($visitors as $visitor)
                                <tr class="hover:bg-white/[0.02] transition-colors group">
                                    <td class="py-4 px-4 font-mono text-cyan-400 text-sm">{{ $visitor->ip_address }}</td>
                                    <td class="py-4 px-4 text-slate-300 text-sm max-w-xs md:max-w-md truncate" title="{{ $visitor->user_agent }}">
                                        {{ $visitor->user_agent }}
                                    </td>
                                    <td class="py-4 px-4 text-slate-400 text-sm text-right italic">
                                        {{ \Carbon\Carbon::parse($visitor->visited_at)->diffForHumans() }}
                                    </td>
                                </tr>
                                @empty
                                <tr>
                                    <td colspan="3" class="py-12 text-center text-slate-500">No visitors tracked yet. Your journey begins here.</td>
                                </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <style>
        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #334155; }
    </style>
</x-app-layout>
