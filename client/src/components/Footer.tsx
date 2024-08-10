import React from "react";

const Footer = () => {
  return (
    <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative rounded-3xl">
      <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        {/* Company Info Section */}
        <div className="p-5 sm:w-4/12">
          <h3 className="font-bold text-xl text-indigo-600 mb-4">Company name</h3>
          <p className="text-gray-500 text-sm mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex">
            <a href="/#" className="w-6 mx-1">
              {/* Social Icon */}
              <svg
                className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Facebook"
                  d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                    5.373,-12 12,-12c6.627,0 12,5.373
                    12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                    0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                    -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                ></path>
              </svg>
            </a>
            {/* Repeat for other social icons */}
          </div>
        </div>

        {/* Recent Blogs Section */}
        <div className="p-5 sm:w-5/12 flex flex-col">
          <div className="text-sm uppercase text-indigo-600 font-bold mb-5">Recent Blogs</div>
          <div className="flex mb-3">
            <div
              className="h-20 w-3/12 bg-cover"
              style={{
                backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')",
              }}
              title="Woman holding a mug"
            ></div>
            <div className="pl-3 w-9/12">
              <div className="font-bold text-sm">The Coldest Sunset</div>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex mb-3">
            <div
              className="h-20 w-3/12 bg-cover"
              style={{
                backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')",
              }}
              title="Woman holding a mug"
            ></div>
            <div className="pl-3 w-9/12">
              <div className="font-bold text-sm">The Coldest Sunset</div>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-indigo-600 font-bold mb-5">Instagram</div>
          <ul className="grid grid-cols-2 gap-5">
            <li>
              <img
                src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Instagram Image 1"
                className="w-full"
              />
            </li>
            <li>
              <img
                src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Instagram Image 2"
                className="w-full"
              />
            </li>
            <li>
              <img
                src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Instagram Image 3"
                className="w-full"
              />
            </li>
            <li>
              <img
                src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Instagram Image 4"
                className="w-full"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>© Copyright 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
