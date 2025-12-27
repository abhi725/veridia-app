"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import { useState } from 'react';
import Link from 'next/link';

export default function ROICalculatorPage() {
    const [monthlyTickets, setMonthlyTickets] = useState(10000);
    const [avgTicketCost, setAvgTicketCost] = useState(15);
    const [automationRate, setAutomationRate] = useState(85);

    const currentCost = monthlyTickets * avgTicketCost * 12;
    const automatedTickets = monthlyTickets * (automationRate / 100);
    const remainingTickets = monthlyTickets - automatedTickets;
    const newCost = (remainingTickets * avgTicketCost * 12) + (12 * 1999); // $1999/month Veridia
    const annualSavings = currentCost - newCost;
    const savingsPercentage = Math.round((annualSavings / currentCost) * 100);

    return (
        <SiteLayout>
            <Hero
                badge="💰 ROI Calculator"
                title="Calculate Your Savings"
                subtitle="See how much you can save with Veridia AI. Like Yellow.ai's ROI calculator, but with more realistic projections based on actual customer data."
                primaryCTA={{ text: "Get Custom Analysis", href: "/demo" }}
            />

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
                                    <div className="text-white/80 mb-1">Projected Annual Cost with Veridia</div>
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
                                        <div>• Veridia Professional: $1,999/month</div>
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

            {/* Customer Results */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Real Customer Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { company: "FinanceOne", saved: "$1.2M", rate: "85%", time: "3 weeks" },
                            { company: "HealthPlus", saved: "$890K", rate: "91%", time: "4 weeks" },
                            { company: "RetailPro", saved: "$2.1M", rate: "88%", time: "2 weeks" }
                        ].map((result, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                                <div className="text-2xl font-bold text-slate-900 mb-4">{result.company}</div>
                                <div className="text-4xl font-bold text-green-600 mb-2">{result.saved}</div>
                                <div className="text-slate-600">Annual Savings</div>
                                <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <div className="font-bold text-orange-600">{result.rate}</div>
                                        <div className="text-slate-500">Automation</div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-purple-600">{result.time}</div>
                                        <div className="text-slate-500">Deployment</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
