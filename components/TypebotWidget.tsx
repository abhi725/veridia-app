'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function TypebotWidget() {
    return (
        <Script id="typebot-init" strategy="afterInteractive">
            {`
                const typebotInitScript = document.createElement("script");
                typebotInitScript.type = "module";
                typebotInitScript.innerHTML = \`import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'

                Typebot.initBubble({
                    typebot: "veridia-swan-digitals-ai-assistant-h51545e",
                    apiHost: "https://chat.swandigitals.com",
                    theme: {
                        button: { backgroundColor: "#1D1D1D" },
                        chatWindow: { backgroundColor: "#FFFFFF" },
                    },
                });
                \`;
                document.body.append(typebotInitScript);
            `}
        </Script>
    );
}
