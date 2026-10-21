"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn, pressable } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const iconSwap = "absolute inset-0 transition-[opacity,scale] duration-200 motion-reduce:transition-none";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Button variant="outline" size="lg" onClick={copy} className={pressable}>
      {email}
      <span className="relative size-4 text-muted-foreground" aria-hidden>
        <Copy className={cn(iconSwap, copied ? "scale-50 opacity-0" : "scale-100 opacity-100")} />
        <Check className={cn(iconSwap, "text-primary", copied ? "scale-100 opacity-100" : "scale-50 opacity-0")} />
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied" : ""}
      </span>
    </Button>
  );
}
