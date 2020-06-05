import React, { Component } from "react";
import UserImage from "./UserImage"
import "../css/UserCard.css";
export default class Users extends React.Component{
    handleRedirect(){
        if(this.props.handleRedirect){
            this.props.handleRedirect();
        }
    }
    render(){
        let {users}=this.props;
        return(
        <div className={"UserCard-base"}  onClick={() =>
            this.handleRedirect()}>
        <div className={"UserCard-image"}>
            <UserImage
              src={
                users && users.avatar
              }
              alt={"user image"}
            />
          </div>
         
          <div className="UserCard-userInfo">
          <div className="UserCard-name">{users.first_name}{" "}{users.last_name}</div>
          <div className="UserCard-email">{users.email}</div>
          </div>
          <div>
        </div>
    </div>
        )
    }
}