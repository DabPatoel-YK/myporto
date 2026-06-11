"use client";

import Navbar from "@/components/Navbar";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceCardStatic from "@/components/ExperienceCardStatic";
import { allExperiences } from "contentlayer/generated";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExperiencePage() {
  const [isBottom, setIsBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const experiences = allExperiences.sort((a, b) => {
    const aNum = parseInt(a._raw.sourceFileName.split("-")[0]);
    const bNum = parseInt(b._raw.sourceFileName.split("-")[0]);
    return bNum - aNum;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsBottom(scrollTop >= docHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />
      <div className="w-screen h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <main className="px-6 md:px-16 max-w-7xl mx-auto relative">
        <h1 className="text-4xl font-semibold text-white text-center pt-16 pb-8">
          Experience
        </h1>

        {/* Scroll indicator — desktop only */}
        {!isMobile && (
          <button
            onClick={handleClick}
            className="fixed top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 duration-500 z-50"
            style={{ right: "calc((100vw - 80rem) / 2 - 3rem)" }}
          >
            <span className="text-xs tracking-widest [writing-mode:vertical-rl] rotate-180">
              {isBottom ? "Scroll to show less" : "Scroll to show more"}
            </span>
            {isBottom ? (
              <ChevronUp className="animate-bounce" size={16} />
            ) : (
              <ChevronDown className="animate-bounce" size={16} />
            )}
          </button>
        )}

        {/* Cards */}
        <div className="flex flex-col">
          {experiences.map((job, index) =>
            isMobile ? (
              <ExperienceCardStatic
                key={job._id}
                company={job.company}
                role={job.role}
                startDate={job.startDate}
                endDate={job.endDate}
                location={job.location}
                body={job.body.html}
              />
            ) : (
              <ExperienceCard
                key={job._id}
                company={job.company}
                role={job.role}
                startDate={job.startDate}
                endDate={job.endDate}
                location={job.location}
                body={job.body.html}
                index={index}
                total={experiences.length}
              />
            )
          )}
        </div>
      </main>

      <div className="w-screen h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </div>
  );
}