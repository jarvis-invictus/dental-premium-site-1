"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    InvictusChat?: {
      InvictusWidget: new (config: {
        chatbotId: string;
        apiUrl: string;
        position: string;
        theme: string;
      }) => void;
    };
  }
}

export default function ChatbotWidget() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://chat.invictus-ai.in/widget.js";
    s.onload = () => {
      if (window.InvictusChat) {
        new window.InvictusChat.InvictusWidget({
          chatbotId: "dental-template",
          apiUrl: "https://chat.invictus-ai.in",
          position: "bottom-right",
          theme: "light",
        });
      }
    };
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return null;
}
