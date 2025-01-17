import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

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
