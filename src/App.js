import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (<>
      <div>
        <button
          className="block px-10 p-2 shadow-md rounded-md mx-auto"
          type="button" data-modal-toggle="defaultModal">
          <div>
            <img src="https://webenginefe.deveast.scanta.io/trupulse-logo.png" alt="logo" width="80px" />
            <p className="text-sm text-gray-400">For {this.props.companyName}</p>
          </div>
        </button>

        <div id="defaultModal" tabIndex="-1" aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  <img src="https://webenginefe.deveast.scanta.io/trupulse-logo.png" alt="logo" width="100px" />
                </h3>
                <button type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="px-6 pt-4 pb-2 space-y-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-extrabold">
                    Morale Score
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">High: </span>{"67%"}
                </p>
              </div>
              <div className="px-6 pt-4 pb-4 space-y-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-extrabold">
                    Trending Topics
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  appreciation,Compensation, Harrasment, gender equality, promotion, technology, management
                </p>
              </div>
              <div className="px-6 pt-4 pb-4 space-y-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-extrabold">
                    Sentiments
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="mr-4">
                    <span className="font-semibold">Positive: </span>{"72%"}
                  </span>
                  <span className="ml-4">
                    <span className="font-semibold">Negative: </span>{"28%"}
                  </span>
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 space-y-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-extrabold">
                    Emotion
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Joy: </span>{"42%"}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Anger: </span>{"12%"}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Sad: </span>{"0%"}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Fear: </span>{"0%"}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Surprise: </span>{"0%"}
                </p>
              </div>

              {/* <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                  accept</button>
                <button data-modal-toggle="defaultModal" type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
              </div> */}
            </div>
          </div>
        </div>
      </div></>
    );
  }
}
