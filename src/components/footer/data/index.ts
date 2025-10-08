// CUSTOM ICON COMPONENTS
import Google from "icons/Google";
import Twitter from "icons/Twitter";
import Youtube from "icons/Youtube";
import Facebook from "icons/Facebook";
import Instagram from "icons/Instagram";
import PlayStore from "icons/PlayStore";
import AppleStore from "icons/AppleStore";

export const ABOUT_LINKS = [
  "OUR_STORE",
  "OUR_CONCERNS",
  "TERMS_AND_CONDITIONS",
  "PRIVACY_POLICY"
];

export const CUSTOMER_CARE_LINKS = [
  "HELP_CENTER",
  "TRACK_YOUR_ORDER",
  "CORPORATE_AND_BULK_PURCHASING",
  "RETURNS_AND_REFUNDS"
];

export const SOCIAL_ICON_LINKS = [
  { Icon: Facebook, url: "https://www.facebook.com/UILibOfficial" },
  { Icon: Twitter, url: "https://twitter.com/uilibofficial" },
  {
    Icon: Youtube,
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg"
  },
  { Icon: Google, url: "https://www.google.com/search?q=ui-lib.com" },
  { Icon: Instagram, url: "https://www.instagram.com/uilibofficial/" }
];

export const PLAY_APP_STORE_DATA = [
  { url: "/", icon: PlayStore, title: "GOOGLE_PLAY", subtitle: "GET_IT_ON" },
  { url: "/", icon: AppleStore, title: "APP_STORE", subtitle: "DOWNLOAD_ON_THE" }
];
