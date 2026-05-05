export default function usecaseshospitalityPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Hospitality & Travel</h1>
                <p className="text-lg text-slate-600">Multilingual support, WhatsApp concierge, and mobile agent apps.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Travel Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Constant booking modifications, urgent travel assistance needs on the go, and a highly diverse, multilingual customer base.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDesk Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Multilingual Support</h4>
                  <p className="text-slate-600">Communicate natively in 25+ languages, ensuring international guests feel heard and understood.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Mobile Support Apps</h4>
                  <p className="text-slate-600">Concierge staff and agents can use native iOS/Android apps to manage urgent guest issues while physically moving around the hotel property.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">WhatsApp Centralization</h4>
                  <p className="text-slate-600">Send boarding passes, booking confirmations, and handle room service requests directly via WhatsApp.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Exceptional, personalized guest experiences.</li>
                  <li>Faster on-the-go support for travelers.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}