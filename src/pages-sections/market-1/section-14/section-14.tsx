// // // // import Link from "next/link";
// // // // import Box from "@mui/material/Box";
// // // // import Grid from "@mui/material/Grid";
// // // // // LOCAL CUSTOM COMPONENT
// // // // import DealWeekCard from "./deal-week-card";
// // // // // GLOBAL CUSTOM COMPONENTS
// // // // import { Carousel } from "components/carousel";
// // // // import { SectionCreator } from "components/section-header";
// // // // // API FUNCTIONS
// // // // import api from "utils/__api__/fashion-1";
// // // //
// // // // // ==============================================================
// // // // interface DealOfTheWeek {
// // // //   off: number;
// // // //   brand: string;
// // // //   imgUrl: string;
// // // // }
// // // // // ==============================================================
// // // //
// // // // export default async function Section14() {
// // // //   const dealOfTheWeek: DealOfTheWeek[] = await api.getDealOfTheWeekList();
// // // //
// // // //   const totalSlides = dealOfTheWeek.length / 4;
// // // //   const firstIndex = 0 * 4;
// // // //   const lastIndex = firstIndex + 4;
// // // //
// // // //   return (
// // // //     <SectionCreator title="Ưu đãi tháng 5">
// // // //       {/* DEAL WEEK MAIN CAROUSEL */}
// // // //       <Carousel dots autoplay arrows={false} slidesToShow={1}>
// // // //         {[...new Array(totalSlides)].map((_item, ind) => (
// // // //           <Box py="0.25rem" key={ind}>
// // // //             <Grid container spacing={3}>
// // // //               {dealOfTheWeek.slice(firstIndex, lastIndex).map((item, ind) => (
// // // //                 <Grid item md={6} xs={12} key={ind}>
// // // //                   <Link href="/">
// // // //                     <DealWeekCard imgUrl={item.imgUrl} title={item.brand} off={item.off} />
// // // //                   </Link>
// // // //                 </Grid>
// // // //               ))}
// // // //             </Grid>
// // // //           </Box>
// // // //         ))}
// // // //       </Carousel>
// // // //     </SectionCreator>
// // // //   );
// // // // }
// // import Link from "next/link";
// // import Box from "@mui/material/Box";
// // import Grid from "@mui/material/Grid";
// // // LOCAL CUSTOM COMPONENT
// // import DealWeekCard from "./deal-week-card";
// // // GLOBAL CUSTOM COMPONENTS
// // import { Carousel } from "components/carousel";
// // import { SectionCreator } from "components/section-header";
// // // API FUNCTIONS
// // import api from "utils/__api__/fashion-1";
// //
// // // ==============================================================
// // interface DealOfTheWeek {
// //   off: number;
// //   brand: string;
// //   imgUrl: string;
// // }
// // // ==============================================================
// //
// // export default async function Section14() {
// //   const dealOfTheWeek: DealOfTheWeek[] = await api.getDealOfTheWeekList();
// //
// //   const totalSlides = Math.ceil(dealOfTheWeek.length / 6); // Ensure totalSlides is an integer
// //   const itemsPerSlide = 6;
// //
// //   return (
// //       <SectionCreator title="DANH MỤC NỔI BẬT">
// //         {/* DEAL WEEK MAIN CAROUSEL */}
// //         <Carousel dots autoplay={false} arrows={false} slidesToShow={1}>
// //           {[...new Array(totalSlides)].map((_item, ind) => {
// //             const firstIndex = ind * itemsPerSlide;
// //             const lastIndex = firstIndex + itemsPerSlide;
// //
// //             return (
// //                 <Box py="0.25rem" key={ind}>
// //                   <Grid container spacing={3}>
// //                     {dealOfTheWeek.slice(firstIndex, lastIndex).map((item, ind) => (
// //                         <Grid item md={2} xs={12} key={ind}>
// //                           <Link href="/">
// //                             <DealWeekCard imgUrl={item.imgUrl} title={item.brand} off={item.off} />
// //                           </Link>
// //                         </Grid>
// //                     ))}
// //                   </Grid>
// //                 </Box>
// //             );
// //           })}
// //         </Carousel>
// //       </SectionCreator>
// //   );
// // }
//
//

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";

// COMPONENTS
import DealWeekCard from "./deal-week-card";
import { SectionCreator } from "components/section-header";
import SwiperWrapper from "components/carousel/SwiperWrapper";
import {useTranslation} from "react-i18next";

// DATA TYPE
interface DealOfTheWeek {
    off: number;
    brand: string;
    imgUrl: string;
}

// STYLES
export const slideStyles = {
    pc: {
        sixItems: { width: "206px" },
    },
};

export default function Section14() {
    const { t } = useTranslation();
    const [data, setData] = useState<DealOfTheWeek[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await (await import("utils/__api__/fashion-1")).default.getDealOfTheWeekList();
            setData(res);
        };
        fetchData();
    }, []);

    if (!data.length) return null;

    return (
        <SectionCreator title={t("FEATURED_CATEGORIES")}>
            <SwiperWrapper
                autoplay={false}
                loop={false}

                slideStyle={slideStyles.pc.sixItems}
                breakpoints={{
                    0: { slidesPerView: 2, slidesPerGroup: 2 },
                    600: { slidesPerView: 3, slidesPerGroup: 3 },
                    900: { slidesPerView: 4, slidesPerGroup: 4 },
                    1200: { slidesPerView: 6, slidesPerGroup: 6 },
                }}
                showPagination={true}
            >
                {data.map((item, idx) => (
                    <Box key={idx}>
                        <Link href="/">
                            <DealWeekCard imgUrl={item.imgUrl} title={item.brand} off={item.off} />
                        </Link>
                    </Box>
                ))}
            </SwiperWrapper>
        </SectionCreator>
    );
}
