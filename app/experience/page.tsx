import Navbar from "@/components/Navbar";
import ExperienceCard from "@/components/ExperienceCard";
import { allExperiences } from "contentlayer/generated";

export default function ExperiencePage() {
  const experiences = allExperiences.sort((a, b) => {
    const aNum = parseInt(a._raw.sourceFileName.split('-')[0])
    const bNum = parseInt(b._raw.sourceFileName.split('-')[0])
    return bNum - aNum
  });

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="px-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-white text-center pt-16 pb-8">
          Experience
        </h1>
        <div className="flex flex-col">
          {experiences.map((job, index) => (
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
          ))}
        </div>
      </main>
    </div>
  );
}