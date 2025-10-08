'use client';

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper as SwiperType } from 'swiper';
import { COMMON_DOT_STYLES, Dot, DotList } from ".";
import Container from "@mui/material/Container";

const IMAGES = [
    "https://cdn.huythanhjewelry.vn/storage/photos/uploads/cktm-thang-3-09_1747135255.jpg",
    "https://cdn.huythanhjewelry.vn/storage/photos/uploads/cktm-thang-3-03_1747135272.jpg",
    "https://cdn.huythanhjewelry.vn/storage/photos/uploads/nhan-love-not-01_1747130651.jpg",
];
export default function SwiperCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="bg-white mb-2">
        <Box sx={{ position: "relative"}}>

        <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                grabCursor={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {IMAGES.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            component="img"
                            src={src}
                            alt={`slide-${index}`}
                            sx={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                objectFit: "contain",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Dots */}
            <DotList sx={COMMON_DOT_STYLES}>
                {IMAGES.map((_, idx) => (
                    <li
                        key={idx}
                        className={activeIndex === idx ? "slick-active" : ""}
                        onClick={() => swiperRef.current?.slideToLoop(idx)}
                    >
                        <Dot />
                    </li>
                ))}
            </DotList>
        </Box>
            </div>

    );
};

