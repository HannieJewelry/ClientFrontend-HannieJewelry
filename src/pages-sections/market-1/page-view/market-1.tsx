// GLOBAL COMPONENTS
import Setting from "components/settings";
import Newsletter from "components/newsletter";
// LOCAL CUSTOM COMPONENTS
import Section2 from "../section-2";
import Section5 from "../section-5";
import Section11 from "../section-11";
import Section14 from "../section-14";
import Section15 from "../section-15";
import Section17 from "../section-17";
import {SwiperCarousel} from "../../../components/swiper-carousel";

export default function MarketOnePageView() {
  return (
    <>
      {/* HERO SLIDER SECTION */}

        <SwiperCarousel />
        <Section2 />
        {/*<Section16/>*/}
      {/* FLASH DEALS SECTION */}
      {/*<Section16 />*/}

      {/* TOP CATEGORIES */}
      {/*<Section3 />*/}

      {/* TOP RATED PRODUCTS */}
      {/*<Section14 />*/}
        <Section15/>

        <Section14/>
        {/*<Section2 />*/}

      {/* NEW ARRIVAL LIST */}

      <Section5 />

      {/* BIG DISCOUNTS */}
      {/*<Section12 />*/}

      {/* CAR LIST */}
      {/*<Section6 />*/}

      {/* MOBILE PHONES */}
      {/*<Section7 />*/}

      {/* PROMO BANNERS */}
      {/*<Section17 />*/}

      {/* OPTICS / WATCH */}
      {/*<Section13 />*/}

      {/* CATEGORIES */}
      {/*<Section9 />*/}

      {/* MORE FOR YOU */}
      {/*<Section10 />*/}

      {/* SERVICE CARDS */}
        <Section17/>

      <Section11 />
      {/* POPUP NEWSLETTER FORM */}
      <Newsletter />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      {/*<Setting />*/}
    </>
  );
}
