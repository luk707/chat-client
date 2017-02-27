import * as React from "react";
import * as ReactDom from "react-dom";

import "./scss/app.scss";

import { Navbar } from "./components/navbar";
import { TestRoute } from "./routes/testRoute";


ReactDom.render(
    <div className="row">
        <Navbar items={{
            top: [
                {
                    label: "User",
                    icon: "face"
                },
                {
                    label: "Channels",
                    icon: "comment"
                },
                {
                    label: "Direct Messages",
                    icon: "inbox"
                }
            ],
            bottom: [
                {
                    label: "Info",
                    icon: "info"
                },
                {
                    label: "Settings",
                    icon: "settings"
                }
            ]
        }}/>
        <TestRoute/>
    </div>,
    document.getElementById("app")
);