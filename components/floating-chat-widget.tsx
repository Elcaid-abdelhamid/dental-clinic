"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Minus, Maximize2 } from "lucide-react";
import { useChatWidget } from "@/hooks/use-chat-widget";
import { cn } from "@/lib/utils";

const quickReplies = [
  "What are your opening hours?",
  "How much is teeth whitening?",
  "I'd like to book an appointment",
];

export function FloatingChatWidget() {
  const { isOpen, toggle, close, messages, input, setInput, isTyping, unreadCount, sendMessage } = useChatWidget();
  const [expanded, setExpanded] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={cn(
              "flex flex-col overflow-hidden rounded-2xl border border-border glass-strong shadow-premium",
              expanded
                ? "h-[80vh] w-[92vw] max-w-md sm:h-[640px] sm:w-[400px]"
                : "h-[480px] w-[92vw] max-w-sm sm:w-[360px]"
            )}
            role="dialog"
            aria-label="AI Assistant chat window"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-sky-600 to-cyan-500 px-4 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <Sparkles className="h-5 w-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-sky-600 bg-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none">Brightline AI Assistant</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online now
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setExpanded((v) => !v)}
                  className="rounded-lg p-1.5 transition-colors hover:bg-white/15 focus-ring"
                  aria-label={expanded ? "Collapse chat" : "Expand chat"}
                >
                  {expanded ? <Minus className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={close}
                  className="rounded-lg p-1.5 transition-colors hover:bg-white/15 focus-ring"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-background/60 px-4 py-4">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
                      msg.role === "user"
                        ? "rounded-br-sm bg-gradient-to-r from-sky-600 to-cyan-500 text-white"
                        : "rounded-bl-sm border border-border bg-card text-card-foreground"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-3 shadow-sm">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-typing"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {messages.length === 1 && !isTyping && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickReplies.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10 focus-ring"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border bg-card p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                aria-label="Chat message"
                className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm focus-ring placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-premium transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 focus-ring"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="bg-card px-4 pb-3 text-center text-[10px] text-muted-foreground">
              AI preview only — not yet connected to live clinic data.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-cyan-500 text-white shadow-premium transition-transform hover:scale-105 focus-ring"
      >
        <span className="absolute inset-0 rounded-full bg-cyan-400/50 animate-pulse-ring" aria-hidden="true" />
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} transition={{ duration: 0.18 }}>
              <MessageCircle className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>

        <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background bg-emerald-400" aria-hidden="true" />

        {!isOpen && unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white ring-2 ring-background"
          >
            {unreadCount}
          </motion.span>
        )}
      </button>
    </div>
  );
}
