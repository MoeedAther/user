/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route } from "react-router-dom";


import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";


//User Imports
import Main1 from "./components/layout/Main";
import Home from "./pages/Home";
import UserLogin from "./pages/user_login";
import UserRegisteration from "./pages/user_registeration";
import Deposit from "./pages/deposit";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";


//Vendor Imports
import Main2 from "./components2/layout/Main"
import vHome from "./pages2/vHome.js";
import vAddproduct from "./pages2/vAddproduct";
import vProducts from "./pages2/vProducts"
import vBilling from "./pages2/vBilling.js";
import vTables from "./pages2/vTables.js";



import { useSelector } from "react-redux";

function App() {
  const accswitch = useSelector((state) => state.userdata.accswitch)
  if (accswitch == "user") {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={UserLogin} />
          <Route path="/user-signup" exact component={UserRegisteration} />
          <Main1>
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/deposit" component={Deposit} />
            {/* <Redirect from="*" to="/" /> */}
          </Main1>
        </Switch>
      </div>
    );
  } else {
    return (
      <Switch>
        <Route path="/" exact component={UserLogin} />
        <Route path="/user-signup" exact component={UserRegisteration} />
        <Main2>
          <Route exact path="/dashboard" component={vHome} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={vBilling} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/Addproduct" component={vAddproduct} />
          <Route exact path="/Products" component={vProducts} />
          <Route exact path="/deposit" component={Deposit} />
        </Main2>
      </Switch>
    );
  }
}

export default App;
