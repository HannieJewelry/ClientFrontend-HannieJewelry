import categoriesMegaMenu from "./categoriesMegaMenu";

// Define navigation keys for i18n
const KEYS = {
  // Main navigation
  HOME: "HOME",
  PRODUCTS: "PRODUCTS",
  ABOUT: "ABOUT",
  NEWS: "NEWS",
  SERVICES: "SERVICES",
  
  // Mega menu categories
  JEWELRY: "JEWELRY",
  EARRINGS: "EARRINGS",
  WOMEN_RINGS: "WOMEN_RINGS",
  PENDANTS: "PENDANTS",
  JEWELRY_SETS: "JEWELRY_SETS",
  NECKLACES: "NECKLACES",
  BRACELETS: "BRACELETS",
  ANKLETS: "ANKLETS",
  
  BRIDAL_JEWELRY: "BRIDAL_JEWELRY",
  BRIDAL_EARRINGS: "BRIDAL_EARRINGS",
  BRIDAL_NECKLACES: "BRIDAL_NECKLACES",
  BRIDAL_JEWELRY_SETS: "BRIDAL_JEWELRY_SETS",
  
  WEDDING_RINGS: "WEDDING_RINGS",
  WEDDING_RINGS_UNDER_7M: "WEDDING_RINGS_UNDER_7M",
  WEDDING_RINGS_7M_10M: "WEDDING_RINGS_7M_10M",
  WEDDING_RINGS_10M_15M: "WEDDING_RINGS_10M_15M",
  WEDDING_RINGS_15M_20M: "WEDDING_RINGS_15M_20M",
  WEDDING_RINGS_OVER_20M: "WEDDING_RINGS_OVER_20M",
  
  ENGAGEMENT_RINGS: "ENGAGEMENT_RINGS",
  ENGAGEMENT_RINGS_UNDER_5M: "ENGAGEMENT_RINGS_UNDER_5M",
  ENGAGEMENT_RINGS_5M_10M: "ENGAGEMENT_RINGS_5M_10M",
  ENGAGEMENT_RINGS_10M_20M: "ENGAGEMENT_RINGS_10M_20M",
  ENGAGEMENT_RINGS_OVER_20M: "ENGAGEMENT_RINGS_OVER_20M",
  
  GIFTS: "GIFTS",
  BIRTHDAY_GIFTS: "BIRTHDAY_GIFTS",
  ANNIVERSARY_GIFTS: "ANNIVERSARY_GIFTS",
  WEDDING_GIFTS: "WEDDING_GIFTS",
  
  GOLD_24K: "GOLD_24K",
  JEWELRY_24K: "JEWELRY_24K",
  GOLD_BARS: "GOLD_BARS",
  RINGS_24K: "RINGS_24K",
};

// MEGA-MENU DATA
const megaMenus = [
  [
    {
      title: KEYS.JEWELRY,
      child: [
        { title: "Bông tai", searchTerm: "Bông tai" },
        { title: KEYS.WOMEN_RINGS, searchTerm: "Nhẫn nữ" },
        { title: KEYS.PENDANTS, searchTerm: "Mặt dây chuyền" },
        { title: KEYS.JEWELRY_SETS, searchTerm: "Bộ trang sức" },
        { title: KEYS.NECKLACES, searchTerm: "Dây chuyền" },
        { title: KEYS.BRACELETS, searchTerm: "Lắc tay" },
        { title: KEYS.ANKLETS, searchTerm: "Lắc chân" },
      ]
    }
  ],
  [
    {
      title: KEYS.BRIDAL_JEWELRY,
      child: [
        { title: KEYS.BRIDAL_EARRINGS, searchTerm: "Bông tai cưới" },
        {
          title: KEYS.BRIDAL_NECKLACES,
          searchTerm: "Dây chuyền cưới"
        },
        { title: KEYS.BRIDAL_JEWELRY_SETS, searchTerm: "Bộ trang sức cưới" },
      ]
    }
  ],

  [
    {
      title: KEYS.WEDDING_RINGS,
      child: [
        { title: KEYS.WEDDING_RINGS_UNDER_7M, searchTerm: "Nhẫn cưới dưới 7 triệu" },
        { title: KEYS.WEDDING_RINGS_7M_10M, searchTerm: "Nhẫn cưới 7-10 triệu" },
        { title: KEYS.WEDDING_RINGS_10M_15M, searchTerm: "Nhẫn cưới 10-15 triệu" },
        { title: KEYS.WEDDING_RINGS_15M_20M, searchTerm: "Nhẫn cưới 15-20 triệu" },
        { title: KEYS.WEDDING_RINGS_OVER_20M, searchTerm: "Nhẫn cưới trên 20 triệu" },
      ]
    },
  ],
  [
    {
      title: KEYS.ENGAGEMENT_RINGS,
      child: [
        { title: KEYS.ENGAGEMENT_RINGS_UNDER_5M, searchTerm: "Nhẫn cầu hôn dưới 5 triệu" },
        { title: KEYS.ENGAGEMENT_RINGS_5M_10M, searchTerm: "Nhẫn cầu hôn 5-10 triệu" },
        { title: KEYS.ENGAGEMENT_RINGS_10M_20M, searchTerm: "Nhẫn cầu hôn 10-20 triệu" },
        { title: KEYS.ENGAGEMENT_RINGS_OVER_20M, searchTerm: "Nhẫn cầu hôn trên 20 triệu" },
      ]
    },
  ],
  [
    {
      title: KEYS.GIFTS,
      child: [
        { title: KEYS.BIRTHDAY_GIFTS, searchTerm: "Quà sinh nhật" },
        { title: KEYS.ANNIVERSARY_GIFTS, searchTerm: "Quà kỷ niệm" },
        { title: KEYS.WEDDING_GIFTS, searchTerm: "Quà cưới" },
      ]
    },
  ],
  [
    {
      title: KEYS.GOLD_24K,
      child: [
        { title: KEYS.JEWELRY_24K, searchTerm: "Trang sức vàng 24K" },
        { title: KEYS.GOLD_BARS, searchTerm: "Vàng miếng" },
        { title: KEYS.RINGS_24K, searchTerm: "Nhẫn vàng 24K" },
      ]
    },
  ],
];

// MAIN NAVIGATION DATA
const navbarNavigation = [
  {
    title: KEYS.HOME,
    url: "#",
    megaMenu: false,
    megaMenuWithSub: false
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: KEYS.PRODUCTS,
    child: megaMenus
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: KEYS.ABOUT,
    url: "#",
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: KEYS.NEWS,
    url: "#",
  },

  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: KEYS.SERVICES,
    url: "#",
  },

];

export { KEYS };
export default navbarNavigation;
