import React from "react";
import { ReactDOM } from "react";


// const header = React.createElement(
//     "h1",
//     {},
//     "this is written using react"
//   );
//   console.log("header-->", header);

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   console.log("root-->", root);

//   //   render converts object into html tag
//   root.render(header);


const CompoOne = () => {
    return(
        <div>
            <h>hello i am CompoOne</h>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CompoOne/>)
