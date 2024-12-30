import styles from './content.module.scss';
import "@fontsource/clicker-script";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import CoffeeBeansCup from '../../assets/coffee-beans-cup.webp';
import CoffeeBlastLeft from '../../assets/coffee-blast-left.webp';
import Cappuccino from '../../assets/cappuccino.webp';
import ChaiLatte from '../../assets/chai-latte.webp';
import Macchiato from '../../assets/macchiato.webp';
import Espresso from '../../assets/espresso.webp';
import CoffeeBlastRight from '../../assets/coffee-blast-right.webp';
import CoffeeBeans from '../../assets/svg/coffee-beans';
import BadgeMedal from '../../assets/svg/badge-medal';
import BestPrice from '../../assets/svg/best-price';
import CoffeeCup from '../../assets/svg/coffee-cup';
import CoffeeCupBackground from '../../assets/coffee-cup-background.webp';
import CoffeeCupBlock4 from '../../assets/coffee-cup-block-4.webp';
import CoffeeBeansBackground from '../../assets/coffee-beans-background.webp';
import CustomerPhoto from '../../assets/customer-photo.png';
import SwipeButtonArrow from '../../assets/svg/swipe-button-arrow';
import CoffeeBlastLeftFeedback from '../../assets/coffee-blast-left-feedback.webp';
import CoffeeBlastRightFeedback from '../../assets/coffee-blast-right-feedback.webp';
import SubscribeBackground from '../../assets/email-subscribe-background.webp';
import { useEffect, useRef } from 'react';

const coffeeData = [
  {
      id: "1",
      name: "Cappuccino",
      proportions: "Coffee 50% | Milk 50%",
      price: "$8.50",
      image: Cappuccino,
  },
  {
      id: "2",
      name: "Chai Latte",
      proportions: "Coffee 50% | Milk 50%",
      price: "$8.50",
      image: ChaiLatte,
  },
  {
      id: "3",
      name: "Macchiato",
      proportions: "Coffee 50% | Milk 50%",
      price: "$8.50",
      image: Macchiato,
  },
  {
      id: "4",
      name: "Espresso",
      proportions: "Coffee 50% | Milk 50%",
      price: "$8.50",
      image: Espresso,
  },
];

const benefitsBlockData = [
  {
      id: "1",
      title: "Supreme Beans",
      text: "Beans that provides\ngreat taste",
      icon: <CoffeeBeans className={styles.icon} />,
  },
  {
      id: "2",
      title: "High Quality",
      text: "We provide the\nhighest quality",
      icon: <BadgeMedal className={styles.icon} />,
  },
  {
      id: "3",
      title: "Extraordinary",
      text: "Coffee like you have\nnever tasted",
      icon: <CoffeeCup className={styles.icon} />,
  },
  {
      id: "4",
      title: "Affordable Price",
      text: "Our Coffee prices are\neasy to afford",
      icon: <BestPrice className={styles.icon} />,
  },
];

