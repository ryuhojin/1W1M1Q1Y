import { FC } from "react";
import styles from "./SubHeader.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
}

const SubHeader: FC<Props> = ({ href, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <a href={href}>1W1M1Q1Y</a>
        </div>
        <div className={styles.nav}>{children}</div>
      </div>
    </div>
  );
};

export default SubHeader;
