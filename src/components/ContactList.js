import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
 
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      /> 
    );
  });
  return (
    <div className="ui very padded text segment main ">
      <h2 className=" ui header ">
        Contact List
        <Link to="/add">
          <button className="ui button blue float-right">Add Contact</button>
        </Link>
      </h2>

      <div className="ui  celled list">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