const Content = () => {
  const block1Ref = useRef(null);
  const coffeeBlastLeftRef = useRef(null);
  const coffeeCardBlockRef = useRef(null);
  const coffeeBlastRightRef = useRef(null);
  const benefitsBlockRef = useRef(null);
  const block4TextAreaRef = useRef(null);
  const block4CupRef = useRef(null);
  const block4BeansRef = useRef(null);
  const coffeeBlastLeftFeedbackRef = useRef(null);
  const coffeeBlastRightFeedbackRef = useRef(null);

  useEffect(() => {
    const block1Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    const coffeeBlastLeftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        rootMargin: "20px",
      }
    );

    const coffeeCardBlockObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(`.${styles.coffeeCard}`);
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add(styles.visible);
              }, index * 100);
            });
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    const coffeeBlastRightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        rootMargin: "20px",
      }
    );

    const benefitsBlockObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const benefitCards = entry.target.querySelectorAll(`.${styles.benefitCard}`);
            benefitCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add(styles.visible);
              }, index * 100);
            });
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    const block4TextAreaObserver = new IntersectionObserver (
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           entry.target.classList.add(styles.visible);
         }
       });
     },
     {
      threshold: 0.4,
       rootMargin: "20px",  
     }
   );

   const block4CupObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: "20px",
    }
  );

  const block4BeansObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "20px",
    }
  );

  const coffeeBlastLeftFeedbackObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    },
    {
      rootMargin: "20px",
    }
  );

  const coffeeBlastRightFeedbackObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    },
    {
      rootMargin: "20px",
    }
  );

    if (block1Ref.current) {
      block1Observer.observe(block1Ref.current);
    }

    if (coffeeBlastLeftRef.current) {
      coffeeBlastLeftObserver.observe(coffeeBlastLeftRef.current);
    }

    if (coffeeCardBlockRef.current) {
      coffeeCardBlockObserver.observe(coffeeCardBlockRef.current);
    }

    if (coffeeBlastRightRef.current) {
      coffeeBlastRightObserver.observe(coffeeBlastRightRef.current);
    }

    if (benefitsBlockRef.current) {
      benefitsBlockObserver.observe(benefitsBlockRef.current);
    }

    if (block4TextAreaRef.current) {
      block4TextAreaObserver.observe(block4TextAreaRef.current);
    }

    if (block4CupRef.current) {
      block4CupObserver.observe(block4CupRef.current);
    }

    if (block4BeansRef.current) {
      block4BeansObserver.observe(block4BeansRef.current);
    }

    if (coffeeBlastLeftFeedbackRef.current) {
      coffeeBlastLeftFeedbackObserver.observe(coffeeBlastLeftFeedbackRef.current);
    }

    if (coffeeBlastRightFeedbackRef.current) {
      coffeeBlastRightFeedbackObserver.observe(coffeeBlastRightFeedbackRef.current);
    }

    return () => {
      block1Observer.disconnect();
      coffeeBlastLeftObserver.disconnect();
      coffeeCardBlockObserver.disconnect();
      coffeeBlastRightObserver.disconnect();
      benefitsBlockObserver.disconnect();
      block4TextAreaObserver.disconnect();
      block4CupObserver.disconnect();
      block4BeansObserver.disconnect();
      coffeeBlastLeftFeedbackObserver.disconnect();
      coffeeBlastRightFeedbackObserver.disconnect();
    };
  }, []);

    return (
        <section className={styles.section}>
          <div ref={block1Ref} className={`${styles.block1} ${styles.hidden}`}>
        <div className={styles.leftPart}>
          <h2 className={styles.h2}>Discover the best coffee</h2>
          <p className={styles.text}>
            Bean Scene is a coffee shop that provides you with quality coffee
            <br />
            that helps boost your productivity and helps build your mood.
            <br />
            Having a cup of coffee is good, but having a cup of real coffee is
            <br />
            greater. There is no doubt that you will enjoy this coffee more
            <br />
            than others you have ever tasted.
          </p>
          <a className={styles.learnMoreButton}>Learn More</a>
        </div>
        <div className={styles.rightPart}>
          <img
            draggable="false"
            src={CoffeeBeansCup}
            className={styles.disabledSelect}
          />
        </div>
      </div>
      <img
        ref={coffeeBlastLeftRef}
        draggable="false"
        className={`${styles.coffeeBlastLeft} ${styles.hidden}`}
        src={CoffeeBlastLeft}
        alt="Coffee Blast Left"
      />
          <div className={styles.block2}>
        <h2 className={styles.h2}>Enjoy a new blend of coffee style</h2>
        <p className={styles.text}>
          Explore all flavours of coffee with us. There is always a new cup worth experiencing
        </p>
        <section
          ref={coffeeCardBlockRef}
          className={styles.coffeeCardBlock}
        >
          {coffeeData.map((coffee) => (
            <article
              key={coffee.id}
              className={`${styles.coffeeCard} ${styles.hidden}`}
            >
              <img
                draggable="false"
                src={coffee.image}
                className={styles.coffeeCardImgBlock}
                alt={coffee.name}
              />
              <div className={styles.coffeeCardInfo}>
                <h3 className={styles.coffeeName}>{coffee.name}</h3>
                <span className={styles.coffeeProportions}>{coffee.proportions}</span>
                <span className={styles.coffeePrice}>{coffee.price}</span>
              </div>
              <a className={styles.orderButton}>Order Now</a>
            </article>
          ))}
        </section>
        <img
        ref={coffeeBlastRightRef}
        draggable="false"
        className={`${styles.coffeeBlastRight} ${styles.hidden}`}
        src={CoffeeBlastRight}
        alt="Coffee Blast Right"
      />
      </div>
          <div className={styles.block3}>
            <div className={styles.h2group}>
              <h2 className={styles.h2}>Why are we different?</h2>
              <p className={styles.text}>We don’t just make your coffee, we make your day!</p>
            </div>
            <section
              ref={benefitsBlockRef}
              className={styles.benefitsBlock}
            >
              {benefitsBlockData.map((benefit) => (
                <article
                  key={benefit.id}
                  className={`${styles.benefitCard} ${styles.hidden}`}
                >
                  {benefit.icon}
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <span className={styles.benefitText}>{benefit.text}</span>
                </article>
              ))}
            </section>
            <div className={styles.lowerTextArea}>
                <p className={styles.text}>Great ideas start with great coffee, Lets help you achieve that</p>
                <strong className={styles.h4}>Get started today.</strong>
                <a className={styles.joinUsButton}>Join Us</a>
            </div>
          </div>
          <div className={styles.block4}>
            <div className={styles.imageContainer}>
              <img draggable='false' src={CoffeeCupBackground} />
            </div>
            <div ref={block4TextAreaRef} className={`${styles.block4TextArea} ${styles.hidden}`}>
                <h2 className={styles.block4Title}>Get a chance to have an<br/>
                Amazing morning</h2>
                <p className={styles.block4Text}>We are giving you are one time opportunity to<br/>
                experience a better life with coffee.</p>
                <a className={styles.block4orderButton}>Order Now</a>
            </div>
            <img ref={block4BeansRef} draggable='false' src={CoffeeBeansBackground} className={`${styles.coffeeBeansBackground} ${styles.hidden}`}/>
            <img ref={block4CupRef} draggable='false' src={CoffeeCupBlock4} className={`${styles.coffeeCupBlock4} ${styles.hidden}`}/>
          </div>
          <div className={styles.feedbackBlock}>
                <div className={styles.feedbackTitle}>
                  <h2 className={styles.h2}>Our coffee perfection feedback</h2>
                  <p className={styles.text}>Our customers has amazing things to say about us</p>
                </div>
                <div className={styles.feedbackCard}>
                  <div className={styles.quotationMark}>
                    <span className={styles.quot}>“</span>
                  </div>
                  <p className={styles.feedbackText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br/>
                     been the industry's standard dummy text ever since the 1500s, when an unknown printer took a<br/> 
                     galley of type and scrambled it to make a type specimen book. It has survived not only five<br/> 
                     centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was<br/> 
                     popularised in the 1960s with the release of Letraset.....</p>
                    <span className={styles.customerName}>Jonny Thomas</span>
                    <span className={styles.text}>Project Manager</span>
                    <img draggable='false' src={CustomerPhoto} className={styles.customerPhoto}/>
                    <button className={styles.swipeButtonLeft}>
                      <SwipeButtonArrow/>
                    </button>
                    <button className={styles.swipeButtonRight}>
                      <SwipeButtonArrow/>
                    </button>
                    <img ref={coffeeBlastLeftFeedbackRef} draggable='false' src={CoffeeBlastLeftFeedback} className={`${styles.coffeeBlastLeftFeedback} ${styles.hidden}`}/>
                    <img ref={coffeeBlastRightFeedbackRef} draggable='false' src={CoffeeBlastRightFeedback} className={`${styles.coffeeBlastRightFeedback} ${styles.hidden}`}/>
                </div>
          </div>
          <div className={styles.subscribeBlock}>
            <div className={styles.imageContainer}>
              <img draggable='false' src={SubscribeBackground} />
            </div>
            <div className={styles.subscribe}>
              <div className={styles.subscribeTextArea}>
                <h2 className={styles.subscribeTitle}>Subscribe to get the Latest News</h2>
                <p className={styles.subscribeText}>Don’t miss out on our latest news, updates, tips and special offers</p>
              </div>
              <div className={styles.subscribeContainer}>
                <input type="email" placeholder="Enter your mail" className={styles.subscribeInput} />
                <button className={styles.subscribeButton}>Subscribe</button>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Content;
