import Gift from "icons/Gift";
import {CategoryItem} from "../components/categories/types";
import Crown from "../icons/bo-suu-tap/Crown";
import DiamondRing from "../icons/bo-suu-tap/DiamondRing";
import LoveRing from "../icons/bo-suu-tap/LoveRing";
import HeartNecklace from "../icons/bo-suu-tap/HeartNecklace";
import Knot from "../icons/bo-suu-tap/Knot";

// Define keys for i18n
const KEYS = {
  COLLECTIONS: "COLLECTIONS",
  ENGAGEMENT_RINGS_2025: "ENGAGEMENT_RINGS_2025",
  WEDDING_RINGS_COLLECTION: "WEDDING_RINGS_COLLECTION",
  LUCKY_YOU_COLLECTION: "LUCKY_YOU_COLLECTION",
  LOVE_NECKLACES: "LOVE_NECKLACES",
};

export const categoryMenus: CategoryItem[] = [
  { icon: DiamondRing, title: KEYS.ENGAGEMENT_RINGS_2025, href: "/products/search/proposal-rings" },
  { icon: LoveRing, title: KEYS.WEDDING_RINGS_COLLECTION, href: "/products/search/wedding-rings" },
  { icon: Gift, title: KEYS.LUCKY_YOU_COLLECTION, href: "/products/search/lucky-you" },
  { icon: HeartNecklace, title: KEYS.LOVE_NECKLACES, href: "/products/search/love-necklace" },
];

export { KEYS };
