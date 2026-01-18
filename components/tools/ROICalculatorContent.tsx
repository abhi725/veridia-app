"use client";

import { useState } from 'react';
import { Target, MessageSquare, Calendar, TrendingUp, FileText, Zap } from 'lucide-react';
import Link from 'next/link';
import { ShoppingCart, Package, RefreshCw, Gift } from 'lucide-react';

export default function ROICalculatorContent() {
    const [monthlyTickets, setMonthlyTickets] = useState(10000);
    const [avgTicketCost, setAvgTicketCost] = useState(15);
    const [automationRate, setAutomationRate] = useState(85);

    const currentCost = monthlyTickets * avgTicketCost * 12;
    const automatedTickets = monthlyTickets * (automationRate / 100);
    const remainingTickets = monthlyTickets - automatedTickets;
    const newCost = (remainingTickets * avgTicketCost * 12) + (12 * 1999); // $1999/month SwanDigitals
    const annualSavings = currentCost - newCost;
    const savingsPercentage = Math.round((annualSavings / currentCost) * 100);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Calculator Inputs */}
                    <div className="bg-slate-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-6">Your Current Metrics</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block font-medium mb-2">
                                    Monthly Support Tickets: <span className="text-orange-600 font-bold">{monthlyTickets.toLocaleString()}</span>
                                </label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="100000"
                                    step="1000"
                                    value={monthlyTickets}
                                    onChange={(e) => setMonthlyTickets(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-sm text-slate-500 mt-1">
                                    <span>1,000</span>
                                    <span>100,000</span>
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    Average Cost Per Ticket: <span className="text-orange-600 font-bold">${avgTicketCost}</span>
                                </label>
                                <input
                                    type="range"
                                    min="5"
                                    max="50"
                                    step="1"
                                    value={avgTicketCost}
                                    onChange={(e) => setAvgTicketCost(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-sm text-slate-500 mt-1">
                                    <span>$5</span>
                                    <span>$50</span>
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    Expected Automation Rate: <span className="text-orange-600 font-bold">{automationRate}%</span>
                                </label>
                                <input
                                    type="range"
                                    min="50"
                                    max="95"
                                    step="5"
                                    value={automationRate}
                                    onChange={(e) => setAutomationRate(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-sm text-slate-500 mt-1">
                                    <span>50%</span>
                                    <span>95%</span>
                                </div>
                                <p className="text-sm text-slate-500 mt-2">
                                    *85% is our average customer automation rate
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-8 rounded-2xl text-white">
                        <h2 className="text-2xl font-bold mb-6">Your Projected Savings</h2>

                        <div className="space-y-6">
                            <div>
                                <div className="text-white/80 mb-1">Current Annual Cost</div>
                                <div className="text-3xl font-bold">${currentCost.toLocaleString()}</div>
                            </div>

                            <div>
                                <div className="text-white/80 mb-1">Projected Annual Cost with SwanDigitals</div>
                                <div className="text-3xl font-bold">${Math.max(0, newCost).toLocaleString()}</div>
                            </div>

                            <div className="border-t border-white/20 pt-6">
                                <div className="text-white/80 mb-1">Annual Savings</div>
                                <div className="text-5xl font-bold text-green-300">
                                    ${Math.max(0, annualSavings).toLocaleString()}
                                </div>
                                <div className="text-2xl font-bold mt-2">
                                    {savingsPercentage > 0 ? savingsPercentage : 0}% reduction
                                </div>
                            </div>

                            <div className="bg-white/10 p-4 rounded-lg mt-6">
                                <div className="font-semibold mb-2">Breakdown:</div>
                                <div className="text-sm space-y-1">
                                    <div>• {automatedTickets.toLocaleString()} tickets automated per month</div>
                                    <div>• {remainingTickets.toLocaleString()} tickets requiring human agents</div>
                                    <div>• SwanDigitals Professional: $1,999/month</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-lg text-slate-600 mb-6">
                        Want a customized analysis based on your specific metrics?
                    </p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                        Get Custom ROI Analysis
                    </Link>
                </div>
            </div>
        </section>
    );
}
