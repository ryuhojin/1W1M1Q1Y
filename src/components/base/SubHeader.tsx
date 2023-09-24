import { FC } from "react";
import styles from "./SubHeader.module.css";

interface Props {
  children: React.ReactNode;
}

const SubHeader: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <a>1W1M1Q1Y</a>
        </div>
        <div className={styles.nav}>{children}</div>
      </div>
    </div>
  );
};

export default SubHeader;
