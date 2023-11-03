import clsx from "clsx";
import { Heart, Search, ShoppingCart, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Categories from "./categories";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <section className={styles.actionSection}>
        <div className={clsx(styles.wrapper, "container ")}>
          <Link href={"/"}>
            <Image
              priority
              src={"/images/medex-logo.svg"}
              alt="Medex Logo"
              width={230}
              height={54}
            />
          </Link>

          <ul className={styles.actionList}>
            <HeaderAction icon={<User2 />} label="Login" />
            <HeaderAction icon={<Heart />} label="Favorite" />
            <HeaderAction cartBadge icon={<ShoppingCart />} label="My cart" />
          </ul>

          <form className={styles.searchForm}>
            <input type="text" placeholder="Search by poroduct name, category, and type..." />
            <button type="submit">
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      <Categories />
    </header>
  );
};

export default Header;

type HeaderActionProps = {
  icon: JSX.Element;
  label: string;
  cartBadge?: boolean;
};
const HeaderAction: React.FC<HeaderActionProps> = ({ icon, label, cartBadge = false }) => {
  return (
    <li className={styles.actionItem}>
      <button className={clsx(styles.actionBtn, cartBadge && styles.cart)}>
        {icon}
        <small>{label}</small>
        {cartBadge && <span className={styles.cartBadge} data-count="0"></span>}
      </button>
    </li>
  );
};
