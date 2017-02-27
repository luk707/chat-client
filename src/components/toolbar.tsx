import * as React from "react";

import { Icon } from "../elements/icon";

export interface ToolbarButtonProps {
    icon: String;
    onClick?: () => void;
}

class ToolbarButton extends React.Component<ToolbarButtonProps, {}> {
    render() {
        return (
            <button onClick={this.props.onClick}>
                <Icon id={this.props.icon}/>
            </button>
        );
    }
}

export interface ToolbarProps {
    title: String;
    buttons: {
        left: ToolbarButtonProps[]      
        right: ToolbarButtonProps[]  
    }
}

export class Toolbar extends React.Component<ToolbarProps, {}> {
    render() {
        return (
            <div className={["toolbar"].join(" ")}>
                {this.props.buttons.left.map(button => {
                    return <ToolbarButton {...button} />;
                })}
                <span className={["title"].join(" ")}>
                    {this.props.title}
                </span>
                <div className={["flex"].join(" ")}/>
                {this.props.buttons.right.map(button => {
                    return <ToolbarButton {...button} />;
                })}
            </div>
        );
    }
}