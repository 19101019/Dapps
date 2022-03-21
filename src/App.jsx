import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  Winner,
  Loader,
} from "./components";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Card from "./components/Card";
import Carousel from "react-elastic-carousel";
import coin from "../images/coin.svg";
import card from "../images/card.svg";
import left from "../images/left.svg";
import right from "../images/right.svg";
import clock from "../images/clock.svg";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1800, itemsToShow: 5 },
];

const App = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <div className="flex justify-between lg:px-12 md:px-10 sm:px-0 items-center">
          <div className="flex items-center w-1/2 relative">
            <div className="flex justify-center items-center z-10 ">
              <img src={coin} alt="" />
            </div>
            <div className="bg-[#1d1d22] p-2 pl-10 ml-10 sm:ml-7  rounded-xl flex items-center absolute">
              <span className="text-white lg:text-3xl md:text-2xl sm:text-xs font-bold mr-2">
                BNBUSD
              </span>
              <span className="text-white lg:text-xl md:text-lg sm:text-xs lg:block md:block sm:hidden">
                $374.744
              </span>
            </div>
          </div>
          {/* <div className="flex items-center mr-auto relative">
            <button className="bg-[#1d1d22] w-28  rounded-xl cursor-pointer absolute right-0 ">
              <img src={left} className="cursor-pointer" alt="" />
            </button>
            <div className="z-10">
              <img src={card} alt="" />
            </div>
            <button className="bg-[#1d1d22] w-28 rounded-xl absolute  flex justify-end">
              <img src={right} className="" alt="" />
            </button>
          </div> */}
          <div className="flex justify-between ">
            <div className="flex items-center relative ">
              <div className="bg-[#27262c] p-2 rounded-2xl absolute left-0  pr-10">
                <span className="text-[#9a6aff] text-2xl mx-4  ">03:45</span>
                <span className="text-white">5m</span>
              </div>
              <div className="flex justify-between items-center ml-32 z-10">
                <div className="w-20 mx-2">
                  <img src={clock} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel
          pagination={false}
          className="lg:p-10 md:p-10 sm:p-2 lg:my-0 md:my-0 sm:my-4"
          breakPoints={breakPoints}
        >
          <Card type="expired" />
          <Card type="expired" />
          <Card type="live" />
          <Card type="next" />
          <Card type="later" />
          <Card type="later" />
          <Card type="later" />
        </Carousel>

        {/* <TradingViewWidget
          width='700px'
          height='300px'
          symbol='BINANCE:BNBUSDT'
          theme={Themes.DARK}
          locale='en-US'
        /> */}
        <Winner />
      </div>

      {/* <Services />
      <Transactions /> */}

      <Footer />
    </div>
  );
};

export default App;
