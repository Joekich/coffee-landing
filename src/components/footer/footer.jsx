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
    },
    {
        id: "2",
        icon: <InstagramLogo />,
    },
    {
        id: "3",
        icon: <YoutubeLogo />,
    },
    {
        id: "4",
        icon: <TwitterLogo />,
    }
];

const Footer = () => {
    return (
        <section className={styles.footer}>
            <img src={FooterBackground} className={styles.footerBackground}/>
            <img src={FooterCupLeft} className={styles.footerCupLeft}/>
            <img src={FooterCupRight} className={styles.footerCupRight}/>
            <div className={styles.beanScene}>
                <h2 className={styles.beanSceneTitle}>Bean Scene</h2>
                <span className={styles.beanSceneText}>Lorem Ipsum is simply dummy text of the printing and<br/>
                typesetting industry. Lorem Ipsum has been the industry's<br/>
                standard dummy text ever since the 1500s, when an<br/>
                unknown printer took a galley of type and scrambled it to<br/>
                make a type specimen book.</span>
                <div className={styles.logos}>
                    {logos.map((logo) => (
                        <div key={logo.id} className={styles.logoWrapper}>
                            {logo.icon}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.about}>
                    <h3 className={styles.footerTitle}>About</h3>
                    <span className={styles.footerText}>Menu<br/> Features<br/> News & Blogs<br/> Help & Supports</span>
            </div>

            <div className={styles.company}>
                    <h3 className={styles.footerTitle}>Company</h3>
                    <span className={styles.footerText}>How we work<br/> Terms of service<br/> Pricing<br/> FAQ</span>
            </div>

            <div className={styles.contactUs}>
                    <h3 className={styles.footerTitle}>Contact Us</h3>
                    <div className={styles.contactUsWrapper}>
                        <span className={styles.contactUsText}>Akshya Nagar 1st Block 1st Cross<br/> Rammurthy nagar, Bangalore-560016</span>
                        <span className={styles.contactUsText}>+1 202-918-2132</span>
                        <span className={styles.contactUsText}>beanscene@mail.com</span>
                        <span className={styles.contactUsText}>www.beanscene.com</span>
                    </div>
            </div>
        </section>
    );
};

export default Footer;
