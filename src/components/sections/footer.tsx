import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/sathwik-anumandla",
      icon: "fab fa-github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/sathwik-anumandla-531078325",
      icon: "fab fa-square-linkedin",
    },
    {
      label: "Email",
      href: "mailto:sathwikanumandla@hotmail.com",
      icon: "fas fa-envelope",
    },
  ];

  return (
    <footer className="card-lg flex justify-between items-start">
      <div>
        <p className="text-(--color-tertiary)">Hyderabad, India.</p>
      </div>
      <div className="flex flex-wrap gap-2 my-auto">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-(--color-tertiary) hover:text-(--color-primary) flex items-center gap-1"
          >
            <i className={link.icon} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </footer>
  );
}
