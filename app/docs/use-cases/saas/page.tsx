export default function usecasessaasPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">SaaS & Technology</h1>
                <p className="text-lg text-slate-600">Reduce churn, scale technical support, and connect user metadata.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The SaaS Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> SaaS companies deal with a high volume of technical queries, severe churn risks due to slow responses, and scattered user data that makes troubleshooting difficult.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDesk Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Smart Routing</h4>
                  <p className="text-slate-600">Automatically send billing queries to the finance team and bug reports directly to Tier 2 technical support based on keywords or user intent.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Custom Attributes</h4>
                  <p className="text-slate-600">Inject user metadata (e.g., Plan Tier, Account ID, Last Login) directly into the chat interface so agents never have to ask "What's your email?"</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Bot-Human Handoff</h4>
                  <p className="text-slate-600">Deflect basic "how-to" questions using AI bots, while instantly escalating cancellation requests to specialized retention agents.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Significantly reduced user churn.</li>
                  <li>Higher Customer Satisfaction (CSAT) scores.</li>
                  <li>Faster technical resolution times.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}