export default function teamoperationsPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Team Operations</h1>
                <p className="text-lg text-slate-600">Manage agents, routing, workloads, and schedules efficiently.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">The Problem it Solves</h2>
          <p className="text-slate-600 mb-6">
              Unbalanced agent workloads, chaotic shift handovers, and routing customers to the wrong department, leading to massive inefficiencies and agent burnout.
          </p>
      </section>

      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">1. Agent Management & Teams</h3>
                  <p className="text-sm text-slate-600">
                      Organize your staff into specialized teams (e.g., Sales, Support, Billing, Tier 2 Engineering) to ensure queries are handled by experts.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">2. Round-Robin Assignment</h3>
                  <p className="text-sm text-slate-600">
                      Automatically distribute incoming chats evenly to available, online agents to maintain balanced workloads and prevent cherry-picking.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">3. Business Hours</h3>
                  <p className="text-sm text-slate-600">
                      Set custom availability schedules. When your team is offline, the system automatically triggers "away" messages or routes queries to chatbots.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">4. Multilingual Support</h3>
                  <p className="text-sm text-slate-600">
                      The agent dashboard and customer-facing widget support over 25 languages, enabling you to build a truly global support operation.
                  </p>
              </div>
          </div>
      </section>
    
        </>
    );
}