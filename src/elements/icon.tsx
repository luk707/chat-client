import * as React from "react";

import mapClasses, { ClassMap } from "./classMap";

export interface IconProps {
    classMap?: ClassMap;
    faIcon: string;
}

export class Icon extends React.Component<IconProps, {}> {
    GetClass(): string {
        let classMap: ClassMap = {
            fa: true
        };
        classMap[`fa-${this.props.faIcon}`] = true;
        return mapClasses({
            ...this.props.classMap,
            ...classMap
        });
    }
    render() {
        return (
            <i className={this.GetClass()}></i>
        );
    }
}