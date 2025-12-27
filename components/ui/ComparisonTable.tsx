import { Check, X } from 'lucide-react';

interface ComparisonRow {
    feature: string;
    veridia: boolean | string;
    competitor: boolean | string;
}

interface ComparisonTableProps {
    title: string;
    competitorName: string;
    rows: ComparisonRow[];
}

export default function ComparisonTable({ title, competitorName, rows }: ComparisonTableProps) {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">{title}</h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-2 border-slate-200 rounded-xl overflow-hidden">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="px-6 py-4 text-left font-semibold text-slate-900">Feature</th>
                                <th className="px-6 py-4 text-center font-semibold text-orange-600">Veridia</th>
                                <th className="px-6 py-4 text-center font-semibold text-slate-600">{competitorName}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index} className="border-t border-slate-200 hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                                    <td className="px-6 py-4 text-center">
                                        {typeof row.veridia === 'boolean' ? (
                                            row.veridia ? (
                                                <Check className="w-6 h-6 text-green-600 mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-red-400 mx-auto" />
                                            )
                                        ) : (
                                            <span className="text-slate-700">{row.veridia}</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {typeof row.competitor === 'boolean' ? (
                                            row.competitor ? (
                                                <Check className="w-6 h-6 text-green-600 mx-auto" />
                                            ) : (
                                                <X className="w-6 h-6 text-red-400 mx-auto" />
                                            )
                                        ) : (
                                            <span className="text-slate-700">{row.competitor}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
