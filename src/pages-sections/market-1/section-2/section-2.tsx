"use client";

import { useState, useEffect } from "react";
import ProductCard1 from "components/product-cards/product-card-1";
import { SectionCreator } from "components/section-header";
import SwiperWrapper from "../../../components/carousel/SwiperWrapper";
import api from "utils/__api__/market-1";
import { useTranslation } from "react-i18next";

export const slideStyles = {
    pc: {
        fourItems: { width: "390.5px" },
        fiveItems: { width: "312.4px" },
    },
};

export default function Section2() {
    const { t } = useTranslation();
    const [flashDeals, setFlashDeals] = useState([]);

    useEffect(() => {
        const fetchFlashDeals = async () => {
            const deals = await api.getFlashDeals();
            const sortedDeals = [...deals].sort((a, b) => b.sold - a.sold);
            setFlashDeals(sortedDeals);
        };

        fetchFlashDeals();
    }, []);

    if (!flashDeals.length) return null;

    return (
        <SectionCreator title={t("BEST_SELLERS")}>
            <SwiperWrapper
                breakpoints={{
                    0: { slidesPerView: 2 },
                    500: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1279: { slidesPerView: 5 },
                }}
                slideStyle={slideStyles.pc.fiveItems}
            >
                {flashDeals.map((item) => (
                    <ProductCard1
                        key={item.id}
                        id={item.id}
                        slug={item.slug}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        imgUrl={item.thumbnail}
                        compareAtPrice={item.discount ? item.price + item.discount : undefined}
                        hoverImgUrl={item.hoverImgUrl}
                        sold={item.sold}
                        hideRating
                    />
                ))}
            </SwiperWrapper>
        </SectionCreator>
    );
}