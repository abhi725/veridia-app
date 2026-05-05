export default function analyticsPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Reporting & Analytics</h1>
                <p className="text-lg text-slate-600">Deep insights into agent performance, conversation metrics, and customer satisfaction.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">The Problem it Solves</h2>
          <p className="text-slate-600 mb-6">
              Managers having zero visibility into how their support team is performing in real-time, resulting in breached SLAs, angry VIP customers, and untrackable ROI.
          </p>
      </section>

      <section className="mb-12">
          <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">1. Real-time Dashboards</h3>
                  <p className="text-slate-600">
                      Floor managers and team leads can monitor active conversations, view who is online, and see ticket backlogs as they happen, allowing for instant workload adjustments.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">2. Performance Metrics</h3>
                  <p className="text-slate-600">
                      Deep dive into crucial KPIs including First Response Time (FRT), Resolution Time, and CSAT (Customer Satisfaction) scores across individual agents or entire teams.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">3. SLA Management</h3>
                  <p className="text-slate-600">
                      Configure Service Level Agreements. The system actively monitors response times and alerts team leads immediately when SLAs are at risk of being breached.
                  </p>
              </div>
          </div>
      </section>
    
        </>
    );
}