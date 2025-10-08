import Link from "next/link";
import Avatar from "@mui/material/Avatar";
// i18n
import { useTranslation } from "react-i18next";
// STYLED COMPONENT
import { SubCategoryListItem } from "../styles";
// DATA TYPES
import { NavLink } from "../types";

// ==============================================================
type Props = { item: NavLink };
// ==============================================================

export default function CategoryItem({ item }: Props) {
  const { t } = useTranslation();
  const { title, url = "/", Icon, img } = item || {};

  return (
    <Link href={url}>
      <SubCategoryListItem>
        {img ? (
          <Avatar alt={title} src={img} sx={{ backgroundColor: "grey.100", borderRadius: 1 }} />
        ) : null}

        {Icon ? <Icon sx={{ fontSize: 16 }} /> : null}
        {t(title)}
      </SubCategoryListItem>
    </Link>
  );
}
