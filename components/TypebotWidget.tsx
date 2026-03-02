'use client';

import { useEffect } from 'react';

export default function TypebotWidget() {
  useEffect(() => {
    console.log("TypebotWidget: useEffect triggered");

    if (typeof window === 'undefined') return;

    if (document.getElementById('typebot-module-script')) {
      console.log("TypebotWidget: Script already exists, skipping.");
      return;
    }

    try {
      const script = document.createElement("script");
      script.id = "typebot-module-script";
      script.type = "module";
      script.innerHTML = `
                import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js';
                console.log("Typebot: Initializing bubble...");
                Typebot.initBubble({
                    typebot: "veridia-swan-digitals-ai-assistant-h51545e",
                    apiHost: "https://chat.swandigitals.com",
                    theme: {
                        button: { backgroundColor: "#1D1D1D" },
                        chatWindow: { backgroundColor: "#FFFFFF" },
                    },
                });
            `;
      document.body.appendChild(script);
      console.log("TypebotWidget: Script appended to body");
    } catch (error) {
      console.error("TypebotWidget: Error injecting script", error);
    }
  }, []);

  return null;
}
