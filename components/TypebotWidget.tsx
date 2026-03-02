'use client';

import { useEffect } from 'react';

export default function TypebotWidget() {
    useEffect(() => {
        // Only run on the client side and ensure script is added only once
        if (typeof window === 'undefined' || document.getElementById('typebot-module-script')) return;

        const typebotInitScript = document.createElement("script");
        typebotInitScript.id = "typebot-module-script";
        typebotInitScript.type = "module";
        typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'

Typebot.initBubble({
  typebot: "veridia-swan-digitals-ai-assistant-h51545e",
  apiHost: "https://chat.swandigitals.com",
  theme: {
    button: { backgroundColor: "#1D1D1D" },
    chatWindow: { backgroundColor: "#FFFFFF" },
  },
});
`;
        document.body.append(typebotInitScript);

        // Cleanup function
        return () => {
            const script = document.getElementById('typebot-module-script');
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
            // Note: Typebot.initBubble creates some DOM elements for the bubble.
            // A full refresh might be needed for complete cleanup in dev mode, 
            // but for production users this will persist nicely across the app.
        };
    }, []);

    return null;
}
