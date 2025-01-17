import { NavlistType, ServiceCard } from "./types";

export const navlist: NavlistType[] = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    path: "/service",
    children: [
      { name: "Super Market", path: "/super-market" },
      { name: "Hotel", path: "/hotel" },
      { name: "Construction", path: "/construction" },
      { name: "Travels", path: "/travels" },
      { name: "Electrical", path: "/electrical" },
      { name: "Saloon", path: "/saloon" },
      { name: "Mobile", path: "/mobile" },
      { name: "Home Appliances", path: "/home-appliances" },
    ],
  },
  {
    name: "About Us",
    path: "/about",
  },
  { name: "Contact Us", path: "/contact" },
];

import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
export const serviceCardContent: ServiceCard[] = [
  {
    id: 1,
    title: "Saloon",
    icon: BookmarkAddedOutlinedIcon,
  },
  {
    id: 2,
    title: "Hotel",
    icon: BookmarkAddedOutlinedIcon,
  },
  {
    id: 3,
    title: "SuperMarket",
    icon: BookmarkAddedOutlinedIcon,
  },
  {
    id: 4,
    title: "Travels",
    icon: BookmarkAddedOutlinedIcon,
  },
  {
    id: 5,
    title: "Travels",
    icon: BookmarkAddedOutlinedIcon,
  },
  {
    id: 6,
    title: "Travels",
    icon: BookmarkAddedOutlinedIcon,
  },
];

import image1 from "@/assets/carousel/file_1.webp";
import image2 from "@/assets/carousel/file_2.webp";
import image3 from "@/assets/carousel/file_3.webp";
import image4 from "@/assets/carousel/file_4.webp";

export const carousel = [image1, image2, image3, image4, image1];
