import { Metadata } from "next";
// PAGE VIEW COMPONENT
import { ProductSearchPageView } from "pages-sections/product-details/page-view";

export const metadata: Metadata = {
  title: "Tất cả sản phẩm - HannieJewelry",
  description: `Khám phá tất cả sản phẩm trang sức cao cấp tại HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["tất cả sản phẩm", "all products", "trang sức", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function AllProductsSearch() {
  return <ProductSearchPageView slug="all" />;
}
