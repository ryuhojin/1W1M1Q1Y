import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__nav}>
        <a className={styles.header__nav__title}>1W1M1Q1Y</a>
        <div className={styles.header__nav__item}></div>
      </div>
    </header>
  );
};

export default Header;
