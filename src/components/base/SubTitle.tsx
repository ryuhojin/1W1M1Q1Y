import { FC } from "react";
import styles from './SubTitle.module.css';

interface Props {
    children: React.ReactNode;
}
const SubTitle: FC<Props> = ({ children }) => {
    return <h2>{children}</h2>
}
export default SubTitle;