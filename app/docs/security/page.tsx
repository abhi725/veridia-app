export default function securityPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Security &amp; Trust</h1>
                <p className="text-lg text-slate-600">Straightforward security: your data hosted in India, secured billing, and no lock-in.</p>
            </div>


      <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">The Problem it Solves</h2>
          <p className="text-slate-600 mb-6">
              Indian SME owners want a plain, honest answer that their customer data is handled responsibly before they connect their WhatsApp number and start chatting with customers.
          </p>
      </section>

      <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">1. Your Data, Hosted in India</h3>
                  <p className="text-sm text-slate-600">
                      Your account and conversation data are hosted on cloud infrastructure based in India, so you always know where your information lives.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">2. Team Access Controls</h3>
                  <p className="text-sm text-slate-600">
                      Control who on your team can log in, view conversations, or change account settings — no need to give everyone the same access.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">3. Built to be DPDP-2023 Aware</h3>
                  <p className="text-sm text-slate-600">
                      Built with the Digital Personal Data Protection Act 2023 in mind, so you can handle customer data responsibly without extra setup.
                  </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white">
                  <h3 className="font-medium text-slate-900 mb-2 text-lg">4. Secured Billing, No Lock-In</h3>
                  <p className="text-sm text-slate-600">
                      All payments run through Razorpay, so your card details never touch our servers directly. Pay monthly and cancel any time — no long contracts.
                  </p>
              </div>
          </div>
      </section>

        </>
    );
}