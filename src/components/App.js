import React from "react";
import "./App.css";
import Reader from "./Reader";

import publications from "./publications.json";

function App() {
    return (
        <div className="App">
            <Reader items={publications} />
        </div>
    );
}

export default App;
