import React from "react";
import avatar5 from '../images/avatar5.png';
const CardContact = (props) => {
    const {id,name,email} = props.contact;
  return (
    <div className="item">
        <img className="ui avatar image" src={avatar5} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div> {email}</div>
      </div>
      <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px",float:"right"}}></i>
    </div>
  );
};
export default CardContact;
