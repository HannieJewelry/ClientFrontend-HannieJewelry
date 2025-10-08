import navigation from "data/navbarNavigation";
import {categoryMenus, KEYS as CATEGORY_KEYS} from "../../../data/navigations";

// MODIFY THE NAVIGATION WITH NEW STRUCTURE
export const updateNavigation = navigation.reduce((prev: any[], curr) => {
  const newArr = [...prev];

  if (!curr.child) {
    newArr.push({ ...curr, extLink: true });
  } else if (curr.megaMenu || curr.megaMenuWithSub) {
    const flat = curr.child.flat();
    newArr.push({ title: curr.title, child: flat });
  } else {
    newArr.push(curr);
  }

  return newArr;
}, []);

// 👉 Thêm categoryMenus vào cuối
updateNavigation.splice(1, 0, {
  title: CATEGORY_KEYS.COLLECTIONS,
  child: categoryMenus,
});
