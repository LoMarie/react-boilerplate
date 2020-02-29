import React from "react"; 
import ReactDom from "react-dom";

function MyInfo() {
    return(
        <div>
            <h1>Laura Marie</h1>
            <p> I love front-end</p>
            <ol>
                <li>California</li>
                <li>Orange County</li>
                <li>Anaheim</li>
            </ol>
        </div>
    )
}

ReactDom.render(<MyInfo />, document.getElementById("root"));