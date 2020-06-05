import React, { Component } from 'react';
import "../css/Users.css";
import UserCard from "./UserCard";
export default class Users extends React.Component{
    constructor(props){
        super(props)
            this.state={
                users: this.props.users
            }
    }
componentDidMount(){
  this.props.getUsers(); 
}
static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.users !== nextProps.users) {
        return {
            users: nextProps.users
        }
    }
    else{
        return null;
    }
}
handleRedirect(userData){
    this.props.history.push({
        pathname: "/userDetails",
        state: {
          userData:userData,
        }
      });
}
render(){
  let {users}=this.state;
    return(
        <div className={"base"}>
            <div className={"wrapper"}>
            {users && users.map((data,i)=>{            
           return (
             <UserCard key={i} users={data} handleRedirect={()=>{this.handleRedirect(data)}}/>
           )})}
            </div>
        </div>
    )
}
}