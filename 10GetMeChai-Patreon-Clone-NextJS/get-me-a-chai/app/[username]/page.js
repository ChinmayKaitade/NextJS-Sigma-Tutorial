import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full bg-red-50 relative">
        <img
          className="object-cover w-full h-[370px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-time=1743724800&token-hash=3jRRjnWnIycOk6k6K03qY-fepaDiVq5PShRw7Y2mnLQ%3D"
          alt="banner"
        />

        <div className="absolute -bottom-25 right-[45%]">
          <img
            className="rounded-full  border-4 border-white"
            width={140}
            height={140}
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1743724800&token-hash=6X6j0RMWCLK-95iBrKKoJ1QeSb0VqvnnyGCTLYOhZU8%3D"
            alt="cat"
          />
        </div>
      </div>

      <div className="info flex justify-center items-center my-24 flex-col gap-1">
        <div className="font-bold text-xl mt-2">@{params.username}</div>

        <div className="text-slate-400">Creating Animated art for VTT's</div>

        <div className="text-slate-300">
          17,101 members . 96 Posts . $17,360/release
        </div>

        <div className="payment flex gap-3 w-[85%] mt-10">
          <div className="supporters w-1/2 text-white  bg-slate-900 rounded-lg p-10">
            {/* show list of all the supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-4 flex gap-2 items-center">
                <img src="./avatar.gif" alt="user avatar" width={33} />
                <span>
                  Lakshay Donated <span className="font-bold">$30</span> with a
                  message "I will support you bro lots of ❤️‍🔥"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img src="./avatar.gif" alt="user avatar" width={33} />
                <span>
                  Arun Donated <span className="font-bold">$30</span> with a
                  message "I will support your chai brother!🤝"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img src="./avatar.gif" alt="user avatar" width={33} />
                <span>
                  Harry Donated <span className="font-bold">$30</span> with a
                  message "Lorem ipsum dolor, sit amet consectetur adipisicing.👋"
                </span>
              </li>
            </ul>
          </div>

          <div className="makePayment w-1/2  text-white bg-slate-900 rounded-lg p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex flex-col gap-2">
              {/* input for name and message */}
              <div>
                <input
                  type="text"
                  className="bg-slate-800 p-2 rounded-lg w-full"
                  placeholder="Enter Name"
                />
              </div>

              <input
                type="text"
                className="bg-slate-800 p-2 rounded-lg w-full"
                placeholder="Enter Message"
              />

              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>

            <div className="flex gap-2 mt-5">
              {/* choose from these amounts */}
              <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
