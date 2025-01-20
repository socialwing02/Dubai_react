import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SettingsIcon from '@mui/icons-material/Settings';


function Travel3() {
  return (
    < div className="grid mb-8 gap-4 justify-center m-8 max-w-[1200px] mx-auto grid-cols-3">
      {Card.map((item) => (
      <div key={item.title} className=" w-[320px] ml-2  gap-9">
          <div  className="max-w-sm p-6  hover:text-white bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-500 dark:bg-gray-800 dark:border-gray-700 group">
          <item.icon
            fontSize="large"
            className="group-hover:text-white transition-colors duration-300"
            sx={{ color: "green" }}
          />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900  group-hover:text-white">
           {item.title}
          </h5>
          <p className="mb-3 font-normal group-hover:text-white text-gray-500 dark:text-gray-400">
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
  

];
