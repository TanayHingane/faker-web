import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Package,
  Copy,
  Check,
  User,
  Phone,
  MapPin,
  CreditCard,
  Banknote,
  GraduationCap,
  ShoppingBag,
  Hash,
  Sparkles,
  Layers,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "india-faker — Realistic Indian test data for developers" },
      {
        name: "description",
        content:
          "Stop tweaking Faker.js for Indian data. india-faker generates realistic Indian names, phone numbers, UPI IDs, IFSC codes, addresses and more. npm install india-faker.",
      },
      { property: "og:title", content: "india-faker — Realistic Indian test data" },
      {
        property: "og:description",
        content: "No more John Doe in your Mumbai app. Indian names, UPI, IFSC, PIN codes, Aadhaar-like IDs.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const installCmd = "npm install india-faker";

const heroTokens = [
  [{ t: "import", c: "k" as const }, { t: " { " }, { t: "person", c: "f" as const }, { t: ", " }, { t: "upi", c: "f" as const }, { t: ", " }, { t: "bank", c: "f" as const }, { t: " } " }, { t: "from", c: "k" as const }, { t: " " }, { t: "\"india-faker\"", c: "s" as const }, { t: ";" }],
  [],
  [{ t: "person", c: "f" as const }, { t: "();" }],
  [{ t: "// { name: 'Aarav Sharma', phone: '+91 9876543210',", c: "c" as const }],
  [{ t: "//   email: 'aarav.sharma@gmail.com', region: 'north' }", c: "c" as const }],
  [],
  [{ t: "upi", c: "f" as const }, { t: "(" }, { t: "\"Priya Patel\"", c: "s" as const }, { t: ");  " }, { t: "// \"priya.patel@okaxis\"", c: "c" as const }],
  [{ t: "bank", c: "f" as const }, { t: "().ifsc;     " }, { t: "// \"HDFC0001234\"", c: "c" as const }],
];

const features = [
  { icon: User, title: "Regional names", desc: "North, South, West, East Indian names with matching surnames." },
  { icon: Phone, title: "Indian phone numbers", desc: "Proper +91 9XXXXXXXXX format. No more 555-area codes." },
  { icon: MapPin, title: "Addresses & PINs", desc: "15 states, 150+ cities, correct PIN codes per region." },
  { icon: CreditCard, title: "UPI IDs", desc: "All major handles — @ybl, @okaxis, @paytm, @ibl." },
  { icon: Banknote, title: "IFSC & banking", desc: "15 major banks with correct IFSC prefixes and accounts." },
  { icon: Hash, title: "Aadhaar & PAN", desc: "Format-correct fake IDs. Intentionally invalid — safe for tests." },
  { icon: GraduationCap, title: "Student profiles", desc: "Roll numbers, colleges, CGPA, branches, year." },
  { icon: ShoppingBag, title: "E-commerce data", desc: "Orders, products, Indian payment methods, statuses." },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <ProblemSection />
      <FeaturesGrid />
      <ApiShowcase />
      <BulkSeed />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-saffron to-india-green text-base">
            🇮🇳
          </span>
          india-faker
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="/api" className="transition-colors hover:text-foreground">API</a>
          <a href="https://www.npmjs.com/package/india-faker" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">npm</a>
          <a
            href="https://github.com/TanayHingane/india-faker"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-foreground transition-colors hover:bg-accent"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

function InstallBar() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-border bg-code-bg px-4 py-3 font-mono text-sm shadow-lg shadow-black/30">
      <span className="text-saffron">$</span>
      <span className="text-foreground">{installCmd}</span>
      <button onClick={copy} className="ml-2 text-muted-foreground transition-colors hover:text-foreground" aria-label="Copy install command">
        {copied ? <Check className="h-4 w-4 text-india-green" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="https://www.npmjs.com/package/india-faker"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Package className="h-3.5 w-3.5 text-saffron" />
            v1.0.3 on npm
            <ArrowRight className="h-3 w-3" />
          </a>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Realistic Indian <br className="hidden sm:block" />
            test data for <span className="text-gradient">developers</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Stop tweaking Faker.js for Indian data. Generate authentic names, phone numbers, UPI IDs, IFSC codes, addresses, and more — in one line.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <InstallBar />
            <a
              href="https://github.com/TanayHingane/india-faker"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" /> View source
            </a>
          </div>
          <p className="mt-5 font-mono text-xs text-muted-foreground">
            No more <span className="line-through text-foreground/60">John Doe</span> in your Mumbai app.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <CodeBlock code="" tokens={heroTokens} filename="example.js" />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="border-y border-border/60 bg-card/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-saffron">The problem</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Western fake data breaks Indian apps.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Most libraries spit out "John Doe", "(555) 123-4567", and ZIP codes that
            don't exist here. Your demo for a Bengaluru fintech ends up looking like a
            spam form. india-faker generates data that actually matches Indian formats —
            so your tests, seeds and demos feel real.
          </p>
        </div>
        <div className="grid gap-3 self-center sm:grid-cols-2">
          <ComparisonCard bad title="Faker.js default" lines={["John Doe", "(555) 123-4567", "12345", "john@example.com"]} />
          <ComparisonCard title="india-faker" lines={["Aarav Sharma", "+91 9876543210", "411038", "aarav.sharma@gmail.com"]} />
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({ title, lines, bad }: { title: string; lines: string[]; bad?: boolean }) {
  return (
    <div
      className={`rounded-xl border bg-code-bg p-4 ${
        bad ? "border-destructive/30" : "border-india-green/30"
      }`}
    >
      <p className={`mb-3 font-mono text-xs ${bad ? "text-destructive" : "text-india-green"}`}>
        {bad ? "× " : "✓ "}
        {title}
      </p>
      <ul className="space-y-1.5 font-mono text-sm">
        {lines.map((l) => (
          <li key={l} className={bad ? "text-muted-foreground line-through decoration-destructive/40" : "text-foreground"}>
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeaturesGrid() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-saffron">Features</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need for Indian data
        </h2>
        <p className="mt-4 text-muted-foreground">
          A focused API that covers the formats Indian developers actually use.
        </p>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="group relative bg-card p-6 transition-colors hover:bg-accent">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-saffron/10 text-saffron ring-1 ring-saffron/20">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const personExample = [
  [{ t: "import", c: "k" as const }, { t: " { " }, { t: "person", c: "f" as const }, { t: " } " }, { t: "from", c: "k" as const }, { t: " " }, { t: "\"india-faker\"", c: "s" as const }, { t: ";" }],
  [],
  [{ t: "person", c: "f" as const }, { t: "({ " }, { t: "region", c: "p" as const }, { t: ": " }, { t: "\"south\"", c: "s" as const }, { t: " });" }],
  [{ t: "// {", c: "c" as const }],
  [{ t: "//   name: 'Karthik Reddy',", c: "c" as const }],
  [{ t: "//   gender: 'male',", c: "c" as const }],
  [{ t: "//   phone: '+91 9123456780',", c: "c" as const }],
  [{ t: "//   email: 'karthik.reddy@gmail.com',", c: "c" as const }],
  [{ t: "//   region: 'south'", c: "c" as const }],
  [{ t: "// }", c: "c" as const }],
];

const bankExample = [
  [{ t: "import", c: "k" as const }, { t: " { " }, { t: "bank", c: "f" as const }, { t: ", " }, { t: "upi", c: "f" as const }, { t: ", " }, { t: "aadhaar", c: "f" as const }, { t: " } " }, { t: "from", c: "k" as const }, { t: " " }, { t: "\"india-faker\"", c: "s" as const }, { t: ";" }],
  [],
  [{ t: "bank", c: "f" as const }, { t: "();" }],
  [{ t: "// {", c: "c" as const }],
  [{ t: "//   bankName: 'State Bank of India',", c: "c" as const }],
  [{ t: "//   accountNumber: 'XXXXXXX1234',", c: "c" as const }],
  [{ t: "//   ifsc: 'SBIN0012345',", c: "c" as const }],
  [{ t: "//   accountType: 'Savings'", c: "c" as const }],
  [{ t: "// }", c: "c" as const }],
  [],
  [{ t: "upi", c: "f" as const }, { t: "();     " }, { t: "// \"neha.gupta@okaxis\"", c: "c" as const }],
  [{ t: "aadhaar", c: "f" as const }, { t: "(); " }, { t: "// \"4821 7643 9210\"", c: "c" as const }],
];

function ApiShowcase() {
  return (
    <section id="api" className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-saffron">API</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Designed to feel like Faker — but Indian.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4 text-saffron" />
              <span className="font-mono">person(options?)</span>
            </div>
            <CodeBlock code="" tokens={personExample} filename="people.js" />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Banknote className="h-4 w-4 text-saffron" />
              <span className="font-mono">bank(), upi(), aadhaar()</span>
            </div>
            <CodeBlock code="" tokens={bankExample} filename="banking.js" />
          </div>
        </div>
      </div>
    </section>
  );
}

const bulkExample = [
  [{ t: "import", c: "k" as const }, { t: " { " }, { t: "generate", c: "f" as const }, { t: ", " }, { t: "setSeed", c: "f" as const }, { t: " } " }, { t: "from", c: "k" as const }, { t: " " }, { t: "\"india-faker\"", c: "s" as const }, { t: ";" }],
  [],
  [{ t: "setSeed", c: "f" as const }, { t: "(" }, { t: "123", c: "n" as const }, { t: "); " }, { t: "// reproducible data for tests", c: "c" as const }],
  [],
  [{ t: "const", c: "k" as const }, { t: " users " }, { t: "=", c: "o" as const }, { t: " " }, { t: "generate", c: "f" as const }, { t: "(" }, { t: "\"person\"", c: "s" as const }, { t: ", " }, { t: "100", c: "n" as const }, { t: ");" }],
  [{ t: "const", c: "k" as const }, { t: " orders " }, { t: "=", c: "o" as const }, { t: " " }, { t: "generate", c: "f" as const }, { t: "(" }, { t: "\"order\"", c: "s" as const }, { t: ", " }, { t: "500", c: "n" as const }, { t: ");" }],
  [{ t: "const", c: "k" as const }, { t: " kids   " }, { t: "=", c: "o" as const }, { t: " " }, { t: "generate", c: "f" as const }, { t: "(" }, { t: "\"student\"", c: "s" as const }, { t: ", " }, { t: "50", c: "n" as const }, { t: ", { " }, { t: "region", c: "p" as const }, { t: ": " }, { t: "\"west\"", c: "s" as const }, { t: " });" }],
];

function BulkSeed() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-saffron">Bulk & deterministic</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Seed once. Generate thousands.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Need 10,000 users for a load test? One call. Need the same dataset every time
            for snapshot tests? Drop in a seed. Need a regional split? Pass an option.
          </p>
          <ul className="mt-8 space-y-4">
            <Bullet icon={Layers} title="Bulk generate any type" desc="generate('person', 1000) — one call, any volume." />
            <Bullet icon={Sparkles} title="Reproducible with setSeed()" desc="Stable data for snapshot tests and demos." />
            <Bullet icon={Zap} title="Zero dependencies" desc="ESM-first, works on Node 14+, fast." />
          </ul>
        </div>
        <CodeBlock code="" tokens={bulkExample} filename="seed.js" />
      </div>
    </section>
  );
}

function Bullet({ icon: Icon, title, desc }: { icon: typeof Sparkles; title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-india-green/10 text-india-green ring-1 ring-india-green/20">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </li>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-background px-8 py-16 text-center">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-saffron/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Build for India. Test with India.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Install in one command. Drop into any Node, Next.js, or Vite project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <InstallBar />
            <a
              href="https://www.npmjs.com/package/india-faker"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Package className="h-4 w-4" /> View on npm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono">
          MIT © <a className="hover:text-foreground" href="https://github.com/TanayHingane" target="_blank" rel="noreferrer">Tanay Hingane</a>
        </p>
        <div className="flex items-center gap-5">
          <a href="https://www.npmjs.com/package/india-faker" target="_blank" rel="noreferrer" className="hover:text-foreground">npm</a>
          <a href="https://github.com/TanayHingane/india-faker" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="https://github.com/TanayHingane/india-faker/issues" target="_blank" rel="noreferrer" className="hover:text-foreground">Issues</a>
        </div>
      </div>
    </footer>
  );
}
