import * as React from "react";
import * as ReactDom from "react-dom";

import { View } from "./components/view";

import "./scss/app.scss";

ReactDom.render(
    <View navbarProps={{
        items: {
            top: [
                {
                    label: "John",
                    faIcon: "user-circle"
                },
                {
                    label: "Jane",
                    faIcon: "user-circle"
                }
            ],
            bottom: [
                {
                    label: "Settings",
                    faIcon: "sliders"
                }
            ]
        }
    }}>
        <h1>Hello World</h1>
        <p>TODO: Implement a chat client.</p>
    </View>,
    document.getElementById("app")
);