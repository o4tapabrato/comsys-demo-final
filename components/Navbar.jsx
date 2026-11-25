"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  LayoutGrid,
  Info,
  Images,
  Plane,
  Mountain,
  Calendar,
  User,
  Newspaper,
  Users,
  Contact,
  Pin,
  Megaphone,
  ShieldCheck,
  BookDown,
  SquareArrowOutUpRight,
} from "lucide-react";

const overviewLinks = [
  {
    name: "About Us",
    href: "/about",
    description: "About Us page provides information about the conference",
  },
  {
    name: "How To Reach",
    href: "/how-to-reach",
    description: "Page provides information about how to reach the conference",
  },
  {
    name: "Gallery",
    href: "/gallery",
    description: "Gallery page shows images of the conference",
  },
  {
    name: "Distinguished Speaker",
    href: "/distinguished-speaker",
    description:
      "Distinguished Speaker page provides information about the speakers",
  },
  {
    name: "Places to Visit",
    href: "/places-to-visit",
    description:
      "Page provides information about the places to visit near the venue",
  },
  {
    name: "Important Dates",
    href: "/important-dates",
    description:
      "Important Dates page provides information about the important dates",
  },
  {
    name: "Accepted Papers",
    href: "/accepted-papers",
    description:
      "Accepted Papers page provides information about the papers that are accepted",
  },
  {
    name: "Committee Members",
    href: "/committee",
    description:
      "Committee Members page provides information about the committee members",
  },
  {
    name: "Technical Committee Members",
    href: "/technical-committee",
    description:
      "Technical Committee Members page provides information about the technical committee",
  },
  {
    name: "Call for Advertisement",
    href: "/call-for-advertisement",
    description:
      "Call for Advertisement page provides information about the advertisement",
  },
  {
    name: "Call for Special Session",
    href: "/call-for-special-session",
    description:
      "Call for Special Session page provides information about the special session",
  },
  {
    name: "Publication",
    href: "/publication",
    description: "Publication page provides information about the publication",
  },
  {
    name: "COMSYS Special Session",
    href: "/special-session",
    description:
      "COMSYS Special Session page provides information about the special session",
  },
];

const previousConferences = [
  "COMSYS 2026",
  "COMSYS 2025",
  "COMSYS 2024",
  "COMSYS 2023",
  "COMSYS 2022",
  "COMSYS 2021",
  "COMSYS 2020",
];

