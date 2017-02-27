import * as React from "react";

import mapClasses, { ClassMap } from "./classMap";

export interface IconProps {
    classMap?: ClassMap;
    faIcon?: string;
    url?: string;
}

export class Icon extends React.Component<IconProps, {}> {
    GetClass(): string {
        let classMap: ClassMap = {
            fa: true
        };
        if (this.props.url !== undefined) {
            console.log(this.props.url)
            classMap = {};
        } else if (this.props.faIcon !== undefined) {
            classMap[`fa-${this.props.faIcon}`] = true;
        } else {
            classMap["fa-exclamation-triangle"] = true;
        }
        return mapClasses({
            ...this.props.classMap,
            ...classMap
        });
    }
    render() {
        return this.props.url !== 'undefined' ?
        <i className={this.GetClass()}></i> :
        <img src={this.props.url} className={this.GetClass()}/>;
    }
}