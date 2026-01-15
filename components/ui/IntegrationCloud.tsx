interface Integration {
    name: string;
    color: string;
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
                        Works With Your Tools
                    </h2>
                    <p className="text-xl text-slate-600">
                        Connect with popular platforms in minutes
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
                    {integrations.map((integration, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-orange-300 transition-all flex items-center justify-center group"
                        >
                            <div className="text-center">
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 font-bold text-white text-sm"
                                    style={{ backgroundColor: integration.color }}
                                >
                                    {integration.name.substring(0, 2).toUpperCase()}
                                </div>
                                <div className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors font-medium">
                                    {integration.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <a href="/integrations" className="text-orange-600 font-semibold hover:underline">
                        View all integrations →
                    </a>
                </div>
            </div>
        </section>
    );
}
