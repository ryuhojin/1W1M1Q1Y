import { FC } from "react";
import styles from "./CategoryList.module.css";

interface Props {
  children: React.ReactNode;
}

const CategoryList: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CategoryList;
