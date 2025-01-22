import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SettingsIcon from '@mui/icons-material/Settings';


function Travel3() {
  return (



< div className="grid md:mt-1 bg-red-400 py-8    h-[600px] mb-8 gap-5 justify-center px-14 max-w-[1500px] mx-auto grid-cols-4">
      {Card.map((item) => (
      <div key={item.title} className=" w-[300px]  ">
          <div className="max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow bg-blue-100 dark:bg-gray-800 dark:border-gray-700 group">
          <item.icon
            fontSize="large"
            className=" transition-colors duration-300"
            sx={{ color: "green" }}
          />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
           {item.title}
          </h5>
          <p className="mb-3 font-normal  text-gray-500 dark:text-gray-400">
          {item.description}
          </p>
          <p className="inline-flex font-medium items-center ">
            {item.link}
          </p>
        </div>
      </div>
      ))}
    </div>

  );
}

export default Travel3;

const Card = [
  {
    icon: LanguageIcon,
    title: "Need a help in Claim?",
    description:
      "Go to this step-by-step guideline process on how to certify for your weekly benefits:",
    link: "See our guideline",
  },
  {
    icon: ApartmentIcon ,
    title: "Need a help in Claim?",
    description:
      "Go to this step-by-step guideline process on how to certify for your weekly benefits:",
    link: "See our guideline",
  },
  {
    icon: PersonAddAlt1Icon  ,
      title: "Need a help in Claim?",
    description:
      "Go to this step-by-step guideline process on how to certify for your weekly benefits:",
    link: "See our guideline",
  },
  {
    icon: SettingsIcon ,
    title: "Need a help in Claim?",
    description:
      "Go to this step-by-step guideline process on how to certify for your weekly benefits:",
    link: "See our guideline",
  },
  {
    icon: ApartmentIcon ,
    title: "Need a help in Claim?",
    description:
      "Go to this step-by-step guideline process on how to certify for your weekly benefits:",
    link: "See our guideline",
  },
  {
    icon: PersonAddAlt1Icon ,
    title: "Need a help in Claim?",
    description:
      "Go to this step-by-step guideline process on how to certify for your weekly benefits:",
    link: "See our guideline",
  },
  {
    icon: ApartmentIcon ,
    title: "Need a help in Claim?",
    description:
      "Go to this step-by-step guideline process on how to certify for your weekly benefits:",
    link: "See our guideline",
  },
  {
    icon: PersonAddAlt1Icon ,
    title: "Need a help in Claim?",
    description:
      "Go to this step-by-step guideline process on how to certify for your weekly benefits:",
    link: "See our guideline",
  },

];
