import logo from "./logo.svg";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    BrowserRouter,
    Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Buycard from "./components/BuyCard";
import { ClickToComponent } from 'click-to-react-component'

function App() {
    return (
        <div className='bg-black'>
            <ClickToComponent />
            <Header />

            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/buy" element={<Buycard />} />
                </Routes>
            </Router>


            <footer
                className="footer-block default-margin mb-0"
                data-v-82da5e0f=""
                data-v-3a846a5e=""
            >
                <div
                    className="footer-desktop wrapper extend is-desktop"
                    data-v-3a846a5e=""
                    data-v-3bb034d2=""
                >
                    <div className="footer-flex-container" data-v-3bb034d2="">
                        <div className="venom-information" data-v-3bb034d2="">
                            {/* <a
                                aria-current="page"
                                href="index.html"
                                className="router-link-active router-link-exact-active logo-component pointer logo"
                                aria-label="Sriverse main page"
                                data-v-3bb034d2=""
                                data-v-10402e2e=""
                            >
                                <img
                                    src="_nuxt/Logo.8cbf5be7.png"
                                    alt="Sriverse logo"
                                    className="Venom logo"
                                    data-v-10402e2e=""
                                />
                                <img
                                    src="_nuxt/Logo.8cbf5be7.png"
                                    alt="Venom logo hover state"
                                    className="logo-hover"
                                    data-v-10402e2e=""
                                />
                            </a> */}
                            <div
                                className="footer-disclaimer disclaimer"
                                data-v-3bb034d2=""
                                data-v-79c3f820=""
                            >
                                {" "}
                                METAVAULT is licensed by UAE and dedicated to the development and launch
                                of the METAVAULT blockchain, providing scalable and secure solutions
                                 for real-world applications.
                                 {/* To learn more about our policies,
                                click on{" "} */}

                            </div>
                            <div
                                className="social-compose is-medium socials"
                                data-v-3bb034d2=""
                                data-v-465bfb6b=""
                            >
                                {/* <a
                                    href=""
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="social-media-item discord is-medium"
                                    aria-label="Discord"
                                    data-v-465bfb6b=""
                                >
                                    <div className="icon" data-v-465bfb6b="">
                                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M18.8695 5.75623C17.5692 5.16091 16.1964 4.73857 14.7864 4.5C14.5934 4.84494 14.4188 5.19983 14.2633 5.5632C12.7613 5.33686 11.2339 5.33686 9.73188 5.5632C9.5763 5.19987 9.40172 4.84498 9.20884 4.5C7.79786 4.74059 6.42423 5.16393 5.1226 5.75934C2.53854 9.5825 1.83804 13.3107 2.18829 16.986C3.70158 18.1041 5.39539 18.9544 7.19608 19.5C7.60154 18.9547 7.96032 18.3761 8.26862 17.7705C7.68305 17.5518 7.11788 17.282 6.57964 16.9642C6.72129 16.8615 6.85984 16.7556 6.99371 16.6529C8.55986 17.3894 10.2692 17.7713 11.9999 17.7713C13.7306 17.7713 15.44 17.3894 17.0062 16.6529C17.1416 16.7634 17.2801 16.8692 17.4202 16.9642C16.881 17.2825 16.3147 17.5529 15.7281 17.7721C16.0361 18.3774 16.3949 18.9555 16.8007 19.5C18.6029 18.9566 20.298 18.1067 21.8116 16.9875C22.2225 12.7254 21.1095 9.03144 18.8695 5.75623ZM8.71227 14.7257C7.73624 14.7257 6.92989 13.84 6.92989 12.7503C6.92989 11.6606 7.70822 10.7671 8.70915 10.7671C9.71009 10.7671 10.5102 11.6606 10.4931 12.7503C10.476 13.84 9.70697 14.7257 8.71227 14.7257ZM15.2876 14.7257C14.31 14.7257 13.5068 13.84 13.5068 12.7503C13.5068 11.6606 14.2851 10.7671 15.2876 10.7671C16.2901 10.7671 17.084 11.6606 17.0669 12.7503C17.0498 13.84 16.2823 14.7257 15.2876 14.7257Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a> */}
                                <a
                                    href="http://www.twitter.com/Sriverseio"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="social-media-item twitter is-medium"
                                    aria-label="Twitter"
                                    data-v-465bfb6b=""
                                >
                                    <div className="icon" data-v-465bfb6b="">
                                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19.3402 8.23421C19.3515 8.39695 19.3515 8.55969 19.3515 8.72393C19.3515 13.7284 15.5417 19.5 8.5754 19.5V19.497C6.51753 19.5 4.50241 18.9105 2.77002 17.7991C3.06925 17.8351 3.36998 17.8531 3.67146 17.8539C5.37686 17.8554 7.0335 17.2831 8.37517 16.2295C6.75452 16.1987 5.33336 15.142 4.83689 13.5994C5.4046 13.7089 5.98957 13.6864 6.54678 13.5341C4.77989 13.1771 3.50872 11.6247 3.50872 9.82186C3.50872 9.80536 3.50872 9.78961 3.50872 9.77386C4.03519 10.0671 4.62465 10.2298 5.22761 10.2478C3.56347 9.13565 3.0505 6.92179 4.05544 5.1909C5.97832 7.557 8.81539 8.99541 11.8609 9.14765C11.5557 7.83224 11.9727 6.45382 12.9566 5.52913C14.482 4.09522 16.8811 4.16872 18.315 5.69337C19.1632 5.52613 19.9762 5.2149 20.7201 4.77393C20.4374 5.65062 19.8457 6.39533 19.0552 6.86855C19.8059 6.78005 20.5394 6.57907 21.2301 6.27234C20.7216 7.03429 20.0812 7.698 19.3402 8.23421Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                {/* <a
                                    href="https://forum.venom.foundation"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="social-media-item dev-forum is-medium"
                                    aria-label="Forum"
                                    data-v-465bfb6b=""
                                >
                                    <div className="icon" data-v-465bfb6b="">
                                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                                            <svg
                                                width={28}
                                                height={28}
                                                viewBox="0 0 28 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M9.33333 23.9156V21H7C5.067 21 3.5 19.433 3.5 17.5V7C3.5 5.067 5.067 3.5 7 3.5H21C22.933 3.5 24.5 5.067 24.5 7V17.5C24.5 19.433 22.933 21 21 21H14.495L10.2811 24.3711C10.106 24.5112 9.86607 24.5385 9.66397 24.4413C9.46187 24.3442 9.33333 24.1398 9.33333 23.9156ZM11.325 8.50866C10.8693 8.05305 10.1307 8.05305 9.67504 8.50866C9.21943 8.96427 9.21943 9.70296 9.67504 10.1586L11.1834 11.667L9.67504 13.1753C9.21943 13.6309 9.21943 14.3696 9.67504 14.8252C10.1307 15.2809 10.8693 15.2809 11.325 14.8252L13.6583 12.4919C13.8771 12.2731 14 11.9764 14 11.667C14 11.3575 13.8771 11.0608 13.6583 10.842L11.325 8.50866ZM15.1667 14.0003C14.5223 14.0003 14 14.5226 14 15.167C14 15.8113 14.5223 16.3336 15.1667 16.3336H17.5C18.1443 16.3336 18.6667 15.8113 18.6667 15.167C18.6667 14.5226 18.1443 14.0003 17.5 14.0003H15.1667Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href="https://medium.com/@venom.foundation"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="social-media-item medium is-medium"
                                    aria-label="Medium"
                                    data-v-465bfb6b=""
                                >
                                    <div className="icon" data-v-465bfb6b="">
                                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.4708 12.0001C13.4708 15.6009 10.5716 18.5199 6.99542 18.5199C3.41923 18.5199 0.519775 15.6009 0.519775 12.0001C0.519775 8.39924 3.41901 5.47998 6.99542 5.47998C10.5718 5.47998 13.4708 8.39924 13.4708 12.0001Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M20.5746 12C20.5746 15.3894 19.125 18.1381 17.3368 18.1381C15.5486 18.1381 14.099 15.3894 14.099 12C14.099 8.61057 15.5484 5.86182 17.3366 5.86182C19.1248 5.86182 20.5744 8.60969 20.5744 12"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M23.4803 12.0003C23.4803 15.0364 22.9705 17.4991 22.3415 17.4991C21.7125 17.4991 21.203 15.037 21.203 12.0003C21.203 8.96355 21.7128 6.50146 22.3415 6.50146C22.9703 6.50146 23.4803 8.96333 23.4803 12.0003Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a> */}
                                <a
                                    href="https://t.me/sritoken"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="social-media-item telegram is-medium"
                                    aria-label="Telegram"
                                    data-v-465bfb6b=""
                                >
                                    <div className="icon" data-v-465bfb6b="">
                                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                                            <svg
                                                width={32}
                                                height={32}
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M24.5901 25.2687V25.2662L24.6121 25.2136L28.282 6.71089V6.65215C28.282 6.19081 28.1107 5.78821 27.7411 5.54713C27.4169 5.33543 27.0436 5.32074 26.7817 5.34032C26.538 5.36237 26.2974 5.41162 26.0646 5.48717C25.9654 5.51918 25.8674 5.5551 25.7709 5.59486L25.755 5.60098L5.29439 13.6274L5.28827 13.6298C5.22606 13.6511 5.16518 13.676 5.10593 13.7045C4.96042 13.7698 4.82081 13.8476 4.68864 13.937C4.42554 14.1181 3.92504 14.5439 4.00948 15.2194C4.07923 15.7799 4.4647 16.1348 4.72535 16.3196C4.87921 16.4274 5.04462 16.5177 5.21852 16.5888L5.25767 16.6059L5.26991 16.6096L5.27848 16.6133L8.85909 17.8186C8.84685 18.0426 8.86888 18.2714 8.92884 18.4978L10.7216 25.3005C10.8195 25.6713 11.0312 26.0021 11.3268 26.2465C11.6224 26.4908 11.9871 26.6365 12.3697 26.6629C12.7523 26.6894 13.1336 26.5954 13.46 26.394C13.7864 26.1927 14.0416 25.8941 14.1896 25.5403L16.9895 22.5471L21.7975 26.2329L21.866 26.2623C22.3029 26.4532 22.7104 26.5132 23.0836 26.463C23.4569 26.4116 23.753 26.255 23.9757 26.0775C24.2333 25.8687 24.4387 25.6026 24.5754 25.3005L24.5852 25.2797L24.5888 25.2723L24.5901 25.2687ZM10.7032 18.0303C10.6834 17.9548 10.6881 17.875 10.7167 17.8024C10.7453 17.7298 10.7963 17.6682 10.8623 17.6265L23.0029 9.91705C23.0029 9.91705 23.7175 9.48262 23.6918 9.91705C23.6918 9.91705 23.8191 9.99292 23.4361 10.349C23.0739 10.688 14.7831 18.6924 13.9437 19.5025C13.897 19.5478 13.8643 19.6055 13.8494 19.6689L12.496 24.833L10.7032 18.0291V18.0303Z"
                                                    fill="#EEEEEE"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="columns-wrapper" data-v-3bb034d2="">
                            {/*[*/}
                            <div className="column" data-v-3bb034d2="">
                                <div className="column-title" data-v-3bb034d2="">
                                    METAVAULT
                                </div>
                                <div className="column-links" data-v-3bb034d2="">
                                    {/*[*/}
                                    <a
                                        href="Venom_Whitepaper.pdf"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link link"
                                        data-v-3bb034d2=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Whitepaper
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="http://www.instagram.com/sriverse.io/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link link"
                                        data-v-3bb034d2=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Instagram
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    {/* <a
                                        href="cdn-cgi/l/email-protection.html#5525271523303b3a382130363d7b3c3a"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link link"
                                        data-v-3bb034d2=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Media Inquiries
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a> */}
                                    {/*]*/}
                                </div>
                            </div>
                            <div className="column" data-v-3bb034d2="">
                                <div className="column-title" data-v-3bb034d2="">
                                    Community
                                </div>
                                <div className="column-links" data-v-3bb034d2="">
                                    {/*[*/}
                                    <a
                                        href="http://www.twitter.com/Sriverseio"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link link"
                                        data-v-3bb034d2=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Twitter
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>

                                    <a
                                        href="http://www.linkedin.com/in/sriverse-io-a95784281/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link link"
                                        data-v-3bb034d2=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            LinkedIn
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    {/*]*/}
                                </div>
                            </div>
                            <div className="column" data-v-3bb034d2="">
                                {/* <div className="column-title" data-v-3bb034d2="">
                  Participate
                </div> */}
                                <div className="column-links mt-14" data-v-3bb034d2="">









                                    <a
                                        href="http://in.pinterest.com/sriverse/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link link"
                                        data-v-3bb034d2=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Pinterest
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>

                                    <a
                                        href="https://t.me/sritoken"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link link"
                                        data-v-3bb034d2=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Telegram
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>








                                    {/*[*/}
                                    {/* <a
                                        href="http://www.instagram.com/sriverse.io/"
                                        className="footer-link link"
                                        data-v-3bb034d2=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Instagram
                                        </div>
                                    </a>
                                    <a
                                        href="http://in.pinterest.com/sriverse/"
                                        className="footer-link link"
                                        data-v-3bb034d2=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Pinterest
                                        </div>
                                    </a> */}
                                        {/**/}

                                    {/*]*/}
                                </div>
                            </div>
                            {/*]*/}
                        </div>
                    </div>
                    <div
                        className="footer-disclaimer bottom-disclaimer"
                        data-v-3bb034d2=""
                        data-v-79c3f820=""
                    >
                        {" "}
                        Sriverse Foundation is licensed by UAE and dedicated to the development and launch of
                        the Venom blockchain, providing scalable and secure solutions for
                        real-world applications. To learn more about our policies, click on{" "}
                        <a href="privacy-policy.html" className="link" data-v-79c3f820="">
                            Privacy&nbsp;Policy
                        </a>
                    </div>
                    <div
                        className="footer-copyright copyright"
                        data-v-3bb034d2=""
                        data-v-a6d462e3=""
                    >
                        METAVAULT ©2023 All Rights Reserved
                    </div>
                </div>
                <div
                    className="footer-mobile wrapper is-mobile"
                    data-v-3a846a5e=""
                    data-v-c3851004=""
                >
                    <div className="logo-socials" data-v-c3851004="">
                        <div className="logo" data-v-c3851004="">
                            <a
                                aria-current="page"
                                href="index.html"
                                className="router-link-active router-link-exact-active logo-component pointer"
                                aria-label="Venom main page"
                                data-v-c3851004=""
                                data-v-10402e2e=""
                            >
                                <img
                                    src="_nuxt/Logo.8cbf5be7.png"
                                    alt="Sriverse logo"
                                    className="Sriverse logo"
                                    data-v-10402e2e=""
                                />
                                <img
                                    src="_nuxt/Logo.8cbf5be7.png"
                                    alt="Venom logo hover state"
                                    className="logo-hover"
                                    data-v-10402e2e=""
                                />
                            </a>
                        </div>
                        <div
                            className="social-compose is-small"
                            data-v-c3851004=""
                            data-v-465bfb6b=""
                        >
                            {/*[*/}

                            <a
                                href="http://www.twitter.com/Sriverseio"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="social-media-item twitter is-small"
                                aria-label="Twitter"
                                data-v-465bfb6b=""
                            >
                                <div className="icon" data-v-465bfb6b="">
                                    <div className="kit-icon is-fill" data-v-465bfb6b="">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.3402 8.23421C19.3515 8.39695 19.3515 8.55969 19.3515 8.72393C19.3515 13.7284 15.5417 19.5 8.5754 19.5V19.497C6.51753 19.5 4.50241 18.9105 2.77002 17.7991C3.06925 17.8351 3.36998 17.8531 3.67146 17.8539C5.37686 17.8554 7.0335 17.2831 8.37517 16.2295C6.75452 16.1987 5.33336 15.142 4.83689 13.5994C5.4046 13.7089 5.98957 13.6864 6.54678 13.5341C4.77989 13.1771 3.50872 11.6247 3.50872 9.82186C3.50872 9.80536 3.50872 9.78961 3.50872 9.77386C4.03519 10.0671 4.62465 10.2298 5.22761 10.2478C3.56347 9.13565 3.0505 6.92179 4.05544 5.1909C5.97832 7.557 8.81539 8.99541 11.8609 9.14765C11.5557 7.83224 11.9727 6.45382 12.9566 5.52913C14.482 4.09522 16.8811 4.16872 18.315 5.69337C19.1632 5.52613 19.9762 5.2149 20.7201 4.77393C20.4374 5.65062 19.8457 6.39533 19.0552 6.86855C19.8059 6.78005 20.5394 6.57907 21.2301 6.27234C20.7216 7.03429 20.0812 7.698 19.3402 8.23421Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {/**/}
                            </a>
                            <a
                                href="http://www.linkedin.com/in/sriverse-io-a95784281/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="social-media-item dev-forum is-small"
                                aria-label="LinkedIn"
                                data-v-465bfb6b=""
                            >
                                <div className="icon" data-v-465bfb6b="">
                                    <div className="kit-icon is-fill" data-v-465bfb6b="">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.33333 23.9156V21H7C5.067 21 3.5 19.433 3.5 17.5V7C3.5 5.067 5.067 3.5 7 3.5H21C22.933 3.5 24.5 5.067 24.5 7V17.5C24.5 19.433 22.933 21 21 21H14.495L10.2811 24.3711C10.106 24.5112 9.86607 24.5385 9.66397 24.4413C9.46187 24.3442 9.33333 24.1398 9.33333 23.9156ZM11.325 8.50866C10.8693 8.05305 10.1307 8.05305 9.67504 8.50866C9.21943 8.96427 9.21943 9.70296 9.67504 10.1586L11.1834 11.667L9.67504 13.1753C9.21943 13.6309 9.21943 14.3696 9.67504 14.8252C10.1307 15.2809 10.8693 15.2809 11.325 14.8252L13.6583 12.4919C13.8771 12.2731 14 11.9764 14 11.667C14 11.3575 13.8771 11.0608 13.6583 10.842L11.325 8.50866ZM15.1667 14.0003C14.5223 14.0003 14 14.5226 14 15.167C14 15.8113 14.5223 16.3336 15.1667 16.3336H17.5C18.1443 16.3336 18.6667 15.8113 18.6667 15.167C18.6667 14.5226 18.1443 14.0003 17.5 14.0003H15.1667Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {/**/}
                            </a>
                            <a
                                href="http://in.pinterest.com/sriverse/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="social-media-item medium is-small"
                                aria-label="Pinterest"
                                data-v-465bfb6b=""
                            >
                                <div className="icon" data-v-465bfb6b="">
                                    <div className="kit-icon is-fill" data-v-465bfb6b="">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.4708 12.0001C13.4708 15.6009 10.5716 18.5199 6.99542 18.5199C3.41923 18.5199 0.519775 15.6009 0.519775 12.0001C0.519775 8.39924 3.41901 5.47998 6.99542 5.47998C10.5718 5.47998 13.4708 8.39924 13.4708 12.0001Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M20.5746 12C20.5746 15.3894 19.125 18.1381 17.3368 18.1381C15.5486 18.1381 14.099 15.3894 14.099 12C14.099 8.61057 15.5484 5.86182 17.3366 5.86182C19.1248 5.86182 20.5744 8.60969 20.5744 12"
                                                fill="white"
                                            />
                                            <path
                                                d="M23.4803 12.0003C23.4803 15.0364 22.9705 17.4991 22.3415 17.4991C21.7125 17.4991 21.203 15.037 21.203 12.0003C21.203 8.96355 21.7128 6.50146 22.3415 6.50146C22.9703 6.50146 23.4803 8.96333 23.4803 12.0003Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {/**/}
                            </a>

                            {/*]*/}
                        </div>
                    </div>
                    <div className="column-wrapper" data-v-c3851004="">
                        {/*[*/}
                        <div className="column" data-v-c3851004="">
                            <div className="column-title-control" data-v-c3851004="">
                                <div className="title" data-v-c3851004="">
                                    Sriverse
                                </div>
                                <div className="icon" data-v-c3851004="">
                                    <div className="kit-icon is-fill" data-v-c3851004="">
                                        <svg
                                            width={26}
                                            height={26}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.66675 10.8335L13.0001 15.1668L17.3334 10.8335"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="slide-up-down__container"
                                aria-hidden="true"
                                tabIndex={-1}
                                data-v-c3851004=""
                                style={{ "--content-height": "0" }}
                            >
                                <div className="column-links" data-v-c3851004="">
                                    {/*[*/}
                                    <a
                                        href="Venom_Whitepaper.pdf"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link column-link"
                                        data-v-c3851004=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Whitepaper
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="cdn-cgi/l/email-protection.html#8bfbf9cbfdeee5e4e6ffeee8e3a5e2e4"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link column-link"
                                        data-v-c3851004=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Media Inquiries
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    {/*]*/}
                                </div>
                            </div>
                            <div style={{}} className="divider" data-v-c3851004="" />
                        </div>
                        <div className="column" data-v-c3851004="">

                            <div
                                className="slide-up-down__container"
                                aria-hidden="true"
                                tabIndex={-1}
                                data-v-c3851004=""
                                style={{ "--content-height": "0" }}
                            >
                                <div className="column-links" data-v-c3851004="">
                                    {/*[*/}
                                    <a
                                        href="http://www.twitter.com/Sriverseio"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link column-link"
                                        data-v-c3851004=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Twitter
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="http://www.instagram.com/sriverse.io/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer-link column-link"
                                        data-v-c3851004=""
                                        data-v-03a024e4=""
                                    >
                                        <div className="text" data-v-03a024e4="">
                                            Instagram
                                        </div>
                                        <div className="icon" data-v-03a024e4="">
                                            <div className="kit-icon is-fill" data-v-03a024e4="">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                                        fill="white"
                                                        fillOpacity="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    {/*]*/}
                                </div>
                            </div>
                            <div style={{}} className="divider" data-v-c3851004="" />
                        </div>
                        <div className="column" data-v-c3851004="">
                            {/* <div className="column-title-control" data-v-c3851004="">
                <div className="title" data-v-c3851004="">
                  Whitepaper
                </div>
                <div className="icon" data-v-c3851004="">
                  <div className="kit-icon is-fill" data-v-c3851004="">
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.66675 10.8335L13.0001 15.1668L17.3334 10.8335"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div> */}
                            <div
                                className="slide-up-down__container"
                                aria-hidden="true"
                                tabIndex={-1}
                                data-v-c3851004=""
                                style={{ "--content-height": "0" }}
                            >

                            </div>
                            <div
                                style={{ display: "none" }}
                                className="divider"
                                data-v-c3851004=""
                            />
                        </div>
                        {/*]*/}
                    </div>
                    <div className="legal-block" data-v-c3851004="">
                        <div
                            className="footer-disclaimer"
                            data-v-c3851004=""
                            data-v-79c3f820=""
                        >
                            {" "}
                            Sriverse Foundation is licensed by UAE and dedicated to the development and launch of
                            the Venom blockchain, providing scalable and secure solutions for
                            real-world applications. To learn more about our policies, click
                            on{" "}
                            <a href="privacy-policy.html" className="link" data-v-79c3f820="">
                                Privacy&nbsp;Policy
                            </a>
                        </div>
                        <div
                            className="footer-copyright copyright"
                            data-v-c3851004=""
                            data-v-a6d462e3=""
                        >
                            Sriverse ©2023 All Rights Reserved
                        </div>
                    </div>
                </div>
                <div
                    className="kit-spot footer"
                    data-v-3a846a5e=""
                    data-v-c951ae60=""
                />
            </footer>

            <ToastContainer />
        </div>
    );
}

export default App;
