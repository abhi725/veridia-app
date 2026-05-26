export default function usecaseshealthcarePage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Healthcare & Clinics</h1>
                <p className="text-lg text-slate-600">Secure patient communication and automated triage.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Healthcare Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Extremely long hold times for patients, insecure communication of sensitive health data, and missed appointments wasting valuable doctor time.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDigitals Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Compliance Ready Infrastructure</h4>
                  <p className="text-slate-600">Self-hosted deployments ensure strict compliance with HIPAA and other health data regulations.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Automated Triage Forms</h4>
                  <p className="text-slate-600">Secure pre-chat forms collect symptoms and patient IDs before routing the chat to the correct medical department.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">WhatsApp Appointment Reminders</h4>
                  <p className="text-slate-600">Proactively send encrypted appointment reminders and telehealth links directly to patients' phones.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Vastly reduced patient no-shows.</li>
                  <li>Highly secure, compliant patient communication.</li>
                  <li>Automated, efficient medical triage.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}