import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta?: string;
    highlighted?: boolean;
}

interface PricingTableProps {
    tiers?: PricingTier[];
    plans?: PricingTier[];
}

export default function PricingTable({ tiers, plans }: PricingTableProps) {
    const data = tiers || plans || [];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((tier, index) => (

                        <div key={index} className={`rounded-2xl p-8 ${tier.highlighted ? 'bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-2xl scale-105' : 'bg-white border-2 border-slate-200'}`}>
                            <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
                            <p className={`text-sm mb-6 ${tier.highlighted ? 'text-white/90' : 'text-slate-600'}`}>{tier.description}</p>
                            <div className="mb-6">
                                <span className={`text-5xl font-bold ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>{tier.price}</span>
                                {tier.price !== 'Custom' && <span className={tier.highlighted ? 'text-white/80' : 'text-slate-600'}>/month</span>}
                            </div>
                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-white' : 'text-green-500'}`} />
                                        <span className={tier.highlighted ? 'text-white/90' : 'text-slate-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/demo" className={`block text-center px-6 py-3 rounded-full font-semibold transition-all ${tier.highlighted ? 'bg-white text-orange-500 hover:bg-slate-50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                                {tier.cta || (tier.price === 'Custom' ? 'Contact Sales' : 'Get Started')}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
