import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { first_name, avatar, last_name, email } }) => {
  return (
    <div className="users-item">
      <div className="heading">{`${first_name} ${last_name}`}</div>
      <div className="image">
        <img src={avatar} alt="pic" className="circle-img" />
      </div>

      <div>{email}</div>
    </div>
  );
};

UserItem.protoTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
