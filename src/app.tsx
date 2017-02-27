import * as React from "react";
import * as ReactDom from "react-dom";

import { ChatView } from "./components/chatView";

import "./scss/app.scss";

ReactDom.render(
    <ChatView recipients={[
        { name: "Bill" },
        { name: "Bob" },
        { name: "Ben" }
    ]}/>,
    document.getElementById("app")
);