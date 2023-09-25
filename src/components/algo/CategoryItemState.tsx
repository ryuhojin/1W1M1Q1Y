import styles from "./CategoryItemState.module.css";

const CategoryItemState = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>정복률</div>
      <div className={styles.state}>80%</div>
    </div>
  );
};
export default CategoryItemState;
