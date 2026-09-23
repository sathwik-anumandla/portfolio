import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";

export default function Footer() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/sathwik-anumandla",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/sathwik-anumandla-531078325",
      icon: LinkedinIcon,
    },
    {
      label: "Email",
      href: "mailto:sathwikanumandla@hotmail.com",
      icon: MailIcon,
    },
  ];

  return (
    <footer className="card-lg flex justify-between items-start">
      <div>
        <p className="text-(--color-tertiary)">Hyderabad, India.</p>
      </div>
      <div className="flex flex-wrap gap-3 my-auto">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-(--color-tertiary) hover:text-(--color-primary) transition-colors flex items-center"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
