import React from "react";
import "./reset.css";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./components/layout/dashBoard";
import { Switch, Route } from "react-router-dom";
import WalkList from "./components/layout/walkList";
import CreateAccount from "./components/layout/CreateAccount";
import Menubar from "./components/layout/menubar";
import LogIn from "./components/layout/LogIn";

import Axios from "axios";


class App extends React.Component {
  state = { user: null };

  componentDidMount(){
    this.fetchUser()
  }

  fetchUser = () => {
    Axios.get("/user").then(response => {
      this.setState({ user: response.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Menubar user={this.state.user} />
        {/* <div className ="container"> */}
        <Switch>
          
          <Route path="/Home" component={DashBoard} />
          <Route path="/Walklist" component={WalkList} />
          <Route path="/CreateAccount" component={CreateAccount} />
          <Route path="/LogIn" render={(routerProps) => {
            return <LogIn {...routerProps} fetchUser={this.fetchUser}/>
          }} />
        </Switch>

        {/* </div> */}
      </div>
    );
  }
}

export default App;

//i think i get a lot of this, which is cool.  kinda. YaY meeeee
// log in page how?
//switch stuff
//controller ??
//sql ??(!!)
//select pokemon > add to db > seen in another page > pokemon didstance
//(id like to be able to sue this but im already using an api)
//add delet - add pokemon to walk list -delete pokemon from list
//watch devmnt videos to figure out loginpage switch stuff
