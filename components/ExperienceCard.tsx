"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location?: string;
  body: string;
  index: number;
  total: number;
}

export default function ExperienceCard({
  company,
  role,
  startDate,
  endDate,
  location,
  body,
  index,
  total,
}: ExperienceCardProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const top = `calc(${index * 40}px + 6rem)`;

  return (
    <div ref={container} className="h-screen flex items-start justify-center sticky" style={{ top }}>
      <motion.div
        style={{ scale }}
        className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-4"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">{role}</h3>
            <p className="text-zinc-400 mt-1">{company}</p>
          </div>
          <div className="text-right text-sm text-zinc-500">
            <p>{startDate} – {endDate ?? "Present"}</p>
            {location && <p>{location}</p>}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800" />

        {/* Body */}
        <div
  className="text-zinc-400 prose prose-sm prose-invert prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-zinc-500"
  dangerouslySetInnerHTML={{ __html: body }}
/>
      </motion.div>
    </div>
  );
}