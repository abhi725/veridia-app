export default function crmPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Customer Data (CRM)</h1>
                <p className="text-lg text-slate-600">Unified customer profiles and data attributes directly in your chat view.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">The Problem it Solves</h2>
          <p className="text-slate-600 mb-6">
              Agents asking customers to repeat their details or order numbers because customer data is disconnected from the chat interface, causing deep frustration and long handling times.
          </p>
      </section>

      <section className="mb-12">
          <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">1. Unified Contact Profiles</h3>
                  <p className="text-slate-600">
                      The platform displays a customer’s full interaction history, past tickets, and metadata right alongside the chat window so agents never lose context.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">2. Pre-Chat Forms</h3>
                  <p className="text-slate-600">
                      Capture lead generation details (name, email, query type, account ID) automatically before a conversation begins, routing them instantly to the right team.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">3. Custom Attributes</h3>
                  <p className="text-slate-600">
                      Store business-specific data directly on customer profiles (e.g., "Subscription Tier", "LTV", "Recent Order ID") and use them to power automation rules.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">4. Advanced Filtering</h3>
                  <p className="text-slate-600">
                      Segment conversations and contacts based on custom criteria or tags, enabling highly targeted bulk actions or proactive outreach campaigns.
                  </p>
              </div>
          </div>
      </section>
    
        </>
    );
}