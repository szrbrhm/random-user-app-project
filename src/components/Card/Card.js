import React, { useEffect, useState } from "react";
import "./Card.css";
import LogoMail from "../../media/mail.svg";
import LogoMan from "../../media/man.svg";
import LogoMap from "../../media/map.svg";
import LogoPhone from "../../media/phone.svg";
import LogoLock from "../../media/padlock.svg";
import LogoGrow from "../../media/growing-up-man.svg";
import LogoGrowWoman from "../../media/growing-up-woman.svg";
import LogoWoman from "../../media/woman.svg";
import axios from "axios";
import { func } from "prop-types";

const Card = ({ item }) => {
  const [item1, setItem1] = useState();
  const [newUser, setNewUser] = useState(0);
  const getItem = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setItem1(res?.data?.results[0]));
  };
  useEffect(() => {
    getItem();
    console.log(newUser);
  }, [newUser]);

  return (
    <div className="container-main">
      <div>
        <div>
        <img className="image" src={item1?.picture?.medium} alt="" />
        <p className="text name">My name is <br /><span></span></p>
        <p className="text mail">My email is <br /><span></span></p>
        <p className="text age">My age is <br /><span></span></p>
        <p className="text city">My city is <br /><span></span></p>
        <p className="text phone">My phone is <br /><span></span></p>
        <p className="text password">My password is <br /><span></span></p>
        </div>

        <div className="img">
          {item1?.gender === "male" ? (
            <img src={LogoMan} alt="" />
          ) : (
            <img src={LogoWoman} alt="" />
          )}
          <img src={LogoMail} alt="" />
          {item1?.gender === "male" ? (
            <img src={LogoGrow} alt="" />
          ) : (
            <img src={LogoGrowWoman} alt="" />
          )}

          <img src={LogoMap} alt="" />
          <img src={LogoPhone} alt="" />
          <img src={LogoLock} alt="" />
        </div>
        <div className="btn">
          <button onClick={() => setNewUser(newUser + 1)}>NEW USER</button>
          <button>ADD USER</button>
        </div>
        <div className="user-group">
            <table>
                <thead>
                    
                </thead>
            </table>

        </div>
      </div>
    </div>
  );
};

export default Card;
