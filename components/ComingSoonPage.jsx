import Image from "next/image";

export default function ComingSoonPage({ title }) {
  return (
    <div className="flex flex-col items-center px-5 py-8 mb-4 text-justify min-h-[55vh]">
      <h1 className="subheading sm:text-4xl text-2xl text-cyan-600 font-semibold mb-8 text-center">
        {title}
      </h1>
      <div className="w-full flex justify-center items-center">
        <Image
          alt="Coming Soon"
          width={1000}
          height={1000}
          className="bg-zinc-100 w-80 h-auto rounded-lg"
          src="/logos/comming-soon.svg"
          priority
        />
      </div>
    </div>
  );
}
