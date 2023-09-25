"use client";

import useActiveURL from "@/libs/hooks/ui/useActiveURL";
import styles from "./Link.module.css";
import { FC } from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

const WrapLink: FC<Props> = ({ children, href }) => {
  const active = useActiveURL(href);

  return (
    <Link
      className={`${styles.container} ${active && styles[active]}`}
      href={href}
    >
      {children}
    </Link>
  );
};
export default WrapLink;
