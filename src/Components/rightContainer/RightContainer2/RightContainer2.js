import React, { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";
import VerifiedIcon from "@mui/icons-material/Verified";

function Righthomebox2() {
  const [show, setShow] = useState(false);

  const [followContainer, setFollowContainer] = useState([
    {
      id: 1,
      tag: <i className="far fa-solid fa-badge-check"></i>,
      src: "https://pbs.twimg.com/profile_images/1134090740592627712/0Fp-U5-p_400x400.png",
      text: "PMO India",
      text2: "@PMOIndia",
    },
    {
      id: 2,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://pbs.twimg.com/profile_images/1604753222463127553/WgzfJ3hV_400x400.jpg",
      text: "Filmfare",
      text2: "@filmfare",
    },
    {
      id: 3,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://pbs.twimg.com/profile_images/1558359360442892290/fmCpGGlP_400x400.jpg",
      text: "Aly Goni",
      text2: "@AlyGoni",
    },
    {
      id: 4,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://pbs.twimg.com/profile_images/1580848906379763712/gUtClRAr_400x400.jpg",
      text: "Alia Bhatt",
      text2: "@aliaa08",
    },
    {
      id: 5,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "mahi",
      text2: "virat@gmail.com",
    },
    {
      id: 6,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "virat@gmail.com",
    },
  ]);
  const [trending, setTrendings] = useState(followContainer.slice(0, 4));
  const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(false);

  const handleClick = (id) => {
    const updatedFollowContainer = followContainer.map((item) => {
      if (item.id === id) {
        item.followed = !item.followed;
      }
      return item;
    });
    setFollowContainer(updatedFollowContainer);
  };

  // handle seeAll request
  function handleRequestSeeAll() {
    setIsShowingAllTrendings(!isShowingAllTrendings);
    if (isShowingAllTrendings) {
      return setTrendings(followContainer.slice(0, 4));
    }
    setTrendings(followContainer);
  }
  return (
    <div className={style.container}>
      <h1>Who to follow</h1>
      <div className={style.main}>
        {trending.map((menu) => {
          return (
            <div className={style.wrapper}>
              <Avatar alt="Remy Sharp" src={menu.src} />
              <div className={style.img}>
                <h3>
                  {menu.text}
                  <span style={{ color: "blue" }}> {menu.tag} </span>
                  <VerifiedIcon style={{ color: "blue", fontSize: "20px" }} />
                </h3>
                <h6>{menu.text2}</h6>
              </div>
              <div className={style.btntxt}>
                <CustomButton
                  buttonText={menu.followed ? "Following" : "Follow"}
                  btnNext={() => handleClick(menu.id)}
                  key={menu.id}
                  customCss={style.follwButton}
                  disabled={menu.followed}
                />
              </div>
            </div>
          );
        })}
        <div className={style.btn2}>
          <CustomButton
            customCss={style.btn2}
            buttonText={isShowingAllTrendings ? "Show Less" : "Show More"}
            btnNext={handleRequestSeeAll}
          />
        </div>
      </div>
    </div>
  );
}

export default Righthomebox2;
