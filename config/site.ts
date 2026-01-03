
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Software Documents",
  description: "Software Requirement Specification and other documents.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "SRS",
      href: "/srs",
    },
    {
      label: "SDD",
      href: "/sdd",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "SRS",
      href: "/srs",
    },
    {
      label: "SDD",
      href: "/sdd",
    },
  ],
  links: {
    github: "https://github.com/TranHoan-backend-dev/Write-Software-Documents",
    // twitter: "https://twitter.com",
    // docs: "/srs",
    // discord: "https://discord.com",
    // sponsor: "https://patreon.com",
  },
};
