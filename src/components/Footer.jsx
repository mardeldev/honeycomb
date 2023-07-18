import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`sm:${styles.flexCenter} md:${styles.flexCenter} ${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className={`flex-1 flex flex-col justify-center mr-10`}>
                <img src={logo} alt="HoneyComb" className="w-[266px] h-[72px] object-contain" />
                <p className={`${styles.paragraph} mt-4 max-w-[310px] text-center`}> A new way to make the payments easy, reliable and secure</p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerLink, index) => (
                    <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 key={footerLink.title} className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            {footerLink.title}
                        </h4>
                        <ul className="list-none mt-3">
                            {footerLink.links.map((link, index) => (
                                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-1" : "mb-0"}`}>
                                    <a key={link.link} href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className={`w-full ${styles.flexCenter} ${styles.marginY} ${styles.paddingY} flex flex-col pt-6 border-t-[1px] border-t-dimWhite`}>
            <p className="font-poppins font-medium text-center text-[18px] leading-[27px] text-white">
                2023 HoneyComb. All Rights Reserved. Website Built by Aimable Mardel.
            </p>
            <p className="text-poppins text-xs text-dimWhite mt-2 text-center">The concept of this webpage is purely imaginative. There exists no 'HoneyComb' bank, and any similarities or resemblances to existing entities are purely coincidental.
            </p>
            <div className={`w-[20%] ${styles.flexCenter} flex flex-row mt-5`}>
                {socialMedia.map((social, index) => (
                    <div key={social.id}>
                        <a href={social.link}><img src={social.icon} alt={social.id} className={`object-contain ${index !== social.length - 1 ? "mr-3" : "mr-0"}`} /></a>
                    </div>
                ))}
            </div>
        </div>
    </section>
)


export default Footer