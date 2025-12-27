"use client";

import { motion } from "framer-motion";
import { Activity, MessageSquare, BarChart3, Settings, Home, Bell } from "lucide-react";
import Sparkline from "./Sparkline";
import KnowledgeGraph from "./KnowledgeGraph";

interface DashboardProps {
    onCollapse: () => void;
}

export default function Dashboard({ onCollapse }: DashboardProps) {
    // Sample sparkline data
    const sparklineData = {
        users: [45, 52, 48, 61, 55, 67, 72, 68, 75, 82, 78, 85],
        messages: [30, 35, 33, 42, 38, 45, 41, 48, 44, 50, 47, 52],
        sentiment: [7.5, 7.8, 8.0, 8.2, 8.5, 8.7, 8.9, 9.0, 9.1, 9.0, 9.1, 9.2],
        revenue: [28, 31, 29, 34, 36, 38, 37, 40, 39, 41, 40, 42]
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-screen bg-white flex overflow-hidden text-slate-800 relative"
        >
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Sidebar */}
            <aside className="relative w-20 md:w-64 bg-white/90 backdrop-blur-xl border-r border-slate-200/80 flex flex-col items-center md:items-start py-8 z-50 shadow-sm">
                <div className="px-6 mb-10 w-full flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-veridia-charcoal to-slate-700 rounded-lg shadow-md"></div>
                    <span className="hidden md:block font-bold text-xl text-veridia-charcoal">Veridia</span>
                </div>

                <nav className="flex-1 w-full px-4 space-y-2">
                    <NavItem icon={<Home size={20} />} label="Overview" active />
                    <NavItem icon={<MessageSquare size={20} />} label="Conversations" />
                    <NavItem icon={<Activity size={20} />} label="Analytics" />
                    <NavItem icon={<Settings size={20} />} label="Settings" />
                </nav>
            </aside>

            {/* Main Content */}
            <main className="relative flex-1 flex flex-col min-w-0 bg-transparent">
                {/* Header */}
                <header className="relative h-16 border-b border-slate-200/80 bg-white/70 backdrop-blur-md px-8 flex items-center justify-between z-40">
                    <h1 className="text-xl font-semibold text-slate-700">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-500">God Mode</span>
                            <button
                                onClick={onCollapse}
                                className="w-12 h-6 bg-slate-200 rounded-full relative transition-all hover:bg-veridia-orange/20 cursor-pointer group"
                            >
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all group-hover:bg-veridia-orange"></div>
                            </button>
                        </div>
                        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Bell size={20} className="text-slate-500" /></button>
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-veridia-orange rounded-full shadow-sm"></div>
                    </div>
                </header>

                {/* Dashboard Grid */}
                <div className="relative flex-1 p-8 overflow-y-auto">
                    {/* Metrics Row */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
                    >
                        <MetricCard
                            title="Active Users"
                            value="2,543"
                            trend="+12%"
                            data={sparklineData.users}
                        />
                        <MetricCard
                            title="Msg/Sec"
                            value="45"
                            trend="+5%"
                            data={sparklineData.messages}
                        />
                        <MetricCard
                            title="Sentiment"
                            value="9.2"
                            trend="+0.4"
                            data={sparklineData.sentiment}
                        />
                        <MetricCard
                            title="Revenue"
                            value="$42k"
                            trend="+18%"
                            data={sparklineData.revenue}
                        />
                    </motion.div>

                    {/* Split View */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]"
                    >
                        {/* Chat Logs */}
                        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 p-6 flex flex-col">
                            <h2 className="text-lg font-semibold mb-4 text-slate-700">Live Conversations</h2>
                            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                                <ChatBubble user="Customer" text="I need help with my compliance report." time="2m ago" />
                                <ChatBubble user="Veridia AI" text="I can generate that for you. Checking SOC 2 constraints..." time="1m ago" ai />
                                <ChatBubble user="Customer" text="Great, thanks." time="Just now" />
                                <ChatBubble user="Veridia AI" text="Report generated. Secure link sent to your vault." time="Just now" ai />
                            </div>
                        </div>

                        {/* Knowledge Graph */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 p-6 flex flex-col">
                            <h2 className="text-lg font-semibold mb-4 text-slate-700">RAG Knowledge Graph</h2>
                            <div className="flex-1">
                                <KnowledgeGraph />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </motion.div>
    );
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
    return (
        <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${active ? 'bg-orange-50 text-veridia-orange shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}>
            {icon}
            <span className="hidden md:inline font-medium">{label}</span>
        </button>
    );
}

function MetricCard({ title, value, trend, data }: { title: string, value: string, trend: string, data: number[] }) {
    const isPositive = trend.startsWith('+');

    return (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow">
            <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">{title}</h3>
            <div className="flex items-end justify-between mb-3">
                <span className="text-3xl font-bold text-slate-800">{value}</span>
                <span className={`text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {trend}
                </span>
            </div>
            {/* Sparkline Chart */}
            <div className="mt-2">
                <Sparkline data={data} width={180} height={32} />
            </div>
        </div>
    );
}

function ChatBubble({ user, text, time, ai = false }: { user: string, text: string, time: string, ai?: boolean }) {
    return (
        <div className={`flex flex-col ${ai ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${ai ? 'bg-gradient-to-br from-veridia-orange to-orange-500 text-white rounded-tr-none' : 'bg-slate-100 text-slate-700 rounded-tl-none'}`}>
                <p className="text-sm">{text}</p>
            </div>
            <span className="text-xs text-slate-400 mt-1 px-2">{user} • {time}</span>
        </div>
    );
}
