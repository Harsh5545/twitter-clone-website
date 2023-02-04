import React from "react";
import style from "./ProfileSection.module.css";
import UserTweet from "./UserTweet/UserTweet";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import { forLocalStorageIndex} from "../../../Recoil/Atom1/Atom"
import { useRecoilValue } from "recoil";


function ProfileSection() {
   const nevigate = useNavigate();
   const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)

  
  let Data = JSON.parse(localStorage.getItem("user"));
  
  //console.log(Data.length)
 
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/") }><WestIcon /></p>
        <h2>{Data[getLocalStorageIndex].Name}</h2>
      </div>
        <img className={style.container} alt="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            alt="img"
            src="https://tinypng.com/images/social/website.jpg"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>
      

      <div key={Data.id} className={style.textcontaint}>
        <h4>{`${"Name:-"}${Data[getLocalStorageIndex].Name}`}</h4>
        <h5>{`${"@"}${Data[getLocalStorageIndex].Email}`}</h5>
        <h5>followers :- 2000</h5>
        <h5>likesCount :- 154 likes</h5>
      </div>
    </div>
    <UserTweet />
   
    </>
  );
}

export default ProfileSection;
