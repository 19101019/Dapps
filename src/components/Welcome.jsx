import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Card from "./Card";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";
import coin from "../../images/coin.svg";
import "../css/welcome.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-regular text-white";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
  return (
    <div className="lg:flex lg:justify-between items-start lg:pr-20 lg:mt-20">
      <div className="flex lg:flex-row flex-col lg:items-start tems-center lg:justify-between justify-center  md:p-20 py-12">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl sm:text-5xl text-white lg:text-left text-center">
            Predict BNB <br />
            Earn Unlimited
          </h1>
          <p className="mt-5 text-white font-regular lg:text-left text-center lg:w-9/12 w-11/12 text-base ">
            Explore the crypt world. Buy and sell crypto currencies easily on
            Krypto .
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-bold">Connect Wallet</p>
            </button>
          )}
          {/* {currentAccount && <p className="text-white">{currentAccount}</p>} */}
        </div>
      </div>
      <div>
        <div className="hidden sm:block">
          <TradingViewWidget
            width="700px"
            height="300px"
            symbol="BINANCE:BNBUSDT"
            theme={Themes.DARK}
            locale="en-US"
          />
        </div>
        <div className="sm:hidden">
          <TradingViewWidget
            width="300px"
            height="300px"
            symbol="BINANCE:BNBUSDT"
            theme={Themes.DARK}
            locale="en-US"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
