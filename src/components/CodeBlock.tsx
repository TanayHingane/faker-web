import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface Token {
  t: string;
  c?: "k" | "s" | "n" | "f" | "p" | "c" | "o";
}

const colorMap: Record<string, string> = {
  k: "text-saffron",
  s: "text-india-green",
  n: "text-[oklch(0.78_0.12_220)]",
  f: "text-[oklch(0.85_0.12_300)]",
  p: "text-foreground",
  c: "text-muted-foreground italic",
  o: "text-muted-foreground",
};

export function CodeBlock({
  code,
  tokens,
  language = "js",
  filename,
}: {
  code: string;
  tokens?: Token[][];
  language?: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-code-bg shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.6_0.18_27)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_150)]" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            {filename ?? language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-india-green" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
        <code className="font-mono">
          {tokens
            ? tokens.map((line, i) => (
                <div key={i} className="whitespace-pre">
                  {line.length === 0 ? "\u00A0" : line.map((tok, j) => (
                    <span key={j} className={tok.c ? colorMap[tok.c] : "text-foreground"}>
                      {tok.t}
                    </span>
                  ))}
                </div>
              ))
            : <span className="text-foreground whitespace-pre">{code}</span>}
        </code>
      </pre>
    </div>
  );
}
