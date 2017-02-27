import * as React from "react";
import * as ReactDom from "react-dom";

import { Navbar } from "./components/navbar";
import { SplitView } from "./components/splitView";

import "./scss/app.scss";

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
        <SplitView
            state="master"
            masterView={
                <h1>Master</h1>
            }
            detailView={
                <h1>Detail</h1>
            }/>
    </div>,
    document.getElementById("app")
);