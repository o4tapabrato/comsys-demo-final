import Link from "next/link";
import { Linkedin, Facebook, Twitter, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="shadow">
      <div className="w-full flex justify-center flex-col" />
      <div className="w-full bg-indigo-950 flex justify-center">
        <div className="subheading text-center sm:text-start sm:min-w-[80rem] max-w-7xl py-4 sm:px-0 px-4 flex flex-wrap md:items-center md:justify-between justify-center">
          <span className="text-sm text-teal-100 sm:text-center dark:text-gray-400">
            © 2026<em> </em>
            <a href="#" className="hover:underline">
              COMSYS
            </a>
            , All rights reserved. Designed &amp; Developed by our{" "}
            <span className="text-teal-100 underline">
              <Link href="/developer" className="hover:text-teal-300">
                Creative Team
              </Link>
            </span>
            .
          </span>
          <ul className="flex gap-4 items-center mt-3 text-sm font-medium text-teal-100 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/company/comsystrust/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:underline"
              >
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook" className="hover:underline">
                <Facebook size={24} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" className="hover:underline">
                <Twitter size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://comsystrust.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="COMSYS Trust Website"
                className="hover:underline"
              >
                <Globe size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
