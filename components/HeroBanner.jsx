import Image from "next/image";
import Meteors from "./Meteors";

export default function HeroBanner() {
  return (
    <div>
      {/* Desktop Hero Banner */}
      <div className="hidden lg:block">
        <div className="gap-x-8 sm:flex-row bg-[#011523] relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
          <Meteors number={40} />
          <Image
            alt="logo1"
            width={150}
            height={50}
            className="sm:w-48 w-32 relative z-10"
            src="/logos/COMSYS-logo-2.png"
            priority
          />
          <div className="flex flex-col justify-center text-center my-8 sm:my-12 relative z-10">
            <div className="flex justify-center items-center">
              <h1 className="font-display text-center tracking-[-0.02em] drop-shadow-sm heading pr-5 text-4xl sm:text-8xl text-teal-400 font-extrabold">
                COMSYS 2027
              </h1>
            </div>
            <p className="heading sm:text-2xl text-sm text-white sm:my-2 my-1">
              June 28 - 30 , 2027{" "}
              <br />
              {" "}VENUE : The Alan Turing Institute, London, UK and Linacre College, Oxford, UK
            </p>
          </div>
          <Image
            alt="Institute Logo"
            width={500}
            height={500}
            className="sm:w-52 w-36 relative z-10"
            src="/logos/Alen1_51bde660b9.jpeg"
            priority
          />
        </div>
      </div>

      {/* Mobile / Tablet Hero Banner */}
      <div className="block lg:hidden">
        <div className="gap-4 pb-6 pt-2 flex-col bg-[#011523] relative flex w-full items-center justify-center overflow-hidden md:shadow-xl">
          <Meteors number={40} />
          <div className="flex flex-row justify-center items-center w-full gap-x-16 relative z-10">
            <Image
              alt="logo1"
              width={500}
              height={500}
              className="w-28 h-fit"
              src="/logos/COMSYS-logo-2.png"
              priority
            />
            <Image
              alt="Institute Logo"
              width={500}
              height={500}
              className="w-32 h-fit"
              src="/logos/Alen1_51bde660b9.jpeg"
              priority
            />
          </div>
          <div className="flex flex-col justify-center text-center w-full relative z-10 px-4">
            <div className="flex justify-center">
              <h1 className="font-display text-center tracking-[-0.02em] drop-shadow-sm heading text-5xl text-teal-400 font-extrabold">
                COMSYS 2027
              </h1>
            </div>
            <p className="heading sm:text-xl text-base text-white sm:my-2 my-4">
              June 28 - 30 , 2027{" "}
              <br />
              {" "}VENUE : The Alan Turing Institute, London, UK and Linacre College, Oxford, UK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
