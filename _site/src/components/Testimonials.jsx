import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

        <div className="absolute z-[0] w-[60%] h-[50%] -right-[50%] rounded-full yellow__gradient">

        </div>


        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-3 relative z-[1]">
            <h1 className={styles.heading2}>What people are <br className="sm:block hidden" /> saying about us.</h1>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Everything you need to accept honey, crypto and more to grow your business from anywhere on the planet.
                </p>
            </div>
        </div>

        <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">

            {feedback.map((card) => (
                <FeedbackCard key={card.id} card={card} />
            ))}

        </div>

    </section>
)


export default Testimonials