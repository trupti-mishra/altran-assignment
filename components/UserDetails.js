import React, { Component } from 'react';
import "../css/UserDetails.css";
import Users from "./Users";
import UserImage from "./UserImage";
export default class UserDetails extends React.Component{
    render(){
        let userData=this.props.history && this.props.history.location&&
         this.props.history.location.state&& this.props.history.location.state.userData;
        return(
            <div className={"UserDetails-base"}>
            <div className={"UserDetails-wrapper"}>
            <div className={"UserDetails-user"}>
            <div className={"UserDetails-image"}>
            <UserImage
              src={
                userData && userData.avatar
              }
              alt={"user image"}
            />
          </div>
          <div className={"UserDetails-userInfo"}>
            <div className={"UserDetails-name"}>{userData.first_name}{" "}{userData.last_name}</div>
            <div className={"UserDetails-email"}><a href={`mailto:${userData.email}`}>{userData.email}</a></div>
         </div>
            </div>
            </div>
            </div>
        )
    }
}