"use client";

import ProductCard1 from "components/product-cards/product-card-1";
import { SectionCreator } from "components/section-header";
import SwiperWrapper from "components/carousel/SwiperWrapper";
import { useTranslation } from "react-i18next";
import {useProducts} from "../../../services/hooks/product/useProducts";

export const slideStyles = {
    pc: {
        fourItems: { width: "390.5px" },
        fiveItems: { width: "312.4px" },
    },
};

export default function Section5() {
    const { t } = useTranslation();
    const { data, isLoading, error } = useProducts({ page: 1, size: 10 });

    if (isLoading) return null;
    if (error) return null;

    const products = data?.data?.content || [];
    if (!products.length) return null;

    return (
        <SectionCreator title={t("NEW_ARRIVALS")}>
            <SwiperWrapper
                autoplay={false}
                breakpoints={{
                    0: { slidesPerView: 2 },
                    500: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1279: { slidesPerView: 5 },
                }}
                slideStyle={slideStyles.pc.fiveItems}
            >
                {products.map((item) => (
                    <ProductCard1
                        key={item.id}
                        id={item.id}
                        slug={item.handle}
                        title={item.title}
                        price={Number(item.variants?.[0]?.price) || 0}
                        compareAtPrice={item.variants?.[0]?.compare_at_price ? Number(item.variants[0].compare_at_price) : undefined}
                        imgUrl={item.images?.[0]?.src}
                        hoverImgUrl={item.images?.[1]?.src}
                        hideRating
                    />

                ))}
            </SwiperWrapper>
        </SectionCreator>
    );
}
