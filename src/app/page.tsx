import {Metadata} from "next";
import Layout1 from "./(layout-1)/layout";
import MarketOnePageView from "../pages-sections/market-1/page-view";
import ShopLayout1 from "../components/layouts/shop-layout-1";

export const metadata: Metadata = {
    title: "HannieJewelry - Cửa hàng trang sức cao cấp",
    description: `HannieJewelry - Cửa hàng trang sức cao cấp trực tuyến. Khám phá bộ sưu tập nhẫn, dây chuyền, bông tai và trang sức đẹp nhất`,
    authors: [{name: "HannieJewelry", url: "http://hanniejewelry.vn/"}],
    keywords: ["trang sức", "nhẫn", "dây chuyền", "bông tai", "HannieJewelry", "jewelry", "e-commerce"]
};

export default function IndexPage() {
    return (
        <ShopLayout1>
            <MarketOnePageView/>
        </ShopLayout1>
    );
}
