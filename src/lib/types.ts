import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { StaticImageData } from "next/image";

export type NavlistType = {
  name: string;
  path: string;
  children?: NavlistType[];
};

export interface ServiceCard {
  id: number;
  title: string;
  icon: OverridableComponent<SvgIconTypeMap>;
}

export interface ProductList {
  id: number;
  name: string;
  type: string;
  img: StaticImageData;
}
