import * as React from "react";

import {Chat} from "./chat";
import {View} from "./view";
import {User} from "../models/user";

export interface ChatViewState {
    recipient: User;
}

export interface ChatViewProps {
    recipients: User[];
}

export class ChatView extends React.Component<ChatViewProps, ChatViewState> {
    
    constructor(props: ChatViewProps) {
        super(props);
        this.state = {
            recipient: this.props.recipients.length > 0 ? this.props.recipients[0] : null
        };
    }
    
    render() {
        return (
            <View navbarProps={{
                items: {
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
                }
            }}>
                {this.props.recipients.length > 0 ? 
                <Chat recipient={this.state.recipient}/>
                :
                <div>
                    <h1>You have no friends.</h1>
                </div>}
                
            </View>
        );
    }
}