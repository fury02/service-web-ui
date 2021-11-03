import React from "react";
import './App.css';
import NTComponent from "./components/NTComponent";
import NBComponent from "./components/NBComponent";
import TIComponent from "./components/TIComponent";
function App() {
    return (
        <div className="App">
            <NTComponent></NTComponent>
            <TIComponent></TIComponent>
            <NBComponent></NBComponent>
        </div>
    );
}

export default App;
