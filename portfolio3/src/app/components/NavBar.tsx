"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faDev,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faHome,
    url: "/",
    alt: "Home",
    key: "faHome",
  },
  {
    icon: faEnvelope,
    url: "mailto: hello@beaucoburn.com",
    alt: "Email",
    key: "faEnvelope",
  },
  {
    icon: faGithub,
    url: "https://github.com/beaucoburn",
    alt: "Github",
    key: "faGithub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/beau-coburn/",
    alt: "LinkedIn",
    key: "faLinkedin",
  },
  {
    icon: faDev,
    url: "https://dev.to/beaucoburn",
    alt: "Dev.to",
    key: "faDev",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/13156654/beau-coburn",
    alt: "Stack Overflow",
    key: "faStackOverflow",
  },
  {
    icon: faTwitter,
    url: "https://www.twitter.com/BeauCoburn/",
    alt: "Twitter",
    key: "faTwitter",
  },
];

export default function NavBar() {
  const socialList = socials.map((socials) => {
    return (
      <a href={socials.url} key={socials.key} alt={socials.alt}>
        <FontAwesomeIcon
          icon={socials.icon}
          size="2xl"
          style={{ padding: "0.25em" }}
        />
      </a>
    );
  });

  const handleClick = (anchor: any) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>{socialList}</NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#about-section"
              alt="About"
              onClick={handleClick}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#contactme-section"
              alt="Contact Me"
              onClick={handleClick}
            >
              Contact Me
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
