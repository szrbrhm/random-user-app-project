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
// import { func } from "prop-types";

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


function showText(txt) {
    document.querySelector(txt).style.visibility="visible";
}

//hide text
function hideText(txt) {
    document.querySelector(txt).style.visibility="hidden";
}


  const addUser = () => {
    document.querySelector("tbody").innerHTML += `
    <td>${item1.name?.first}</td> 
    <td>${item1.email}</td> 
    <td>${item1?.phone}</td> 
    <td>${item1.dob?.age}</td>
    `;
    document.querySelector("table").style.display = "inline";
  };

  return (
    <div className="container-main">
      <div> 
          <img className="image" src={item1?.picture?.medium} alt=""/>
        <div className="text-container">
          <p className="text name">
            My name is <br />
            <span>{item1?.name?.first}</span>
          </p>
          <p className="text mail">
            My email is <br />
            <span>{item1?.email}</span>
          </p>
          <p className="text age">
            My age is <br />
            <span>{item1?.dob?.age}</span>
          </p>
          <p className="text city">
            My city is <br />
            <span>{item1?.location?.city}</span>
          </p>
          <p className="text phone">
            My phone is <br />
            <span>{item1?.phone}</span>
          </p>
          <p className="text password">
            My password is <br />
            <span>{item1?.login?.password}</span>
          </p>
        </div>

        <div className="img">
          {item1?.gender === "male" ? (
            <img className="icon" src={LogoMan} alt="" onMouseOver={() => showText(".name")} onMouseOut={() => hideText(".name")}/>
          ) : (
            <img className="icon" src={LogoWoman} alt="" onMouseOver={() => showText(".name")} onMouseOut={() => hideText(".name")} />
          )}
          <img className="icon" src={LogoMail} alt="" onMouseOver={() => showText(".mail")} onMouseOut={() => hideText(".mail")}/>
          {item1?.gender === "male" ? (
            <img className="icon" src={LogoGrow} alt="" onMouseOver={() => showText(".age")} onMouseOut={() => hideText(".age")}/>
          ) : (
            <img className="icon" src={LogoGrowWoman} alt="" onMouseOver={() => showText(".age")} onMouseOut={() => hideText(".age")}/>
          )}

          <img className="icon" src={LogoMap} alt="" onMouseOver={() => showText(".city")} onMouseOut={() => hideText(".city")}/>
          <img className="icon" src={LogoPhone} alt="" onMouseOver={() => showText(".phone")} onMouseOut={() => hideText(".phone")} />
          <img className="icon" src={LogoLock} alt="" onMouseOver={() => showText(".password")} onMouseOut={() => hideText(".password")}/>
        </div>
        <div className="btn">
          <button onClick={() => setNewUser(newUser + 1)}>NEW USER</button>
          <button onClick={() => addUser()}>ADD USER</button>
        </div>
        <div className="user-group">
          <table className="user-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
