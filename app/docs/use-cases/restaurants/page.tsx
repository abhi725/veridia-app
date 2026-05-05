export default function usecasesrestaurantsPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Restaurants & Delivery</h1>
                <p className="text-lg text-slate-600">Automate WhatsApp table bookings and consolidate delivery apps.</p>
            </div>
            
            
      <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Restaurant Challenge</h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-8">
              <p className="text-red-900">
                  <strong>The Problem:</strong> Phone lines are constantly busy, leading to missed reservations, and customers repeatedly asking for menu updates or order statuses across various apps.
              </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">How SwanDesk Helps</h3>
          <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">WhatsApp Automation</h4>
                  <p className="text-slate-600">Customers can book tables, view the digital menu, and confirm reservations purely over WhatsApp using intelligent AI routing.</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-5 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">Omnichannel Inbox</h4>
                  <p className="text-slate-600">Merge UberEats/Zomato queries, Instagram DMs, and direct WhatsApp orders into one single screen for the front desk staff.</p>
              </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Seamless, automated table booking.</li>
                  <li>Zero missed orders due to busy phone lines.</li>
                  <li>Higher customer retention and loyalty.</li>
              </ul>
          </div>
      </section>
    
        </>
    );
}