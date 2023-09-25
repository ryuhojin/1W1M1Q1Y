import styles from "./CategoryItem.module.css";
import CategoryItemState from "./CategoryItemState";
const CategoryItem = () => {
  return (
    <a className={styles.container}>
      <h4 className={styles.title}>수학</h4>
      <p className={styles.description}>
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화
        삼천리
      </p>
      <div className={styles.states}>
        <CategoryItemState />
        <CategoryItemState />
        <CategoryItemState />
      </div>
    </a>
  );
};
export default CategoryItem;
