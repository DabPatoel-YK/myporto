interface ExperienceCardStaticProps {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location?: string;
  body: string;
}

export default function ExperienceCardStatic({
  company,
  role,
  startDate,
  endDate,
  location,
  body,
}: ExperienceCardStaticProps) {
  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4 mb-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white">{role}</h3>
        <p className="text-zinc-400">{company}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-zinc-500">
            {startDate} – {endDate ?? "Present"}
          </span>
          {location && (
            <span className="text-sm text-zinc-500">{location}</span>
          )}
        </div>
      </div>
      <div className="w-full h-px bg-zinc-800" />
      <div
        className="text-zinc-400 prose prose-sm prose-invert prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-zinc-500"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}