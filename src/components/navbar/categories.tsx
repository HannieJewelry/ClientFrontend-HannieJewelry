import ChevronRight from "@mui/icons-material/ChevronRight";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";
import CategoryMenu from "components/categories/category-menu";
// CUSTOM ICON COMPONENT
import Category from "icons/Category";
// STYLED COMPONENT
import { CategoryMenuButton } from "./styles";
import {useTranslation} from "react-i18next";

export default function Categories() {
    const { t } = useTranslation();
  return (
    <CategoryMenu
      render={(handler) => (
        <CategoryMenuButton variant="text" onClick={(e) => handler(e)}>
          <div className="prefix">
            <Category fontSize="small" />
            <Paragraph fontWeight={600}>
              {t("COLLECTIONS")}
            </Paragraph>
          </div>

          <ChevronRight className="dropdown-icon" fontSize="small" />
        </CategoryMenuButton>
      )}
    />
  );
}
