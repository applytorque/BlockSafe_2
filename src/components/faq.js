import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const Faq = () => {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);


    const handleClick1 = () => {
        setState1(!state1);
    }
    const handleClick2 = () => {
        setState2(!state2);
    }
    const handleClick3 = () => {
        setState3(!state3);
    }
    const handleClick4 = () => {
        setState4(!state4);
    }
    return (
        <>
            <div
                className="block-wrapper default-margin"
                data-v-b87b2b90=""
                data-v-e61416f2=""
            >
                <div className="faq-block wrapper" data-v-e61416f2="">
                    <div className="text-section" data-v-e61416f2="">
                        <div className="title" data-v-e61416f2="">
                            Frequently asked <br data-v-e61416f2="" />
                            questions
                        </div>
                        <div className="subtitle" data-v-e61416f2="">
                            General about METAVAULT
                        </div>
                        <a
                            href="/"
                            rel="noopener noreferrer"
                            target="_blank"
                            data-v-e61416f2=""
                        >
                            <button
                                className="bg-gradient-to-r  from-purple-700 to-pink-500 text-white
                                py-4 px-6 rounded-lg mt-1 hover:from-blue-600
                                            hover:via-purple-700 hover:to-blue-300"
                                data-v-e61416f2=""
                                data-v-d855b919=""
                            >
                                <div className="label" data-v-d855b919="">
                                    Ask us
                                </div>
                            </button>
                        </a>
                    </div>
                    <div
                        className="faq-component"
                        data-v-e61416f2=""
                        data-v-996c2376=""
                    >
                        <div className="is-open faq-item" data-v-996c2376="">
                            <div className="item-head" data-v-996c2376="">
                                <div className="head-name" data-v-996c2376="">
                                    What is the target market?
                                </div>
                                {
                                    state1 ? <div> <FaMinus onClick={handleClick1} /></div> : <div> <FaPlus onClick={handleClick1} /></div>
                                }
                            </div>
                            <div
                                className="slide-up-down__container"
                                aria-hidden="false"
                                data-v-996c2376=""
                                style={{ "--content-height": "0" }}
                            >
                                {
                                    state1 ? <div className="item-content" data-v-996c2376="">
                                        Web3 organisations behind nearly 24000 cryptocurrencies. Multi device wallet for More than 60 million cryptocurrency users. Business wallet for more than 15000 companies accepting cryptocurrencies. Many Web3 organisations, including Uniswap, Maker DAO, Aave, and Bit DAO use Gnosis Safe for their custody needs.
                                    </div> : ""
                                }

                            </div>
                            <div className="splitter" data-v-996c2376="">
                                <div className="splitter-line" data-v-996c2376="" />
                                <div className="splitter-gradient-line" data-v-996c2376="" />
                            </div>
                        </div>
                        <div className="faq-item" data-v-996c2376="">
                            <div className="item-head" data-v-996c2376="">
                                <div className="head-name" data-v-996c2376="">
                                    Can it be used by Individuals ?
                                </div>
                                {
                                    state2 ? <FaMinus onClick={handleClick2} /> : <FaPlus onClick={handleClick2} />
                                }
                            </div>
                            <div
                                className="slide-up-down__container"
                                aria-hidden="true"
                                tabIndex={-1}
                                data-v-996c2376=""
                                style={{ "--content-height": "0" }}
                            >
                                {
                                    state2 ? <div className="item-content" data-v-996c2376="">
                                        The vaults can be created by individuals with different wallets and can also be operated with multiple devices.
                                    </div> : ''
                                }

                            </div>
                            <div className="pointer splitter" data-v-996c2376="">
                                <div className="splitter-line" data-v-996c2376="" />
                                <div className="splitter-gradient-line" data-v-996c2376="" />
                            </div>
                        </div>
                        <div className="faq-item" data-v-996c2376="">
                            <div className="item-head" data-v-996c2376="">
                                <div className="head-name" data-v-996c2376="">
                                    Is there any fee on usage?
                                </div>
                                {
                                    state3 ? <FaMinus onClick={handleClick3} /> : <FaPlus onClick={handleClick3} />
                                }
                            </div>
                            <div
                                className="slide-up-down__container"
                                aria-hidden="true"
                                tabIndex={-1}
                                data-v-996c2376=""
                                style={{ "--content-height": "0" }}
                            >
                                {
                                    state3 ? <div className="item-content" data-v-996c2376="">
                                        There is a gas fee on vault deployment based on EquinoxMain Defi Protocol. On transactions, governance proposals, and members addition/removal platform deducts a nominal fee over and above gas fee. To raise funds using Subscription swap platform charges a total of 3.2% of the total funds raised.
                                    </div> : ''
                                }

                            </div>
                            <div className="pointer splitter" data-v-996c2376="">
                                <div className="splitter-line" data-v-996c2376="" />
                                <div className="splitter-gradient-line" data-v-996c2376="" />
                            </div>
                        </div>
                        <div className="faq-item" data-v-996c2376="">
                            <div className="item-head" data-v-996c2376="">
                                <div className="head-name" data-v-996c2376="">
                                    Is there any scaling plan for the application ?
                                </div>
                                {
                                    state4 ? <FaMinus onClick={handleClick4} /> : <FaPlus onClick={handleClick4} />
                                }
                            </div>
                            <div
                                className="slide-up-down__container"
                                aria-hidden="true"
                                tabIndex={-1}
                                data-v-996c2376=""
                                style={{ "--content-height": "0" }}
                            >
                                {
                                    state4 ? <div className="item-content" data-v-996c2376="">
                                        Team will integrate some of the most popular decentralized finance apps and protocols maintained on different blockchain networks and will also develop applications for windows, Mac, android and iOS for better user experience.
                                    </div> : ''
                                }

                            </div>
                            <div className="pointer splitter" data-v-996c2376="">
                                <div className="splitter-line" data-v-996c2376="" />
                                <div className="splitter-gradient-line" data-v-996c2376="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <>
                <div
                    className="publications-block wrapper extend publications-margin"
                    data-v-b87b2b90=""
                    data-v-311f16dc=""
                >
                    <a
                        href="https://cointelegraph.com/news/abu-dhabi-based-venom-foundation-launches-1b-fund-for-web3-and-blockchain"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="publication-item"
                        data-v-311f16dc=""
                    >
                        <img
                            src="_nuxt/1.29fa28b6.webp"
                            alt="Publication item"
                            data-v-311f16dc=""
                        />
                    </a>
                    <a
                        href="https://techcrunch.com/2023/01/11/venom-foundation-and-iceberg-capital-launch-1b-venture-fund-to-invest-in-web3"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="publication-item"
                        data-v-311f16dc=""
                    >
                        <img
                            src="_nuxt/2.6c23e285.webp"
                            alt="Publication item"
                            data-v-311f16dc=""
                        />
                    </a>
                    <a
                        href="https://www.reuters.com/markets/currencies/venom-iceberg-set-up-1-bln-fund-invest-blockchain-firms-amid-crypto-winter-2023-01-11"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="publication-item"
                        data-v-311f16dc=""
                    >
                        <img
                            src="_nuxt/3.527c6779.webp"
                            alt="Publication item"
                            data-v-311f16dc=""
                        />
                    </a>
                    <a
                        href="https://www.investing.com/news/cryptocurrency-news/abu-dhabibased-venom-foundation-launches-1b-fund-for-web3-and-blockchain-2978371"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="publication-item"
                        data-v-311f16dc=""
                    >
                        <img
                            src="_nuxt/4.6affe21f.webp"
                            alt="Publication item"
                            data-v-311f16dc=""
                        />
                    </a>
                    <a
                        href="https://www.theblock.co/post/200959/uae-investor-groups-launch-billion-dollar-web3-fund"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="publication-item"
                        data-v-311f16dc=""
                    >
                        <img
                            src="_nuxt/5.63fef169.webp"
                            alt="Publication item"
                            data-v-311f16dc=""
                        />
                    </a>
                    <a
                        href="https://www.entrepreneur.com/en-in/technology/the-first-adgm-licensed-blockchain-is-also-the-most/436898"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="publication-item"
                        data-v-311f16dc=""
                    >
                        <img
                            src="_nuxt/6.fc49b16a.webp"
                            alt="Publication item"
                            data-v-311f16dc=""
                        />
                    </a>
                    <a
                        href="https://thedefiant.io/venom-foundation-in-partnership-with-iceberg-capital-launches-1-billion-venom-ventures-fund"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="publication-item"
                        data-v-311f16dc=""
                    >
                        <img
                            src="_nuxt/7.5c104520.webp"
                            alt="Publication item"
                            data-v-311f16dc=""
                        />
                    </a>
                    <a
                        href="https://news.bitcoin.com/venom-foundation-and-hub71-partner-to-accelerate-growth-and-adoption-of-blockchain-technologies-from-abu-dhabi"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="publication-item"
                        data-v-311f16dc=""
                    >
                        <img
                            src="_nuxt/8.f6e79674.webp"
                            alt="Publication item"
                            data-v-311f16dc=""
                        />
                    </a>
                </div>
                <div
                    className="stay-ahead-block wrapper extend default-margin"
                    data-v-b87b2b90=""
                    data-v-f1d976bb=""
                >
                    <div className="title" data-v-f1d976bb="">
                        Subscribe To Our Newsletter
                    </div>
                    <div className="subtitle" data-v-f1d976bb="">
                        Stay up to date for the latest crypto news, courses &amp; more!
                    </div>
                    <div className="email-and-button" data-v-f1d976bb="">
                        <div
                            className="email-compose email-input"
                            data-v-f1d976bb=""
                            data-v-5acf3522=""
                        >
                            <div
                                className="kit-email-input email-input"
                                data-v-5acf3522=""
                                data-v-e4e68729=""
                            >
                                <input
                                    defaultValue=""
                                    placeholder="Your email"
                                    type="email"
                                    inputMode="email"
                                    data-v-e4e68729=""
                                />
                            </div>
                        </div>
                        <button
                            className="bg-gradient-to-r  from-purple-700 to-pink-500 text-white
                                                      py-4 px-6 rounded-lg mt-1 is-disabled hover:from-blue-600
                                            hover:via-purple-700 hover:to-blue-300"
                            data-v-f1d976bb=""
                            data-v-d855b919=""
                        >
                            <div className="label" data-v-d855b919="">
                                Subscribe
                            </div>
                        </button>
                    </div>
                </div>
            </>
        </>
    )
}

export default Faq;