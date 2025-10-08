"use client";

import {
    useRef,
    useState,
    useCallback,
    ReactNode,
    CSSProperties,
    forwardRef,
    useImperativeHandle,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { NavigationOptions, PaginationOptions } from "swiper/types";

// ===== Styled Container =====
const RootStyle = styled("div", {
    shouldForwardProp: (prop) => prop !== "space",
})<{ space: number }>(({ space }) => ({
    position: "relative",
    overflow: "hidden",
    ".swiper-slide": {
        paddingInline: space,
    },
    ".swiper-wrapper": {
        marginInline: -space,
    },
    "&:hover .custom-arrow": {
        opacity: 1,
        pointerEvents: "auto",
    },
}));

// ===== Arrows =====
const ArrowButton = styled(Box)<{ hidden?: boolean }>(({ theme, hidden }) => ({
    zIndex: 10,
    top: "50%",
    width: 36,
    height: 36,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transform: "translateY(-50%)",
    transition: "all 0.3s ease",
    color: theme.palette.primary.main,
    display: hidden ? "none" : "flex",
    opacity: 0,
    pointerEvents: "none",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
    },
}));

const PrevButton = styled(ArrowButton)({ left: 10 });
const NextButton = styled(ArrowButton)({ right: 10 });

// ===== Custom Pagination =====
const CustomPagination = styled("div")(({ theme }) => {
    const dotColor = theme.palette.secondary.main;
    return {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(2),
        position: "relative",
        ".swiper-pagination-bullet": {
            width: 15,
            height: 15,
            borderRadius: "50%",
            border: `1px solid ${dotColor}`,
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            opacity: 1,
        },
        ".swiper-pagination-bullet::after": {
            content: '""',
            inset: 0,
            width: 9,
            height: 9,
            margin: "auto",
            borderRadius: "50%",
            backgroundColor: dotColor,
            transform: "scale(0)",
            transition: "transform 500ms ease-in-out",
        },
        ".swiper-pagination-bullet-active::after": {
            transform: "scale(1)",
        },
    };
});
type SwiperBreakpointSettings = {
    slidesPerView: number;
    slidesPerGroup?: number;
    slidesPerGroupSkip?: number;
};
// ===== Props =====
type SwiperWrapperProps = {
    children: ReactNode[];
    autoplay?: boolean;
    autoplayDelay?: number;
    loop?: boolean;
    breakpoints?: Record<number, SwiperBreakpointSettings>;
    slideStyle?: CSSProperties;
    showPagination?: boolean;
    spaceBetween?: number;
    slidesPerGroupSkip?: number;
};

// ===== Component =====
const SwiperWrapper = forwardRef<SwiperRef, SwiperWrapperProps>(
    (
        {
            children,
            autoplay = true,
            autoplayDelay = 3000,
            loop = true,
            breakpoints,
            slideStyle,
            showPagination = false,
            spaceBetween = 10,
            slidesPerGroupSkip = 0,
            // slidesPerGroup = 1,
        },
        ref
    ) => {
        const swiperRef = useRef<SwiperRef>(null);
        const prevRef = useRef<HTMLDivElement>(null);
        const nextRef = useRef<HTMLDivElement>(null);
        const paginationRef = useRef<HTMLDivElement>(null);
        const [showArrows, setShowArrows] = useState(true);

        const handleBreakpoint = useCallback(
            (swiper: any) => {
                const perView =
                    swiper.params.breakpoints?.[swiper.currentBreakpoint]?.slidesPerView ||
                    swiper.params.slidesPerView ||
                    1;
                setShowArrows(perView < children.length);
            },
            [children.length]
        );

        useImperativeHandle(ref, () => swiperRef.current!, []);

        return (
            <>
                <RootStyle space={spaceBetween}>
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        onSwiper={(swiper) => {
                            swiperRef.current = { swiper };

                            setTimeout(() => {
                                if (prevRef.current && nextRef.current) {
                                    (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
                                    (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }

                                if (showPagination && paginationRef.current) {
                                    (swiper.params.pagination as PaginationOptions).el = paginationRef.current;
                                    swiper.pagination.init();
                                    swiper.pagination.render();
                                    swiper.pagination.update();
                                }
                            }, 0);
                        }}
                        onBreakpoint={handleBreakpoint}
                        autoplay={autoplay ? { delay: autoplayDelay } : false}
                        loop={loop && children.length > 5}
                        spaceBetween={spaceBetween}
                        slidesPerGroupSkip={slidesPerGroupSkip}

                        breakpoints={breakpoints}
                        pagination={
                            showPagination
                                ? {
                                    el: paginationRef.current,
                                    clickable: true,
                                    type: "bullets",
                                }
                                : false
                        }
                    >
                        {children.map((child, idx) => (
                            <SwiperSlide key={idx} style={slideStyle}>
                                {child}
                            </SwiperSlide>
                        ))}

                        <PrevButton ref={prevRef} className="custom-arrow" hidden={!showArrows}>
                            <ChevronLeft />
                        </PrevButton>
                        <NextButton ref={nextRef} className="custom-arrow" hidden={!showArrows}>
                            <ChevronRight />
                        </NextButton>
                    </Swiper>
                </RootStyle>

                {showPagination && <CustomPagination ref={paginationRef} />}
            </>
        );
    }
);

export default SwiperWrapper;
