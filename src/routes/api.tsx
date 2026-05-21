import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Github,
  Package,
  User,
  Phone,
  Mail,
  MapPin,
  Hash,
  CreditCard,
  AtSign,
  GraduationCap,
  ShoppingBag,
  Box,
  Banknote,
  Layers,
  Sparkles,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/api")({
  head: () => ({
    meta: [
      { title: "API Reference — india-faker" },
      {
        name: "description",
        content:
          "Full API reference for india-faker: person, phone, email, address, aadhaar, pan, upi, student, order, product, bank, generate, setSeed.",
      },
      { property: "og:title", content: "API Reference — india-faker" },
      {
        property: "og:description",
        content: "Every export, every option, with examples.",
      },
    ],
  }),
  component: ApiPage,
});

interface Section {
  id: string;
  title: string;
  signature: string;
  icon: typeof User;
  description?: string;
  warning?: string;
  options?: string;
  also?: string;
  code: string;
}

const sections: Section[] = [
  {
    id: "person",
    title: "person",
    signature: "person(options?)",
    icon: User,
    description: "Generate an Indian person profile.",
    options:
      'gender ("male" | "female"), region ("north" | "south" | "west" | "east")',
    code: `import { person } from "india-faker";

person();
// { name, gender, phone, email, region }

person({ gender: "female" });
person({ region: "south" });
person({ gender: "male", region: "west" });`,
  },
  {
    id: "phone",
    title: "phone",
    signature: "phone()",
    icon: Phone,
    description: "Indian mobile number in +91 9XXXXXXXXX format.",
    code: `import { phone } from "india-faker";

phone(); // "+91 8765432109"`,
  },
  {
    id: "email",
    title: "email",
    signature: "email(name?)",
    icon: Mail,
    description:
      "Plausible Indian email address. Pass a name to derive the local part from it.",
    code: `import { email } from "india-faker";

email();                  // "rahul.sharma@gmail.com"
email("Priya Patel");     // "priya.patel@yahoo.co.in"`,
  },
  {
    id: "address",
    title: "address",
    signature: "address(options?)",
    icon: MapPin,
    description: "Realistic Indian street address with matching state and PIN.",
    also: "city(), stateName(), cityState(), pincode(state?)",
    code: `import { address } from "india-faker";

address();
// {
//   addressLine: "Flat 302, Shree Residency",
//   city: "Pune",
//   state: "Maharashtra",
//   pincode: "411038"
// }

address({ region: "south" });
address({ state: "Gujarat" });`,
  },
  {
    id: "aadhaar",
    title: "aadhaar",
    signature: "aadhaar()",
    icon: Hash,
    description: "Fake 12-digit Aadhaar-like number.",
    warning:
      "Fake data only. Does NOT pass Verhoeff checksum. Cannot be used as a real Aadhaar number.",
    code: `import { aadhaar } from "india-faker";

aadhaar(); // "4821 7643 9210"`,
  },
  {
    id: "pan",
    title: "pan",
    signature: "pan()",
    icon: CreditCard,
    description: "Fake 10-character PAN-like identifier.",
    warning: "Fake data only. Not a real PAN number.",
    code: `import { pan } from "india-faker";

pan(); // "ABCDE1234F"`,
  },
  {
    id: "upi",
    title: "upi",
    signature: "upi(name?)",
    icon: AtSign,
    description:
      "UPI ID with realistic handles — @ybl, @okaxis, @paytm, @ibl, etc.",
    code: `import { upi } from "india-faker";

upi();              // "rahul.verma@ybl"
upi("Neha Gupta");  // "neha.gupta@okaxis"`,
  },
  {
    id: "student",
    title: "student",
    signature: "student(options?)",
    icon: GraduationCap,
    description: "Student profile with roll number, college, branch, and CGPA.",
    code: `import { student } from "india-faker";

student();
// {
//   name: "Priya Patil",
//   gender: "female",
//   rollNo: "TYCS102",
//   course: "BE",
//   branch: "Computer Science",
//   college: "Pune University",
//   year: "Year 3",
//   percentage: 78.4,
//   cgpa: 8.25
// }`,
  },
  {
    id: "order",
    title: "order",
    signature: "order()",
    icon: ShoppingBag,
    description: "E-commerce order with Indian payment methods and statuses.",
    code: `import { order } from "india-faker";

order();
// {
//   orderId: "ORD1234567890",
//   product: "Bluetooth Earbuds",
//   quantity: 1,
//   price: 1499,
//   totalAmount: 1499,
//   payment: "UPI",
//   status: "Delivered"
// }`,
  },
  {
    id: "product",
    title: "product",
    signature: "product()",
    icon: Box,
    description: "Product with SKU, price, MRP, discount, rating, and reviews.",
    code: `import { product } from "india-faker";

product();
// {
//   sku: "SKU12345678",
//   name: "Smartwatch",
//   price: 3499,
//   mrp: 4999,
//   discount: "30%",
//   inStock: true,
//   rating: 4.2,
//   reviews: 1234
// }`,
  },
  {
    id: "bank",
    title: "bank",
    signature: "bank()",
    icon: Banknote,
    description: "Bank account with correct IFSC prefix for 15 major banks.",
    also: "ifsc(bankName?)",
    code: `import { bank } from "india-faker";

bank();
// {
//   bankName: "State Bank of India",
//   accountNumber: "XXXXXXX1234",
//   ifsc: "SBIN0012345",
//   accountType: "Savings",
//   branch: "Main Branch"
// }`,
  },
  {
    id: "generate",
    title: "generate",
    signature: "generate(type, count, options?)",
    icon: Layers,
    description:
      "Bulk generate any record type. Available types: person, phone, email, address, city, state, pincode, student, order, product, bank, ifsc, aadhaar, pan, upi.",
    code: `import { generate } from "india-faker";

generate("person", 100);
generate("student", 50, { region: "south" });
generate("order", 200);`,
  },
  {
    id: "seed",
    title: "setSeed / clearSeed",
    signature: "setSeed(number) / clearSeed()",
    icon: Sparkles,
    description:
      "Reproducible data for snapshot tests or demos. Same seed → same sequence.",
    code: `import { setSeed, clearSeed, person } from "india-faker";

setSeed(123);
person(); // always returns the same result with seed 123
person(); // different, but reproducible

clearSeed(); // back to random`,
  },
];

