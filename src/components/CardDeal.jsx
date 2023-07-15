import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
        <dir className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better card deal<br className='sm:block hidden' /> in a few easy steps.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our state of the art technology utilises bespoke natural language processing and machine learning, with complex neural networks to find you the best deals and rates before any other bank currently in the market.
            </p>
            <Button styles="mt-10" />
        </dir>
        <div className={layout.sectionImg}>
            <img src={card} alt='card' className='w-[100%] h-[100%]' />
        </div>



    </section >

)

export default CardDeal