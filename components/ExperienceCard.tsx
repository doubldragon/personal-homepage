import type { Experience } from "@/data/experience";
import Pill from "@/components/Pill";

const ExperienceCard = ({ entry }: { entry: Experience }) => (
  <div
    className="flex flex-col gap-3 rounded-xl border bg-theme-surface p-5"
    style={{ borderColor: "var(--color-accent)" }}
  >
    {entry.start && (
      <div>
        <Pill>
          {entry.start} – {entry.end ?? "Present"}
        </Pill>
      </div>
    )}

    <div>
      <h3 className="font-semibold text-theme-text">{entry.title}</h3>
      <p className="text-sm text-theme-muted">{entry.company}</p>
    </div>

    <ul className="list-disc list-inside space-y-1 text-sm text-theme-muted">
      {entry.highlights.map((h) => (
        <li key={h}>{h}</li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {entry.skills.map((s) => (
        <Pill key={s}>{s}</Pill>
      ))}
    </div>
  </div>
);

export default ExperienceCard;