function ApiPage() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-24">
        <div className="mb-12 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            back to home
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-saffron">
            API Reference
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Every export, every option.
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Complete reference for{" "}
            <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-sm text-saffron">
              india-faker
            </code>
            . All functions are named exports — import only what you need.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              On this page
            </p>
            <nav className="flex flex-col gap-1.5 text-sm">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-center gap-2 rounded-md px-2 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <s.icon className="h-3.5 w-3.5 opacity-60 group-hover:text-saffron group-hover:opacity-100" />
                  <span className="font-mono">{s.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          <main className="min-w-0 space-y-16">
            {sections.map((s) => (
              <ApiSection key={s.id} section={s} />
            ))}

            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
              <div className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-4 w-4" />
                <h3 className="font-semibold">Disclaimer</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                All data generated by this package is completely fake and
                intended for development and testing only. Aadhaar-like and
                PAN-like values do not pass real validation. Do not use
                generated data for fraud or identity impersonation.
              </p>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ApiSection({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-saffron/10 text-saffron ring-1 ring-saffron/20">
          <section.icon className="h-4.5 w-4.5" />
        </div>
        <h2 className="font-mono text-xl font-semibold sm:text-2xl">
          <a href={`#${section.id}`} className="hover:text-saffron">
            {section.signature}
          </a>
        </h2>
      </div>

      {section.description && (
        <p className="mt-4 text-muted-foreground">{section.description}</p>
      )}

      {section.options && (
        <p className="mt-3 text-sm">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Options:{" "}
          </span>
          <code className="text-foreground">{section.options}</code>
        </p>
      )}

      {section.warning && (
        <div className="mt-4 flex gap-3 rounded-lg border border-[oklch(0.78_0.14_85)]/30 bg-[oklch(0.78_0.14_85)]/5 p-3 text-sm">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.78_0.14_85)]" />
          <p className="text-muted-foreground">{section.warning}</p>
        </div>
      )}

      <div className="mt-5">
        <CodeBlock code={section.code} filename={`${section.id}.js`} />
      </div>

      {section.also && (
        <p className="mt-4 text-sm text-muted-foreground">
          <span className="font-mono text-xs uppercase tracking-wider">
            Also exports:{" "}
          </span>
          <code className="text-foreground">{section.also}</code>
        </p>
      )}
    </section>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-saffron to-india-green text-base">
            🇮🇳
          </span>
          india-faker
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link
            to="/api"
            className="text-foreground transition-colors"
            activeProps={{ className: "text-foreground" }}
          >
            API
          </Link>
          <a
            href="https://www.npmjs.com/package/india-faker"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            npm
          </a>
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

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono">
          MIT ©{" "}
          <a
            className="hover:text-foreground"
            href="https://github.com/TanayHingane"
            target="_blank"
            rel="noreferrer"
          >
            Tanay Hingane
          </a>
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.npmjs.com/package/india-faker"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <Package className="h-3.5 w-3.5" /> npm
          </a>
          <a
            href="https://github.com/TanayHingane/india-faker"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
