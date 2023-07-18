import { clients } from "../constants";
import styles from "../style";

const Client = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client) => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] h-[100px] rounded-[50px] masking`}>
                    <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>

    </section >
)

export default Client

