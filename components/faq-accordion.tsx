"use client";

import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { FAQItem } from "@/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items, showCategories = false }: { items: FAQItem[]; showCategories?: boolean }) {
  const categories = showCategories ? ["All", ...Array.from(new Set(items.map((i) => i.category)))] : [];
  const [active, setActive] = React.useState("All");

  const filtered = showCategories && active !== "All" ? items.filter((i) => i.category === active) : items;

  return (
    <div>
      {showCategories && (
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-ring",
                active === cat
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
      <Accordion type="single" collapsible className="space-y-3">
        {filtered.map((item, i) => (
          <AccordionItem key={item.question} value={`item-${i}`}>
            <AccordionTrigger>
              <span className="flex items-center gap-3">
                {showCategories && (
                  <Badge variant="outline" className="hidden sm:inline-flex">
                    {item.category}
                  </Badge>
                )}
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
