import React from 'react';
import Box from '@mui/material/Box';
import play from '../play.svg';
import arrow from '../arrow.svg';
import play_white from '../../images/play_white.svg';
import "../css/card.css"
import expired from '../../images/expired.svg';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,

  color: '#9a6aff',
}));

export default function Card({ type }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);r
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      {type === "live" && (
        <div
          className="flex flex-col mb-10 card_glassmorphism w-1/4 h-96 font-bold full_width"
          style={{
            width: "310px",
          }}
        >
          <div className="flex justify-between progress  p-2  ">
            <div className="flex  ">
              <img src={play} className="mr-1 " alt="" />

              <span className="font-extrabold text-lg capitalize">
                {type === "live" ? "" : type}
              </span>
            </div>
            <span className="font-extrabold text-lg">#7656</span>
          </div>
          <div className="color-[#9a6aff]">
            <BorderLinearProgress
              variant="determinate"
              color="inherit"
              value={progress}
            />
          </div>
          <div className="flex flex-col h-full items-center justify-end">
            <div>
              <svg
                height="65px"
                width="240px"
                viewBox="0 0 240 65"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-5a69fd5e-0 bcGsoh"
              >
                <g filter="url(#filter0_i)">
                  <path
                    d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z"
                    fill="#353547"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i"
                    x="10.0001"
                    y="1.03125"
                    width="224"
                    height="62.9688"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
              <div className="webkit">
                {/* <div className="webkit">  text-center items-center flex flex-col left-0 h-full absolute text-white w-full top-0 justify-center */}
                <div className="text-sm text-[#31D0AA] font-bold">Up</div>
                <div className="flex">
                  <div className="text-xs flex justify-around mt-[2px] ">
                    <div className="text-white text-medium">1.61 x</div>
                    <div className="text-white font-normal mx-1">Payout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center antialiased items-center h-full">
            <div className="flex flex-col  justify-around h-11/12 bg-[#27262c] rounded-[14px] p-[16px] border-2 border-[#ED4B9E]   w-11/12">
              <div>
                <span className="text-[#8a94c6] text-xs">LAST PRICE</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-3xl text-[#31d0aa] underline decoration-dotted decoration-[#b8add2] text-2xl">
                    $373.50
                  </span>
                </div>
                <div className="flex items-center bg-[#31d0aa] p-1 rounded-lg  justify-center">
                  <img src={arrow} alt="" />
                  <span className="text-white ml-1 text-xl">$0.087</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="text-slate-50 text-xs">Locked Price:</span>
                  <span className="text-slate-50 text-xs">$373.904</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-white text-sm">Prize Pool:</span>
                  <span className="text-white text-sm">$373.904</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-start">
            <div>
              <svg
                height="65px"
                width="240px"
                viewBox="0 0 240 65"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-5a69fd5e-0 bcGsoh"
              >
                <g filter="url(#filter0_i)">
                  <path
                    d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z"
                    fill="#ED4B9E"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i"
                    x="10.0001"
                    y="1"
                    width="224"
                    height="62.9688"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="webkit2">
              {/* <div className="webkit">  text-center items-center flex flex-col left-0 h-full absolute text-white w-full top-0 justify-center */}
              <div className="text-sm text-white font-bold">Down</div>
              <div className="flex">
                <div className="text-xs flex justify-around mt-[2px] ">
                  <div className="text-white text-medium">2.93 x</div>
                  <div className="text-white font-normal mx-1">Payout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "expired" && (
        <div
          className="flex flex-col mb-10 card_glassmorphism w-1/4 h-96 font-bold backdrop-opacity-60 backdrop-invert full_width"
          style={{
            width: "310px",
          }}
        >
          <div className="flex justify-between card_glassmorphism progress text-black p-2 bg-[#9a6aff]">
            <div className="flex  ">
              <img src={expired} className="mr-1 " alt="" />
              <span className="font-extrabold text-black text-lg capitalize">
                {type === "live" ? "LIVE" : type}
              </span>
            </div>
            <span className="font-extrabold text-lg">#7656</span>
          </div>
          <div className="flex flex-col h-full items-center justify-end bg-[#232327]">
            <div>
              <svg
                height="65px"
                width="240px"
                viewBox="0 0 240 65"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-5a69fd5e-0 bcGsoh"
              >
                <g filter="url(#filter0_i)">
                  <path
                    d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z"
                    fill="#353547"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i"
                    x="10.0001"
                    y="1.03125"
                    width="224"
                    height="62.9688"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
              <div className="webkit">
                {/* <div className="webkit">  text-center items-center flex flex-col left-0 h-full absolute text-white w-full top-0 justify-center */}
                <div className="text-sm text-[#31D0AA] font-bold">Up</div>
                <div className="flex">
                  <div className="text-xs flex justify-around mt-[2px] ">
                    <div className="text-white text-medium">1.61 x</div>
                    <div className="text-white font-normal mx-1">Payout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#232327] antialiased items-center h-full rounded-b-xl">
            <div className="flex flex-col  justify-around h-11/12  bg-[#27262c] rounded-[14px] p-[16px] border-2 border-[#ED4B9E]  w-11/12">
              <div>
                <span className="text-[#8a94c6] text-xs">LAST PRICE</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-3xl text-[#31d0aa] underline decoration-dotted decoration-[#b8add2] text-2xl">
                    $373.50
                  </span>
                </div>
                <div className="flex items-center bg-[#31d0aa] p-1 rounded-lg  justify-center">
                  <img src={arrow} alt="" />
                  <span className="text-white ml-1 text-xl">$0.087</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="text-slate-50 text-xs">Locked Price:</span>
                  <span className="text-slate-50 text-xs">$373.904</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-white text-sm">Prize Pool:</span>
                  <span className="text-white text-sm">$373.904</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-start bg-[#232327]">
            <div>
              <svg
                height="65px"
                width="240px"
                viewBox="0 0 240 65"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-5a69fd5e-0 bcGsoh"
              >
                <g filter="url(#filter0_i)">
                  <path
                    d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z"
                    fill="#ED4B9E"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i"
                    x="10.0001"
                    y="1"
                    width="224"
                    height="62.9688"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="webkit2">
              {/* <div className="webkit">  text-center items-center flex flex-col left-0 h-full absolute text-white w-full top-0 justify-center */}
              <div className="text-sm text-white font-bold">Down</div>
              <div className="flex">
                <div className="text-xs flex justify-around mt-[2px] ">
                  <div className="text-white text-medium">2.93 x</div>
                  <div className="text-white font-normal mx-1">Payout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {type === "next" && (
        <div
          className="flex flex-col mb-10 card_glassmorphism w-1/4 h-96 font-bold full_width"
          style={{
            width: "310px",
          }}
        >
          <div className="flex justify-between card_glassmorphism progress p-2 text-white bg-[#9a6aff] ">
            <div className="flex  ">
              <img src={play_white} className="mr-1 " alt="" />
              <span className="font-extrabold text-lg capitalize">
                {type === "live" ? "LIVE" : type}
              </span>
            </div>
            <span className="font-extrabold text-lg">#7656</span>
          </div>
          <div className="flex flex-col h-full items-center justify-end">
            <div>
              <svg
                height="65px"
                width="240px"
                viewBox="0 0 240 65"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-5a69fd5e-0 bcGsoh"
              >
                <g filter="url(#filter0_i)">
                  <path
                    d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z"
                    fill="#31D0AA"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i"
                    x="10.0001"
                    y="1.03125"
                    width="224"
                    height="62.9688"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
              <div className="webkit">
                {/* <div className="webkit">  text-center items-center flex flex-col left-0 h-full absolute text-white w-full top-0 justify-center */}
                <div className="text-sm text-[#31D0AA] font-bold">Up</div>
                <div className="flex">
                  <div className="text-xs flex justify-around mt-[2px] ">
                    <div className="text-white text-medium">1.61 x</div>
                    <div className="text-white font-normal mx-1">Payout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center antialiased items-center h-full">
            <div className="flex flex-col  justify-around h-11/12 bg-[#27262c] rounded-[14px] p-[16px] border-2 border-[#31d0aa] w-11/12">
              <div className="flex justify-between">
                <span className="text-white ">Prizing Pool</span>
                <span className="text-white ">2.818 BNB</span>
              </div>
              <div className="flex flex-col items-center p-1 justify-center w-full mt-1">
                <button className="text-white bg-[#31d0aa] text-lg px-3 py-1 rounded-lg my-1 mx-1 w-full">
                  Enter Up
                </button>
                <button className="text-white bg-[#ED4B9E] text-lg px-3 py-1 rounded-lg my-1 mx-1 w-full">
                  Enter Down
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center justify-start">
            <div>
              <svg
                height="65px"
                width="240px"
                viewBox="0 0 240 65"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-5a69fd5e-0 bcGsoh"
              >
                <g filter="url(#filter0_i)">
                  <path
                    d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z"
                    fill="#353547"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i"
                    x="10.0001"
                    y="1"
                    width="224"
                    height="62.9688"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="webkit2">
              {/* <div className="webkit">  text-center items-center flex flex-col left-0 h-full absolute text-white w-full top-0 justify-center */}
              <div className="text-sm text-white font-bold">Down</div>
              <div className="flex">
                <div className="text-xs flex justify-around mt-[2px] ">
                  <div className="text-white text-medium">2.93 x</div>
                  <div className="text-white font-normal mx-1">Payout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
