import React from "react";

import style from "./TwitterPost.module.css";

import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Dialog from "@mui/material/Dialog";
import {
  isTweetPost,
  userProfile,
  requestedProfileAtom,
  forPassingId,
} from "../../Recoil/Atom1/Atom";
import { Navigate, useNavigate } from "react-router-dom";
import { tweetPosts } from "../../ConstData/ConstData";
import TweetReply from "../../Atom/TweetReply/TweetReply";

export default function TwitterPost() {
  const [post, setPost] = useState(tweetPosts);
  const nevigate = useNavigate();
  const [countForRender, setCountForRender] = useState(0);
  const [newPost, setNewPost] = useRecoilState(isTweetPost);
  const setId = useSetRecoilState(forPassingId);
  const [indexForD, setIndexForD] = useState();
  const [newProfile, setNewProfile] = useRecoilState(userProfile);
  // const [likesCount, setLikesCount] = useState(1000);
  const [requestedProfile, setRequestedProfile] = useState("");
  const [icon, setIcon] = useState("rgb(77, 75, 75)");
  const [isOpen, SetisOpen] = useState(false);
  const [count, setCount] = useState(0);
  // const setRequestedProfile = useRecoilState(requestedProfileAtom)

  function handleLike(takeLikes) {
    if (post[takeLikes.Index].inrDcr === false) {
      post[takeLikes.Index].likesCount = takeLikes.Data + 1;

      setCountForRender(countForRender + 1);
      post[takeLikes.Index].inrDcr = true;
      post[takeLikes.Index].color = "red";
    }

    //if(post[takeLikes.Index].inrDcr==true)
    else {
      post[takeLikes.Index].likesCount = takeLikes.Data - 1;

      setCountForRender(countForRender + 1);
      post[takeLikes.Index].inrDcr = false;
      post[takeLikes.Index].color = "rgb(60, 60, 60)";
    }
  }

  useEffect(() => {
    fetchData();
  }, [newPost]);

  function fetchData() {
    setPost(tweetPosts);
  }

  function xyz(dataName) {
    setNewProfile(dataName);
    const paramsValue = dataName.handlerName.replace("@", "");
    nevigate(`/profile2/${paramsValue}`);
    setId(dataName.index);
  }
  const handleClose = () => {
    post[indexForD].isOpen = false;
    setCount(count - 1);
  };
  // useEffect(() => {
  //   handleClickOpen;
  // }, [count]);

  const handleClickOpen = (index) => {
    post[index].isOpen = true;

    //console.log(post[index].id)
    // console.log(index)
    setId(index);
    setCount(count + 1);
    setIndexForD(index);
  };

  return (
    <>
      {post.map((data, i) => {
        return (
          <div className={style.wrapper}>
            <div className={style.container1}>
              <div
                // onClick={handleRedirectProfile}
                onClick={() =>
                  xyz({
                    name: data.name,
                    handlerName: data.handlerName,
                    organization: data.organization,
                    tweetText: data.tweetText,
                    tweetPic: data.tweetPic,
                    tweetCount: data.tweetCount,
                    retweetCount: data.retweetCount,
                    likesCount: data.likesCount,
                    viewsCount: data.viewsCount,
                    followers: data.followers,
                    followings: data.followings,
                    tweets: data.tweets,
                    index: i,
                  })
                }
              >
                <Avatar className={style.avatar} src={data.tweetPic} />
              </div>

              <div className={style.innercontainer}>
                <span className={style.text}>
                  <h3>
                    {data.name}
                    <VerifiedIcon style={{ color: "blue" }} />
                  </h3>
                </span>
                <h4>{data.handlerName}</h4>
                <h4>{data.tweetText}</h4>
              </div>
            </div>

            <div className={style.img}>
              {data.tweetPic ? (
                <img
                  style={{
                    width: "30rem",
                    height: "30rem",
                    borderRadius: "15px",
                  }}
                  alt="picture"
                  src={data.tweetPic}
                />
              ) : (
                <></>
              )}
            </div>
            <div className={style.icons}>
              <div className={style.icons}>
                {data.tweetCount}
                <ChatBubbleOutlineIcon onClick={() => handleClickOpen(i)} />
                <div className={style.Dialog}>
                  {console.log(data.isOpen)}
                  <Dialog
                    open={data.isOpen}
                    onClose={handleClose}
                    style={{
                      background: "rgba(91, 112, 131, 0.4)",
                      fontSize: "15px",
                      lineHeight: "40px",
                    }}
                  >
                    <TweetReply />
                  </Dialog>
                </div>
              </div>

              <div className={style.icons}>
                {data.retweetCount}
                <SyncIcon />
              </div>
              <div className={style.icons}>
                <p
                  style={{
                    border: "none",
                    background: "none",
                    color: " rgb(102, 102, 192)",
                  }}
                  onClick={() =>
                    handleLike({ Data: data.likesCount, Index: i })
                  }
                >
                  <FavoriteBorderIcon style={{ color: data.color }} />
                </p>
                {data.likesCount}
              </div>
              <div className={style.icons}>
                {data.viewsCount}
                <PollIcon />
              </div>
              <div>
                <UploadIcon />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
