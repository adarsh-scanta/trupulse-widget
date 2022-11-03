import React, { useState, useEffect } from "react";
import axios from "axios";
import Gauge from "./Gauge";
import MoraleTrend from "./MoraleTrend";
import SentimentScore from "./SentimentScore";
import SentimentTrend from "./SentimentTrend";
import ProgressBar from "@ramonak/react-progress-bar";
import "./App.css";

function App({ companyName }) {
  const [token, setToken] = useState("");
  const [moraleScore, setMoraleScore] = useState(0);
  const [moraleTrend, setMoraleTrend] = useState([]);
  const [sentimentsDist, setSentimentsDist] = useState({
    positive: 0,
    negative: 0,
  });
  const [sentimentTrend, setSentimentTrend] = useState({});
  const [joy, setJoy] = useState(0);
  const [anger, setAnger] = useState(0);
  const [fear, setFear] = useState(0);
  const [sadness, setSadness] = useState(0);
  const [surprise, setSurprise] = useState(0);

  const login = async () => {
    const loginRes = await axios
      .post("https://webengine.deveast.scanta.io/login", {
        email: "adarsh@scanta.io",
        password: "adarsh",
      })
      .catch((res) => {
        setToken("");
        return false;
      });
    setToken(loginRes.data.token);
  };

  const getMorale = async () => {
    const moraleRes = await axios
      .post(
        "https://webengine.deveast.scanta.io/getMoraleScores",
        {
          demography: "Gender",
          workflowID: "overall",
        },
        {
          timeout: 200000,
          headers: {
            "Access-Control-Allow-Headers": "x-access-token",
            "x-access-token": token,
          },
        }
      )
      .catch((res) => {});
    setMoraleScore(moraleRes.data.highMorale);
    setMoraleTrend(moraleRes.data.moraleScoreAvg);
  };

  const getSentimentDist = async () => {
    const sentimentRes = await axios
      .post(
        "https://webengine.deveast.scanta.io/getSentimentDistribution",
        {
          demography: "Gender",
          endDate: "",
          startDate: "",
          timeOption: "all",
          workflowID: "overall",
        },
        {
          timeout: 200000,
          headers: {
            "Access-Control-Allow-Headers": "x-access-token",
            "x-access-token": token,
          },
        }
      )
      .catch((res) => {});
    setSentimentsDist({
      positive: sentimentRes.data.percent_positive,
      negative: sentimentRes.data.percent_negative,
    });
  };

  const getSentimentTrend = async () => {
    const sentimentRes = await axios
      .post(
        "https://webengine.deveast.scanta.io/convAnalytics",
        {
          demography: "Gender",
          endDate: "",
          startDate: "",
          timeOption: "all",
          workflowID: "overall",
        },
        {
          timeout: 200000,
          headers: {
            "Access-Control-Allow-Headers": "x-access-token",
            "x-access-token": token,
          },
        }
      )
      .catch((res) => {});
    setSentimentTrend(sentimentRes.data);
  };

  const getEmotions = async () => {
    const joyRes = await axios
      .post(
        "https://webengine.deveast.scanta.io/emotionAnalysis",
        {
          channel: "all",
          demography: null,
          emotion: "joy",
          gender: null,
          term: "",
          timeOption: "all",
          workflowID: "overall",
        },
        {
          timeout: 200000,
          headers: {
            "Access-Control-Allow-Headers": "x-access-token",
            "x-access-token": token,
          },
        }
      )
      .catch((res) => {});
    setJoy(joyRes.data.emotionPercenatge.Emotion);

    const angerRes = await axios
      .post(
        "https://webengine.deveast.scanta.io/emotionAnalysis",
        {
          channel: "all",
          demography: null,
          emotion: "anger",
          gender: null,
          term: "",
          timeOption: "all",
          workflowID: "overall",
        },
        {
          timeout: 200000,
          headers: {
            "Access-Control-Allow-Headers": "x-access-token",
            "x-access-token": token,
          },
        }
      )
      .catch((res) => {});
    setAnger(angerRes.data.emotionPercenatge.Emotion);

    const fearRes = await axios
      .post(
        "https://webengine.deveast.scanta.io/emotionAnalysis",
        {
          channel: "all",
          demography: null,
          emotion: "fear",
          gender: null,
          term: "",
          timeOption: "all",
          workflowID: "overall",
        },
        {
          timeout: 200000,
          headers: {
            "Access-Control-Allow-Headers": "x-access-token",
            "x-access-token": token,
          },
        }
      )
      .catch((res) => {});
    setFear(fearRes.data.emotionPercenatge.Emotion);

    const sadnessRes = await axios
      .post(
        "https://webengine.deveast.scanta.io/emotionAnalysis",
        {
          channel: "all",
          demography: null,
          emotion: "sad",
          gender: null,
          term: "",
          timeOption: "all",
          workflowID: "overall",
        },
        {
          timeout: 200000,
          headers: {
            "Access-Control-Allow-Headers": "x-access-token",
            "x-access-token": token,
          },
        }
      )
      .catch((res) => {});
    setSadness(sadnessRes.data.emotionPercenatge.Emotion);

    const surpriseRes = await axios
      .post(
        "https://webengine.deveast.scanta.io/emotionAnalysis",
        {
          channel: "all",
          demography: null,
          emotion: "surprise",
          gender: null,
          term: "",
          timeOption: "all",
          workflowID: "overall",
        },
        {
          timeout: 200000,
          headers: {
            "Access-Control-Allow-Headers": "x-access-token",
            "x-access-token": token,
          },
        }
      )
      .catch((res) => {});
    setSurprise(surpriseRes.data.emotionPercenatge.Emotion);
  };

  useEffect(() => {
    login();
  }, []);

  const handleOpen = () => {
    getMorale();
    getSentimentDist();
    getSentimentTrend();
    getEmotions();
  };
  return (
    <>
      {console.log(
        "joy",
        joy,
        "anger",
        anger,
        "fear",
        fear,
        "sadness",
        sadness,
        "surprise",
        surprise
      )}
      <div>
        <button
          className="block px-10 p-2 shadow-md rounded-md mx-auto"
          type="button"
          data-modal-toggle="defaultModal"
          onClick={handleOpen}
        >
          <div>
            <img
              src="https://webenginefe.deveast.scanta.io/trupulse-logo.png"
              alt="logo"
              width="80px"
            />
            <p className="text-sm text-gray-400">For {companyName}</p>
          </div>
        </button>
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="hidden  overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal "
        >
          <div className="relative p-4 w-full max-w-2xl h-full ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  <img
                    src="https://webenginefe.deveast.scanta.io/trupulse-logo.png"
                    alt="logo"
                    width="100px"
                  />
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="px-6 pt-4 pb-2 space-y-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-extrabold text-left">Morale</span>
                </p>

                <Gauge value={moraleScore} />

                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-left">Trend Line </span>
                </p>
                <div className="max-h-3">
                  <MoraleTrend data={moraleTrend} />
                </div>
              </div>
              <div className="px-6 pt-4 pb-4 space-y-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-extrabold text-left">
                    Trending Topics
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  appreciation,Compensation, Harrasment, gender equality,
                  promotion, technology, management
                </p>
              </div>
              <div className="px-6 pt-4 pb-4 space-y-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-extrabold text-left">Sentiments</span>
                </p>
                <SentimentScore data={sentimentsDist} />
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mt-2">
                  <span className="font-semibold text-left">Trend Line </span>
                </p>
                <SentimentTrend data={sentimentTrend} />
              </div>
              <div className="px-6 pt-4 pb-2 space-y-2">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-extrabold">Emotions</span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Joy: </span>
                  <span>
                    <ProgressBar
                      completed={joy}
                      className="emo-progress-wrapper"
                      labelClassName="emo-progress-label"
                      baseBgColor={"#f6f7fc"}
                      labelColor={"#6E7C84"}
                    />
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Anger: </span>
                  <span>
                    <ProgressBar
                      completed={anger}
                      className="emo-progress-wrapper"
                      labelClassName="emo-progress-label"
                      baseBgColor={"#f6f7fc"}
                      labelColor={"#6E7C84"}
                    />
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Sad: </span>
                  <span>
                    <ProgressBar
                      completed={sadness}
                      className="emo-progress-wrapper"
                      labelClassName="emo-progress-label"
                      baseBgColor={"#f6f7fc"}
                      labelColor={"#6E7C84"}
                    />
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Fear: </span>
                  <span>
                    <ProgressBar
                      completed={fear}
                      className="emo-progress-wrapper"
                      labelClassName="emo-progress-label"
                      baseBgColor={"#f6f7fc"}
                      labelColor={"#6E7C84"}
                    />
                  </span>
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Surprise: </span>
                  <span>
                    <ProgressBar
                      completed={surprise}
                      className="emo-progress-wrapper"
                      labelClassName="emo-progress-label"
                      baseBgColor={"#f6f7fc"}
                      labelColor={"#6E7C84"}
                    />
                  </span>
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
      </div>
    </>
  );
}

export default App;
