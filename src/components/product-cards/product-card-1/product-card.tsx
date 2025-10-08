"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import {Span} from "components/Typography";
import ProductViewDialog from "components/products-view/product-view-dialog";
// LOCAL CUSTOM HOOK
import useProduct from "../use-product";
// LOCAL CUSTOM COMPONENTS
import HoverActions from "./components/hover-actions";
import ProductPrice from "../product-price";
import ProductTitle from "../product-title";
// STYLED COMPONENTS
import {ImageWrapper, ContentWrapper} from "./styles";
import SoldChip from "./components/sold-chip";
import {useState} from "react";

// ========================================================
type Props = {
    title: string;
    slug: string;
    price: number;
    compareAtPrice?: number;
    imgUrl: string;
    hoverImgUrl?: string;
    rating?: number;
    id: string | number;
    hideRating?: boolean;
    hoverEffect?: boolean;
    showProductSize?: boolean;
    sold?: number;
};
// ========================================================

export default function ProductCard1({
                                         id,
                                         slug,
                                         title,
                                         price,
                                         compareAtPrice,
                                         imgUrl,
                                         hoverImgUrl,
                                         rating = 5,
                                         hideRating,
                                         showProductSize,
                                         sold = 0
                                     }: Props) {
    const {isFavorite, openModal, toggleDialog, toggleFavorite} =
        useProduct(slug);
    const [isHovered, setIsHovered] = useState(false);
    console.log(slug)


    return (
        <>

            <ImageWrapper
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* CHIP + ACTIONS */}
                <SoldChip sold={sold}/>
                <HoverActions
                    isFavorite={isFavorite}
                    toggleView={toggleDialog}
                    toggleFavorite={toggleFavorite}
                />

                {/* IMAGE THUMBNAIL */}
                <Link href={`/products/${slug}`}>
                    <LazyImage
                        priority
                        src={isHovered && hoverImgUrl ? hoverImgUrl : (imgUrl || '/assets/images/placeholder.svg')}
                        width={500}
                        height={500}
                        alt={title}
                        style={{
                            transition: "all 0.7s ease",
                        }}
                    />
                </Link>
            </ImageWrapper>

            {/* PRODUCT VIEW DIALOG BOX */}
            <ProductViewDialog
                openDialog={openModal}
                handleCloseDialog={toggleDialog}
                product={{title, price, id, slug, imgGroup: [imgUrl, imgUrl]}}
            />

            <ContentWrapper>
                <Box flex="1 1 0" minWidth="0px" mr={1}>
                    {/* PRODUCT NAME / TITLE */}
                    <ProductTitle title={title} slug={slug}/>
                    {/* PRODUCT RATINGS IF AVAILABLE */}
                    {!hideRating ? <Rating size="small" value={rating} color="warn" readOnly/> : null}

                    {/* PRODUCT SIZE IF AVAILABLE */}
                    {showProductSize ? (
                        <Span color="grey.600" mb={1} display="block">
                            Liter
                        </Span>
                    ) : null}

                    {/* PRODUCT PRICE */}
                    <ProductPrice price={price} compareAtPrice={compareAtPrice} />
                </Box>


            </ContentWrapper>
        </>
    );
}
