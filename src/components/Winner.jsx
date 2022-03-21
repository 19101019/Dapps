import React, { useContext } from "react";
import Card from "./Card";
import { TransactionContext } from "../context/TransactionContext";

const Winner = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex flex-col py-20 md:w-full">
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl font-bold text-teal-400">Leaderboard</p>
      </div>
      <div className="w-100 flex overflow-auto md:items-center md:justify-center md:p-10 py-12 px-4">
        <div className="border-2 border-gray-600 rounded-lg shadow-2x py-5">
          <table className="overflow-auto text-white md:pt-10">
            <thead className="border-b border-gray-600 pb-5">
              <tr className="text-purple-400 font-bold">
                <th className="px-10 py-5">RANK</th>
                <th className="px-10">USER</th>
                <th className="px-10">NET WINNINGS (BNB)</th>
                <th className="px-10">WIN RATE</th>
                <th className="px-10">ROUNDS WON</th>
                <th className="px-10">ROUNDS PLAYED</th>
              </tr>
            </thead>
            <tbody className="font-bold">
              <tr className="text-center border-b-2 border-gray-600 border-dotted">
                <td className="text-yellow-400 text-2xl pb-5">#1</td>
                <td>
                  <a
                    href="#"
                    className="hover:underline hover:text-teal-400 text-cyan-400"
                  >
                    0x49...fc59
                  </a>
                </td>
                <td className="px-10 text-right">
                  <p className="text-green-500">+150.861554</p>
                  <p className="text-gray-300 font-normal text-[12px]">
                    ~$56,514.01
                  </p>
                </td>
                <td>71.88%</td>
                <td>23</td>
                <td>32</td>
              </tr>
              <tr className="px-10 text-center my-10 border-b-2 border-gray-600 border-dotted">
                <td className="text-gray-300 text-2xl pb-5">#2</td>
                <td>
                  <a
                    href="#"
                    className="hover:underline hover:text-teal-400 text-cyan-400"
                  >
                    0x49...fc59
                  </a>
                </td>
                <td className="px-10 text-right">
                  <p className="text-green-500">+150.861554</p>
                  <p className="text-gray-300 font-normal text-[12px]">
                    ~$56,514.01
                  </p>
                </td>
                <td>71.88%</td>
                <td>23</td>
                <td>32</td>
              </tr>
              <tr className=" text-center">
                <td className=" text-amber-700 text-2xl">#3</td>
                <td>
                  <a
                    href="#"
                    className="hover:underline hover:text-teal-400 text-cyan-400"
                  >
                    0x49...fc59
                  </a>
                </td>
                <td className="px-10 text-right">
                  <p className="text-green-500">+150.861554</p>
                  <p className="text-gray-300 font-normal text-[12px]">
                    ~$56,514.01
                  </p>
                </td>
                <td>71.88%</td>
                <td>23</td>
                <td>32</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Winner;
