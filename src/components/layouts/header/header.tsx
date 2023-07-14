import * as React from "react";
import { FcGlobe, FcPortraitMode, FcTimeline } from "react-icons/fc";

type HeaderProps = {
  //
};

const Header: React.FC<any> = () => {
  return <>
    <nav className="fixed z-10 top-0 bg-white w-full flex shadow justify-between items-center px-8 h-20">
      {/* <!-- logo --> */}
      <div className="inline-flex">
          <a className="_o6689fn" href="/">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
          </a>
      </div>

      {/* <!-- search bar --> */}
      <div className="relative hidden sm:block flex-shrink flex-grow-0">
          <input type="text" className="bg-purple-white bg-gray-100 rounded-lg border-0 p-3 w-full" placeholder="Search somthing..." style={{minWidth: 400}} />
          <div className="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
          </div>
      </div>

      {/* <!-- login --> */}
      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
        
          <div className="flex mr-4 items-center">
            <div className="block relative">
              <button type="button" className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
                <div className="flex items-center h-5">
                    <FcGlobe />
                </div>
              </button>
            </div>
          </div>

          <div className="block">
              <div className="inline relative">
                  <button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                      <div className="pl-1 flex justify-center items-center">
                          <FcTimeline />
                      </div>

                      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                          <FcPortraitMode />
                      </div>
                  </button>
              </div>
          </div>
        </div>
      </div>
    </nav>
  </>;
};

export default Header;
