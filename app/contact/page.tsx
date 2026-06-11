"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/card";
import { Mail } from "lucide-react";

const socials = [
  {
    icon: <Mail size={20} />,
    href: "mailto:support@jupitragency.com",
    label: "Email",
    handle: "Support at Jupitr Agency",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    href: "https://github.com/DabPatoel-YK/myporto",
    label: "Github",
    handle: "DabPatoel",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 h-screen overflow-hidden">
      <Navbar />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
  <div className="grid w-full grid-cols-2 gap-8 mx-auto max-w-3xl">
    {socials.map((s) => (
      <Card key={s.label}>
        <Link
          href={s.href}
          target="_blank"
          className="relative flex flex-col items-center justify-center gap-6 p-8 duration-700 group h-80"
        >
          <span
            className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
          <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
            {s.icon}
          </span>
          <div className="z-10 flex flex-col items-center">
            <span className="text-xl font-medium text-zinc-200 group-hover:text-white font-display">
              {s.handle}
            </span>
            <span className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200">
              {s.label}
            </span>
          </div>
        </Link>
      </Card>
    ))}
  </div>
</div>
    </div>
  );
}