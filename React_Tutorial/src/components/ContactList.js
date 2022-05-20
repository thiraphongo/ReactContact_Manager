import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="ui main item">
      <h2>
        Contact List
        <Link to="/add">
          {/* <button className="ui button blue right">Add Contact</button> */}
          <Fab className="right" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
