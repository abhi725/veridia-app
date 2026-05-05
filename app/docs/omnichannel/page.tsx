export default function omnichannelPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Omnichannel Inbox</h1>
                <p className="text-lg text-slate-600">Consolidates messages from all channels into one interface.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">The Problem it Solves</h2>
          <p className="text-slate-600 mb-6">
              Agents wasting time switching between multiple tabs (WhatsApp, Email, Instagram) to talk to customers, leading to missed messages, slow response times, and fragmented conversations.
          </p>
      </section>

      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-3 text-lg">1. Unified Inbox</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                      Consolidates messages from Website Live Chat, Email, WhatsApp, Facebook, Instagram, Twitter (X), Telegram, Line, and SMS into one unified interface.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-3 text-lg">2. Shared Inboxes</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                      Multiple agents can collaborate transparently on the same communication channel, preventing double replies and ensuring accountability.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-3 text-lg">3. Conversation Continuity</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                      Maintains a single thread even if a customer switches from web chat to email, giving agents full context of the entire relationship.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-3 text-lg">4. Canned Responses & Private Notes</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                      Productivity features like saving snippets for FAQs and @mentioning teammates internally without the customer seeing.
                  </p>
              </div>
          </div>
      </section>
    
        </>
    );
}