export default function securityPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Security & Compliance</h1>
                <p className="text-lg text-slate-600">Enterprise-grade security, data sovereignty, and role-based access.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">The Problem it Solves</h2>
          <p className="text-slate-600 mb-6">
              Enterprise buyers needing strict guarantees that customer data is safe, encrypted, and compliant with global laws before they can deploy a support solution.
          </p>
      </section>

      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">1. Data Privacy & Sovereignty</h3>
                  <p className="text-sm text-slate-600">
                      We offer fully self-hosted deployment options. Your data never leaves your private cloud infrastructure, giving you absolute control over sensitive information.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">2. Role-Based Access Control (RBAC)</h3>
                  <p className="text-sm text-slate-600">
                      Ensure agents only see what they are authorized to see. Restrict access to specific inboxes, billing information, or sensitive customer attributes based on roles.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">3. Compliance Ready</h3>
                  <p className="text-sm text-slate-600">
                      Built with stringent infrastructure practices ensuring readiness for SOC2, GDPR, and HIPAA compliance audits out of the box.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">4. SSO & Authentication</h3>
                  <p className="text-sm text-slate-600">
                      Secure login for enterprise teams using Single Sign-On (SAML/OAuth), making agent onboarding and offboarding seamless and highly secure.
                  </p>
              </div>
          </div>
      </section>
    
        </>
    );
}