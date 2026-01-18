"use client";

import { useState } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Search, AlertTriangle, Shield, FileText, Building2, User, Loader2, RefreshCw, ExternalLink } from 'lucide-react';

interface WatchmanMatch {
    entityID: string;
    sdnName: string;
    sdnType: string;
    match: number;
    programs: string[];
    title?: string;
    remarks?: string;
}

interface SearchResult {
    name: string;
    type: string;
    score: number;
    authority: string;
    programs: string[];
    entityID: string;
}

export default function OFACSearchContent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [isDemoMode, setIsDemoMode] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;

        setIsLoading(true);
        setError(null);
        setHasSearched(true);

        try {
            const response = await fetch(`/api/watchman-proxy?name=${encodeURIComponent(searchQuery.trim())}&limit=25`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to search sanctions database');
            }

            // Transform the Watchman response into our format
            const transformedResults: SearchResult[] = [];

            // Process SDN results
            if (data.SDNs && Array.isArray(data.SDNs)) {
                data.SDNs.forEach((match: WatchmanMatch) => {
                    transformedResults.push({
                        name: match.sdnName || 'Unknown',
                        type: match.sdnType || 'Unknown',
                        score: Math.round((match.match || 0) * 100),
                        authority: 'OFAC SDN',
                        programs: match.programs || [],
                        entityID: match.entityID || ''
                    });
                });
            }

            // Process alternate names
            if (data.altNames && Array.isArray(data.altNames)) {
                data.altNames.forEach((match: WatchmanMatch) => {
                    transformedResults.push({
                        name: match.sdnName || 'Unknown',
                        type: match.sdnType || 'Alias',
                        score: Math.round((match.match || 0) * 100),
                        authority: 'OFAC Alt Names',
                        programs: match.programs || [],
                        entityID: match.entityID || ''
                    });
                });
            }

            // Process Denied Persons List
            if (data.deniedPersons && Array.isArray(data.deniedPersons)) {
                data.deniedPersons.forEach((match: WatchmanMatch) => {
                    transformedResults.push({
                        name: match.sdnName || 'Unknown',
                        type: 'Individual',
                        score: Math.round((match.match || 0) * 100),
                        authority: 'BIS Denied Persons',
                        programs: match.programs || [],
                        entityID: match.entityID || ''
                    });
                });
            }

            // Process BIS Entity List
            if (data.bisEntities && Array.isArray(data.bisEntities)) {
                data.bisEntities.forEach((match: WatchmanMatch) => {
                    transformedResults.push({
                        name: match.sdnName || 'Unknown',
                        type: 'Entity',
                        score: Math.round((match.match || 0) * 100),
                        authority: 'BIS Entity List',
                        programs: match.programs || [],
                        entityID: match.entityID || ''
                    });
                });
            }

            // Sort by score descending
            transformedResults.sort((a, b) => b.score - a.score);

            // Check if we're in demo mode
            setIsDemoMode(!!data.demoMode);

            setResults(transformedResults);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
            setResults([]);
            setIsDemoMode(false);
        } finally {
            setIsLoading(false);
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-red-600 bg-red-50';
        if (score >= 70) return 'text-orange-600 bg-orange-50';
        if (score >= 50) return 'text-yellow-600 bg-yellow-50';
        return 'text-green-600 bg-green-50';
    };

    const getTypeIcon = (type: string) => {
        const lowerType = type.toLowerCase();
        if (lowerType.includes('individual') || lowerType.includes('person')) {
            return <User className="w-4 h-4" />;
        }
        return <Building2 className="w-4 h-4" />;
    };

    return (
        <SiteLayout>
            <Hero
                badge="🔍 Free BFSI Tool"
                title="OFAC Sanctions Search"
                subtitle="Instantly screen names against OFAC's SDN list, BIS Entity List, and other global sanctions databases. Free, fast, and powered by open-source technology."
                primaryCTA={{ text: "Learn About Our Platform", href: "/demo" }}
            />

            {/* Search Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <form onSubmit={handleSearch} className="relative">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Enter a name to search (e.g., company or individual)..."
                                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                    disabled={isLoading}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !searchQuery.trim()}
                                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Searching...
                                    </>
                                ) : (
                                    <>
                                        <Shield className="w-5 h-5" />
                                        Search Sanctions Lists
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Demo Mode Banner */}
                    {isDemoMode && hasSearched && (
                        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-blue-800 mb-1">Demo Mode Active</h4>
                                    <p className="text-blue-700 text-sm">
                                        Showing sample sanctions data. To connect to live OFAC/BIS databases, start the Watchman Docker container:
                                        <code className="ml-1 px-2 py-0.5 bg-blue-100 rounded text-xs">docker run -p 8084:8084 moov/watchman:latest</code>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Results Section */}
                    <div className="mt-8">
                        {/* Error State */}
                        {error && (
                            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
                                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-red-800 mb-2">Service Unavailable</h3>
                                <p className="text-red-600 mb-4">{error}</p>
                                <button
                                    onClick={() => handleSearch({ preventDefault: () => { } } as React.FormEvent)}
                                    className="px-6 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors inline-flex items-center gap-2"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    Retry Search
                                </button>
                            </div>
                        )}

                        {/* Loading Skeleton */}
                        {isLoading && (
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-slate-100 rounded-xl p-6 animate-pulse">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                                            <div className="flex-1">
                                                <div className="h-5 bg-slate-200 rounded w-1/3 mb-2"></div>
                                                <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                                            </div>
                                            <div className="w-16 h-8 bg-slate-200 rounded-lg"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Results Table */}
                        {!isLoading && !error && hasSearched && (
                            <>
                                {results.length > 0 ? (
                                    <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                                            <p className="text-slate-700 font-medium">
                                                Found <span className="text-orange-600 font-bold">{results.length}</span> potential matches
                                            </p>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="border-b border-slate-200 bg-slate-50">
                                                        <th className="px-6 py-4 text-left font-semibold text-slate-700">Name</th>
                                                        <th className="px-6 py-4 text-left font-semibold text-slate-700">Type</th>
                                                        <th className="px-6 py-4 text-left font-semibold text-slate-700">Match Score</th>
                                                        <th className="px-6 py-4 text-left font-semibold text-slate-700">Authority/List</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {results.map((result, i) => (
                                                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                            <td className="px-6 py-4">
                                                                <div className="font-medium text-slate-900">{result.name}</div>
                                                                {result.programs.length > 0 && (
                                                                    <div className="text-xs text-slate-500 mt-1">
                                                                        Programs: {result.programs.slice(0, 3).join(', ')}
                                                                        {result.programs.length > 3 && ` +${result.programs.length - 3} more`}
                                                                    </div>
                                                                )}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <div className="flex items-center gap-2 text-slate-600">
                                                                    {getTypeIcon(result.type)}
                                                                    <span>{result.type}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreColor(result.score)}`}>
                                                                    {result.score}%
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                                                    {result.authority}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                                        <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-green-800 mb-2">No Matches Found</h3>
                                        <p className="text-green-600">
                                            No potential sanctions matches found for &ldquo;{searchQuery}&rdquo;
                                        </p>
                                    </div>
                                )}
                            </>
                        )}

                        {/* Initial State */}
                        {!isLoading && !error && !hasSearched && (
                            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 text-center">
                                <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-slate-700 mb-2">Enter a Name to Search</h3>
                                <p className="text-slate-500">
                                    Search individuals, companies, or organizations against global sanctions lists
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-8 bg-amber-50 border-y border-amber-200">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-amber-800 mb-1">Disclaimer</h4>
                            <p className="text-amber-700 text-sm">
                                This tool is provided for <strong>informational purposes only</strong> and should not be considered legal or compliance advice.
                                Results are based on fuzzy matching algorithms and may include false positives.
                                For official compliance decisions, always verify results against the authoritative OFAC database and consult with qualified compliance professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About This Tool - SEO Content */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">About This OFAC Search Tool</h2>

                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-orange-500" />
                                What is OFAC?
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                The <strong>Office of Foreign Assets Control (OFAC)</strong> is a financial intelligence and enforcement agency
                                of the U.S. Treasury Department. OFAC administers and enforces economic and trade sanctions based on U.S.
                                foreign policy and national security goals. The <strong>Specially Designated Nationals (SDN) List</strong> contains
                                individuals and companies owned or controlled by, or acting on behalf of, targeted countries, as well as
                                individuals, groups, and entities designated under OFAC programs.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <Shield className="w-6 h-6 text-orange-500" />
                                AML & Sanctions Compliance
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>Anti-Money Laundering (AML)</strong> compliance requires financial institutions to screen customers
                                and transactions against sanctions lists. This free OFAC search tool helps compliance teams, fintech companies,
                                and banks quickly check names against the SDN list, BIS Entity List, and Denied Persons List.
                                Effective sanctions screening is a critical component of any <strong>AML compliance program</strong>.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <User className="w-6 h-6 text-orange-500" />
                                KYC Compliance Tool
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>Know Your Customer (KYC)</strong> processes require thorough verification of customer identities.
                                Sanctions screening is an essential part of KYC compliance. This tool enables quick name checks during
                                customer onboarding, periodic reviews, and transaction monitoring. Use this free <strong>KYC compliance tool</strong> as
                                part of your due diligence process.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-100">
                            <h3 className="text-xl font-bold mb-4">Powered by Open Source</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                This tool is powered by <strong>Moov Watchman</strong>, an open-source sanctions screening service.
                                Watchman downloads and indexes sanctions data from OFAC, BIS, and other authoritative sources,
                                providing fast fuzzy-matching search capabilities.
                            </p>
                            <a
                                href="https://github.com/moov-io/watchman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                            >
                                View on GitHub <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Need Enterprise-Grade Compliance?</h2>
                    <p className="text-xl text-white/80 mb-8">
                        SwanDigitals offers advanced compliance automation with AI-powered document processing,
                        real-time monitoring, and comprehensive audit trails for BFSI enterprises.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/demo"
                            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all"
                        >
                            Book a Demo
                        </Link>
                        <Link
                            href="/solutions/banking"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
                        >
                            Explore Banking Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
