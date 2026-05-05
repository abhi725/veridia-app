export default function usecaseslogisticsPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Logistics & Supply Chain</h1>
                <p className="text-lg text-slate-600">Real-time fleet tracking and automated delivery alerts.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Logistics Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Overwhelming volume of "Where is my package?" queries, and extremely poor, fragmented communication between drivers on the road and central dispatchers.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDesk Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Proactive Status Alerts</h4>
                  <p className="text-slate-600">Automatically push WhatsApp or SMS updates to customers when their delivery is dispatched, delayed, or arriving.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Centralized Fleet Inbox</h4>
                  <p className="text-slate-600">Drivers on the road communicate via SMS or WhatsApp, while dispatchers manage all driver conversations efficiently from a single dashboard.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Real-time, organized fleet communication.</li>
                  <li>Massive reduction in repetitive tracking inquiries.</li>
                  <li>Higher delivery transparency for customers.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}