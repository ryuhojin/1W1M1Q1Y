import styles from "./Header.module.css";
import Link from "./Link";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.category}>
          <Link href="/algo">알고리즘</Link>
          <Link href="/project">프로젝트</Link>
        </div>
        <div className={styles.user}>
          <Link href="/login">로그인</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
