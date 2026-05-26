export default function usecasesrealestatePage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Real Estate & Property</h1>
                <p className="text-lg text-slate-600">Qualify leads 24/7 and automate property viewings.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Real Estate Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Losing high-value property leads because agents aren't available 24/7 to answer questions or schedule immediate property viewings.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDigitals Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Automated Lead Qualification</h4>
                  <p className="text-slate-600">Chatbots ask upfront questions (budget, location preference, buying timeline) before handing the qualified lead to an agent.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Automated Viewing Schedules</h4>
                  <p className="text-slate-600">Integrate with calendars to let potential buyers schedule property viewings directly within the chat interface.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Localized Routing</h4>
                  <p className="text-slate-600">Omnichannel routing automatically assigns leads to specific real estate agents based on the geographic region requested.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>24/7 high-value lead qualification.</li>
                  <li>Zero missed opportunities.</li>
                  <li>Automated, frictionless viewing schedules.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}