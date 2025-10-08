import React, { useState} from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {HlsPlayer, normalizeImages} from "../../../utils/ mediaUtils";
import {Product} from "../../../services/model/Product3.model";

type Props = { product: Product };

const IMAGE_CONTAINER_HEIGHT = 400;

const ProductThumbsGallery = ({ product }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const mediaList = normalizeImages(product.images);

    return (
        <Box sx={{ mx: 'auto' }}>
            <Box sx={{ mb: 2, overflow: 'hidden' }}>
                <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Thumbs]}
                    className="main-swiper"
                    loop={mediaList.length > 1}
                >
                    {mediaList.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <Box sx={{
                                position: 'relative',
                                width: 1,
                                height: `${IMAGE_CONTAINER_HEIGHT}px`
                            }}>
                                {item.type === 'image' ? (
                                    <Image
                                        src={item.src}
                                        alt={`Hình sản phẩm ${idx + 1}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                ) : (
                                    <HlsPlayer src={item.src} />
                                )}
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            {/* Swiper thumbnail */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                watchSlidesProgress
                modules={[Thumbs]}
                className="thumbs-swiper"
                loop={mediaList.length > 1}
            >
                {mediaList.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <Box
                            className="thumb-slide"
                            sx={{ position: 'relative', width: 80, height: 80 }}
                        >
                            <Image
                                src={item.thumb}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                sizes="80px"
                                style={{
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            {item.type === 'video' && (
                                <PlayArrowIcon
                                    sx={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 25,
                                        color: '#fff',
                                        background: 'rgba(0,0,0,0.5)',
                                        borderRadius: '50%',
                                    }}
                                />
                            )}
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .thumbs-swiper .swiper-slide-thumb-active .thumb-slide {
                    border: 1px solid #ccc !important;
                }
            `}</style>
        </Box>
    );
};

export default ProductThumbsGallery;
