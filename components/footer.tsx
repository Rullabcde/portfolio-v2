import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Rullabcde",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-choirul-rasyid/",
    icon: FaLinkedin,
  },
  {
    name: "Medium",
    href: "https://medium.com/@muhammadchoirulrasyid",
    icon: FaMedium,
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Muhammad Choirul Rasyid
        </p>

        <div className="flex items-center gap-1">
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} (opens in a new tab)`}
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
