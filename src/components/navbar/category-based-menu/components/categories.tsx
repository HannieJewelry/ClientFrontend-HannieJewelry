import ChevronRight from "@mui/icons-material/ChevronRight";
// GLOBAL CUSTOM HOOK
import useSettings from "hooks/useSettings";
// i18n
import { useTranslation } from "react-i18next";
// STYLED COMPONENTS
import { CategoryList, CategoryListItem } from "../styles";

// ==============================================================
interface Props {
  categories: any[];
  openList: string;
  handleOpen: (item: string) => void;
}
// ==============================================================

export default function Categories({ categories, openList, handleOpen }: Props) {
  const { settings } = useSettings();
  const { t } = useTranslation();

  return (
    <CategoryList>
      {categories.map((item) => (
        <CategoryListItem
          key={item}
          active={openList === item ? 1 : 0}
          onMouseEnter={() => handleOpen(item)}>
          {t(item)}

          <ChevronRight
            fontSize="small"
            sx={{ transform: `rotate(${settings.direction === "rtl" ? "180deg" : "0"})` }}
          />
        </CategoryListItem>
      ))}
    </CategoryList>
  );
}
