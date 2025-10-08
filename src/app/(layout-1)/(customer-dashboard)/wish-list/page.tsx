import { Metadata } from "next";
import { WishListPageView } from "pages-sections/customer-dashboard/wish-list";
// API FUNCTIONS
import { getWishListProducts } from "utils/__api__/wish-list";

export const metadata: Metadata = {
  title: "Danh sách yêu thích - HannieJewelry",
  description: `Quản lý danh sách trang sức yêu thích trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["yêu thích", "wish list", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function WishList(props) {
  const searchParams = await props.searchParams;
  const { products, totalProducts } = await getWishListProducts(searchParams.page);
  return <WishListPageView products={products} totalProducts={totalProducts} />;
}
