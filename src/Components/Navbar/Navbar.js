import React from "react";
import style from "./Navbar.module.css";
import { FaTwitter } from "react-icons/fa";
import { Avatar } from "@mui/material";
function Navbar() {
  return (
    <>
      <div className={style.feed__header}>
        <h2>Home</h2>
        <div className={style.mobicon}>
        <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU"
                />

        <FaTwitter className={style.logo} />
</div>
        
        <div className={style.innercontainer}>
        <h3>For you</h3>
        <h3>Following</h3>
      </div>
      </div>
    </>
  );
}
export default Navbar;
