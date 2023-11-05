"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useRef, useState } from "react";

import { NavItem, navLinks } from "../data";
import SubCategoryMenu from "../sub-category-menu";
import styles from "./categories.module.scss";

const Categories = () => {
  const [activeMenu, setActiveMenu] = useState<NavItem | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = (menuName: NavItem) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(menuName);
      hoverTimeoutRef.current = undefined;
    }, 400);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = undefined;
    }
    setActiveMenu(null);
  };
  const renderNavLink = (item: { key: NavItem; href: string; label: string }) => (
    <li key={item.key} className={styles.navItem} onMouseEnter={() => handleMouseEnter(item.key)}>
      <Link href={item.href} className={styles.navLink}>
        {item.label}
      </Link>
    </li>
  );

  return (
    <section className={styles.categoriesSection}>
      <div className={clsx(styles.wrapper, "container")}>
        <Link href={"/special-offers"} className={styles.linkBtn}>
          Special Offers
        </Link>
        <nav className={styles.nav} onMouseLeave={handleMouseLeave}>
          <ul className={styles.navList}>{navLinks.map(renderNavLink)}</ul>
          {activeMenu && <SubCategoryMenu menuName={activeMenu} />}
        </nav>
        <Link href="/student-club" className={styles.linkBtn}>
          Student club
        </Link>
      </div>
    </section>
  );
};

export default Categories;
