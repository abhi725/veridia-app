interface Integration {
    name: string;
    logo: string;
    category: string;
}

interface IntegrationCloudProps {
    integrations: Integration[];
}

export default function IntegrationCloud({ integrations }: IntegrationCloudProps) {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        75+ Pre-Built Integrations
                    </h2>
                    <p className="text-xl text-slate-600">
                        Connect with your favorite tools in minutes
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
                    {integrations.map((integration, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-orange-300 transition-all flex items-center justify-center group"
                        >
                            <div className="text-center">
                                <div className="text-3xl mb-2">{integration.logo}</div>
                                <div className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors">
                                    {integration.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
                        View All Integrations
                    </button>
                </div>
            </div>
        </section>
    );
}
