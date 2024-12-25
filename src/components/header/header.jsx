import styles from './header.module.scss';
import headerPhoto from '../../assets/header-photo.webp';
import "@fontsource/clicker-script";
import "@fontsource/playfair-display";

const Header = () => {
    return (
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <img className={styles.img} src={headerPhoto} alt="Чашка кофе на столе" />
            </div>
            <header className={styles.header}>
                <nav className={styles.headerNav}>
                    <span className={styles.logo}>Bean Scene</span>
                    <div className={styles.navListWrapper}>
                    <ul className={styles.navList}>
                        <li><a className={styles.a} href="">Home</a></li>
                        <li><a className={styles.a} href="">Menu</a></li>
                        <li><a className={styles.a} href="">About Us</a></li>
                        <li><a className={styles.a} href="">Contact Us</a></li>
                    </ul>
                    </div>
                    <div className={styles.register}>
                        <a className={styles.signin}>Sign In</a>
                        <a className={styles.signup}>Sign Up</a>
                    </div>
                </nav>
            </header>
            <div className={styles.textContent}>
                <span className={styles.upperSpan}>We’ve got your morning covered with</span>
                <h1 className={styles.h1}>Coffee</h1>
                <span className={styles.lowerSpan}>
                    It is best to start your day with a cup of coffee. Discover the <br />
                    best flavours coffee you will ever have. We provide the best <br />
                    for our customers.
                </span>
                <a className={styles.orderButton}>Order Now</a>
            </div>
        </section>
    );
};

export default Header;
