import { NavlistType, ProductList, ServiceCard } from "./types";

export const navlist: NavlistType[] = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    path: "/service",
    children: [
      { name: "Super Market", path: "/supermarket" },
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

import tomato from "@/assets/image/supermarket/products/tomato.jpeg";
import apple from "@/assets/image/supermarket/products/apple.jpg";
import bannana from "@/assets/image/supermarket/products/bannana.jpeg";
import bread from "@/assets/image/supermarket/products/bread.jpg";
import potato from "@/assets/image/supermarket/products/potaot.jpeg";
import watermelon from "@/assets/image/supermarket/products/watermelon.jpeg";

export type category = "All" | "Fruits" | "Vegetables" | "Breads";

export const productButtons: category[] = [
  "All",
  "Fruits",
  "Vegetables",
  "Breads",
];

export const productList: ProductList[] = [
  { id: 1, name: "Tomato", type: "Vegetables", img: tomato },
  { id: 2, name: "Apple", type: "Fruits", img: apple },
  { id: 3, name: "Banana", type: "Fruits", img: bannana },
  { id: 4, name: "Bread", type: "Breads", img: bread },
  { id: 5, name: "Potato", type: "Vegetables", img: potato },
  { id: 6, name: "Watermelon", type: "Fruits", img: watermelon },
  { id: 7, name: "Tomato", type: "Vegetables", img: tomato },
  { id: 8, name: "Bread", type: "Breads", img: bread },
  { id: 9, name: "Potato", type: "Vegetables", img: potato },
  { id: 10, name: "Watermelon", type: "Fruits", img: watermelon },
  { id: 11, name: "Tomato", type: "Vegetables", img: tomato },
  { id: 12, name: "Tomato", type: "Vegetables", img: tomato },
  { id: 13, name: "Tomato", type: "Vegetables", img: tomato },
];

import blub from "@/assets/image/electrical/bulb.jpeg";
import cables from "@/assets/image/electrical/cables.jpg";
import fans from "@/assets/image/electrical/fans.jpeg";
import steel from "@/assets/image/electrical/steel.jpeg";
import switchImg from "@/assets/image/electrical/switch.jpeg";
import product1 from "@/assets/image/electrical/products/1.jpg";
import product2 from "@/assets/image/electrical/products/2.jpg";
import product3 from "@/assets/image/electrical/products/3.jpg";
import product4 from "@/assets/image/electrical/products/4.jpg";
import product5 from "@/assets/image/electrical/products/5.jpg";
import product6 from "@/assets/image/electrical/products/6.jpg";
import product7 from "@/assets/image/electrical/products/7.jpg";
import product8 from "@/assets/image/electrical/products/8.jpg";
import product9 from "@/assets/image/electrical/products/9.jpg";
import product10 from "@/assets/image/electrical/products/10.jpg";

export const electricalCategoryImages = [
  blub,
  cables,
  fans,
  steel,
  switchImg,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];
