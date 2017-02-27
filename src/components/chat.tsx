import * as React from "react";

import {User} from "../models/user";

export interface ChatProps {
    recipient: User;
}

export class Chat extends React.Component<ChatProps, {}> {
    render() {
        return (
            <div>
                <h1>{this.props.recipient.name}</h1>
                <p>TODO: Implement a chat client.</p>
            </div>
        );
    }
}