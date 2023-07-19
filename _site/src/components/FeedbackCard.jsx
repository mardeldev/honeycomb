import styles from "../style";
import { quotes } from "../assets";

const FeedbackCard = ({ card: { content, name, title, img } }) => (
    <div className="flex justify-center flex-col px-10 py-12 rounded-[20px] sm:max-w-[370px] max-w-[420px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

        <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain" />
        <p className="font-poppins font-normal flex items-start text-[18px] leading-[32px] text-white my-10">
            {content}
        </p>

        <div className="flex flex-row">

            <img src={img} alt="client" className="w-[48px] h-[48px] rounded-full" />


            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    {name}
                </h4>
                <p className={`${styles.paragraph}`}>
                    {title}
                </p>
            </div>

        </div>

    </div >
)

export default FeedbackCard