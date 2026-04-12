import { useState } from "react";

const CONTACT_LINKS = [
  {
    label: "brandon.spencer@gmail.com",
    href: "mailto:brandon.spencer@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  {
    label: "859.797.6417",
    href: "tel:+18597976417",
    icon: "fa-solid fa-phone",
  },
  {
    label: "GitHub",
    href: "https://github.com/doubldragon",
    icon: "fa-brands fa-github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/brandonrspencer",
    icon: "fa-brands fa-linkedin",
    external: true,
  },
];

const Bio = () => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="relative flex justify-center">
      {/* Wrapper: positions image + panel */}
      <div className="relative flex flex-col items-center md:flex-row md:items-center">
        {/* Profile image — hidden on failure */}
        {!imgFailed && (
          <img
            src="/profile.jpg"
            alt="Brandon Spencer"
            onError={() => setImgFailed(true)}
            className={[
              "w-32 h-32 rounded-full object-cover border-4 z-10",
              // Mobile: centered above panel, bottom half overlaps
              "-mb-16",
              // Desktop: left edge of panel, vertically centered
              "md:mb-0 md:-mr-16 md:shrink-0",
            ].join(" ")}
            style={{ borderColor: "var(--color-surface)" }}
          />
        )}

        {/* Panel */}
        <div
          className={[
            "rounded-xl border bg-theme-surface z-0",
            "w-full max-w-xl",
            // Mobile: top padding clears the overlapping image
            !imgFailed ? "pt-20 px-6 pb-6" : "p-6",
            // Desktop: left padding clears the overlapping image
            !imgFailed ? "md:pt-6 md:pl-20" : "md:p-6",
          ].join(" ")}
          style={{ borderColor: "var(--color-accent)" }}
        >
          <p className="text-theme-muted leading-relaxed mb-4">
            Full stack web developer based in Lexington, KY with a primary focus
            on frontend experiences and a growing skillset in backend
            engineering.
          </p>

          <ul className="flex flex-wrap gap-4 text-sm text-theme-muted">
            {CONTACT_LINKS.map((link) => (
              <li key={link.href} className="flex items-center gap-1.5">
                <i className={link.icon} aria-hidden="true" />
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:text-theme-text transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bio;
