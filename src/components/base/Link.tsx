import styles from "./Link.module.css";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Link: FC<Props> = ({ children, href }) => {
  return (
    <a className={`${styles.container}`} href={href}>
      {children}
    </a>
  );
};
export default Link;
