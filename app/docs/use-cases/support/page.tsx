export default function usecasessupportPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Customer Support / BPOs</h1>
                <p className="text-lg text-slate-600">Handle high volumes with bulk workflows and performance tracking.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The BPO Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Managing massive teams of agents, tracking micro-metrics, and maintaining strict quality control across thousands of daily conversations.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDesk Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Agent Management & Teams</h4>
                  <p className="text-slate-600">Organize hundreds of agents into specific departments, shifting resources dynamically based on queue volumes.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Real-time Dashboards</h4>
                  <p className="text-slate-600">Floor managers can monitor live workloads, agent statuses, and immediate SLA risks from a single pane of glass.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Macros & Bulk Workflows</h4>
                  <p className="text-slate-600">Agents use one-click macros to execute multiple actions simultaneously (e.g., tag as 'Refund', resolve ticket, send confirmation email).</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Drastic reduction in average handling time (AHT).</li>
                  <li>Crystal-clear operational visibility.</li>
                  <li>Highly consistent quality control.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}