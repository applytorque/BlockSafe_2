import React, { useState } from "react";
import {
    connectToMetamask,
    getContract,
    getAccount,
    getTokenBalance,
    transferTokenToAdmin,
    transferSriTokenToUser,
    getAdminAccount,
} from "../config/wallet";

import bg5 from '../assets/bg5.jpg';

import { USDT, sriverseContract } from "../config/contracts";
import usdtABI from "../config/usdtABI.json";
import sriverseABI from "../config/sriverseABI.json";
import { toast } from "react-toastify";
import { ThreeCircles } from "react-loader-spinner";
const ADMIN_ACCOUNT = "0x3569feBDDf342769713c144D63440036658bD0ec";


export default function BuyCard() {
    const [amount, setAmount] = useState(0);
    const tokenList = ["WTRX", "BNB", "USDT"];
    const [selectedToken, setSelectedToken] = useState("USDT");
    const [loading, setLoading] = useState(false);

    const handleTokenChange = (event) => {
        setSelectedToken(event.target.value);
    };

    const handleBuyNode1Token = async () => {
        try {
            let connect = await connectToMetamask();

            let account = await getAccount();
            let tokenBalance = await getTokenBalance(account, usdtABI, USDT);
            let adminAccount = await getAdminAccount();

            let sriTokenBalance = await getTokenBalance(
                adminAccount,
                sriverseABI,
                sriverseContract
            );

            if (amount == 0) {
                toast.error("Enter Token Amount");
                return;
            }
            if (amount < 900) {
                toast.error("Token Amount is Minimum 900");
                setAmount(0);
                return;
            }
            console.log(
                "token balance is---->",
                tokenBalance,
                typeof tokenBalance,
                amount,
                typeof amount
            );

            if (parseInt(amount) > parseInt(tokenBalance)) {
                toast.error(`You don't have sufficient fund in this ${account}`);
                setAmount(0);
                return;
            }
            if (parseInt(amount) > parseInt(sriTokenBalance)) {
                toast.error("Insufficient fund in admin wallet");
                setAmount(0);
                return;
            }
            setLoading(true);
            let res = await transferTokenToAdmin(ADMIN_ACCOUNT, amount, account);
            console.log("res for token treansfer to admin", res);
            if (res == 1) {
                let res1 = await transferSriTokenToUser(account, amount);
                console.log("transfer to user account", res1);
                if (res1.status == true) {
                    toast.success("Transaction successful");
                    setLoading(false);
                } else {
                    toast.error("Transaction Failed,Please contact admin");
                    setLoading(false);
                }
            } else {
                setAmount(0);
                setLoading(false);
            }

            setLoading(false);
        } catch (e) {
            console.log("e is----->", e);
            setLoading(false);
            toast.error(e);
            setAmount(0);
        }
    };
    const handleBuyNode2Token = async () => {
        try {
            let connect = await connectToMetamask();

            let account = await getAccount();
            let tokenBalance = await getTokenBalance(account, usdtABI, USDT);
            let adminAccount = await getAdminAccount();

            let sriTokenBalance = await getTokenBalance(
                adminAccount,
                sriverseABI,
                sriverseContract
            );

            if (amount == 0) {
                toast.error("Enter Token Amount");
                return;
            }
            if (parseInt(amount) < 600) {
                toast.error("Token Amount is Minimum 600");
                setAmount(0);
                return;
            }

            if (parseInt(amount) > parseInt(tokenBalance)) {
                toast.error(`You don't have sufficient fund in this ${account}`);
                setAmount(0);
                return;
            }
            if (parseInt(amount) > parseInt(sriTokenBalance)) {
                toast.error("Insufficient fund in admin wallet");
                setAmount(0);
                return;
            }
            setLoading(true);
            let res = await transferTokenToAdmin(ADMIN_ACCOUNT, amount, account);
            console.log("res for token treansfer to admin", res);

            if (res == 1) {
                let res1 = await transferSriTokenToUser(account, amount);
                console.log("transfer to user account", res1);
                if (res1.status == true) {
                    toast.success("Transaction successful");
                    setLoading(false);
                } else {
                    toast.error("Transaction Failed,Please contact admin");
                    setLoading(false);
                }
            } else {
                setLoading(false);
                setAmount(0);
            }
            setLoading(false);
        } catch (e) {
            console.log("e is----->", e);
            toast.error(e);
            setLoading(false);
            setAmount(0);
        }
    };
    const handleTokenAmount = (event) => {
        setAmount(event.target.value);
        console.log("amount is----->", event.target.value);
    };
    return (
        <>
            {loading ? (
                <div className="spinner">
                    <ThreeCircles
                        height="100"
                        width="100"
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                    />
                </div>
            ) : (
                console.log("hello")
            )}
            <>
                <div
                    className="boundaries-block default-margin mb-0"
                    data-v-b87b2b90=""
                    data-v-f0c16b6f=""
                >
                    <div className="wrapper" data-v-f0c16b6f="">
                        <h2 className="title" data-v-f0c16b6f="">
                            Node Packages
                        </h2>
                        <div className="subtitle" data-v-f0c16b6f="">
                            {" "}
                            To bulid a solid digital stake, you need to know where you're
                            investing. Find our node system that best suits your financial
                            intersts.{" "}
                        </div>
                    </div>

                    <div className="md:flex block wrapper mx-auto w-[95%]" data-v-f0c16b6f="">




                        <div className="relative border border-gray-300 rounded-xl overflow-hidden shadow-2xl shadow-white md:w-[380px] w-[350px] mx-auto mt-10 h-[630px] md:-mr-2">
                            {/* iPhone side borders */}

                            <div className="absolute top-0 left-0 bg-black h-full w-4"></div>
                            <div className="absolute top-0 right-0 bg-black h-full w-4"></div>

                            {/* iPhone top bar with notch */}
                            <div className="bg-black h-4 w-full flex justify-center items-center relative z-10">
                                <div className="bg-black h-10 w-20 rounded-t-lg "></div>
                            </div>

                            {/* iPhone screen */}

                            <div className=" rounded-xl  h-[570px] text-white">
                                <div className='absolute z-0 mx-auto -mt-3'>
                                    <img src={bg5} alt="bg" className='w-[380px] h-[600px] p-4' />
                                </div>

                                <div className='relative z-1 p-8'>
                                    <h2 className="text-xl md:text-xl font-bold mb-8 text-center mt-4 ">
                                        <span className="text-white">
                                            NODE SUBSCRIPTION
                                        </span>
                                    </h2>
                                    <h2 className="text-lg text-white mb-2">5000-100000</h2>
                                    <p className="text-white mb-6 text-sm">
                                        Return (Invest Amount * 3/900) USD Every Day
                                    </p>
                                    <hr className="my-4 border-gray-300" />
                                    <p className="text-white mb-6">900* Day Contract</p>
                                    <hr className="my-4 border-gray-300" />
                                    <p className="text-white mb-6">
                                        Earn Total (Invest Amount * 3) USD
                                    </p>
                                    <hr className="my-4 border-gray-300" />
                                    <label className="text-white mb-3 ">
                                        Value<span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center mt-2">
                                        <div className="w-1/2 ">
                                            <h2 className="text-white">Select Token</h2>
                                            <select
                                                className="input w-1/2 h-10 mt-1 rounded-md text-gray-600 bg-white border"
                                                value={selectedToken}
                                                onChange={handleTokenChange}
                                            >
                                                {tokenList.map((token, index) => (
                                                    <option key={index} value={token}>
                                                        {token}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="w-[200px] flex items-center -ml-12 text-black mt-7">
                                            <input
                                                placeholder="Enter Amount"
                                                className="input w-full p-2 text-black border rounded-md"
                                                type="number"
                                                onChange={handleTokenAmount}
                                            />
                                            <button className="btn_10 -ml-[82px]">
                                                <span className=' font-medium text-black bh-white'> x 10 = 0</span>
                                            </button>
                                        </div>
                                    </div>
                                    <a className="button" data-v-6ee8dd1e="">
                                        <button
                                            className="w-1/3 bg-gradient-to-r from-green-800 to-blue-500 text-white text-lg py-3 rounded-lg mt-10 "
                                            onClick={handleBuyNode2Token}
                                        >
                                            Buy Now
                                        </button>
                                    </a>
                                </div>
                            </div>

                            {/* iPhone home button */}
                            <div className="bg-gray-500 h-6 w-6 rounded-full mx-auto mt-2"></div>
                        </div>









                        <div className="relative border border-gray-300 rounded-xl overflow-hidden shadow-2xl shadow-white md:w-[380px] w-[350px] mx-auto mt-10 h-[630px]">
                            {/* iPhone side borders */}
                            <div className="absolute top-0 left-0 bg-black h-full w-4"></div>
                            <div className="absolute top-0 right-0 bg-black h-full w-4"></div>

                            {/* iPhone top bar with notch */}
                            <div className="bg-black h-4 w-full flex justify-center items-center relative z-10">
                                <div className="bg-black h-10 w-20 rounded-t-lg"></div>
                            </div>

                            {/* iPhone screen */}
                            <div className=" rounded-xl h-[570px] text-white">
                                <div className='absolute z-0 mx-auto -mt-3'>
                                    <img src={bg5} alt="bg" className='w-[380px] h-[600px] p-4' />
                                </div>

                                <div className='relative z-1 p-8'>
                                <h2 className="text-xl md:text-xl font-bold mb-8 text-center mt-4">
                                    NODE SUBSCRIPTION
                                </h2>
                                <h2 className="text-lg text-white mb-2">5000-100000</h2>
                                <p className="text-white mb-6 text-sm">
                                    Return (Invest Amount * 3/600) USD Every Day
                                </p>
                                <hr className="my-4 border-gray-300" />
                                <p className="text-white mb-6">600* Day Contract</p>
                                <hr className="my-4 border-gray-300" />
                                <p className="text-white mb-6">
                                    Earn Total (Invest Amount * 3) USD
                                </p>
                                <hr className="my-4 border-gray-300" />
                                <label className="text-white mb-3">
                                    Value<span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/2">
                                        <h2 className="text-white">Select Token</h2>
                                        <select
                                            className="input w-1/2 h-10 mt-1 rounded-md text-gray-600 bg-white border"
                                            value={selectedToken}
                                            onChange={handleTokenChange}
                                        >
                                            {tokenList.map((token, index) => (
                                                <option key={index} value={token}>
                                                    {token}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-[200px] flex items-center -ml-12 text-black mt-7">
                                        <input
                                            placeholder="Enter Amount"
                                            className="input full p-2 text-black border rounded-md"
                                            type="number"
                                            onChange={handleTokenAmount}
                                        />
                                        <button className="btn_10 -ml-20">
                                            <span className="font-medium text-black"> x 10 = 0</span>
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="w-1/3 bg-gradient-to-r from-green-800 to-blue-500 text-white text-lg py-3 rounded-lg mt-10 mx-auto "
                                    onClick={handleBuyNode2Token}
                                >
                                    Buy Now
                                </button>
                            </div>

                            {/* iPhone home button */}
                            <div className="bg-gray-500 h-6 w-6 rounded-full mx-auto mt-2"></div>
                        </div>
                        </div>
                    </div>



                    <div
                        className="kit-spot right bottom"
                        data-v-f0c16b6f=""
                        data-v-c951ae60=""
                    />
                </div>
                {/* <div
                    className="ecosystem-block default-margin"
                    data-v-b87b2b90=""
                    data-v-683b6745=""
                >
                    <div
                        className="kit-spot left bottom"
                        data-v-683b6745=""
                        data-v-c951ae60=""
                    />
                </div> */}
            </>
        </>
    );
}
