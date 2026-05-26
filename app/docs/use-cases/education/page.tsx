export default function usecaseseducationPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Education & EdTech</h1>
                <p className="text-lg text-slate-600">Scale admission support and broadcast campus alerts.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Education Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Massive influx of student queries during admission season, unorganized alumni communication, and slow responses to student needs.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDigitals Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Multi-lingual Chatbots</h4>
                  <p className="text-slate-600">Answer FAQ admission criteria, deadline dates, and fee structures instantly, 24/7, without human intervention.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Smart Faculty Routing</h4>
                  <p className="text-slate-600">Route specific department queries (e.g., "Computer Science curriculum") directly to the relevant faculty or department heads.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">WhatsApp Broadcasts</h4>
                  <p className="text-slate-600">Send urgent campus alerts, exam schedules, or alumni event invitations via mass WhatsApp integration.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Instant, faster admission responses.</li>
                  <li>Easily scaled support during peak enrollment seasons.</li>
                  <li>Organized student and faculty communication.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}