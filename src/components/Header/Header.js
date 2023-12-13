import React from "react";
import styles from "./Header.module.scss"
import Search from "../Search/Search";
import { Link, } from "react-router-dom"

function Header() {
    return (
        <div id="header">
            <header className={styles.root}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.logo}>
                        <Link
                                    to={`/`}>
                            <div className={styles.logo}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7.84082 12.4577C7.84082 9.90778 9.9079 7.8407 12.4578 7.8407L19.3832 7.8407C21.9331 7.8407 24.0002 9.90778 24.0002 12.4577C24.0002 15.0075 21.9331 17.0746 19.3832 17.0746H12.4578C9.9079 17.0746 7.84082 15.0075 7.84082 12.4577Z" fill="#FF868E" />
                                    <path d="M12.4578 24C9.9079 24 7.84082 21.9329 7.84082 19.383L7.84082 12.4576C7.84082 9.90772 9.9079 7.84063 12.4578 7.84063C15.0077 7.84063 17.0747 9.90772 17.0747 12.4576V19.383C17.0747 21.9329 15.0077 24 12.4578 24Z" fill="#FF868E" />
                                    <path d="M11.5427 2.8856C11.5427 4.47927 10.2508 5.7712 8.65709 5.7712C7.06341 5.7712 5.77148 4.47927 5.77148 2.8856C5.77148 1.29193 7.06341 0 8.65709 0C10.2508 0 11.5427 1.29193 11.5427 2.8856Z" fill="#FF868E" />
                                    <path d="M5.7712 16.7366C5.7712 18.3302 4.47927 19.6222 2.8856 19.6222C1.29193 19.6222 0 18.3302 0 16.7366C0 15.1429 1.29193 13.851 2.8856 13.851C4.47927 13.851 5.7712 15.1429 5.7712 16.7366Z" fill="#FF868E" />
                                    <path d="M19.6218 2.8856C19.6218 4.47927 18.3299 5.7712 16.7362 5.7712C15.1425 5.7712 13.8506 4.47927 13.8506 2.8856C13.8506 1.29193 15.1425 0 16.7362 0C18.3299 0 19.6218 1.29193 19.6218 2.8856Z" fill="#FF868E" />
                                    <path d="M5.7712 8.65684C5.7712 10.2505 4.47927 11.5424 2.8856 11.5424C1.29193 11.5424 0 10.2505 0 8.65684C0 7.06317 1.29193 5.77124 2.8856 5.77124C4.47927 5.77124 5.7712 7.06317 5.7712 8.65684Z" fill="#FF868E" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="73" height="13" viewBox="0 0 73 13" fill="none">
                                    <path d="M0.894531 12.8L0.894531 0.435181L6.69293 0.435181C7.66573 0.435181 8.45933 0.620781 9.07373 0.991981C9.70093 1.36318 10.1681 1.86878 10.4753 2.50878C10.7825 3.14878 10.9361 3.87838 10.9361 4.69758C10.9361 5.52958 10.7569 6.26558 10.3985 6.90558C10.0529 7.54558 9.55373 8.04478 8.90093 8.40318C8.26093 8.74878 7.49933 8.92158 6.61613 8.92158H3.48653L3.48653 12.8H0.894531ZM3.48653 6.86718H6.07853C6.82093 6.86718 7.37773 6.67518 7.74893 6.29118C8.13293 5.89438 8.32493 5.36318 8.32493 4.69758C8.32493 3.98078 8.14573 3.43678 7.78733 3.06558C7.42893 2.68158 6.89133 2.48958 6.17453 2.48958L3.48653 2.48958L3.48653 6.86718Z" fill="#1D1D1D" />
                                    <path d="M17.1119 12.992C15.5375 12.992 14.2895 12.6016 13.3679 11.8208C12.4463 11.0272 11.9855 9.83038 11.9855 8.23038C11.9855 6.78398 12.3695 5.63838 13.1375 4.79358C13.9183 3.93598 15.0767 3.50718 16.6127 3.50718C18.0207 3.50718 19.0959 3.87838 19.8383 4.62078C20.5935 5.35038 20.9711 6.31038 20.9711 7.50078V9.15198L14.3855 9.15198C14.5263 9.88158 14.8591 10.3808 15.3839 10.6496C15.9215 10.9184 16.6767 11.0528 17.6495 11.0528C18.1359 11.0528 18.6287 11.008 19.1279 10.9184C19.6399 10.8288 20.0751 10.7136 20.4335 10.5728V12.416C20.0111 12.608 19.5183 12.7488 18.9551 12.8384C18.3919 12.9408 17.7775 12.992 17.1119 12.992ZM14.3855 7.55838H18.7055V7.05918C18.7055 6.53438 18.5519 6.12478 18.2447 5.83038C17.9375 5.52318 17.4191 5.36958 16.6895 5.36958C15.8319 5.36958 15.2303 5.54238 14.8847 5.88798C14.5519 6.23358 14.3855 6.79038 14.3855 7.55838Z" fill="#1D1D1D" />
                                    <path d="M26.3854 12.992C25.3358 12.992 24.555 12.7168 24.043 12.1664C23.5438 11.616 23.2942 10.8672 23.2942 9.91998V5.69598H22.0078V3.69918H23.2942V1.74078L25.8862 0.972781V3.69918H28.1902L28.0366 5.69598H25.8862V9.74718C25.8862 10.2464 26.0014 10.592 26.2318 10.784C26.4622 10.9632 26.8206 11.0528 27.307 11.0528C27.6654 11.0528 28.0366 10.9888 28.4206 10.8608V12.6464C28.139 12.7616 27.8318 12.8448 27.499 12.896C27.1662 12.96 26.795 12.992 26.3854 12.992Z" fill="#1D1D1D" />
                                    <path d="M32.9572 12.992C32.2788 12.992 31.6324 12.9408 31.018 12.8384C30.4036 12.7488 29.9108 12.6336 29.5396 12.4928V10.3424C29.9876 10.5216 30.4932 10.6624 31.0564 10.7648C31.6196 10.8544 32.138 10.8992 32.6116 10.8992C33.2516 10.8992 33.6996 10.8608 33.9556 10.784C34.2244 10.7072 34.3588 10.5344 34.3588 10.2656C34.3588 9.95838 34.154 9.73438 33.7444 9.59358C33.3476 9.45278 32.7524 9.25438 31.9588 8.99838C31.1268 8.71678 30.4868 8.37758 30.0388 7.98078C29.5908 7.58398 29.3668 6.99518 29.3668 6.21438C29.3668 5.34398 29.6804 4.67838 30.3076 4.21758C30.9476 3.74398 31.9716 3.50718 33.3796 3.50718C33.9428 3.50718 34.474 3.55198 34.9732 3.64158C35.4724 3.71838 35.8948 3.81438 36.2404 3.92958V6.06078C35.8948 5.89438 35.498 5.77278 35.05 5.69598C34.602 5.60638 34.186 5.56158 33.802 5.56158C33.2516 5.56158 32.81 5.59998 32.4772 5.67678C32.1572 5.75358 31.9972 5.91998 31.9972 6.17598C31.9972 6.45758 32.17 6.65598 32.5156 6.77118C32.874 6.88638 33.4244 7.05918 34.1668 7.28958C34.8964 7.50718 35.466 7.74398 35.8756 7.99998C36.2852 8.25598 36.5732 8.56318 36.7396 8.92158C36.906 9.26718 36.9892 9.70238 36.9892 10.2272C36.9892 12.0704 35.6452 12.992 32.9572 12.992Z" fill="#1D1D1D" />
                                    <path d="M38.7883 12.8V0.435181L44.5867 0.435181C45.5595 0.435181 46.3531 0.620781 46.9675 0.991981C47.5947 1.36318 48.0619 1.86878 48.3691 2.50878C48.6763 3.14878 48.8299 3.87838 48.8299 4.69758C48.8299 5.52958 48.6507 6.26558 48.2923 6.90558C47.9467 7.54558 47.4475 8.04478 46.7947 8.40318C46.1547 8.74878 45.3931 8.92158 44.5099 8.92158H41.3803V12.8H38.7883ZM41.3803 6.86718H43.9723C44.7147 6.86718 45.2715 6.67518 45.6427 6.29118C46.0267 5.89438 46.2187 5.36318 46.2187 4.69758C46.2187 3.98078 46.0395 3.43678 45.6811 3.06558C45.3227 2.68158 44.7851 2.48958 44.0683 2.48958H41.3803V6.86718Z" fill="#1D1D1D" />
                                    <path d="M52.7491 12.992C52.1731 12.992 51.6355 12.8896 51.1363 12.6848C50.6499 12.4672 50.2531 12.1536 49.9459 11.744C49.6515 11.3216 49.5043 10.7968 49.5043 10.1696C49.5043 9.27358 49.8179 8.55678 50.4451 8.01918C51.0851 7.48158 52.0259 7.21278 53.2675 7.21278H55.9555V6.96318C55.9555 6.39998 55.7955 6.00318 55.4755 5.77278C55.1683 5.54238 54.5411 5.42718 53.5939 5.42718C52.5571 5.42718 51.5587 5.58718 50.5987 5.90718V4.08318C51.0211 3.91678 51.5331 3.78238 52.1347 3.67998C52.7491 3.56478 53.4147 3.50718 54.1315 3.50718C55.5011 3.50718 56.5571 3.78878 57.2995 4.35198C58.0547 4.90238 58.4323 5.79198 58.4323 7.02078V12.8H56.1859L56.0515 11.9744C55.6931 12.2944 55.2515 12.544 54.7267 12.7232C54.2019 12.9024 53.5427 12.992 52.7491 12.992ZM53.4595 11.2832C54.0355 11.2832 54.5347 11.1872 54.9571 10.9952C55.3795 10.8032 55.7123 10.56 55.9555 10.2656V8.82558H53.3251C52.3139 8.82558 51.8083 9.24158 51.8083 10.0736C51.8083 10.88 52.3587 11.2832 53.4595 11.2832Z" fill="#1D1D1D" />
                                    <path d="M62.048 12.8L59.648 3.69918L62.24 3.69918L63.6224 9.61278L65.1392 4.87038V3.69918H67.1168L68.8448 9.61278L70.1888 3.69918H72.7616L70.3808 12.8H68L66.2528 7.48158L64.4672 12.8H62.048Z" fill="#1D1D1D" />
                                </svg>
                            </div>
                            </Link>


                        </li>
                        <li>
                            <Search/>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Header;