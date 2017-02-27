import * as React from "react";

export interface IconProps {
    id: String;
}

export class Icon extends React.Component<IconProps, {}> {
    render() {
        return (
            <i className={["material-icons"].join(" ")}>{this.props.id}</i>
        );
    }
}