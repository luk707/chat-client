import * as React from "react";
import * as ReactDom from "react-dom";

import "./scss/app.scss";

ReactDom.render(
    <div>
        <h1>Hello World</h1>
        <p>TODO: Implement a chat client.</p>
    </div>,
    document.getElementById("app")
);