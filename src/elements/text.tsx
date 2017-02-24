import * as React from "react";

import mapClasses, { ClassMap } from "./classMap";

export interface TextProps {
    classMap?: ClassMap;
    align?: "center";
}

export class Text extends React.Component<TextProps, {}> {
    render() {
        return (
            <span className={mapClasses({
                    ...this.props.classMap,
                    alignCenter: this.props.align == "center"
                })}>
                {this.props.children}
            </span>
        );
    }
}