export type FAQCategory = {
    id: string;
    title: string;
    items: { question: string; answer: string }[];
};

export const faqData: FAQCategory[] = [
    {
        id: "general-platform",
        title: "General & Platform Overview",
        items: [
            {
                question: "What exactly is SwanDesk?",
                answer: "SwanDesk is a comprehensive, AI-first customer support and engagement platform built specifically for Indian enterprises. It unifies WhatsApp, Web Chat, Email, Instagram, and Voice channels into a single inbox, while deploying advanced AI agents to automate up to 90% of routine conversations. Unlike simple chatbot builders, SwanDesk is a full omnichannel helpdesk with AI built deeply into its core."
            },
            {
                question: "Is SwanDesk just a chatbot builder?",
                answer: "No. While we have a powerful no-code conversation builder, SwanDesk is a complete Helpdesk CRM. It includes a unified agent inbox, ticketing system, human handoff routing, SLA management, and analytics. The AI acts as your 'first line of defense' within the helpdesk, not as a standalone, disconnected chatbot."
            },
            {
                question: "How is SwanDesk different from Zendesk or Intercom?",
                answer: "Platforms like Zendesk and Intercom are primarily built for human agents, with AI bolted on as an expensive add-on. SwanDesk is 'AI-Native' and built ground-up for the Indian market. We offer native support for 10+ Indian languages (not just translation APIs), strict DPDP Act and RBI compliance, true air-gapped on-premise deployment options, and flat-rate pricing instead of expensive per-seat licenses."
            },
            {
                question: "What channels does SwanDesk support?",
                answer: "SwanDesk currently supports WhatsApp Business API, Website Live Chat, Email, Instagram Direct, Telegram, Facebook Messenger, and Inbound/Outbound Phone Calls (via our Voice AI agents)."
            },
            {
                question: "What languages does the AI understand?",
                answer: "Our NLU (Natural Language Understanding) models natively support English, Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, and conversational 'Hinglish'. Because we train native models rather than relying purely on English translation layers, the AI understands local context, slang, and mixed-language inputs perfectly."
            },
            {
                question: "Do you offer a mobile app for agents?",
                answer: "Yes, SwanDesk provides mobile applications for both iOS and Android, allowing your human support agents to respond to escalated tickets and chats on the go."
            },
            {
                question: "Can I use my existing WhatsApp Business number?",
                answer: "Absolutely. We can migrate your existing WhatsApp Business API number to SwanDesk with zero downtime, preserving your Green Tick (if applicable) and quality rating."
            },
            {
                question: "Does the AI support outbound messaging?",
                answer: "Yes. You can use SwanDesk to run outbound WhatsApp marketing campaigns, send transactional alerts (like order updates), and schedule follow-ups. The AI can automatically engage with users who reply to these outbound messages."
            },
            {
                question: "What is the maximum conversation volume SwanDesk can handle?",
                answer: "Our cloud infrastructure is built on highly scalable Kubernetes clusters capable of handling 10+ million conversations per month. For our on-premise deployments, capacity scales linearly with your hardware provisioning."
            },
            {
                question: "Is it suitable for B2B or B2C?",
                answer: "Both. B2C companies use SwanDesk for massive scale (order tracking, refunds, bookings), while B2B companies use it for lead qualification, IT helpdesk, employee experience, and high-touch account management."
            }
        ]
    },
    {
        id: "capabilities-features",
        title: "AI Capabilities & Features",
        items: [
            {
                question: "Can the AI read our existing PDFs and website?",
                answer: "Yes. You can train your SwanDesk AI agent by simply uploading PDF documents, pasting URLs, or syncing your existing Knowledge Base (like Zendesk Guide or Notion). The AI instantly ingests this data using RAG (Retrieval-Augmented Generation) to answer customer questions accurately."
            },
            {
                question: "How does the Voice AI work?",
                answer: "Our Voice AI integrates with enterprise SIP trunking. When a customer calls, the speech is converted to text (STT) using secure local or proprietary speech-to-text models, processed by the dynamic LLM in real-time, and converted back to speech (TTS) using ultra-realistic, natural voice generation. The entire round-trip latency is typically under 800ms, making it feel like a natural human conversation."
            },
            {
                question: "Does the Voice AI understand Indian accents?",
                answer: "Yes, our speech-to-text models are specifically fine-tuned on diverse Indian accents and regional dialects, ensuring high accuracy even in noisy environments."
            },
            {
                question: "How does the human handoff actually work?",
                answer: "When the AI detects complex issues, angry sentiment, or explicit requests for a human, it pauses the automation and routes the conversation to the right department based on your rules. The human agent sees the full chat history and a summarized AI brief before they reply."
            },
            {
                question: "Can the AI take actions, or just answer questions?",
                answer: "It can take actions. We natively integrate with major platforms like Shopify, Stripe, and Jira. For example, the AI can check an order status, process a refund, or create a support ticket directly based on the conversation."
            },
            {
                question: "Do you have an intent recognition engine?",
                answer: "Yes. While LLMs handle dynamic Q&A, we also use deterministic intent recognition for critical workflows (like 'Cancel Order') to ensure 100% compliance and exact execution of business logic."
            },
            {
                question: "What happens if the AI doesn't know the answer?",
                answer: "You configure the fallback behavior. By default, the AI will politely state it doesn't have the information and automatically escalate the ticket to a human agent, preventing hallucination or giving incorrect information."
            },
            {
                question: "Can I review what the AI is saying to customers?",
                answer: "Yes. Every single AI conversation is logged in the unified inbox. Supervisors can review transcripts, intervene in real-time, and flag responses to continuously improve the model's accuracy."
            },
            {
                question: "Does the platform support rich media?",
                answer: "Yes, the AI can send and receive images, PDFs, videos, audio notes, and location pins across supported channels like WhatsApp and Web Chat."
            },
            {
                question: "Can I customize the AI's tone of voice?",
                answer: "Absolutely. You can provide system prompts instructing the AI to be formal, casual, empathetic, or fully aligned with your specific brand persona."
            }
        ]
    },
    {
        id: "use-cases",
        title: "Industry 360° Use Cases",
        items: [
            {
                question: "How do Banks and NBFCs use SwanDesk?",
                answer: "Financial institutions use SwanDesk for secure OTP-verified balance checks, fraud alert confirmations, EMI calculations, loan pre-qualification, and instant blocking of lost credit cards via WhatsApp."
            },
            {
                question: "How is SwanDesk used in Healthcare?",
                answer: "Hospitals and clinics use our DPDP & HIPAA-ready AI to automate patient appointment scheduling, symptom triage, prescription refill requests, lab result delivery, and post-discharge follow-ups."
            },
            {
                question: "What is the primary use case for E-commerce & Retail?",
                answer: "E-commerce brands use SwanDesk to deflect 'Where is my order?' (WISMO) tickets. The AI integrates with Shopify/Magento to provide real-time tracking, process automated returns, and offer personalized product recommendations to boost AOV."
            },
            {
                question: "Can this be used for internal IT Helpdesks?",
                answer: "Yes. SwanDesk integrates with Slack, Teams, and Jira. Employees can ask the AI to reset passwords, request software licenses, troubleshoot VPNs, or automatically create categorized IT tickets."
            },
            {
                question: "How do HR departments use the platform?",
                answer: "HR teams deploy SwanDesk as an Employee Experience Bot to instantly answer questions about PTO policies, leave balances, tax forms, and to automate new hire onboarding checklists."
            },
            {
                question: "How does it help Sales & Lead Generation?",
                answer: "Our AI Sales Agents engage website visitors 24/7, ask BANT (Budget, Authority, Need, Timeline) qualification questions, and automatically book meetings directly into your sales team's calendar (via Calendly/Google Calendar integration)."
            },
            {
                question: "Is it suitable for the Travel & Hospitality industry?",
                answer: "Yes. Hotels and travel agencies use it for booking modifications, sending digital boarding passes, answering property amenity questions, and providing 24/7 concierge support in multiple languages."
            },
            {
                question: "How does the Education and EdTech sector use it?",
                answer: "Universities and EdTech platforms use the AI to manage student enrollment queries, schedule campus tours, send fee payment reminders, and provide automated tutoring support for curriculum questions."
            },
            {
                question: "Can Real Estate companies use SwanDesk?",
                answer: "Yes. Real estate developers use the AI to showcase property brochures, capture buyer requirements (budget, location), schedule site visits, and follow up with leads automatically via WhatsApp."
            },
            {
                question: "Do BPOs use SwanDesk?",
                answer: "Absolutely. Customer Support BPOs use our platform to augment their human workforce, using AI to handle Tier-1 queries so human agents can focus exclusively on complex, high-value escalations."
            }
        ]
    },
    {
        id: "icp-roi",
        title: "ROI & Impact",
        items: [
            {
                question: "What is the typical ROI timeline?",
                answer: "Most enterprise customers see a positive ROI within 3 to 4 months. The savings from deflected tickets and reduced headcount requirements vastly outweigh the flat software cost."
            },
            {
                question: "How does this benefit the CTO or Engineering team?",
                answer: "SwanDesk is a 'No-Code/Low-Code' platform. CTOs love it because the customer support or operations teams can build and maintain the AI workflows themselves, completely removing the burden from the core engineering team."
            },
            {
                question: "How does this benefit the Head of Customer Experience (CX)?",
                answer: "CX Leaders see immediate improvements in their core metrics: First Response Time drops to <2 seconds, SLA breaches decrease, and CSAT typically rises by 30-50% due to 24/7 instant resolution."
            },
            {
                question: "Can this actually increase revenue for Sales Directors?",
                answer: "Yes. By engaging 100% of website traffic instantly, qualifying leads 24/7, and booking meetings while competitors are sleeping, sales teams typically see a 30% increase in Sales Qualified Leads (SQLs)."
            },
            {
                question: "What kind of analytics and reporting are available?",
                answer: "The platform provides granular reporting on automation deflection rates, agent response times, customer sentiment analysis, top conversation topics, and SLA tracking."
            },
            {
                question: "How do you measure AI deflection?",
                answer: "A ticket is considered 'deflected' when the AI successfully answers the user's query and the user either confirms resolution or the session expires without them requesting human escalation."
            },
            {
                question: "Will this replace our human agents?",
                answer: "No. SwanDesk is designed for 'Augmented Intelligence'. It replaces the repetitive, mundane tasks (like answering 'What are your hours?'), freeing your human agents to do what they do best: handle complex problem-solving and build empathetic relationships."
            },
            {
                question: "Can we track the CSAT for AI interactions specifically?",
                answer: "Yes. You can trigger automated CSAT surveys immediately after the AI resolves a conversation, allowing you to directly compare AI satisfaction scores against human agent scores."
            }
        ]
    },
    {
        id: "tech-architecture",
        title: "Technical Architecture & AI Models",
        items: [
            {
                question: "Which Large Language Models (LLMs) do you use?",
                answer: "We take an agnostic approach. By default, we utilize state-of-the-art cloud models for cloud deployments. For on-premise and air-gapped deployments, we utilize secure, local open-source models deployed directly inside your firewall."
            },
            {
                question: "How do you prevent the AI from hallucinating?",
                answer: "We use a strict RAG (Retrieval-Augmented Generation) architecture. The AI is hard-prompted to ONLY answer using the facts provided in your knowledge base. If the answer isn't in the provided documents, it refuses to guess and escalates to a human."
            },
            {
                question: "Can we self-host the entire platform?",
                answer: "Yes. For highly regulated industries, we offer a true On-Premise / Air-Gapped deployment. The entire application, database, and secure open-source language models run on your own AWS/Azure/GCP infrastructure or physical bare-metal servers."
            },

            {
                question: "How do you handle API rate limits during traffic spikes?",
                answer: "Our cloud architecture uses Redis-backed message queues (BullMQ/RabbitMQ). During massive spikes (e.g., Black Friday), messages are safely queued and processed asynchronously to ensure zero data loss while respecting external API limits."
            },
            {
                question: "What database technologies do you use?",
                answer: "Our core platform relies on PostgreSQL for relational data, Redis for caching and pub/sub, and highly optimized Vector Databases (like Pinecone or pgvector) for semantic search and RAG operations."
            },
            {
                question: "Is the frontend customizable?",
                answer: "Yes. The web chat widget is highly customizable. You can inject custom CSS, change brand colors, modify avatars, and use our JavaScript SDK to trigger the widget based on user behavior."
            },

            {
                question: "Do you support SAML or SSO?",
                answer: "Yes, Enterprise tier plans include Single Sign-On (SSO) integration with SAML 2.0, Okta, Microsoft Entra ID (Active Directory), and Google Workspace."
            },
            {
                question: "How often is the platform updated?",
                answer: "Our cloud platform receives continuous updates and improvements every 2-4 weeks with zero downtime. On-premise customers receive containerized updates via secure Docker registries quarterly."
            }
        ]
    },
    {
        id: "security-compliance",
        title: "Security, Compliance & Data Privacy",
        items: [
            {
                question: "Is SwanDesk DPDP Act 2023 compliant?",
                answer: "Yes. Our architecture is fully aligned with India's Digital Personal Data Protection Act. We provide built-in consent management, strict data minimization, right-to-forget tooling, and 100% data residency within Indian data centers."
            },
            {
                question: "Do you use our customer data to train public AI models?",
                answer: "Absolutely not. We have strict Zero-Data Retention agreements with our LLM providers. Your customer conversations are never used to train public models like ChatGPT."
            },
            {
                question: "Where is the cloud data hosted?",
                answer: "For Indian customers, all data (including vector embeddings, databases, and media) is hosted exclusively in AWS Mumbai or Google Cloud Mumbai (ap-south-1) regions to ensure complete data sovereignty."
            },
            {
                question: "Are you SOC 2 compliant?",
                answer: "Our platform architecture is SOC 2 Type II aligned. We enforce AES-256 encryption at rest, TLS 1.3 in transit, strict RBAC (Role-Based Access Control), and maintain comprehensive audit logs."
            },
            {
                question: "Do you meet RBI cybersecurity guidelines for banks?",
                answer: "Yes. Our on-premise, air-gapped deployment model is specifically designed to meet the Reserve Bank of India's stringent cybersecurity framework, ensuring no external internet dependencies for core AI processing."
            },
            {
                question: "Are you HIPAA compliant?",
                answer: "Yes. For healthcare providers, we sign Business Associate Agreements (BAAs), encrypt PHI (Protected Health Information) end-to-end, and provide detailed access auditing to ensure HIPAA compliance."
            },
            {
                question: "How do you handle PII (Personally Identifiable Information)?",
                answer: "Our system includes automatic PII redaction capabilities. Sensitive information like credit card numbers, Aadhaar numbers, or SSNs can be automatically masked in the chat logs before hitting the database."
            },
            {
                question: "How long do you retain conversation data?",
                answer: "By default, we retain data indefinitely for your analytics. However, enterprise customers can configure custom automated retention policies (e.g., auto-delete chats after 90 days or 7 years) to meet their specific compliance needs."
            },
            {
                question: "Who owns the data?",
                answer: "You do. You retain 100% ownership of your knowledge base, conversation logs, and customer data. You can export it directly from your dashboard at any time."
            },
            {
                question: "What is your platform uptime guarantee?",
                answer: "We offer an Enterprise SLA of 99.99% uptime, backed by highly available, multi-zone cloud architecture and redundant database replicas."
            }
        ]
    },
    {
        id: "onboarding",
        title: "Implementation, Training & Onboarding",
        items: [
            {
                question: "How long does implementation actually take?",
                answer: "For standard cloud deployments, our '7-Day Go Live' promise holds true. We handle the initial setup, knowledge base ingestion, and channel connections. Complex on-premise deployments or custom core-banking integrations typically take 3 to 6 weeks."
            },
            {
                question: "Who builds the initial bot?",
                answer: "We do. Unlike self-serve tools where you are left to figure it out, our Customer Success Engineering team builds your initial AI workflows, trains the model on your data, and tests it extensively before handing over the keys."
            },
            {
                question: "What format should our training data be in?",
                answer: "We can ingest standard URLs (we will scrape your website), PDF documents, Word files, text files, or natively sync with your existing Knowledge Base (like Zendesk, Confluence, or Notion)."
            },
            {
                question: "Do we need developers to maintain it?",
                answer: "No. The SwanDesk dashboard is highly intuitive. Customer Support Managers and non-technical staff can easily update answers, review chat logs, and modify workflows without writing a single line of code."
            },
            {
                question: "Is there a limit to how much data we can upload?",
                answer: "While fair use limits apply based on your tier, standard plans accommodate thousands of pages of documentation. We optimize your vector database space automatically."
            },
            {
                question: "How do we test the AI before it goes live?",
                answer: "We provide a secure 'Sandbox' environment. You and your team can chat with the AI widget privately to test its responses, attempt to break it, and refine its knowledge before deploying it to your public website or WhatsApp."
            },
            {
                question: "Do you provide training for our human agents?",
                answer: "Yes. Enterprise deployments include comprehensive virtual or on-site training sessions for your support agents, showing them how to navigate the inbox, use AI reply suggestions, and resolve tickets efficiently."
            },
            {
                question: "Can we add more knowledge to the AI later?",
                answer: "Absolutely. You can add, edit, or delete documents from the AI's 'Brain' in real-time. The AI immediately updates its knowledge without requiring any manual retraining processes."
            }
        ]
    },
    {
        id: "pricing",
        title: "Pricing & Contracts",
        items: [
            {
                question: "How does your flat-rate pricing work?",
                answer: "Unlike competitors who charge 'Per Seat' (penalizing you for growing your team) or 'Per Conversation' (making billing unpredictable), our core plans offer flat-rate monthly pricing with generous volume limits and unlimited agent seats."
            },
            {
                question: "Are WhatsApp API conversation costs included?",
                answer: "No. WhatsApp Business API charges (imposed by Meta based on conversation categories like Marketing, Utility, or Service) are billed at cost. We act as your BSP (Business Solution Provider) but do not mark up Meta's raw pricing."
            },
            {
                question: "Do you offer a free trial?",
                answer: "Because we custom-build and train the initial AI model for you, we don't offer a generic free trial. However, we do offer a low-risk, ₹10,000 paid Pilot Program where we deploy the solution for a specific use case so you can prove ROI before committing."
            },
            {
                question: "Are there any hidden setup fees?",
                answer: "Cloud deployments have no setup fees. Highly complex integrations (like legacy core banking systems) or custom on-premise hardware deployments may incur a one-time Professional Services fee, which is quoted transparently upfront."
            },
            {
                question: "Do I have to sign an annual contract?",
                answer: "We offer both month-to-month and annual contracts. Annual contracts come with significant discounts and priority onboarding."
            },
            {
                question: "What happens if we exceed our plan's conversation limits?",
                answer: "We never hard-stop your service. If you experience an unexpected spike, your conversations continue flawlessly. We will simply notify you and bill the overages at a transparent, pre-agreed rate at the end of the month."
            },
            {
                question: "Can we upgrade our plan later?",
                answer: "Yes, you can upgrade your plan or add custom modules (like Voice AI or custom API integrations) at any point during your billing cycle."
            },
            {
                question: "Is there a discount for startups or nonprofits?",
                answer: "Yes. We proudly support registered Indian non-profits and early-stage, bootstrapped startups with special pricing tiers. Please contact our sales team to discuss eligibility."
            }
        ]
    }
];
