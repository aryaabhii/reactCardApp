import React from "react";
import Card from "./components/Card";
import "./index.css";
import Cdata from "./array/Cdata";


function App() {
    return (
        <>
            <h1 className="main_head">Card Example using React with Components, array, and map method</h1>
            {Cdata.map((val) => {
                return (
                    <Card
                        imgsrc={val.imgsrc}
                        sname={val.sname}
                        title={val.title}
                        link={val.link}
                    />
                );
            })}
        </>
    );
}

export default App;