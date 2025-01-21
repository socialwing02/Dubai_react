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

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ConstructionIcon from "@mui/icons-material/Construction";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import ChairIcon from "@mui/icons-material/Chair";

export const serviceCardContent: ServiceCard[] = [
  {
    id: 1,
    title: "Super market",
    icon: ShoppingCartIcon,
  },
  {
    id: 2,
    title: "Hotel",
    icon: RestaurantMenuIcon,
  },
  {
    id: 3,
    title: "Construction",
    icon: ConstructionIcon,
  },
  {
    id: 4,
    title: "Travels",
    icon: AirportShuttleIcon,
  },
  {
    id: 5,
    title: "Electrical",
    icon: ElectricalServicesIcon,
  },
  {
    id: 6,
    title: "Saloon",
    icon: ContentCutIcon,
  },
  {
    id: 7,
    title: "Mobile",
    icon: MobileFriendlyIcon,
  },
  {
    id: 8,
    title: "Home Appliances",
    icon: ChairIcon,
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

import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import GrassIcon from "@mui/icons-material/Grass";

export const supermarketIconleftContent = [
  {
    id: 1,
    title: "Ecology food",
    icon: RamenDiningOutlined,
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    icon: GrassIcon,
  },
  {
    id: 3,
    title: "Livestock Products",
    icon: InventoryOutlined,
  },
];

export const supermarketIconRightContent = [
  {
    id: 1,
    title: "Organic Groceries",
    icon: BackpackOutlinedIcon,
  },
  {
    id: 2,
    title: "Herbs & Spices",
    icon: AddTaskIcon,
  },
  {
    id: 3,
    title: "Baked Goods",
    icon: AirlineStopsIcon,
  },
];

import samsung from "@/assets/image/mobile/logo/samsung.png";
import iphone from "@/assets/image/mobile/logo/iphone.png";
import nokia from "@/assets/image/mobile/logo/nokia.png";
import realme from "@/assets/image/mobile/logo/realme.png";
import redmi from "@/assets/image/mobile/logo/redmi.png";
import { InventoryOutlined, RamenDiningOutlined } from "@mui/icons-material";

export const mobileLogos = [samsung, iphone, nokia, realme, redmi];

export const chooseUsContent = [
  {
    title: "Exceptional Shopping Experience",
    content:
      "Explore a well-stocked supermarket offering everything from fresh produce and groceries to household essentials, ensuring a convenient and satisfying shopping trip.",
  },
  {
    title: "Luxury Beauty and Grooming Services",
    content:
      "Treat yourself to premium salon services, including hairstyling, facials, and grooming, designed to enhance your beauty and confidence.",
  },
  {
    title: "Comprehensive Travel Solutions",
    content:
      "Plan your perfect getaway with ease through our reliable travel services, offering ticket booking, itinerary planning, and personalized travel packages.",
  },
  {
    title: "Expert Construction and Building Services",
    content:
      "Bring your construction projects to life with our top-notch services, featuring innovative designs, durable materials, and skilled craftsmanship.",
  },
  {
    title: "Flavorful Dining Experiences",
    content:
      "Delight in a variety of delicious dishes at our restaurant, offering a menu that caters to every taste, from local favorites to international cuisine.",
  },
  {
    title: "Versatile Electrical Solutions",
    content:
      "Find high-quality electrical equipment and products, including wiring, lighting, and fixtures, to meet all your home and industrial needs.",
  },
];

export const homefeaturesList = [
  "Personalized approach to meet individual needs",
  "Transparent communication at every stage",
  "Timely project execution and delivery",
  "Focus on quality and continuous improvement",
  "Building long-term partnerships for mutual growth",
];

export const supermarketCardsContent = [
  {
    title: "Fresh Produce",
    content:
      "Farm-fresh fruits and vegetables delivered straight to your doorstep. Packed with nutrients and flavor.",
  },
  {
    title: "Pantry Essentials",
    content:
      "Stock up on everyday staples like rice, pasta, spices, and more. Always available, always fresh.",
  },
  {
    title: "Dairy & Eggs",
    content:
      "High-quality dairy products and fresh eggs from local farms, ensuring the best taste and nutrition.",
  },
  {
    title: "Special Offers",
    content:
      "Enjoy exclusive discounts and deals on your favorite grocery items. Save while you shop",
  },
];

import serviceImg1 from "@/assets/image/construction/service-img1.webp";
import serviceImg2 from "@/assets/image/construction/service-img2.webp";
import serviceImg3 from "@/assets/image/construction/service-img3.webp";

export const constructionServiceContent = [
  {
    title: "Design and Development",
    img: serviceImg1,
    content:
      "We craft innovative, tailored designs that meet the specific needs of every project. By combining creativity with functionality, we bring visions to life and ensure every detail is thoughtfully executed to deliver exceptional results.",
  },
  {
    title: "Construction Services",
    img: serviceImg2,
    content:
      "Our seamless construction solutions cover everything from planning to final execution, with a focus on quality and precision. We manage projects efficiently, ensuring they are completed safely, on time, and to the highest standards.",
  },
  {
    title: "Project Management",
    img: serviceImg3,
    content:
      "We provide expert project management to ensure smooth coordination and timely completion of projects. Our approach handles budgeting, scheduling, and oversight, ensuring a hassle-free experience for our clients from start to finish.",
  },
];
