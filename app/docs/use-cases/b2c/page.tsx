export default function usecasesb2cPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">B2C Services & Appointments</h1>
                <p className="text-lg text-slate-600">Capture leads instantly and automate appointment reminders.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The B2C Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Salons, clinics, and local service providers losing business because they can't confirm appointments fast enough or collect leads effectively from their website.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDigitals Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Pre-Chat Forms & CRM</h4>
                  <p className="text-slate-600">Capture lead details instantly before they leave the website, ensuring no potential customer slips through the cracks.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Proactive Outreach</h4>
                  <p className="text-slate-600">Send appointment reminders via WhatsApp or SMS automatically, ensuring clients show up on time.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Higher appointment completion rates.</li>
                  <li>Massive reduction in costly no-shows.</li>
                  <li>Faster lead conversion.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}