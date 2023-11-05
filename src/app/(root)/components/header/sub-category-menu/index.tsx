import { FC } from "react";

import { MEGA_MENU_MAPPING, NavItem } from "../data";
import styles from "./categoySubMenu.module.scss";
import ImagePreview from "./ImagePreview";
import NavSection from "./NavSection";

type SubCategoryMenu = {
  menuName: NavItem;
};
const SubCategoryMenu: FC<SubCategoryMenu> = ({ menuName }) => {
  const megaMenuData = MEGA_MENU_MAPPING[menuName];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          {megaMenuData.sections?.map((section) => <NavSection key={section.label} {...section} />)}
        </nav>
        {megaMenuData.images && <ImagePreview images={megaMenuData.images} />}
      </div>
    </section>
  );
};

export default SubCategoryMenu;
