import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SettingsIcon from "@mui/icons-material/Settings";

function TravelCards() {
  return (
    <div className="grid  gap-4 justify-center max-w-[1300px] mx-auto grid-cols-[repeat(3,330px)] my-10">
      {Card.map((item) => (
        <div
          key={item.title}
          className=" p-5 flex flex-col items-center gap-2 text-center hover:text-white bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-500  group "
        >
          <item.icon
            fontSize="large"
            className="group-hover:text-white transition-colors duration-300"
            sx={{ color: "#6083f0" }}
          />
          <h5 className=" text-2xl font-semibold tracking-tight text-gray-900  group-hover:text-white">
            {item.title}
          </h5>
          <p className=" font-normal group-hover:text-white text-gray-500 dark:text-gray-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TravelCards;

const Card = [
  {
    icon: LanguageIcon,
    title: " Adventure Tours",
    description:
      "Indulge in opulence with bespoke luxury travel services. From private jets to exclusive resorts, we provide tailored experiences that cater to your every need, ensuring a seamless and luxurious journey.",
  },
  {
    icon: ApartmentIcon,
    title: "Luxury Travel",
    description:
      "Indulge in opulence with bespoke luxury travel services. From private jets to exclusive resorts, we provide tailored experiences that cater to your every need, ensuring a seamless and luxurious journey.",
  },
  {
    icon: PersonAddAlt1Icon,
    title: "Cultural Exploration",
    description:
      "Immerse yourself in rich histories, art, and traditions through guided cultural tours. Visit museums, historical landmarks, and participate in local festivals for a deep understanding of diverse cultures.",
  },
  {
    icon: SettingsIcon,
    title: "Family Getaways",
    description:
      "Create lasting family memories with our family-friendly vacation packages. Enjoy theme parks, family resorts, beach vacations, and educational trips designed to entertain and engage every member of the family.",
  },
  {
    icon: ApartmentIcon,
    title: "Eco-Tourism",
    description:
      "Travel responsibly with eco-friendly tours that promote sustainability. Explore wildlife sanctuaries, national parks, and participate in conservation efforts while reducing your carbon footprint.",
    link: "See our guideline",
  },
  {
    icon: PersonAddAlt1Icon,
    title: " Honeymoon Packages",
    description:
      "Content: Make your honeymoon unforgettable with our romantic getaways. From exotic island retreats to serene mountain escapes, enjoy private moments and intimate experiences designed for couples.",
    link: "See our guideline",
  },
];
