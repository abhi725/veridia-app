"use client";
import { Bot, User, Check, CheckCheck, Headphones, MessageSquare, Zap, BarChart3 } from 'lucide-react';

export default function DashboardMockup() {
    return (
        <div className="w-full max-w-lg mx-auto lg:max-w-none select-none">
            {/* Browser chrome */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 mx-4 bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 font-mono truncate">
                        app.swandigitals.com
                    </div>
                </div>

                <div className="flex h-[340px]">
                    {/* Left sidebar - Hidden on Mobile */}
                    <div className="hidden sm:flex w-14 bg-slate-900 flex-col items-center py-4 gap-4 border-r border-slate-700">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                            <Headphones className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                            <Bot className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-slate-400" />
                        </div>
                    </div>

                    {/* Conversation list - Hidden on Mobile */}
                    <div className="hidden sm:block w-44 bg-slate-800 border-r border-slate-700 overflow-hidden flex-shrink-0">
                        <div className="px-3 py-2 border-b border-slate-700">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inbox</p>
                        </div>
                        {[
                            { name: "Priya Sharma", msg: "Order status?", time: "now", unread: true, ch: "W" },
                            { name: "Rahul Mehta", msg: "Need a refund", time: "2m", unread: true, ch: "E" },
                            { name: "TechCorp Ltd", msg: "AI resolved ✓", time: "5m", unread: false, ch: "S" },
                            { name: "Anjali Singh", msg: "Loan inquiry", time: "8m", unread: false, ch: "W" },
                        ].map((c, i) => (
                            <div key={i} className={`px-3 py-2.5 cursor-pointer border-b border-slate-700/50 ${i === 0 ? 'bg-orange-500/10 border-l-2 border-l-orange-500' : 'hover:bg-slate-700/50'}`}>
                                <div className="flex items-center gap-2 mb-0.5">
                                    <div className={`w-6 h-6 rounded-full text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 ${c.ch === 'W' ? 'bg-green-500' : c.ch === 'E' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                                        {c.ch}
                                    </div>
                                    <p className="text-xs font-semibold text-slate-200 truncate flex-1">{c.name}</p>
                                    <span className="text-[9px] text-slate-500">{c.time}</span>
                                </div>
                                <p className="text-[10px] text-slate-400 truncate pl-8">{c.msg}</p>
                                {c.unread && <div className="w-1.5 h-1.5 rounded-full bg-orange-500 ml-auto -mt-2" />}
                            </div>
                        ))}
                    </div>

                    {/* Chat window - Takes Full Width on Mobile */}
                    <div className="flex-1 flex flex-col bg-white min-w-0">
                        {/* Chat header */}
                        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 bg-slate-50">
                            <div className="w-7 h-7 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">P</div>
                            <div>
                                <p className="text-xs font-bold text-slate-800">Priya Sharma</p>
                                <p className="text-[9px] text-slate-400">via WhatsApp · active now</p>
                            </div>
                            <div className="ml-auto flex items-center gap-1 px-2 py-1 bg-orange-50 rounded-full border border-orange-100">
                                <Zap className="w-2.5 h-2.5 text-orange-500 animate-pulse" />
                                <span className="text-[9px] text-orange-600 font-semibold">AI Active</span>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-hidden px-4 py-3 space-y-3">
                            <div className="flex gap-2 animate-fade-in">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-0.5" />
                                <div className="bg-slate-100 rounded-2xl rounded-tl-none px-3 py-2 max-w-[75%]">
                                    <p className="text-[11px] text-slate-700">Hi, where is my order #4521?</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <div className="flex items-center gap-1 mb-0.5">
                                    <Zap className="w-2.5 h-2.5 text-orange-400" />
                                    <span className="text-[9px] text-orange-500 font-medium">AI Reply</span>
                                </div>
                                <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl rounded-tr-none px-3 py-2 max-w-[80%]">
                                    <p className="text-[11px] text-white">Hi Priya! 👋 Order #4521 is out for delivery. Expected by 5 PM today. Track here: swandesk.in/track/4521</p>
                                </div>
                                <CheckCheck className="w-3 h-3 text-orange-400" />
                            </div>
                            <div className="flex gap-2">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-0.5" />
                                <div className="bg-slate-100 rounded-2xl rounded-tl-none px-3 py-2 max-w-[60%]">
                                    <p className="text-[11px] text-slate-700">Thank you! 🙏</p>
                                </div>
                            </div>
                        </div>

                        {/* Input bar */}
                        <div className="px-3 py-2 border-t border-slate-100 flex items-center gap-2">
                            <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5">
                                <p className="text-[10px] text-slate-400">AI handled · no agent needed</p>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom stat bar - Optimized Spacing */}
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-around sm:justify-start gap-4 border-t border-slate-700">
                    {[
                        { label: "Auto-resolved", value: "87%", color: "text-green-400" },
                        { label: "Avg response", value: "< 2s", color: "text-orange-400" },
                        { label: "Active now", value: "142", color: "text-blue-400" },
                    ].map((s, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                            <span className={`text-xs sm:text-sm font-bold ${s.color}`}>{s.value}</span>
                            <span className="text-[9px] sm:text-[10px] text-slate-500">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