const mobileLinks = [
  { name: "Home", href: "/", icon: LayoutGrid },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Gallery", href: "/gallery", icon: Images },
  { name: "How To Reach", href: "/how-to-reach", icon: Plane },
  { name: "Places to Visit", href: "/places-to-visit", icon: Mountain },
  { name: "Important Dates", href: "/important-dates", icon: Calendar },
  {
    name: "Distinguished Speakers",
    href: "/distinguished-speaker",
    icon: User,
  },
  { name: "Accepted Papers", href: "/accepted-papers", icon: Newspaper },
  { name: "Committee Members", href: "/committee", icon: Users },
  {
    name: "Technical Committee Members",
    href: "/technical-committee",
    icon: Contact,
  },
  { name: "COMSYS Special Session", href: "/special-session", icon: Pin },
  { name: "Call for Paper", href: "/call-for-paper", icon: Megaphone },
  {
    name: "Call for Special Session",
    href: "/call-for-special-session",
    icon: Pin,
  },
  { name: "Registration", href: "/registration", icon: ShieldCheck },
  { name: "Publication", href: "/publication", icon: BookDown },
  {
    name: "Call for Advertisement",
    href: "/call-for-advertisement",
    icon: Megaphone,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePrevOpen, setMobilePrevOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "overview" | "previous" | null
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="backdrop-blur-md bg-slate-100 sticky md:hidden text-white top-0 z-[5011] w-full shadow-md shadow-white">
        <div className="subheading items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-2 md:py-5 md:block">
            <Link href="/">
              <Image
                alt="COMSYS Logo"
                width={500}
                height={500}
                className="drop-shadow-cyanGlow w-48 h-auto"
                src="/logos/COMSYS-LOGO2.png"
                priority
              />
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                aria-label="Toggle Menu"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="text-blue-500 outline-none p-2 rounded-md w-10 flex items-center justify-center"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div
            className={`flex-1 justify-self-center pb-7 transition-all duration-300 bg-indigo-950 opacity-95 pt-5 w-full left-0 z-50 absolute mt-6 md:block md:pb-0 md:mt-0 border min-h-screen overflow-y-auto ${
              mobileOpen ? "top-12" : "-top-[60rem]"
            }`}
          >
            <ul className="justify-center pb-5 pl-6 items-center space-y-3">
              {mobileLinks.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <li
                    key={item.href}
                    className={`${
                      isActive
                        ? "border-2 border-dotted border-slate-300 px-2 py-1 w-5/6 font-semibold"
                        : ""
                    } text-lg font-bold flex gap-2 items-center`}
                  >
                    <Icon size={24} className="shrink-0" />
                    <Link href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              {/* Previous Conferences in Mobile Menu (non-clickable items with hover) */}
              <li className="w-5/6">
                <button
                  type="button"
                  onClick={() => setMobilePrevOpen((prev) => !prev)}
                  className="items-center justify-start whitespace-nowrap rounded-md transition-colors h-10 py-2 bg-transparent border-none text-lg font-bold flex gap-2 px-0 text-white"
                  aria-expanded={mobilePrevOpen}
                >
                  <SquareArrowOutUpRight size={24} />
                  <span>Previous Conferences</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobilePrevOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobilePrevOpen && (
                  <ul className="mt-2 ml-6 space-y-1 border-l border-slate-500 pl-4">
                    {previousConferences.map((conf) => (
                      <li
                        key={conf}
                        className="text-base font-medium text-slate-200 py-1.5 px-2 rounded-md cursor-default transition-colors hover:bg-indigo-800 hover:text-teal-300 select-none"
                      >
                        {conf}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav
        ref={navRef}
        className="bg-white z-[5011] sticky text-white top-0 w-full opacity-100 border-b shadow-md shadow-slate-400"
      >
        <div className="subheading hidden md:flex w-full max-w-7xl mx-auto items-center justify-between text-black font-semibold px-4 sm:px-2 lg:px-2 py-2">
          <Link href="/">
            <Image
              alt="Comsys Logo"
              width={1000}
              height={1000}
              className="w-60 h-auto"
              src="/logos/COMSYS-LOGO2.png"
              priority
            />
          </Link>

          <div className="flex items-center gap-x-6 xl:gap-x-6 text-2xl xl:text-xl font-bold">
            <nav
              aria-label="Main"
              className="relative z-10 flex max-w-max flex-1 items-center justify-center"
            >
              <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                <li>
                  <Link
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium transition-colors hover:bg-slate-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none cursor-pointer"
                  >
                    Home
                  </Link>
                </li>

                {/* Overview Dropdown */}
                <li
                  className="relative"
                  onMouseEnter={() => setOpenDropdown("overview")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === "overview" ? null : "overview",
                      )
                    }
                    aria-expanded={openDropdown === "overview"}
                    data-state={openDropdown === "overview" ? "open" : "closed"}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors hover:bg-slate-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none cursor-pointer text-lg"
                  >
                    Overview{" "}
                    <ChevronDown
                      className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${
                        openDropdown === "overview" ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {openDropdown === "overview" && (
                    <div className="absolute left-0 top-full pt-1.5 z-50">
                      <div className="w-[640px] rounded-md border bg-white p-4 text-slate-900 shadow-lg grid grid-cols-2 gap-1.5">
                        {overviewLinks.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className={`block select-none rounded-md px-3 py-2.5 transition-colors hover:bg-slate-100 ${
                                isActive ? "bg-slate-100" : ""
                              }`}
                            >
                              {/* Bold title, always black */}
                              <div className="text-base font-semibold leading-tight text-black">
                                {item.name}
                              </div>

                              {/* Light description, clamped to 2 lines */}
                              <p className="mt-1 text-sm font-medium leading-snug text-slate-500 line-clamp-2">
                                {item.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>

                {/* Previous Conferences Dropdown (Non-clickable options with hover effect) */}
                <li
                  className="relative"
                  onMouseEnter={() => setOpenDropdown("previous")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === "previous" ? null : "previous",
                      )
                    }
                    aria-expanded={openDropdown === "previous"}
                    data-state={openDropdown === "previous" ? "open" : "closed"}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors hover:bg-slate-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none cursor-pointer text-lg"
                  >
                    Previous Conferences{" "}
                    <ChevronDown
                      className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${
                        openDropdown === "previous" ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {openDropdown === "previous" && (
                    <div className="absolute left-0 top-full pt-1.5 z-50">
                      <div className="w-56 rounded-md border bg-white p-2 text-slate-900 shadow-lg flex flex-col gap-1">
                        {previousConferences.map((conf) => (
                          <div
                            key={conf}
                            role="menuitem"
                            aria-disabled="true"
                            className="block select-none rounded-md px-3 py-2 text-sm font-medium text-slate-800 cursor-default transition-colors hover:bg-slate-200 hover:text-cyan-700"
                          >
                            {conf}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                <li className="text-lg">
                  <Link
                    href="/call-for-paper"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium transition-colors hover:bg-slate-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none cursor-pointer"
                  >
                    Call For Paper
                  </Link>
                </li>

                <li className="text-lg">
                  <Link
                    href="/registration"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium transition-colors hover:bg-slate-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none cursor-pointer"
                  >
                    Registration
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}
