import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UsersContainer from "./components/UsersContainer";
import UserDetails from "./components/UserDetails";
import { BrowserRouter } from "react-router-dom";

export default class UserRoutes extends React.Component {
  render() {
    return (
       <BrowserRouter> 
      <Switch>
        <Route exact path={"/"} component={UsersContainer} />
        <Route exact path={"/userDetails"} component={UserDetails} />
        <Route>
        <Redirect to={UsersContainer}></Redirect>
        </Route>
      </Switch>
      </BrowserRouter> 
    );
  }
}
