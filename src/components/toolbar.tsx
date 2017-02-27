import * as React from "react";

export interface ToolbarButton {
    faIcon: String;
    onClick?: () => void;
}

export interface ToolbarProps {
    title: String;
    buttons: {
        left: ToolbarButton[]      
        right: ToolbarButton[]  
    }
}

export class Toolbar extends React.Component<ToolbarProps, {}> {
    render() {
        return (
            <div className={["toolbar"].join(" ")}>
                {this.props.buttons.left.map(button => {
                    return (
                        <button onClick={button.onClick}>
                            <i className={["fa", `fa-${button.faIcon}`].join(" ")}></i>
                        </button>
                    );
                })}
                <div className={["flex"].join(" ")}/>
                <span className={["title"].join(" ")}>
                    {this.props.title}
                </span>
                <div className={["flex"].join(" ")}/>
                {this.props.buttons.right.map(button => {
                    return (
                        <button onClick={button.onClick}>
                            <i className={["fa", `fa-${button.faIcon}`].join(" ")}></i>
                        </button>
                    );
                })}
            </div>
        );
    }
}