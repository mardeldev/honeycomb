import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import FeatureCard from './FeatureCard';



const Business = () => (
    <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                You do the business, <br className='sm:block hidden' /> we'll handle the <span className='text-gradient'> honey</span>.
            </h2>
            <p className={`${styles.paragraph} max-w-[530px] mt-[5]`}>
                With the right banking provider, you can improve your financial life by building credit, earning rewards and saving sweet money. But with hundreds of banks in the market, who is going to handle your <span className='text-gradient'> honey </span> for you? That is where <span className='text-gradient'>HoneyComb </span> come in.
            </p>


            <Button styles="mt-10" />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}

        </div>

    </section>
)

export default Business