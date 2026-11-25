import Image from "next/image";
import { committeeSections } from "@/data/committee";

export const metadata = {
  title: "Committee Members 2027 | COMSYS",
};

export default function CommitteePage() {
  return (
    <main className="flex min-h-screen max-w-7xl mx-auto flex-col items-center justify-between py-2 md:py-12 px-7 mb-12">
      <h1 className="subheading text-center mb-4 sm:text-4xl text-2xl text-cyan-600 font-semibold">
        Committee Members 2027
      </h1>

      <div className="flex flex-col gap-x-5 gap-y-12 items-center justify-center flex-wrap text-justify max-w-7xl">
        {committeeSections.map((section) => (
          <div
            key={section.title}
            className="flex flex-col items-center justify-center text-center gap-5"
          >
            <h2 className="heading text-2xl md:text-3xl font-semibold py-2 md:pt-10">
              {section.title}
            </h2>
            <div className="flex items-center justify-center flex-wrap gap-y-16 gap-5">
              {section.members.map((member, idx) => (
                <div
                  key={`${section.title}-${idx}`}
                  className="relative mb-56 flex max-w-xs flex-col items-center hover:shadow-lg hover:shadow-blue-400"
                >
                  <img
                    src={member.image}
                    height={300}
                    width={300}
                    alt={member.name}
                    className="h-72 w-72 object-cover bg-slate-200"
                    loading="lazy"
                  />
                  <div className="paragraph absolute top-64 flex w-64 flex-col items-center bg-white px-2 py-4 shadow-lg h-auto max-h-72">
                    <p className="paragraph text-center text-2xl">
                      {member.name}
                    </p>
                    <p className="pt-1 text-center font-bold text-blue-900">
                      {member.role}
                    </p>
                    <p className="paragraph line-clamp-3 pt-3 text-center text-sm italic text-gray-800">
                      {member.affiliation}
                    </p>
                    <div className="flex items-center gap-5 fill-gray-800 pt-6">
                      {member.profileUrl && (
                        <a
                          className="flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={member.profileUrl}
                        >
                          <Image
                            alt="Profile"
                            width={32}
                            height={32}
                            src="/logos/userIcon.svg"
                          />
                        </a>
                      )}
                      {member.linkedinUrl !== null && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={member.linkedinUrl || "#"}
                        >
                          <Image
                            alt="LinkedIn"
                            width={32}
                            height={32}
                            src="/logos/linkedIn.svg"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
