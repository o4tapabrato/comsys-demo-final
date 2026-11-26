import React from "react";

const REGISTRATION_FEES = [
  {
    category: "Students (Single Paper)",
    india: "INR 10,000",
    uk: "GBP 400",
    outsideIndia: "US $550",
    spanAll: false,
  },
  {
    category: "Academia (Single Paper)",
    india: "INR 12,000",
    uk: "GBP 450",
    outsideIndia: "US $600",
    spanAll: false,
  },
  {
    category: "Industry (Single Paper)",
    india: "INR 14,000",
    uk: "GBP 500",
    outsideIndia: "US $650",
    spanAll: false,
  },
  {
    category: "Additional one paper for the same registered author",
    combinedNote: "Extra 50% of the amount of the base category",
    spanAll: true,
  },
  {
    category:
      "Student/Listener (no paper presentation and without conference kit)",
    combinedNote: "50% of the amount of the base category",
    spanAll: true,
  },
];

const BANK_DETAILS = [
  { label: "Account Name", value: "COMSYS Educational Trust" },
  { label: "Bank Name", value: "State Bank of India" },
  { label: "Branch Name", value: "Jadavpur University" },
  { label: "Account Number", value: "41078443652" },
  { label: "IFSC Code", value: "SBIN0000093" },
  { label: "MICR Code", value: "700002048" },
  { label: "SWIFT Code", value: "SBININBB328" },
  { label: "Purpose", value: "COMSYS 2027" },
];

export default function ComsysRegistration2027() {
  return (
    <section className="flex flex-col items-center p-4 mb-4 max-w-7xl mx-auto gap-8">
      <h1 className="text-center text-2xl sm:text-4xl text-cyan-600 font-semibold my-4">
        Conference Registration Details COMSYS-2027
      </h1>

      {/* Registration Fees */}
      <div className="flex flex-col w-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Registration Fees
        </h2>
        <div className="overflow-x-auto text-sm md:text-base">
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 font-semibold">
                  Category
                </th>
                <th className="border border-gray-300 p-3 font-semibold">
                  Fees (participants from India)*
                </th>
                <th className="border border-gray-300 p-3 font-semibold">
                  Fees (participants from the United Kingdom)
                </th>
                <th className="border border-gray-300 p-3 font-semibold">
                  Fees (participants outside India)
                </th>
              </tr>
            </thead>
            <tbody>
              {REGISTRATION_FEES.map((row) => (
                <tr key={row.category}>
                  <td className="border border-gray-300 p-3">
                    {row.category}
                  </td>
                  {row.spanAll ? (
                    <td className="border border-gray-300 p-3" colSpan={3}>
                      {row.combinedNote}
                    </td>
                  ) : (
                    <>
                      <td className="border border-gray-300 p-3">{row.india}</td>
                      <td className="border border-gray-300 p-3">{row.uk}</td>
                      <td className="border border-gray-300 p-3">
                        {row.outsideIndia}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-sm text-gray-700 italic">
            * For online presenters only. For physical presentations in the UK,
            registration fees should be paid in GBP or USD, as mentioned in the
            third or fourth column.
          </p>
        </div>
      </div>

      {/* Registration Guidelines */}
      <div className="flex flex-col w-full max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Registration Guidelines
        </h2>
        <p className="text-base mb-4 text-gray-800">
          Authors need to transfer the registration fee to the bank account below
          and scan the payment acknowledgement.{" "}
          <strong>
            On the scanned payment acknowledgement, authors must write their Paper
            ID and Paper Title.
          </strong>
        </p>

        <div className="bg-slate-50 overflow-hidden shadow rounded-lg border border-gray-200">
          <div className="p-4 sm:px-6 bg-sky-600">
            <h3 className="text-lg sm:text-xl leading-6 font-bold text-white">
              Payment Procedure
            </h3>
            <p className="mt-1 text-sm sm:text-base font-medium text-sky-100">
              DD/NEFT transfers may be made using the following details (verify
              COMSYS-2027 bank details before transferring):
            </p>
          </div>
          <div className="border-t border-gray-200 divide-y divide-gray-200">
            {BANK_DETAILS.map(({ label, value }) => (
              <div
                key={label}
                className="py-3 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-2"
              >
                <span className="text-sm font-medium text-gray-600">
                  {label}
                </span>
                <span className="text-sm font-semibold text-gray-900 sm:col-span-2 bg-gray-200 px-2 py-1 rounded w-fit">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inclusions */}
      <div className="flex flex-col w-full max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Conference Registration Includes
        </h2>
        <p className="text-base text-gray-800">
          Access to all COMSYS-2027 technical sessions, plenaries, tutorials, and
          exhibitions (update conference dates once confirmed).
        </p>
      </div>
    </section>
  );
}