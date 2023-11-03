import Link from "next/link";
import { FC } from "react";

import styles from "./categoySubMenu.module.scss";

interface SectionItem {
  label: string;
  links?: Array<{ label: string; href: string }>;
}

const NavSection: FC<SectionItem> = ({ label, links }) => (
  <section key={label} className={styles.navSection}>
    <h2 className={styles.catTitle}>{label}</h2>
    {links?.map((link) => (
      <Link key={link.label} href={link.href} className={styles.navLink}>
        {link.label}
      </Link>
    ))}
  </section>
);

export default NavSection;
