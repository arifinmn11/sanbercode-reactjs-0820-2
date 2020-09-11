import React from 'react'
import Tugas9 from "../Tugas-9/Tugas9"
import Tugas10 from "../Tugas-10/Tugas10"
import Tugas11 from "../Tugas-11/Tugas11"
import Tugas12 from "../Tugas-12/Tugas12"
import Tugas13 from "../Tugas-13/Tugas13"
import Tugas14 from "../Tugas-14/Fruit"
import Nav from "./Header";
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom"

export default function App() {
    return (
        <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/tugas9" component={Tugas9}/>
                <Route exact path="/tugas10" component={Tugas10}/>
                <Route exact path="/tugas11" component={Tugas11}/>
                <Route exact path="/tugas12" component={Tugas12}/>
                <Route exact path="/tugas13" component={Tugas13}/>
                <Route exact path="/tugas14" component={Tugas14}/>
            </Switch>
        </div>
        </Router>
    );
}
