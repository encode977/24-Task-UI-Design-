import { Avatar } from "@material-ui/core";
import React from "react";
import "./Profile.css";

function Profile({ title, salary, avatar }) {
  return (
    <div className="container">
      <div className="profile">
        <div className="profile__user">
          <Avatar src={avatar} />
          <div className="user__details">
            <h3 className="user__title">
              {title}(${salary})
            </h3>
          </div>
        </div>
        <div className="profile__btn">
          <button className="btn__action btn__chat">Chat</button>
          <button className="btn__action btn__hire">Hire me</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
