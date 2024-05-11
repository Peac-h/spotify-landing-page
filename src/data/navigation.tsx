// NAVIGATION FOOTER
export type FooterLinksType = {
  [key: string]: { link: string; href: string }[];
};
export const FOOTER_LINKS: FooterLinksType[] = [
  {
    Company: [
      { link: "About", href: "#" },
      { link: "Jobs", href: "#" },
      { link: "For the Record", href: "#" },
    ],
  },
  {
    Communities: [
      { link: "For Artists", href: "#" },
      { link: "Developers", href: "#" },
      { link: "Advertising", href: "#" },
      { link: "Investors", href: "#" },
      { link: "Vendors", href: "#" },
    ],
  },
  {
    "Useful links": [
      { link: "Support", href: "#" },
      { link: "Free Mobile App", href: "#" },
    ],
  },
  {
    "Spotify Plans": [
      { link: "Premium Individual", href: "#" },
      { link: "Premium Duo", href: "#" },
      { link: "Premium Family", href: "#" },
      { link: "Premium Student", href: "#" },
      { link: "Spotify Free", href: "#" },
    ],
  },
];
