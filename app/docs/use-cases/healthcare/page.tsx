export default function usecaseshealthcarePage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Clinics & Small Practices</h1>
                <p className="text-lg text-slate-600">Friendly patient communication and appointment reminders on WhatsApp.</p>
            </div>


      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Small clinics and practices deal with busy phone lines, patients forgetting appointments, and front-desk staff repeating the same basic answers all day.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDigitals Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Your Data, Hosted in India</h4>
                  <p className="text-slate-600">Patient conversations are hosted on cloud infrastructure based in India, built with the DPDP Act 2023 in mind.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Pre-Chat Intake Forms</h4>
                  <p className="text-slate-600">Simple pre-chat forms collect basic details and reason for visit before routing the chat to front-desk staff.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">WhatsApp Appointment Reminders</h4>
                  <p className="text-slate-600">Proactively send appointment reminders and clinic updates directly to patients' phones on WhatsApp.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Fewer missed appointments.</li>
                  <li>Less time spent on repetitive phone calls.</li>
                  <li>Simple, organized patient communication.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}