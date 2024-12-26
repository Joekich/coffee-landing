import styles from './footer.module.scss';
import FooterBackground from '../../assets/footer-background.webp';
import "@fontsource/clicker-script";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import FooterCupLeft from '../../assets/footer-cup-left.webp';
import FooterCupRight from '../../assets/footer-cup-right.webp';
import FacebookLogo from '../../assets/svg/facebook-logo.jsx';
import TwitterLogo from '../../assets/svg/twitter-logo.jsx';
import YoutubeLogo from '../../assets/svg/youtube-logo.jsx';
import InstagramLogo from '../../assets/svg/instagram-logo.jsx';

const logos = [
    {
        id: "1",
        icon: <FacebookLogo />,
        url: "https://www.facebook.com"
    },
    {
        id: "2",
        icon: <InstagramLogo />,
        url: "https://www.instagram.com"
    },
    {
        id: "3",
        icon: <YoutubeLogo />,
        url: "https://www.youtube.com"
    },
    {
        id: "4",
        icon: <TwitterLogo />,
        url: "https://www.twitter.com"
    }
];

const Footer = () => {
    return (
        <section className={styles.footer}>
            <img draggable='false' src={FooterBackground} className={styles.footerBackground}/>
            <img draggable='false' src={FooterCupLeft} className={styles.footerCupLeft}/>
            <img draggable='false' src={FooterCupRight} className={styles.footerCupRight}/>
            <div className={styles.beanScene}>
                <a href='/' className={styles.beanSceneTitle}>Bean Scene</a>
                <p className={styles.beanSceneText}>Lorem Ipsum is simply dummy text of the printing and<br/>
                typesetting industry. Lorem Ipsum has been the industry's<br/>
                standard dummy text ever since the 1500s, when an<br/>
                unknown printer took a galley of type and scrambled it to<br/>
                make a type specimen book.</p>
                <div className={styles.logos}>
                    {logos.map((logo) => (
                        <a key={logo.id} href={logo.url} className={styles.logoWrapper}>
                            {logo.icon}
                        </a>
                    ))}
                </div>
            </div>
            <div className={styles.about}>
                    <h3 className={styles.footerTitle}>About</h3>
                    <span className={styles.footerText}>Menu</span>
                    <span className={styles.footerText}>Features</span>
                    <span className={styles.footerText}>News & Blogs</span>
                    <span className={styles.footerText}>Help & Supports</span>
            </div>

            <div className={styles.company}>
                    <h3 className={styles.footerTitle}>Company</h3>
                    <span className={styles.footerText}>How we work</span>
                    <span className={styles.footerText}>Terms of service</span>
                    <span className={styles.footerText}>Pricing</span>
                    <span className={styles.footerText}>FAQ</span>
            </div>

            <div className={styles.contactUs}>
                    <h3 className={styles.footerTitle}>Contact Us</h3>
                    <div className={styles.contactUsWrapper}>
                        <p className={styles.adress}>Akshya Nagar 1st Block 1st Cross<br/> Rammurthy nagar, Bangalore-560016</p>
                        <span className={styles.contactUsText}>+1 202-918-2132</span>
                        <span className={styles.contactUsText}>beanscene@mail.com</span>
                        <span className={styles.contactUsText}>www.beanscene.com</span>
                    </div>
            </div>
        </section>
    );
};

export default Footer;
