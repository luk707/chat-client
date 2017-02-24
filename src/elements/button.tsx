import * as React from "react";

import mapClasses, { ClassMap } from "./classMap";

export interface ButtonProps {
    classMap?: ClassMap;
    onClick?: () => void;
}

export class Button extends React.Component<ButtonProps, {}> {
    render() {
        return (
            <button onClick={this.props.onClick} className={mapClasses(this.props.classMap)}>
                {this.props.children}
            </button>
        );
    }
}