export default function usecasesfranchisesPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Franchises & Retail</h1>
                <p className="text-lg text-slate-600">Unify brand voice while routing requests to specific locations.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Franchise Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Chaotic communication between the master franchise and individual branches, resulting in highly inconsistent customer support experiences across locations.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDigitals Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Teams & Agent Management</h4>
                  <p className="text-slate-600">Route local queries to specific branch managers while keeping a centralized, bird's-eye view for the master franchisor.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Shared Inboxes & CRM</h4>
                  <p className="text-slate-600">Maintain a single, unified database of customers, regardless of which specific franchise branch they visit or interact with.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>A perfectly unified brand voice.</li>
                  <li>Complete visibility over franchise operations.</li>
                  <li>Organized, location-specific query routing.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}