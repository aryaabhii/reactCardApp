import React from "react";
import Card from "./components/Card";
import Cdata from "./array/Cdata";

const App = () => (
    <>
        <h1 className="main_head">Card Example using React with Components, array, and map method</h1>
        {Cdata.map((val, index) => {
            return (
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    sname={val.sname}
                    title={val.title}
                    link={val.link}
                />
            );
        })}
    </>
);

export default App;