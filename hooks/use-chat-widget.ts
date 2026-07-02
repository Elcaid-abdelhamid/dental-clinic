"use client";

import * as React from "react";
import type { ChatMessage } from "@/types";

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content: "Hi there! I'm the Brightline AI Assistant. Ask me about treatments, pricing, or book an appointment — I'm available 24/7.",
  timestamp: new Date(),
};

export function useChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [unreadCount, setUnreadCount] = React.useState(1);

  function open() {
    setIsOpen(true);
    setUnreadCount(0);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen((prev) => {
      if (!prev) setUnreadCount(0);
      return !prev;
    });
  }

  // NOTE: Frontend-only simulation. Replace with real API call (OpenAI / n8n) later.
  function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const reply: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Thanks for your message! This is a frontend preview — once connected, I'll answer instantly using real clinic data.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
      if (!isOpen) setUnreadCount((c) => c + 1);
    }, 1600);
  }

  return {
    isOpen,
    open,
    close,
    toggle,
    messages,
    input,
    setInput,
    isTyping,
    unreadCount,
    sendMessage,
  };
}
