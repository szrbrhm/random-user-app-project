import React, { useEffect, useState } from 'react';
import './Card.css';
import LogoMail from '../../media/mail.svg';
import LogoMan from '../../media/man.svg';
import LogoMap from '../../media/map.svg';
import LogoPhone from '../../media/phone.svg';
import LogoLock from '../../media/padlock.svg';
import LogoGrow from '../../media/growing-up-man.svg';
import axios from 'axios';
import { func } from 'prop-types';

const Card = ({item}) => {
    
    const [item1, setItem1] = useState();
    const [newUser, setNewUser] = useState(0);
    const getItem = () => {
      axios.get('https://randomuser.me/api/').then((res) => setItem1(res?.data?.results[0]));
      
    }
    useEffect(() => {
      getItem();
      console.log(newUser)
    },[newUser])


    return (
        <div className="container-main">
            <div>
               <div>
                <img className="image" src={item1?.picture?.medium} alt="" />
            </div>
            <div className="img">
                <img src={LogoMan} alt="" />
                <img src={LogoMail} alt="" />
                <img src={LogoGrow} alt="" />
                <img src={LogoMap} alt="" />
                <img src={LogoPhone} alt="" />
                <img src={LogoLock} alt="" />
            </div>  
            <div className="btn">
                <button onClick={() => setNewUser(newUser + 1)}>NEW USER</button>
                <button>ADD USER</button>
            </div>
            </div>
           
            
        </div>
    )
}

export default Card;
