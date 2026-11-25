import Carousel from "@/components/Carousel";

const tracks = [
  {
    id: 37,
    title: "Computational Biology and Bioinformatics",
    desc: "Biomedical Engineering; Network Medicine; Biology-inspired Computational Methods; Medical and Biological Databases; Biomedical Signal Processing; Medical Informatics; Biomedical Image Processing; Bioinformatics; Computational Biology; Systems Biology; Genomics and Proteomics; Personalized and Precision Medicine; Medical Data Analytics; AI and Machine Learning in Healthcare; Clinical Decision Support Systems; Healthcare Information Systems; Wearable and Implantable Medical Devices; Biosensors and Biomedical Instrumentation; Telemedicine and Digital Health; Computational Drug Discovery",
  },
  {
    id: 38,
    title: "AI, ML, and Data Science",
    desc: "Neural Networks; Deep Learning; Machine Learning Algorithms; Reinforcement Learning; Explainable Artificial Intelligence (XAI); Data Mining; Big Data Analytics; Statistical Inference; Predictive Analytics; Data Visualization; Signal Processing; Digital Signal Processing; Pattern Recognition; Computer Vision; 2D/3D Object Detection and Recognition; Image and Video Analysis; Image Segmentation and Classification; Image, Video Coding and Compression; Audio and Acoustic Processing; Speech and Natural Language Processing; Multimodal Learning; Human-Computer Interaction; Intelligent Systems; Generative AI and Foundation Models",
  },
  {
    id: 39,
    title: "Communication Networks, Security, Cloud computing and IoT",
    desc: "4G/5G/6G and Next-Generation Network Evolutions; Mobile and Wireless Communication; Optical Communication Systems; RF and Microwave Communications; Antennas and Propagation; Internet of Things (IoT) Architectures and Protocols; Industrial IoT; QoS Management in IoT Networks; Cloud and IoT Networks; Cloud Computing; Edge and Fog Computing; Distributed Computing; Network Virtualization; Software-Defined Networking (SDN); Cryptology and Applied Cryptography; Blockchain Technology and Applications; Security Protocols; Network and Information Security; Cybersecurity; Privacy-Preserving Systems; Viruses, Malware and Threat Detection; Intrusion Detection and Prevention Systems; Computer-Aided Design and Verification; Electronic Design Automation (EDA); VLSI Design and Testing; Embedded Systems and Applications; System-on-Chip (SoC) Design; FPGA-Based System Design; Low-Power and High-Performance Circuit Design",
  },
];

const importantDates = [
  { event: "Paper Submission Opens", date: "-" },
  { event: "Submission Deadline", date: "February 01, 2027" },
  { event: "Acceptance Notification", date: "March 15, 2027" },
  { event: "Registration Due", date: "March 30, 2027" },
  { event: "Camera-ready Submission", date: "-" },
  { event: "Main Session", date: "June 28-30, 2027" },
];

