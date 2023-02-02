import React from "react";
import { useState } from "react";
import style from "./Trends.module.css";

import Dialog2 from "../../Dialog2/Dialog2";
import CustomButton from "../../../Atom/Button/CustomButton";

const Trends = () => {
  const [isNotIntrested, setIsNotIntrested] = useState([
    {
      id: 1,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#pathanBoxOffice",
      totalKeywords: "8000k Tweets",
    },
    {
      id: 2,
      isNotIntrested: false,
      country: "Business & Finance",
      keyword: "#AdaniGroups",
      totalKeywords: "6000k Tweets",
    },
    {
      id: 3,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#EconomicSurvey",
      totalKeywords: "2560k Tweets",
    },
    {
      id: 4,
      isNotIntrested: true,
      country: "Trending in India",
      keyword: "#परमवीर चक्र",
      totalKeywords: "2000k Tweets",
    },
    {
      id: 5,
      isNotIntrested: false,
      country: "Trending in uk",
      keyword: "#Nifty50",
      totalKeywords: "5,109 Tweets",
    },
  ]);
  const [selectedId, setSelectedId] = useState(null);
  const [trending, setTrendings] = useState(isNotIntrested.slice(0, 2));
  const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(false);
  const updateId = (id) => {
    setSelectedId(id);
    const tempArr = isNotIntrested.map((item) => {
      if (item.id === id) {
        return { ...item, isNotIntrested: true };
      }
      return item;
    });
    setIsNotIntrested(tempArr);
  };

  const HandleClick = () => {
    const tempArr = [];
    trending.forEach((el) => {
      if (el.id !== selectedId) {
        tempArr.push(el);
      }
    });
    setTrendings(tempArr);
  };
  function handleRequestSeeAll() {
    setIsShowingAllTrendings(!isShowingAllTrendings);
    if (isShowingAllTrendings) {
      return setTrendings(isNotIntrested.slice(0, 2));
    }
    setTrendings(isNotIntrested);
  }

  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div>
          <div className={style.keyword__heading}>
            <h4 className={style.heading4}>What's happening</h4>
          </div>
          {trending.map((keyword) => {
            return (
              <div
                className={style.container}
                onClick={() => {
                  updateId(keyword.id);
                }}
              >
                <div key={keyword.id}>
                  <div className={style.country}>{keyword.country}</div>
                  <div className={style.keyword__name}>
                    <strong>{keyword.keyword}</strong>
                  </div>
                  <div className={style.keyword__tweets}>
                    {keyword.totalKeywords}
                  </div>
                </div>
                <div className={style.btn}>
                  <Dialog2 onClick={HandleClick} />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <CustomButton
            customCss={style.btn2}
            buttonText={isShowingAllTrendings ? "Show Less" : "Show More"}
            btnNext={handleRequestSeeAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Trends;
