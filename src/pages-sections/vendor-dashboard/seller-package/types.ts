import { SvgIconProps } from "@mui/material/SvgIcon";

import type { JSX } from "react";

export interface PackageItem {
  id: number;
  price: number;
  features: string[];
  packageName: string;
  Icon: (props: SvgIconProps) => JSX.Element;
}
