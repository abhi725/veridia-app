
export default function AttributesPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Custom Attributes</h1>

            <section className="mb-12">
                <p className="text-slate-600 leading-relaxed mb-4">
                    Custom attributes let you store additional data on conversations and contacts.
                    Use them for lead scoring, segmentation, reporting, and personalization.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Conversation Attributes</h2>
                <p className="text-slate-600 mb-6">Store data specific to each customer conversation.</p>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="border border-slate-300 px-4 py-2 text-left">Attribute</th>
                                <th className="border border-slate-300 px-4 py-2 text-left">Type</th>
                                <th className="border border-slate-300 px-4 py-2 text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">company_name</code></td>
                                <td className="border border-slate-300 px-4 py-2">Text</td>
                                <td className="border border-slate-300 px-4 py-2">Customer&apos;s company name</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">industry</code></td>
                                <td className="border border-slate-300 px-4 py-2">Text</td>
                                <td className="border border-slate-300 px-4 py-2">Industry vertical</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">monthly_interactions</code></td>
                                <td className="border border-slate-300 px-4 py-2">Number</td>
                                <td className="border border-slate-300 px-4 py-2">Expected monthly volume</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">budget_range</code></td>
                                <td className="border border-slate-300 px-4 py-2">Text</td>
                                <td className="border border-slate-300 px-4 py-2">Budget category</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">timeline</code></td>
                                <td className="border border-slate-300 px-4 py-2">Text</td>
                                <td className="border border-slate-300 px-4 py-2">Sales timeline</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">channels_needed</code></td>
                                <td className="border border-slate-300 px-4 py-2">Text</td>
                                <td className="border border-slate-300 px-4 py-2">Required channels</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">lead_score</code></td>
                                <td className="border border-slate-300 px-4 py-2">Number</td>
                                <td className="border border-slate-300 px-4 py-2">Lead quality score (0-100)</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">demo_date</code></td>
                                <td className="border border-slate-300 px-4 py-2">Date</td>
                                <td className="border border-slate-300 px-4 py-2">Scheduled demo date</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">demo_time</code></td>
                                <td className="border border-slate-300 px-4 py-2">Text</td>
                                <td className="border border-slate-300 px-4 py-2">Scheduled demo time</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">call_recording_url</code></td>
                                <td className="border border-slate-300 px-4 py-2">Link</td>
                                <td className="border border-slate-300 px-4 py-2">Voice call recording URL</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 px-4 py-2"><code className="bg-slate-100 px-2 py-1 rounded">call_duration_secs</code></td>
                                <td className="border border-slate-300 px-4 py-2">Number</td>
                                <td className="border border-slate-300 px-4 py-2">Call duration in seconds</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Attributes</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">designation</h3>
                        <p className="text-sm text-slate-600">Job title (Marketing Manager, CTO)</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">company_size</h3>
                        <p className="text-sm text-slate-600">Number of employees</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">source_channel</h3>
                        <p className="text-sm text-slate-600">Original channel source</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Use Cases</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Lead Scoring</h3>
                        <p className="text-sm text-slate-600">Auto-calculate score based on company size, budget, and engagement.</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Segmentation</h3>
                        <p className="text-sm text-slate-600">Create custom views filtered by industry, company size, or budget.</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Personalization</h3>
                        <p className="text-sm text-slate-600">Use attributes to personalize AI responses per customer.</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-5">
                        <h3 className="font-medium text-slate-900 mb-2">Reporting</h3>
                        <p className="text-sm text-slate-600">Track metrics by custom attributes for business insights.</p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li><strong>Automation</strong> — Set up rules to auto-populate attributes</li>
                    <li><strong>Platform Guide</strong> — Learn about filtering and custom views</li>
                    <li><strong>API Reference</strong> — Full API documentation</li>
                </ul>
            </section>
        </>
    );
}
