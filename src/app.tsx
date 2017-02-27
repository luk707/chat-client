import * as React from "react";
import * as ReactDom from "react-dom";

import { Navbar } from "./components/navbar";
import { TestRoute } from "./routes/testRoute";

import "./scss/app.scss";

var view : "master" | "detail" | "both" = "master";

ReactDom.render(
    <div className="row">
        <Navbar items={{
            top: [
                {
                    label: "User",
                    faIcon: "user"
                },
                {
                    label: "Channels",
                    faIcon: "comments"
                },
                {
                    label: "Direct Messages",
                    faIcon: "inbox"
                }
            ],
            bottom: [
                {
                    label: "Info",
                    faIcon: "info-circle"
                },
                {
                    label: "Settings",
                    faIcon: "sliders"
                }
            ]
        }}/>
        <TestRoute/>
    </div>,
    document.getElementById("app")
);