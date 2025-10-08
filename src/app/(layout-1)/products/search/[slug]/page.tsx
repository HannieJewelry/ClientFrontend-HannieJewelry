import { Metadata } from "next";
// PAGE VIEW COMPONENT
import { ProductSearchPageView } from "pages-sections/product-details/page-view";

export const metadata: Metadata = {
  title: "Tìm kiếm sản phẩm - HannieJewelry",
  description: `Tìm kiếm và khám phá trang sức theo danh mục trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["tìm kiếm", "product search", "trang sức", "HannieJewelry", "jewelry", "e-commerce"]
};

interface ProductSearchProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductSearch({ params }: ProductSearchProps) {
  const { slug } = await params;
  return <ProductSearchPageView slug={slug} />;
}
