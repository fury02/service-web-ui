import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./components/HeaderComponent";
import BottomComponent from "./components/BottomComponent";
import ScoreboardComponent from "./components/main/ScoreboardComponent";
import ApiComponent from "./components/quick_start/ApiComponent";
import RoadmapComponent from "./components/futuro/RoadmapComponent";
import IntegrationComponent from "./components/quick_start/IntegrationComponent";
import InformationComponent from "./components/quick_start/InformationComponent";
import ExampleComponent from "./components/quick_start/ExampleComponent";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <HeaderComponent></HeaderComponent>
            <Switch>
                <Route exact path="/" component={App}>
                    <Redirect to="/home"></Redirect>
                </Route>
                <Route path="/home" component={ScoreboardComponent} />
                <Route path="/api" component={ApiComponent} />
                <Route path="/example" component={ExampleComponent} />
                <Route path="/info" component={InformationComponent} />
                <Route path="/integration" component={IntegrationComponent} />
                <Route path="/roadmapalpha" component={RoadmapComponent} />
            </Switch>
            <BottomComponent></BottomComponent>
        </Router>
        <App />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