export default function HomePage() {
  return (
    <main>
      {/* Conference Title & Organizers Section */}
      <section className="bg-[#011523] h-full sm:h-auto pb-6">
        <h1 className="subheading text-center max-w-7xl mx-auto lg:mb-8 text-2xl font-bold leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white px-4">
          <span>
            8<sup>th</sup>{" "}
          </span>
          International Conference on Frontiers in Computing and Systems
        </h1>
        <div className="flex flex-col max-w-7xl mx-auto justify-center text-center my-2 px-4">
          <p className="subheading text-amber-400 text-lg font-bold lg:text-2xl dark:text-gray-200 my-4 sm:my-6">
            Organized By
          </p>
          <p className="heading text-md sm:text-lg font-normal text-gray-200 lg:text-2xl dark:text-gray-200 px-0 sm:px-36">
            The Alan Turing Institute, London, UK
          </p>
          <p className="text-md sm:text-lg font-normal text-gray-200 lg:text-2xl dark:text-gray-200 sm:px-36">
            &amp;
          </p>
          <p className="heading text-md sm:text-lg font-normal text-gray-200 lg:text-2xl dark:text-gray-200">
            COMSYS Educational Trust, Kolkata, India
          </p>
        </div>
      </section>

      {/* About The Conference */}
      <div className="m-auto flex justify-center flex-col my-8 p-4 text-justify max-w-7xl">
        <h2 className="subheading text-center mb-4 sm:text-4xl text-2xl text-cyan-600 font-semibold">
          About The Conference
        </h2>
        <p className="paragraph sm:text-lg">
          The 8th International Conference on Frontiers in Computing and Systems
          (COMSYS-2027) will be held from June 28–30, 2027, organized by The
          Alan Turing Institute, London, UK ( UK&apos;s Best Institute for AI )
          and Linacre College, Oxford, UK , and COMSYS Educational Trust,
          Kolkata, India. Hosted at The Alan Turing Institute, London, UK and
          Linacre College, Oxford, UK aims to bring together researchers,
          academicians, and industry professionals to discuss the latest
          advancements in Computational Biology and Bioinformatics , AI, ML, and
          Data Science and Communication Networks, Security, Cloud computing and
          IoT . This conference serves as a vibrant platform for
          interdisciplinary collaboration, providing opportunities for
          high-quality research presentations, networking with global experts,
          and discussions on innovative solutions to contemporary challenges in
          computing and system sciences. By uniting academia and industry,
          COMSYS-2027 fosters cutting-edge research and meaningful
          collaborations to drive technological advancements. We invite
          researchers, professionals, and students to participate in COMSYS-2027
          and contribute to the future of computing and system sciences.
        </p>
      </div>

      {/* Image Carousel */}
      <Carousel />

      {/* Latest News */}
      <div className="p-4 bg-sky-500">
        <div className="paragraph p-4 m-auto flex justify-center flex-col max-w-7xl">
          <h2 className="subheading text-center mb-4 sm:text-4xl text-2xl text-teal-100 font-semibold">
            Latest News
          </h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-4 justify-center p-4">
            <li>
              <div className="sm:w-96 w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-indigo-950 dark:border-gray-700">
                <a href="#">
                  <h5 className="sm:text-xl text-lg font-semibold text-gray-900 dark:text-white">
                    Conference Registration Details COMSYS-2027
                  </h5>
                </a>
                <div className="flex justify-between">
                  <p className="mb-2 text-xs text-gray-700 dark:text-gray-400">
                    Posted On 2026-11-14
                  </p>
                  <span className="animate-bounce mt-3 font-normal text-sm text-teal-50 border py-1 px-2 bg-green-500 rounded-2xl">
                    Active
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://aws.comsysconf.org/uploads/Comsys_Registration_2027_ca0944755c.pdf"
                  className="group mr-5 inline-flex items-center px-6 py-2 text-sm font-medium text-center bg-gray-900 text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 group-hover:translate-x-3 transition delay-75 duration-300 ease-in-out"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Tracks */}
      <div className="m-auto flex justify-center flex-col max-w-7xl my-8 p-4">
        <h2 className="subheading text-center mb-6 sm:text-4xl text-2xl text-cyan-600 font-semibold">
          Tracks
        </h2>
        <ul className="flex flex-wrap gap-4 justify-center">
          {tracks.map((track) => (
            <li key={track.id} className="card pb-2 mx-2">
              <p className="paragraph card-title">{track.title}</p>
              <p className="paragraph small-desc text-justify">{track.desc}</p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Important Dates */}
      <div className="my-4 m-auto flex justify-center flex-col max-w-7xl px-4">
        <h2 className="subheading text-center mb-6 sm:text-4xl text-2xl text-cyan-600 font-semibold">
          Important Dates
        </h2>
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b subheading bg-sky-400 text-xl">
              <tr className="border-b transition-colors hover:bg-sky-400 hover:text-white data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium w-2/4 text-white">
                  Events
                </th>
                <th className="h-12 px-4 align-middle font-medium w-2/4 text-right text-white">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0 paragraph text-sm sm:text-lg">
              {importantDates.map((item) => (
                <tr
                  key={item.event}
                  className="border-b transition-colors hover:bg-sky-400 hover:text-white data-[state=selected]:bg-muted even:bg-slate-100"
                >
                  <td className="p-4 align-middle font-medium">{item.event}</td>
                  <td className="p-4 align-middle text-right">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
