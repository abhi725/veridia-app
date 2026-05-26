import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { 
    Shield, 
    Lock, 
    Server, 
    CheckCircle2, 
    Database, 
    Key, 
    FileCheck, 
    EyeOff, 
    UserCheck, 
    Globe,
    Cpu,
    ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Security & Compliance - DPDP & RBI Ready',
    description: 'Enterprise-grade security and data sovereignty for highly regulated sectors. 100% Indian data residency, air-gapped on-premises options, DPDP Act 2023 & RBI ready.',
    keywords: ['BFSI Chatbot Security', 'DPDP Act Chatbot', 'RBI Cybersecurity Compliance', 'On-premises LLM', 'Air-gapped AI Support'],
    alternates: {
        canonical: 'https://swandigitals.com/security',
    },
};

export default function SecurityPage() {
    const pillars = [
        {
            icon: <Globe className="w-8 h-8 text-orange-600" />,
            title: "100% Indian Data Residency",
            subtitle: "Mumbai Hosting & Local Operations",
            description: "All conversational logs, databases, and backup snapshots are hosted strictly within AWS/GCP Mumbai regions. We ensure zero data egress or cross-border replication, guaranteeing total alignment with Indian data residency mandates."
        },
        {
            icon: <FileCheck className="w-8 h-8 text-orange-600" />,
            title: "DPDP 2023 & RBI Circular Ready",
            subtitle: "Regulatory Alignment Out-of-the-box",
            description: "SwanDigitals is built from the ground up to support the Digital Personal Data Protection (DPDP) Act 2023. Our architecture includes user consent builders, request-to-forget pipelines, and detailed access logging aligning with RBI cyber security criteria for banks and NBFCs."
        },
        {
            icon: <Server className="w-8 h-8 text-orange-600" />,
            title: "True Air-Gapped On-Premises",
            subtitle: "For BFSI & Defense-grade Environments",
            description: "Deploy the entire customer service container, relational database, and open-source language models directly behind your corporate firewall. Zero outbound internet connection required, providing complete isolation of customer chat transcripts."
        }
    ];

    const securityFeatures = [
        {
            icon: <Key className="w-6 h-6 text-orange-600" />,
            title: "AES-256 & TLS 1.3 Encryption",
            description: "All customer data is encrypted at rest using AES-256 keys, and all web interfaces and API triggers strictly enforce TLS 1.3 in transit."
        },
        {
            icon: <EyeOff className="w-6 h-6 text-orange-600" />,
            title: "Automatic PII Masking",
            description: "Our ingestion pipelines dynamically detect and redact sensitive PII (Aadhaar cards, PAN numbers, credit cards, UPI IDs) before writing logs."
        },
        {
            icon: <UserCheck className="w-6 h-6 text-orange-600" />,
            title: "Granular RBAC & SAML SSO",
            description: "Enforce strict Role-Based Access Controls (RBAC) down to specific chat departments. Integrated with Microsoft Active Directory, Okta, and Google Workspace SSO."
        },
        {
            icon: <Shield className="w-6 h-6 text-orange-600" />,
            title: "SOC 2 Type II & Penetration Testing",
            description: "We perform continuous automated vulnerability scanning, quarterly external penetration testing, and maintain SOC 2 compliance readiness."
        },
        {
            icon: <Database className="w-6 h-6 text-orange-600" />,
            title: "Tamper-Proof Audit Logging",
            description: "Every agent view, system configuration change, API token read, and transcript export is logged to an immutable trail, easily exportable to your SIEM."
        },
        {
            icon: <Cpu className="w-6 h-6 text-orange-600" />,
            title: "Zero-Knowledge AI Training",
            description: "SwanDigitals never uses your customer transcripts, operational telemetry, or internal manuals to train public LLM models."
        }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="🛡️ Security & Compliance"
                title="Sovereign AI for Enterprise & BFSI"
                subtitle="True air-gapped on-premises deployment, 100% Indian data residency, and native compliance with the DPDP Act 2023."
                primaryCTA={{ text: "Talk to our CISO", href: "/contact" }}
                secondaryCTA={{ text: "Deployment Guide", href: "/documentation" }}
            />

            {/* Core Pillars */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Designed to meet the absolute strictest security mandates
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Indian financial institutions, healthcare providers, and high-growth scale-ups trust SwanDigitals to manage millions of critical daily interactions safely.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="flex flex-col p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:shadow-lg transition-all duration-300">
                                <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl w-fit mb-6">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
                                <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">{pillar.subtitle}</p>
                                <p className="text-sm text-slate-600 leading-relaxed flex-1">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 sm:text-4xl">
                                Air-Gapped On-Premises: Zero Egress Support
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Most AI platforms route user queries to global public servers, risking compliance and exposing intellectual property.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                SwanDigitals offers a true, containerized self-hosted architecture. Using isolated Docker clusters or Coolify deployments, you run SwanDigitals directly inside your private VPC (AWS, Azure, Google Cloud) or physical bare-metal servers. 
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium text-sm">No external network calls needed to run conversation processing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium text-sm">Deploy local LLM nodes for 100% on-premises language logic</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium text-sm">Complete physical control of active chat logs and telemetry</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-2xl text-slate-400 font-mono text-xs border border-slate-800 shadow-2xl">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-slate-500">swandigitals-docker-compose.yml</span>
                            </div>
                            <pre className="text-slate-300 overflow-x-auto space-y-1">
                                {`version: "3.8"
services:
  swandigitals-engine:
    image: veridia/swandigitals-engine:v4.13.0
    environment:
      - DATABASE_URL=postgresql://local-db/swandigitals
      - DATA_RESIDENCY=INDIA_MUMBAI
      - LLM_PROVIDER=local_ollama
      - OLLAMA_HOST=http://private-llm-host:11434
      - ENCRYPTION_KEY_PATH=/run/secrets/aes_key
      - PII_MASKING=ENABLED
    ports:
      - "3000:3000"
    volumes:
      - secure_vault:/var/lib/swandigitals
      
  private-llm-host:
    image: ollama/ollama:latest
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Secured at every level of the infrastructure stack
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Our team implements strict standard security safeguards to protect data from unauthorized access or modification.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {securityFeatures.map((feat, i) => (
                            <div key={i} className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl hover:border-orange-200 hover:bg-white transition-all duration-300">
                                <div className="p-2.5 bg-orange-50 border border-orange-100 rounded-lg w-fit mb-5">
                                    {feat.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cloud vs On-Prem Comparison */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Choose Your Security Configuration</h2>
                        <p className="text-slate-600 mt-3">Select the deployment model that best aligns with your governance team.</p>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-5 font-semibold text-sm">SECURITY VARIABLE</th>
                                    <th className="p-5 font-semibold text-sm text-center">SWANDIGITALS SECURE CLOUD</th>
                                    <th className="p-5 font-semibold text-sm text-center">AIR-GAPPED ON-PREMISE</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm text-slate-700 font-medium">
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Data Residency</td>
                                    <td className="p-5 text-center">100% Indian Cloud (Mumbai)</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Client Firewall Enclosed</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Language Model Options</td>
                                    <td className="p-5 text-center">Premium Cloud Models</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Local Llama 3 / Private LLMs</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Network Egress</td>
                                    <td className="p-5 text-center">Secure TLS 1.3 Outbound</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Zero Net Connections Required</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">RBI Compliance</td>
                                    <td className="p-5 text-center">Compliant (Data Isolation)</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">100% Direct Local Alignment</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Encryption Key Custody</td>
                                    <td className="p-5 text-center">SwanDigitals Key Vault</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">Client Vault (HSM Supported)</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-semibold text-slate-900 bg-slate-50/50">Best For</td>
                                    <td className="p-5 text-center">Scaling SMBs, D2C, B2B SaaS</td>
                                    <td className="p-5 text-center text-orange-600 font-semibold">BFSI, Banks, Healthcare, FinTech</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Security & CISO FAQ</h2>
                    <div className="space-y-6">
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>Do customer conversations get sent outside India?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Absolutely not. Our cloud platform is hosted exclusively in AWS Mumbai data centers. For on-premises installations, data never leaves your physically managed networks.
                            </p>
                        </details>

                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>How is SwanDigitals DPDP Act 2023 ready?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                SwanDigitals provides native features to fulfill DPDP obligations, including granular consent collection modals, right-of-access dashboards, automated request-to-erase scripts, and fully auditable access logs to confirm when and why data was modified.
                            </p>
                        </details>

                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>Can we run the AI logic without external APIs?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Yes. For air-gapped on-premises setups, we deploy highly optimized private models (like secure local models) on your local server GPUs. Language calculations are performed locally and zero third-party API calls are triggered.
                            </p>
                        </details>

                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer">
                            <summary className="font-bold text-lg text-slate-900 flex justify-between items-center list-none">
                                <span>How does SwanDigitals manage database encryption?</span>
                                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                Relational databases are encrypted at rest using AES-256 keys. We support column-level encryption for high-risk data assets like customer mobile numbers, email addresses, and chat transcripts.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Trust CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Need a Security Review?</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Connect with our engineering team to request a secure deployment demo, review architecture diagrams, or audit our SOC 2 parameters.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:scale-105 shadow-xl transition-all">
                            Speak to our CISO
                        </Link>
                        <Link href="/documentation" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900/40 hover:bg-slate-900/60 text-white border border-white/20 rounded-full font-semibold text-lg transition-all">
                            View Deployment Docs <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
