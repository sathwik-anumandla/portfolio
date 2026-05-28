import Link from "next/link";

export default function Hero() {
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
    <section className="card-lg flex justify-between items-start">
        <div>
            <p className="text-(--color-tertiary)">
                Hyderabad, India.
            </p>
        </div>
      <div className="flex flex-wrap gap-2 my-auto">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Blog" ? "" : "_blank"}
            rel={link.label === "Blog" ? "" : "noopener"}
            className="text-(--color-tertiary) hover:text-(--color-primary) flex items-center gap-1"
          >
            <i className={link.icon}></i>
            
          </a>
        ))}
      </div>
    </section>
  );
}