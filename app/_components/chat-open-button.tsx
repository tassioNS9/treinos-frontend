"use client";

import { Sparkles } from "lucide-react";

export function ChatOpenButton() {
  return (
    <button className="rounded-full bg-primary p-4">
      <Sparkles className="size-6 text-primary-foreground" />
    </button>
  );
}
