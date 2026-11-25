export const metadata = {
  title: "Important Dates | COMSYS",
};

const importantDates = [
  { event: "Paper Submission Opens", date: "-" },
  { event: "Submission Deadline", date: "February 01, 2027" },
  { event: "Acceptance Notification", date: "March 15, 2027" },
  { event: "Registration Due", date: "March 30, 2027" },
  { event: "Camera-ready Submission", date: "-" },
  { event: "Main Session", date: "June 28-30, 2027" },
];

export default function ImportantDatesPage() {
  return (
    <div className="my-8">
      <div className="my-4 m-auto flex justify-center flex-col max-w-7xl px-4">
        <h2 className="subheading text-center mb-6 sm:text-4xl text-2xl text-cyan-600 font-semibold">
          Important Dates
        </h2>
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b subheading bg-sky-400 text-xl">
              <tr className="border-b transition-colors hover:bg-sky-400 hover:text-white data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 w-2/4 text-white">
                  Events
                </th>
                <th className="h-12 px-4 align-middle font-medium [&:has([role=checkbox])]:pr-0 w-2/4 text-right text-white">
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
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                    {item.event}
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}