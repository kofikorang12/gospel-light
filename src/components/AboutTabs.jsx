// import { useState } from "react";

// const AboutTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     {
//       title: "Vision & Mission",
//       content: "Our vision is to spread faith and love...",
//     },
//     {
//       title: "Core Values",
//       content: "We uphold integrity, compassion, and service...",
//     },
//     {
//       title: "Brief History",
//       content: "Founded in 1980, our church has grown...",
//     },
//     {
//       title: "General Administration",
//       content: "Our administration consists of...",
//     },
//     {
//       title: "Board & Committees",
//       content: "Our board and committees guide our...",
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* Tabs Header */}
//       <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mb-6">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`text-lg font-semibold py-2 px-4 rounded-t-lg transition duration-300 ease-in-out focus:outline-none ${
//               activeTab === index
//                 ? "bg-blue-700 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
//             }`}
//           >
//             {tab.title}
//           </button>
//         ))}
//       </div>

//       {/* Tabs Content */}
//       <div className="p-6 bg-white shadow-lg rounded-b-lg transition-opacity duration-500 ease-in-out">
//         <p className="text-gray-700 text-base">{tabs[activeTab].content}</p>
//       </div>
//     </div>
//   );
// };

// export default AboutTabs;

import { useState } from "react";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Vision & Mission",
      content: (
        <p className="text-justify">
          <strong>Vision</strong> <br />
          To be a Christ-centered, self-sustaining, and growing Church through
          transforming leaders and trusting that all sinners shall be saved.
          <br />
          <br />
          <strong>Mission</strong>
          <ul>
            <li>
              To maintain the centrality of the Word of God and, through the
              enablement of the Holy Spirit, pursue a holistic ministry so as to
              bring all creation to glorify God.
            </li>
            <li>
              To nurture and equip leaders with a distinctive Christian
              worldview to transform communities and organizations in which they
              serve.
            </li>
          </ul>
        </p>
      ),
    },
    {
      title: "Core Values",
      content: (
        <p className="font-medium">
          Integrity and honesty; uprightness in the characteristic of being fair
          ,truthfulness and sincerity,
        </p>
      ),
    },
    {
      title: "Brief History",
      content: (
        <p className="text-justify font-medium ">
          {" "}
          Gospel Light Mission was established on the 6th of April 1987, under
          the leadership of the late Apostle Emmanuel Okang with six (6) Elders
          who served as Board of Directors during the registration of the
          church. These Elders include Pastor Emmanuel Okang, Bro. Daniel Tetteh
          Sowah, Bro. Evans Marquaye, Elder Samuel Tawiah Laryea, Mad. Grace
          Korkor Mensah and Mad. Patience Akweley Adjetey. The founders hope to
          provide a chance for everyone to be taught the truth from God’s Word,
          and serve as multi-national, inter- tribal and multi cultural church;
          a house of true worship and Christian religious activities. In 1987
          Gospel Light Mission was Gazette with the Licence for the celebration
          of Marriage – public/Christian worship. The church started with about
          83 members comprising 22 men, 36 women and 25 children.
        </p>
      ),
    },
    {
      title: "General Administration",
      content: (
        <p className="text-justify font-medium ">
          {" "}
          The general administration of the church consists of a dedicated team
          that works diligently to ensure our community thrives. At the heart of
          this team is our Church Administrator, who oversees daily operations
          and coordinates efforts among staff and volunteers. Supporting them is
          our Church Secretary, who manages correspondence and maintains vital
          records, ensuring smooth communication throughout the congregation.
          The Financial Secretary plays a crucial role in tracking contributions
          and preparing financial reports, while our Treasurer oversees all
          financial transactions and develops strategies for long-term
          sustainability. Together, this team embodies a spirit of collaboration
          and commitment, allowing us to focus on our mission and make a
          meaningful impact in the lives of those we serve. Their unwavering
          dedication fosters an environment where everyone feels valued and
          connected, helping us grow as a Christ-centered community.
        </p>
      ),
    },
    {
      title: "Board & Committees",
      content: (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-4 py-2 text-left">Committee</th>
                <th className="px-4 py-2 text-left">Chairperson</th>
                <th className="px-4 py-2 text-left">Members</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">Personnel Committee</td>
                <td className="px-4 py-2">Eld. William Osekre</td>
                <td className="px-4 py-2">
                  <ol>
                    <li>Std. Cynthia Asantewaa</li>
                    <li>Std. Elizabeth Kotey</li>
                  </ol>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">Welfare Committee</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">
                  <ol>
                    <li></li>
                    <li></li>
                  </ol>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">Education Committee</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">
                  <ol>
                    <li></li>
                    <li></li>
                  </ol>
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2">Budget and Financial Committee</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">
                  <ol>
                    <li></li>
                    <li></li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-lg font-semibold py-2 px-4 rounded-t-lg transition duration-300 ease-in-out focus:outline-none ${
              activeTab === index
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-6 bg-white shadow-lg rounded-b-lg transition-opacity duration-500 ease-in-out">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default AboutTabs;
