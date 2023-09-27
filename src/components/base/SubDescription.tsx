import { FC } from "react";
import styles from "./SubDescription.module.css";

interface Props {
    children: React.ReactNode;
}

const SubDescription: FC<Props> = ({ children }) => {
    return <p className={styles.container}>
        {children}
    </p>
}
export default SubDescription;